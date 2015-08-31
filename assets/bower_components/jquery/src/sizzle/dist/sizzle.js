/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
!function(e){function t(e,t,n,r){var o,i,u,a,s,c,f,p,h,m;if((t?t.ownerDocument||t:M)!==j&&L(t),t=t||j,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!r&&R){if(11!==a&&(o=yt.exec(e)))if(u=o[1]){if(9===a){if(i=t.getElementById(u),!i||!i.parentNode)return n;if(i.id===u)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(u))&&B(t,i)&&i.id===u)return n.push(i),n}else{if(o[2])return K.apply(n,t.getElementsByTagName(e)),n;if((u=o[3])&&b.getElementsByClassName)return K.apply(n,t.getElementsByClassName(u)),n}if(b.qsa&&(!P||!P.test(e))){if(p=f=F,h=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=N(e),(f=t.getAttribute("id"))?p=f.replace(xt,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",s=c.length;s--;)c[s]=p+d(c[s]);h=wt.test(e)&&l(t.parentNode)||t,m=c.join(",")}if(m)try{return K.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{f||t.removeAttribute("id")}}}return k(e.replace(st,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>E.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function o(e){var t=j.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),r=e.length;r--;)E.attrHandle[n[r]]=t}function u(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function s(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=z++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,u){var a,s,c=[H,i];if(u){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if(s=t[F]||(t[F]={}),(a=s[r])&&a[0]===H&&a[1]===i)return c[2]=a[2];if(s[r]=c,c[2]=e(t,n,u))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var o=0,i=n.length;i>o;o++)t(e,n[o],r);return r}function g(e,t,n,r,o){for(var i,u=[],a=0,s=e.length,c=null!=t;s>a;a++)(i=e[a])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(a));return u}function v(e,t,n,o,i,u){return o&&!o[F]&&(o=v(o)),i&&!i[F]&&(i=v(i,u)),r(function(r,u,a,s){var c,l,f,d=[],p=[],h=u.length,v=r||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:g(v,d,e,a,s),w=n?i||(r?e:h||o)?[]:u:y;if(n&&n(y,w,a,s),o)for(c=g(w,p),o(c,[],a,s),l=c.length;l--;)(f=c[l])&&(w[p[l]]=!(y[p[l]]=f));if(r){if(i||e){if(i){for(c=[],l=w.length;l--;)(f=w[l])&&c.push(y[l]=f);i(null,w=[],c,s)}for(l=w.length;l--;)(f=w[l])&&(c=i?et(r,f):d[l])>-1&&(r[c]=!(u[c]=f))}}else w=g(w===u?w.splice(h,w.length):w),i?i(null,u,w,s):K.apply(u,w)})}function y(e){for(var t,n,r,o=e.length,i=E.relative[e[0].type],u=i||E.relative[" "],a=i?1:0,s=p(function(e){return e===t},u,!0),c=p(function(e){return et(t,e)>-1},u,!0),l=[function(e,n,r){var o=!i&&(r||n!==D)||((t=n).nodeType?s(e,n,r):c(e,n,r));return t=null,o}];o>a;a++)if(n=E.relative[e[a].type])l=[p(h(l),n)];else{if(n=E.filter[e[a].type].apply(null,e[a].matches),n[F]){for(r=++a;o>r&&!E.relative[e[r].type];r++);return v(a>1&&h(l),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(st,"$1"),n,r>a&&y(e.slice(a,r)),o>r&&y(e=e.slice(r)),o>r&&d(e))}l.push(n)}return h(l)}function w(e,n){var o=n.length>0,i=e.length>0,u=function(r,u,a,s,c){var l,f,d,p=0,h="0",m=r&&[],v=[],y=D,w=r||i&&E.find.TAG("*",c),x=H+=null==y?1:Math.random()||.1,b=w.length;for(c&&(D=u!==j&&u);h!==b&&null!=(l=w[h]);h++){if(i&&l){for(f=0;d=e[f++];)if(d(l,u,a)){s.push(l);break}c&&(H=x)}o&&((l=!d&&l)&&p--,r&&m.push(l))}if(p+=h,o&&h!==p){for(f=0;d=n[f++];)d(m,v,u,a);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=J.call(s));v=g(v)}K.apply(s,v),c&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(s)}return c&&(H=x,D=y),m};return o?r(u):u}var x,b,E,C,T,N,S,k,D,q,A,L,j,I,R,P,O,$,B,F="sizzle"+1*new Date,M=e.document,H=0,z=0,U=n(),W=n(),V=n(),_=function(e,t){return e===t&&(A=!0),0},G=1<<31,Y={}.hasOwnProperty,X=[],J=X.pop,Q=X.push,K=X.push,Z=X.slice,et=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",rt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=rt.replace("w","w#"),it="\\["+nt+"*("+rt+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+nt+"*\\]",ut=":("+rt+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+it+")*)|"+".*"+")\\)|)",at=new RegExp(nt+"+","g"),st=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),lt=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ft=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(ut),pt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+rt+")"),CLASS:new RegExp("^\\.("+rt+")"),TAG:new RegExp("^("+rt.replace("w","w*")+")"),ATTR:new RegExp("^"+it),PSEUDO:new RegExp("^"+ut),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,xt=/'|\\/g,bt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),Et=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)},Ct=function(){L()};try{K.apply(X=Z.call(M.childNodes),M.childNodes),X[M.childNodes.length].nodeType}catch(Tt){K={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},T=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:M;return r!==j&&9===r.nodeType&&r.documentElement?(j=r,I=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ct,!1):n.attachEvent&&n.attachEvent("onunload",Ct)),R=!T(r),b.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=vt.test(r.getElementsByClassName),b.getById=o(function(e){return I.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),b.getById?(E.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&R){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},E.filter.ID=function(e){var t=e.replace(bt,Et);return function(e){return e.getAttribute("id")===t}}):(delete E.find.ID,E.filter.ID=function(e){var t=e.replace(bt,Et);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),E.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},E.find.CLASS=b.getElementsByClassName&&function(e,t){return R?t.getElementsByClassName(e):void 0},O=[],P=[],(b.qsa=vt.test(r.querySelectorAll))&&(o(function(e){I.appendChild(e).innerHTML="<a id='"+F+"'></a>"+"<select id='"+F+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+nt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+nt+"*(?:value|"+tt+")"),e.querySelectorAll("[id~="+F+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||P.push(".#.+[+~]")}),o(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+nt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(b.matchesSelector=vt.test($=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&o(function(e){b.disconnectedMatch=$.call(e,"div"),$.call(e,"[s!='']:x"),O.push("!=",ut)}),P=P.length&&new RegExp(P.join("|")),O=O.length&&new RegExp(O.join("|")),t=vt.test(I.compareDocumentPosition),B=t||vt.test(I.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===M&&B(M,e)?-1:t===r||t.ownerDocument===M&&B(M,t)?1:q?et(q,e)-et(q,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,o=0,i=e.parentNode,a=t.parentNode,s=[e],c=[t];if(!i||!a)return e===r?-1:t===r?1:i?-1:a?1:q?et(q,e)-et(q,t):0;if(i===a)return u(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;s[o]===c[o];)o++;return o?u(s[o],c[o]):s[o]===M?-1:c[o]===M?1:0},r):j},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==j&&L(e),n=n.replace(ft,"='$1']"),!(!b.matchesSelector||!R||O&&O.test(n)||P&&P.test(n)))try{var r=$.call(e,n);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return t(n,j,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==j&&L(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==j&&L(e);var n=E.attrHandle[t.toLowerCase()],r=n&&Y.call(E.attrHandle,t.toLowerCase())?n(e,t,!R):void 0;return void 0!==r?r:b.attributes||!R?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,o=0;if(A=!b.detectDuplicates,q=!b.sortStable&&e.slice(0),e.sort(_),A){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return q=null,e},C=t.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},E=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(bt,Et),e[3]=(e[3]||e[4]||e[5]||"").replace(bt,Et),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&dt.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(bt,Et).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+nt+")"+e+"("+nt+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(o){var i=t.attr(o,e);return null==i?"!="===n:n?(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i.replace(at," ")+" ").indexOf(r)>-1:"|="===n?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var c,l,f,d,p,h,m=i!==u?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!s&&!a;if(g){if(i){for(;m;){for(f=t;f=f[m];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?g.firstChild:g.lastChild],u&&y){for(l=g[F]||(g[F]={}),c=l[e]||[],p=c[0]===H&&c[1],d=c[0]===H&&c[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[H,p,d];break}}else if(y&&(c=(t[F]||(t[F]={}))[e])&&c[0]===H)d=c[1];else for(;(f=++p&&f&&f[m]||(d=p=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[F]||(f[F]={}))[e]=[H,d]),f!==t)););return d-=o,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,n){var o,i=E.pseudos[e]||E.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[F]?i(n):i.length>1?(o=[e,e,"",n],E.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,o=i(e,n),u=o.length;u--;)r=et(e,o[u]),e[r]=!(t[r]=o[u])}):function(e){return i(e,0,o)}):i}},pseudos:{not:r(function(e){var t=[],n=[],o=S(e.replace(st,"$1"));return o[F]?r(function(e,t,n,r){for(var i,u=o(e,null,r,[]),a=e.length;a--;)(i=u[a])&&(e[a]=!(t[a]=i))}):function(e,r,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(bt,Et),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(bt,Et).toLowerCase(),function(t){var n;do if(n=R?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===I},focus:function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!E.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},E.pseudos.nth=E.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})E.pseudos[x]=a(x);for(x in{submit:!0,reset:!0})E.pseudos[x]=s(x);f.prototype=E.filters=E.pseudos,E.setFilters=new f,N=t.tokenize=function(e,n){var r,o,i,u,a,s,c,l=W[e+" "];if(l)return n?0:l.slice(0);for(a=e,s=[],c=E.preFilter;a;){(!r||(o=ct.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),s.push(i=[])),r=!1,(o=lt.exec(a))&&(r=o.shift(),i.push({value:r,type:o[0].replace(st," ")}),a=a.slice(r.length));for(u in E.filter)!(o=ht[u].exec(a))||c[u]&&!(o=c[u](o))||(r=o.shift(),i.push({value:r,type:u,matches:o}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):W(e,s).slice(0)},S=t.compile=function(e,t){var n,r=[],o=[],i=V[e+" "];if(!i){for(t||(t=N(e)),n=t.length;n--;)i=y(t[n]),i[F]?r.push(i):o.push(i);i=V(e,w(o,r)),i.selector=e}return i},k=t.select=function(e,t,n,r){var o,i,u,a,s,c="function"==typeof e&&e,f=!r&&N(e=c.selector||e);if(n=n||[],1===f.length){if(i=f[0]=f[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&b.getById&&9===t.nodeType&&R&&E.relative[i[1].type]){if(t=(E.find.ID(u.matches[0].replace(bt,Et),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=ht.needsContext.test(e)?0:i.length;o--&&(u=i[o],!E.relative[a=u.type]);)if((s=E.find[a])&&(r=s(u.matches[0].replace(bt,Et),wt.test(i[0].type)&&l(t.parentNode)||t))){if(i.splice(o,1),e=r.length&&d(i),!e)return K.apply(n,r),n;break}}return(c||S(e,f))(r,t,!R,n,wt.test(e)&&l(t.parentNode)||t),n},b.sortStable=F.split("").sort(_).join("")===F,b.detectDuplicates=!!A,L(),b.sortDetached=o(function(e){return 1&e.compareDocumentPosition(j.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||i(tt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.Sizzle=t}(window);