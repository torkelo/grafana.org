/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
    "href": "http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx"
  }]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("userdata",!!e("div").addBehavior)});