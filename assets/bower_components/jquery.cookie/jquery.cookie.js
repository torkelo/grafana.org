/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function n(e){return a.raw?e:decodeURIComponent(e)}function r(e){return t(a.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(s," "))}catch(t){return}try{return a.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=a.raw?t:i(t);return e.isFunction(n)?n(r):r}var s=/\+/g,a=e.cookie=function(i,s,u){if(void 0!==s&&!e.isFunction(s)){if(u=e.extend({},a.defaults,u),"number"==typeof u.expires){var c=u.expires,l=u.expires=new Date;l.setDate(l.getDate()+c)}return document.cookie=[t(i),"=",r(s),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f=i?void 0:{},p=document.cookie?document.cookie.split("; "):[],d=0,h=p.length;h>d;d++){var g=p[d].split("="),m=n(g.shift()),v=g.join("=");if(i&&i===m){f=o(v,s);break}i||void 0===(v=o(v))||(f[m]=v)}return f};a.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});