define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(e,t,n,o,r,i,a){function s(t){return e.isWindow(t)?t:9===t.nodeType&&t.defaultView}var c=window.document.documentElement;return e.offset={setOffset:function(t,n,o){var r,i,a,s,c,u,f,l=e.css(t,"position"),d=e(t),p={};"static"===l&&(t.style.position="relative"),c=d.offset(),a=e.css(t,"top"),u=e.css(t,"left"),f=("absolute"===l||"fixed"===l)&&(a+u).indexOf("auto")>-1,f?(r=d.position(),s=r.top,i=r.left):(s=parseFloat(a)||0,i=parseFloat(u)||0),e.isFunction(n)&&(n=n.call(t,o,c)),null!=n.top&&(p.top=n.top-c.top+s),null!=n.left&&(p.left=n.left-c.left+i),"using"in n?n.using.call(t,p):d.css(p)}},e.fn.extend({offset:function(n){if(arguments.length)return void 0===n?this:this.each(function(t){e.offset.setOffset(this,n,t)});var o,r,i=this[0],a={top:0,left:0},c=i&&i.ownerDocument;if(c)return o=c.documentElement,e.contains(o,i)?(typeof i.getBoundingClientRect!==t&&(a=i.getBoundingClientRect()),r=s(c),{top:a.top+r.pageYOffset-o.clientTop,left:a.left+r.pageXOffset-o.clientLeft}):a},position:function(){if(this[0]){var t,n,o=this[0],r={top:0,left:0};return"fixed"===e.css(o,"position")?n=o.getBoundingClientRect():(t=this.offsetParent(),n=this.offset(),e.nodeName(t[0],"html")||(r=t.offset()),r.top+=e.css(t[0],"borderTopWidth",!0),r.left+=e.css(t[0],"borderLeftWidth",!0)),{top:n.top-r.top-e.css(o,"marginTop",!0),left:n.left-r.left-e.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||c;t&&!e.nodeName(t,"html")&&"static"===e.css(t,"position");)t=t.offsetParent;return t||c})}}),e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var r="pageYOffset"===o;e.fn[t]=function(e){return n(this,function(e,t,n){var i=s(e);return void 0===n?i?i[o]:e[t]:(i?i.scrollTo(r?window.pageXOffset:n,r?n:window.pageYOffset):e[t]=n,void 0)},t,e,arguments.length,null)}}),e.each(["top","left"],function(t,n){e.cssHooks[n]=i(a.pixelPosition,function(t,i){return i?(i=r(t,n),o.test(i)?e(t).position()[n]+"px":i):void 0})}),e});