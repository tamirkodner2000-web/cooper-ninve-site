/*
 * Public landing-page renderer for CMS payloads.
 * Used only by Hebrew /lp/* public routes. English product pages never load this path.
 * Markup matches preview.js / landingTemplate() class names. Forms submit.
 */
(function (window) {
  "use strict";

  function esc(value) {
    if (value === null || value === undefined) return "";
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function text(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function list(value) {
    return Array.isArray(value) ? value : [];
  }

  function safeHref(value) {
    var raw = text(value);
    if (!raw) return "";
    if (raw.charAt(0) === "#") return raw;
    if (raw.charAt(0) === "/" && raw.charAt(1) !== "/") return raw;
    if (/^https?:\/\//i.test(raw)) return raw;
    if (/^tel:/i.test(raw) || /^mailto:/i.test(raw)) return raw;
    return "";
  }

  function ctaMarkup(cta, className, track) {
    if (!cta) return "";
    var label = text(cta.label);
    if (!label) return "";
    var destination = text(cta.destination);
    var type = text(cta.type);
    var href = "";

    if (destination) {
      if (type === "phone") {
        var digits = destination.replace(/[^0-9+]/g, "");
        href = digits ? "tel:" + digits : "";
      } else if (type === "anchor") {
        href = "#" + destination.replace(/^#+/, "");
      } else {
        href = safeHref(destination);
      }
    }

    if (!href) return "";
    var target = cta.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
    var trackAttr = track ? ' data-track="' + esc(track) + '"' : "";
    return '<a class="' + className + '" href="' + esc(href) + '"' + target + trackAttr + ">" + esc(label) + "</a>";
  }

  function formMarkup(form, trackingEvent) {
    var title = text(form.title);
    var description = text(form.description);
    var submitLabel = text(form.submitLabel) || "שליחת פנייה";
    var privacyNote = text(form.privacyNote);
    var consentText = text(form.consentText);
    var fields = list(form.visibleFields).filter(function (field) {
      return text(field && field.label);
    });
    var eventName = text(form.trackingEventName) || trackingEvent || "form_submit_general";

    var rows = fields
      .map(function (field) {
        var label = text(field.label);
        var mark = field.required ? " *" : "";
        return (
          "<label><span>" +
          esc(label + mark) +
          "</span>" +
          '<input name="' +
          esc(label) +
          '" placeholder="' +
          esc(label) +
          '"></label>'
        );
      })
      .join("");

    if (consentText) {
      rows +=
        '<label class="full"><span>' +
        esc(consentText) +
        "</span>" +
        '<input type="checkbox" name="consent"></label>';
    }

    if (!rows) {
      rows =
        '<label><span>שם מלא</span><input name="שם מלא" placeholder="שם מלא"></label>' +
        '<label><span>טלפון</span><input name="טלפון" placeholder="טלפון"></label>' +
        '<label><span>אימייל</span><input name="אימייל" placeholder="אימייל"></label>' +
        '<label class="full"><span>הודעה</span><textarea name="message" placeholder="כתבו בקצרה את הצורך או הסיכון"></textarea></label>';
    }

    return (
      '<form class="form-panel" data-form="' +
      esc(eventName) +
      '">' +
      (title ? "<h2>" + esc(title) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      '<div class="form-grid">' +
      rows +
      "</div>" +
      (privacyNote ? '<p class="form-note">' + esc(privacyNote) + "</p>" : "") +
      '<button class="btn btn-primary" type="submit" data-track="' +
      esc(eventName) +
      '">' +
      esc(submitLabel) +
      "</button></form>"
    );
  }

  function heroMarkup(hero, form, trackingEvent) {
    var eyebrow = text(hero.eyebrow);
    var heading = text(hero.heading);
    var description = text(hero.description);
    var supportLine = text(hero.supportLine);
    var primary = ctaMarkup(hero.primaryCTA, "btn btn-primary", "click_quote_cta");
    var secondary = ctaMarkup(hero.secondaryCTA, "btn btn-secondary");
    var actions = primary + secondary;
    var formHtml = formMarkup(form, trackingEvent);

    return (
      '<section class="hero" data-hero-theme="' +
      esc(text(hero.theme) || "default") +
      '">' +
      '<div class="container hero-inner"><div>' +
      (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + "</p>" : "") +
      (heading ? "<h1>" + esc(heading) + "</h1>" : "") +
      (description ? '<p class="lead">' + esc(description) + "</p>" : "") +
      (supportLine ? '<p class="lead">' + esc(supportLine) + "</p>" : "") +
      (actions ? '<div class="hero-actions">' + actions + "</div>" : "") +
      "</div>" +
      (formHtml ? '<div id="lead-form" class="landing-form">' + formHtml + "</div>" : "") +
      "</div></section>"
    );
  }

  function audienceMarkup(main) {
    var heading = text(main.audienceHeading);
    var cards = list(main.audienceCards).filter(function (card) {
      return text(card && card.title) || text(card && card.description);
    });
    if (!heading && !cards.length) return "";
    var cardsHtml = cards
      .map(function (card) {
        return (
          '<article class="card"><div class="icon-circle">◇</div>' +
          (text(card.title) ? "<h3>" + esc(text(card.title)) + "</h3>" : "") +
          (text(card.description) ? "<p>" + esc(text(card.description)) + "</p>" : "") +
          "</article>"
        );
      })
      .join("");
    return (
      '<section class="section"><div class="container">' +
      (heading ? '<div class="center-title"><h2>' + esc(heading) + "</h2></div>" : "") +
      (cardsHtml ? '<div class="grid grid-4">' + cardsHtml + "</div>" : "") +
      "</div></section>"
    );
  }

  function whyMarkup(main) {
    var heading = text(main.whyHeading);
    var description = text(main.whyDescription);
    var reasons = list(main.reasons)
      .map(function (reason) {
        return text(reason && reason.text);
      })
      .filter(Boolean);
    if (!heading && !description && !reasons.length) return "";
    return (
      '<section class="section section-soft"><div class="container split-band"><div>' +
      (heading ? "<h2>" + esc(heading) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      "</div>" +
      (reasons.length
        ? '<ul class="feature-list">' +
          reasons
            .map(function (item) {
              return "<li>" + esc(item) + "</li>";
            })
            .join("") +
          "</ul>"
        : "") +
      "</div></section>"
    );
  }

  function faqMarkup(main) {
    var heading = text(main.faqHeading);
    var items = list(main.faqItems).filter(function (item) {
      return text(item && item.question) && text(item && item.answer);
    });
    if (!heading && !items.length) return "";
    return (
      '<section class="section section-soft"><div class="container">' +
      (heading ? '<div class="center-title"><h2>' + esc(heading) + "</h2></div>" : "") +
      (items.length
        ? '<div class="faq">' +
          items
            .map(function (item) {
              return (
                "<details><summary>" +
                esc(text(item.question)) +
                "</summary><p>" +
                esc(text(item.answer)) +
                "</p></details>"
              );
            })
            .join("") +
          "</div>"
        : "") +
      "</div></section>"
    );
  }

  function relatedMarkup(related) {
    if (!related) return "";
    var products = [];
    if (related.activeProduct && typeof related.activeProduct === "object") {
      products.push(related.activeProduct);
    }
    list(related.relatedProducts).forEach(function (product) {
      if (product && typeof product === "object") products.push(product);
    });
    var productCards = products
      .filter(function (product) {
        return text(product.productName);
      })
      .map(function (product) {
        return (
          '<article class="card"><h3>' +
          esc(text(product.productName)) +
          "</h3>" +
          (text(product.shortDescription) ? "<p>" + esc(text(product.shortDescription)) + "</p>" : "") +
          "</article>"
        );
      })
      .join("");
    var links = list(related.internalLinkSuggestions)
      .map(function (item) {
        var label = text(item && item.label);
        var href = safeHref(item && (item.url || item.externalURL));
        if (!label || !href) return "";
        var target = item.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
        return '<a class="btn btn-secondary" href="' + esc(href) + '"' + target + ">" + esc(label) + "</a>";
      })
      .join("");
    if (!productCards && !links) return "";
    return (
      '<section class="section"><div class="container">' +
      (productCards ? '<div class="grid grid-3">' + productCards + "</div>" : "") +
      (links ? '<div class="hero-actions">' + links + "</div>" : "") +
      "</div></section>"
    );
  }

  function finalCtaMarkup(main) {
    var finalCTA = main.finalCTA || {};
    var heading = text(finalCTA.heading);
    var description = text(finalCTA.description);
    var button = ctaMarkup(finalCTA.button, "btn btn-primary", "click_quote_cta");
    if (!heading && !description && !button) return "";
    return (
      '<section class="section section-navy"><div class="container section-header"><div>' +
      (heading ? "<h2>" + esc(heading) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      "</div>" +
      button +
      "</div></section>"
    );
  }

  function upsertMeta(selector, attr, key, content) {
    var el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href, extra) {
    var selector = extra && extra.hreflang
      ? 'link[rel="' + rel + '"][hreflang="' + extra.hreflang + '"]'
      : extra && extra.canonical
        ? 'link[rel="canonical"]'
        : 'link[rel="' + rel + '"]';
    var el = extra && extra.canonical
      ? document.querySelector('link[rel="canonical"]')
      : extra && extra.hreflang
        ? document.querySelector('link[rel="alternate"][hreflang="' + extra.hreflang + '"]')
        : document.querySelector(selector);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      if (extra && extra.hreflang) el.setAttribute("hreflang", extra.hreflang);
      if (extra && extra.dataset) el.dataset.hreflang = "true";
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  function cmsOrigin() {
    if (window.CooperNinveCMS && typeof window.CooperNinveCMS.cmsBase === "function") {
      return window.CooperNinveCMS.cmsBase();
    }
    var hostname = window.location && window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]") {
      return "http://localhost:3000";
    }
    return "https://cms.tamir-kodner.com";
  }

  function absoluteSiteUrl(url, path, helpers) {
    var raw = text(url);
    if (!raw) {
      return location.origin + (helpers && helpers.canonicalPath ? helpers.canonicalPath(path) : path || "");
    }
    if (/^https?:\/\//i.test(raw)) return raw;
    if (raw.charAt(0) === "/") return location.origin + raw;
    return location.origin + "/" + raw;
  }

  function applySeo(data, fallback, path, helpers) {
    var seo = (data && data.seo) || {};
    var english = text(data.language) === "english";
    document.documentElement.lang = english ? "en" : "he";
    document.documentElement.dir = english ? "ltr" : "rtl";
    document.body.classList.toggle("lang-en", english);
    document.body.classList.toggle("lang-he", !english);

    var title = text(seo.metaTitle) || text(fallback && fallback.title) || document.title;
    var description =
      text(seo.metaDescription) ||
      text(fallback && fallback.description) ||
      text(fallback && fallback.lead) ||
      "";
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);

    var robots = [seo.indexing === "noindex" ? "noindex" : "index", seo.follow === "nofollow" ? "nofollow" : "follow"].join(
      ", "
    );
    upsertMeta('meta[name="robots"]', "name", "robots", robots);

    var canonical = absoluteSiteUrl(seo.canonicalURL, path, helpers);
    upsertLink("canonical", canonical, { canonical: true });

    var ogTitle = text(seo.openGraphTitle) || title;
    var ogDescription = text(seo.openGraphDescription) || description;
    upsertMeta('meta[property="og:title"]', "property", "og:title", ogTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", ogDescription);

    var image = seo.socialSharingImage && seo.socialSharingImage.url;
    if (image) {
      var imageUrl =
        image.charAt(0) === "/"
          ? (window.CooperNinveCMS && typeof window.CooperNinveCMS.resolveCmsUrl === "function"
              ? window.CooperNinveCMS.resolveCmsUrl(image)
              : cmsOrigin() + image)
          : image;
      upsertMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
      if (text(seo.imageAltText)) upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", text(seo.imageAltText));
    }

    var translation = (data && data.translation) || {};
    var altUrl = text(translation.alternateLanguageURL) || text(seo.alternateLanguageURL);
    if (helpers.setAlternateLinks) helpers.setAlternateLinks(path);
    if (altUrl) {
      var english = text(data.language) === "english";
      upsertLink("alternate", altUrl, { hreflang: english ? "he" : "en", dataset: true });
    }
  }

  function renderLanding(data, options) {
    var landing = data.landingPage || {};
    var hero = landing.hero || {};
    var main = landing.main || {};
    var tracking = (options && options.trackingFallback) || "";
    var intro = text(main.introParagraph);
    return (
      heroMarkup(hero, main.form || {}, tracking) +
      (intro
        ? '<section class="section"><div class="container"><div class="center-title"><p>' + esc(intro) + "</p></div></div></section>"
        : "") +
      audienceMarkup(main) +
      whyMarkup(main) +
      faqMarkup(main) +
      relatedMarkup(landing.relatedProducts) +
      finalCtaMarkup(main)
    );
  }

  window.CooperNinveCMS = window.CooperNinveCMS || {};
  window.CooperNinveCMS.renderLanding = renderLanding;
  window.CooperNinveCMS.applySeo = applySeo;
})(window);
