(window["webpackJsonpcampaign-app"]=window["webpackJsonpcampaign-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(19),a(3)),o=a(8),s=a(9),m=a(12),u=a(10),p=a(13),d=(a(20),a(11)),f=a(4);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var b=function(e){var t=e.onFilterApply,a=Object(n.useState)(""),c=Object(f.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)(""),s=Object(f.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),b=Object(f.a)(p,2),D=b[0],E={setStartDate:l,setEndDate:u,setCampaignName:b[1]},g=function(e){var t=e.target,a=t.name,n=t.value;E[a](n)};return r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",null,r.a.createElement("div",{className:"field-group text-left"},r.a.createElement("label",{htmlFor:"start"},"Start date:"),r.a.createElement("input",{type:"date",id:"start",name:"setStartDate",value:i,onChange:g})),r.a.createElement("div",{className:"field-group text-left"},r.a.createElement("label",{htmlFor:"end"},"End date:"),r.a.createElement("input",{type:"date",id:"end",name:"setEndDate",value:m,onChange:g}))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"setCampaignName",value:D,placeholder:"Search By Name",onChange:g}),r.a.createElement("button",{className:"searchBtn",onClick:function(){t(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},{startDate:i,endDate:m,campaignName:D}))}},r.a.createElement("i",{className:"fa fa-search"}))))},D=a(1),E=a.n(D),g="MM/DD/YYYY",h="YYYY-MM-DD",y=g,O=function(e){var t=e.columns;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map(function(e,t){return r.a.createElement("th",{key:t},e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}))})))},w=function(e,t){return E()(e.startDate,y)>E()(e.endDate,y)?r.a.createElement("span",{className:"color-red"},t):t},j={isActive:function(e,t){var a="Active";return t||(a="InActive"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-circle ".concat(a)})," ",a)},Budget:function(e,t){return"".concat(t," USD")},startDate:w,endDate:w},N=function(e){var t=e.campaignTableData,a=(e.onFilterApply,Object.keys(t[0]));return r.a.createElement("table",null,r.a.createElement(O,{columns:a}),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.id},a.map(function(t,a){return r.a.createElement("td",{key:a},j[t]&&j[t](e,e[t])||e[t])}))})))},A=a(2),k=a.n(A),C=g,S=h;var B=[],P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onFilterApply=function(e){var t=e.startDate,n=e.endDate,r=e.campaignName,c=Object(l.a)(B);if(k.a.isEmpty(t)||(c=c.filter(function(e){var a=E()(e.startDate,C),n=E()(e.endDate,C);return!!E()(t,S).isBetween(a,n)})),!k.a.isEmpty(n)){var i=c.filter(function(e){var t=E()(e.startDate,C),a=E()(e.endDate,C);return!!E()(n,S).isBetween(t,a)});c.concat(i),c=k.a.uniqBy(c,"id")}k.a.isEmpty(r)||(c=c.filter(function(e){return e.name.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())>-1})),a.setState({campaignTableData:c,startDate:t,endDate:n,campaignName:r})},a.state={campaignTableData:[],startDate:"",endDate:"",campaignName:""},window.AddCampaigns=function(e){var t=Object(l.a)(B),n=a.state,r=n.startDate,c=n.endDate,i=n.campaignName,o=(t=t.concat(e)).map(function(e){return e.id});o>Object(l.a)(new Set(o))?console.log("Please check the data provided it must have unique id values"):(B=t,a.onFilterApply({startDate:r,endDate:c,campaignName:i}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.campaignTableData,t=e.length>0;return t&&(e=e.map(function(e){return e.isActive=function(e){var t=E()(),a=E()(e.startDate,C),n=E()(e.endDate,C);return!!t.isBetween(a,n)}(e),e})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Campaign App"),r.a.createElement(b,{onFilterApply:this.onFilterApply})),r.a.createElement("section",{className:"container"},t&&r.a.createElement(N,{campaignTableData:e})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.40e97075.chunk.js.map