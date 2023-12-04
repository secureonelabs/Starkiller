import{_ as l}from"./PluginTasksList-c86c247c.js";import{_ as u}from"./GeneralForm-103beb0c.js";import{_ as p}from"./TechniqueChips-64920cb0.js";import{_ as m}from"./InfoViewer-3b455e14.js";import{_}from"./ErrorStateAlert-e3f57045.js";import{a as c}from"./ListPageTop-dbf4cae7.js";import{_ as f}from"./EditPageTop-1e6d1825.js";import{n as g,aE as h,aF as d,b as r,c as n,a as b}from"./index-9016587b.js";import{_ as k,a,b as v,c as o}from"./VTabItem-dd959ba5.js";import"./TagViewer-172a3cb9.js";import"./VSelect-bfdecc0a.js";import"./DateTimeDisplay-93237fff.js";import"./moment-fbc5633a.js";import"./VTooltip-7de50c7b.js";import"./TooltipButton-69f903f0.js";import"./index-1fea5c60.js";import"./ansi_up-67a263fc.js";import"./download-stager-ae353708.js";import"./VPagination-6f6b6738.js";import"./VDataTable-297b0ab1.js";import"./VSwitch-d07dfa02.js";import"./ExpansionPanelFilter-2df45fe0.js";import"./VExpansionPanelHeader-65ae70f8.js";import"./ExpansionPanelSearch-5a8bc749.js";import"./AdvancedTable-01edc8c1.js";import"./VExpansionPanels-2375d5f1.js";import"./VItemGroup-d2065f4a.js";import"./tag-api-51c8dbee.js";import"./bypass-module-ef16d189.js";import"./bypass-api-ce405bfe.js";import"./credential-module-7cec399a.js";import"./malleable-module-0a520ea6.js";import"./malleable-api-67eb6033.js";const x={name:"PluginEdit",components:{InfoViewer:m,GeneralForm:u,TechniqueChips:p,EditPageTop:f,PluginTasksList:l,TooltipButtonToggle:c,ErrorStateAlert:_},data(){return{reset:!0,loading:!1,isRefreshTasks:!1,form:{},plugin:{options:{}},errorState:!1}},computed:{breads(){return[{text:"Plugins",disabled:!1,to:"/plugins",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/plugins/edit"}]},breadcrumbName(){return this.plugin.name?this.plugin.name:this.id?this.id:""},pluginInfo(){return Object.keys(this.plugin).length<1?{}:{authors:this.plugin.authors,description:this.plugin.description,comments:this.plugin.comments}},pluginOptions(){const{options:e}=this.plugin;return e||{}},id(){return this.$route.params.id},tab:{set(e){this.$router.replace({query:{...this.$route.query,tab:e}})},get(){return this.$route.query.tab||"interact"}}},mounted(){this.getPlugin(this.id)},methods:{async submit(){if(!(this.loading||!this.$refs.generalform.$refs.form.validate())){this.loading=!0;try{const e=await h(this.plugin.name,this.form);this.$snack.success(`${e.detail}`)}catch(e){this.$snack.error(`Error: ${e}`)}this.loading=!1}},getPlugin(e){d(e).then(t=>{this.reset=!1,this.plugin=t,setTimeout(()=>{this.reset=!0},500)}).catch(()=>{this.errorState=!0})}}};var y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"p4"},[s("portal",{attrs:{to:"app-bar-extension"}},[s("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[s(k,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(i){t.tab=i},expression:"tab"}},[s(a,{key:"interact",attrs:{href:"#interact"}},[t._v(" Interact "),s(r,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-terminal ")])],1),s(a,{key:"tasks",attrs:{href:"#tasks"}},[t._v(" Tasks "),s(r,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-sticky-note ")])],1)],1)],1)]),s(f,{attrs:{breads:t.breads,"show-submit":!1,"show-copy":!1,"show-delete":!1,"submit-loading":t.loading},on:{submit:t.submit}},[s("template",{slot:"extra-stuff"},[s(c,{attrs:{icon:"fa-redo","button-text":t.isRefreshTasks?"On":"Off",text:"Auto-refresh tasks"},model:{value:t.isRefreshTasks,callback:function(i){t.isRefreshTasks=i},expression:"isRefreshTasks"}})],1)],2),t.errorState?s(_,{attrs:{"resource-id":t.id,"resource-type":"plugin"}}):s(v,{staticClass:"scrollable-pane",model:{value:t.tab,callback:function(i){t.tab=i},expression:"tab"}},[s(o,{key:"interact",attrs:{value:"interact",transition:!1,"reverse-transition":!1}},[s("h4",{staticClass:"pl-4 pb-4"},[t._v("Execute Plugin")]),s(n,{staticStyle:{padding:"10px"}},[s(m,{staticClass:"info-viewer",attrs:{info:t.pluginInfo}}),s(p,{attrs:{techniques:t.plugin.TechniqueChips}}),t.reset?s(u,{ref:"generalform",attrs:{options:t.plugin.options},model:{value:t.form,callback:function(i){t.form=i},expression:"form"}}):t._e(),s(b,{attrs:{loading:t.loading,color:"primary"},on:{click:t.submit}},[t._v(" Submit ")])],1)],1),s(o,{key:"tasks",attrs:{value:"tasks",transition:!1,"reverse-transition":!1}},[s(n,{attrs:{flat:""}},[s(l,{attrs:{plugin:t.plugin,"refresh-tasks":t.isRefreshTasks}})],1)],1)],1)],1)},T=[],P=g(x,y,T,!1,null,null,null,null);const rt=P.exports;export{rt as default};
