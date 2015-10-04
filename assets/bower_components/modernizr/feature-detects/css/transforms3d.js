/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,n,i){e.addTest("csstransforms3d",function(){var o=!!t("perspective","1px",!0),r=e._config.usePrefixes;if(o&&(!r||"webkitPerspective"in i.style)){var s;e.supports?s="@supports (perspective: 1px)":(s="@media (transform-3d)",r&&(s+=",(-webkit-transform-3d)")),s+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",n(s,function(e){o=9===e.offsetLeft&&5===e.offsetHeight})}return o})});