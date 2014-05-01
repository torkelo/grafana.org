/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function t(e){return u.raw?e:decodeURIComponent(e)}function o(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(c," "))}catch(n){return}try{return u.json?JSON.parse(e):e}catch(n){}}function i(n,t){var o=u.raw?n:r(n);return e.isFunction(t)?t(o):o}var c=/\+/g,u=e.cookie=function(r,c,a){if(void 0!==c&&!e.isFunction(c)){if(a=e.extend({},u.defaults,a),"number"==typeof a.expires){var d=a.expires,f=a.expires=new Date;f.setDate(f.getDate()+d)}return document.cookie=[n(r),"=",o(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,y=s.length;y>m;m++){var v=s[m].split("="),x=t(v.shift()),l=v.join("=");if(r&&r===x){p=i(l,c);break}r||void 0===(l=i(l))||(p[x]=l)}return p};u.defaults={},e.removeCookie=function(n,t){return void 0!==e.cookie(n)?(e.cookie(n,"",e.extend({},t,{expires:-1})),!0):!1}});