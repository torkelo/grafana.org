!function(e,t){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.1.1",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop},init:function(e,t,n){this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(t){var n=!1,i=t.find("["+this.attr_name()+"-watch]"),r=i.first().offset().top,o=t.data(this.attr_name(!0)+"-init");if(0!==i.length&&(o.before_height_change(),t.trigger("before-height-change"),i.height("inherit"),i.each(function(){var t=e(this);t.offset().top!==r&&(n=!0)}),!n)){var s=i.map(function(){return e(this).outerHeight()});if(o.use_tallest){var a=Math.max.apply(null,s);i.height(a)}else{var l=Math.min.apply(null,s);i.height(l)}o.after_height_change(),t.trigger("after-height-change")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){t.equalize(e(this))})}}}(jQuery,this,this.document);