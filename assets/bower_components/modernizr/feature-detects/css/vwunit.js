/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,n){n("#modernizr { width: 50vw; }",function(n){var t=parseInt(window.innerWidth/2,10),o=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);e.addTest("cssvwunit",o==t)})});