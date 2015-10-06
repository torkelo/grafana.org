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
define(["Modernizr","createElement","prefixes"],function(e,t,n){e.addTest("csscalc",function(){var e="width:",r="calc(10px);",i=t("a");return i.style.cssText=e+n.join(r+e),!!i.style.length})});