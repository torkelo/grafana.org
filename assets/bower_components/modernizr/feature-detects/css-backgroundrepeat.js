!function(){function t(t){return window.getComputedStyle?getComputedStyle(t,null).getPropertyValue("background"):t.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(e,n){Modernizr.addTest("bgrepeatround","round"==t(e))}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(e,n){Modernizr.addTest("bgrepeatspace","space"==t(e))})}();