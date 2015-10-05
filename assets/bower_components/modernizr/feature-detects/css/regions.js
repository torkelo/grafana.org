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
define(["Modernizr","createElement","docElement","isSVG"],function(e,n,t,o){e.addTest("regions",function(){if(o)return!1;var i=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),d=!1;if(!i||!r)return d;var a=n("iframe"),s=n("div"),c=n("div"),u=n("div"),f="modernizr_flow_for_regions_check";c.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[i]=f,s.appendChild(c),s.appendChild(u),t.appendChild(s);var p,l,x=c.getBoundingClientRect();return c.style[r]=f,p=c.getBoundingClientRect(),l=parseInt(p.left-x.left,10),t.removeChild(s),42==l?d=!0:(t.appendChild(a),x=a.getBoundingClientRect(),a.style[r]=f,p=a.getBoundingClientRect(),x.height>0&&x.height!==p.height&&0===p.height&&(d=!0)),c=u=s=a=void 0,d})});