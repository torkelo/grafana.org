/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/transitions"],function(e){e.addTest("csspseudotransitions",function(){var n=!1;if(!e.csstransitions||!window.getComputedStyle)return n;var t='#modernizr:before { content:" "; font-size:5px;'+e._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return e.testStyles(t,function(e){window.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",n="5px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),n})});