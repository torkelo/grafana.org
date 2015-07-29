!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):Z[Q.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&t.__proto__==Object.prototype}function s(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function c(t){return D.call(t,function(t){return null!=t})}function u(t){return t.length>0?k.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function d(t){return t in q?q[t]:q[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[l(t)]?e:e+"px"}function h(t){var e,n;return A[t]||(e=F.createElement(t),F.body.appendChild(e),n=$(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function p(t){return"children"in t?N.call(t.children):k.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,n){for(C in e)n&&(o(e[C])||s(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),s(e[C])&&!s(t[C])&&(t[C]=[]),g(t[C],e[C],n)):e[C]!==w&&(t[C]=e[C])}function m(t,e){return e===w?k(t):k(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:(i?n.baseVal=e:t.className=e,void 0)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?k.parseJSON(t):t:e):t}catch(n){return t}}function _(t,e){e(t);for(var n in t.childNodes)_(t.childNodes[n],e)}var w,C,k,T,S,E,j=[],N=j.slice,D=j.filter,F=window.document,A={},q={},$=F.defaultView.getComputedStyle,L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},H=/^\s*<(\w+|!)[^>]*>/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,O=/^(?:body|html)$/i,P=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],R=F.createElement("table"),z=F.createElement("tr"),W={tr:F.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:z,th:z,"*":F.createElement("div")},B=/complete|loaded|interactive/,X=/^\.([\w-]+)$/,U=/^#([\w-]*)$/,V=/^[\w-]+$/,Z={},Q=Z.toString,Y={},G=F.createElement("div");return Y.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(t){return D.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){t.replace&&(t=t.replace(M,"<$1></$2>")),e===w&&(e=H.test(t)&&RegExp.$1),e in W||(e="*");var i,r,s=W[e];return s.innerHTML=""+t,r=k.each(N.call(s.childNodes),function(){s.removeChild(this)}),o(n)&&(i=k(r),k.each(n,function(t,e){P.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},Y.Z=function(t,e){return t=t||[],t.__proto__=k.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){if(t){if(e(t))return k(F).ready(t);if(Y.isZ(t))return t;var i;if(s(t))i=c(t);else if(r(t))i=[o(t)?k.extend({},t):t],t=null;else if(H.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return k(n).find(t);i=Y.qsa(F,t)}return Y.Z(i,t)}return Y.Z()},k=function(t,e){return Y.init(t,e)},k.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},Y.qsa=function(t,e){var n;return i(t)&&U.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(X.test(e)?t.getElementsByClassName(RegExp.$1):V.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},k.contains=function(t,e){return t!==e&&t.contains(e)},k.type=t,k.isFunction=e,k.isWindow=n,k.isArray=s,k.isPlainObject=o,k.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},k.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},k.camelCase=S,k.trim=function(t){return t.trim()},k.uuid=0,k.support={},k.expr={},k.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},k.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},k.grep=function(t,e){return D.call(t,e)},window.JSON&&(k.parseJSON=JSON.parse),k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()}),k.fn={forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,indexOf:j.indexOf,concat:j.concat,map:function(t){return k(k.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return k(N.apply(this,arguments))},ready:function(t){return B.test(F.readyState)?t(k):F.addEventListener("DOMContentLoaded",function(){t(k)},!1),this},get:function(t){return t===w?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return j.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):k(D.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return k(E(this.concat(k(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):k(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return k(n)},has:function(t){return this.filter(function(){return r(t)?k.contains(this,t):k(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:k(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:k(t)},find:function(t){var e,n=this;return e="object"==typeof t?k(t).filter(function(){var t=this;return j.some.call(n,function(e){return k.contains(e,t)})}):1==this.length?k(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=k(t));n&&!(r?r.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return k(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=k.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(E(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return D.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return k.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==$(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=k(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){k(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){k(this[0]).before(t=k(t));for(var e;(e=t.children()).length;)t=e.first();k(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=k(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){k(this).replaceWith(k(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=k(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return k(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return k(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;k(this).empty().append(v(this,t,e,n))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(C in t)y(this,C,t[C]);else y(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?x(n):w},val:function(t){return t===w?this[0]&&(this[0].multiple?k(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=k(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[S(e)]||$(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=l(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(C in e)e[C]||0===e[C]?i+=l(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(l(C))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(k(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return j.some.call(this,function(t){return this.test(b(t))},d(t))},addClass:function(t){return this.each(function(e){T=[];var n=b(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){k(this).hasClass(t)||T.push(t)},this),T.length&&b(this,n+(n?" ":"")+T.join(" "))})},removeClass:function(t){return this.each(function(e){return t===w?b(this,""):(T=b(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(d(t)," ")}),b(this,T.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=k(this),r=v(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=O.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(k(t).css("margin-top"))||0,n.left-=parseFloat(k(t).css("margin-left"))||0,i.top+=parseFloat(k(e[0]).css("border-top-width"))||0,i.left+=parseFloat(k(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||F.body;t&&!O.test(t.nodeName)&&"static"==k(t).css("position");)t=t.offsetParent;return t})}},k.fn.detach=k.fn.remove,["width","height"].forEach(function(t){k.fn[t]=function(e){var r,o=this[0],s=t.replace(/./,function(t){return t[0].toUpperCase()});return e===w?n(o)?o["inner"+s]:i(o)?o.documentElement["offset"+s]:(r=this.offset())&&r[t]:this.each(function(n){o=k(this),o.css(t,v(this,e,n,o[t]()))})}}),I.forEach(function(e,n){var i=n%2;k.fn[e]=function(){var e,r,o=k.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return k(t).remove();_(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},k.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return k(t)[e](this),this}}),Y.Z.prototype=k.fn,Y.uniq=E,Y.deserializeValue=x,k.zepto=Y,k}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=a&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),h=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),s&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),c&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),f&&(e.bb10=!0,e.version=f[2]),h&&(e.rimtabletos=!0,e.version=h[2]),p&&(n.playbook=!0),u&&(e.kindle=!0,e.version=u[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),m&&(n.firefox=!0,n.version=m[1]),e.tablet=!!(o||p||r&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(r||s||a||d||f||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(f[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function s(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return g[t]||t}function c(n,r,c,u,l,d){var h=e(n),p=f[h]||(f[h]=[]);o(r,c,function(e,r){var o=i(e);o.fn=r,o.sel=u,o.e in g&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(r,e);var c=o.del||r;o.proxy=function(t){var e=c.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=p.length,p.push(o),n.addEventListener(a(o.e),o.proxy,s(o,d))})}function u(t,i,r,c,u){var l=e(t);o(i||"",r,function(e,i){n(t,e,i,c).forEach(function(e){delete f[l][e.i],t.removeEventListener(a(e.e),e.proxy,s(e,u))})})}function l(e){var n,i={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(i[n]=e[n]);return t.each(b,function(t,n){i[t]=function(){return this[n]=m,e[t].apply(e,arguments)},i[n]=v}),i}function d(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var f=(t.zepto.qsa,{}),h=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:c,remove:u},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){c(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return u(i,e,t),n}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(r,o){c(o,n,i,e,function(n){return function(i){var r,s=t(i.target).closest(e,o).get(0);return s?(r=t.extend(l(i),{currentTarget:s,liveFired:o}),n.apply(s,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){u(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),d(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l("string"==typeof e?t.Event(e):e),r.data=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function s(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),c(o,e,i)}function a(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":x.test(t)?"script":_.test(t)&&"xml")||"text"}function d(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=d(e.url,e.data))}function h(e,n,i,r){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(i)?i:void 0:n,dataType:o?r||i:i}}function p(e,n,i,r){var o,s=t.isArray(n);t.each(n,function(n,a){o=t.type(a),r&&(n=i?r:r+"["+(s?"":n)+"]"),!r&&s?e.add(a.name,a.value):"array"==o||!i&&"object"==o?p(e,a,i,n):e.add(n,a)})}var g,m,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,_=/^(?:text|application)\/xml/i,w="application/json",C="text/html",k=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,i="jsonp"+ ++v,r=y.createElement("script"),c=function(){clearTimeout(n),t(r).remove(),delete window[i]},l=function(t){c(),t&&"timeout"!=t||(window[i]=u),a(null,t||"abort",d,e)},d={abort:l};return o(d,e)===!1?(l("abort"),!1):(window[i]=function(t){c(),s(t,d,e)},r.onerror=function(){l("error")},r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),f(n),n.cache===!1&&(n.url=d(n.url,"_="+Date.now()));var r=n.dataType,c=/=\?/.test(n.url);if("jsonp"==r||c)return c||(n.url=d(n.url,"callback=?")),t.ajaxJSONP(n);var h,p=n.accepts[r],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=u,clearTimeout(h);var e,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){r=r||l(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==r?(1,eval)(e):"xml"==r?e=b.responseXML:"json"==r&&(e=k.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?a(i,"parsererror",b,n):s(e,b,n)}else a(null,b.status?"error":"abort",b,n)}};var x="async"in n?n.async:!0;b.open(n.type,n.url,x);for(m in n.headers)b.setRequestHeader(m,n.headers[m]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(h=setTimeout(function(){b.onreadystatechange=u,b.abort(),a(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=h(e,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return o?o+t:i(t)}var o,s,a,c,u,l,d,f,h="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(p,function(t,n){return m.style[t+"TransitionProperty"]!==e?(h="-"+i(t)+"-",o=n,!1):void 0}),s=h+"transform",y[a=h+"transition-property"]=y[c=h+"transition-duration"]=y[u=h+"transition-timing-function"]=y[l=h+"animation-name"]=y[d=h+"animation-duration"]=y[f=h+"animation-timing-function"]="",t.fx={off:o===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:h,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,r)},t.fn.anim=function(i,r,o,h){var p,g,m,b={},x="",_=this,w=t.fx.transitionEnd;if(r===e&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)b[l]=i,b[d]=r+"s",b[f]=o||"linear",w=t.fx.animationEnd;else{g=[];for(p in i)v.test(p)?x+=p+"("+i[p]+") ":(b[p]=i[p],g.push(n(p)));x&&(b[s]=x,g.push(s)),r>0&&"object"==typeof i&&(b[a]=g.join(", "),b[c]=r+"s",b[u]=o||"linear")}return m=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(w,m)}t(this).css(y),h&&h.call(this)},r>0&&this.bind(w,m),this.size()&&this.get(0).clientLeft,this.css(b),0>=r&&setTimeout(function(){_.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,e){function n(n,i,r,o,s){"function"!=typeof i||s||(s=i,i=e);var a={opacity:r};return o&&(a.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,s)}function i(e,i,r,o){return n(e,i,0,r,function(){s.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),s=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?s.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,i){var c=e[a],u=c&&r[c];if(void 0===i)return u||n(e);if(u){if(i in u)return u[i];var l=s(i);if(l in u)return u[l]}return o.call(t(e),i)}function n(e,n,o){var c=e[a]||(e[a]=++t.uuid),u=r[c]||(r[c]=i(e));return void 0!==n&&(u[s(n)]=o),u}function i(e){var n={};return t.each(e.attributes,function(e,i){0==i.name.indexOf("data-")&&(n[s(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,s=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0==this.length?void 0:e(this[0],i):this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[a],i=n&&r[n];i&&t.each(e,function(){delete i[s(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=a.exec(t);if(r&&r[2]in s&&(n=s[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,s=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,u="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,s,a){try{var l;!n&&s?n="*":c.test(n)&&(l=t(e).addClass(u),n="."+u+" "+n);var d=r(e,n)}catch(f){throw console.error("error performing selector: %o",o),f}finally{l&&l.removeClass(u)}return s?i.uniq(t.map(d,function(t,e){return s.call(t,e,d,a)})):d})},i.matches=function(t,e){return n(e,function(e,n,i){return!(e&&!o(t,e)||n&&n.call(t,null,i)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var r=Math.abs(t-e),o=Math.abs(n-i);return r>=o?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){u=null,l.last&&(l.el.trigger("longTap"),l={})}function r(){u&&clearTimeout(u),u=null}function o(){s&&clearTimeout(s),a&&clearTimeout(a),c&&clearTimeout(c),u&&clearTimeout(u),s=a=c=u=null,l={}}var s,a,c,u,l={},d=750;t(document).ready(function(){var f,h;t(document.body).bind("touchstart",function(n){f=Date.now(),h=f-(l.last||f),l.el=t(e(n.touches[0].target)),s&&clearTimeout(s),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,h>0&&250>=h&&(l.isDoubleTap=!0),l.last=f,u=setTimeout(i,d)}).bind("touchmove",function(t){r(),l.x2=t.touches[0].pageX,l.y2=t.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&t.preventDefault()}).bind("touchend",function(){r(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?c=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,l.el.trigger(e),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):s=setTimeout(function(){s=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&function(t){var e,n;return e=function(t,e,n,i,r){var o,s;return t?(s=t[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(e){return s+=parseInt(t.css("padding-"+e),10),i&&(s+=parseInt(t.css("border-"+e+"-width"),10)),r?s+=parseInt(t.css("margin-"+e),10):void 0}),s):null},["width","height"].forEach(function(n){var i,r,o,s,a;return i=n.replace(/./,function(t){return t[0].toUpperCase()}),(r=t.fn)[s="inner"+i]||(r[s]=function(t){return e(this,i,n,!1,t)}),(o=t.fn)[a="outer"+i]||(o[a]=function(t){return e(this,i,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);