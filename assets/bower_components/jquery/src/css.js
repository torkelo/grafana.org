define(["./core","./var/pnum","./core/access","./css/var/rmargin","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/isHidden","./css/var/getStyles","./css/curCSS","./css/defaultDisplay","./css/addGetHookIf","./css/support","./data/var/data_priv","./core/init","./css/swap","./core/ready","./selector"],function(e,t,n,r,i,o,a,s,u,c,l,f,d){function p(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=T.length;i--;)if(t=T[i]+n,t in e)return t;return r}function h(e,t,n){var r=x.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function m(t,n,r,i,a){for(var s=r===(i?"border":"content")?4:"width"===n?1:0,u=0;4>s;s+=2)"margin"===r&&(u+=e.css(t,r+o[s],!0,a)),i?("content"===r&&(u-=e.css(t,"padding"+o[s],!0,a)),"margin"!==r&&(u-=e.css(t,"border"+o[s]+"Width",!0,a))):(u+=e.css(t,"padding"+o[s],!0,a),"padding"!==r&&(u+=e.css(t,"border"+o[s]+"Width",!0,a)));return u}function g(t,n,r){var o=!0,a="width"===n?t.offsetWidth:t.offsetHeight,c=s(t),l="border-box"===e.css(t,"boxSizing",!1,c);if(0>=a||null==a){if(a=u(t,n,c),(0>a||null==a)&&(a=t.style[n]),i.test(a))return a;o=l&&(f.boxSizingReliable()||a===t.style[n]),a=parseFloat(a)||0}return a+m(t,n,r||(l?"border":"content"),o,c)+"px"}function v(t,n){for(var r,i,o,s=[],u=0,l=t.length;l>u;u++)i=t[u],i.style&&(s[u]=d.get(i,"olddisplay"),r=i.style.display,n?(s[u]||"none"!==r||(i.style.display=""),""===i.style.display&&a(i)&&(s[u]=d.access(i,"olddisplay",c(i.nodeName)))):(o=a(i),"none"===r&&o||d.set(i,"olddisplay",o?r:e.css(i,"display"))));for(u=0;l>u;u++)i=t[u],i.style&&(n&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=n?s[u]||"":"none"));return t}var y=/^(none|table(?!-c[ea]).+)/,x=new RegExp("^("+t+")(.*)$","i"),b=new RegExp("^([+-])=("+t+")","i"),w={position:"absolute",visibility:"hidden",display:"block"},C={letterSpacing:"0",fontWeight:"400"},T=["Webkit","O","Moz","ms"];return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=u(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,n,r,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,a,s,u=e.camelCase(n),c=t.style;return n=e.cssProps[u]||(e.cssProps[u]=p(c,u)),s=e.cssHooks[n]||e.cssHooks[u],void 0===r?s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:c[n]:(a=typeof r,"string"===a&&(o=b.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(e.css(t,n)),a="number"),null!=r&&r===r&&("number"!==a||e.cssNumber[u]||(r+="px"),f.clearCloneStyle||""!==r||0!==n.indexOf("background")||(c[n]="inherit"),s&&"set"in s&&void 0===(r=s.set(t,r,i))||(c[n]=r)),void 0)}},css:function(t,n,r,i){var o,a,s,c=e.camelCase(n);return n=e.cssProps[c]||(e.cssProps[c]=p(t.style,c)),s=e.cssHooks[n]||e.cssHooks[c],s&&"get"in s&&(o=s.get(t,!0,r)),void 0===o&&(o=u(t,n,i)),"normal"===o&&n in C&&(o=C[n]),""===r||r?(a=parseFloat(o),r===!0||e.isNumeric(a)?a||0:o):o}}),e.each(["height","width"],function(t,n){e.cssHooks[n]={get:function(t,r,i){return r?y.test(e.css(t,"display"))&&0===t.offsetWidth?e.swap(t,w,function(){return g(t,n,i)}):g(t,n,i):void 0},set:function(t,r,i){var o=i&&s(t);return h(t,r,i?m(t,n,i,"border-box"===e.css(t,"boxSizing",!1,o),o):0)}}}),e.cssHooks.marginRight=l(f.reliableMarginRight,function(t,n){return n?e.swap(t,{display:"inline-block"},u,[t,"marginRight"]):void 0}),e.each({margin:"",padding:"",border:"Width"},function(t,n){e.cssHooks[t+n]={expand:function(e){for(var r=0,i={},a="string"==typeof e?e.split(" "):[e];4>r;r++)i[t+o[r]+n]=a[r]||a[r-2]||a[0];return i}},r.test(t)||(e.cssHooks[t+n].set=h)}),e.fn.extend({css:function(t,r){return n(this,function(t,n,r){var i,o,a={},u=0;if(e.isArray(n)){for(i=s(t),o=n.length;o>u;u++)a[n[u]]=e.css(t,n[u],!1,i);return a}return void 0!==r?e.style(t,n,r):e.css(t,n)},t,r,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){a(this)?e(this).show():e(this).hide()})}}),e});