define(["./core","./var/pnum","./core/access","./css/var/rmargin","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/isHidden","./css/var/getStyles","./css/curCSS","./css/defaultDisplay","./css/addGetHookIf","./css/support","./data/var/data_priv","./core/init","./css/swap","./core/ready","./selector"],function(e,t,n,i,r,o,s,a,c,l,u,d,f){function p(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),i=t,r=k.length;r--;)if(t=k[r]+n,t in e)return t;return i}function h(e,t,n){var i=b.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function g(t,n,i,r,s){for(var a=i===(r?"border":"content")?4:"width"===n?1:0,c=0;4>a;a+=2)"margin"===i&&(c+=e.css(t,i+o[a],!0,s)),r?("content"===i&&(c-=e.css(t,"padding"+o[a],!0,s)),"margin"!==i&&(c-=e.css(t,"border"+o[a]+"Width",!0,s))):(c+=e.css(t,"padding"+o[a],!0,s),"padding"!==i&&(c+=e.css(t,"border"+o[a]+"Width",!0,s)));return c}function m(t,n,i){var o=!0,s="width"===n?t.offsetWidth:t.offsetHeight,l=a(t),u="border-box"===e.css(t,"boxSizing",!1,l);if(0>=s||null==s){if(s=c(t,n,l),(0>s||null==s)&&(s=t.style[n]),r.test(s))return s;o=u&&(d.boxSizingReliable()||s===t.style[n]),s=parseFloat(s)||0}return s+g(t,n,i||(u?"border":"content"),o,l)+"px"}function v(t,n){for(var i,r,o,a=[],c=0,u=t.length;u>c;c++)r=t[c],r.style&&(a[c]=f.get(r,"olddisplay"),i=r.style.display,n?(a[c]||"none"!==i||(r.style.display=""),""===r.style.display&&s(r)&&(a[c]=f.access(r,"olddisplay",l(r.nodeName)))):(o=s(r),"none"===i&&o||f.set(r,"olddisplay",o?i:e.css(r,"display"))));for(c=0;u>c;c++)r=t[c],r.style&&(n&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=n?a[c]||"":"none"));return t}var y=/^(none|table(?!-c[ea]).+)/,b=new RegExp("^("+t+")(.*)$","i"),x=new RegExp("^([+-])=("+t+")","i"),_={position:"absolute",visibility:"hidden",display:"block"},w={letterSpacing:"0",fontWeight:"400"},k=["Webkit","O","Moz","ms"];return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=c(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,n,i,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,s,a,c=e.camelCase(n),l=t.style;return n=e.cssProps[c]||(e.cssProps[c]=p(l,c)),a=e.cssHooks[n]||e.cssHooks[c],void 0===i?a&&"get"in a&&void 0!==(o=a.get(t,!1,r))?o:l[n]:(s=typeof i,"string"===s&&(o=x.exec(i))&&(i=(o[1]+1)*o[2]+parseFloat(e.css(t,n)),s="number"),null!=i&&i===i&&("number"!==s||e.cssNumber[c]||(i+="px"),d.clearCloneStyle||""!==i||0!==n.indexOf("background")||(l[n]="inherit"),a&&"set"in a&&void 0===(i=a.set(t,i,r))||(l[n]=i)),void 0)}},css:function(t,n,i,r){var o,s,a,l=e.camelCase(n);return n=e.cssProps[l]||(e.cssProps[l]=p(t.style,l)),a=e.cssHooks[n]||e.cssHooks[l],a&&"get"in a&&(o=a.get(t,!0,i)),void 0===o&&(o=c(t,n,r)),"normal"===o&&n in w&&(o=w[n]),""===i||i?(s=parseFloat(o),i===!0||e.isNumeric(s)?s||0:o):o}}),e.each(["height","width"],function(t,n){e.cssHooks[n]={get:function(t,i,r){return i?y.test(e.css(t,"display"))&&0===t.offsetWidth?e.swap(t,_,function(){return m(t,n,r)}):m(t,n,r):void 0},set:function(t,i,r){var o=r&&a(t);return h(t,i,r?g(t,n,r,"border-box"===e.css(t,"boxSizing",!1,o),o):0)}}}),e.cssHooks.marginRight=u(d.reliableMarginRight,function(t,n){return n?e.swap(t,{display:"inline-block"},c,[t,"marginRight"]):void 0}),e.each({margin:"",padding:"",border:"Width"},function(t,n){e.cssHooks[t+n]={expand:function(e){for(var i=0,r={},s="string"==typeof e?e.split(" "):[e];4>i;i++)r[t+o[i]+n]=s[i]||s[i-2]||s[0];return r}},i.test(t)||(e.cssHooks[t+n].set=h)}),e.fn.extend({css:function(t,i){return n(this,function(t,n,i){var r,o,s={},c=0;if(e.isArray(n)){for(r=a(t),o=n.length;o>c;c++)s[n[c]]=e.css(t,n[c],!1,r);return s}return void 0!==i?e.style(t,n,i):e.css(t,n)},t,i,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){s(this)?e(this).show():e(this).hide()})}}),e});