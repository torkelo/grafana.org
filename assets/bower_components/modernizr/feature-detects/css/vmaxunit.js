/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var o=n.childNodes[1],r=n.childNodes[0],s=parseInt((r.offsetWidth-r.clientWidth)/2,10),d=t.clientWidth/100,a=t.clientHeight/100,c=parseInt(50*Math.max(d,a),10),p=parseInt((window.getComputedStyle?getComputedStyle(o,null):o.currentStyle).width,10);e.addTest("cssvmaxunit",i(c,p)||i(c,p-s))},2)});