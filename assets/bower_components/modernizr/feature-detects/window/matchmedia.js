/*!
{
  "name": "matchMedia",
  "property": "matchmedia",
  "caniuse" : "matchmedia",
  "tags": ["matchmedia"],
  "authors": ["Alberto Elias"],
  "notes": [{
    "name": "W3C CSSOM View Module",
    "href": "http://dev.w3.org/csswg/cssom-view/#the-mediaquerylist-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia"
  }],
  "polyfills": ["matchmediajs"]
}
!*/
define(["Modernizr","prefixed"],function(e,t){e.addTest("matchmedia",!!t("matchMedia",window))});