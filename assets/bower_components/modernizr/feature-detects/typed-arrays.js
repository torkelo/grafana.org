/*!
{
  "name": "Typed arrays",
  "property": "typedarrays",
  "caniuse": "typedarrays",
  "tags": ["js"],
  "authors": ["Stanley Stuart (@fivetanley)"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
  },{
    "name": "Kronos spec",
    "href": "http://www.khronos.org/registry/typedarray/specs/latest/"
  }],
  "polyfills": ["joshuabell-polyfill"]
}
!*/
define(["Modernizr"],function(e){e.addTest("typedarrays","ArrayBuffer"in window)});