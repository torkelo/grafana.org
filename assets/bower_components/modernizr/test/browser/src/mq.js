describe("mq",function(){var e,t,n,o,i,r=window.matchMedia||function(){var e,t=document.documentElement,n=t.firstElementChild||t.firstChild,o=document.createElement("body"),i=document.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(i),function(r){return i.innerHTML='&shy;<style media="'+r+'"> #mq-test-1 { width: 42px; }</style>',t.insertBefore(o,n),e=42===i.offsetWidth,t.removeChild(o),{matches:e,media:r}}}();before(function(t){(i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}))(["injectElementWithStyles","cleanup","sinon"],function(i,r,a){e=i,n=r,o=a,t()})}),window.matchMedia||window.msMatchMedia?describe("matchMedia version",function(){before(function(e){i(["mq"],function(n){t=n,e()})}),it("works",function(){expect(t("only screen")).to.equal(r("only screen").matches),expect(t("only fake rule")).to.equal(r("only fake rule").matches)})}):describe("fallback version",function(){before(function(n){e=o.spy(e),i.undef("injectElementWithStyles"),i.undef("mq"),define("injectElementWithStyles",[],function(){return e}),i(["mq"],function(e){t=e,n()})}),it("works",function(){expect(t("only screen")).to.equal(r("only screen").matches),expect(t("only fake rule")).to.equal(r("only fake rule").matches),expect(e.called).to.be(!0)})}),afterEach(function(){i.undef("mq")}),after(function(){n()})});