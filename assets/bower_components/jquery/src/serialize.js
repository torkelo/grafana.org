define(["./core","./manipulation/var/rcheckableType","./core/init","./traversing","./attributes/prop"],function(t,e){function n(e,r,o,a){var s;if(t.isArray(r))t.each(r,function(t,r){o||i.test(e)?a(e,r):n(e+"["+("object"==typeof r?t:"")+"]",r,o,a)});else if(o||"object"!==t.type(r))a(e,r);else for(s in r)n(e+"["+s+"]",r[s],o,a)}var r=/%20/g,i=/\[\]$/,o=/\r?\n/g,a=/^(?:submit|button|image|reset|file)$/i,s=/^(?:input|select|textarea|keygen)/i;return t.param=function(e,i){var o,a=[],s=function(e,n){n=t.isFunction(n)?n():null==n?"":n,a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)};if(void 0===i&&(i=t.ajaxSettings&&t.ajaxSettings.traditional),t.isArray(e)||e.jquery&&!t.isPlainObject(e))t.each(e,function(){s(this.name,this.value)});else for(o in e)n(o,e[o],i,s);return a.join("&").replace(r,"+")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=t.prop(this,"elements");return e?t.makeArray(e):this}).filter(function(){var n=this.type;return this.name&&!t(this).is(":disabled")&&s.test(this.nodeName)&&!a.test(n)&&(this.checked||!e.test(n))}).map(function(e,n){var r=t(this).val();return null==r?null:t.isArray(r)?t.map(r,function(t){return{name:n.name,value:t.replace(o,"\r\n")}}):{name:n.name,value:r.replace(o,"\r\n")}}).get()}}),t});