webpackJsonp([0],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("k6xV")},null,null).exports,i=a("/ocq"),o={name:"Navbar",data:function(){return{}},mounted:function(){$(".nav li a").on("click",function(){$(".collapse").collapse("hide")})},computed:{currentPath:function(){return this.$route.path}},methods:{submitSearch:function(){}}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header py-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex"},[e("a",{staticClass:"header-toggler d-lg-none ml-3 ml-lg-0",attrs:{href:"#","data-toggle":"collapse","data-target":"#headerMenuCollapse"}},[e("span",{staticClass:"header-toggler-icon"})])])])])])}]};var l={name:"Footer",data:function(){return{}},mounted:function(){["./static/js/core.js"].forEach(function(t){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)})}},u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-footer"},[e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-3 mt-lg-0 text-center"},[this._v("\n          Copyright © 2018 "),e("a",{attrs:{href:"http://www.statnlp.org"}},[this._v("STATNLP")]),this._v(". All rights reserved.\n        ")])])])])])}]};var d={components:{Navbar:a("VU/8")(o,c,!1,function(t){a("ume/")},"data-v-7a2b1a97",null).exports,Footer:a("VU/8")(l,u,!1,function(t){a("lO1j")},"data-v-46576490",null).exports},name:"MainLayout",data:function(){return{}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-main"},[e("Navbar"),this._v(" "),e("div",{staticClass:"my-3 my-md-5"},[e("router-view")],1)],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var p=a("VU/8")(d,v,!1,function(t){a("UxS6")},"data-v-18d363f6",null).exports,m={name:"CircleProgress",props:{percentValue:{default:.8},percent:{default:80}},data:function(){return{}},methods:{loadCircle:function(){$(this.$el).circleProgress({value:this.percentValue,thickness:3,fill:{color:tabler.colors.blue||tabler.colors.blue},size:40,startAngle:-Math.PI/4*2,emptyFill:"#F4F4F4",lineCap:"round"})}},mounted:function(){this.loadCircle()},watch:{percent:function(t){console.log(t),this.loadCircle()}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-auto chart-circle chart-circle-xs"},[e("div",{staticClass:"chart-circle-value"},[this._v(this._s(this.percent)+"%")])])},staticRenderFns:[]};var h={components:{CircleProgress:a("VU/8")(m,g,!1,function(t){a("bAch")},"data-v-1a41ef70",null).exports},name:"HomePage",data:function(){return{orgs:[{name:"A*STAR",amount:6e3,usage:0},{name:"NTU",amount:6e3,usage:0},{name:"NUS",amount:6e3,usage:0},{name:"SMU",amount:6e3,usage:0},{name:"SUTD",amount:6e3,usage:0},{name:"Central Account",amount:3e3,usage:0}]}},methods:{save:function(){this.loadDataTable()},loadDataTable:function(){$("#tbl-orgs").DataTable({info:!1,paging:!1,searching:!1,dom:"Bfrtip",buttons:[{text:"Save Change",action:function(t,e,a,s){this.loadDataTable()}.bind(this)},"copy","excel","pdf","pdf","print"],destroy:!0}),$(".dt-buttons button").removeClass("dt-button"),$(".dt-buttons button").addClass("btn"),$(".dt-buttons button").addClass("btn btn-primary")}},mounted:function(){this.loadDataTable()},computed:{totalBudget:function(){var t=0;return this.orgs.forEach(function(e){""===e.amount&&(e.amount=0),t+=parseFloat(e.amount)}),t},totalOrgs:function(){return this.orgs.length-1},balance:function(){return this.totalBudget-this.usage},usage:function(){var t=0;return this.orgs.forEach(function(e){""===e.usage&&(e.usage=0),t+=parseFloat(e.usage)}),t}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cards"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Total Budget")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.totalBudget)))]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Balance")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.balance)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-blue",style:"width: "+t.balance/t.totalBudget*100+"%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Usage")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.usage)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-blue",style:"width: "+t.usage/t.totalBudget*100+"%"})])])])])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table card-table table-vcenter text-nowrap",attrs:{id:"tbl-orgs"}},[t._m(1),t._v(" "),a("tbody",t._l(t.orgs,function(e,s){return a("tr",{key:s},[a("td",[a("span",{staticClass:"text-muted"},[t._v(t._s(s+1))])]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$"),a("span",{attrs:{hidden:""}},[t._v(t._s(e.amount))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"item.amount"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:e.amount},on:{input:function(a){a.target.composing||t.$set(e,"amount",a.target.value)}}})])]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(e.amount/t.totalBudget*100,2),percentValue:e.amount/t.totalBudget}})],1),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$ "),a("span",{attrs:{hidden:""}},[t._v(t._s(e.usage))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.usage,expression:"item.usage"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:e.usage},on:{input:function(a){a.target.composing||t.$set(e,"usage",a.target.value)}}})])]),t._v(" "),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],staticClass:"form-control",attrs:{rows:"2",placeholder:"Enter description",value:"Mike"},domProps:{value:e.description},on:{input:function(a){a.target.composing||t.$set(e,"description",a.target.value)}}}),t._v(" "),a("span",{attrs:{hidden:""}},[t._v(t._s(e.description))])])])}))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress progress-sm"},[e("div",{staticClass:"progress-bar bg-blue",staticStyle:{width:"100%"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"w-1"},[t._v("#")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Percentage")]),t._v(" "),a("th",[t._v("Usage")]),t._v(" "),a("th",[t._v("Description")])])])}]};var _=a("VU/8")(h,f,!1,function(t){a("hFux")},"data-v-66f5c214",null).exports;s.a.use(i.a);var C=new i.a({routes:[{path:"/",component:p,children:[{path:"/",name:"HomePage",component:_}]}]}),b=(a("Q6tO"),a("pSRl"),function(t){return t.toUpperCase()}),x=function(t,e,a){return void 0===a&&(a=""),void 0===t&&(t=""),t.toString().substring(0,e)+a},y=function(t){return(t/1).toFixed(0).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},w={install:function(t){t.filter("uppercase",b),t.filter("limit",x),t.filter("currency",y)}};s.a.use(w),s.a.config.productionTip=!1,new s.a({el:"#app",router:C,components:{App:r},template:"<App/>"})},Q6tO:function(t,e){},UxS6:function(t,e){},bAch:function(t,e){},hFux:function(t,e){},k6xV:function(t,e){},lO1j:function(t,e){},pSRl:function(t,e){},"ume/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.10654183cfa26b1fd9ed.js.map