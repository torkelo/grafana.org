/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,t,n){e.addTest("csscalc",function(){var e="width:",i="calc(10px);",o=t("a");return o.style.cssText=e+n.join(i+e),!!o.style.length})});