/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return c.raw?e:encodeURIComponent(e)}function n(e){return c.raw?e:decodeURIComponent(e)}function r(e){return t(c.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(i," "))}catch(t){return}try{return c.json?JSON.parse(e):e}catch(t){}}function a(t,n){var r=c.raw?t:o(t);return e.isFunction(n)?n(r):r}var i=/\+/g,c=e.cookie=function(o,i,s){if(void 0!==i&&!e.isFunction(i)){if(s=e.extend({},c.defaults,s),"number"==typeof s.expires){var u=s.expires,l=s.expires=new Date;l.setDate(l.getDate()+u)}return document.cookie=[t(o),"=",r(i),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var d=o?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,m=f.length;m>p;p++){var h=f[p].split("="),g=n(h.shift()),v=h.join("=");if(o&&o===g){d=a(v,i);break}o||void 0===(v=a(v))||(d[g]=v)}return d};c.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});