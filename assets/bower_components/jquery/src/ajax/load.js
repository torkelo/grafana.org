define(["../core","../core/parseHTML","../ajax","../traversing","../manipulation","../selector","../event/alias"],function(t){var e=t.fn.load;t.fn.load=function(n,i,s){if("string"!=typeof n&&e)return e.apply(this,arguments);var r,o,a,l=this,c=n.indexOf(" ");return c>=0&&(r=n.slice(c),n=n.slice(0,c)),t.isFunction(i)?(s=i,i=void 0):i&&"object"==typeof i&&(o="POST"),l.length>0&&t.ajax({url:n,type:o,dataType:"html",data:i}).done(function(e){a=arguments,l.html(r?t("<div>").append(t.parseHTML(e)).find(r):e)}).complete(s&&function(t,e){l.each(s,a||[t.responseText,e,t])}),this}});