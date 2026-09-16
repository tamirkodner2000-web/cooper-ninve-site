/*
 * Public CMS delivery client. Landing preview tokens are never used here.
 * Hebrew /lp/* uses landing-page delivery. Product routes use /api/public/products.
 */
(function (window) {
  "use strict";

  var DEFAULT_BASE = "http://localhost:3000";
  var TIMEOUT_MS = 4000;
  var HEBREW_LANDING_PATHS = {
    "/lp/professional-liability": true,
    "/lp/cyber-insurance": true,
    "/lp/insurance-agents": true,
  };
  var PRODUCT_PATH = /^\/[a-z0-9-]+-insurance$/;

  function cmsBase() {
    return String(window.COOPER_NINVE_CMS_URL || DEFAULT_BASE).replace(/\/$/, "");
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
    return PRODUCT_PATH.test(String(path || ""));
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

  function ctaPair(cta, fallback) {
    if (!cta || !String(cta.label || "").trim() || !String(cta.destination || "").trim()) {
      return fallback;
    }
    return [String(cta.label).trim(), String(cta.destination).trim()];
  }

  function textList(values, fallback) {
    if (!Array.isArray(values) || !values.length) return fallback;
    var next = values.map(function (value) { return String(value || "").trim(); }).filter(Boolean);
    return next.length ? next : fallback;
  }

  function faqList(values, fallback) {
    if (!Array.isArray(values) || !values.length) return fallback;
    var next = values
      .map(function (item) {
        return [String(item && item.question || "").trim(), String(item && item.answer || "").trim()];
      })
      .filter(function (item) { return item[0] && item[1]; });
    return next.length ? next : fallback;
  }

  function mergeProductPage(staticPage, cms) {
    if (!staticPage) return staticPage;
    if (!cms) return staticPage;
    var seo = cms.seo || {};
    return Object.assign({}, staticPage, {
      coverage: textList(cms.coverage, staticPage.coverage),
      description: String(seo.metaDescription || cms.shortDescription || staticPage.description || "").trim(),
      faqs: faqList(cms.faqs, staticPage.faqs),
      h1: String(cms.productName || staticPage.h1 || "").trim(),
      info: textList(cms.info, staticPage.info),
      lead: String(cms.shortDescription || staticPage.lead || "").trim(),
      primary: ctaPair(cms.primaryCTA, staticPage.primary),
      secondary: ctaPair(cms.secondaryCTA, staticPage.secondary),
      title: String(seo.metaTitle || cms.productName || staticPage.title || "").trim(),
      who: textList(cms.who, staticPage.who),
    });
  }

  window.CooperNinveCMS = {
    fetchLandingPage: fetchLandingPage,
    fetchProduct: fetchProduct,
    isLandingPath: isHebrewLandingPath,
    isProductPath: isProductPath,
    mergeProductPage: mergeProductPage,
    pathToSlug: pathToSlug,
  };
})(window);
