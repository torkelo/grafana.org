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
define(["Modernizr","createElement","inputElem"],function(e,t,n){var r="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),i={};e.input=function(e){for(var r=0,o=e.length;o>r;r++)i[e[r]]=!!(e[r]in n);return i.list&&(i.list=!(!t("datalist")||!window.HTMLDataListElement)),i}(r)});