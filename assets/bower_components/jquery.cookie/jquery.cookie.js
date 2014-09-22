/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return u.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=u.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,u=e.cookie=function(i,a,s){if(void 0!==a&&!e.isFunction(a)){if(s=e.extend({},u.defaults,s),"number"==typeof s.expires){var c=s.expires,l=s.expires=new Date;l.setDate(l.getDate()+c)}return document.cookie=[t(i),"=",r(a),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var m=d[p].split("="),v=n(m.shift()),g=m.join("=");if(i&&i===v){f=o(g,a);break}i||void 0===(g=o(g))||(f[v]=g)}return f};u.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});