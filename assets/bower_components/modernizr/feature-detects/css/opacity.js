/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,n,t){e.addTest("opacity",function(){var e=n("a").style;return e.cssText=t.join("opacity:.55;"),/^0.55$/.test(e.opacity)})});