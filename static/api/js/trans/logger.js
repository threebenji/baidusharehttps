window._bd_share_main.F.module("trans/logger",function(e,t){var n=e("base/tangram").T,r=e("component/comm_tools"),i=e("conf/const").URLS,s=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/ig,o=/[#|&](\d+\-[a-zA-Z\d]+\-\d+\-\d+\-[a-f\d]{32}$)/g,u=(r.getPageUrl().match(o)||"").toString().replace(/#|&/g,""),a=function(e,t){window._bd_share_main.F.use("component/anticheat",function(r){t.sloc=r.getSloc(e);})},f=function(e){var t=r.getPageUrl();if(s.test(t)&&u=="")return;var o={share:0,slide:0,imgshare:1,addtoshare:2,videoshare:3},a=[0,0,0,0,0,0,0,0];n.each(_bd_share_main._LogPoolV2,function(e,t){a[o[t]]=1});var f={pid:307,type:3071,sign:u,desturl:encodeURIComponent(document.referrer),linkid:r.getLinkId(),apitype:parseInt(a.reverse().join(""),2)}},l=function(){var e={pid:307,type:3072,sign:u,uid:_bd_share_main.uid,linkid:r.getLinkId(),desturl:encodeURIComponent(document.referrer)}},c=function(){if(u!=""){var e={url:r.getPageUrl().replace(o,""),title:document.title.substr(0,300),sign:u},t=i.backUrl+"?"+n.ajax.param(e);n.sio(t).log()}},h=function(){var e=+(new Date),t={spendTime:0,scrollTop:0,viewHeight:0},r=+(new Date),i=function(){var e=new Date-r;if(e>t.spendTime){var n=document.compatMode=="BackCompat"?document.body:document.documentElement;t={spendTime:e,scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,viewHeight:n.clientHeight}}r=new Date},s=0,o=1e3;setInterval(function(){document.hasFocus()&&s++},o),n(window).on("scroll",i),n(window).on("beforeunload",function(){var r=new Date-e;if(r==0)return;i();})};t.commit=a,t.nsClick=f,t.dialog=l,t.back=c,t.duration=h});