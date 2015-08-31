QUnit.begin=function(){console.log("Starting test suite"),console.log("================================================\n")},QUnit.moduleDone=function(t){0===t.failed?console.log("✔ All tests passed in '"+t.name+"' module"):console.log("✖ "+t.failed+" tests failed in '"+t.name+"' module")},QUnit.done=function(t){console.log("\n================================================"),console.log("Tests completed in "+t.runtime+" milliseconds"),console.log(t.passed+" tests of "+t.total+" passed, "+t.failed+" failed.")},module("Basics",{setup:function(){},teardown:function(){}}),test("globals set up",function(){ok(window.Modernizr,"global modernizr object created")}),test("bind is implemented",function(){function t(t,e){n=this+" -> x:"+t+", y:"+e}ok(Function.prototype.bind,"bind is a member of Function.prototype");var e=function(){return this.modernizr};e=e.bind({modernizr:"just awsome"}),equal("just awsome",e(),"bind works as expected");var n;G=t.bind("'a'","'b'"),H=G.bind("'Cannot rebind this!'","'c'"),G(1,2),equal(n,"'a' -> x:'b', y:1"),H(1,2),equal(n,"'a' -> x:'b', y:'c'");var i=new t(1,2);equal(n,"[object Object] -> x:1, y:2");var r=new G(1,2);equal(n,"[object Object] -> x:'b', y:1");var o=new H(1,2);equal(n,"[object Object] -> x:'b', y:'c'"),ok(i instanceof t,"f instanceof F"),ok(r instanceof t,"g instanceof F"),ok(o instanceof t,"h instanceof F"),ok("prototype"in t,'"prototype" in F'),raises(function(){Function.bind.call(void 0)});var s=String.prototype.charAt.bind("abc");equal(s(1),"b","Objects that allow call but not construct can be bound..."),equal(1,Function.bind.length,"it exists")}),test("document.documentElement is valid and correct",1,function(){equal(document.documentElement,document.getElementsByTagName("html")[0])}),test("no-js class is gone.",function(){ok(!/(?:^|\s)no-js(?:^|\s)/.test(document.documentElement.className),"no-js class is gone"),ok(/(?:^|\s)js(?:^|\s)/.test(document.documentElement.className),"html.js class is present"),ok(/(?:^|\s)\+no-js(?:\s|$)/.test(document.documentElement.className),"html.+no-js class is still present"),ok(/(?:^|\s)no-js-(?:\s|$)/.test(document.documentElement.className),"html.no-js- class is still present"),ok(/(?:^|\s)i-has-no-js(?:\s|$)/.test(document.documentElement.className),"html.i-has-no-js class is still present"),document.querySelector&&ok(document.querySelector("html.js")==document.documentElement,"document.querySelector('html.js') matches.")}),test("html shim worked",function(){expect(2);var t=document.getElementsByTagName("section")[0];t.id="html5section",ok(1===t.childNodes.length,"unknown elements dont collapse"),t.style.color="red",ok(/red|#ff0000/i.test(t.style.color),"unknown elements are styleable")}),module("Modernizr classes and bools",{setup:function(){},teardown:function(){}}),test("html classes are looking good",function(){for(var t=TEST.trim(document.documentElement.className).split(/\s+/),e=Object.keys(Modernizr),n=e,i=-1,r=TEST.privates.length;++i<r;){var o=TEST.privates[i];equal(-1,TEST.inArray(o,t),"private Modernizr object "+o+"should not have matching classes"),equal(-1,TEST.inArray("no-"+o,t),"private Modernizr object no-"+o+" should not have matching classes")}$.each(TEST.deprecated,function(){n.splice(TEST.inArray(o,n),1)}),t.length!==n;for(var s,i=0,r=t.length;r>i;i++)s=t[i],/^(?:js|\+no-js|no-js-|i-has-no-js)$/.test(s)||(0===s.indexOf("no-")?(s=s.replace("no-",""),equal(Modernizr[s],!1,s+" is correctly false in the classes and object")):equal(Modernizr[s],!0,s+" is correctly true in the classes and object"));for(var s,i=0,r=t.length;r>i;i++)equal(t[i],t[i].toLowerCase(),"all classes are lowerCase.");var a=document.documentElement.className;$.each(["\\+no-js","no-js-","i-has-no-js"],function(t,e){a=a.replace(new RegExp("(^|\\s)"+e+"(\\s|$)","g"),"$1$2")}),equal(/[^\s]no-/.test(a),!1,"whitespace between all classes.")}),test("Modernizr properties are looking good",function(){var t=TEST.API.concat(TEST.inputs).concat(TEST.audvid).concat(TEST.privates).concat(["textarea"]);for(var e in window.Modernizr)if(Modernizr.hasOwnProperty(e)){if(TEST.inArray(e,t)>=0)continue;ok(Modernizr[e]===!0||Modernizr[e]===!1,"Modernizr."+e+" is a straight up boolean"),equal(e,e.toLowerCase(),"all properties are lowerCase.")}}),test("Modernizr.audio and Modernizr.video",function(){for(var t=-1,e=TEST.audvid.length;++t<e;){var n=TEST.audvid[t];"true"==Modernizr[n].toString()?(ok(Modernizr[n],"Modernizr."+n+" is truthy."),equal(1==Modernizr[n],!0,"Modernizr."+n+" is == true"),equal("object"==typeof Modernizr[n],!0,"Moderizr."+n+" is truly an object"),equal(Modernizr[n]!==!0,!0,"Modernizr."+n+" is !== true")):equal(1!=Modernizr[n],!0,"Modernizr."+n+" is != true")}}),test("Modernizr results match expected values",function(){equal(!!document.createElement("canvas").getContext,Modernizr.canvas,"canvas test consistent"),equal(!!window.Worker,Modernizr.webworkers,"web workers test consistent")}),module("Modernizr's API methods",{setup:function(){},teardown:function(){}}),test("Modernizr.addTest()",22,function(){var t=document.documentElement;Modernizr.addTest("testtrue",function(){return!0}),Modernizr.addTest("testtruthy",function(){return 100}),Modernizr.addTest("testfalse",function(){return!1}),Modernizr.addTest("testfalsy",function(){return void 0}),ok(t.className.indexOf(" testtrue")>=0,"positive class added"),equal(Modernizr.testtrue,!0,"positive prop added"),ok(t.className.indexOf(" testtruthy")>=0,"positive class added"),equal(Modernizr.testtruthy,100,"truthy value is not casted to straight boolean"),ok(t.className.indexOf(" no-testfalse")>=0,"negative class added"),equal(Modernizr.testfalse,!1,"negative prop added"),ok(t.className.indexOf(" no-testfalsy")>=0,"negative class added"),equal(Modernizr.testfalsy,void 0,"falsy value is not casted to straight boolean"),Modernizr.addTest("testcamelCase",function(){return!0}),ok(-1===t.className.indexOf(" testcamelCase"),"camelCase test name toLowerCase()'d"),Modernizr.addTest("testboolfalse",!1),ok(~t.className.indexOf(" no-testboolfalse"),"Modernizr.addTest(feature, bool): negative class added"),equal(Modernizr.testboolfalse,!1,"Modernizr.addTest(feature, bool): negative prop added"),Modernizr.addTest("testbooltrue",!0),ok(~t.className.indexOf(" testbooltrue"),"Modernizr.addTest(feature, bool): positive class added"),equal(Modernizr.testbooltrue,!0,"Modernizr.addTest(feature, bool): positive prop added"),Modernizr.addTest({testobjboolfalse:!1,testobjbooltrue:!0}),ok(~t.className.indexOf(" no-testobjboolfalse"),"Modernizr.addTest({feature: bool}): negative class added"),equal(Modernizr.testobjboolfalse,!1,"Modernizr.addTest({feature: bool}): negative prop added"),ok(~t.className.indexOf(" testobjbooltrue"),"Modernizr.addTest({feature: bool}): positive class added"),equal(Modernizr.testobjbooltrue,!0,"Modernizr.addTest({feature: bool}): positive prop added"),Modernizr.addTest({testobjfnfalse:function(){return!1},testobjfntrue:function(){return!0}}),ok(~t.className.indexOf(" no-testobjfnfalse"),"Modernizr.addTest({feature: bool}): negative class added"),equal(Modernizr.testobjfnfalse,!1,"Modernizr.addTest({feature: bool}): negative prop added"),ok(~t.className.indexOf(" testobjfntrue"),"Modernizr.addTest({feature: bool}): positive class added"),equal(Modernizr.testobjfntrue,!0,"Modernizr.addTest({feature: bool}): positive prop added"),Modernizr.addTest("testchainone",!0).addTest({testchaintwo:!0}).addTest("testchainthree",function(){return!0}),ok(Modernizr.testchainone==Modernizr.testchaintwo==Modernizr.testchainthree,"addTest is chainable")}),test("Modernizr.mq: media query testing",function(){var t=$("html");$.mobile={},$.mobile.media=function(){var e={},n=$("<div id='jquery-mediatest'>"),i=$("<body>").append(n);return function(r){if(!(r in e)){var o=document.createElement("style"),s="@media "+r+" { #jquery-mediatest { position:absolute; } }";o.type="text/css",o.styleSheet?o.styleSheet.cssText=s:o.appendChild(document.createTextNode(s)),t.prepend(i).prepend(o),e[r]="absolute"===n.css("position"),i.add(o).remove()}return e[r]}}(),ok(Modernizr.mq,"Modernizr.mq() doesn' freak out."),equal($.mobile.media("only screen"),Modernizr.mq("only screen"),"screen media query matches jQuery mobile's result"),equal(Modernizr.mq("only all"),Modernizr.mq("only all"),"Cache hit matches")}),test("Modernizr.hasEvent()",function(){ok("function"==typeof Modernizr.hasEvent,"Modernizr.hasEvent() is a function"),equal(Modernizr.hasEvent("click"),!0,"click event is supported"),equal(Modernizr.hasEvent("modernizrcustomevent"),!1,"random event is definitely not supported")}),test("Modernizr.testStyles()",function(){equal(typeof Modernizr.testStyles,"function","Modernizr.testStyles() is a function");var t="#modernizr{ width: 9px; height: 4px; font-size: 0; color: papayawhip; }";Modernizr.testStyles(t,function(e,n){equal(t,n,"rule passsed back matches what i gave it."),equal(e.offsetWidth,9,"width was set through the style"),equal(e.offsetHeight,4,"height was set through the style"),equal(e.id,"modernizr","element is indeed the modernizr element")})}),test("Modernizr._[properties]",function(){equal(6,Modernizr._prefixes.length,"Modernizr._prefixes has 6 items"),equal(4,Modernizr._domPrefixes.length,"Modernizr.domPrefixes has 4 items")}),test("Modernizr.testProp()",function(){equal(!0,Modernizr.testProp("margin"),"Everyone supports margin"),equal(!1,Modernizr.testProp("happiness"),"Nobody supports the happiness style. :("),equal(!0,Modernizr.testProp("fontSize"),"Everyone supports fontSize"),equal(!1,Modernizr.testProp("font-size"),"Nobody supports font-size"),equal("pointerEvents"in document.createElement("div").style,Modernizr.testProp("pointerEvents"),"results for `pointer-events` are consistent with a homegrown feature test")}),test("Modernizr.testAllProps()",function(){equal(!0,Modernizr.testAllProps("margin"),"Everyone supports margin"),equal(!1,Modernizr.testAllProps("happiness"),"Nobody supports the happiness style. :("),equal(!0,Modernizr.testAllProps("fontSize"),"Everyone supports fontSize"),equal(!1,Modernizr.testAllProps("font-size"),"Nobody supports font-size"),equal(Modernizr.csstransitions,Modernizr.testAllProps("transition"),"Modernizr result matches API result: csstransitions"),equal(Modernizr.csscolumns,Modernizr.testAllProps("columnCount"),"Modernizr result matches API result: csscolumns")}),test("Modernizr.prefixed() - css and DOM resolving",function(){function t(t,e){var n=["Moz","Khtml","Webkit","O","ms"],i=["moz","khtml","webkit","o","ms"],r=document.createElement("div"),o=t.charAt(0).toUpperCase()+t.slice(1);if(e){if(t in e)return t;for(var s=i.length;s--;)if(i[s]+o in e)return i[s]+o}else{if(t in r.style)return t;for(var s=n.length;s--;)if(n[s]+o in r.style)return n[s]+o}return!1}for(var e=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"],n=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}],i=-1,r=e.length;++i<r;){var o=e[i];equal(Modernizr.prefixed(o),t(o),"results for "+o+" match the homebaked prefix finder")}for(var i=-1,r=n.length;++i<r;){var o=n[i];ok(!!~Modernizr.prefixed(o.prop,o.obj,!1).toString().indexOf(t(o.prop,o.obj)),"results for "+o.prop+" match the homebaked prefix finder")}}),test("Modernizr.prefixed autobind",function(){for(var t,e=["ms","moz","webkit","o"],n=0;n<e.length&&!t;++n)t=window[e[n]+"RequestAnimationFrame"]&&e[n]+"RequestAnimationFrame";if(t&&(equal("function",typeof Modernizr.prefixed("requestAnimationFrame",window),"Modernizr.prefixed('requestAnimationFrame', window) returns a function"),equal(t,Modernizr.prefixed("requestAnimationFrame",window,!1),"Modernizr.prefixed('requestAnimationFrame', window, false) returns a string (the prop name)")),document.body.webkitMatchesSelector||document.body.mozMatchesSelector){var i=Modernizr.prefixed("matchesSelector",HTMLElement.prototype,document.body);equal("function",typeof i,"Modernizr.prefixed('matchesSelector', HTMLElement.prototype, document.body) returns a function"),equal(!0,i("body"),"Modernizr.prefixed('matchesSelector', HTMLElement.prototype, document.body) is scoped to the body")}window.webkitNotifications&&equal("object",typeof Modernizr.prefixed("Notifications",window),"Modernizr.prefixed('Notifications') returns an object"),"undefined"!=typeof document.webkitIsFullScreen&&equal("boolean",typeof Modernizr.prefixed("isFullScreen",document),"Modernizr.prefixed('isFullScreen') returns a boolean"),"undefined"!=typeof document.mozFullScreen&&equal("boolean",typeof Modernizr.prefixed("fullScreen",document),"Modernizr.prefixed('fullScreen') returns a boolean"),document.body.style.WebkitAnimation&&(equal("string",typeof Modernizr.prefixed("animation",document.body.style),"Modernizr.prefixed('animation', document.body.style) returns value of that, as a string"),equal(animationStyle.toLowerCase(),Modernizr.prefixed("animation",document.body.style,!1).toLowerCase(),"Modernizr.prefixed('animation', document.body.style, false) returns the (case-normalized) name of the property: webkitanimation")),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj) returns false"),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window,document.body),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj, scope) returns false"),equal(!1,Modernizr.prefixed("doSomethingAmazing$#$",window,!1),"Modernizr.prefixed('doSomethingAmazing$#$', window) : Gobbledygook with prefixed(str,obj, false) returns false")});