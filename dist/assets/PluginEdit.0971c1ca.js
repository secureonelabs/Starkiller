import{_ as l}from"./PluginTasksList.fdbea558.js";import{_ as u}from"./GeneralForm.6b452c3e.js";import{_ as p}from"./TechniqueChips.5e972795.js";import{_ as m}from"./InfoViewer.ad34ab3b.js";import{_}from"./ErrorStateAlert.3518d55f.js";import{_ as c}from"./TooltipButtonToggle.63686f71.js";import{_ as f}from"./EditPageTop.0db28cea.js";import{n as g,bQ as h,bR as d,c as r,r as n,b}from"./index.154e9cc6.js";import{_ as k,a,b as v,c as o}from"./VTabItem.9e30abd4.js";import"./TagViewer.b07ca85a.js";import"./VSelect.27a57f2b.js";import"./index.27090f0f.js";import"./DateTimeDisplay.97700a4a.js";import"./moment.9709ab41.js";import"./VTooltip.b258437e.js";import"./TooltipButton.6022e185.js";import"./index.e9f2ede5.js";import"./ansi_up.bcd3942b.js";import"./download-stager.85a6b476.js";import"./download-api.dfe5301b.js";import"./VPagination.90d5be16.js";import"./VDataTable.71ce8bb9.js";import"./VSwitch.4adac3f4.js";import"./ExpansionPanelFilter.5838fe52.js";import"./VExpansionPanelHeader.d8fbc23c.js";import"./ExpansionPanelSearch.7dcac59a.js";import"./AdvancedTable.65916e9e.js";import"./VExpansionPanels.1f915cd7.js";import"./ListPageTop.dad49f81.js";import"./VBreadcrumbs.a2278375.js";import"./tag-api.5e19879c.js";import"./index.41ea8dd2.js";const x={name:"PluginEdit",components:{InfoViewer:m,GeneralForm:u,TechniqueChips:p,EditPageTop:f,PluginTasksList:l,TooltipButtonToggle:c,ErrorStateAlert:_},data(){return{reset:!0,loading:!1,isRefreshTasks:!1,form:{},plugin:{options:{}},errorState:!1}},computed:{breads(){return[{text:"Plugins",disabled:!1,to:"/plugins",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/plugins/edit"}]},breadcrumbName(){return this.plugin.name?this.plugin.name:this.id?this.id:""},pluginInfo(){return Object.keys(this.plugin).length<1?{}:{authors:this.plugin.authors,description:this.plugin.description,comments:this.plugin.comments}},pluginOptions(){const{options:e}=this.plugin;return e||{}},id(){return this.$route.params.id},tab:{set(e){this.$router.replace({query:{...this.$route.query,tab:e}})},get(){return this.$route.query.tab||"interact"}}},mounted(){this.getPlugin(this.id)},methods:{async submit(){if(!(this.loading||!this.$refs.generalform.$refs.form.validate())){this.loading=!0;try{const e=await h(this.plugin.name,this.form);this.$snack.success(`${e.detail}`)}catch(e){this.$snack.error(`Error: ${e}`)}this.loading=!1}},getPlugin(e){d(e).then(t=>{this.reset=!1,this.plugin=t,setTimeout(()=>{this.reset=!0},500)}).catch(()=>{this.errorState=!0})}}};var y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"p4"},[s("portal",{attrs:{to:"app-bar-extension"}},[s("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[s(k,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(i){t.tab=i},expression:"tab"}},[s(a,{key:"interact",attrs:{href:"#interact"}},[t._v(" Interact "),s(r,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-terminal ")])],1),s(a,{key:"tasks",attrs:{href:"#tasks"}},[t._v(" Tasks "),s(r,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-sticky-note ")])],1)],1)],1)]),s(f,{attrs:{breads:t.breads,"show-submit":!1,"show-copy":!1,"show-delete":!1,"submit-loading":t.loading},on:{submit:t.submit}},[s("template",{slot:"extra-stuff"},[s(c,{attrs:{icon:"fa-redo","button-text":t.isRefreshTasks?"On":"Off",text:"Auto-refresh tasks"},model:{value:t.isRefreshTasks,callback:function(i){t.isRefreshTasks=i},expression:"isRefreshTasks"}})],1)],2),t.errorState?s(_,{attrs:{"resource-id":t.id,"resource-type":"plugin"}}):s(v,{staticClass:"scrollable-pane",model:{value:t.tab,callback:function(i){t.tab=i},expression:"tab"}},[s(o,{key:"interact",attrs:{value:"interact",transition:!1,"reverse-transition":!1}},[s("h4",{staticClass:"pl-4 pb-4"},[t._v(" Execute Plugin ")]),s(n,{staticStyle:{padding:"10px"}},[s(m,{staticClass:"info-viewer",attrs:{info:t.pluginInfo}}),s(p,{attrs:{techniques:t.plugin.TechniqueChips}}),t.reset?s(u,{ref:"generalform",attrs:{options:t.plugin.options},model:{value:t.form,callback:function(i){t.form=i},expression:"form"}}):t._e(),s(b,{attrs:{loading:t.loading,color:"primary"},on:{click:t.submit}},[t._v(" Submit ")])],1)],1),s(o,{key:"tasks",attrs:{value:"tasks",transition:!1,"reverse-transition":!1}},[s(n,{attrs:{flat:""}},[s(l,{attrs:{plugin:t.plugin,"refresh-tasks":t.isRefreshTasks}})],1)],1)],1)],1)},T=[],P=g(x,y,T,!1,null,null,null,null);const it=P.exports;export{it as default};
