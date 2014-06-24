!function(t,e,n,i){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.1.1",defaults:{expose:!1,modal:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,e,n){Foundation.inherit(this,"throttle random_str"),this.settings=this.defaults,this.bindings(e,n)},events:function(){var n=this;t(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end()}.bind(this)),t(e).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(t("["+n.attr_name()+"]").length>0&&n.settings.$next_tip){if(n.settings.exposed.length>0){var e=t(n.settings.exposed);e.each(function(){var e=t(this);n.un_expose(e),n.expose(e)})}n.is_phone()?n.pos_phone():n.pos_default(!1,!0)}},100))},start:function(){var e=this,n=t("["+this.attr_name()+"]",this.scope),i=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],s=i.length;!n.length>0||(this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=t(this.settings.tip_container),this.settings.body_offset=t(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,"function"!=typeof t.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!t.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(n){var r=t(this);this.settings=t.extend({},e.defaults,e.data_options(r));for(var o=s;o--;)e.settings[i[o]]=parseInt(e.settings[i[o]],10);e.create({$li:r,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(e){var n,i;return e.tip_class=e.tip_class||"",n=t(this.settings.template.tip).addClass(e.tip_class),i=t.trim(t(e.li).html())+this.button_text(e.button_text)+this.settings.template.link+this.timer_instance(e.index),n.append(t(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),e.index),t(".joyride-content-wrapper",n).append(i),n[0]},timer_instance:function(e){var n;return n=0===e&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":t(this.settings.template.timer)[0].outerHTML},button_text:function(e){return this.settings.next_button?(e=t.trim(e)||"Next",e=t(this.settings.template.button).append(e)[0].outerHTML):e="",e},create:function(e){console.log(e.$li);var n=e.$li.attr(this.add_namespace("data-button"))||e.$li.attr(this.add_namespace("data-text")),i=e.$li.attr("class"),s=t(this.tip_template({tip_class:i,index:e.index,button_text:n,li:e.$li}));t(this.settings.tip_container).append(s)},show:function(e){var n=null;this.settings.$li===i||-1===t.inArray(this.settings.$li.index(),this.settings.pause_after)?(this.settings.paused?this.settings.paused=!1:this.set_li(e),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(e&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=t.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fadeSpeed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){console.log(this.add_namespace("data-class"));var e=this.settings.$li.attr(this.add_namespace("data-class")),i=this.settings.$li.attr(this.add_namespace("data-id")),s=function(){return i?t(n.getElementById(i)):e?t("."+e).first():t("body")};console.log(e,i),this.settings.$target=s()},scroll_to:function(){var n,i;n=t(e).height()/2,i=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),0!=i&&t("html, body").animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=i,this.show("init")},pos_default:function(n,i){var s=(Math.ceil(t(e).height()/2),this.settings.$next_tip.offset(),this.settings.$next_tip.find(".joyride-nub")),r=Math.ceil(s.outerWidth()/2),o=Math.ceil(s.outerHeight()/2),a=n||!1;a&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),"undefined"==typeof i&&(i=!1),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):(this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+o+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+o+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left}),this.nub_position(s,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-o,left:this.settings.$target.offset().left}),this.nub_position(s,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.outerWidth(this.settings.$target)+this.settings.$target.offset().left+r}),this.nub_position(s,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.offset().left-this.outerWidth(this.settings.$next_tip)-r}),this.nub_position(s,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())),a&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(e){var n=this.settings.$next_tip.outerHeight(),i=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),s=t(".joyride-nub",this.settings.$next_tip),r=Math.ceil(s.outerHeight()/2),o=e||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),o&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-r}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+r}),s.addClass("top")),o&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var e=t(".joyride-modal-bg");e.length<1&&t("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?e.show():e.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,i,s,r,o,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof t)s=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;s=this.settings.$target}return s.length<1?(e.console&&console.error("element not valid",s),!1):(n=t(this.settings.template.expose),this.settings.$body.append(n),n.css({top:s.offset().top,left:s.offset().left,width:s.outerWidth(!0),height:s.outerHeight(!0)}),i=t(this.settings.template.expose_cover),r={zIndex:s.css("z-index"),position:s.css("position")},o=null==s.attr("class")?"":s.attr("class"),s.css("z-index",parseInt(n.css("z-index"))+1),"static"==r.position&&s.css("position","relative"),s.data("expose-css",r),s.data("orig-class",o),s.attr("class",o+" "+this.settings.expose_add_class),i.css({top:s.offset().top,left:s.offset().left,width:s.outerWidth(!0),height:s.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(i),n.addClass(a),i.addClass(a),s.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,s),this.add_exposed(s),void 0)},un_expose:function(){var n,i,s,r,o,a=!1;if(arguments.length>0&&arguments[0]instanceof t)i=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}return i.length<1?(e.console&&console.error("element not valid",i),!1):(n=i.data("expose"),s=t("."+n),arguments.length>1&&(a=arguments[1]),a===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():s.remove(),r=i.data("expose-css"),"auto"==r.zIndex?i.css("z-index",""):i.css("z-index",r.zIndex),r.position!=i.css("position")&&("static"==r.position?i.css("position",""):i.css("position",r.position)),o=i.data("orig-class"),i.attr("class",o),i.removeData("orig-classes"),i.removeData("expose"),i.removeData("expose-z-index"),this.remove_exposed(i),void 0)},add_exposed:function(e){this.settings.exposed=this.settings.exposed||[],e instanceof t||"object"==typeof e?this.settings.exposed.push(e[0]):"string"==typeof e&&this.settings.exposed.push(e)},remove_exposed:function(e){var n,i;for(e instanceof t?n=e[0]:"string"==typeof e&&(n=e),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==n)return this.settings.exposed.splice(i,1),void 0},center:function(){var n=t(e);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var i=t(e),s=i.height()/2,r=Math.ceil(this.settings.$target.offset().top-s+this.settings.$next_tip.outerHeight()),o=i.width()+i.scrollLeft(),a=i.height()+r,c=i.height()+i.scrollTop(),l=i.scrollTop();return l>r&&(l=0>r?0:r),a>c&&(c=a),[n.offset().top<l,o<n.offset().left+n.outerWidth(),c<n.offset().top+n.outerHeight(),i.scrollLeft()>n.offset().left]},visible:function(t){for(var e=t.length;e--;)if(t[e])return!1;return!0},nub_position:function(t,e,n){"auto"===e?t.addClass(n):t.addClass(e)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(){this.settings.cookie_monster&&t.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip),t(".joyride-tip-guide").remove()},off:function(){t(this.scope).off(".joyride"),t(e).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,this,this.document);