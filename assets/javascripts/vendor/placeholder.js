!function(t,e,n){function i(t){var e={},i=/^jQuery\d+$/;return n.each(t.attributes,function(t,n){n.specified&&!i.test(n.name)&&(e[n.name]=n.value)}),e}function r(t,i){var r=this,o=n(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),t===!0)return o[0].value=i;o.focus()}else r.value="",o.removeClass("placeholder"),r==e.activeElement&&r.select()}function o(){var t,e=this,o=n(e),a=this.id;if(""==e.value){if("password"==e.type){if(!o.data("placeholder-textinput")){try{t=o.clone().attr({type:"text"})}catch(s){t=n("<input>").attr(n.extend(i(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":a}).bind("focus.placeholder",r),o.data({"placeholder-textinput":t,"placeholder-id":a}).before(t)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var a,s,u="placeholder"in e.createElement("input"),l="placeholder"in e.createElement("textarea"),c=n.fn,d=n.valHooks;u&&l?(s=c.placeholder=function(){return this},s.input=s.textarea=!0):(s=c.placeholder=function(){var t=this;return t.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},s.input=u,s.textarea=l,a={get:function(t){var e=n(t);return e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,i){var a=n(t);return a.data("placeholder-enabled")?(""==i?(t.value=i,t!=e.activeElement&&o.call(t)):a.hasClass("placeholder")?r.call(t,!0,i)||(t.value=i):t.value=i,a):t.value=i}},u||(d.input=a),l||(d.textarea=a),n(function(){n(e).delegate("form","submit.placeholder",function(){var t=n(".placeholder",this).each(r);setTimeout(function(){t.each(o)},10)})}),n(t).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);