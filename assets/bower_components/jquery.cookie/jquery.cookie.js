/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return u.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=u.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,u=e.cookie=function(i,a,c){if(void 0!==a&&!e.isFunction(a)){if(c=e.extend({},u.defaults,c),"number"==typeof c.expires){var s=c.expires,l=c.expires=new Date;l.setDate(l.getDate()+s)}return document.cookie=[t(i),"=",r(a),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var m=d[p].split("="),g=n(m.shift()),v=m.join("=");if(i&&i===g){f=o(v,a);break}i||void 0===(v=o(v))||(f[g]=v)}return f};u.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});