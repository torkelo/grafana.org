Modernizr.addTest("display-table",function(){var t,e=window.document,n=e.documentElement,i=e.createElement("div"),r=e.createElement("div"),o=e.createElement("div");return i.style.cssText="display: table",r.style.cssText=o.style.cssText="display: table-cell; padding: 10px",i.appendChild(r),i.appendChild(o),n.insertBefore(i,n.firstChild),t=r.offsetLeft<o.offsetLeft,n.removeChild(i),t});