!function(t){"use strict";Foundation.libs.alert={name:"alert",version:"5.4.7",settings:{callback:function(){}},init:function(t,e,n){this.bindings(e,n)},events:function(){var e=this,n=this.S;t(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(t){var r=n(this).closest("["+e.attr_name()+"]"),i=r.data(e.attr_name(!0)+"-init")||e.settings;t.preventDefault(),Modernizr.csstransitions?(r.addClass("alert-close"),r.on("transitionend webkitTransitionEnd oTransitionEnd",function(){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})):r.fadeOut(300,function(){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})})},reflow:function(){}}}(jQuery,window,window.document);