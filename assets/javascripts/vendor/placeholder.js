!function(t,e,n){function i(t){var e={},i=/^jQuery\d+$/;return n.each(t.attributes,function(t,n){n.specified&&!i.test(n.name)&&(e[n.name]=n.value)}),e}function r(t,i){var r=this,o=n(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),t===!0)return o[0].value=i;o.focus()}else r.value="",o.removeClass("placeholder"),r==e.activeElement&&r.select()}function o(){var t,e=this,o=n(e),s=this.id;if(""==e.value){if("password"==e.type){if(!o.data("placeholder-textinput")){try{t=o.clone().attr({type:"text"})}catch(a){t=n("<input>").attr(n.extend(i(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",r),o.data({"placeholder-textinput":t,"placeholder-id":s}).before(t)}o=o.removeAttr("id").hide().prev().attr("id",s).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var s,a,c="placeholder"in e.createElement("input"),u="placeholder"in e.createElement("textarea"),l=n.fn,d=n.valHooks;c&&u?(a=l.placeholder=function(){return this},a.input=a.textarea=!0):(a=l.placeholder=function(){var t=this;return t.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},a.input=c,a.textarea=u,s={get:function(t){var e=n(t);return e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,i){var s=n(t);return s.data("placeholder-enabled")?(""==i?(t.value=i,t!=e.activeElement&&o.call(t)):s.hasClass("placeholder")?r.call(t,!0,i)||(t.value=i):t.value=i,s):t.value=i}},c||(d.input=s),u||(d.textarea=s),n(function(){n(e).delegate("form","submit.placeholder",function(){var t=n(".placeholder",this).each(r);setTimeout(function(){t.each(o)},10)})}),n(t).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);