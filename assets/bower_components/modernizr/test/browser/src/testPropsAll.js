describe("testPropsAll",function(){var e,t,n,o,r,i={_config:{}},a={_q:[]};before(function(e){r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}),define("ModernizrProto",[],function(){return i}),define("Modernizr",[],function(){return a}),define("package",[],function(){return{}}),r(["testDOMProps","testProps","cleanup","sinon"],function(r,i,a,s){t=s.spy(r),n=s.spy(i),o=a,e()})}),beforeEach(function(o){r.undef("testDOMProps"),r.undef("testProps"),t.reset(),n.reset(),define("testDOMProps",function(){return t}),define("testProps",function(){return n}),r(["testPropsAll"],function(r){e=r,expect(t.callCount).to.be(0),expect(n.callCount).to.be(0),o()})}),it("`testProps` is called if `prefixed` is a string",function(){e("display","pfx",void 0,"block"),expect(n.callCount).to.be(1)}),it("`testProps` is called if `prefixed` is undefined",function(){e("display",void 0,void 0,"block"),expect(n.callCount).to.be(1)}),it("`testDOMProps` is called if `prefixed` is anything else",function(){e("display",[],void 0,"block"),expect(t.callCount).to.be(1)}),it("is added to ModernizrProto as `testAllProps`",function(){expect(e).to.equal(i.testAllProps)}),afterEach(function(){r.undef("testPropsAll"),r.undef("testDOMProps"),r.undef("testProps")}),after(function(){o()})});