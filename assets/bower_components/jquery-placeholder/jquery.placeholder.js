!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e){var n={},r=/^jQuery\d+$/;return t.each(e.attributes,function(t,e){e.specified&&!r.test(e.name)&&(n[e.name]=e.value)}),n}function n(e,n){var r=this,o=t(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().nextAll('input[type="password"]:first').show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=n;o.focus()}else r.value="",o.removeClass("placeholder"),r==i()&&r.select()}function r(){var r,i=this,o=t(i),a=this.id;if(""===i.value){if("password"===i.type){if(!o.data("placeholder-textinput")){try{r=o.clone().attr({type:"text"})}catch(s){r=t("<input>").attr(t.extend(e(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":o,"placeholder-id":a}).bind("focus.placeholder",n),o.data({"placeholder-textinput":r,"placeholder-id":a}).before(r)}o=o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}function i(){try{return document.activeElement}catch(t){}}var o,a,s="[object OperaMini]"==Object.prototype.toString.call(window.operamini),u="placeholder"in document.createElement("input")&&!s,l="placeholder"in document.createElement("textarea")&&!s,c=t.valHooks,f=t.propHooks;u&&l?(a=t.fn.placeholder=function(){return this},a.input=a.textarea=!0):(a=t.fn.placeholder=function(){var t=this;return t.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":r}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},a.input=u,a.textarea=l,o={get:function(e){var n=t(e),r=n.data("placeholder-password");return r?r[0].value:n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":e.value},set:function(e,o){var a=t(e),s=a.data("placeholder-password");return s?s[0].value=o:a.data("placeholder-enabled")?(""===o?(e.value=o,e!=i()&&r.call(e)):a.hasClass("placeholder")?n.call(e,!0,o)||(e.value=o):e.value=o,a):e.value=o}},u||(c.input=o,f.value=o),l||(c.textarea=o,f.value=o),t(function(){t(document).delegate("form","submit.placeholder",function(){var e=t(".placeholder",this).each(n);setTimeout(function(){e.each(r)},10)})}),t(window).bind("beforeunload.placeholder",function(){t(".placeholder").each(function(){this.value=""})}))});