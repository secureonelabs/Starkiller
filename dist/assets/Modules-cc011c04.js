import{_ as i}from"./TechniqueChips-64920cb0.js";import{u as p}from"./module-module-609e1d45.js";import{n as u}from"./index-9016587b.js";import{b as r}from"./VSelect-bfdecc0a.js";import{_ as f}from"./VDataTable-297b0ab1.js";import{_ as o}from"./ExpansionPanelFilter-2df45fe0.js";import{_ as d}from"./ExpansionPanelSearch-5a8bc749.js";import{_ as c}from"./AdvancedTable-01edc8c1.js";import{_}from"./ListPageTop-dbf4cae7.js";import{_ as g}from"./VSwitch-d07dfa02.js";import"./module-api-cf3f9fcc.js";import"./VExpansionPanelHeader-65ae70f8.js";import"./VExpansionPanels-2375d5f1.js";import"./VItemGroup-d2065f4a.js";import"./VTooltip-7de50c7b.js";const h={name:"ModulesTable",components:{TechniqueChips:i},props:{showIds:{type:Boolean,default:!1},search:{type:String,default:""},needsAdmin:{type:Array,default:()=>[]},opsecSafe:{type:Array,default:()=>[]},background:{type:Array,default:()=>[]},selectedLanguages:{type:Array,default:()=>[]}},data(){return{}},computed:{moduleStore(){return p()},modules(){return this.moduleStore.modules},languagesUnique(){return[...new Set(this.modules.map(s=>s.language.toLowerCase()))]},headers(){const s=[{text:"Name",value:"name"},{text:"Language",value:"language",sort:this.sortLanguage},{text:"Needs Admin",value:"needs_admin",width:"75px"},{text:"Opsec Safe",value:"opsec_safe",width:"75px"},{text:"Background",value:"background",width:"75px"},{text:"Techniques",value:"techniques",width:"300px",sortable:!1}];return this.showIds&&s.unshift({text:"id",align:"start",value:"id"}),s},filteredModules(){let s=this.modules;return this.search&&(s=s.filter(e=>{const n=this.search.toLowerCase();return e.name.toLowerCase().includes(n)||e.id.toLowerCase().includes(n)||e.language.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)})),s=s.filter(e=>this.needsAdmin.includes(e.needs_admin)).filter(e=>this.opsecSafe.includes(e.opsec_safe)).filter(e=>this.background.includes(e.background)).filter(e=>this.selectedLanguages.includes(e.language.toLowerCase())),s}},watch:{languagesUnique(s){this.$emit("languages-changed",s)}},mounted(){this.moduleStore.getModules()},methods:{sortLanguage(s,e){return s==null?-1:e==null?1:s.toLowerCase().localeCompare(e.toLowerCase())}}};var v=function(){var e=this,n=e._self._c;return n("div",[n(f,{attrs:{headers:e.headers,items:e.filteredModules,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"id","show-expand":"",dense:""},scopedSlots:e._u([{key:"item.id",fn:function({item:t}){return[n("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"moduleExecute",params:{id:t.id}}}},[e._v(" "+e._s(t.id)+" ")])]}},{key:"item.name",fn:function({item:t}){return[n("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"moduleExecute",params:{id:t.id}}}},[e._v(" "+e._s(t.name)+" ")])]}},{key:"item.techniques",fn:function({item:t}){return[n(i,{attrs:{techniques:t.techniques,"show-title":!1}})]}},{key:"item.needs_admin",fn:function({item:t}){return[n(r,{attrs:{disabled:""},model:{value:t.needs_admin,callback:function(a){e.$set(t,"needs_admin",a)},expression:"item.needs_admin"}})]}},{key:"item.opsec_safe",fn:function({item:t}){return[n(r,{attrs:{disabled:""},model:{value:t.opsec_safe,callback:function(a){e.$set(t,"opsec_safe",a)},expression:"item.opsec_safe"}})]}},{key:"item.background",fn:function({item:t}){return[n(r,{attrs:{disabled:""},model:{value:t.background,callback:function(a){e.$set(t,"background",a)},expression:"item.background"}})]}},{key:"expanded-item",fn:function({headers:t,item:a}){return[n("td",{attrs:{colspan:t.length}},[n("div",{staticClass:"d-flex flex-column"},[n("b",[e._v("Description:")]),e._v(" "+e._s(a.description)+" ")])])]}}])})],1)},b=[],x=u(h,v,b,!1,null,null,null,null);const m=x.exports;const k={name:"ExpansionPanelBoolean",components:{ExpansionPanelFilter:o},props:{value:{type:Array,default:()=>[]},title:{type:String,required:!0},emptyDefault:{type:Boolean,default:!1}},data(){return{selectedItems:[],items:[{value:!0,label:"True"},{value:!1,label:"False"}]}},watch:{selectedItems:{handler(s){this.$emit("input",s)}}}};var y=function(){var e=this,n=e._self._c;return n(o,{attrs:{title:e.title,label:"label","item-key":"value","item-value":"value",items:e.items,"empty-default":e.emptyDefault},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})},w=[],S=u(k,y,w,!1,null,null,null,null);const l=S.exports;const L={name:"Modules",components:{ExpansionPanelSearch:d,ExpansionPanelBoolean:l,ExpansionPanelFilter:o,AdvancedTable:c,ModulesTable:m,ListPageTop:_},data(){return{search:"",breads:[{text:"Modules",disabled:!0,href:"/modules"}],showIds:!1,needsAdmin:[],opsecSafe:[],background:[],languages:[],languageOptions:[]}},methods:{languagesChanged(s){this.languageOptions=s.map(e=>({label:e,value:e}))}}};var A=function(){var e=this,n=e._self._c;return n("div",[n(_,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!1,"show-delete":!1}}),n(c,{scopedSlots:e._u([{key:"filters",fn:function(){return[n(g,{attrs:{label:"Show IDs"},model:{value:e.showIds,callback:function(t){e.showIds=t},expression:"showIds"}}),n(d,{attrs:{title:"Search",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n(l,{attrs:{title:"Needs Admin"},model:{value:e.needsAdmin,callback:function(t){e.needsAdmin=t},expression:"needsAdmin"}}),n(l,{attrs:{title:"Opsec Safe"},model:{value:e.opsecSafe,callback:function(t){e.opsecSafe=t},expression:"opsecSafe"}}),n(l,{attrs:{title:"Background"},model:{value:e.background,callback:function(t){e.background=t},expression:"background"}}),n(o,{attrs:{title:"Language",label:"label","item-key":"value","item-value":"value",items:e.languageOptions},model:{value:e.languages,callback:function(t){e.languages=t},expression:"languages"}})]},proxy:!0},{key:"table",fn:function(){return[n(m,{attrs:{search:e.search,"show-ids":e.showIds,"needs-admin":e.needsAdmin,"opsec-safe":e.opsecSafe,background:e.background,"selected-languages":e.languages},on:{"languages-changed":e.languagesChanged}})]},proxy:!0}])})],1)},C=[],$=u(L,A,C,!1,null,null,null,null);const G=$.exports;export{G as default};
