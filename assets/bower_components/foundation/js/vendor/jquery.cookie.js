/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(i," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function a(t,n){var r=s.raw?t:o(t);return e.isFunction(n)?n(r):r}var i=/\+/g,s=e.cookie=function(o,i,c){if(void 0!==i&&!e.isFunction(i)){if(c=e.extend({},s.defaults,c),"number"==typeof c.expires){var l=c.expires,u=c.expires=new Date;u.setDate(u.getDate()+l)}return document.cookie=[t(o),"=",r(i),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var p=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],f=0,h=d.length;h>f;f++){var m=d[f].split("="),v=n(m.shift()),g=m.join("=");if(o&&o===v){p=a(g,i);break}o||void 0===(g=a(g))||(p[v]=g)}return p};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});