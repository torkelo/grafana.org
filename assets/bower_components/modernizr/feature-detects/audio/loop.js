/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("audioloop","loop"in n("audio"))});