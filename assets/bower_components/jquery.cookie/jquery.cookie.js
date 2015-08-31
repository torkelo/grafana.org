/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){function t(e){return c.raw?e:encodeURIComponent(e)}function n(e){return c.raw?e:decodeURIComponent(e)}function r(e){return t(c.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(a," ")),c.json?JSON.parse(e):e}catch(t){}}function i(t,n){var r=c.raw?t:o(t);return e.isFunction(n)?n(r):r}var a=/\+/g,c=e.cookie=function(o,a,u){if(void 0!==a&&!e.isFunction(a)){if(u=e.extend({},c.defaults,u),"number"==typeof u.expires){var s=u.expires,l=u.expires=new Date;l.setTime(+l+864e5*s)}return document.cookie=[t(o),"=",r(a),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,m=d.length;m>p;p++){var h=d[p].split("="),g=n(h.shift()),v=h.join("=");if(o&&o===g){f=i(v,a);break}o||void 0===(v=i(v))||(f[g]=v)}return f};c.defaults={},e.removeCookie=function(t,n){return void 0===e.cookie(t)?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))}});