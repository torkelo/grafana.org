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
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,n,t,i,o){e.addTest("wrapflow",function(){var e=n("wrapFlow");if(!e||o)return!1;var r=e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-"),d=i("div"),a=i("div"),c=i("span");a.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+r+":end;",c.innerText="X",d.appendChild(a),d.appendChild(c),t.appendChild(d);var u=c.offsetLeft;return t.removeChild(d),a=c=d=void 0,150==u})});