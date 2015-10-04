/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("canvas",function(){var t=e("canvas");return!(!t.getContext||!t.getContext("2d"))})});