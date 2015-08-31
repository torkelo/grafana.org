define(["./core","./var/slice","./callbacks"],function(e,t){return e.extend({Deferred:function(t){var n=[["resolve","done",e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory")]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return e.Deferred(function(r){e.each(n,function(n,a){var s=e.isFunction(t[n])&&t[n];o[a[1]](function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[a[0]+"With"](this===i?r.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?e.extend(t,i):i}},o={};return i.pipe=i.then,e.each(n,function(e,t){var a=t[2],s=t[3];i[t[1]]=a.add,s&&a.add(function(){r=s},n[1^e][2].disable,n[2][2].lock),o[t[0]]=function(){return o[t[0]+"With"](this===o?i:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(n){var r,i,o,a=0,s=t.call(arguments),u=s.length,c=1!==u||n&&e.isFunction(n.promise)?u:0,l=1===c?n:e.Deferred(),f=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?t.call(arguments):o,i===r?l.notifyWith(n,i):--c||l.resolveWith(n,i)}};if(u>1)for(r=new Array(u),i=new Array(u),o=new Array(u);u>a;a++)s[a]&&e.isFunction(s[a].promise)?s[a].promise().done(f(a,o,s)).fail(l.reject).progress(f(a,i,r)):--c;return c||l.resolveWith(o,s),l.promise()}}),e});