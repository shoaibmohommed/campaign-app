(window["webpackJsonpcampaign-app"]=window["webpackJsonpcampaign-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(5),i=a.n(c),l=(a(25),a(7)),o=a(12),s=a(13),m=a(18),u=a(14),p=a(19),d=(a(26),a(15)),E=a(8),D=a(2),f=a.n(D),b=a(3),O=a.n(b),g=a(4),v=(a(28),{DATE_FORMAT:"MM/DD/YYYY",HTML_DATE_FIELD_FORMAT:"YYYY-MM-DD"});function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=v.HTML_DATE_FIELD_FORMAT,T=function(e){var t=e.onFilterApply,a=Object(n.useState)(""),c=Object(E.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)(""),s=Object(E.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),D=Object(E.a)(p,2),b=D[0],v={setStartDate:l,setEndDate:u,setCampaignName:D[1]},T=function(e){var t=e.target,a=t.name,n=t.value;v[a](n)};return r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",null,r.a.createElement("div",{className:"field-group text-left"},r.a.createElement("label",{htmlFor:"start"},"Start date:"),r.a.createElement("input",{type:"date",id:"start",name:"setStartDate",value:i,onChange:T})),r.a.createElement("div",{className:"field-group text-left"},r.a.createElement("label",{htmlFor:"end"},"End date:"),r.a.createElement("input",{type:"date",id:"end",name:"setEndDate",value:m,onChange:T}))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"setCampaignName",value:b,placeholder:"Search By Name",onChange:T}),r.a.createElement("button",{className:"searchBtn",onClick:function(){O.a.isEmpty(i)&&O.a.isEmpty(m)||!O.a.isEmpty(i)&&!O.a.isEmpty(m)?f()(i,h)>f()(m,h)?g.a.error("start date can not be greater than the end date ",{position:g.a.POSITION.TOP_LEFT}):t(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},{startDate:i,endDate:m,campaignName:b})):g.a.error("Either select both the start date and end date or do not select any of it.",{position:g.a.POSITION.TOP_LEFT})}},r.a.createElement("i",{className:"fa fa-search"}))))},A=v.DATE_FORMAT,j=function(e){var t=e.columns;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map(function(e,t){return r.a.createElement("th",{key:t},e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}))})))},N=function(e,t){return f()(e.startDate,A)>f()(e.endDate,A)?r.a.createElement("span",{className:"color-red"},t):t},w={isActive:function(e,t){var a="Active";return t||(a="InActive"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-circle ".concat(a)})," ",a)},Budget:function(e,t){return"".concat(t," USD")},startDate:N,endDate:N},F=function(e){var t=e.campaignTableData,a=Object.keys(t[0]);return r.a.createElement("table",null,r.a.createElement(j,{columns:a}),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.id},a.map(function(t,a){return r.a.createElement("td",{key:a},w[t]&&w[t](e,e[t])||e[t])}))})))},_=v.DATE_FORMAT,M=v.HTML_DATE_FIELD_FORMAT,S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onFilterApply=function(e){var t=e.startDate,n=e.endDate,r=e.campaignName,c=Object(l.a)(a.state.originalTableData);O.a.isEmpty(t)||O.a.isEmpty(n)||(c=c.filter(function(e){var a=f()(e.startDate,_),r=f()(e.endDate,_),c=f()(t,M),i=f()(n,M);return!(!a.isBetween(c,i)&&!r.isBetween(c,i))})),O.a.isEmpty(r)||(c=c.filter(function(e){return e.name.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())>-1})),a.setState({campaignTableData:c,startDate:t,endDate:n,campaignName:r})},a.state={campaignTableData:[],originalTableData:[],startDate:"",endDate:"",campaignName:""},window.AddCampaigns=function(e){var t=a.state,n=t.startDate,r=t.endDate,c=t.campaignName,i=t.originalTableData,o=Object(l.a)(i),s=(o=o.concat(e)).map(function(e){return e.id});return s>Object(l.a)(new Set(s))?(console.log("Please check the data provided it must have unique id values"),!1):(a.setState({originalTableData:o},function(){a.onFilterApply({startDate:n,endDate:r,campaignName:c})}),!0)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.campaignTableData,t=e.length>0;return t&&(e=e.map(function(e){return e.isActive=function(e){var t=f()(),a=f()(e.startDate,v.DATE_FORMAT),n=f()(e.endDate,v.DATE_FORMAT);return!!t.isBetween(a,n)}(e),e})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Campaign App"),r.a.createElement(T,{onFilterApply:this.onFilterApply})),r.a.createElement("section",{className:"container"},t&&r.a.createElement(F,{campaignTableData:e})))}}]),t}(r.a.Component);g.a.configure(),i.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b689f86.chunk.js.map