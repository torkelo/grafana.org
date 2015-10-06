/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,t){t("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(t){var n,r=t.childNodes;n=r[0].offsetLeft<r[1].offsetLeft,e.addTest("displaytable",n,{aliases:["display-table"]})},2)});