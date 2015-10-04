/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "http://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
define(["Modernizr","addTest"],function(e,t){e.addAsyncTest(function(){function n(){var n=new Image;n.onerror=function(){t("datauri",!0),e.datauri=new Boolean(!0),e.datauri.over32kb=!1},n.onload=function(){t("datauri",!0),e.datauri=new Boolean(!0),e.datauri.over32kb=1==n.width&&1==n.height};for(var r="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.length<33e3;)r="\r\n"+r;n.src="data:image/gif;base64,"+r}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){t("datauri",!1)},10);var r=new Image;r.onerror=function(){t("datauri",!1)},r.onload=function(){1==r.width&&1==r.height?n():t("datauri",!1)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="})});