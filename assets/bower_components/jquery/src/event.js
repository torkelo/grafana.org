define(["./core","./var/strundefined","./var/rnotwhite","./var/hasOwn","./var/slice","./event/support","./data/var/data_priv","./core/init","./data/accepts","./selector"],function(e,t,n,i,r,o,s){function a(){return!0}function l(){return!1}function c(){try{return document.activeElement}catch(e){}}var u=/^key/,d=/^(?:mouse|contextmenu)|click/,f=/^(?:focusinfocus|focusoutblur)$/,p=/^([^.]*)(?:\.(.+)|)$/;return e.event={global:{},add:function(i,r,o,a,l){var c,u,d,f,h,m,g,v,y,b,x,w=s.get(i);if(w)for(o.handler&&(c=o,o=c.handler,l=c.selector),o.guid||(o.guid=e.guid++),(f=w.events)||(f=w.events={}),(u=w.handle)||(u=w.handle=function(n){return typeof e!==t&&e.event.triggered!==n.type?e.event.dispatch.apply(i,arguments):void 0}),r=(r||"").match(n)||[""],h=r.length;h--;)d=p.exec(r[h])||[],y=x=d[1],b=(d[2]||"").split(".").sort(),y&&(g=e.event.special[y]||{},y=(l?g.delegateType:g.bindType)||y,g=e.event.special[y]||{},m=e.extend({type:y,origType:x,data:a,handler:o,guid:o.guid,selector:l,needsContext:l&&e.expr.match.needsContext.test(l),namespace:b.join(".")},c),(v=f[y])||(v=f[y]=[],v.delegateCount=0,g.setup&&g.setup.call(i,a,b,u)!==!1||i.addEventListener&&i.addEventListener(y,u,!1)),g.add&&(g.add.call(i,m),m.handler.guid||(m.handler.guid=o.guid)),l?v.splice(v.delegateCount++,0,m):v.push(m),e.event.global[y]=!0)},remove:function(t,i,r,o,a){var l,c,u,d,f,h,m,g,v,y,b,x=s.hasData(t)&&s.get(t);if(x&&(d=x.events)){for(i=(i||"").match(n)||[""],f=i.length;f--;)if(u=p.exec(i[f])||[],v=b=u[1],y=(u[2]||"").split(".").sort(),v){for(m=e.event.special[v]||{},v=(o?m.delegateType:m.bindType)||v,g=d[v]||[],u=u[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),c=l=g.length;l--;)h=g[l],!a&&b!==h.origType||r&&r.guid!==h.guid||u&&!u.test(h.namespace)||o&&o!==h.selector&&("**"!==o||!h.selector)||(g.splice(l,1),h.selector&&g.delegateCount--,m.remove&&m.remove.call(t,h));c&&!g.length&&(m.teardown&&m.teardown.call(t,y,x.handle)!==!1||e.removeEvent(t,v,x.handle),delete d[v])}else for(v in d)e.event.remove(t,v+i[f],r,o,!0);e.isEmptyObject(d)&&(delete x.handle,s.remove(t,"events"))}},trigger:function(t,n,r,o){var a,l,c,u,d,p,h,m=[r||document],g=i.call(t,"type")?t.type:t,v=i.call(t,"namespace")?t.namespace.split("."):[];if(l=c=r=r||document,3!==r.nodeType&&8!==r.nodeType&&!f.test(g+e.event.triggered)&&(g.indexOf(".")>=0&&(v=g.split("."),g=v.shift(),v.sort()),d=g.indexOf(":")<0&&"on"+g,t=t[e.expando]?t:new e.Event(g,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=v.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:e.makeArray(n,[t]),h=e.event.special[g]||{},o||!h.trigger||h.trigger.apply(r,n)!==!1)){if(!o&&!h.noBubble&&!e.isWindow(r)){for(u=h.delegateType||g,f.test(u+g)||(l=l.parentNode);l;l=l.parentNode)m.push(l),c=l;c===(r.ownerDocument||document)&&m.push(c.defaultView||c.parentWindow||window)}for(a=0;(l=m[a++])&&!t.isPropagationStopped();)t.type=a>1?u:h.bindType||g,p=(s.get(l,"events")||{})[t.type]&&s.get(l,"handle"),p&&p.apply(l,n),p=d&&l[d],p&&p.apply&&e.acceptData(l)&&(t.result=p.apply(l,n),t.result===!1&&t.preventDefault());return t.type=g,o||t.isDefaultPrevented()||h._default&&h._default.apply(m.pop(),n)!==!1||!e.acceptData(r)||d&&e.isFunction(r[g])&&!e.isWindow(r)&&(c=r[d],c&&(r[d]=null),e.event.triggered=g,r[g](),e.event.triggered=void 0,c&&(r[d]=c)),t.result}},dispatch:function(t){t=e.event.fix(t);var n,i,o,a,l,c=[],u=r.call(arguments),d=(s.get(this,"events")||{})[t.type]||[],f=e.event.special[t.type]||{};if(u[0]=t,t.delegateTarget=this,!f.preDispatch||f.preDispatch.call(this,t)!==!1){for(c=e.event.handlers.call(this,t,d),n=0;(a=c[n++])&&!t.isPropagationStopped();)for(t.currentTarget=a.elem,i=0;(l=a.handlers[i++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(l.namespace))&&(t.handleObj=l,t.data=l.data,o=((e.event.special[l.origType]||{}).handle||l.handler).apply(a.elem,u),void 0!==o&&(t.result=o)===!1&&(t.preventDefault(),t.stopPropagation()));return f.postDispatch&&f.postDispatch.call(this,t),t.result}},handlers:function(t,n){var i,r,o,s,a=[],l=n.delegateCount,c=t.target;if(l&&c.nodeType&&(!t.button||"click"!==t.type))for(;c!==this;c=c.parentNode||this)if(c.disabled!==!0||"click"!==t.type){for(r=[],i=0;l>i;i++)s=n[i],o=s.selector+" ",void 0===r[o]&&(r[o]=s.needsContext?e(o,this).index(c)>=0:e.find(o,this,null,[c]).length),r[o]&&r.push(s);r.length&&a.push({elem:c,handlers:r})}return l<n.length&&a.push({elem:this,handlers:n.slice(l)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||document,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(t){if(t[e.expando])return t;var n,i,r,o=t.type,s=t,a=this.fixHooks[o];for(a||(this.fixHooks[o]=a=d.test(o)?this.mouseHooks:u.test(o)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new e.Event(s),n=r.length;n--;)i=r[n],t[i]=s[i];return t.target||(t.target=document),3===t.target.nodeType&&(t.target=t.target.parentNode),a.filter?a.filter(t,s):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==c()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===c()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&e.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(t,n,i,r){var o=e.extend(new e.Event,i,{type:t,isSimulated:!0,originalEvent:{}});r?e.event.trigger(o,null,n):e.event.dispatch.call(n,o),o.isDefaultPrevented()&&i.preventDefault()}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},e.Event=function(t,n){return this instanceof e.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.getPreventDefault&&t.getPreventDefault()?a:l):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),this[e.expando]=!0,void 0):new e.Event(t,n)},e.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=a,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var i,r=this,o=t.relatedTarget,s=t.handleObj;return(!o||o!==r&&!e.contains(r,o))&&(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=n),i}}}),o.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(t,n){var i=function(t){e.event.simulate(n,t.target,e.event.fix(t),!0)};e.event.special[n]={setup:function(){var e=this.ownerDocument||this,r=s.access(e,n);r||e.addEventListener(t,i,!0),s.access(e,n,(r||0)+1)},teardown:function(){var e=this.ownerDocument||this,r=s.access(e,n)-1;r?s.access(e,n,r):(e.removeEventListener(t,i,!0),s.remove(e,n))}}}),e.fn.extend({on:function(t,n,i,r,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)this.on(a,n,i,t[a],o);return this}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=l;else if(!r)return this;return 1===o&&(s=r,r=function(t){return e().off(t),s.apply(this,arguments)},r.guid=s.guid||(s.guid=e.guid++)),this.each(function(){e.event.add(this,t,r,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(t,n,i){var r,o;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,e(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(o in t)this.off(o,n,t[o]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=void 0),i===!1&&(i=l),this.each(function(){e.event.remove(this,t,i,n)})},trigger:function(t,n){return this.each(function(){e.event.trigger(t,n,this)})},triggerHandler:function(t,n){var i=this[0];return i?e.event.trigger(t,n,i,!0):void 0}}),e});