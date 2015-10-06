describe("prefixed",function(){var e,t,n,o,i,r,c,a;before(function(e){(a=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}))(["sinon","cleanup"],function(t,n){c=t,i=n,e()})}),beforeEach(function(i){t=c.spy(function(){return"fakeRule"}),o=c.spy(function(){return"fakeRule"}),r=c.spy(function(){return"@fakeRule"}),e={},define("ModernizrProto",[],function(){return e}),define("testPropsAll",[],function(){return t}),define("cssToDOM",[],function(){return o}),define("atRule",[],function(){return r}),a(["prefixed"],function(e){n=e,i()})}),it("is a function",function(){expect(n).to.be.a("function")}),it("creates a reference on `ModernizrProto`",function(){expect(n).to.equal(e.prefixed)}),it('uses atRule to lookup rules starting with "@"',function(){expect(n("@fakeRule")).to.equal("@fakeRule"),expect(r.calledOnce).to.be(!0)}),it('uses cssToDOM to lookup rules with "-"',function(){expect(n("fake-rule")).to.equal("fakeRule"),expect(o.calledOnce).to.be(!0),expect(t.calledOnce).to.be(!0)}),it("looks up properties on an element, when one is provided",function(){var e=document.createElement("div");expect(n("children",e)).to.equal("fakeRule"),expect(t.calledOnce).to.be(!0)}),afterEach(function(){a.undef("ModernizrProto"),a.undef("testPropsAll"),a.undef("cssToDOM"),a.undef("prefixed"),a.undef("atRule")}),after(function(){i()})});