!function(){if(Modernizr.webgl){var e,t,n;try{e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(i){return}Modernizr.webgl=void 0===t?new Boolean(!1):new Boolean(!0);for(var r=-1,o=n.length;++r<o;)Modernizr.webgl[n[r]]=!0;window.TEST&&TEST.audvid&&TEST.audvid.push("webgl"),e=void 0}}();