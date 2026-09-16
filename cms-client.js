/*
 * Public CMS delivery client. Landing preview tokens are never used here.
 * Public landing integration is Hebrew /lp/* only. English product pages
 * are not fetched through this client.
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
      data &&
        typeof data === "object" &&
        data.pageType === "landing" &&
        typeof data.slug === "string" &&
        data.slug &&
        data.language === "hebrew" &&
        data.landingPage &&
        typeof data.landingPage === "object" &&
        data.seo &&
        typeof data.seo === "object" &&
        hasHeading(data) &&
        !("reviewNotes" in data) &&
        !("landingInternalNotes" in data) &&
        !("reviewStatus" in data) &&
        !("_status" in data)
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

  window.CooperNinveCMS = {
    fetchLandingPage: fetchLandingPage,
    isLandingPath: isHebrewLandingPath,
    pathToSlug: pathToSlug,
  };
})(window);
