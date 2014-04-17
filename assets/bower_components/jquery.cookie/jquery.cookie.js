/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return r.raw?t:encodeURIComponent(t)}function n(t){return r.raw?t:decodeURIComponent(t)}function i(t){return e(r.json?JSON.stringify(t):String(t))}function s(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(o," "))}catch(e){return}try{return r.json?JSON.parse(t):t}catch(e){}}function a(e,n){var i=r.raw?e:s(e);return t.isFunction(n)?n(i):i}var o=/\+/g,r=t.cookie=function(s,o,l){if(void 0!==o&&!t.isFunction(o)){if(l=t.extend({},r.defaults,l),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return document.cookie=[e(s),"=",i(o),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=s?void 0:{},h=document.cookie?document.cookie.split("; "):[],f=0,p=h.length;p>f;f++){var g=h[f].split("="),m=n(g.shift()),v=g.join("=");if(s&&s===m){d=a(v,o);break}s||void 0===(v=a(v))||(d[m]=v)}return d};r.defaults={},t.removeCookie=function(e,n){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},n,{expires:-1})),!0):!1}});