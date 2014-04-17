/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return u.json?JSON.parse(e):e}catch(t){}}function i(t,n){var r=u.raw?t:o(t);return e.isFunction(n)?n(r):r}var a=/\+/g,u=e.cookie=function(o,a,c){if(void 0!==a&&!e.isFunction(a)){if(c=e.extend({},u.defaults,c),"number"==typeof c.expires){var s=c.expires,l=c.expires=new Date;l.setDate(l.getDate()+s)}return document.cookie=[t(o),"=",r(a),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,m=d.length;m>p;p++){var h=d[p].split("="),g=n(h.shift()),y=h.join("=");if(o&&o===g){f=i(y,a);break}o||void 0===(y=i(y))||(f[g]=y)}return f};u.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});