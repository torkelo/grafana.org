/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
!function(e){function t(e,t,n,r){var i,o,a,u,c,s,f,h,m,g;if((t?t.ownerDocument||t:H)!==R&&I(t),t=t||R,n=n||[],!e||"string"!=typeof e)return n;if(1!==(u=t.nodeType)&&9!==u)return[];if(k&&!r){if(i=yt.exec(e))if(a=i[1]){if(9===u){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&q(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&b.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(b.qsa&&(!P||!P.test(e))){if(h=f=M,m=t,g=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(s=d(e),(f=t.getAttribute("id"))?h=f.replace(xt,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",c=s.length;c--;)s[c]=h+p(s[c]);m=Nt.test(e)&&l(t.parentNode)||t,g=s.join(",")}if(g)try{return Z.apply(n,m.querySelectorAll(g)),n}catch(v){}finally{f||t.removeAttribute("id")}}}return C(e.replace(ct,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>E.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[M]=!0,e}function i(e){var t=R.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)E.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function c(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function s(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&typeof e.getElementsByTagName!==X&&e}function f(){}function d(e,n){var r,i,o,a,u,c,s,l=G[e+" "];if(l)return n?0:l.slice(0);for(u=e,c=[],s=E.preFilter;u;){(!r||(i=st.exec(u)))&&(i&&(u=u.slice(i[0].length)||u),c.push(o=[])),r=!1,(i=lt.exec(u))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ct," ")}),u=u.slice(r.length));for(a in E.filter)!(i=ht[a].exec(u))||s[a]&&!(i=s[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),u=u.slice(r.length));if(!r)break}return n?u.length:u?t.error(e):G(e,c).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=_++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var u,c,s=[F,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(c=t[M]||(t[M]={}),(u=c[r])&&u[0]===F&&u[1]===o)return s[2]=u[2];if(c[r]=s,s[2]=e(t,n,a))return!0}}}function m(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],u=0,c=e.length,s=null!=t;c>u;u++)(o=e[u])&&(!n||n(o,r,i))&&(a.push(o),s&&t.push(u));return a}function v(e,t,n,i,o,a){return i&&!i[M]&&(i=v(i)),o&&!o[M]&&(o=v(o,a)),r(function(r,a,u,c){var s,l,f,d=[],p=[],h=a.length,m=r||x(t||"*",u.nodeType?[u]:u,[]),v=!e||!r&&t?m:g(m,d,e,u,c),y=n?o||(r?e:h||i)?[]:a:v;if(n&&n(v,y,u,c),i)for(s=g(y,p),i(s,[],u,c),l=s.length;l--;)(f=s[l])&&(y[p[l]]=!(v[p[l]]=f));if(r){if(o||e){if(o){for(s=[],l=y.length;l--;)(f=y[l])&&s.push(v[l]=f);o(null,y=[],s,c)}for(l=y.length;l--;)(f=y[l])&&(s=o?tt.call(r,f):d[l])>-1&&(r[s]=!(a[s]=f))}}else y=g(y===a?y.splice(h,y.length):y),o?o(null,a,y,c):Z.apply(a,y)})}function y(e){for(var t,n,r,i=e.length,o=E.relative[e[0].type],a=o||E.relative[" "],u=o?1:0,c=h(function(e){return e===t},a,!0),s=h(function(e){return tt.call(t,e)>-1},a,!0),l=[function(e,n,r){return!o&&(r||n!==A)||((t=n).nodeType?c(e,n,r):s(e,n,r))}];i>u;u++)if(n=E.relative[e[u].type])l=[h(m(l),n)];else{if(n=E.filter[e[u].type].apply(null,e[u].matches),n[M]){for(r=++u;i>r&&!E.relative[e[r].type];r++);return v(u>1&&m(l),u>1&&p(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(ct,"$1"),n,r>u&&y(e.slice(u,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}l.push(n)}return m(l)}function N(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,u,c,s){var l,f,d,p=0,h="0",m=r&&[],v=[],y=A,N=r||o&&E.find.TAG("*",s),x=F+=null==y?1:Math.random()||.1,C=N.length;for(s&&(A=a!==R&&a);h!==C&&null!=(l=N[h]);h++){if(o&&l){for(f=0;d=e[f++];)if(d(l,a,u)){c.push(l);break}s&&(F=x)}i&&((l=!d&&l)&&p--,r&&m.push(l))}if(p+=h,i&&h!==p){for(f=0;d=n[f++];)d(m,v,a,u);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=W.call(c));v=g(v)}Z.apply(c,v),s&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(c)}return s&&(F=x,A=y),m};return i?r(a):a}function x(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function C(e,t,n,r){var i,o,a,u,c,s=d(e);if(!r&&1===s.length){if(o=s[0]=s[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&b.getById&&9===t.nodeType&&k&&E.relative[o[1].type]){if(t=(E.find.ID(a.matches[0].replace(Ct,wt),t)||[])[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=ht.needsContext.test(e)?0:o.length;i--&&(a=o[i],!E.relative[u=a.type]);)if((c=E.find[u])&&(r=c(a.matches[0].replace(Ct,wt),Nt.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return S(e,s)(r,t,!k,n,Nt.test(e)&&l(t.parentNode)||t),n}var w,b,E,T,D,S,A,L,B,I,R,O,k,P,$,j,q,M="sizzle"+-new Date,H=e.document,F=0,_=0,z=n(),G=n(),V=n(),U=function(e,t){return e===t&&(B=!0),0},X="undefined",J=1<<31,K={}.hasOwnProperty,Q=[],W=Q.pop,Y=Q.push,Z=Q.push,et=Q.slice,tt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),at="\\["+rt+"*("+it+")"+rt+"*(?:([*^$|!~]?=)"+rt+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ot+")|)|)"+rt+"*\\]",ut=":("+it+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+at.replace(3,8)+")*)|.*)\\)|)",ct=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),st=new RegExp("^"+rt+"*,"+rt+"*"),lt=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),dt=new RegExp(ut),pt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+ut),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Nt=/[+~]/,xt=/'|\\/g,Ct=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),wt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{Z.apply(Q=et.call(H.childNodes),H.childNodes),Q[H.childNodes.length].nodeType}catch(bt){Z={apply:Q.length?function(e,t){Y.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},D=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},I=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:H,r=n.defaultView;return n!==R&&9===n.nodeType&&n.documentElement?(R=n,O=n.documentElement,k=!D(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){I()},!1):r.attachEvent&&r.attachEvent("onunload",function(){I()})),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=vt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),b.getById=i(function(e){return O.appendChild(e).id=M,!n.getElementsByName||!n.getElementsByName(M).length}),b.getById?(E.find.ID=function(e,t){if(typeof t.getElementById!==X&&k){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},E.filter.ID=function(e){var t=e.replace(Ct,wt);return function(e){return e.getAttribute("id")===t}}):(delete E.find.ID,E.filter.ID=function(e){var t=e.replace(Ct,wt);return function(e){var n=typeof e.getAttributeNode!==X&&e.getAttributeNode("id");return n&&n.value===t}}),E.find.TAG=b.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==X?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},E.find.CLASS=b.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==X&&k?t.getElementsByClassName(e):void 0},$=[],P=[],(b.qsa=vt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&P.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(b.matchesSelector=vt.test(j=O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(e){b.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),$.push("!=",ut)}),P=P.length&&new RegExp(P.join("|")),$=$.length&&new RegExp($.join("|")),t=vt.test(O.compareDocumentPosition),q=t||vt.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return B=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!b.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===H&&q(H,e)?-1:t===n||t.ownerDocument===H&&q(H,t)?1:L?tt.call(L,e)-tt.call(L,t):0:4&r?-1:1)}:function(e,t){if(e===t)return B=!0,0;var r,i=0,o=e.parentNode,u=t.parentNode,c=[e],s=[t];if(!o||!u)return e===n?-1:t===n?1:o?-1:u?1:L?tt.call(L,e)-tt.call(L,t):0;if(o===u)return a(e,t);for(r=e;r=r.parentNode;)c.unshift(r);for(r=t;r=r.parentNode;)s.unshift(r);for(;c[i]===s[i];)i++;return i?a(c[i],s[i]):c[i]===H?-1:s[i]===H?1:0},n):R},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==R&&I(e),n=n.replace(ft,"='$1']"),!(!b.matchesSelector||!k||$&&$.test(n)||P&&P.test(n)))try{var r=j.call(e,n);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,R,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==R&&I(e),q(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==R&&I(e);var n=E.attrHandle[t.toLowerCase()],r=n&&K.call(E.attrHandle,t.toLowerCase())?n(e,t,!k):void 0;return void 0!==r?r:b.attributes||!k?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(B=!b.detectDuplicates,L=!b.sortStable&&e.slice(0),e.sort(U),B){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return L=null,e},T=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=T(t);return n},E=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ct,wt),e[3]=(e[4]||e[5]||"").replace(Ct,wt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&dt.test(n)&&(t=d(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ct,wt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==X&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var s,l,f,d,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!c&&!u;if(g){if(o){for(;m;){for(f=t;f=f[m];)if(u?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(l=g[M]||(g[M]={}),s=l[e]||[],p=s[0]===F&&s[1],d=s[0]===F&&s[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[F,p,d];break}}else if(y&&(s=(t[M]||(t[M]={}))[e])&&s[0]===F)d=s[1];else for(;(f=++p&&f&&f[m]||(d=p=0)||h.pop())&&((u?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[M]||(f[M]={}))[e]=[F,d]),f!==t)););return d-=i,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,n){var i,o=E.pseudos[e]||E.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[M]?o(n):o.length>1?(i=[e,e,"",n],E.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=tt.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(ct,"$1"));return i[M]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),u=e.length;u--;)(o=a[u])&&(e[u]=!(t[u]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ct,wt).toLowerCase(),function(t){var n;do if(n=k?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===R.activeElement&&(!R.hasFocus||R.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!E.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[0>n?n+t:n]}),even:s(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},E.pseudos.nth=E.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})E.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})E.pseudos[w]=c(w);f.prototype=E.filters=E.pseudos,E.setFilters=new f,S=t.compile=function(e,t){var n,r=[],i=[],o=V[e+" "];if(!o){for(t||(t=d(e)),n=t.length;n--;)o=y(t[n]),o[M]?r.push(o):i.push(o);o=V(e,N(i,r))}return o},b.sortStable=M.split("").sort(U).join("")===M,b.detectDuplicates=!!B,I(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition(R.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.Sizzle=t}(window);