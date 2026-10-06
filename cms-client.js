/*
 * Public CMS delivery client. Landing preview tokens are never used here.
 * Hebrew /lp/* uses landing-page delivery. Product routes use /api/public/products.
 */
(function (window) {
  "use strict";

  var LOCAL_CMS = "http://localhost:3000";
  var PRODUCTION_CMS = "https://cms.tamir-kodner.com";
  var TIMEOUT_MS = 4000;
  var HEBREW_CHAR = /[\u0590-\u05FF]/;
  var HEBREW_LANDING_PATHS = {
    "/lp/professional-liability": true,
    "/lp/cyber-insurance": true,
    "/lp/insurance-agents": true,
  };
  var PRODUCT_PATH = /^\/[a-z0-9-]+-insurance$/;
  var STANDARD_PAGE_TYPES = {
    "/about-us": "standard",
    "/business-insurance": "business",
    "/claims": "claims",
    "/insurance-agents": "agents",
  };
  var STANDARD_HERO_PATHS = {
    "/business-insurance": true,
    "/claims": true,
    "/insurance-agents": true,
  };

  function isLocalHost(hostname) {
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
  }

  function cmsBase() {
    var hostname = window.location && window.location.hostname;
    var localPage = isLocalHost(hostname);
    var configured = String(window.COOPER_NINVE_CMS_URL || "").replace(/\/$/, "");
    if (configured) {
      if (!localPage && /localhost|127\.0\.0\.1|\[::1\]/i.test(configured)) {
        return PRODUCTION_CMS;
      }
      return configured;
    }
    if (localPage) return LOCAL_CMS;
    return PRODUCTION_CMS;
  }

  function resolveCmsUrl(url) {
    var raw = String(url || "").trim();
    if (!raw) return "";
    if (raw.charAt(0) === "/") return cmsBase() + raw;
    return raw;
  }

  function containsHebrew(value) {
    return HEBREW_CHAR.test(String(value || ""));
  }

  function looksEnglish(value) {
    var raw = String(value || "").trim();
    return Boolean(raw) && !containsHebrew(raw);
  }

  function pathToSlug(path) {
    return String(path || "")
      .replace(/^\/+/, "")
      .replace(/\//g, "-");
  }

  function isHebrewLandingPath(path) {
    var match = String(path || "").match(/^\/lp\/[a-z0-9-]+/i);
    return Boolean(match && HEBREW_LANDING_PATHS[match[0]]);
  }

  function isProductPath(path) {
    return PRODUCT_PATH.test(String(path || "")) && !STANDARD_PAGE_TYPES[path];
  }

  function isPublicSafe(data) {
    return Boolean(
      data &&
        typeof data === "object" &&
        !("reviewNotes" in data) &&
        !("landingInternalNotes" in data) &&
        !("reviewStatus" in data) &&
        !("status" in data) &&
        !("_status" in data)
    );
  }

  function hasHeading(data) {
    var landing = data && data.landingPage;
    var hero = landing && landing.hero;
    return Boolean(
      (hero && typeof hero.heading === "string" && hero.heading.trim()) ||
        (data && typeof data.publicTitle === "string" && data.publicTitle.trim())
    );
  }

  function isHebrewLandingPayload(data) {
    return Boolean(
      isPublicSafe(data) &&
        data.pageType === "landing" &&
        typeof data.slug === "string" &&
        data.slug &&
        data.language === "hebrew" &&
        data.landingPage &&
        typeof data.landingPage === "object" &&
        data.seo &&
        typeof data.seo === "object" &&
        hasHeading(data)
    );
  }

  function isProductPayload(data, language) {
    return Boolean(
      isPublicSafe(data) &&
        data.pageType === "product" &&
        typeof data.slug === "string" &&
        data.slug &&
        data.language === language &&
        data.seo &&
        typeof data.seo === "object" &&
        (String(data.productName || "").trim() || String(data.shortDescription || "").trim())
    );
  }

  function fetchJson(url) {
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = window.setTimeout(function () {
      if (controller) controller.abort();
    }, TIMEOUT_MS);

    return fetch(url, {
      method: "GET",
      credentials: "omit",
      signal: controller ? controller.signal : undefined,
    })
      .then(function (response) {
        if (!response.ok) return null;
        return response.json();
      })
      .catch(function () {
        return null;
      })
      .then(function (data) {
        window.clearTimeout(timer);
        return data;
      });
  }

  function fetchLandingPage(options) {
    var path = options && options.path;
    if (!isHebrewLandingPath(path)) return Promise.resolve(null);

    var match = String(path || "").match(/^\/lp\/[a-z0-9-]+/i);
    var slug = pathToSlug(match ? match[0] : path);
    var url =
      cmsBase() +
      "/api/public/landing-pages?slug=" +
      encodeURIComponent(slug) +
      "&language=hebrew";

    return fetchJson(url).then(function (data) {
      return isHebrewLandingPayload(data) ? data : null;
    });
  }

  function isNavigationPayload(data) {
    return Boolean(
      isPublicSafe(data) &&
        Array.isArray(data.headerNavigationItems) &&
        Array.isArray(data.footerNavigationItems) &&
        Array.isArray(data.footerNavigationGroups) &&
        Array.isArray(data.productMenuGroups)
    );
  }

  function isSiteSettingsPayload(data) {
    return Boolean(
      isPublicSafe(data) &&
        typeof data === "object" &&
        ("hebrewSiteName" in data || "englishSiteName" in data || "phone" in data || "contactEmail" in data || "mainLogo" in data)
    );
  }

  function fetchNavigation() {
    return fetchJson(cmsBase() + "/api/public/navigation").then(function (data) {
      return isNavigationPayload(data) ? data : null;
    });
  }

  function fetchSiteSettings() {
    return fetchJson(cmsBase() + "/api/public/site-settings").then(function (data) {
      return isSiteSettingsPayload(data) ? data : null;
    });
  }

  function fetchChrome() {
    return Promise.all([fetchNavigation(), fetchSiteSettings()]).then(function (parts) {
      var navigation = parts[0];
      var siteSettings = parts[1];
      if (!navigation || !siteSettings) return null;
      return { navigation: navigation, siteSettings: siteSettings };
    });
  }

  function isHomepagePayload(data, language) {
    var seo = data && data.seo;
    return Boolean(
      isPublicSafe(data) &&
        data.pageType === "homepage" &&
        data.language === language &&
        typeof data.slug === "string" &&
        data.slug === "home" &&
        seo &&
        typeof seo === "object"
    );
  }

  function fetchHomepage(options) {
    var language = options && options.language === "english" ? "english" : "hebrew";
    if (language !== "hebrew") return Promise.resolve(null);

    var url =
      cmsBase() +
      "/api/public/pages?slug=home&language=" +
      encodeURIComponent(language);

    return fetchJson(url).then(function (data) {
      return isHomepagePayload(data, language) ? data : null;
    });
  }

  function isStandardPagePath(path) {
    return Boolean(STANDARD_PAGE_TYPES[path]);
  }

  function isStandardPagePayload(data, language, path) {
    var expectedType = STANDARD_PAGE_TYPES[path];
    var seo = data && data.seo;
    return Boolean(
      expectedType &&
        isPublicSafe(data) &&
        data.pageType === expectedType &&
        data.language === language &&
        typeof data.slug === "string" &&
        data.slug === String(path || "").replace(/^\//, "") &&
        seo &&
        typeof seo === "object"
    );
  }

  function fetchStandardPage(options) {
    var path = options && options.path;
    var language = options && options.language === "english" ? "english" : "hebrew";
    if (language !== "hebrew" || !isStandardPagePath(path)) return Promise.resolve(null);

    var slug = String(path).replace(/^\//, "");
    var url =
      cmsBase() +
      "/api/public/pages?slug=" +
      encodeURIComponent(slug) +
      "&language=" +
      encodeURIComponent(language);

    return fetchJson(url).then(function (data) {
      return isStandardPagePayload(data, language, path) ? data : null;
    });
  }

  function hebrewOrFallback(value, fallback) {
    var raw = String(value || "").trim();
    if (!raw || !containsHebrew(raw)) return fallback;
    return raw;
  }

  function mergeStandardPage(staticPage, cms, path) {
    if (!staticPage || !cms || cms.language !== "hebrew") return staticPage;
    var seo = cms.seo || {};
    var title = hebrewOrFallback(seo.metaTitle, staticPage.title);
    var description = hebrewOrFallback(seo.metaDescription, staticPage.description);
    var next = Object.assign({}, staticPage, {
      cmsSeo: seo,
      description: description,
      title: title,
    });
    if (!STANDARD_HERO_PATHS[path]) return next;

    var hero = cms.hero || {};
    next.h1 = hebrewOrFallback(hero.heading, staticPage.h1);
    next.lead = hebrewOrFallback(hero.subheading, staticPage.lead);
    next.primary = ctaPair(hero.primaryCTA, staticPage.primary);
    if (next.primary[0] && !containsHebrew(next.primary[0])) next.primary = staticPage.primary;
    next.secondary = ctaPair(hero.secondaryCTA, staticPage.secondary);
    if (next.secondary[0] && !containsHebrew(next.secondary[0])) next.secondary = staticPage.secondary;
    return next;
  }

  function homepagePartnerLogos(cms) {
    var block = cms && cms.partnerLogos;
    var items = block && Array.isArray(block.partners) ? block.partners : [];
    var next = items
      .map(function (item) {
        var logo = item && item.logo;
        var src = logo && logo.url ? resolveCmsUrl(logo.url) : "";
        if (!src) return null;
        return {
          alt: String((item && (item.alt || item.name)) || "").trim(),
          height: typeof logo.height === "number" ? logo.height : undefined,
          src: src,
          width: typeof logo.width === "number" ? logo.width : undefined,
        };
      })
      .filter(function (item) {
        return item && item.src && item.alt;
      });
    return next.length >= 6 ? next : null;
  }

  function safeInternalHref(value) {
    var raw = String(value || "").trim();
    if (!raw || raw.charAt(0) !== "/" || raw.charAt(1) === "/") return "";
    if (!/^\/[a-z0-9/_-]*$/i.test(raw)) return "";
    return raw;
  }

  function homepageCta(cta) {
    if (!cta) return null;
    var label = String(cta.label || "").trim();
    var href = safeInternalHref(cta.destination);
    if (!label || !href || !containsHebrew(label)) return null;
    return { href: href, label: label };
  }

  function requireHomepageText(value) {
    var raw = String(value || "").trim();
    return raw && containsHebrew(raw) ? raw : "";
  }

  function homepageBodyFromCms(cms) {
    var hero = cms && cms.homepageHero;
    var body = cms && cms.homepageBody;
    var partners = cms && cms.partnerLogos;
    if (!hero || !body || !partners) return null;

    var heading = String(hero.heading || "").trim();
    var positioning = String(hero.positioning || "").trim();
    var countersHeading = String(body.countersHeading || "").trim();
    var counters = Array.isArray(body.counters)
      ? body.counters
          .map(function (item) {
            return {
              label: String((item && item.label) || "").trim(),
              value: String((item && item.value) || "").trim(),
            };
          })
          .filter(function (item) {
            return item.value && item.label && containsHebrew(item.label);
          })
      : [];
    var lloydsItems = Array.isArray(body.lloydsItems)
      ? body.lloydsItems.map(function (item) { return String(item || "").trim(); }).filter(Boolean)
      : [];
    var mgaCTA = homepageCta(body.mgaCTA);
    var lloydsCTA = homepageCta(body.lloydsCTA);
    var pressCTA = homepageCta(body.pressCTA);
    var partnerHeading = String(partners.heading || "").trim();
    var partnerDescription = String(partners.description || "").trim();

    if (!heading || !containsHebrew(heading)) return null;
    if (!positioning || !containsHebrew(positioning)) return null;
    if (!countersHeading || !containsHebrew(countersHeading) || counters.length !== 3) return null;
    if (!requireHomepageText(body.mgaKicker) || !requireHomepageText(body.mgaHeading) || !String(body.mgaHighlight || "").trim()) return null;
    if (!requireHomepageText(body.mgaEmphasis) || !requireHomepageText(body.mgaBody) || !mgaCTA) return null;
    if (!requireHomepageText(body.lloydsSlogan) || !requireHomepageText(body.lloydsHeading) || !requireHomepageText(body.lloydsIntro)) return null;
    if (!lloydsCTA || lloydsItems.length !== 6) return null;
    if (!requireHomepageText(body.pressSlogan) || !requireHomepageText(body.pressHeading) || !requireHomepageText(body.pressDescription) || !pressCTA) return null;
    if (!partnerHeading || !containsHebrew(partnerHeading) || !partnerDescription || !containsHebrew(partnerDescription)) return null;

    return {
      counters: counters,
      countersHeading: countersHeading,
      heading: heading,
      lloydsCTA: lloydsCTA,
      lloydsHeading: String(body.lloydsHeading).trim(),
      lloydsIntro: String(body.lloydsIntro).trim(),
      lloydsItems: lloydsItems,
      lloydsSlogan: String(body.lloydsSlogan).trim(),
      mgaBody: String(body.mgaBody).trim(),
      mgaCTA: mgaCTA,
      mgaEmphasis: String(body.mgaEmphasis).trim(),
      mgaHeading: String(body.mgaHeading).trim(),
      mgaHighlight: String(body.mgaHighlight).trim(),
      mgaKicker: String(body.mgaKicker).trim(),
      partnerDescription: partnerDescription,
      partnerHeading: partnerHeading,
      positioning: positioning,
      pressCTA: pressCTA,
      pressDescription: String(body.pressDescription).trim(),
      pressHeading: String(body.pressHeading).trim(),
      pressSlogan: String(body.pressSlogan).trim(),
    };
  }

  function mergeHomepagePage(staticPage, cms) {
    if (!staticPage || !cms || cms.language !== "hebrew") return staticPage;
    var seo = cms.seo || {};
    var title = String(seo.metaTitle || "").trim();
    var description = String(seo.metaDescription || "").trim();
    if (title && !containsHebrew(title)) title = "";
    if (description && !containsHebrew(description)) description = "";
    var cmsHome = homepageBodyFromCms(cms);
    var next = Object.assign({}, staticPage, {
      cmsHome: cmsHome,
      cmsPartnerLogos: homepagePartnerLogos(cms),
      cmsSeo: seo,
      description: description || staticPage.description,
      title: title || staticPage.title,
    });
    if (cmsHome) {
      next.h1 = cmsHome.heading;
      next.positioning = cmsHome.positioning;
    }
    return next;
  }

  function fetchProduct(options) {
    var path = options && options.path;
    if (!isProductPath(path)) return Promise.resolve(null);

    var language = options.language === "english" ? "english" : "hebrew";
    var slug = String(path).replace(/^\//, "");
    var url =
      cmsBase() +
      "/api/public/products?slug=" +
      encodeURIComponent(slug) +
      "&language=" +
      encodeURIComponent(language);

    return fetchJson(url).then(function (data) {
      return isProductPayload(data, language) ? data : null;
    });
  }

  function ctaPair(cta, fallback, requireEnglish) {
    if (!cta || !String(cta.label || "").trim() || !String(cta.destination || "").trim()) {
      return fallback;
    }
    if (requireEnglish && !looksEnglish(cta.label)) return fallback;
    return [String(cta.label).trim(), String(cta.destination).trim()];
  }

  function textList(values, fallback, requireEnglish) {
    if (!Array.isArray(values) || !values.length) return fallback;
    var next = values.map(function (value) { return String(value || "").trim(); }).filter(Boolean);
    if (!next.length) return fallback;
    if (requireEnglish && next.some(containsHebrew)) return fallback;
    return next;
  }

  function faqList(values, fallback, requireEnglish) {
    if (!Array.isArray(values) || !values.length) return fallback;
    var next = values
      .map(function (item) {
        return [String(item && item.question || "").trim(), String(item && item.answer || "").trim()];
      })
      .filter(function (item) { return item[0] && item[1]; });
    if (!next.length) return fallback;
    if (requireEnglish && next.some(function (item) { return containsHebrew(item[0]) || containsHebrew(item[1]); })) {
      return fallback;
    }
    return next;
  }

  function englishOrFallback(value, fallback) {
    var raw = String(value || "").trim();
    if (!raw) return fallback;
    return looksEnglish(raw) ? raw : fallback;
  }

  function mergeProductPage(staticPage, cms) {
    if (!staticPage) return staticPage;
    if (!cms) return staticPage;
    var seo = cms.seo || {};
    var english = cms.language === "english";
    var h1 = english ? englishOrFallback(cms.productName, staticPage.h1) : String(cms.productName || staticPage.h1 || "").trim();
    var lead = english
      ? englishOrFallback(cms.shortDescription, staticPage.lead)
      : String(cms.shortDescription || staticPage.lead || "").trim();
    var title = english
      ? englishOrFallback(seo.metaTitle, englishOrFallback(cms.productName, staticPage.title))
      : String(seo.metaTitle || cms.productName || staticPage.title || "").trim();
    var description = english
      ? englishOrFallback(seo.metaDescription, englishOrFallback(cms.shortDescription, staticPage.description))
      : String(seo.metaDescription || cms.shortDescription || staticPage.description || "").trim();

    return Object.assign({}, staticPage, {
      coverage: textList(cms.coverage, staticPage.coverage, english),
      description: description,
      faqs: faqList(cms.faqs, staticPage.faqs, english),
      fullContentHtml: english ? "" : String(cms.fullContentHtml || "").trim(),
      h1: h1,
      info: textList(cms.info, staticPage.info, english),
      lead: lead,
      primary: ctaPair(cms.primaryCTA, staticPage.primary, english),
      secondary: ctaPair(cms.secondaryCTA, staticPage.secondary, english),
      title: title,
      who: textList(cms.who, staticPage.who, english),
    });
  }

  function isPressMediaPayload(data) {
    return Boolean(
      isPublicSafe(data) &&
        data.language === "hebrew" &&
        Array.isArray(data.items)
    );
  }

  function isCompletePressItem(item, resolveUrl) {
    if (!item || typeof item !== "object") return false;
    var title = String(item.title || "").trim();
    var source = String(item.publicationName || "").trim();
    var group = String(item.categoryOrGroup || "").trim();
    var description = String(item.shortDescription || "").trim();
    var cta = String(item.ctaLabel || "").trim();
    var destination = resolveUrl(item.destination);
    var type = String(item.destinationType || "").trim();
    if (!title || !source || !group || !description || !cta || !destination) return false;
    if (!containsHebrew(description) || !containsHebrew(cta)) return false;
    if (type === "externalURL" && !/^https?:\/\//i.test(destination)) return false;
    if (type !== "externalURL" && type !== "fileOrImage") return false;
    return true;
  }

  function mergePressGroups(staticGroups, data) {
    if (!Array.isArray(staticGroups) || !staticGroups.length || !isPressMediaPayload(data)) return null;
    var expectedCount = staticGroups.reduce(function (total, group) {
      return total + ((group.items && group.items.length) || 0);
    }, 0);
    var resolveUrl = resolveCmsUrl;
    var valid = data.items.filter(function (item) {
      return isCompletePressItem(item, resolveUrl);
    });
    if (valid.length !== expectedCount || valid.length !== data.items.length) return null;

    var byGroup = {};
    valid
      .slice()
      .sort(function (left, right) {
        return (Number(left.displayOrder) || 0) - (Number(right.displayOrder) || 0);
      })
      .forEach(function (item) {
        var key = String(item.categoryOrGroup || "").trim();
        if (!byGroup[key]) byGroup[key] = [];
        byGroup[key].push({
          title: String(item.title || "").trim(),
          source: String(item.publicationName || "").trim(),
          description: String(item.shortDescription || "").trim(),
          url: resolveUrl(item.destination),
          cta: String(item.ctaLabel || "").trim(),
        });
      });

    var mapped = [];
    for (var i = 0; i < staticGroups.length; i += 1) {
      var staticGroup = staticGroups[i];
      var items = byGroup[staticGroup.title] || [];
      if (items.length !== ((staticGroup.items && staticGroup.items.length) || 0)) return null;
      mapped.push({ title: staticGroup.title, items: items });
    }
    return mapped;
  }

  function fetchPressMedia() {
    var url = cmsBase() + "/api/public/press-media?language=hebrew";
    return fetchJson(url).then(function (data) {
      return isPressMediaPayload(data) ? data : null;
    });
  }

  window.CooperNinveCMS = {
    cmsBase: cmsBase,
    fetchChrome: fetchChrome,
    fetchHomepage: fetchHomepage,
    fetchLandingPage: fetchLandingPage,
    fetchStandardPage: fetchStandardPage,
    fetchProduct: fetchProduct,
    fetchNavigation: fetchNavigation,
    fetchPressMedia: fetchPressMedia,
    mergePressGroups: mergePressGroups,
    fetchSiteSettings: fetchSiteSettings,
    isLandingPath: isHebrewLandingPath,
    isProductPath: isProductPath,
    mergeHomepagePage: mergeHomepagePage,
    mergeProductPage: mergeProductPage,
    mergeStandardPage: mergeStandardPage,
    pathToSlug: pathToSlug,
    resolveCmsUrl: resolveCmsUrl,
  };
})(window);
