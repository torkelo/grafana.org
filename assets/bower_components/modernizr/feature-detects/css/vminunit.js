/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,r){n("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var i=n.childNodes[1],o=n.childNodes[0],s=parseInt((o.offsetWidth-o.clientWidth)/2,10),a=t.clientWidth/100,u=t.clientHeight/100,l=parseInt(50*Math.min(a,u),10),c=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);e.addTest("cssvminunit",r(l,c)||r(l,c-s))},2)});