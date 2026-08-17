/*
 * Cooper Ninve — CMS landing-page preview renderer.
 *
 * Loaded ONLY by /preview.html. The public site (index.html + app.js) never
 * loads this file and never contacts the CMS, so a CMS outage cannot affect
 * any public route.
 *
 * Markup below intentionally mirrors the class structure of landingTemplate()
 * in app.js so the preview reuses styles.css instead of a second design system.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   * Configuration
   * ------------------------------------------------------------------ */

  /* Origins this page may fetch CMS data from. `cms` arrives in the query
     string, so without this allowlist any crafted link could point the preview
     at an arbitrary host and inject content into this origin.
     Add the production CMS origin here before using preview outside localhost. */
  var ALLOWED_CMS_ORIGINS = [];
  var LOCAL_HOSTS = ["localhost", "127.0.0.1", "[::1]"];

  var PREVIEW_PATH = "/api/preview/landing-page";
  var REQUEST_TIMEOUT_MS = 15000;

  var app = document.querySelector("[data-preview-app]");
  var bar = document.querySelector("[data-preview-bar]");
  var stickySlot = document.querySelector("[data-preview-sticky]");

  /* ------------------------------------------------------------------ *
   * Escaping / URL safety
   * ------------------------------------------------------------------ */

  /* Everything interpolated into innerHTML goes through esc(). CMS values are
     author-controlled free text, so treating them as trusted HTML would make
     the preview an XSS sink on this origin. Quotes are escaped too, so the
     same helper is safe in attribute position. */
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

  /* Allows only schemes that cannot execute script. Anything else (javascript:,
     data:, vbscript:, bare relative paths) is treated as unresolved. */
  function safeHref(value) {
    var raw = text(value);
    if (!raw) return "";
    if (raw.charAt(0) === "#") return raw;
    if (raw.charAt(0) === "/" && raw.charAt(1) !== "/") return raw;
    if (/^https?:\/\//i.test(raw)) return raw;
    if (/^tel:/i.test(raw) || /^mailto:/i.test(raw)) return raw;
    return "";
  }

  function isAllowedCmsOrigin(origin) {
    if (origin === window.location.origin) return true;
    if (ALLOWED_CMS_ORIGINS.indexOf(origin) !== -1) return true;
    try {
      var url = new URL(origin);
      if (url.protocol !== "http:" && url.protocol !== "https:") return false;
      return LOCAL_HOSTS.indexOf(url.hostname) !== -1;
    } catch (error) {
      return false;
    }
  }

  /* ------------------------------------------------------------------ *
   * Preview chrome (bar, loading, error)
   * ------------------------------------------------------------------ */

  function renderBar(data) {
    if (!bar) return;
    if (!data) {
      bar.innerHTML =
        '<div class="preview-bar">' +
        '<span class="preview-bar__tag">תצוגה מקדימה</span>' +
        '<span class="preview-bar__meta">תוכן טיוטה מתוך ה-CMS. אינו העמוד הפומבי.</span>' +
        "</div>";
      return;
    }

    var seo = data.seo || {};
    var metaTitle = text(seo.metaTitle);
    var metaDescription = text(seo.metaDescription);
    var form = ((data.landingPage || {}).main || {}).form || {};
    var routingKey = text(form.routingKey);
    var trackingEvent = text(form.trackingEventName);

    var seoRows = "";
    if (metaTitle) seoRows += "<p><b>Meta title:</b> " + esc(metaTitle) + "</p>";
    if (metaDescription) seoRows += "<p><b>Meta description:</b> " + esc(metaDescription) + "</p>";
    if (routingKey) seoRows += "<p><b>Routing key:</b> " + esc(routingKey) + "</p>";
    if (trackingEvent) {
      seoRows +=
        "<p><b>Tracking event:</b> " +
        esc(trackingEvent) +
        " <span>(לא נורה בתצוגה מקדימה)</span></p>";
    }

    bar.innerHTML =
      '<div class="preview-bar">' +
      '<span class="preview-bar__tag">תצוגה מקדימה</span>' +
      '<span class="preview-bar__meta">' +
      "<span><b>עמוד:</b> " + esc(text(data.slug)) + "</span>" +
      "<span><b>שפה:</b> " + esc(text(data.language)) + "</span>" +
      "<span><b>סטטוס:</b> " + esc(text(data.status)) + "</span>" +
      "<span><b>סטטוס עריכה:</b> " + esc(text(data.reviewStatus)) + "</span>" +
      "</span>" +
      (seoRows
        ? "<details><summary>SEO ופרטי טופס</summary>" +
          '<div class="preview-bar__seo">' + seoRows + "</div></details>"
        : "") +
      "</div>";
  }

  function showError(headingHe, detailHe, detailEn) {
    renderBar(null);
    if (stickySlot) stickySlot.innerHTML = "";
    app.innerHTML =
      '<div class="preview-state preview-state--error">' +
      "<h1>" + esc(headingHe) + "</h1>" +
      "<p>" + esc(detailHe) + "</p>" +
      (detailEn ? '<p class="preview-state__en">' + esc(detailEn) + "</p>" : "") +
      "</div>";
  }

  /* ------------------------------------------------------------------ *
   * CTA rendering
   * ------------------------------------------------------------------ */

  /* The CMS API (mapCTA in src/app/api/preview/landing-page/route.ts) emits
     { destination, label, openInNewTab, type } and drops the internalPage
     relationship, so an internalPage CTA is only resolvable when the editor
     also filled the free-text destination. Unresolvable CTAs render inert
     rather than guessing a URL. */
  function ctaMarkup(cta, className) {
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

    if (!href) {
      var reason = type === "internalPage"
        ? "יעד פנימי אינו נפתר בתצוגה מקדימה"
        : "לא הוגדר יעד";
      return (
        '<span class="' + className + ' preview-cta-unresolved" aria-disabled="true">' +
        esc(label) +
        '<em class="preview-cta-flag">' + esc(reason) + "</em>" +
        "</span>"
      );
    }

    var target = cta.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
    return '<a class="' + className + '" href="' + esc(href) + '"' + target + ">" + esc(label) + "</a>";
  }

  /* ------------------------------------------------------------------ *
   * Section rendering — mirrors landingTemplate() markup in app.js
   * ------------------------------------------------------------------ */

  function formMarkup(form) {
    var title = text(form.title);
    var description = text(form.description);
    var submitLabel = text(form.submitLabel);
    var privacyNote = text(form.privacyNote);
    var consentText = text(form.consentText);
    var fields = list(form.visibleFields).filter(function (field) {
      return text(field && field.label);
    });

    if (!title && !description && !fields.length && !submitLabel) return "";

    var rows = fields
      .map(function (field) {
        var label = text(field.label);
        var mark = field.required ? " *" : "";
        return (
          "<label><span>" + esc(label + mark) + "</span>" +
          '<input name="' + esc(label) + '" placeholder="' + esc(label) + '" autocomplete="off"></label>'
        );
      })
      .join("");

    if (consentText) {
      rows +=
        '<label class="full"><span>' + esc(consentText) + "</span>" +
        '<input type="checkbox" name="consent"></label>';
    }

    return (
      '<form class="form-panel" data-preview-form novalidate>' +
      (title ? "<h2>" + esc(title) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      (rows ? '<div class="form-grid">' + rows + "</div>" : "") +
      (privacyNote ? '<p class="form-note">' + esc(privacyNote) + "</p>" : "") +
      (submitLabel
        ? '<button class="btn btn-primary" type="button" disabled>' + esc(submitLabel) + "</button>"
        : "") +
      '<p class="preview-form-note">הטופס מוצג לצורך תצוגה מקדימה בלבד ואינו נשלח.</p>' +
      "</form>"
    );
  }

  function heroMarkup(hero, form) {
    var eyebrow = text(hero.eyebrow);
    var heading = text(hero.heading);
    var description = text(hero.description);
    var supportLine = text(hero.supportLine);
    var primary = ctaMarkup(hero.primaryCTA, "btn btn-primary");
    var secondary = ctaMarkup(hero.secondaryCTA, "btn btn-secondary");
    var actions = primary + secondary;
    var formHtml = formMarkup(form);

    if (!eyebrow && !heading && !description && !supportLine && !actions && !formHtml) return "";

    return (
      '<section class="hero" data-hero-theme="' + esc(text(hero.theme) || "default") + '">' +
      '<div class="container hero-inner">' +
      "<div>" +
      (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + "</p>" : "") +
      (heading ? "<h1>" + esc(heading) + "</h1>" : "") +
      (description ? '<p class="lead">' + esc(description) + "</p>" : "") +
      (supportLine ? '<p class="lead">' + esc(supportLine) + "</p>" : "") +
      (actions ? '<div class="hero-actions">' + actions + "</div>" : "") +
      "</div>" +
      (formHtml ? '<div id="lead-form" class="landing-form">' + formHtml + "</div>" : "") +
      "</div>" +
      "</section>"
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
          '<article class="card">' +
          '<div class="icon-circle">◇</div>' +
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
      .map(function (reason) { return text(reason && reason.text); })
      .filter(Boolean);
    if (!heading && !description && !reasons.length) return "";

    return (
      '<section class="section section-soft"><div class="container split-band">' +
      "<div>" +
      (heading ? "<h2>" + esc(heading) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      "</div>" +
      (reasons.length
        ? '<ul class="feature-list">' +
          reasons.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") +
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
                "<details><summary>" + esc(text(item.question)) + "</summary>" +
                "<p>" + esc(text(item.answer)) + "</p></details>"
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
      .filter(function (product) { return text(product.productName); })
      .map(function (product) {
        return (
          '<article class="card">' +
          "<h3>" + esc(text(product.productName)) + "</h3>" +
          (text(product.shortDescription) ? "<p>" + esc(text(product.shortDescription)) + "</p>" : "") +
          "</article>"
        );
      })
      .join("");

    var links = list(related.internalLinkSuggestions)
      .map(function (item) {
        var label = text(item && item.label);
        var href = safeHref(item && item.externalURL);
        if (!label) return "";
        if (!href) {
          return (
            '<span class="btn btn-secondary preview-cta-unresolved" aria-disabled="true">' +
            esc(label) +
            '<em class="preview-cta-flag">יעד פנימי אינו נפתר בתצוגה מקדימה</em></span>'
          );
        }
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
    var button = ctaMarkup(finalCTA.button, "btn btn-primary");
    if (!heading && !description && !button) return "";

    return (
      '<section class="section section-navy"><div class="container section-header">' +
      "<div>" +
      (heading ? "<h2>" + esc(heading) + "</h2>" : "") +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      "</div>" +
      button +
      "</div></section>"
    );
  }

  function stickyMarkup(form) {
    if (!form || !form.stickyMobileCTA) return "";
    var label = text(form.mobileCTALabel);
    if (!label) return "";
    var destination = text(form.mobileCTADestination);
    var href = destination
      ? (destination.charAt(0) === "#" ? destination : safeHref(destination))
      : "";
    if (!href) return "";
    return '<div class="mobile-sticky"><a href="' + esc(href) + '">' + esc(label) + "</a></div>";
  }

  /* ------------------------------------------------------------------ *
   * Page assembly
   * ------------------------------------------------------------------ */

  function applyDocumentMeta(data) {
    var english = text(data.language) === "english";
    document.documentElement.lang = english ? "en" : "he";
    document.documentElement.dir = english ? "ltr" : "rtl";
    document.body.classList.toggle("lang-en", english);
    document.body.classList.toggle("lang-he", !english);

    var title = text(data.title);
    document.title = title ? "תצוגה מקדימה · " + title : "תצוגה מקדימה | קופר נינוה";

    var description = document.querySelector('meta[name="description"]');
    var seoDescription = text((data.seo || {}).metaDescription);
    if (description) description.setAttribute("content", seoDescription);
  }

  function renderPage(data) {
    var landing = data.landingPage || {};
    var hero = landing.hero || {};
    var main = landing.main || {};

    applyDocumentMeta(data);
    renderBar(data);

    var body =
      heroMarkup(hero, main.form || {}) +
      (text(main.introParagraph)
        ? '<section class="section"><div class="container"><div class="center-title"><p>' +
          esc(text(main.introParagraph)) + "</p></div></div></section>"
        : "") +
      audienceMarkup(main) +
      whyMarkup(main) +
      faqMarkup(main) +
      relatedMarkup(landing.relatedProducts) +
      finalCtaMarkup(main);

    if (!body) {
      app.innerHTML =
        '<div class="preview-state">' +
        "<h1>אין תוכן להצגה</h1>" +
        "<p>הטיוטה נטענה מה-CMS אך כל שדות התוכן ריקים.</p>" +
        '<p class="preview-state__en">Draft loaded, but every content field is empty.</p>' +
        "</div>";
    } else {
      app.innerHTML = body;
    }

    if (stickySlot) stickySlot.innerHTML = stickyMarkup(main.form);

    /* Preview must never look like production lead activity: the form is inert,
       nothing is pushed to window.dataLayer, and no data-track/data-form
       attributes are emitted anywhere in the markup above. */
    var form = app.querySelector("[data-preview-form]");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
  }

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */

  function fetchPreview(cmsOrigin, token) {
    var url = cmsOrigin.replace(/\/$/, "") + PREVIEW_PATH + "?token=" + encodeURIComponent(token);
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = controller
      ? window.setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS)
      : null;

    var options = { cache: "no-store", credentials: "omit", mode: "cors", referrerPolicy: "no-referrer" };
    if (controller) options.signal = controller.signal;

    return fetch(url, options).then(
      function (response) {
        if (timer) window.clearTimeout(timer);
        return response;
      },
      function (error) {
        if (timer) window.clearTimeout(timer);
        throw error;
      }
    );
  }

  function start() {
    var params = new URLSearchParams(window.location.search);
    var token = text(params.get("token"));
    var cms = text(params.get("cms"));

    if (!token) {
      showError(
        "חסר טוקן תצוגה מקדימה",
        "פתחו את התצוגה המקדימה מתוך ה-CMS. לא ניתן לטעון תוכן ללא פרמטר token.",
        "Missing required 'token' query parameter."
      );
      return;
    }

    if (!cms) {
      showError(
        "חסרה כתובת ה-CMS",
        "פתחו את התצוגה המקדימה מתוך ה-CMS. לא ניתן לטעון תוכן ללא פרמטר cms.",
        "Missing required 'cms' query parameter."
      );
      return;
    }

    var origin;
    try {
      origin = new URL(cms).origin;
    } catch (error) {
      showError(
        "כתובת CMS אינה תקינה",
        "הפרמטר cms אינו כתובת חוקית.",
        "The 'cms' parameter is not a valid URL."
      );
      return;
    }

    if (!isAllowedCmsOrigin(origin)) {
      showError(
        "כתובת CMS אינה מורשית",
        "התצוגה המקדימה טוענת תוכן רק משרתי CMS מאושרים.",
        "This CMS origin is not on the preview allowlist."
      );
      return;
    }

    renderBar(null);

    fetchPreview(origin, token)
      .then(function (response) {
        if (response.status === 401) {
          showError(
            "הטוקן אינו תקף או פג תוקפו",
            "קישורי תצוגה מקדימה תקפים לזמן קצר. חזרו ל-CMS ולחצו שוב על Preview.",
            "Preview token invalid or expired (HTTP 401)."
          );
          return null;
        }
        if (response.status === 404) {
          showError(
            "עמוד הנחיתה לא נמצא",
            "ה-CMS לא מצא עמוד נחיתה תואם עבור הטוקן הזה.",
            "Landing page not found for this token (HTTP 404)."
          );
          return null;
        }
        if (!response.ok) {
          showError(
            "ה-CMS החזיר שגיאה",
            "לא ניתן לטעון את הטיוטה כרגע.",
            "CMS responded with HTTP " + response.status + "."
          );
          return null;
        }
        return response.json().catch(function () {
          showError(
            "תגובת ה-CMS אינה תקינה",
            "התקבלה תשובה שאינה בפורמט הצפוי.",
            "CMS response was not valid JSON."
          );
          return null;
        });
      })
      .then(function (data) {
        if (!data) return;
        if (typeof data !== "object" || !data.landingPage) {
          showError(
            "תגובת ה-CMS אינה תקינה",
            "התשובה אינה מכילה תוכן עמוד נחיתה.",
            "CMS response did not contain a landingPage payload."
          );
          return;
        }
        renderPage(data);
      })
      .catch(function (error) {
        var aborted = error && error.name === "AbortError";
        showError(
          "לא ניתן להתחבר ל-CMS",
          aborted
            ? "הבקשה ל-CMS לא הושלמה בזמן."
            : "ודאו שה-CMS פועל וכי הוא מאפשר גישה מכתובת זו.",
          aborted ? "Request to the CMS timed out." : "Could not reach the CMS (network or CORS failure)."
        );
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
