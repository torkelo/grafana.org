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
define(["Modernizr","createElement","docElement","isSVG"],function(e,n,t,i){e.addTest("regions",function(){if(i)return!1;var o=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),d=!1;if(!o||!r)return d;var a=n("iframe"),s=n("div"),c=n("div"),u=n("div"),l="modernizr_flow_for_regions_check";c.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",u.style.cssText="width: 50px; height: 50px; padding: 42px;",u.style[o]=l,s.appendChild(c),s.appendChild(u),t.appendChild(s);var f,p,g=c.getBoundingClientRect();return c.style[r]=l,f=c.getBoundingClientRect(),p=parseInt(f.left-g.left,10),t.removeChild(s),42==p?d=!0:(t.appendChild(a),g=a.getBoundingClientRect(),a.style[r]=l,f=a.getBoundingClientRect(),g.height>0&&g.height!==f.height&&0===f.height&&(d=!0)),c=u=s=a=void 0,d})});