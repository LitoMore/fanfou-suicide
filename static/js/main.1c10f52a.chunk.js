(this["webpackJsonpfanfou-suicide"]=this["webpackJsonpfanfou-suicide"]||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(20),c=a.n(r),s=a(0),i=a.n(s),l=a(2),u=a(3),m=a(5),h=a(11),p=a(7),f=a(8),g=a(6),k=a.n(g),d=new(a(23).a)({consumerKey:"7008b986b162eb6ed2db8f50f26bc03e",consumerSecret:"0caea751b828756dca59a8ea7330384b",apiDomain:"cors.fanfou.pro",oauthDomain:"cors.fanfou.pro",hooks:{baseString:function(e){return e.replace("%2F%2Fcors.fanfou.pro%2Foauth","http%3A%2F%2Ffanfou.com%2Foauth").replace("%2F%2Fcors.fanfou.pro","http%3A%2F%2Fapi.fanfou.com")}}}),b=(a(42),a(43),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={loged:!1,user:null},a.goAuth=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getRequestToken();case 2:t=e.sent,localStorage.setItem("requestTokenSecret",t.oauthTokenSecret),window.location.replace("https://fanfou.com/oauth/authorize?oauth_token=".concat(t.oauthToken,"&oauth_callback=").concat(window.location.href));case 5:case"end":return e.stop()}}),e)}))),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,o,r,c,s,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(a=t.location)||!a.search){e.next=16;break}if(this.setState({loged:!0}),n=k.a.parse(a.search),o=n.oauth_token,!(r=localStorage.getItem("requestTokenSecret"))){e.next=14;break}return e.next=9,d.getAccessToken({oauthToken:o,oauthTokenSecret:r});case 9:c=e.sent,localStorage.setItem("oauthToken",c.oauthToken),localStorage.setItem("oauthTokenSecret",c.oauthTokenSecret),localStorage.removeItem("requestTokenSecret"),window.location.replace(window.location.origin+window.location.pathname);case 14:e.next=26;break;case 16:if(s=localStorage.getItem("oauthToken"),l=localStorage.getItem("oauthTokenSecret"),!s||!l){e.next=26;break}return this.setState({loged:!0}),d.oauthToken=s,d.oauthTokenSecret=l,e.next=24,d.get("/users/show");case 24:u=e.sent,this.setState({user:u});case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loged;return o.a.createElement("div",null,o.a.createElement("div",{className:"nes-container with-title is-centered is-dark",style:{width:"90vw",maxWidth:800,margin:"40px auto 20px auto"}},o.a.createElement("p",{className:"title",style:{fontSize:24,margin:"-3rem auto 1rem"}},"\u81ea\u6740"),t?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\u4f60\u597d\uff0c",o.a.createElement("img",{className:"nes-avatar is-small",alt:"avatar",src:t.profile_image_url,style:{imageRendering:"pixelated"}})," ",t.name,"\u3002"),o.a.createElement("button",{type:"button",className:"nes-btn is-error",style:{position:"absolute",right:0,bottom:4},onClick:function(){localStorage.removeItem("oauthToken"),localStorage.removeItem("oauthTokenSecret"),window.location.reload()}},"\u9000\u51fa")):a?o.a.createElement("p",null,"\u6b63\u5728\u767b\u5f55.."):o.a.createElement("p",null,o.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:this.goAuth},"\u767b\u5f55"))),o.a.createElement("p",{style:{textAlign:"center",color:"white"}},o.a.createElement("span",{style:{fontWeight:700}},"<"),o.a.createElement("span",{style:{fontWeight:700,marginLeft:2}},">")," without ",o.a.createElement("a",{href:"https://fanfou.com/lito",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"nes-icon is-small heart nes-pointer is-empty",style:{marginTop:-4,marginBottom:-4}}))," on ",o.a.createElement("a",{href:"https://github.com/LitoMore/fanfou-export",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"nes-icon github is-small",style:{marginTop:-4,marginBottom:-4}}))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/));function w(){return(w=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=5;break}return e.next=3,navigator.serviceWorker.ready;case 3:e.sent.unregister();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.a.render(o.a.createElement(b,null),document.querySelector("#root")),function(){w.apply(this,arguments)}()}},[[24,1,2]]]);
//# sourceMappingURL=main.1c10f52a.chunk.js.map