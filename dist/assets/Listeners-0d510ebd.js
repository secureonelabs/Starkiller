import{_ as o}from"./DateTimeDisplay-93237fff.js";import{_ as c}from"./ListPageTop-dbf4cae7.js";import{h as _}from"./moment-fbc5633a.js";import{u as S}from"./malleable-module-0a520ea6.js";import{n as u,j as D,k as g,a as h,b as r,d as v,e as n,f as i,i as b,l as y,m as M,o as C,p as E,q as A,c as m}from"./index-9016587b.js";import{_ as k}from"./VDataTable-297b0ab1.js";import{_ as x}from"./TagViewer-172a3cb9.js";import{_ as $}from"./ExpansionPanelFilter-2df45fe0.js";import{_ as w}from"./AdvancedTable-01edc8c1.js";import{g as B}from"./tag-api-51c8dbee.js";import{_ as N,a as f,b as F,c as p}from"./VTabItem-dd959ba5.js";import"./VTooltip-7de50c7b.js";import"./VItemGroup-d2065f4a.js";import"./malleable-api-67eb6033.js";import"./VSelect-bfdecc0a.js";import"./VExpansionPanelHeader-65ae70f8.js";import"./VExpansionPanels-2375d5f1.js";const q={name:"MalleableProfiles",components:{DateTimeDisplay:o,ListPageTop:c},props:{active:{type:Boolean,default:!0}},data(){return{breads:[{text:"Listeners",disabled:!0,href:"/listeners"},{text:"Malleable Profiles",disabled:!0,href:"/malleable-profiles"}],headers:[{text:"Name",value:"name"},{text:"Category",value:"category"},{text:"Updated At",value:"updated_at"},{text:"Actions",value:"actions",sortable:!1}],sortBy:"name",sortDesc:!1,moment:_,filter:"",selected:[]}},computed:{malleableProfileStore(){return S()},malleableProfiles(){return this.malleableProfileStore.malleableProfiles},showDelete(){return this.selected.length>0}},mounted(){this.getMalleableProfiles()},methods:{getMalleableProfiles(){this.malleableProfileStore.getMalleableProfiles()},create(){this.$router.push({name:"malleableProfileNew"})},view(a){this.$router.push({name:"malleableProfileEdit",params:{id:a.id}})},async deleteMalleableProfile(a){await this.$root.$confirm("Delete",`Are you sure you want to delete profile ${a.name}?`,{color:"red"})&&await this.malleableProfileStore.deleteMalleableProfile(a.id)},async deleteMalleableProfiles(){await this.$root.$confirm("Delete",`Are you sure you want to delete ${this.selected.length} profiles?`,{color:"red"})&&(this.selected.forEach(a=>{this.malleableProfileStore.deleteMalleableProfile(a.id)}),this.selected=[])}}};var R=function(){var e=this,t=e._self._c;return t("div",[e.active?t(c,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"show-delete":e.showDelete},on:{create:e.create,delete:e.deleteMalleableProfiles,refresh:e.getMalleableProfiles}},[t("template",{slot:"extra-stuff"},[t(D,{staticStyle:{"max-width":"250px","padding-top":"25px"},attrs:{"append-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:e.filter,callback:function(s){e.filter=s},expression:"filter"}})],1)],2):e._e(),t(k,{attrs:{headers:e.headers,items:e.malleableProfiles,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"name",search:e.filter,dense:"","show-select":"","sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(s){e.sortBy=s},"update:sort-by":function(s){e.sortBy=s},"update:sortDesc":function(s){e.sortDesc=s},"update:sort-desc":function(s){e.sortDesc=s}},scopedSlots:e._u([{key:"item.name",fn:function({item:s}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"malleableProfileEdit",params:{id:s.id}}}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.updated_at",fn:function({item:s}){return[t(o,{attrs:{timestamp:s.updated_at}})]}},{key:"item.actions",fn:function({item:s}){return[t(g,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:l,attrs:d}){return[t(h,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",d,!1),l),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(v,{staticClass:"ml-2 mr-2"},[t(n,{key:"view",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"malleableProfileEdit",params:{id:s.id}}}},[t(i,[t(r,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),t(n,{key:"copy",attrs:{to:{name:"malleableProfileNew",params:{copy:!0,id:s.id}},link:""}},[t(i,[t(r,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),t(b,{staticClass:"pb-4"}),t(n,{key:"delete",attrs:{link:""},on:{click:function(l){return e.deleteMalleableProfile(s)}}},[t(i,[t(r,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})],1)},V=[],H=u(q,R,V,!1,null,null,null,null);const T=H.exports;const I={name:"ListenersTable",components:{DateTimeDisplay:o,TagViewer:x},props:{input:{type:Array,default:()=>[]},selectedTags:{type:Array,default:()=>[]}},data(){return{moment:_,headers:[{text:"",align:"start",sortable:!1,width:"5px",value:"enabled"},{text:"Name",value:"name"},{text:"Template",value:"template"},{text:"Host",value:"options.Host"},{text:"Port",value:"options.Port"},{text:"Created At",value:"created_at"},{text:"Tags",value:"tags",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],selected:[]}},computed:{listenerStore(){return y()},listenersStatus(){return this.listenerStore.status},sortedListeners(){let a=this.listenerStore.listeners.slice();return this.selectedTags.length===0||(a=a.filter(e=>e.tags.map(s=>`${s.name}:${s.value}`).some(s=>this.selectedTags.includes(s)))),a}},watch:{selectedTags(){this.getListeners()},selected(a){this.$emit("input",a)}},mounted(){this.getListeners()},methods:{deleteTag(a,e){M(a.id,e.id).then(()=>{a.tags=a.tags.filter(t=>t.id!==e.id),this.$emit("refresh-tags")}).catch(t=>this.$snack.error(`Error: ${t}`))},updateTag(a,e){C(a.id,e).then(t=>{const s=a.tags.findIndex(l=>l.id===t.id);a.tags.splice(s,1,t),this.$emit("refresh-tags"),this.$snack.success("Tag updated")}).catch(t=>this.$snack.error(`Error: ${t}`))},addTag(a,e){E(a.id,e).then(t=>{a.tags.push(t),this.$emit("refresh-tags")}).catch(t=>this.$snack.error(`Error: ${t}`))},async killListener(a){this.$emit("kill-listener",a)},getListeners(){this.listenerStore.getListeners()}}};var O=function(){var e=this,t=e._self._c;return t("div",[t(k,{attrs:{loading:e.listenersStatus==="loading",headers:e.headers,items:e.sortedListeners,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.enabled",fn:function({item:s}){return[t(A,{attrs:{dot:"",color:s.enabled===!0?"green":"red"}})]}},{key:"item.name",fn:function({item:s}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:s.id}}}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.created_at",fn:function({item:s}){return[t(o,{attrs:{timestamp:s.created_at}})]}},{key:"item.tags",fn:function({item:s}){return[t(x,{attrs:{tags:s.tags},on:{"update-tag":function(l){return e.updateTag(s,...arguments)},"delete-tag":function(l){return e.deleteTag(s,...arguments)},"new-tag":function(l){return e.addTag(s,...arguments)}}})]}},{key:"item.actions",fn:function({item:s}){return[t(g,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:l,attrs:d}){return[t(h,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",d,!1),l),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(v,{staticClass:"ml-2 mr-2"},[t(n,{key:"view",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:s.id}}}},[t(i,[t(r,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),t(n,{key:"copy",attrs:{to:{name:"listenerNew",params:{copy:!0,id:s.id}},link:""}},[t(i,[t(r,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),t(b,{staticClass:"pb-4"}),t(n,{key:"delete",attrs:{link:""},on:{click:function(l){return e.killListener(s)}}},[t(i,[t(r,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})],1)},j=[],z=u(I,O,j,!1,null,null,null,null);const L=z.exports;const U={name:"Listeners",components:{AdvancedTable:w,ListenersTable:L,ExpansionPanelFilter:$,ListPageTop:c},props:{active:{type:Boolean,default:!0}},data(){return{moment:_,breads:[{text:"Listeners",disabled:!0,href:"/listeners"},{text:"List",disabled:!0,href:"/listeners?tab=list-view"}],selected:[],tags:[],selectedTags:[]}},computed:{listenerStore(){return y()},listenersStatus(){return this.listenerStore.status},showDelete(){return this.selected.length>0}},mounted(){this.getListeners(),this.getTags()},methods:{async getTags(){const a=await B({page:1,limit:-1,sources:"listener"}),e=[];a.records.forEach(t=>{e.find(l=>l.name===t.name&&l.value===t.value)||e.push(t)}),this.tags=e},create(){this.$router.push({name:"listenerNew"})},async killListener(a){await this.$root.$confirm("Delete",`Are you sure you want to kill listener ${a.name}?`,{color:"red"})&&await this.listenerStore.killListener(a.id)},async killListeners(){await this.$root.$confirm("Delete",`Are you sure you want to kill ${this.selected.length} listeners?`,{color:"red"})&&(this.selected.forEach(a=>{this.listenerStore.killListener(a.id)}),this.selected=[])},getListeners(){this.$refs.listenersTable.getListeners()}}};var G=function(){var e=this,t=e._self._c;return t("div",{},[e.active?t(c,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"refresh-loading":e.listenersStatus==="loading","show-delete":e.showDelete},on:{create:e.create,delete:e.killListeners,refresh:e.getListeners}}):e._e(),t(w,{scopedSlots:e._u([{key:"filters",fn:function(){return[t($,{attrs:{title:"Tags",label:"label","item-key":"id","item-value":"label",items:e.tags,"empty-default":!0},model:{value:e.selectedTags,callback:function(s){e.selectedTags=s},expression:"selectedTags"}})]},proxy:!0},{key:"table",fn:function(){return[t(L,{ref:"listenersTable",attrs:{"selected-tags":e.selectedTags},on:{"kill-listener":e.killListener},model:{value:e.selected,callback:function(s){e.selected=s},expression:"selected"}})]},proxy:!0}])})],1)},J=[],K=u(U,G,J,!1,null,null,null,null);const P=K.exports;const Q={name:"Listeners",components:{ListenersList:P,MalleableProfilesList:T},data(){return{}},computed:{tab:{set(a){this.$router.replace({query:{...this.$route.query,tab:a}})},get(){return this.$route.query.tab||"list-view"}}}};var W=function(){var e=this,t=e._self._c;return t("div",[t("portal",{attrs:{to:"app-bar-extension"}},[t("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[t(N,{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},[t(f,{key:"list-view",attrs:{href:"#list-view"}},[e._v(" List "),t(r,{staticClass:"ml-1",attrs:{"x-small":""}},[e._v(" fa-list ")])],1),t(f,{key:"malleable-profiles",attrs:{href:"#malleable-profiles"}},[e._v(" Malleable Profiles "),t(r,{staticClass:"ml-1",attrs:{"x-small":""}},[e._v(" fa-random ")])],1)],1)],1)]),t(F,{model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},[t(p,{key:"list-view",attrs:{value:"list-view",transition:!1,"reverse-transition":!1}},[t(m,{attrs:{flat:""}},[t(P,{attrs:{active:e.tab==="list-view"}})],1)],1),t(p,{key:"malleable-profiles",attrs:{value:"malleable-profiles",transition:!1,"reverse-transition":!1}},[t(m,{attrs:{flat:""}},[t(T,{attrs:{active:e.tab==="malleable-profiles"}})],1)],1)],1)],1)},X=[],Y=u(Q,W,X,!1,null,null,null,null);const ge=Y.exports;export{ge as default};
