/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
define(["Modernizr","modElem"],function(e,t){e.addTest("cssexunit",function(){var e,n=t.elem.style;try{n.fontSize="3ex",e=-1!==n.fontSize.indexOf("ex")}catch(r){e=!1}return e})});