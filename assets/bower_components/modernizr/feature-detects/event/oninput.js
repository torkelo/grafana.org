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
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(e,t,n,o,i){e.addTest("oninput",function(){var e,o=n("input");if(o.setAttribute("oninput","return"),i("oninput",t)||"function"==typeof o.oninput)return!0;try{var r=document.createEvent("KeyboardEvent");e=!1;var a=function(t){e=!0,t.preventDefault(),t.stopPropagation()};r.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),t.appendChild(o),o.addEventListener("input",a,!1),o.focus(),o.dispatchEvent(r),o.removeEventListener("input",a,!1),t.removeChild(o)}catch(s){e=!1}return e})});