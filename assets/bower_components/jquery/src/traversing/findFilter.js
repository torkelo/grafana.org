define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(t,e,n){function r(n,r,s){if(t.isFunction(r))return t.grep(n,function(t,e){return!!r.call(t,e,t)!==s});if(r.nodeType)return t.grep(n,function(t){return t===r!==s});if("string"==typeof r){if(i.test(r))return t.filter(r,n,s);r=t.filter(r,n)}return t.grep(n,function(t){return e.call(r,t)>=0!==s})}var i=/^.[^:#\[\.,]*$/;t.filter=function(e,n,r){var i=n[0];return r&&(e=":not("+e+")"),1===n.length&&1===i.nodeType?t.find.matchesSelector(i,e)?[i]:[]:t.find.matches(e,t.grep(n,function(t){return 1===t.nodeType}))},t.fn.extend({find:function(e){var n,r=this.length,i=[],s=this;if("string"!=typeof e)return this.pushStack(t(e).filter(function(){for(n=0;r>n;n++)if(t.contains(s[n],this))return!0}));for(n=0;r>n;n++)t.find(e,s[n],i);return i=this.pushStack(r>1?t.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(t){return this.pushStack(r(this,t||[],!1))},not:function(t){return this.pushStack(r(this,t||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&n.test(e)?t(e):e||[],!1).length}})});