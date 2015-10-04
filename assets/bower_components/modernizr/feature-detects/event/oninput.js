/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#common-event-behaviors"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(t,e,o,n,s){t.addTest("oninput",function(){var t,n=o("input");if(n.setAttribute("oninput","return"),s("oninput",e)||"function"==typeof n.oninput)return!0;try{var i=document.createEvent("KeyboardEvent");t=!1;var r=function(e){t=!0,e.preventDefault(),e.stopPropagation()};i.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),e.appendChild(n),n.addEventListener("input",r,!1),n.focus(),n.dispatchEvent(i),n.removeEventListener("input",r,!1),e.removeChild(n)}catch(p){t=!1}return t})});