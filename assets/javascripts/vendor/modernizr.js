/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,n){function i(t){b.cssText=t}function r(t,e){return i(C.join(t+";")+(e||""))}function s(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var r=t[i];if(!o(r,"-")&&b[r]!==n)return"pfx"==e?r:!0}return!1}function c(t,e,i){for(var r in t){var o=e[t[r]];if(o!==n)return i===!1?t[r]:s(o,"function")?o.bind(i||e):o}return!1}function l(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+T.join(i+" ")+i).split(" ");return s(e,"string")||s(e,"undefined")?a(r,e):(r=(t+" "+S.join(i+" ")+i).split(" "),c(r,e,n))}function u(){p.input=function(n){for(var i=0,r=n.length;r>i;i++)j[n[i]]=!!(n[i]in _);return j.list&&(j.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var i,r,s,o=0,a=t.length;a>o;o++)_.setAttribute("type",r=t[o]),i="text"!==_.type,i&&(_.value=x,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&_.style.WebkitAppearance!==n?(m.appendChild(_),s=e.defaultView,i=s.getComputedStyle&&"textfield"!==s.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,m.removeChild(_)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?_.checkValidity&&_.checkValidity()===!1:_.value!=x)),D[t[o]]=!!i;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,h="2.7.2",p={},g=!0,m=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,_=e.createElement("input"),x=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),S=k.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},F={},D={},j={},N=[],A=N.slice,q=function(t,n,i,r){var s,o,a,c,l=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=r?r[i]:v+(i+1),l.appendChild(a);return s=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=s,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),o=n(l,t),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=c),!!o},$=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return q("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},L=function(){function t(t,r){r=r||e.createElement(i[t]||"div"),t="on"+t;var o=t in r;return o||(r.setAttribute||(r=e.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(t,""),o=s(r[t],"function"),s(r[t],"undefined")||(r[t]=n),r.removeAttribute(t))),r=null,o}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),H={}.hasOwnProperty;f=s(H,"undefined")||s(H.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(t,e){return H.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=A.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var s=new r,o=e.apply(s,n.concat(A.call(arguments)));return Object(o)===o?o:s}return e.apply(t,n.concat(A.call(arguments)))};return i}),F.flexbox=function(){return l("flexWrap")},F.flexboxlegacy=function(){return l("boxDirection")},F.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},F.canvastext=function(){return!(!p.canvas||!s(e.createElement("canvas").getContext("2d").fillText,"function"))},F.webgl=function(){return!!t.WebGLRenderingContext},F.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:q(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},F.geolocation=function(){return"geolocation"in navigator},F.postmessage=function(){return!!t.postMessage},F.websqldatabase=function(){return!!t.openDatabase},F.indexedDB=function(){return!!l("indexedDB",t)},F.hashchange=function(){return L("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},F.history=function(){return!(!t.history||!history.pushState)},F.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},F.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},F.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},F.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},F.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},F.backgroundsize=function(){return l("backgroundSize")},F.borderimage=function(){return l("borderImage")},F.borderradius=function(){return l("borderRadius")},F.boxshadow=function(){return l("boxShadow")},F.textshadow=function(){return""===e.createElement("div").style.textShadow},F.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},F.cssanimations=function(){return l("animationName")},F.csscolumns=function(){return l("columnCount")},F.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),o(b.backgroundImage,"gradient")},F.cssreflections=function(){return l("boxReflect")},F.csstransforms=function(){return!!l("transform")},F.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in m.style&&q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},F.csstransitions=function(){return l("transition")},F.fontface=function(){var t;return q('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=e.getElementById("smodernizr"),s=r.sheet||r.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";t=/src/i.test(o)&&0===o.indexOf(i.split(" ")[0])}),t},F.generatedcontent=function(){var t;return q(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},F.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},F.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},F.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},F.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},F.webworkers=function(){return!!t.Worker},F.applicationcache=function(){return!!t.applicationCache},F.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},F.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},F.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(E.svg,"animate")))},F.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(E.svg,"clipPath")))};for(var M in F)f(F,M)&&(d=M.toLowerCase(),p[d]=F[M](),N.push((p[d]?"":"no-")+d));return p.input||u(),p.addTest=function(t,e){if("object"==typeof t)for(var i in t)f(t,i)&&p.addTest(i,t[i]);else{if(t=t.toLowerCase(),p[t]!==n)return p;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(m.className+=" "+(e?"":"no-")+t),p[t]=e}return p},i(""),y=_=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=v[t[g]];return e||(e={},m++,t[g]=m,v[m]=e),e}function s(t,n,i){if(n||(n=e),u)return n.createElement(t);i||(i=r(n));var s;return s=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!s.canHaveChildren||h.test(t)||s.tagUrn?s:i.frag.appendChild(s)}function o(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||r(t);for(var s=n.frag.cloneNode(),o=0,a=i(),c=a.length;c>o;o++)s.createElement(a[o]);return s}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function c(t){t||(t=e);var i=r(t);return!y.shivCSS||l||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||a(t,i),t}var l,u,d="3.7.0",f=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:s,createDocumentFragment:o};t.html5=y,c(e)}(this,e),p._version=h,p._prefixes=C,p._domPrefixes=S,p._cssomPrefixes=T,p.mq=$,p.hasEvent=L,p.testProp=function(t){return a([t])},p.testAllProps=l,p.testStyles=q,p.prefixed=function(t,e,n){return e?l(t,e,n):l(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+N.join(" "):""),p}(this,this.document);