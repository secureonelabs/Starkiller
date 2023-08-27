import{_ as c}from"./DateTimeDisplay.97700a4a.js";import{_ as u}from"./ListPageTop.dad49f81.js";import{h as f}from"./moment.9709ab41.js";import{m as C,e as D,T as E,f as M,C as A,g as O,h as m,c as r,i as p,n as d,j as R,b as v,k as b,l as n,V as l,o as y,p as N,u as X,q as V,r as _}from"./index.154e9cc6.js";import{_ as $}from"./VDataTable.71ce8bb9.js";import{_ as k}from"./VSelect.27a57f2b.js";import{_ as x}from"./TagViewer.b07ca85a.js";import{T as q}from"./index.41ea8dd2.js";import{_ as T}from"./ExpansionPanelFilter.5838fe52.js";import{_ as w}from"./AdvancedTable.65916e9e.js";import{g as F}from"./tag-api.5e19879c.js";import{_ as Y,a as h,b as z,c as g}from"./VTabItem.9e30abd4.js";import"./VTooltip.b258437e.js";import"./index.27090f0f.js";import"./VBreadcrumbs.a2278375.js";import"./VExpansionPanelHeader.d8fbc23c.js";import"./VExpansionPanels.1f915cd7.js";const H=C(A,M(["left","bottom"]),E,D,q).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":this.icon!=null,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(s){return`calc(100% - ${O(s||this.offset)})`},genBadge(){const s=this.$vuetify.lang,e=this.$attrs["aria-label"]||s.t(this.label),t=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),a=this.$createElement("span",t,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[a]):a},genBadgeContent(){if(this.dot)return;const s=m(this,"badge");if(s)return s;if(this.content)return String(this.content);if(this.icon)return this.$createElement(r,this.icon)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(s){const e=[this.genBadgeWrapper()],t=[m(this)],{"aria-atomic":a,"aria-label":i,"aria-live":o,role:le,title:oe,...B}=this.$attrs;return this.inline&&this.left?t.unshift(e):t.push(e),s("span",{staticClass:"v-badge",attrs:B,class:this.classes},t)}});const I={name:"MalleableProfiles",components:{DateTimeDisplay:c,ListPageTop:u},props:{active:{type:Boolean,default:!0}},data(){return{breads:[{text:"Listeners",disabled:!0,href:"/listeners"},{text:"Malleable Profiles",disabled:!0,href:"/malleable-profiles"}],headers:[{text:"Name",value:"name"},{text:"Category",value:"category"},{text:"Updated At",value:"updated_at"},{text:"Actions",value:"actions",sortable:!1}],sortBy:"name",sortDesc:!1,moment:f,filter:"",selected:[]}},computed:{...p({malleableProfiles:s=>s.malleable.malleableProfiles}),showDelete(){return this.selected.length>0}},mounted(){this.getMalleableProfiles()},methods:{getMalleableProfiles(){this.$store.dispatch("malleable/getMalleableProfiles")},create(){this.$router.push({name:"malleableProfileNew"})},view(s){this.$router.push({name:"malleableProfileEdit",params:{id:s.id}})},async deleteMalleableProfile(s){await this.$root.$confirm("Delete",`Are you sure you want to delete profile ${s.name}?`,{color:"red"})&&this.$store.dispatch("malleable/deleteMalleableProfile",s.id)},async deleteMalleableProfiles(){await this.$root.$confirm("Delete",`Are you sure you want to delete ${this.selected.length} profiles?`,{color:"red"})&&(this.selected.forEach(s=>{this.$store.dispatch("malleable/deleteMalleableProfile",s.id)}),this.selected=[])}}};var U=function(){var e=this,t=e._self._c;return t("div",[e.active?t(u,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"show-delete":e.showDelete},on:{create:e.create,delete:e.deleteMalleableProfiles,refresh:e.getMalleableProfiles}},[t("template",{slot:"extra-stuff"},[t(R,{staticStyle:{"max-width":"250px","padding-top":"25px"},attrs:{"append-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})],1)],2):e._e(),t($,{attrs:{headers:e.headers,items:e.malleableProfiles,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"name",search:e.filter,dense:"","show-select":"","sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(a){e.sortBy=a},"update:sort-by":function(a){e.sortBy=a},"update:sortDesc":function(a){e.sortDesc=a},"update:sort-desc":function(a){e.sortDesc=a}},scopedSlots:e._u([{key:"item.name",fn:function({item:a}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"malleableProfileEdit",params:{id:a.id}}}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.updated_at",fn:function({item:a}){return[t(c,{attrs:{timestamp:a.updated_at}})]}},{key:"item.actions",fn:function({item:a}){return[t(k,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:o}){return[t(v,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",o,!1),i),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(b,{staticClass:"ml-2 mr-2"},[t(n,{key:"view",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"malleableProfileEdit",params:{id:a.id}}}},[t(l,[t(r,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),t(n,{key:"copy",attrs:{to:{name:"malleableProfileNew",params:{copy:!0,id:a.id}},link:""}},[t(l,[t(r,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),t(y,{staticClass:"pb-4"}),t(n,{key:"delete",attrs:{link:""},on:{click:function(i){return e.deleteMalleableProfile(a)}}},[t(l,[t(r,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},W=[],j=d(I,U,W,!1,null,null,null,null);const L=j.exports;const G={name:"ListenersTable",components:{DateTimeDisplay:c,TagViewer:x},props:{input:{type:Array,default:()=>[]},selectedTags:{type:Array,default:()=>[]}},data(){return{moment:f,headers:[{text:"",align:"start",sortable:!1,width:"5px",value:"enabled"},{text:"Name",value:"name"},{text:"Template",value:"template"},{text:"Host",value:"options.Host"},{text:"Port",value:"options.Port"},{text:"Created At",value:"created_at"},{text:"Tags",value:"tags",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],selected:[]}},computed:{...p({listeners:s=>s.listener.listeners,listenersStatus:s=>s.listener.status}),sortedListeners(){let s=this.listeners.slice();return this.selectedTags.length===0||(s=s.filter(e=>e.tags.map(a=>`${a.name}:${a.value}`).some(a=>this.selectedTags.includes(a)))),s}},watch:{selectedTags(){this.getListeners()},selected(s){this.$emit("input",s)}},mounted(){this.getListeners()},methods:{deleteTag(s,e){N(s.id,e.id).then(()=>{s.tags=s.tags.filter(t=>t.id!==e.id),this.$emit("refresh-tags")}).catch(t=>this.$snack.error(`Error: ${t}`))},updateTag(s,e){X(s.id,e).then(t=>{const a=s.tags.findIndex(i=>i.id===t.id);s.tags.splice(a,1,t),this.$emit("refresh-tags"),this.$snack.success("Tag updated")}).catch(t=>this.$snack.error(`Error: ${t}`))},addTag(s,e){V(s.id,e).then(t=>{s.tags.push(t),this.$emit("refresh-tags")}).catch(t=>this.$snack.error(`Error: ${t}`))},async killListener(s){this.$emit("kill-listener",s)},getListeners(){this.$store.dispatch("listener/getListeners")}}};var J=function(){var e=this,t=e._self._c;return t("div",[t($,{attrs:{loading:e.listenersStatus==="loading",headers:e.headers,items:e.sortedListeners,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.enabled",fn:function({item:a}){return[t(H,{attrs:{dot:"",color:a.enabled===!0?"green":"red"}})]}},{key:"item.name",fn:function({item:a}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:a.id}}}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.created_at",fn:function({item:a}){return[t(c,{attrs:{timestamp:a.created_at}})]}},{key:"item.tags",fn:function({item:a}){return[t(x,{attrs:{tags:a.tags},on:{"update-tag":function(i){return e.updateTag(a,...arguments)},"delete-tag":function(i){return e.deleteTag(a,...arguments)},"new-tag":function(i){return e.addTag(a,...arguments)}}})]}},{key:"item.actions",fn:function({item:a}){return[t(k,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:o}){return[t(v,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",o,!1),i),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(b,{staticClass:"ml-2 mr-2"},[t(n,{key:"view",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:a.id}}}},[t(l,[t(r,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),t(n,{key:"copy",attrs:{to:{name:"listenerNew",params:{copy:!0,id:a.id}},link:""}},[t(l,[t(r,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),t(y,{staticClass:"pb-4"}),t(n,{key:"delete",attrs:{link:""},on:{click:function(i){return e.killListener(a)}}},[t(l,[t(r,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},K=[],Q=d(G,J,K,!1,null,null,null,null);const P=Q.exports;const Z={name:"Listeners",components:{AdvancedTable:w,ListenersTable:P,ExpansionPanelFilter:T,ListPageTop:u},props:{active:{type:Boolean,default:!0}},data(){return{moment:f,breads:[{text:"Listeners",disabled:!0,href:"/listeners"},{text:"List",disabled:!0,href:"/listeners?tab=list-view"}],selected:[],tags:[],selectedTags:[]}},computed:{...p({listeners:s=>s.listener.listeners,listenersStatus:s=>s.listener.status}),showDelete(){return this.selected.length>0}},mounted(){this.getListeners(),this.getTags()},methods:{async getTags(){const s=await F({page:1,limit:-1,sources:"listener"}),e=[];s.records.forEach(t=>{e.find(i=>i.name===t.name&&i.value===t.value)||e.push(t)}),this.tags=e},create(){this.$router.push({name:"listenerNew"})},async killListener(s){await this.$root.$confirm("Delete",`Are you sure you want to kill listener ${s.name}?`,{color:"red"})&&this.$store.dispatch("listener/killListener",s.id)},async killListeners(){await this.$root.$confirm("Delete",`Are you sure you want to kill ${this.selected.length} listeners?`,{color:"red"})&&(this.selected.forEach(s=>{this.$store.dispatch("listener/killListener",s.id)}),this.selected=[])},getListeners(){this.$refs.listenersTable.getListeners()}}};var ee=function(){var e=this,t=e._self._c;return t("div",{},[e.active?t(u,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"refresh-loading":e.listenersStatus==="loading","show-delete":e.showDelete},on:{create:e.create,delete:e.killListeners,refresh:e.getListeners}}):e._e(),t(w,{scopedSlots:e._u([{key:"filters",fn:function(){return[t(T,{attrs:{title:"Tags",label:"label","item-key":"id","item-value":"label",items:e.tags,"empty-default":!0},model:{value:e.selectedTags,callback:function(a){e.selectedTags=a},expression:"selectedTags"}})]},proxy:!0},{key:"table",fn:function(){return[t(P,{ref:"listenersTable",attrs:{"selected-tags":e.selectedTags},on:{"kill-listener":e.killListener},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})]},proxy:!0}])})],1)},te=[],se=d(Z,ee,te,!1,null,null,null,null);const S=se.exports;const ae={name:"Listeners",components:{ListenersList:S,MalleableProfilesList:L},data(){return{}},computed:{tab:{set(s){this.$router.replace({query:{...this.$route.query,tab:s}})},get(){return this.$route.query.tab||"list-view"}}}};var ie=function(){var e=this,t=e._self._c;return t("div",[t("portal",{attrs:{to:"app-bar-extension"}},[t("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[t(Y,{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t(h,{key:"list-view",attrs:{href:"#list-view"}},[e._v(" List "),t(r,{staticClass:"ml-1",attrs:{"x-small":""}},[e._v(" fa-list ")])],1),t(h,{key:"malleable-profiles",attrs:{href:"#malleable-profiles"}},[e._v(" Malleable Profiles "),t(r,{staticClass:"ml-1",attrs:{"x-small":""}},[e._v(" fa-random ")])],1)],1)],1)]),t(z,{model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t(g,{key:"list-view",attrs:{value:"list-view",transition:!1,"reverse-transition":!1}},[t(_,{attrs:{flat:""}},[t(S,{attrs:{active:e.tab==="list-view"}})],1)],1),t(g,{key:"malleable-profiles",attrs:{value:"malleable-profiles",transition:!1,"reverse-transition":!1}},[t(_,{attrs:{flat:""}},[t(L,{attrs:{active:e.tab==="malleable-profiles"}})],1)],1)],1)],1)},re=[],ne=d(ae,ie,re,!1,null,null,null,null);const Le=ne.exports;export{Le as default};
