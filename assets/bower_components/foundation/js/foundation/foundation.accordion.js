!function(t){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.4.7",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(t,e,n){this.bindings(e,n)},events:function(){var e=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(i){var r=n(this).closest("["+e.attr_name()+"]"),o=e.attr_name()+"="+r.attr(e.attr_name()),a=r.data(e.attr_name(!0)+"-init"),s=n("#"+this.href.split("#")[1]),l=t("> dd",r),u=l.children("."+a.content_class),c=u.filter("."+a.active_class);return i.preventDefault(),r.attr(e.attr_name())&&(u=u.add("["+o+"] dd > ."+a.content_class),l=l.add("["+o+"] dd")),a.toggleable&&s.is(c)?(s.parent("dd").toggleClass(a.active_class,!1),s.toggleClass(a.active_class,!1),a.callback(s),s.triggerHandler("toggled",[r]),r.triggerHandler("toggled",[s]),void 0):(a.multi_expand||(u.removeClass(a.active_class),l.removeClass(a.active_class)),s.addClass(a.active_class).parent().addClass(a.active_class),a.callback(s),s.triggerHandler("toggled",[r]),r.triggerHandler("toggled",[s]),void 0)})},off:function(){},reflow:function(){}}}(jQuery,window,window.document);