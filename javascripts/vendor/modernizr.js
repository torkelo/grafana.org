/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,n){function i(t){y.cssText=t}function s(t,e){return i(C.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function o(t,e){for(var i in t){var s=t[i];if(!r(s,"-")&&y[s]!==n)return"pfx"==e?s:!0}return!1}function l(t,e,i){for(var s in t){var r=e[t[s]];if(r!==n)return i===!1?t[s]:a(r,"function")?r.bind(i||e):r}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+T.join(i+" ")+i).split(" ");return a(e,"string")||a(e,"undefined")?o(s,e):(s=(t+" "+S.join(i+" ")+i).split(" "),l(s,e,n))}function u(){p.input=function(n){for(var i=0,s=n.length;s>i;i++)D[n[i]]=!!(n[i]in b);return D.list&&(D.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var i,s,a,r=0,o=t.length;o>r;r++)b.setAttribute("type",s=t[r]),i="text"!==b.type,i&&(b.value=x,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&b.style.WebkitAppearance!==n?(m.appendChild(b),a=e.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,m.removeChild(b)):/^(search|tel)$/.test(s)||(i=/^(url|email)$/.test(s)?b.checkValidity&&b.checkValidity()===!1:b.value!=x)),j[t[r]]=!!i;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,h,f="2.7.2",p={},g=!0,m=e.documentElement,v="modernizr",_=e.createElement(v),y=_.style,b=e.createElement("input"),x=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),S=k.toLowerCase().split(" "),F={svg:"http://www.w3.org/2000/svg"},E={},j={},D={},A=[],$=A.slice,N=function(t,n,i,s){var a,r,o,l,c=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(i,10))for(;i--;)o=e.createElement("div"),o.id=s?s[i]:v+(i+1),c.appendChild(o);return a=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(u?c:d).innerHTML+=a,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),r=n(c,t),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),m.style.overflow=l),!!r},q=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return N("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},M=function(){function t(t,s){s=s||e.createElement(i[t]||"div"),t="on"+t;var r=t in s;return r||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),r=a(s[t],"function"),a(s[t],"undefined")||(s[t]=n),s.removeAttribute(t))),s=null,r}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),H={}.hasOwnProperty;h=a(H,"undefined")||a(H.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return H.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=$.call(arguments,1),i=function(){if(this instanceof i){var s=function(){};s.prototype=e.prototype;var a=new s,r=e.apply(a,n.concat($.call(arguments)));return Object(r)===r?r:a}return e.apply(t,n.concat($.call(arguments)))};return i}),E.flexbox=function(){return c("flexWrap")},E.flexboxlegacy=function(){return c("boxDirection")},E.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},E.canvastext=function(){return!(!p.canvas||!a(e.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!t.WebGLRenderingContext},E.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:N(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!t.postMessage},E.websqldatabase=function(){return!!t.openDatabase},E.indexedDB=function(){return!!c("indexedDB",t)},E.hashchange=function(){return M("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},E.history=function(){return!(!t.history||!history.pushState)},E.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},E.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},E.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),r(y.backgroundColor,"rgba")},E.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),r(y.backgroundColor,"rgba")||r(y.backgroundColor,"hsla")},E.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},E.backgroundsize=function(){return c("backgroundSize")},E.borderimage=function(){return c("borderImage")},E.borderradius=function(){return c("borderRadius")},E.boxshadow=function(){return c("boxShadow")},E.textshadow=function(){return""===e.createElement("div").style.textShadow},E.opacity=function(){return s("opacity:.55"),/^0.55$/.test(y.opacity)},E.cssanimations=function(){return c("animationName")},E.csscolumns=function(){return c("columnCount")},E.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),r(y.backgroundImage,"gradient")},E.cssreflections=function(){return c("boxReflect")},E.csstransforms=function(){return!!c("transform")},E.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in m.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},E.csstransitions=function(){return c("transition")},E.fontface=function(){var t;return N('@font-face {font-family:"font";src:url("https://")}',function(n,i){var s=e.getElementById("smodernizr"),a=s.sheet||s.styleSheet,r=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";t=/src/i.test(r)&&0===r.indexOf(i.split(" ")[0])}),t},E.generatedcontent=function(){var t;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},E.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},E.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},E.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},E.webworkers=function(){return!!t.Worker},E.applicationcache=function(){return!!t.applicationCache},E.svg=function(){return!!e.createElementNS&&!!e.createElementNS(F.svg,"svg").createSVGRect},E.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==F.svg},E.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(F.svg,"animate")))},E.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(F.svg,"clipPath")))};for(var z in E)h(E,z)&&(d=z.toLowerCase(),p[d]=E[z](),A.push((p[d]?"":"no-")+d));return p.input||u(),p.addTest=function(t,e){if("object"==typeof t)for(var i in t)h(t,i)&&p.addTest(i,t[i]);else{if(t=t.toLowerCase(),p[t]!==n)return p;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(m.className+=" "+(e?"":"no-")+t),p[t]=e}return p},i(""),_=b=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=_.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=v[t[g]];return e||(e={},m++,t[g]=m,v[m]=e),e}function a(t,n,i){if(n||(n=e),u)return n.createElement(t);i||(i=s(n));var a;return a=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!a.canHaveChildren||f.test(t)||a.tagUrn?a:i.frag.appendChild(a)}function r(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||s(t);for(var a=n.frag.cloneNode(),r=0,o=i(),l=o.length;l>r;r++)a.createElement(o[r]);return a}function o(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return _.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(_,e.frag)}function l(t){t||(t=e);var i=s(t);return!_.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||o(t,i),t}var c,u,d="3.7.0",h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,u=!0}}();var _={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:h.shivCSS!==!1,supportsUnknownElements:u,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:r};t.html5=_,l(e)}(this,e),p._version=f,p._prefixes=C,p._domPrefixes=S,p._cssomPrefixes=T,p.mq=q,p.hasEvent=M,p.testProp=function(t){return o([t])},p.testAllProps=c,p.testStyles=N,p.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+A.join(" "):""),p}(this,this.document);