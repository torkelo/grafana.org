Modernizr.addTest("formattribute",function(){var t,e=document.createElement("form"),n=document.createElement("input"),r=document.createElement("div"),i="formtest"+(new Date).getTime(),o=!1;return e.id=i,document.createAttribute&&(t=document.createAttribute("form"),t.nodeValue=i,n.setAttributeNode(t),r.appendChild(e),r.appendChild(n),document.documentElement.appendChild(r),o=1===e.elements.length&&n.form==e,r.parentNode.removeChild(r)),o});