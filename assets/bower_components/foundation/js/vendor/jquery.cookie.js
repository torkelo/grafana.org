/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=s.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,s=e.cookie=function(i,a,c){if(void 0!==a&&!e.isFunction(a)){if(c=e.extend({},s.defaults,c),"number"==typeof c.expires){var u=c.expires,l=c.expires=new Date;l.setDate(l.getDate()+u)}return document.cookie=[t(i),"=",r(a),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var m=d[p].split("="),v=n(m.shift()),g=m.join("=");if(i&&i===v){f=o(g,a);break}i||void 0===(g=o(g))||(f[v]=g)}return f};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});