define(["../core","../core/parseHTML","../ajax","../traversing","../manipulation","../selector","../event/alias"],function(t){var e=t.fn.load;t.fn.load=function(n,i,r){if("string"!=typeof n&&e)return e.apply(this,arguments);var s,o,a,c=this,l=n.indexOf(" ");return l>=0&&(s=n.slice(l),n=n.slice(0,l)),t.isFunction(i)?(r=i,i=void 0):i&&"object"==typeof i&&(o="POST"),c.length>0&&t.ajax({url:n,type:o,dataType:"html",data:i}).done(function(e){a=arguments,c.html(s?t("<div>").append(t.parseHTML(e)).find(s):e)}).complete(r&&function(t,e){c.each(r,a||[t.responseText,e,t])}),this}});