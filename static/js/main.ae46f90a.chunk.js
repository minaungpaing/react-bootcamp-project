(this["webpackJsonpproject-bootcamp"]=this["webpackJsonpproject-bootcamp"]||[]).push([[0],{38:function(e,s,t){},72:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t.n(a),i=t(31),r=t.n(i),l=(t(38),t(39),t(40),t(8)),d=t(2),j=t(9),o=t.n(j),b=t(12),h=t(10),m=t(13),x=t.n(m),O=t.p+"static/media/logo.66919469.png";var u=function(e){var s=e.teams;return e.teamIds,Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h4",{children:Object(c.jsx)("b",{children:"TEAM LIST"})}),Object(c.jsx)("div",{className:"row",children:s.map((function(e){return Object(c.jsxs)("div",{className:"col-sm-4",children:[Object(c.jsx)(l.b,{to:"/team/".concat(e.id),children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("center",{children:null!=e.image_url?Object(c.jsx)("img",{src:e.image_url,width:"150px",alt:"Not found"}):Object(c.jsx)("img",{src:O,width:"225px",alt:"Not found"})}),Object(c.jsx)("div",{className:"card-footer",children:e.name})]})}),Object(c.jsx)("br",{})]},e.id)}))})]})},v=t(14),p=t.n(v),g="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/dota2/tournaments/running",N=x.a.create({baseURL:g,headers:{Authorization:"Bearer ".concat("UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec"),"X-Requested-With":""}});var f=function(){var e=Object(a.useState)([]),s=Object(h.a)(e,2),t=s[0],n=s[1],i=Object(a.useState)(!1),r=Object(h.a)(i,2),l=r[0],d=r[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){var e=Object(b.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,N.get("".concat(g));case 3:s=e.sent,n(s.data),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t.filter((function(e){return"Epic League"===e.league.name}));return Object(c.jsx)(c.Fragment,{children:l?Object(c.jsx)("div",{className:"loading",children:Object(c.jsxs)("div",{className:"loading-icon",children:[Object(c.jsx)(p.a,{size:50,color:"#dc143c",loading:l}),Object(c.jsx)("span",{className:"ml-2",children:"Loading..."})]})}):Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"100px"}}),m.map((function(e){return Object(c.jsx)(u,{teams:e.teams,teamIds:e.id},e.id)}))]})})};var w=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"100px"}}),Object(c.jsx)("div",{className:"container",style:{height:"80vh"},children:"This page is Not Found"})]})};var y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"100px"}}),Object(c.jsx)("div",{className:"container",style:{height:"80vh"},children:"This is Schedule"})]})};var W=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l.b,{to:"/",className:"navbar-brand",href:"#",children:Object(c.jsx)("b",{children:Object(c.jsxs)("h3",{children:["DOTA",Object(c.jsx)("font",{color:"crimson",children:"League"})]})})}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/Team",className:"nav-link",children:"TEAMS"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/schedule",className:"nav-link",children:"SCHEDULE"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(l.b,{to:"/login",className:"nav-link",children:[Object(c.jsx)("i",{className:"fa fa-user mr-2"})," LOGIN"]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/",className:"nav-link",children:Object(c.jsx)("i",{className:"fa fa-search mr-2"})})})]})})]})})})};var L=function(){return Object(c.jsx)("footer",{children:"Created By : Min Aung Paing"})},T=t(20),C=t.n(T),z=t.p+"static/media/banner.5e6696f5.png",A=t.p+"static/media/dt2bg.1cacac5b.jpg",P="data:image/png;base64,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",k=t.p+"static/media/liquid.13ed1cb6.png",F=t.p+"static/media/alliance.0d896ae8.png",X=t.p+"static/media/secret.2fbccb04.png",B=t.p+"static/media/new3.dc0739f4.jpg",H=t.p+"static/media/new2.9406768b.png",D="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/dota2/tournaments/running",S=x.a.create({baseURL:D,headers:{Authorization:"Bearer ".concat("UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec"),"X-Requested-With":""}});function E(){var e=Object(a.useState)([]),s=Object(h.a)(e,2),t=s[0],n=s[1],i=Object(a.useState)(!1),r=Object(h.a)(i,2),l=r[0],d=r[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){var e=Object(b.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,S.get("".concat(D));case 3:s=e.sent,n(s.data),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:l?Object(c.jsx)("div",{className:"loading",children:Object(c.jsxs)("div",{className:"loading-icon",children:[Object(c.jsx)(p.a,{size:50,color:"#dc143c",loading:l}),Object(c.jsx)("span",{className:"ml-2",children:"Loading..."})]})}):Object(c.jsx)("div",{className:"banner",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"main-banner",children:Object(c.jsx)("img",{src:z,alt:"home-banner"})}),Object(c.jsxs)("div",{className:"main-col",children:[Object(c.jsx)("div",{className:"left-col",children:t.map((function(e){return Object(c.jsxs)("div",{className:"event mb-3",style:{background:"linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.45)),url(".concat(null!=e.league.image_url?e.league.image_url:A,")"),backgroundSize:"cover",backgroundPosition:"center"},children:[Object(c.jsxs)("div",{className:"main-heading",children:[e.league.name," - ",e.videogame.name," ",Object(c.jsx)("br",{}),Object(c.jsxs)("small",{children:[C()(e.serie.begin_at).format("ll")," -"," ",C()(e.serie.end_at).format("ll")]})]}),Object(c.jsxs)("div",{className:"event-footer d-flex justify-content-between",children:[Object(c.jsx)("div",{className:"price-pool",children:"Price Pool : $ 500, 000"}),Object(c.jsx)("div",{className:"readmore",children:"Read More!"})]})]},e.id)}))}),Object(c.jsxs)("div",{className:"right-col",children:[Object(c.jsx)("div",{className:"right-header",children:"Upcoming Matches"}),Object(c.jsxs)("div",{className:"match-list mt-3",children:[Object(c.jsxs)("div",{className:"match-header d-flex justify-content-between py-1 px-2",children:[Object(c.jsx)("span",{children:"Best Of 3"}),Object(c.jsx)("span",{children:"Dec 3-20"})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-around py-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:P,width:"75px",alt:"Not Found"}),Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"NaVi"})})]}),Object(c.jsx)("div",{className:"vs",children:"VS"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"Liquid"})}),Object(c.jsx)("img",{src:k,width:"75px",alt:"Not Found"})]})]})]}),Object(c.jsxs)("div",{className:"match-list",children:[Object(c.jsxs)("div",{className:"match-header d-flex justify-content-between py-1 px-2",children:[Object(c.jsx)("span",{children:"Best Of 3"}),Object(c.jsx)("span",{children:"Dec 3-20"})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-around py-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:F,width:"75px",alt:"Not Found"}),Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"Alliance"})})]}),Object(c.jsx)("div",{className:"vs",children:"VS"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"Secret"})}),Object(c.jsx)("img",{src:X,width:"75px",alt:"Not Found"})]})]})]}),Object(c.jsxs)("div",{className:"match-list",children:[Object(c.jsxs)("div",{className:"match-header d-flex justify-content-between py-1 px-2",children:[Object(c.jsx)("span",{children:"Best Of 3"}),Object(c.jsx)("span",{children:"Dec 3-20"})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-around py-3",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:"data:image/png;base64,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",width:"75px",alt:"Not Found"}),Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"Nigma"})})]}),Object(c.jsx)("div",{className:"vs",children:"VS"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("small",{children:Object(c.jsx)("b",{children:"NaVi"})}),Object(c.jsx)("img",{src:P,width:"75px",alt:"Not Found"})]})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"news",children:[Object(c.jsx)("div",{className:"right-header",children:"Latest Post"}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("img",{src:B,alt:"post"}),Object(c.jsx)("br",{}),Object(c.jsx)("h4",{children:Object(c.jsx)("b",{children:"The International Nine(Ti9)"})}),Object(c.jsx)("p",{className:"pb-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry... "})]})]}),Object(c.jsxs)("div",{className:"news",children:[Object(c.jsx)("div",{className:"right-header",children:"Next Event"}),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("img",{src:H,height:"150px",alt:"post"}),Object(c.jsx)("br",{}),Object(c.jsx)("h5",{className:"py-3",children:Object(c.jsx)("b",{children:"ESL One Championship : Shan Hi"})})]})]}),Object(c.jsxs)("div",{className:"social",children:[Object(c.jsx)("div",{className:"right-header",children:"Follow Us :"}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"social-icon-list d-flex justify-content-around",children:[Object(c.jsx)("div",{className:"social-icon facebook",children:Object(c.jsx)("i",{className:"fab fa-facebook-f"})}),Object(c.jsx)("div",{className:"social-icon google",children:Object(c.jsx)("i",{className:"fab fa-google"})}),Object(c.jsx)("div",{className:"social-icon steam",children:Object(c.jsx)("i",{className:"fab fa-steam"})}),Object(c.jsx)("div",{className:"social-icon wechat",children:Object(c.jsx)("i",{className:"fab fa-weixin"})}),Object(c.jsx)("div",{className:"social-icon twitch",children:Object(c.jsx)("i",{className:"fab fa-twitch"})})]})]})]})]})]})})})}var Z=t.p+"static/media/d2.b666a912.png";var Q=function(e){var s=e.players;return Object(c.jsx)("div",{className:"row",children:s&&s.map((function(e){return Object(c.jsxs)("div",{className:"col-sm-3",children:[Object(c.jsxs)("div",{className:"player-card",children:[Object(c.jsx)("center",{children:null!=e.image_url?Object(c.jsx)("img",{className:"img",src:e.image_url,width:"100%",alt:"Not Found"}):Object(c.jsx)("img",{className:"img",src:Z,width:"100%",alt:"Not found"})}),Object(c.jsxs)("div",{className:"card-footer d-flex justify-content-between",children:[Object(c.jsx)("img",{src:"https://www.countryflags.io/".concat(e.nationality,"/shiny/32.png"),alt:e.nationality})," ",e.name]})]}),Object(c.jsx)("br",{})]},e.id)}))})};var M=function(e){var s=e.match,t="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/teams/".concat(s.params.id),n=x.a.create({baseURL:t,headers:{Authorization:"Bearer ".concat("UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec"),"X-Requested-With":""}}),i=Object(a.useState)([]),r=Object(h.a)(i,2),l=r[0],d=r[1],j=Object(a.useState)(!1),m=Object(h.a)(j,2),O=m[0],u=m[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){var e=Object(b.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,n.get("".concat(t));case 3:s=e.sent,d(s.data),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:O?Object(c.jsx)("div",{className:"loading",children:Object(c.jsxs)("div",{className:"loading-icon",children:[Object(c.jsx)(p.a,{size:50,color:"#dc143c",loading:O}),Object(c.jsx)("span",{className:"ml-2",children:"Loading..."})]})}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{style:{height:"100px"}}),Object(c.jsxs)("div",{className:"team-header d-flex justify-content-between mb-3",children:[Object(c.jsxs)("div",{className:"team-name",children:[Object(c.jsx)("span",{children:l.name})," ",Object(c.jsx)("br",{})," ",Object(c.jsxs)("div",{className:"nation",children:[Object(c.jsx)("i",{className:"fas fa-globe-americas"})," Location : ",null!=l.location?Object(c.jsx)("img",{src:"https://www.countryflags.io/".concat(l.location,"/shiny/32.png"),alt:l.location}):"Null"]})]}),Object(c.jsx)("div",{className:"team-logo",children:null!=l.image_url?Object(c.jsx)("img",{src:l.image_url,width:"100%",alt:"Not Found"}):Object(c.jsx)("img",{src:Z,width:"100%",alt:"Not found"})})]}),Object(c.jsx)(Q,{players:l.players}),Object(c.jsxs)("div",{className:"my-5",children:[Object(c.jsx)("h5",{children:Object(c.jsx)("b",{children:Object(c.jsx)("font",{color:"crimson",children:"ABOUT"})})}),Object(c.jsx)("br",{}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]})]})})};var U=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(W,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:E}),Object(c.jsx)(d.a,{exact:!0,path:"/schedule",component:y}),Object(c.jsx)(d.a,{exact:!0,path:"/team",component:f}),Object(c.jsx)(d.a,{exact:!0,path:"/team/:id",component:M}),Object(c.jsx)(d.a,{path:"*",component:w})]}),Object(c.jsx)(L,{})]})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),V()}},[[72,1,2]]]);
//# sourceMappingURL=main.ae46f90a.chunk.js.map