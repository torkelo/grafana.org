/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function e(t){return s.raw?t:encodeURIComponent(t)}function n(t){return s.raw?t:decodeURIComponent(t)}function i(t){return e(s.json?JSON.stringify(t):String(t))}function r(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(a," ")),s.json?JSON.parse(t):t}catch(e){}}function o(e,n){var i=s.raw?e:r(e);return t.isFunction(n)?n(i):i}var a=/\+/g,s=t.cookie=function(r,a,l){if(void 0!==a&&!t.isFunction(a)){if(l=t.extend({},s.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setTime(+c+864e5*u)}return document.cookie=[e(r),"=",i(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var g=f[p].split("="),m=n(g.shift()),v=g.join("=");if(r&&r===m){d=o(v,a);break}r||void 0===(v=o(v))||(d[m]=v)}return d};s.defaults={},t.removeCookie=function(e,n){return void 0===t.cookie(e)?!1:(t.cookie(e,"",t.extend({},n,{expires:-1})),!t.cookie(e))}});