import{_ as o,a as u}from"./GeneralForm-103beb0c.js";import{_ as n}from"./InfoViewer-3b455e14.js";import{_ as l,b as m,c as i}from"./ErrorStateAlert-e3f57045.js";import{_ as a}from"./TooltipButton-69f903f0.js";import{_ as d}from"./EditPageTop-1e6d1825.js";import{n as c,w as p,x as g,c as h,j as _}from"./index-9016587b.js";import{C as f,u as y,g as w,a as S,c as $,b}from"./stager-module-96fc4535.js";import{_ as T}from"./VSelect-bfdecc0a.js";import"./VSwitch-d07dfa02.js";import"./bypass-module-ef16d189.js";import"./bypass-api-ce405bfe.js";import"./credential-module-7cec399a.js";import"./malleable-module-0a520ea6.js";import"./malleable-api-67eb6033.js";import"./VExpansionPanels-2375d5f1.js";import"./VItemGroup-d2065f4a.js";import"./VExpansionPanelHeader-65ae70f8.js";import"./VTooltip-7de50c7b.js";const x={name:"StagerEdit",components:{InfoViewer:n,GeneralForm:o,ErrorStateAlert:l,EditPageTop:d,TooltipButton:a},mixins:[f],data(){return{stager:{options:{}},stagerTemplate:{options:{}},selectedTemplate:"",form:{},reset:!0,loading:!1,formPriorities:["Listener","Language"],errorState:!1,initialLoad:!1}},computed:{stagerStore(){return y()},stagerTemplateIds(){return this.stagerStore.templateIds},isNew(){return this.$route.name==="stagerNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"View"},canEdit(){return!0},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"stagerNew",params:{copy:!0,id:this.id}}:{}},stagerInfo(){if(!this.stagerTemplate)return{};const t=this.stagerTemplate;return{authors:t.authors,description:t.description,comments:t.comments}},stagerOptions(){if(!this.isNew||this.isCopy){const e={};return Object.keys(this.stager.options).forEach(r=>{e[r]={...this.stagerTemplate.options[r]},e[r].value=this.stager.options[r]}),e}const{options:t}=this.stagerTemplate;return t?(this.$route.query.listener&&(t.Listener.value=this.$route.query.listener),t):{}},breads(){return[{text:"Stagers",disabled:!1,to:"/stagers",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/stagers-edit"}]},breadcrumbName(){return this.isCopy?"New":this.stager.name?this.stager.name:this.id?this.id:"New"}},watch:{selectedTemplate:{async handler(t){const e=await w(t).catch(r=>this.$snack.error(`Error: ${r}`));e&&(this.reset=!1,this.stagerTemplate=e,await this.$nextTick(),this.reset=!0,this.initialLoad=!0)}},id(t){t&&this.getStager(t)}},mounted(){this.stagerStore.getStagerTemplates(),(!this.isNew||this.isCopy)&&this.getStager(this.$route.params.id),this.$route.query.template&&(this.selectedTemplate=this.$route.query.template)},methods:{submit(){this.loading||!this.$refs.generalform.$refs.form.validate()||(this.loading=!0,this.id>0?S(this.id,{name:this.stager.name,options:this.form}).then(()=>{this.$snack.success("Stager updated"),this.loading=!1}).then(()=>{this.getStager(this.id)}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}):$(this.selectedTemplate,this.stager.name||this.randomName(),this.form).then(({id:t})=>{this.$snack.success("Stager created"),this.loading=!1,this.$router.push({name:"stagerEdit",params:{id:t}})}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}))},async deleteStager(){if(await this.$root.$confirm("Delete",`Are you sure you want to delete stager ${this.form.StarkillerName}?`,{color:"red"}))try{await this.stagerStore.deleteStager(this.id),this.$router.push({name:"stagers"})}catch(t){this.$snack.error(`Error: ${t}`)}},getStager(t){b(t).then(e=>{this.stager=e,this.selectedTemplate=e.template}).catch(()=>{this.errorState=!0})},randomName(){return(Math.random()+1).toString(36).substring(7)},isDownload(t){return t.downloads&&t.downloads.length>0},isOneLiner(t){return t.one_liner},async copy(t){const e=t.downloads.length-1;return this.copyStager(await p(t.downloads[e].id))},async download(t){const e=t.downloads.length-1;return g(t.downloads[e].id)}}};var v=function(){var e=this,r=e._self._c;return r("div",[r(d,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"disable-submit":!e.canEdit&&e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading&&e.initialLoad,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.deleteStager},scopedSlots:e._u([{key:"extra-stuff",fn:function(){return[e.id>0&&e.initialLoad&&e.isDownload(e.stager)?r(a,{attrs:{color:"success",icon:"fa-download",text:"Download"},on:{click:function(s){return e.download(e.stager)}}}):e._e(),e.id>0&&e.initialLoad&&e.isOneLiner(e.stager)?r(a,{attrs:{color:"success",icon:"fa-paperclip",text:"Copy To Clipboard"},on:{click:function(s){return e.copy(e.stager)}}}):e._e()]},proxy:!0}])}),r("div",{staticClass:"headers"},[r("h3",[e._v(e._s(e.mode)+" Stager")])]),e.errorState?r(l,{attrs:{"resource-id":e.id,"resource-type":"stager"}}):r(h,{staticStyle:{padding:"10px"}},[r(n,{staticClass:"info-viewer",attrs:{info:e.stagerInfo}}),r(u,{attrs:{items:e.stagerTemplateIds,loading:!e.reset,dense:"",outlined:"",label:"Type",readonly:!e.canEdit},model:{value:e.selectedTemplate,callback:function(s){e.selectedTemplate=s},expression:"selectedTemplate"}}),e.selectedTemplate?r(m,[r(i,{attrs:{cols:"6"}},[r(_,{attrs:{outlined:"",dense:"",label:"Name",readonly:!e.canEdit},model:{value:e.stager.name,callback:function(s){e.$set(e.stager,"name",s)},expression:"stager.name"}})],1),r(i,{attrs:{cols:"6"}},[r(T,[e._v(" A name for the stager. Leave blank for an autogenerated name. ")])],1)],1):e._e(),e.reset?r(o,{ref:"generalform",attrs:{options:e.stagerOptions,priority:e.formPriorities,readonly:!e.canEdit},model:{value:e.form,callback:function(s){e.form=s},expression:"form"}}):e._e()],1)],1)},L=[],k=c(x,v,L,!1,null,null,null,null);const J=k.exports;export{J as default};
