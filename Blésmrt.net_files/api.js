var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=encodeURIComponent,k=window,m=decodeURIComponent,n="push",r="test",t="shift",u="replace",y="length",B="split",C="join";var D=k,E=document,aa=D.location,ba=function(){},ca=/\[native code\]/,G=function(a,b,c){return a[b]=a[b]||c},da=function(a){for(var b=0;b<this[y];b++)if(this[b]===a)return b;return-1},ea=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[y];d++){var e=a[d];e!=c&&b[n](e);c=e}return b},H=function(){var a;if((a=Object.create)&&ca[r](a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},I=G(D,"gapi",{});var J;J=G(D,"___jsl",H());G(J,"I",0);G(J,"hel",10);var K=function(){var a=aa.href,b;if(J.dpo)b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=m(a[2])}catch(e){}}return b},fa=function(a){var b=G(J,"PQ",[]);J.PQ=[];var c=b[y];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},h=0;h<c;h++)b[h](e)},L=function(a){return G(G(J,"H",H()),a,H())};var M=G(J,"perf",H()),N=G(M,"g",H()),ga=G(M,"i",H());G(M,"r",[]);H();H();var O=function(a,b,c){var d=M.r;"function"===typeof d?d(a,b,c):d[n]([a,b,c])},Q=function(a,b,c){b&&0<b[y]&&(b=P(b),c&&0<c[y]&&(b+="___"+P(c)),28<b[y]&&(b=b.substr(0,28)+(b[y]-28)),c=b,b=G(ga,"_p",H()),G(b,c,H())[a]=(new Date).getTime(),O(a,"_p",c))},P=function(a){return a[C]("__")[u](/\./g,"_")[u](/\-/g,"_")[u](/\,/g,"_")};var S=H(),T=[],U=function(a){throw Error("Bad hint"+(a?": "+a:""));};T[n](["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=G(J,b,[]).concat(c):G(J,b,c)}if(b=a.u)a=G(J,"us",[]),a[n](b),(b=/^https:(.*)$/.exec(b))&&a[n]("http:"+b[1])}]);var ha=/^(\/[a-zA-Z0-9_\-]+)+$/,ia=/^[a-zA-Z0-9\-_\.!]+$/,ja=/^gapi\.loaded_[0-9]+$/,ka=/^[a-zA-Z0-9,._-]+$/,oa=function(a,b,c,d){var e=a[B](";"),h=S[e[t]()],l=f;h&&(l=h(e,b,c,d));if(!(b=!l))b=l,c=b.match(la),d=b.match(ma),b=!(d&&1===d[y]&&na[r](b)&&c&&1===c[y]);b&&U(a);return l},qa=function(a,b,c,d){a=pa(a);ja[r](c)||U("invalid_callback");b=V(b);d=d&&d[y]?V(d):f;var e=function(a){return g(a)[u](/%2C/g,",")};return[g(a.d)[u](/%2C/g,",")[u](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):
"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.b?"/rs="+e(a.b):"","/cb=",e(c)][C]("")},pa=function(a){"/"!==a.charAt(0)&&U("relative path");for(var b=a.substring(1)[B]("/"),c=[];b[y];){a=b[t]();if(!a[y]||0==a.indexOf("."))U("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c[n](a)}a={};for(var d=0,e=b[y];d<e;++d){var h=b[d][B]("="),l=m(h[0]),p=m(h[1]);2!=h[y]||(!l||!p)||(a[l]=a[l]||p)}b="/"+c[C]("/");ha[r](b)||U("invalid_prefix");c=W(a,"k",!0);d=W(a,"am");a=W(a,"rs");return{d:b,
version:c,a:d,b:a}},V=function(a){for(var b=[],c=0,d=a[y];c<d;++c){var e=a[c][u](/\./g,"_")[u](/-/g,"_");ka[r](e)&&b[n](e)}return b[C](",")},W=function(a,b,c){a=a[b];!a&&c&&U("missing: "+b);if(a){if(ia[r](a))return a;U("invalid: "+b)}return f},na=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ma=/\/cb=/g,la=/\/\//g,ra=function(){var a=K();if(!a)throw Error("Bad hint");return a};S.m=function(a,b,c,d){(a=a[0])||U("missing_hint");return"https://apis.google.com"+qa(a,b,c,d)};var X=decodeURI("%73cript"),Y=function(a,b){for(var c=[],d=0;d<a[y];++d){var e=a[d];e&&0>da.call(b,e)&&c[n](e)}return c},sa=function(a){"loading"!=E.readyState?Z(a):E.write("<"+X+' src="'+encodeURI(a)+'"></'+X+">")},Z=function(a){var b=E.createElement(X);b.setAttribute("src",a);b.async="true";(a=E.getElementsByTagName(X)[0])?a.parentNode.insertBefore(b,a):(E.head||E.body||E.documentElement).appendChild(b)},ta=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<T[y];d++){var e=T[d][0],h=T[d][1];h&&Object.prototype.hasOwnProperty.call(c,
e)&&h(c[e],a,b)}},ua=function(a,b){$(function(){var c;c=b===K()?G(I,"_",H()):H();c=G(L(b),"_",c);a(c)})},wa=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ta(a,c);var d=a?a[B](":"):[],e=c.h||ra(),h=G(J,"ah",H());if(!h["::"]||!d[y])va(d||[],c,e);else{for(var l=[],p=f;p=d[t]();){var v=p[B]("."),v=h[p]||h[v[1]&&"ns:"+v[0]||""]||e,s=l[y]&&l[l[y]-1]||f,z=s;if(!s||s.hint!=v)z={hint:v,c:[]},l[n](z);z.c[n](p)}var A=l[y];if(1<A){var F=c.callback;F&&(c.callback=function(){0==--A&&F()})}for(;d=
l[t]();)va(d.c,c,d.hint)}},va=function(a,b,c){a=ea(a)||[];var d=b.callback,e=b.config,h=b.timeout,l=b.ontimeout,p=f,v=!1;if(h&&!l||!h&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var s=G(L(c),"r",[]).sort(),z=G(L(c),"L",[]).sort(),A=[].concat(s),F=function(a,b){if(v)return 0;D.clearTimeout(p);z[n].apply(z,q);var d=((I||{}).config||{}).update;d?d(e):e&&G(J,"cu",[])[n](e);if(b){Q("me0",a,A);try{ua(b,c)}finally{Q("me1",a,A)}}return 1};0<h&&(p=D.setTimeout(function(){v=
!0;l()},h));var q=Y(a,z);if(q[y]){var q=Y(a,s),w=G(J,"CP",[]),x=w[y];w[x]=function(a){if(!a)return 0;Q("ml1",q,A);var b=function(b){w[x]=f;F(q,a)&&fa(function(){d&&d();b()})},c=function(){var a=w[x+1];a&&a()};0<x&&w[x-1]?w[x]=function(){b(c)}:b(c)};if(q[y]){var R="loaded_"+J.I++;I[R]=function(a){w[x](a);I[R]=f};a=oa(c,q,"gapi."+R,s);s[n].apply(s,q);Q("ml0",q,A);b.sync||D.___gapisync?sa(a):Z(a)}else w[x](ba)}else F(q)&&d&&d()};var $=function(a){if(J.hee&&0<J.hel)try{return a()}catch(b){J.hel--,wa("debug_error",function(){k.___jsl.hefn(b)})}else return a()};I.load=function(a,b){return $(function(){return wa(a,b)})};N.bs0=k.gapi._bs||(new Date).getTime();O("bs0");N.bs1=(new Date).getTime();O("bs1");delete k.gapi._bs;})();
gapi.load("",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[102,103,100,71,96,97,108,79,106,45,17,86,81,61,30],"inline":{"css":1},"report":{},"oauth-flow":{"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","persist":true},"isLoggedIn":true,"isPlusUser":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"shortlists":{"url":"?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.01},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.cs.r6u5E_EHcUo.O/m\u003d__features__/am\u003dUQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPDctXLTDSqlJ0hr16DADH1hZdJmA","u":"https://apis.google.com/js/api.js","hee":true,"fp":"a896ff3eef7d0bd9e345d7193e6508388a7da66d","dpo":false},"fp":"a896ff3eef7d0bd9e345d7193e6508388a7da66d","annotation":["autocomplete","profile","interactivepost"],"bimodal":["signin"]}});