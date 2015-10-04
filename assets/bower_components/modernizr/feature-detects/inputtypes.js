/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
define(["Modernizr","inputElem","docElement"],function(e,t,n){var o="search tel url email datetime date month week time datetime-local number range color".split(" "),i={};e.inputtypes=function(e){for(var o,r,c,a=e.length,s=":)",d=0;a>d;d++)t.setAttribute("type",o=e[d]),c="text"!==t.type&&"style"in t,c&&(t.value=s,t.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&void 0!==t.style.WebkitAppearance?(n.appendChild(t),r=document.defaultView,c=r.getComputedStyle&&"textfield"!==r.getComputedStyle(t,null).WebkitAppearance&&0!==t.offsetHeight,n.removeChild(t)):/^(search|tel)$/.test(o)||(c=/^(url|email|number)$/.test(o)?t.checkValidity&&t.checkValidity()===!1:t.value!=s)),i[e[d]]=!!c;return i}(o)});