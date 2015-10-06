/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(e,n,t){e.addTest("hsla",function(){var e=n("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",t(e.backgroundColor,"rgba")||t(e.backgroundColor,"hsla")})});