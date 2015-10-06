/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
define(["Modernizr","createElement","prefixes","testAllProps","test/css/supports"],function(e,n,t,o){e.addTest("cssfilters",function(){if(e.supports)return t("filter","blur(2px)");var i=n("a");return i.style.cssText=o.join("filter:blur(2px); "),!!i.style.length&&(void 0===document.documentMode||document.documentMode>9)})});