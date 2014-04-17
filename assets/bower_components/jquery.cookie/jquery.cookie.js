/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function t(e){return u.raw?e:decodeURIComponent(e)}function o(e){return n(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(c," "))}catch(n){return}try{return u.json?JSON.parse(e):e}catch(n){}}function r(n,t){var o=u.raw?n:i(n);return e.isFunction(t)?t(o):o}var c=/\+/g,u=e.cookie=function(i,c,d){if(void 0!==c&&!e.isFunction(c)){if(d=e.extend({},u.defaults,d),"number"==typeof d.expires){var f=d.expires,a=d.expires=new Date;a.setDate(a.getDate()+f)}return document.cookie=[n(i),"=",o(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}for(var s=i?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,v=p.length;v>m;m++){var x=p[m].split("="),l=t(x.shift()),g=x.join("=");if(i&&i===l){s=r(g,c);break}i||void 0===(g=r(g))||(s[l]=g)}return s};u.defaults={},e.removeCookie=function(n,t){return void 0!==e.cookie(n)?(e.cookie(n,"",e.extend({},t,{expires:-1})),!0):!1}});