/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,n,e){function r(t){_.cssText=t}function o(t,n){return r(E.join(t+";")+(n||""))}function i(t,n){return typeof t===n}function a(t,n){return!!~(""+t).indexOf(n)}function u(t,n){for(var r in t){var o=t[r];if(!a(o,"-")&&_[o]!==e)return"pfx"==n?o:!0}return!1}function c(t,n,r){for(var o in t){var a=n[t[o]];if(a!==e)return r===!1?t[o]:i(a,"function")?a.bind(r||n):a}return!1}function l(t,n,e){var r=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+S.join(r+" ")+r).split(" ");return i(n,"string")||i(n,"undefined")?u(o,n):(o=(t+" "+C.join(r+" ")+r).split(" "),c(o,n,e))}function f(){h.input=function(e){for(var r=0,o=e.length;o>r;r++)M[e[r]]=!!(e[r]in b);return M.list&&(M.list=!(!n.createElement("datalist")||!t.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(t){for(var r,o,i,a=0,u=t.length;u>a;a++)b.setAttribute("type",o=t[a]),r="text"!==b.type,r&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&b.style.WebkitAppearance!==e?(g.appendChild(b),i=n.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?b.checkValidity&&b.checkValidity()===!1:b.value!=w)),A[t[a]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var s,p,d="2.8.3",h={},v=!0,g=n.documentElement,m="modernizr",y=n.createElement(m),_=y.style,b=n.createElement("input"),w=":)",x={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",S=k.split(" "),C=k.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},T={},A={},M={},R=[],z=R.slice,I=function(t,e,r,o){var i,a,u,c,l=n.createElement("div"),f=n.body,s=f||n.createElement("body");if(parseInt(r,10))for(;r--;)u=n.createElement("div"),u.id=o?o[r]:m+(r+1),l.appendChild(u);return i=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),l.id=m,(f?l:s).innerHTML+=i,s.appendChild(l),f||(s.style.background="",s.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(s)),a=e(l,t),f?l.parentNode.removeChild(l):(s.parentNode.removeChild(s),g.style.overflow=c),!!a},N=function(n){var e=t.matchMedia||t.msMatchMedia;if(e)return e(n)&&e(n).matches||!1;var r;return I("@media "+n+" { #"+m+" { position: absolute; } }",function(n){r="absolute"==(t.getComputedStyle?getComputedStyle(n,null):n.currentStyle).position}),r},F=function(){function t(t,o){o=o||n.createElement(r[t]||"div"),t="on"+t;var a=t in o;return a||(o.setAttribute||(o=n.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),a=i(o[t],"function"),i(o[t],"undefined")||(o[t]=e),o.removeAttribute(t))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),O={}.hasOwnProperty;p=i(O,"undefined")||i(O.call,"undefined")?function(t,n){return n in t&&i(t.constructor.prototype[n],"undefined")}:function(t,n){return O.call(t,n)},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if("function"!=typeof n)throw new TypeError;var e=z.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=n.prototype;var i=new o,a=n.apply(i,e.concat(z.call(arguments)));return Object(a)===a?a:i}return n.apply(t,e.concat(z.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.flexboxlegacy=function(){return l("boxDirection")},T.canvas=function(){var t=n.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},T.canvastext=function(){return!(!h.canvas||!i(n.createElement("canvas").getContext("2d").fillText,"function"))},T.webgl=function(){return!!t.WebGLRenderingContext},T.touch=function(){var e;return"ontouchstart"in t||t.DocumentTouch&&n instanceof DocumentTouch?e=!0:I(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){e=9===t.offsetTop}),e},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!t.postMessage},T.websqldatabase=function(){return!!t.openDatabase},T.indexedDB=function(){return!!l("indexedDB",t)},T.hashchange=function(){return F("hashchange",t)&&(n.documentMode===e||n.documentMode>7)},T.history=function(){return!(!t.history||!history.pushState)},T.draganddrop=function(){var t=n.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},T.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(_.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(_.backgroundColor,"rgba")||a(_.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(_.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===n.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(_.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",e="linear-gradient(left top,#9f9, white);";return r((t+"-webkit- ".split(" ").join(n+t)+E.join(e+t)).slice(0,-t.length)),a(_.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&I("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(n){t=9===n.offsetLeft&&3===n.offsetHeight}),t},T.csstransitions=function(){return l("transition")},T.fontface=function(){var t;return I('@font-face {font-family:"font";src:url("https://")}',function(e,r){var o=n.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),t},T.generatedcontent=function(){var t;return I(["#",m,"{font:0/0 a}#",m,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(n){t=n.offsetHeight>=3}),t},T.video=function(){var t=n.createElement("video"),e=!1;try{(e=!!t.canPlayType)&&(e=new Boolean(e),e.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return e},T.audio=function(){var t=n.createElement("audio"),e=!1;try{(e=!!t.canPlayType)&&(e=new Boolean(e),e.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),e.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return e},T.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(t){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(t){return!1}},T.webworkers=function(){return!!t.Worker},T.applicationcache=function(){return!!t.applicationCache},T.svg=function(){return!!n.createElementNS&&!!n.createElementNS(j.svg,"svg").createSVGRect},T.inlinesvg=function(){var t=n.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==j.svg},T.smil=function(){return!!n.createElementNS&&/SVGAnimate/.test(x.call(n.createElementNS(j.svg,"animate")))},T.svgclippaths=function(){return!!n.createElementNS&&/SVGClipPath/.test(x.call(n.createElementNS(j.svg,"clipPath")))};for(var P in T)p(T,P)&&(s=P.toLowerCase(),h[s]=T[P](),R.push((h[s]?"":"no-")+s));return h.input||f(),h.addTest=function(t,n){if("object"==typeof t)for(var r in t)p(t,r)&&h.addTest(r,t[r]);else{if(t=t.toLowerCase(),h[t]!==e)return h;n="function"==typeof n?n():n,"undefined"!=typeof v&&v&&(g.className+=" "+(n?"":"no-")+t),h[t]=n}return h},r(""),y=b=null,function(t,n){function e(t,n){var e=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return e.innerHTML="x<style>"+n+"</style>",r.insertBefore(e.lastChild,r.firstChild)}function r(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function o(t){var n=m[t[v]];return n||(n={},g++,t[v]=g,m[g]=n),n}function i(t,e,r){if(e||(e=n),f)return e.createElement(t);r||(r=o(e));var i;return i=r.cache[t]?r.cache[t].cloneNode():h.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!i.canHaveChildren||d.test(t)||i.tagUrn?i:r.frag.appendChild(i)}function a(t,e){if(t||(t=n),f)return t.createDocumentFragment();e=e||o(t);for(var i=e.frag.cloneNode(),a=0,u=r(),c=u.length;c>a;a++)i.createElement(u[a]);return i}function u(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return y.shivMethods?i(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(t){return n.createElem(t),n.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,n.frag)}function c(t){t||(t=n);var r=o(t);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!e(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||u(t,r),t}var l,f,s="3.7.0",p=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,m={};!function(){try{var t=n.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,f=1==t.childNodes.length||function(){n.createElement("a");var t=n.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(e){l=!0,f=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:s,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};t.html5=y,c(n)}(this,n),h._version=d,h._prefixes=E,h._domPrefixes=C,h._cssomPrefixes=S,h.mq=N,h.hasEvent=F,h.testProp=function(t){return u([t])},h.testAllProps=l,h.testStyles=I,h.prefixed=function(t,n,e){return n?l(t,n,e):l(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(v?" js "+R.join(" "):""),h}(this,this.document);