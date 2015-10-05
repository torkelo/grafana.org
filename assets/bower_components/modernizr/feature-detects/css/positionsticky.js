/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,n,t){e.addTest("csspositionsticky",function(){var e="position:",o="sticky",i=n("a"),r=i.style;return r.cssText=e+t.join(o+";"+e).slice(0,-e.length),-1!==r.position.indexOf(o)})});