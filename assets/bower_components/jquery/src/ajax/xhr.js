define(["../core","../var/support","../ajax"],function(e,t){e.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var n=0,r={},i={0:200,1223:204},o=e.ajaxSettings.xhr();window.ActiveXObject&&e(window).on("unload",function(){for(var e in r)r[e]()}),t.cors=!!o&&"withCredentials"in o,t.ajax=o=!!o,e.ajaxTransport(function(e){var a;return t.cors||o&&!e.crossDomain?{send:function(t,o){var s,l=e.xhr(),u=++n;if(l.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)l[s]=e.xhrFields[s];e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType),e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest");for(s in t)l.setRequestHeader(s,t[s]);a=function(e){return function(){a&&(delete r[u],a=l.onload=l.onerror=null,"abort"===e?l.abort():"error"===e?o(l.status,l.statusText):o(i[l.status]||l.status,l.statusText,"string"==typeof l.responseText?{text:l.responseText}:void 0,l.getAllResponseHeaders()))}},l.onload=a(),l.onerror=a("error"),a=r[u]=a("abort"),l.send(e.hasContent&&e.data||null)},abort:function(){a&&a()}}:void 0})});