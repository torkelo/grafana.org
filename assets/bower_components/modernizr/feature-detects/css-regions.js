Modernizr.addTest("regions",function(){var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto");if(!e||!t)return!1;var n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o="modernizr_flow_for_regions_check";r.innerText="M",n.style.cssText="top: 150px; left: 150px; padding: 0px;",i.style.cssText="width: 50px; height: 50px; padding: 42px;",i.style[e]=o,n.appendChild(r),n.appendChild(i),document.documentElement.appendChild(n);var a,u,c=r.getBoundingClientRect();return r.style[t]=o,a=r.getBoundingClientRect(),u=a.left-c.left,document.documentElement.removeChild(n),r=i=n=void 0,42==u});