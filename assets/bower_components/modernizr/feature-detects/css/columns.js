/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,n=t("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(r){}return e});for(var n,r,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<i.length;o++)n=i[o].toLowerCase(),r=t("column"+i[o]),("breakbefore"===n||"breakafter"===n||"breakinside"==n)&&(r=r||t(i[o])),e.addTest("csscolumns."+n,r)}()});