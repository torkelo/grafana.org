!function(){function e(e){H.set(e)}function t(e){if(!e||""==e)return"";for(;e[u](0)[p]>0&&" \n\r	"[l](e[u](0))>-1;)e=e[b](1);for(;e[u](e[p]-1)[p]>0&&" \n\r	"[l](e[u](e[p]-1))>-1;)e=e[b](0,e[p]-1);return e}var n=void 0,r=encodeURIComponent,i=String,o=Math,s="push",a="cookie",u="charAt",l="indexOf",c="getTime",f="toString",d="window",p="length",h="document",m="split",g="location",v="protocol",y="href",b="substring",x="join",w="toLowerCase",T="_gat",C="_gaq",k="4.9.4",N="_gaUserPrefs",S="ioo",E="&",_="=",j="__utma=",A="__utmb=",M="__utmc=",D="__utmk=",q="__utmv=",L="__utmz=",O="__utmx=",F="GASO=",$=function(){var e=this,t=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";e.set=function(e){t[e]=!0},e.Sc=function(){for(var e=[],r=0;r<t[p];r++)t[r]&&(e[o.floor(r/6)]^=1<<r%6);for(r=0;r<e[p];r++)e[r]=n[u](e[r]||0);return e[x]("")+"~"}},H=new $,z=function(e,t){var n=this;n.window=e,n.document=t,n.setTimeout=function(e,t){setTimeout(e,t)},n.Jb=function(e){return navigator.userAgent[l](e)>=0},n.Xc=function(){return n.Jb("Firefox")&&![].reduce},n.Vc=function(){return P[d][N]},n.Gc=function(){return P[d].external},n.Hc=function(){return P[d].performance||P[d].webkitPerformance},n.Ic=function(){return P[d].top==P[d]},n.Ya=function(e){var t=P[d]&&P[d].gaGlobal;return e&&!t&&(t={},P[d].gaGlobal=t),t},n.ec=function(e){P[h][g].href=e},n.qb=function(e){if(!e||!n.Jb("Firefox"))return e;for(var e=e.replace(/\n|\r/g," "),t=0,r=e[p];r>t;++t){var i=255&e.charCodeAt(t);(10==i||13==i)&&(e=e[b](0,t)+"?"+e[b](t+1))}return e}},P=new z(window,document),I=function(t){return function(n,r,i){return t[n]=function(){return e(r),i.apply(t,arguments)},i}},B=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!!r):e.attachEvent&&e.attachEvent("on"+t,n)},R=function(e){return"[object Array]"==Object.prototype[f].call(Object(e))},W=function(e){return n==e||"-"==e||""==e},X=function(e,t,n){var r,i="-";return!W(e)&&!W(t)&&!W(n)&&(r=e[l](t),r>-1&&(n=e[l](n,r),0>n&&(n=e[p]),i=e[b](r+t[l](_)+1,n))),i},U=function(e){var t,n,r=!1,i=0;if(!W(e))for(r=!0,t=0;t<e[p];t++)n=e[u](t),i+="."==n?1:0,r=r&&1>=i&&(0==t&&"-"==n||".0123456789"[l](n)>-1);return r},V=function(t,n){var i=r;return i instanceof Function?n?encodeURI(t):i(t):(e(68),escape(t))},G=function(t,n){var r,i=decodeURIComponent,t=t[m]("+")[x](" ");if(i instanceof Function)try{r=n?decodeURI(t):i(t)}catch(o){e(17),r=unescape(t)}else e(68),r=unescape(t);return r},J=function(e,t){return e[l](t)>-1},K=function(t,n){t[s]||e(94),t[t[p]]=n},Y=function(e){var t,n=1,r=0;if(!W(e))for(n=0,t=e[p]-1;t>=0;t--)r=e.charCodeAt(t),n=(268435455&n<<6)+r+(r<<14),r=266338304&n,n=0!=r?n^r>>21:n;return n},Q=function(){return o.round(2147483647*o.random())},Z=function(){},et=function(e,t){this.ib=e,this.jb=t},tt=function(){function e(e){for(var t,n=[],e=e[m](","),r=0;r<e[p];r++)t=e[r][m](":"),n[s](new et(t[0],t[1]));return n}var t=this;t.Ca="utm_campaign",t.Da="utm_content",t.Ea="utm_id",t.Fa="utm_medium",t.Ga="utm_nooverride",t.Ha="utm_source",t.Ia="utm_term",t.Ja="gclid",t.vc="dclid",t.U=0,t.w=0,t.La=15768e6,t.Ma=18e5,t.s=63072e6,t.V=[],t.W=[],t.wc="cse",t.xc="q",t.Ta=50,t.J=e("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words"),t.f="/",t.L=100,t.ga="/__utm.gif",t.la=1,t.ma=1,t.u="|",t.ka=1,t.Ka=1,t.Ua=1,t.b="auto",t.B=1,t.Wb=10,t.zc=10,t.Ac=.2,t.o=n},nt=function(t){function n(e,t,n,r){var i="",s=0,i=X(e,"2"+t,";");if(!W(i)){if(e=i[l]("^"+n+"."),0>e)return["",0];i=i[b](e+n[p]+2),i[l]("^")>0&&(i=i[m]("^")[0]),n=i[m](":"),i=n[1],s=parseInt(n[0],10),!r&&s<o.m&&(i="")}return W(i)&&(i=""),[i,s]}function r(e,t){return"^"+[[t,e[1]][x]("."),e[0]][x](":")}function i(e){var t=new Date,e=new Date(t[c]()+e);return"expires="+e.toGMTString()+"; "}var o=this,s=t;o.m=(new Date)[c]();var u=[j,A,M,L,q,O,F];o.g=function(){var e=P[h][a];return s.o?o.Nc(e,s.o):e},o.Nc=function(e,t){for(var r,i=[],o=0;o<u[p];o++)r=n(e,u[o],t)[0],W(r)||(i[i[p]]=u[o]+r+";");return i[x]("")},o.l=function(t,n,r){var u=r>0?i(r):"";s.o&&(n=o.Oc(P[h][a],t,s.o,n,r),t="2"+t,u=r>0?i(s.s):""),t+=n,t=P.qb(t),t[p]>2e3&&(e(69),t=t[b](0,2e3)),u=t+"; path="+s.f+"; "+u+o.hb(),bt.pb()||(P[h].cookie=u)},o.Oc=function(e,t,i,a,u){var l="",u=u||s.s,a=r([a,o.m+1*u],i),l=X(e,"2"+t,";");return W(l)?a:(e=r(n(e,t,i,!0),i),l=l[m](e)[x](""),l=a+l)},o.hb=function(){return W(s.b)?"":"domain="+s.b+";"}},rt=function(e){function t(e){return e=R(e)?e[x]("."):"",W(e)?"-":e}function r(e,t){var n,r=[];if(!W(e)&&(r=e[m]("."),t))for(n=0;n<r[p];n++)U(r[n])||(r[n]="-");return r}function o(e,t,n){var r,i,o=g.I;for(r=0;r<o[p];r++)i=o[r][0],i+=W(t)?t:t+o[r][4],o[r][2](X(e,i,n))}var s,a,u,l,c,f,d,h,g=this,v=e;g.i=new nt(e),g.Ba=function(){return n==h||h==g.K()},g.g=function(){return g.i.g()},g.ea=function(){return c?c:"-"},g.Pa=function(e){c=e},g.fa=function(e){h=U(e)?1*e:"-"},g.da=function(){return t(f)},g.X=function(e){f=r(e)},g.yc=function(){g.i.l(q,"",-1)},g.Rb=function(){return h?h:"-"},g.hb=function(){return W(v.b)?"":"domain="+v.b+";"},g.ba=function(){return t(s)},g.Na=function(e){s=r(e,1)},g.z=function(){return t(a)},g.$=function(e){a=r(e,1)},g.ca=function(){return t(u)},g.Oa=function(e){u=r(e,1)},g.qa=function(){return t(l)},g.ra=function(e){for(l=r(e),e=0;e<l[p];e++)4>e&&!U(l[e])&&(l[e]="-")},g.Fc=function(){return d},g.Dc=function(e){d=e},g.Qb=function(){s=[],a=[],u=[],l=[],c=n,f=[],h=n},g.K=function(){for(var e="",t=0;t<g.I[p];t++)e+=g.I[t][1]();return Y(e)},g.Z=function(e){var t=g.g(),n=!1;return t&&(o(t,e,";"),g.fa(i(g.K())),n=!0),n},g.Sb=function(e){o(e,"",E),g.fa(X(e,D,E))},g.Tb=function(){var e,t=g.I,n=[];for(e=0;e<t[p];e++)K(n,t[e][0]+t[e][1]());return K(n,D+g.K()),n[x](E)},g.Ub=function(e,t){var n=g.I,r=v.f;g.Z(e),v.f=t;for(var i=0;i<n[p];i++)W(n[i][1]())||n[i][3]();v.f=r},g.Qa=function(){g.i.l(j,g.ba(),v.s)},g.aa=function(){g.i.l(A,g.z(),v.Ma)},g.Ra=function(){g.i.l(M,g.ca(),0)},g.sa=function(){g.i.l(L,g.qa(),v.La)},g.Sa=function(){g.i.l(O,g.ea(),v.s)},g.Y=function(){g.i.l(q,g.da(),v.s)},g.Ec=function(){g.i.l(F,g.Fc(),0)},g.I=[[j,g.ba,g.Na,g.Qa,"."],[A,g.z,g.$,g.aa,""],[M,g.ca,g.Oa,g.Ra,""],[O,g.ea,g.Pa,g.Sa,""],[L,g.qa,g.ra,g.sa,"."],[q,g.da,g.X,g.Y,"."]]},it="https:"==P[h][g][v]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/",ot=it+"p/__utm.gif",st=function(){var e=this;e.Bb=function(t,n,r,i,o){n[p]<=2036||o?e.Aa(t+"?"+n,i):n[p]<=8192?P.Xc()?e.Aa(t+"?"+r+"&err=ff2post&len="+n[p],i):e.fd(n,i):e.Aa(t+"?"+r+"&err=len&max=8192&len="+n[p],i)},e.Aa=function(e,t){var n=new Image(1,1);n.src=e,n.onload=function(){n.onload=null,(t||Z)()}},e.fd=function(t,n){e.ed(t,n)||e.Ob(t,n)},e.ed=function(e,t){var n,r=P[d].XDomainRequest;return r?(n=new r,n.open("POST",ot)):(r=P[d].XMLHttpRequest)&&(r=new r,"withCredentials"in r&&(n=r,n.open("POST",ot,!0),n.setRequestHeader("Content-Type","text/plain"))),n?(n.onreadystatechange=function(){4==n.readyState&&(t&&t(),n=null)},n.send(e),!0):!1},e.Ob=function(t,n){var i=P[h];if(i.body){t=r(t);try{var o=i.createElement('<iframe name="'+t+'"></iframe>')}catch(s){o=i.createElement("iframe"),o.name=t}o.height="0",o.width="0",o.style.display="none",o.style.visibility="hidden";var a=i[g],a=a[v]+"//"+a.host+"/favicon.ico",a=it+"u/post_iframe.html#"+r(a),u=function(){o.src="",o.parentNode&&o.parentNode.removeChild(o)};B(P[d],"beforeunload",u);var l=!1,c=0,f=function(){if(!l){try{if(c>9||o.contentWindow[g].host==i[g].host){l=!0,u();var e=P[d],t="beforeunload",r=u;return e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent&&e.detachEvent("on"+t,r),n&&n(),void 0}}catch(s){}c++,P.setTimeout(f,200)}};B(o,"load",f),i.body.appendChild(o),o.src=a}else P.setTimeout(function(){e.Ob(t,n)},100)}},at=function(e){var t=this,n=e,r=new rt(n),i=null,s=!bt.pb(),a=function(){};t.Uc=function(){return"https:"==P[h][g][v]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"},t.A=function(e,u,l,f,d,p){i||(i=new st);var v=n.B,y=P[h][g];r.Z(l);var b=r.z()[m](".");if(b[1]<500||f){if(d){var w,T=(new Date)[c]();w=(T-b[3])*(n.Ac/1e3),w>=1&&(b[2]=o.min(o.floor(1*b[2]+w),n.zc),b[3]=T)}(f||!d||b[2]>=1)&&(!f&&d&&(b[2]=1*b[2]-1),f=1*b[1]+1,b[1]=f,d="utmwv="+k,T="&utms="+f,w="&utmn="+Q(),f=d+"e"+T+w,e=d+T+w+(W(y.hostname)?"":"&utmhn="+V(y.hostname))+(100==n.L?"":"&utmsp="+V(n.L))+e,(0==v||2==v)&&(y=2==v?a:p||a,s&&i.Bb(n.ga,e,f,y,!0)),(1==v||2==v)&&(u="&utmac="+u,f+=u,e+=u+"&utmcc="+t.Tc(l),bt.Ab&&(l="&aip=1",f+=l,e+=l),e+="&utmu="+H.Sc(),s&&i.Bb(t.Uc(),e,f,p)))}r.$(b[x](".")),r.aa()},t.Tc=function(e){for(var t,n=[],i=[j,L,q,O],o=r.g(),s=0;s<i[p];s++)if(t=X(o,i[s]+e,";"),!W(t)){if(i[s]==q){if(t=t[m](e+".")[1][m]("|")[0],W(t))continue;t=e+"."+t}K(n,i[s]+t+";")}return V(n[x]("+"))}},ut=function(){var e=this;e.N=[],e.Va=function(t){for(var n,r=e.N,i=0;i<r[p];i++)n=t==r[i].q?r[i]:n;return n},e.Xb=function(t,r,i,o,s,a,u,l){var c=e.Va(t);return n==c?(c=new ut.Wc(t,r,i,o,s,a,u,l),K(e.N,c)):(c.tb=r,c.zb=i,c.yb=o,c.wb=s,c.ub=a,c.xb=u,c.vb=l),c}};ut.Qc=function(e,t,n,r,i,o){var s=this;s.Fb=e,s.va=t,s.n=n,s.Cb=r,s.Db=i,s.Eb=o,s.ha=function(){return"&"+["utmt=item","tid="+V(s.Fb),"ipc="+V(s.va),"ipn="+V(s.n),"iva="+V(s.Cb),"ipr="+V(s.Db),"iqt="+V(s.Eb)][x]("&utm")}},ut.Wc=function(e,t,r,i,o,s,a,u){var l=this;l.q=e,l.tb=t,l.zb=r,l.yb=i,l.wb=o,l.ub=s,l.xb=a,l.vb=u,l.M=[],l.Vb=function(e,t,r,i,o){var s=l.Rc(e),a=l.q;n==s?K(l.M,new ut.Qc(a,e,t,r,i,o)):(s.Fb=a,s.va=e,s.n=t,s.Cb=r,s.Db=i,s.Eb=o)},l.Rc=function(e){for(var t,n=l.M,r=0;r<n[p];r++)t=e==n[r].va?n[r]:t;return t},l.ha=function(){return"&"+["utmt=tran","id="+V(l.q),"st="+V(l.tb),"to="+V(l.zb),"tx="+V(l.yb),"sp="+V(l.wb),"ci="+V(l.ub),"rg="+V(l.xb),"co="+V(l.vb)][x]("&utmt")}};var lt=function(e){function t(){var e,t,r;t="ShockwaveFlash";var o="$version",s=P[d].navigator;if((s=s?s.plugins:n)&&s[p]>0)for(e=0;e<s[p]&&!r;e++)t=s[e],J(t.name,"Shockwave Flash")&&(r=t.description[m]("Shockwave Flash ")[1]);else{t=t+"."+t;try{e=new ActiveXObject(t+".7"),r=e.GetVariable(o)}catch(a){}if(!r)try{e=new ActiveXObject(t+".6"),r="WIN 6,0,21,0",e.we="always",r=e.GetVariable(o)}catch(u){}if(!r)try{e=new ActiveXObject(t),r=e.GetVariable(o)}catch(l){}r&&(r=r[m](" ")[1][m](","),r=r[0]+"."+r[1]+" r"+r[2])}return r?r:i}var r=this,i="-",o=P[d].screen,s=P[d].navigator;r.Nb=o?o.width+"x"+o.height:i,r.Mb=o?o.colorDepth+"-bit":i,r.cd=V(P[h].characterSet?P[h].characterSet:P[h].charset?P[h].charset:i),r.Lb=(s&&s.language?s.language:s&&s.browserLanguage?s.browserLanguage:i)[w](),r.Kb=s&&s.javaEnabled()?1:0,r.dd=e?t():i,r.dc=function(){return E+"utm"+["cs="+V(r.cd),"sr="+r.Nb,"sc="+r.Mb,"ul="+r.Lb,"je="+r.Kb,"fl="+V(r.dd)][x]("&utm")},r.cc=function(){for(var e=P[d].navigator,t=P[d].history[p],e=e.appName+e.version+r.Lb+e.platform+e.userAgent+r.Kb+r.Nb+r.Mb+(P[h][a]?P[h][a]:"")+(P[h].referrer?P[h].referrer:""),n=e[p];t>0;)e+=t--^n++;return Y(e)}},ct=function(e,t,r,i){function o(e){var t="",t=e[m]("://")[1][w]();return J(t,"/")&&(t=t[m]("/")[0]),t}var s=i,a=this;a.a=e,a.ob=t,a.m=r,a.mb=function(e){var t=a.ua();return new ct.v(X(e,s.Ea+_,E),X(e,s.Ha+_,E),X(e,s.Ja+_,E),a.R(e,s.Ca,"(not set)"),a.R(e,s.Fa,"(not set)"),a.R(e,s.Ia,t&&!W(t.G)?G(t.G):n),a.R(e,s.Da,n),X(e,s.vc+_,E))},a.nb=function(e){var t,n=o(e);t=e;var r="";return t=t[m]("://")[1][w](),J(t,"/")&&(t=t[m]("/")[1],J(t,"?")&&(r=t[m]("?")[0])),t=r,J(n,"google")&&(e=e[m]("?")[x](E),J(e,E+s.xc+_)&&t==s.wc)?!0:!1},a.ua=function(){var e,t,r=a.ob,i=s.J;if(!W(r)&&"0"!=r&&J(r,"://")&&!a.nb(r)){e=o(r);for(var u=0;u<i[p];u++)if(t=i[u],J(e,t.ib[w]())&&(r=r[m]("?")[x](E),J(r,E+t.jb+_)))return e=r[m](E+t.jb+_)[1],J(e,E)&&(e=e[m](E)[0]),new ct.v(n,t.ib,n,"(organic)","organic",e,n,n)}},a.R=function(e,t,n){return e=X(e,t+_,E),n=W(e)?W(n)?"-":n:G(e)},a.Bc=function(e){var t=s.V,n=!1;if(e&&"organic"==e.P)for(var e=G(e.G)[w](),r=0;r<t[p];r++)n=n||t[r][w]()==e;return n},a.lb=function(){var e="",t="",e=a.ob;return W(e)||"0"==e||!J(e,"://")||a.nb(e)?void 0:(e=e[m]("://")[1],J(e,"/")&&(t=e[b](e[l]("/")),t=t[m]("?")[0],e=e[m]("/")[0][w]()),0==e[l]("www.")&&(e=e[b](4)),new ct.v(n,e,n,"(referral)","referral",n,t,n))},a.kb=function(e){var t="";return s.U&&(t=e&&e.hash?e[y][b](e[y][l]("#")):"",t=""!=t?t+E:t),t+=e.search},a.ta=function(){return new ct.v(n,"(direct)",n,"(direct)","(none)",n,n,n)},a.Cc=function(e){var t=!1,n=s.W;if(e&&"referral"==e.P)for(var e=V(e.Q)[w](),r=0;r<n[p];r++)t=t||J(e,n[r][w]());return t},a.h=function(e){return n!=e&&e.fb()},a.te=function(e){var e=X(e,L+a.a+".",";"),t=e[m]("."),e=new ct.v;return e.gb(t.slice(4)[x](".")),a.h(e)?(t=P[h][g],t=a.kb(t),t=a.mb(t),a.h(t)||(t=a.ua(),a.h(t)||(t=a.lb())),a.h(t)&&e.H()[w]()!=t.H()[w]()):!0},a.Pb=function(e,t){if(s.Ka){var n,r,i,o="",u="-",l=0,c=a.a;if(e){if(i=e.g(),o=a.kb(P[h][g]),s.w&&e.Ba()&&(u=G(e.qa()),!W(u)&&!J(u,";")))return e.ra(u),e.sa(),void 0;if(u=X(i,L+c+".",";"),n=a.mb(o),a.h(n)&&(o=X(o,s.Ga+_,E),"1"==o&&!W(u)))return;if(!a.h(n)){if(n=a.ua(),o=a.Bc(n),!W(u)&&o)return;o&&(n=a.ta())}if(!a.h(n)&&t){if(n=a.lb(),o=a.Cc(n),!W(u)&&o)return;o&&(n=a.ta())}a.h(n)||W(u)&&t&&(n=a.ta()),a.h(n)&&(W(u)||(l=u[m]("."),r=new ct.v,r.gb(l.slice(4)[x](".")),r=r.H()[w]()==n.H()[w](),l=1*l[3]),!r||t)&&(i=X(i,j+c+".",";"),r=i.lastIndexOf("."),i=r>9?1*i[b](r+1):0,l++,i=0==i?1:i,e.ra([c,a.m,i,l,n.H()][x](".")),e.sa())}}}};ct.v=function(e,t,n,r,i,o,s,a){var u=this;u.q=e,u.Q=t,u.ya=n,u.n=r,u.P=i,u.G=o,u.Gb=s,u.xa=a,u.H=function(){var e,t,n=[],r=[["cid",u.q],["csr",u.Q],["gclid",u.ya],["ccn",u.n],["cmd",u.P],["ctr",u.G],["cct",u.Gb],["dclid",u.xa]];if(u.fb())for(e=0;e<r[p];e++)W(r[e][1])||(t=r[e][1][m]("+")[x]("%20"),t=t[m](" ")[x]("%20"),K(n,"utm"+r[e][0]+_+t));return P.qb(n[x]("|"))},u.fb=function(){return!(W(u.q)&&W(u.Q)&&W(u.ya)&&W(u.xa))},u.gb=function(e){var t=function(t){return G(X(e,"utm"+t+_,"|"))};u.q=t("cid"),u.Q=t("csr"),u.ya=t("gclid"),u.n=t("ccn"),u.P=t("cmd"),u.G=t("ctr"),u.Gb=t("cct"),u.xa=t("dclid")}};var ft=function(e,t,n,r){var i=this,o=t,s=_,a=e,u=r;i.S=n,i.wa="",i.r={},i.$b=function(){var e;if(e=X(i.S.g(),q+o+".",";")[m](o+".")[1],!W(e)){e=e[m]("|");var t,n=i.r,r=e[1];if(!W(r))for(var r=r[m](","),a=0;a<r[p];a++)t=r[a],W(t)||(t=t[m](s),4==t[p]&&(n[t[0]]=[G(t[1]),G(t[2]),1]));i.wa=G(e[0]),i.T()}},i.T=function(){i.Pc();var e,t,n=V(i.wa),r="";for(e in i.r)(t=i.r[e])&&1===t[2]&&(r+=e+s+V(t[0])+s+V(t[1])+s+1+",");W(r)||(n+="|"+r),W(n)?i.S.yc():(i.S.X(o+"."+n),i.S.Y())},i.bc=function(e){i.wa=e,i.T()},i.ac=function(e,t,n,r){1!=r&&2!=r&&3!=r&&(r=3);var o=!1;if(t&&n&&e>0&&e<=a.Ta){var s=V(t),u=V(n);s[p]+u[p]<=64&&(i.r[e]=[t,n,r],i.T(),o=!0)}return o},i.Zb=function(e){return(e=i.r[e])&&1===e[2]?e[1]:void 0},i.Yb=function(e){var t=i.r;t[e]&&(delete t[e],i.T())},i.Pc=function(){u.t(8),u.t(9),u.t(11);var e,t,n=i.r;for(t in n)(e=n[t])&&(u.j(8,t,e[0]),u.j(9,t,e[1]),(e=e[2])&&3!=e&&u.j(11,t,""+e))}},dt=function(){function e(e,t,r,i){n==l[e]&&(l[e]={}),n==l[e][t]&&(l[e][t]=[]),l[e][t][r]=i}function t(e,t,r){return n!=l[e]&&n!=l[e][t]?l[e][t][r]:void 0}function r(e,t){if(n!=l[e]&&n!=l[e][t]){l[e][t]=n;var r,i=!0;for(r=0;r<h[p];r++)if(n!=l[e][h[r]]){i=!1;break}i&&(l[e]=n)}}function i(e){var t,r,i="",o=!1;for(t=0;t<h[p];t++)if(r=e[h[t]],n!=r){o&&(i+=h[t]);for(var o=[],s=n,a=n,a=0;a<r[p];a++)if(n!=r[a]){s="",a!=T&&n==r[a-1]&&(s+=a[f]()+y);var l;l=r[a];for(var c="",d=n,b=n,C=n,d=0;d<l[p];d++)b=l[u](d),C=w[b],c+=n!=C?C:b;l=c,s+=l,K(o,s)}r=m+o[x](v)+g,i+=r,o=!1}else o=!0;return i}var s=this,a=I(s),l={},c="k",d="v",h=[c,d],m="(",g=")",v="*",y="!",b="'",w={};w[b]="'0",w[g]="'1",w[v]="'2",w[y]="'3";var T=1;s.Yc=function(e){return n!=l[e]},s.C=function(){var e,t="";for(e in l)n!=l[e]&&(t+=e[f]()+i(l[e]));return t},s.hc=function(e){if(e==n)return s.C();var t,r=e.C();for(t in l)n!=l[t]&&!e.Yc(t)&&(r+=t[f]()+i(l[t]));return r},s.j=a("_setKey",89,function(t,n,r){return"string"!=typeof r?!1:(e(t,c,n,r),!0)}),s.ja=a("_setValue",90,function(t,r,i){return("number"==typeof i||n!=Number&&i instanceof Number)&&o.round(i)==i&&0/0!=i&&1/0!=i?(e(t,d,r,i[f]()),!0):!1}),s.fc=a("_getKey",87,function(e,n){return t(e,c,n)}),s.gc=a("_getValue",88,function(e,n){return t(e,d,n)}),s.t=a("_clearKey",85,function(e){r(e,c)}),s.ia=a("_clearValue",86,function(e){r(e,d)})},pt=function(e,t){var n=this,r=I(n);n.ze=t,n.gd=e,n.Za=r("_trackEvent",91,function(e,r,i){return t.Za(n.gd,e,r,i)})},ht=function(e,t){var r=this,i=P.Gc(),s=P.Hc(),a=10;r.rb=new dt,r.Kc=function(){var e,t="timing",r="onloadT";return i&&i[r]!=n&&i.isValidLoadTime?e=i[r]:s&&s[t]&&(e=s[t].loadEventStart-s[t].fetchStart),e},r.Mc=function(){return e.D()&&e.Xa()%100<a},r.Lc=function(){var n="&utmt=event&utme="+V(r.rb.C())+e.na();t.A(n,e.p,e.a,!1,!0)},r.Jc=function(e){return e=o.min(o.floor(e/100),5e3),e>0?e+"00":"0"},r.sb=function(){var e=r.Kc();if(e==n||isNaN(e))return!1;if(0>=e)return!0;if(e>2147483648)return!1;var t=r.rb;t.t(14),t.ia(14);var o=r.Jc(e);return t.j(14,1,o)&&t.ja(14,1,e)&&r.Lc(),i&&i.isValidLoadTime!=n&&i.setPageReadyTime(),!1},r.Wa=function(){return r.Mc()?P.Ic()?(r.sb()&&B(P[d],"load",r.sb,!1),!0):!1:!1}},mt=function(){};mt.Zc=function(e){var t="gaso=",n=P[h][g].hash;return e=n&&1==n[l](t)?X(n,t,E):(n=P[d].name)&&0<=n[l](t)?X(n,t,E):X(e.g(),F,";")},mt.ad=function(e,t){var n=(t||"www")+".google.com",n="https://"+n+"/analytics/reporting/overlay_js?gaso="+e+E+Q(),r="_gasojs",i=P[h].createElement("script");i.type="text/javascript",i.src=n,r&&(i.id=r),(P[h].getElementsByTagName("head")[0]||P[h].getElementsByTagName("body")[0]).appendChild(i)},mt.load=function(e,t){if(!mt.$c){var n=mt.Zc(t),r=n&&n.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);r&&(t.Dc(n),t.Ec(),bt._gasoDomain=e.b,bt._gasoCPath=e.f,mt.ad(r[2],r[1])),mt.$c=!0}};var gt=function(r,s,a){function f(){if("auto"==q.b){var e=P[h].domain;"www."==e[b](0,4)&&(e=e[b](4)),q.b=e}q.b=q.b[w]()}function T(){f();var e=q.b,t=e[l]("www.google.")*e[l](".google.")*e[l]("google.");return t||"/"!=q.f||e[l]("google.org")>-1}function C(e,t,n){return W(e)||W(t)||W(n)?"-":(e=X(e,j+S.a+".",t),W(e)||(e=e[m]("."),e[5]=""+(e[5]?1*e[5]+1:1),e[3]=e[4],e[4]=n,e=e[x](".")),e)}function N(){return"file:"!=P[h][g][v]&&T()}var S=this,_=I(S),D=n,q=new tt,L=!1,O=n;S.n=r,S.m=o.round((new Date)[c]()/1e3),S.p=s||"UA-XXXXX-X",S.ab=P[h].referrer,S.oa=n,S.d=n,S.F=!1,S.O=n,S.e=n,S.bb=n,S.pa=n,S.a=n,S.k=n,q.o=a?V(a):n,S.eb=!1,S.mc=function(){return Q()^2147483647&S.O.cc()},S.lc=function(){return q.b&&""!=q.b&&"none"!=q.b?(f(),q.Ua?Y(q.b):1):(q.b="",1)},S.kc=function(e,t){if(W(e))e="-";else{t+=q.f&&"/"!=q.f?q.f:"";var n=e[l](t),e=n>=0&&8>=n?"0":"["==e[u](0)&&"]"==e[u](e[p]-1)?"-":e}return e},S.na=function(e){var t="";t+=q.ka?S.O.dc():"",t+=q.la&&!W(P[h].title)?"&utmdt="+V(P[h].title):"";var n;return n=P.Ya(!0),n.hid||(n.hid=Q()),n=n.hid,t+="&utmhid="+n+"&utmr="+V(i(S.oa))+"&utmp="+V(S.pc(e))},S.pc=function(t){var r=P[h][g];return t&&e(13),t=n!=t&&""!=t?V(t,!0):V(r.pathname+r.search,!0)},S.uc=function(e){if(S.D()){var t="";S.e!=n&&S.e.C()[p]>0&&(t+="&utme="+V(S.e.C())),t+=S.na(e),D.A(t,S.p,S.a)}},S.jc=function(){var e=new rt(q);return e.Z(S.a)?e.Tb():n},S.cb=_("_getLinkerUrl",52,function(e,t){var n=e[m]("#"),r=e,i=S.jc();return i&&(t&&1>=n[p]?r+="#"+i:(!t||1>=n[p])&&(1>=n[p]?r+=(J(e,"?")?E:"?")+i:r=n[0]+(J(e,"?")?E:"?")+i+"#"+n[1])),r}),S.nc=function(){var e,t,r=S.m,o=S.k,s=o.g(),a=S.a+"",u=P.Ya(),c=J(s,j+a+"."),f=J(s,A+a),p=J(s,M+a),v=[],w="",T=!1,s=W(s)?"":s;if(q.w&&!S.eb){e=P[h][g]&&P[h][g].hash?P[h][g][y][b](P[h][g][y][l]("#")):"",q.U&&!W(e)&&(w=e+E),w+=P[h][g].search,!W(w)&&J(w,j)&&(o.Sb(w),o.Ba()||o.Qb(),t=o.ba(),S.eb=!0),e=o.ea;var k=o.Pa,N=o.Sa;W(e())||(k(G(e())),J(e(),";")||N()),e=o.da,k=o.X,N=o.Y,W(e())||(k(e()),J(e(),";")||N())}W(t)?c?(t=!f||!p)?(t=C(s,";",i(r)),S.F=!0):(t=X(s,j+a+".",";"),v=X(s,A+a,";")[m](".")):(t=[a,S.mc(),r,r,r,1][x]("."),T=S.F=!0):W(o.z())||W(o.ca())?(t=C(w,E,i(r)),S.F=!0):(v=o.z()[m]("."),a=v[0]),t=t[m]("."),P[d]&&u&&u.dh==a&&!q.o&&(t[4]=u.sid?u.sid:t[4],T&&(t[3]=u.sid?u.sid:t[4],u.vid&&(r=u.vid[m]("."),t[1]=r[0],t[2]=r[1]))),o.Na(t[x](".")),v[0]=a,v[1]=v[1]?v[1]:0,v[2]=n!=v[2]?v[2]:q.Wb,v[3]=v[3]?v[3]:t[4],o.$(v[x](".")),o.Oa(a),W(o.Rb())||o.fa(o.K()),o.Qa(),o.aa(),o.Ra()},S.oc=function(){D=new at(q)},S.getName=_("_getName",58,function(){return S.n}),S.c=_("_initData",2,function(){var e;L||(S.O||(S.O=new lt(q.ma)),S.a=S.lc(),S.k=new rt(q),S.e=new dt,O=new ft(q,i(S.a),S.k,S.e),S.oc()),N()&&(L||(S.oa=S.kc(S.ab,P[h].domain),e=new ct(i(S.a),S.oa,S.m,q)),S.nc(e),O.$b()),L||(N()&&e.Pb(S.k,S.F),S.bb=new dt,mt.load(q,S.k),L=!0)}),S.Xa=_("_visitCode",54,function(){S.c();var e=X(S.k.g(),j+S.a+".",";"),e=e[m](".");return e[p]<4?"":e[1]}),S.qd=_("_cookiePathCopy",30,function(e){S.c(),S.k&&S.k.Ub(S.a,e)}),S.D=function(){return S.Xa()%1e4<100*q.L},S.re=_("_trackPageview",1,function(e){N()&&(S.c(),S.uc(e),S.F=!1)}),S.se=_("_trackTrans",18,function(){var e,t,n,r=S.a,i=[];if(S.c(),S.d&&S.D()){for(e=0;e<S.d.N[p];e++)for(t=S.d.N[e],K(i,t.ha()),n=0;n<t.M[p];n++)K(i,t.M[n].ha());for(e=0;e<i[p];e++)D.A(i[e],S.p,r,!0)}}),S.me=_("_setTrans",20,function(){var e,r,i,o;if(e=P[h].getElementById?P[h].getElementById("utmtrans"):P[h].utmform&&P[h].utmform.utmtrans?P[h].utmform.utmtrans:n,S.c(),e&&e.value)for(S.d=new ut,o=e.value[m]("UTM:"),q.u=q.u&&""!=q.u?q.u:"|",e=0;e<o[p];e++){for(o[e]=t(o[e]),r=o[e][m](q.u),i=0;i<r[p];i++)r[i]=t(r[i]);"T"==r[0]?S.$a(r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]):"I"==r[0]&&S.ic(r[1],r[2],r[3],r[4],r[5],r[6])}}),S.$a=_("_addTrans",21,function(e,t,n,r,i,o,s,a){return S.d=S.d?S.d:new ut,S.d.Xb(e,t,n,r,i,o,s,a)}),S.ic=_("_addItem",19,function(e,t,n,r,i,o){var s;S.d=S.d?S.d:new ut,(s=S.d.Va(e))||(s=S.$a(e,"","","","","","","")),s.Vb(t,n,r,i,o)}),S.oe=_("_setVar",22,function(e){e&&""!=e&&T()&&(S.c(),O.bc(e),S.D()&&D.A("&utmt=var",S.p,S.a))}),S.Yd=_("_setCustomVar",10,function(e,t,n,r){return S.c(),O.ac(e,t,n,r)}),S.td=_("_deleteCustomVar",35,function(e){S.c(),O.Yb(e)}),S.Cd=_("_getVisitorCustomVar",50,function(e){return S.c(),O.Zb(e)}),S.fe=_("_setMaxCustomVariables",71,function(e){q.Ta=e}),S.link=_("_link",101,function(e,t){q.w&&e&&(S.c(),P.ec(S.cb(e,t)))}),S.Fd=_("_linkByPost",102,function(e,t){q.w&&e&&e.action&&(S.c(),e.action=S.cb(e.action,t))}),S.pe=_("_setXKey",83,function(e,t,n){S.e.j(e,t,n)}),S.qe=_("_setXValue",84,function(e,t,n){S.e.ja(e,t,n)}),S.Dd=_("_getXKey",76,function(e,t){return S.e.fc(e,t)}),S.Ed=_("_getXValue",77,function(e,t){return S.e.gc(e,t)}),S.od=_("_clearXKey",72,function(e){S.e.t(e)}),S.pd=_("_clearXValue",73,function(e){S.e.ia(e)}),S.sd=_("_createXObj",75,function(){return S.c(),new dt}),S.qc=_("_sendXEvent",78,function(e){var t="";S.c(),S.D()&&(t+="&utmt=event&utme="+V(S.e.hc(e))+S.na(),D.A(t,S.p,S.a,!1,!0))}),S.rd=_("_createEventTracker",74,function(e){return S.c(),new pt(e,S)}),S.Za=_("_trackEvent",4,function(e,t,r,i){S.c();var o=S.bb;return n!=e&&n!=t&&""!=e&&""!=t?(o.t(5),o.ia(5),(e=o.j(5,1,e)&&o.j(5,2,t)&&(n==r||o.j(5,3,r))&&(n==i||o.ja(5,1,i)))&&S.qc(o)):e=!1,e}),S.Wa=_("_trackPageLoadTime",100,function(){return S.c(),S.pa||(S.pa=new ht(S,D)),S.pa.Wa()}),S.wd=function(){return q},S.ae=_("_setDomainName",6,function(e){q.b=e}),S.kd=_("_addOrganic",14,function(e,t,n){q.J.splice(n?0:q.J[p],0,new et(e,t))}),S.nd=_("_clearOrganic",70,function(){q.J=[]}),S.hd=_("_addIgnoredOrganic",15,function(e){K(q.V,e)}),S.ld=_("_clearIgnoredOrganic",97,function(){q.V=[]}),S.jd=_("_addIgnoredRef",31,function(e){K(q.W,e)}),S.md=_("_clearIgnoredRef",32,function(){q.W=[]}),S.Id=_("_setAllowHash",8,function(e){q.Ua=e?1:0}),S.Td=_("_setCampaignTrack",36,function(e){q.Ka=e?1:0}),S.Ud=_("_setClientInfo",66,function(e){q.ka=e?1:0}),S.vd=_("_getClientInfo",53,function(){return q.ka}),S.Vd=_("_setCookiePath",9,function(e){q.f=e}),S.ne=_("_setTransactionDelim",82,function(e){q.u=e}),S.Xd=_("_setCookieTimeout",25,function(e){S.rc(1e3*e)}),S.rc=_("_setCampaignCookieTimeout",29,function(e){q.La=e}),S.Zd=_("_setDetectFlash",61,function(e){q.ma=e?1:0}),S.xd=_("_getDetectFlash",65,function(){return q.ma}),S.$d=_("_setDetectTitle",62,function(e){q.la=e?1:0}),S.yd=_("_getDetectTitle",56,function(){return q.la}),S.ce=_("_setLocalGifPath",46,function(e){q.ga=e}),S.zd=_("_getLocalGifPath",57,function(){return q.ga}),S.ee=_("_setLocalServerMode",92,function(){q.B=0}),S.ie=_("_setRemoteServerMode",63,function(){q.B=1}),S.de=_("_setLocalRemoteServerMode",47,function(){q.B=2}),S.Ad=_("_getServiceMode",59,function(){return q.B}),S.je=_("_setSampleRate",45,function(e){q.L=e}),S.ke=_("_setSessionTimeout",27,function(e){S.sc(1e3*e)}),S.sc=_("_setSessionCookieTimeout",26,function(e){q.Ma=e}),S.Jd=_("_setAllowLinker",11,function(e){q.w=e?1:0}),S.Hd=_("_setAllowAnchor",7,function(e){q.U=e?1:0}),S.Qd=_("_setCampNameKey",41,function(e){q.Ca=e}),S.Md=_("_setCampContentKey",38,function(e){q.Da=e}),S.Nd=_("_setCampIdKey",39,function(e){q.Ea=e}),S.Od=_("_setCampMediumKey",40,function(e){q.Fa=e}),S.Pd=_("_setCampNOKey",42,function(e){q.Ga=e}),S.Rd=_("_setCampSourceKey",43,function(e){q.Ha=e}),S.Sd=_("_setCampTermKey",44,function(e){q.Ia=e}),S.Ld=_("_setCampCIdKey",37,function(e){q.Ja=e}),S.ud=_("_getAccount",64,function(){return S.p}),S.Gd=_("_setAccount",3,function(e){S.p=e}),S.ge=_("_setNamespace",48,function(e){q.o=e?V(e):n}),S.Bd=_("_getVersion",60,function(){return k}),S.Kd=_("_setAutoTrackOutbound",79,Z),S.le=_("_setTrackOutboundSubdomains",81,Z),S.be=_("_setHrefExamineLimit",80,Z),S.he=_("_setReferrerOverride",49,function(e){S.ab=e}),S.Wd=_("_setCookiePersistence",24,function(e){S.tc(e)}),S.tc=_("_setVisitorCookieTimeout",28,function(e){q.s=e})},vt=function(){var t=this,r=I(t);t.Ab=!1,t.Ib={},t.bd=0,t._gasoDomain=n,t._gasoCPath=n,t.ve=r("_getTracker",0,function(e,r){return t.za(e,n,r)}),t.za=r("_createTracker",55,function(t,r,i){return r&&e(23),i&&e(67),r==n&&(r="~"+bt.bd++),bt.Ib[r]=new gt(r,t,i)}),t.Hb=r("_getTrackerByName",51,function(e){return e=e||"",bt.Ib[e]||bt.za(n,e)}),t.pb=function(){var e=P.Vc();return e&&e[S]&&e[S]()},t.ue=r("_anonymizeIp",16,function(){t.Ab=!0})},yt=function(){var t=this,n=I(t);t.xe=n("_createAsyncTracker",33,function(e,t){return bt.za(e,t||"")}),t.ye=n("_getAsyncTracker",34,function(e){return bt.Hb(e)}),t.push=function(){e(5);for(var t=arguments,n=0,r=0;r<t[p];r++)try{if("function"==typeof t[r])t[r]();else{var i="",o=t[r][0],s=o.lastIndexOf(".");s>0&&(i=o[b](0,s),o=o[b](s+1));var a=i==T?bt:i==C?wt:bt.Hb(i);a[o].apply(a,t[r].slice(1))}}catch(u){n++}return n}},bt=new vt,xt=P[d][T];xt&&"function"==typeof xt._getTracker?bt=xt:P[d][T]=bt;var wt=new yt,Tt=P[d][C],Ct=!1;(!Tt||"function"!=typeof Tt[s]||(Ct=R(Tt)))&&(P[d][C]=wt,Ct&&wt[s].apply(wt,Tt))}();