define(["../core","../var/rnotwhite","./accepts"],function(e,t){function n(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=e.expando+Math.random()}return n.uid=1,n.accepts=e.acceptData,n.prototype={key:function(t){if(!n.accepts(t))return 0;var i={},o=t[this.expando];if(!o){o=n.uid++;try{i[this.expando]={value:o},Object.defineProperties(t,i)}catch(r){i[this.expando]=o,e.extend(t,i)}}return this.cache[o]||(this.cache[o]={}),o},set:function(t,n,i){var o,r=this.key(t),s=this.cache[r];if("string"==typeof n)s[n]=i;else if(e.isEmptyObject(s))e.extend(this.cache[r],n);else for(o in n)s[o]=n[o];return s},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(t,n,i){var o;return void 0===n||n&&"string"==typeof n&&void 0===i?(o=this.get(t,n),void 0!==o?o:this.get(t,e.camelCase(n))):(this.set(t,n,i),void 0!==i?i:n)},remove:function(n,i){var o,r,s,a=this.key(n),u=this.cache[a];if(void 0===i)this.cache[a]={};else{e.isArray(i)?r=i.concat(i.map(e.camelCase)):(s=e.camelCase(i),i in u?r=[i,s]:(r=s,r=r in u?[r]:r.match(t)||[])),o=r.length;for(;o--;)delete u[r[o]]}},hasData:function(t){return!e.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},n});