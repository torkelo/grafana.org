/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function i(e){return t(s.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function r(t,n){var i=s.raw?t:o(t);return e.isFunction(n)?n(i):i}var a=/\+/g,s=e.cookie=function(o,a,u){if(void 0!==a&&!e.isFunction(a)){if(u=e.extend({},s.defaults,u),"number"==typeof u.expires){var c=u.expires,f=u.expires=new Date;f.setDate(f.getDate()+c)}return document.cookie=[t(o),"=",i(a),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var l=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],h=0,p=d.length;p>h;h++){var v=d[h].split("="),m=n(v.shift()),g=v.join("=");if(o&&o===m){l=r(g,a);break}o||void 0===(g=r(g))||(l[m]=g)}return l};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});