define(["../core","../var/support"],function(e,t){return function(){function n(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",o.appendChild(a);var e=window.getComputedStyle(s,null);r="1%"!==e.top,i="4px"===e.width,o.removeChild(a)}var r,i,o=document.documentElement,a=document.createElement("div"),s=document.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",a.appendChild(s),window.getComputedStyle&&e.extend(t,{pixelPosition:function(){return n(),r},boxSizingReliable:function(){return null==i&&n(),i},reliableMarginRight:function(){var e,t=s.appendChild(document.createElement("div"));return t.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",s.style.width="1px",o.appendChild(a),e=!parseFloat(window.getComputedStyle(t,null).marginRight),o.removeChild(a),s.removeChild(t),e}}))}(),t});