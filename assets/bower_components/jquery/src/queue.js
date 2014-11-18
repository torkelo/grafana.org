define(["./core","./data/var/data_priv","./deferred","./callbacks"],function(e,t){return e.extend({queue:function(n,i,r){var o;return n?(i=(i||"fx")+"queue",o=t.get(n,i),r&&(!o||e.isArray(r)?o=t.access(n,i,e.makeArray(r)):o.push(r)),o||[]):void 0},dequeue:function(t,n){n=n||"fx";var i=e.queue(t,n),r=i.length,o=i.shift(),s=e._queueHooks(t,n),a=function(){e.dequeue(t,n)};"inprogress"===o&&(o=i.shift(),r--),o&&("fx"===n&&i.unshift("inprogress"),delete s.stop,o.call(t,a,s)),!r&&s&&s.empty.fire()},_queueHooks:function(n,i){var r=i+"queueHooks";return t.get(n,r)||t.access(n,r,{empty:e.Callbacks("once memory").add(function(){t.remove(n,[i+"queue",r])})})}}),e.fn.extend({queue:function(t,n){var i=2;return"string"!=typeof t&&(n=t,t="fx",i--),arguments.length<i?e.queue(this[0],t):void 0===n?this:this.each(function(){var i=e.queue(this,t,n);e._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&e.dequeue(this,t)})},dequeue:function(t){return this.each(function(){e.dequeue(this,t)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(n,i){var r,o=1,s=e.Deferred(),a=this,c=this.length,u=function(){--o||s.resolveWith(a,[a])};for("string"!=typeof n&&(i=n,n=void 0),n=n||"fx";c--;)r=t.get(a[c],n+"queueHooks"),r&&r.empty&&(o++,r.empty.add(u));return u(),s.promise(i)}}),e});