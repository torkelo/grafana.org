/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "http://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
define(["Modernizr","prefixed"],function(t,e){var n=e("URL",window,!1);n=n&&window[n],t.addTest("bloburls",n&&"revokeObjectURL"in n&&"createObjectURL"in n)});