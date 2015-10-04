/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
define(["Modernizr","domPrefixes","prefixed"],function(e,n,t){e.addTest("fullscreen",!(!t("exitFullscreen",document,!1)&&!t("cancelFullScreen",document,!1)))});