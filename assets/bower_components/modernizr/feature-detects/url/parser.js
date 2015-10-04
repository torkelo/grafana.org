/*!
{
  "name": "URL parser",
  "property": "urlparser",
  "notes": [{
    "name": "URL",
    "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
  }],
  "polyfills": ["urlparser"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["url"]
}
!*/
define(["Modernizr"],function(t){t.addTest("urlparser",function(){var t;try{return t=new URL("http://modernizr.com/"),"http://modernizr.com/"===t.href}catch(e){return!1}})});