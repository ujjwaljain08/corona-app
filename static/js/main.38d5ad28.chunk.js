(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{54:function(e,t,c){},56:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c(0),a=c.n(s),r=c(8),o=c.n(r),i=(c(54),c(28)),u=c.n(i),j=c(37),l=c(29);c(56);var d=c(95),h=c(96),b=c(97),f=c(89),O=c(93),v=c(94);var p=function(e){var t=e.title,c=e.cases,s=e.total;return Object(n.jsx)(f.a,{className:"infoBox",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(v.a,{className:"infoBox_title",color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{children:c}),Object(n.jsxs)(v.a,{className:"infoBox_total",color:"textSecondary",gutterBottom:!0,children:["Total",Object(n.jsx)("h3",{children:s})]})]})})};c(61);var x=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:e.cases})})]})}))})},m=c(43),w=function(e){var t=Object(m.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t};var y=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("worldwide"),o=Object(l.a)(r,2),i=o[0],v=o[1],m=Object(s.useState)({}),y=Object(l.a)(m,2),N=y[0],g=y[1],S=Object(s.useState)([]),_=Object(l.a)(S,2),B=_[0],C=_[1];Object(s.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=w(e);C(c),a(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]);var R=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),g(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("country info",N),console.log("country info",N.active),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"app_left",children:[Object(n.jsxs)("div",{className:"app_header",children:[Object(n.jsx)("h1",{children:"CORONA TRACKER"}),Object(n.jsx)(d.a,{className:"app_dropdown",children:Object(n.jsxs)(h.a,{value:i,variant:"outlined",onChange:R,children:[Object(n.jsx)(b.a,{value:"worldwide",children:"worldwide"}),c.map((function(e){return Object(n.jsx)(b.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app_stats",children:[Object(n.jsx)(p,{title:"Cases",cases:N.todayCases,total:N.cases}),Object(n.jsx)(p,{title:"Recoverd",cases:N.todayRecovered,total:N.recovered}),Object(n.jsx)(p,{title:"Deaths",cases:N.todayDeaths,total:N.deaths})]})]}),Object(n.jsx)("div",{className:"app_right",children:Object(n.jsx)(f.a,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{children:"All CountryInfo"}),Object(n.jsx)(x,{countries:B})]})})})]})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.38d5ad28.chunk.js.map