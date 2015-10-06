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
define(["Modernizr","inputElem","docElement"],function(e,t,n){var r="search tel url email datetime date month week time datetime-local number range color".split(" "),o={};e.inputtypes=function(e){for(var r,i,a,s=e.length,c=":)",u=0;s>u;u++)t.setAttribute("type",r=e[u]),a="text"!==t.type&&"style"in t,a&&(t.value=c,t.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&void 0!==t.style.WebkitAppearance?(n.appendChild(t),i=document.defaultView,a=i.getComputedStyle&&"textfield"!==i.getComputedStyle(t,null).WebkitAppearance&&0!==t.offsetHeight,n.removeChild(t)):/^(search|tel)$/.test(r)||(a=/^(url|email|number)$/.test(r)?t.checkValidity&&t.checkValidity()===!1:t.value!=c)),o[e[u]]=!!a;return o}(r)});