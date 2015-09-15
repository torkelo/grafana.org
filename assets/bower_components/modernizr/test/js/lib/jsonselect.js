/*! Copyright (c) 2011, Lloyd Hilaiel, ISC License */
!function(t){function e(t){try{return JSON&&JSON.parse?JSON.parse(t):new Function("return "+t)()}catch(e){n("ijs")}}function n(t){throw new Error(c[t])}function i(t){return Array.isArray?Array.isArray(t):"[object Array]"===l.call(t)}function r(t){if(null===t)return"null";var e=typeof t;return"object"===e&&i(t)&&(e="array"),e}function o(t,e,n,i,o){var a,s=[],u=">"===e[0]?e[1]:e[0],l=!0;return u.type&&(l=l&&u.type===r(t)),u.id&&(l=l&&u.id===n),l&&u.pf&&(":nth-last-child"===u.pf?i=o-i:i++,0===u.a?l=u.b===i:(a=(i-u.b)%u.a,l=!a&&i*u.a+u.b>=0)),">"!==e[0]&&":root"!==e[0].pc&&s.push(e),l&&(">"===e[0]?e.length>2&&(l=!1,s.push(e.slice(2))):e.length>1&&(l=!1,s.push(e.slice(1)))),[l,s]}function a(t,e,n,r,s,u){var l,c,f=","===t[0]?t.slice(1):[t],d=[],p=!1,h=0,g=0,m=0;for(h=0;h<f.length;h++)for(c=o(e,f[h],r,s,u),c[0]&&(p=!0),g=0;g<c[1].length;g++)d.push(c[1][g]);if(d.length&&"object"==typeof e)if(d.length>=1&&d.unshift(","),i(e))for(h=0;h<e.length;h++)a(d,e[h],n,void 0,h,e.length);else{m=0;for(l in e)e.hasOwnProperty(l)&&m++;h=0;for(l in e)e.hasOwnProperty(l)&&a(d,e[l],n,l,h++,m)}p&&n&&n(e)}function s(t,e){var n=[];return a(t,e,function(t){n.push(t)}),n}function u(t){return{sel:g(t),match:function(t){return s(this.sel,t)},forEach:function(t,e){return a(this.sel,t,e)}}}var l=Object.prototype.toString,c={ijs:"invalid json string",mpc:"multiple pseudo classes (:xxx) not allowed",mepf:"malformed expression in pseudo-function",nmi:"multiple ids not allowed",se:"selector expected",sra:"string required after '.'",uc:"unrecognized char",ujs:"unclosed json string",upc:"unrecognized pseudo class"},f={psc:1,psf:2,typ:3,str:4},d=/^(?:([\r\n\t\ ]+)|([*.,>])|(string|boolean|null|array|object|number)|(:(?:root|first-child|last-child|only-child))|(:(?:nth-child|nth-last-child))|(:\w+)|(\"(?:[^\\]|\\[^\"])*\")|(\")|((?:[_a-zA-Z]|[^\0-\0177]|\\[^\r\n\f0-9a-fA-F])(?:[_a-zA-Z0-9\-]|[^\u0000-\u0177]|(?:\\[^\r\n\f0-9a-fA-F]))*))/,p=/^\s*\(\s*(?:([+\-]?)([0-9]*)n\s*(?:([+\-])\s*([0-9]))?|(odd|even)|([+\-]?[0-9]+))\s*\)/,h=function(t,i){i||(i=0);var r=d.exec(t.substr(i));if(!r)return void 0;i+=r[0].length;var o;return r[1]?o=[i," "]:r[2]?o=[i,r[0]]:r[3]?o=[i,f.typ,r[0]]:r[4]?o=[i,f.psc,r[0]]:r[5]?o=[i,f.psf,r[0]]:r[6]?n("upc"):r[7]?o=[i,f.str,e(r[0])]:r[8]?n("ujs"):r[9]&&(o=[i,f.str,r[0].replace(/\\([^\r\n\f0-9a-fA-F])/g,"$1")]),o},g=function(t){for(var e,n=[],i=0;;){var r=m(t,i);if(n.push(r[1]),r=h(t,i=r[0]),r&&" "===r[1]&&(r=h(t,i=r[0])),!r)break;">"===r[1]?(n.push(">"),i=r[0]):","===r[1]&&(void 0===e?e=[",",n]:e.push(n),n=[],i=r[0])}return e&&e.push(n),e?e:n},m=function(t,e){var i=e,r={},o=h(t,e);for(o&&" "===o[1]&&(i=e=o[0],o=h(t,e)),o&&o[1]===f.typ?(r.type=o[2],o=h(t,e=o[0])):o&&"*"===o[1]&&(o=h(t,e=o[0]));;){if(void 0===o)break;if("."===o[1])o=h(t,e=o[0]),o&&o[1]===f.str||n("sra"),r.id&&n("nmi"),r.id=o[2];else if(o[1]===f.psc)(r.pc||r.pf)&&n("mpc"),":first-child"===o[2]?(r.pf=":nth-child",r.a=0,r.b=1):":last-child"===o[2]?(r.pf=":nth-last-child",r.a=0,r.b=1):r.pc=o[2];else{if(o[1]!==f.psf)break;(r.pc||r.pf)&&n("mpc"),r.pf=o[2];var a=p.exec(t.substr(o[0]));a||n("mepf"),a[5]?(r.a=2,r.b="odd"===a[5]?1:0):a[6]?(r.a=0,r.b=parseInt(a[6],10)):(r.a=parseInt((a[1]?a[1]:"+")+(a[2]?a[2]:"1"),10),r.b=a[3]?parseInt(a[3]+a[4],10):0),o[0]+=a[0].length}o=h(t,e=o[0])}return i===e&&n("se"),[e,r]};t._lex=h,t._parse=g,t.match=function(t,e){return u(t).match(e)},t.forEach=function(t,e,n){return u(t).forEach(e,n)},t.compile=u}("undefined"==typeof exports?window.JSONSelect={}:exports);