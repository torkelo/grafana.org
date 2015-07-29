/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return a.raw?t:encodeURIComponent(t)}function n(t){return a.raw?t:decodeURIComponent(t)}function i(t){return e(a.json?JSON.stringify(t):String(t))}function r(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(o," "))}catch(e){return}try{return a.json?JSON.parse(t):t}catch(e){}}function s(e,n){var i=a.raw?e:r(e);return t.isFunction(n)?n(i):i}var o=/\+/g,a=t.cookie=function(r,o,c){if(void 0!==o&&!t.isFunction(o)){if(c=t.extend({},a.defaults,c),"number"==typeof c.expires){var l=c.expires,u=c.expires=new Date;u.setDate(u.getDate()+l)}return document.cookie=[e(r),"=",i(o),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],h=0,p=f.length;p>h;h++){var g=f[h].split("="),m=n(g.shift()),v=g.join("=");if(r&&r===m){d=s(v,o);break}r||void 0===(v=s(v))||(d[m]=v)}return d};a.defaults={},t.removeCookie=function(e,n){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},n,{expires:-1})),!0):!1}});