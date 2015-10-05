/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "http://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,n,t,o,i){e.addTest("wrapflow",function(){var e=n("wrapFlow");if(!e||i)return!1;var r=e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-"),a=o("div"),d=o("div"),c=o("span");d.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+r+":end;",c.innerText="X",a.appendChild(d),a.appendChild(c),t.appendChild(a);var u=c.offsetLeft;return t.removeChild(a),d=c=a=void 0,150==u})});