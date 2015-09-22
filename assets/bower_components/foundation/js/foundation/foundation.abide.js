!function(t,e,n){"use strict";Foundation.libs.abide={name:"abide",version:"5.4.7",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t){var e=n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,r=t.value,i=e===r;return i}}},timer:null,init:function(t,e,n){this.bindings(e,n)},events:function(e){var n=this,r=n.S(e).attr("novalidate","novalidate"),i=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(t){var e=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").get(),t,e)}).on("reset",function(){return n.reset(t(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(t){n.validate([this],t)}).on("keydown.fndtn.abide",function(t){i.live_validate===!0&&(clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],t)}.bind(this),i.timeout))})},reset:function(e){e.removeAttr(this.invalid_attr),t(this.invalid_attr,e).removeAttr(this.invalid_attr),t("."+this.settings.error_class,e).not("small").removeClass(this.settings.error_class)},validate:function(t,e,n){for(var r=this.parse_patterns(t),i=r.length,o=this.S(t[0]).closest("form"),a=/submit/.test(e.type),s=0;i>s;s++)if(!r[s]&&(a||n))return this.settings.focus_on_invalid&&t[s].focus(),o.trigger("invalid"),this.S(t[s]).closest("form").attr(this.invalid_attr,""),!1;return(a||n)&&o.trigger("valid"),o.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(t){for(var e=t.length,n=[];e--;)n.push(this.pattern(t[e]));return this.check_validation_and_apply_styles(n)},pattern:function(t){var e=t.getAttribute("type"),n="string"==typeof t.getAttribute("required"),r=t.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(r)&&r.length>0?[t,this.settings.patterns[r],n]:r.length>0?[t,new RegExp(r),n]:this.settings.patterns.hasOwnProperty(e)?[t,this.settings.patterns[e],n]:(r=/.*/,[t,r,n])},check_validation_and_apply_styles:function(e){var n=e.length,r=[],i=this.S(e[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(i.data(this.attr_name(!0)+"-init")||{};n--;){var o,a,s=e[n][0],u=e[n][2],l=s.value.trim(),c=this.S(s).parent(),f=s.getAttribute(this.add_namespace("data-abide-validator")),d="radio"===s.type,p="checkbox"===s.type,h=this.S('label[for="'+s.getAttribute("id")+'"]'),m=u?s.value.length>0:!0,g=[];if(s.getAttribute(this.add_namespace("data-equalto"))&&(f="equalTo"),o=c.is("label")?c.parent():c,f&&(a=this.settings.validators[f].apply(this,[s,u,o]),g.push(a)),d&&u)g.push(this.valid_radio(s,u));else if(p&&u)g.push(this.valid_checkbox(s,u));else if(e[n][1].test(l)&&m||!u&&s.value.length<1||t(s).attr("disabled")?g.push(!0):g.push(!1),g=[g.every(function(t){return t})],g[0])this.S(s).removeAttr(this.invalid_attr),s.setAttribute("aria-invalid","false"),s.removeAttribute("aria-describedby"),o.removeClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),t(s).triggerHandler("valid");else{this.S(s).attr(this.invalid_attr,""),s.setAttribute("aria-invalid","true");var v=o.find("small."+this.settings.error_class,"span."+this.settings.error_class),y=v.length>0?v[0].id:"";y.length>0&&s.setAttribute("aria-describedby",y),o.addClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),t(s).triggerHandler("invalid")}r.push(g[0])}return r=[r.every(function(t){return t})]},valid_checkbox:function(t,e){var t=this.S(t),n=t.is(":checked")||!e;return n?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),n},valid_radio:function(t){for(var e=t.getAttribute("name"),n=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+e+"']"),r=n.length,i=!1,o=0;r>o;o++)n[o].checked&&(i=!0);for(var o=0;r>o;o++)i?this.S(n[o]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):this.S(n[o]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class);return i},valid_equal:function(t,e,r){var i=n.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,o=t.value,a=i===o;return a?(this.S(t).removeAttr(this.invalid_attr),r.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(t).attr(this.invalid_attr,""),r.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),a},valid_oneof:function(t,e,n,r){var t=this.S(t),i=this.S("["+this.add_namespace("data-oneof")+"]"),o=i.filter(":checked").length>0;if(o?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!r){var a=this;i.each(function(){a.valid_oneof.call(a,this,null,null,!0)})}return o}}}(jQuery,window,window.document);