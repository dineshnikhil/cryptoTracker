(this["webpackJsonpcrypto-webapp"]=this["webpackJsonpcrypto-webapp"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(10),c(2)),j=(c(11),c(0));var o=function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("p",{className:"coin-rank",children:e.data.market_cap_rank}),Object(j.jsxs)("p",{className:"coin-name",children:[" ",Object(j.jsx)("img",{src:e.data.image,alt:"crypto-coin-img"})," ",e.data.name," ( ",e.data.symbol," )"]}),Object(j.jsx)("p",{children:e.data.current_price.toLocaleString("en-In")}),Object(j.jsxs)("p",{className:e.data.price_change_percentage_24h>0?"green":"red",children:[e.data.price_change_percentage_24h.toFixed(2)," %"]}),Object(j.jsx)("p",{children:e.data.total_volume.toLocaleString("en-In")}),Object(j.jsx)("p",{children:e.data.market_cap.toLocaleString("en-In")})]})};c(13);var d=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),l=d[0],b=d[1],u=Object(n.useState)(!0),h=Object(i.a)(u,2),p=h[0],O=h[1];Object(n.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){r(e),O(!1)}))}),[]);var m=c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h2",{children:"Search for a crypto Coin"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{type:"text",id:"coin",autoComplete:"off",onChange:function(e){b(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"card-head",children:[Object(j.jsx)("p",{id:"rank",children:"#"}),Object(j.jsx)("p",{children:"Coin ( Symbol )"}),Object(j.jsx)("p",{children:"Current Price"}),Object(j.jsx)("p",{children:"24h"}),Object(j.jsx)("p",{children:"24h Volume"}),Object(j.jsx)("p",{children:"Mkt Cap"})]}),Object(j.jsxs)("div",{children:[p&&Object(j.jsx)("p",{children:"Loading..."}),m.map((function(e){return Object(j.jsx)(o,{data:e},e.id)}))]})]})};c(14);var l=function(){var e=Object(n.useState)("fas fa-moon"),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),o=s[0],d=s[1];return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Cryptocurrency Prices by Market Cap"}),Object(j.jsx)("dfn",{onClick:function(){o?(document.documentElement.setAttribute("data-theme","dark"),a("fas fa-sun"),d(!1)):(document.documentElement.setAttribute("data-theme","light"),a("fas fa-moon"),d(!0))},title:"Change ui mode",children:Object(j.jsx)("i",{className:c})})]})};var b=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{children:Object(j.jsx)(d,{})})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.9fe6dc81.chunk.js.map