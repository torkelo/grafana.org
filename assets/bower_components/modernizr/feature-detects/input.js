/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(e,t,n){var i="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),o={};e.input=function(e){for(var i=0,r=e.length;r>i;i++)o[e[i]]=!!(e[i]in n);return o.list&&(o.list=!(!t("datalist")||!window.HTMLDataListElement)),o}(i)});