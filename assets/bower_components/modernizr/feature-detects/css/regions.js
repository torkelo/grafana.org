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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,r){e.addTest("regions",function(){if(r)return!1;var i=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),s=!1;if(!i||!o)return s;var a=t("iframe"),u=t("div"),l=t("div"),c=t("div"),f="modernizr_flow_for_regions_check";l.innerText="M",u.style.cssText="top: 150px; left: 150px; padding: 0px;",c.style.cssText="width: 50px; height: 50px; padding: 42px;",c.style[i]=f,u.appendChild(l),u.appendChild(c),n.appendChild(u);var d,p,h=l.getBoundingClientRect();return l.style[o]=f,d=l.getBoundingClientRect(),p=parseInt(d.left-h.left,10),n.removeChild(u),42==p?s=!0:(n.appendChild(a),h=a.getBoundingClientRect(),a.style[o]=f,d=a.getBoundingClientRect(),h.height>0&&h.height!==d.height&&0===d.height&&(s=!0)),l=c=u=a=void 0,s})});