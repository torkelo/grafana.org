/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return c.raw?t:encodeURIComponent(t)}function i(t){return c.raw?t:decodeURIComponent(t)}function n(t){return e(c.json?JSON.stringify(t):String(t))}function o(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(s," "))}catch(e){return}try{return c.json?JSON.parse(t):t}catch(e){}}function r(e,i){var n=c.raw?e:o(e);return t.isFunction(i)?i(n):n}var s=/\+/g,c=t.cookie=function(o,s,a){if(void 0!==s&&!t.isFunction(s)){if(a=t.extend({},c.defaults,a),"number"==typeof a.expires){var u=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+u)}return document.cookie=[e(o),"=",n(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var d=o?void 0:{},h=document.cookie?document.cookie.split("; "):[],p=0,f=h.length;f>p;p++){var k=h[p].split("="),m=i(k.shift()),v=k.join("=");if(o&&o===m){d=r(v,s);break}o||void 0===(v=r(v))||(d[m]=v)}return d};c.defaults={},t.removeCookie=function(e,i){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},i,{expires:-1})),!0):!1}});