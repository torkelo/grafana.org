/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,n){e.addTest("csstransitions",n("transition","all",!0))});