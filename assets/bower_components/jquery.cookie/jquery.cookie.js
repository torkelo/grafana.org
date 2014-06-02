/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return i.raw?e:encodeURIComponent(e)}function a(e){return i.raw?e:decodeURIComponent(e)}function l(e){return t(i.json?JSON.stringify(e):String(e))}function s(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(o," "))}catch(t){return}try{return i.json?JSON.parse(e):e}catch(t){}}function r(t,a){var l=i.raw?t:s(t);return e.isFunction(a)?a(l):l}var o=/\+/g,i=e.cookie=function(s,o,c){if(void 0!==o&&!e.isFunction(o)){if(c=e.extend({},i.defaults,c),"number"==typeof c.expires){var n=c.expires,p=c.expires=new Date;p.setDate(p.getDate()+n)}return document.cookie=[t(s),"=",l(o),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var u=s?void 0:{},h=document.cookie?document.cookie.split("; "):[],d=0,f=h.length;f>d;d++){var v=h[d].split("="),m=a(v.shift()),y=v.join("=");if(s&&s===m){u=r(y,o);break}s||void 0===(y=r(y))||(u[m]=y)}return u};i.defaults={},e.removeCookie=function(t,a){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},a,{expires:-1})),!0):!1}});