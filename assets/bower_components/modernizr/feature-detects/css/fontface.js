/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS http://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 http://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "http://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,t){var n=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||i}();n?e.addTest("fontface",!1):t('@font-face {font-family:"font";src:url("https://")}',function(t,n){var i=document.getElementById("smodernizr"),o=i.sheet||i.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",d=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0]);e.addTest("fontface",d)})});