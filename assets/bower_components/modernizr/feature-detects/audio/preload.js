/*!
{
  "name": "Audio Preload Attribute",
  "property": "audiopreload",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("audiopreload","preload"in n("audio"))});