!function(){function t(t){var e={};for(var n in t)try{e[n]={type:typeof t[n],value:t[n]}}catch(i){e[n]={}}return e}function e(){var t=document.createElement("iframe");t.style.display="none";var e=document.getElementsByTagName("script")[0];return e.parentNode.insertBefore(t,e),t.src="about:blank",t.contentWindow}function n(t){var e=0;for(var n in t)e++;return e}function i(t){for(var e in o){var n=document.getElementById("__"+e),i=o[e].indexOf(t)>-1;if(i&&(n?n.checked:!0))return!0}}function r(){var r=function(){return this}(),o=t(r),s=e();for(var a in s)o[a]&&delete o[a];for(var a in o)i(a)&&delete o[a];window.__globalsCount=n(o),window.__globals=o,window.console&&console.log("Total number of global properties: "+__globalsCount),window.console&&console.dir(__globals)}var o={Prototype:"$$ $A $F $H $R $break $continue $w Abstract Ajax Class Enumerable Element Field Form "+"Hash Insertion ObjectRange PeriodicalExecuter Position Prototype Selector Template Toggle Try".split(" "),Scriptaculous:"Autocompleter Builder Control Draggable Draggables Droppables Effect Sortable SortableObserver Sound Scriptaculous".split(" "),Firebug:"loadFirebugConsole console _getFirebugConsoleElement _FirebugConsole _FirebugCommandLine _firebug".split(" "),Mozilla:"Components XPCNativeWrapper XPCSafeJSObjectWrapper getInterface netscape GetWeakReference GeckoActiveXObject".split(" "),GoogleAnalytics:"gaJsHost gaGlobal _gat _gaq pageTracker".split(" "),lazyGlobals:"onhashchange".split(" ")},s=document.getElementById("__analyze");s&&(s.onclick=r),r()}();