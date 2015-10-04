/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "http://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,o){e.addTest("regions",function(){if(o)return!1;var i=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),d=!1;if(!i||!r)return d;var s=t("iframe"),a=t("div"),p=t("div"),c=t("div"),u="modernizr_flow_for_regions_check";p.innerText="M",a.style.cssText="top: 150px; left: 150px; padding: 0px;",c.style.cssText="width: 50px; height: 50px; padding: 42px;",c.style[i]=u,a.appendChild(p),a.appendChild(c),n.appendChild(a);var l,f,h=p.getBoundingClientRect();return p.style[r]=u,l=p.getBoundingClientRect(),f=parseInt(l.left-h.left,10),n.removeChild(a),42==f?d=!0:(n.appendChild(s),h=s.getBoundingClientRect(),s.style[r]=u,l=s.getBoundingClientRect(),h.height>0&&h.height!==l.height&&0===l.height&&(d=!0)),p=c=a=s=void 0,d})});