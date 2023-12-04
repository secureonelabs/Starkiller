import{_ as h}from"./TagViewer-172a3cb9.js";import{_}from"./DateTimeDisplay-93237fff.js";import{_ as f}from"./TooltipButton-69f903f0.js";import{n as m,ap as I,aq as w,ar as q,H as c,x as $,ae as d,as as P,an as A,a as p,at as C,b as o,k as S,d as O,e as u,f as i,a1 as D,C as g,au as B,a0 as U}from"./index-9016587b.js";import{h as T}from"./moment-fbc5633a.js";import{d as F}from"./index-1fea5c60.js";import{A as G}from"./ansi_up-67a263fc.js";import{D as k}from"./download-stager-ae353708.js";import{_ as H}from"./VPagination-6f6b6738.js";import{_ as R}from"./VDataTable-297b0ab1.js";import{_ as j}from"./VSwitch-d07dfa02.js";import{_ as l}from"./ExpansionPanelFilter-2df45fe0.js";import{_ as x}from"./ExpansionPanelSearch-5a8bc749.js";import{_ as b}from"./AdvancedTable-01edc8c1.js";import{_ as v}from"./ListPageTop-dbf4cae7.js";import{g as E}from"./tag-api-51c8dbee.js";const L={name:"AgentTasksTable",components:{DateTimeDisplay:_,TagViewer:h,TooltipButton:f},mixins:[k],props:{agent:{type:Object,required:!1,default:null},refreshTasks:{type:Boolean,default:!1},hideColumns:{type:Array,default:()=>[]},selectedAgents:{type:Array,default:()=>[]},selectedUsers:{type:Array,default:()=>[]},selectedTags:{type:Array,default:()=>[]},search:{type:String,default:""},noFilters:{type:Boolean,default:!1}},data(){return{tasks:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,loading:!1,moment:T,sortBy:"updated_at",sortDesc:!0,refreshInterval:null,expandedTasks:{},debouncedGetTasks:F(this.getTasks,500)}},computed:{headers(){return[{text:"Task ID",value:"id",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Agent",value:"agent_id",sortable:!0},{text:"Task Input",value:"input",sortable:!1},{text:"Task Name",value:"task_name",sortable:!1},{text:"User",value:"username",sortable:!1},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Tags",value:"tags",sortable:!1,width:400},{text:"Actions",value:"actions",sortable:!1}].filter(t=>!this.hideColumns.includes(t.value))}},watch:{refreshTasks:{handler(t){t?(this.debouncedGetTasks?this.debouncedGetTasks():this.getTasks(),this.refreshInterval=setInterval(()=>{this.debouncedGetTasks()},8e3)):clearInterval(this.refreshInterval)},immediate:!0},currentPage(){this.debouncedGetTasks()},agent(){this.debouncedGetTasks()},selectedAgents(){this.debouncedGetTasks()},selectedUsers(){this.debouncedGetTasks()},selectedTags(){this.debouncedGetTasks()},search(){this.debouncedGetTasks()}},async mounted(){this.debouncedGetTasks()},beforeDestroy(){clearInterval(this.refreshInterval)},methods:{stripAnsi(t){return t.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,"")},isAnsi(t){return this.stripAnsi(t)!==t},ansiToHtml(t){return new G().ansi_to_html(t)},deleteTag(t,e){I(t.agent_id,t.id,e.id).then(()=>{this.$set(t,"tags",t.tags.filter(s=>s.id!==e.id)),this.$emit("refresh-tags")}).catch(s=>this.$snack.error(`Error: ${s}`))},updateTag(t,e){w(t.agent_id,t.id,e).then(s=>{const n=t.tags.findIndex(a=>a.id===s.id);t.tags.splice(n,1,s),this.$emit("refresh-tags"),this.$snack.success("Tag updated")}).catch(s=>this.$snack.error(`Error: ${s}`))},addTag(t,e){q(t.agent_id,t.id,e).then(s=>{this.$set(t,"tags",[...t.tags,s]),this.$emit("refresh-tags")}).catch(s=>this.$snack.error(`Error: ${s}`))},truncateMessage(t){return t?t.length>30?`${t.substr(0,30)}...`:t:""},updateTaskBackgroundColor(t){t.backgroundColor==="black"?t.backgroundColor="white":t.backgroundColor="black",this.expandedTasks[t.uniqueId].backgroundColor=t.backgroundColor,c.set(this.tasks,this.tasks.indexOf(t),t)},isDownload(t){return t.downloads&&t.downloads.length>0},downloadFile(t){$(t.id)},hasOutput(t){return!!t.output},async downloadInput(t){var e;if(t.input){if(!((e=this.expandedTasks[t.uniqueId])!=null&&e.full_input)){const s=await d(t.agent_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...s}}this.downloadText(this.expandedTasks[t.uniqueId].full_input,`${t.uniqueId}-input.txt`)}},downloadOutput(t){t.output&&this.downloadText(t.output,`${t.uniqueId}-output.txt`)},async copyInput(t){var e;if(t.input){if(!((e=this.expandedTasks[t.uniqueId])!=null&&e.full_input)){const s=await d(t.agent_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...s}}try{navigator.clipboard.writeText(this.expandedTasks[t.uniqueId].full_input)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}}},copyOutput(t){if(t.output)try{navigator.clipboard.writeText(t.output)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}},imageData(t,e){var n;const s=(n=this.expandedTasks[t.uniqueId])==null?void 0:n.downloads;if(s){const a=s.find(r=>r.id===e.id);if(a)return a.image}return null},async getImagesForTask(t){var e;if(!this.expandedTasks[t.uniqueId].imagesRetrieved){const s=await d(t.agent_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...s},this.expandedTasks[t.uniqueId].imagesRetrieved=!0}for(let s=0;s<t.downloads.length;s++){const n=t.downloads[s];if(!((e=this.expandedTasks[t.uniqueId].downloads[n.id])!=null&&e.image)&&n.filename.match(/[^/]+(jpg|jpeg|png|gif)$/)){const a=await P(n.id);this.expandedTasks[t.uniqueId].downloads[s].image=a}}c.set(this.tasks,this.tasks.indexOf(t),t)},async toggleSeeFullInput(t){if(t.expandedInput)this.expandedTasks[t.uniqueId].expandedInput=!1,t.expandedInput=!1;else{const e=await d(t.agent_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...e,expandedInput:!0},t.expandedInput=!0}c.set(this.tasks,this.tasks.indexOf(t),t)},handlePageChange(){this.debouncedGetTasks()},handleOptionsChange(t){this.currentPage=t.page,this.itemsPerPage=t.itemsPerPage,t.sortBy.length>0?(this.sortBy=t.sortBy[0],this.sortDesc=t.sortDesc[0]):(this.sortBy="id",this.sortDesc=!0),this.debouncedGetTasks()},async getTasks(){if(!this.noFilters&&(this.selectedAgents.length===0||this.selectedUsers.length===0)){this.tasks=[],this.currentPage=1,this.totalPages=1,this.totalItems=0;return}this.loading=!0;let t=null;this.selectedAgents.length>0&&(t=this.selectedAgents);const e=await A(t,{page:this.currentPage,limit:this.itemsPerPage,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc",users:this.selectedUsers,tags:this.selectedTags,search:this.search});this.currentPage=e.page,this.totalPages=e.total_pages,this.totalItems=e.total,this.tasks=e.records.map(s=>(s.uniqueId=`${s.agent_id}-${s.id}`,this.expandedTasks[s.uniqueId]||(this.expandedTasks[s.uniqueId]={}),this.expandedTasks[s.uniqueId].expandedInput&&(s.expandedInput=!0),this.expandedTasks[s.uniqueId].backgroundColor=this.expandedTasks[s.uniqueId].backgroundColor||"black",s.backgroundColor=this.expandedTasks[s.uniqueId].backgroundColor,this.isAnsi(s.output||"")&&(this.expandedTasks[s.uniqueId].htmlOutput=this.ansiToHtml(s.output)),s)),this.tasks=e.records,this.loading=!1}}};var M=function(){var e=this,s=e._self._c;return s("div",[s(H,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(n){e.currentPage=n},expression:"currentPage"}}),s(R,{attrs:{headers:e.headers,items:e.tasks,"item-key":"uniqueId","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage,"show-expand":""},on:{"update:itemsPerPage":function(n){e.itemsPerPage=n},"update:items-per-page":function(n){e.itemsPerPage=n},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"expanded-item",fn:function({headers:n,item:a}){return[s("td",{attrs:{colspan:n.length}},[s("div",[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("div",[s(f,{attrs:{icon:a.expandedInput?"fa-minus":"fa-plus",text:"See Full Input","x-small":""},on:{click:function(r){return e.toggleSeeFullInput(a)}}}),a.expandedInput?s("span",[e._v("Showing full input")]):e._e()],1),s(j,{attrs:{"false-value":"white","true-value":"black",label:"Dark Background"},on:{change:function(r){return e.updateTaskBackgroundColor(a)}},model:{value:e.expandedTasks[a.uniqueId].backgroundColor,callback:function(r){e.$set(e.expandedTasks[a.uniqueId],"backgroundColor",r)},expression:"expandedTasks[item.uniqueId].backgroundColor"}})],1),s("p",[s("b",[e._v("Task Input:")])]),s("p",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e._v(" "+e._s(a.expandedInput?e.expandedTasks[a.uniqueId].full_input:a.input)+" ")]),s("p",[s("b",[e._v("Task Output:")])]),a.downloads.length>0&&a.downloads.some(r=>r.filename.match(/[^/]+(jpg|jpeg|png|gif)$/))?s("div",[s(p,{attrs:{text:"","x-small":""},on:{click:function(r){return e.getImagesForTask(a)}}},[e._v(" View Images ")]),s("div",e._l(a.downloads,function(r){return s(C,{key:r.id,attrs:{src:e.imageData(a,r),alt:r.filename,"max-width":700,contain:""}})}),1)],1):e._e(),s("div",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e.expandedTasks[a.uniqueId].htmlOutput?s("div",{domProps:{innerHTML:e._s(e.expandedTasks[a.uniqueId].htmlOutput)}}):s("div",[e._v(" "+e._s(a.output)+" ")])])])])]}},{key:"item.status",fn:function({item:n}){return[n.status==="pulled"?s(o,{attrs:{color:"green",small:""}},[e._v(" fa-check-square ")]):n.status==="queued"?s(o,{attrs:{color:"orange",small:""}},[e._v(" fa-clock ")]):e._e()]}},e.agent?null:{key:"item.agent_id",fn:function({item:n}){return[s("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"agentEdit",params:{id:n.agent_id}}}},[e._v(" "+e._s(n.agent_id)+" ")])]}},{key:"item.input",fn:function({item:n}){return[s("span",[e._v(e._s(e.truncateMessage(n.input)))])]}},{key:"item.task_name",fn:function({item:n}){return[s("span",[e._v(e._s(n.module_name==null?n.task_name:n.module_name))])]}},{key:"item.updated_at",fn:function({item:n}){return[s(_,{attrs:{timestamp:n.updated_at}})]}},{key:"item.tags",fn:function({item:n}){return[s(h,{attrs:{tags:n.tags},on:{"update-tag":function(a){return e.updateTag(n,...arguments)},"delete-tag":function(a){return e.deleteTag(n,...arguments)},"new-tag":function(a){return e.addTag(n,...arguments)}}})]}},{key:"item.actions",fn:function({item:n}){return[s(S,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:r}){return[s(p,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",r,!1),a),[s(o,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s(O,{staticClass:"ml-2 mr-2"},[s(u,{key:"downloadInput",attrs:{link:""},on:{click:function(a){return e.downloadInput(n)}}},[s(i,[s(o,[e._v("fa-download")]),e._v(" Download Input ")],1)],1),e.hasOutput(n)?s(u,{key:"downloadOutput",attrs:{link:""},on:{click:function(a){return e.downloadOutput(n)}}},[s(i,[s(o,[e._v("fa-download")]),e._v(" Download Output ")],1)],1):e._e(),s(u,{key:"clipboardInput",attrs:{link:""},on:{click:function(a){return e.copyInput(n)}}},[s(i,[s(o,[e._v("fa-paperclip")]),e._v(" Copy Input to Clipboard ")],1)],1),e.hasOutput(n)?s(u,{key:"clipboardOutput",attrs:{link:""},on:{click:function(a){return e.copyOutput(n)}}},[s(i,[s(o,[e._v("fa-paperclip")]),e._v(" Copy Output to Clipboard ")],1)],1):e._e(),s(D),e._l(n.downloads,function(a){return s(u,{key:"download-"+a.id,attrs:{link:""},on:{click:function(r){return e.downloadFile(a)}}},[s(i,[s(o,[e._v("fa-download")]),e._v(" Download "+e._s(a.filename)+" ")],1)],1)})],2)],1)]}}],null,!0)})],1)},V=[],N=m(L,M,V,!1,null,null,null,null);const y=N.exports;const Y={name:"AgentTasksList",components:{AdvancedTable:b,ExpansionPanelFilter:l,ExpansionPanelSearch:x,AgentTasksTable:y,ListPageTop:v},mixins:[k],props:{agent:{type:Object,required:!1,default:null},useHeader:{type:Boolean,default:!1},refreshTasks:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data(){return{breads:[{text:"Agents",disabled:!0,href:"/agents"},{text:"Tasks",disabled:!0,href:"/agents?tab=tasks"}],tasks:[],search:"",loading:!1,moment:T,selectedAgents:[],selectedUsers:[],selectedTags:[],tags:[],autoRefresh:!0}},computed:{agentStore(){return g()},userStore(){return B()},users(){return[...this.userStore.users,{id:0,username:"Non-User"}]},...U(g,["agents"])},watch:{agent:{handler(t){t&&(this.selectedAgents=[t.session_id])},immediate:!0}},async mounted(){await Promise.all([this.agentStore.getAgents(),this.userStore.getUsers(),this.getTags()])},methods:{async getTags(){const t=await E({page:1,limit:-1,sources:"agent_task"}),e=[];t.records.forEach(s=>{e.find(a=>a.name===s.name&&a.value===s.value)||e.push(s)}),this.tags=e},getTasks(){this.$refs.agentTasksTable.debouncedGetTasks()}}};var z=function(){var e=this,s=e._self._c;return s("div",[e.active&&e.useHeader?s(v,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":!1,"is-auto-refresh":!0,"auto-refresh":e.useHeader?e.autoRefresh:e.refreshTasks,"refresh-text":"Auto-refresh Tasks"},on:{"update:auto-refresh":function(n){e.autoRefresh=n},refresh:e.getTasks}}):e._e(),s(b,{scopedSlots:e._u([{key:"filters",fn:function(){return[s(x,{attrs:{title:"Search",label:"Search"},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}}),e.agent?e._e():s(l,{attrs:{title:"Agents",label:"name","item-key":"session_id","item-value":"session_id",items:e.agents},model:{value:e.selectedAgents,callback:function(n){e.selectedAgents=n},expression:"selectedAgents"}}),s(l,{attrs:{title:"Users",label:"username","item-key":"id","item-value":"id",items:e.users},model:{value:e.selectedUsers,callback:function(n){e.selectedUsers=n},expression:"selectedUsers"}}),s(l,{attrs:{title:"Tags",label:"label","item-key":"id","item-value":"label",items:e.tags,"empty-default":!0},model:{value:e.selectedTags,callback:function(n){e.selectedTags=n},expression:"selectedTags"}})]},proxy:!0},{key:"table",fn:function(){return[s(y,{ref:"agentTasksTable",attrs:{agent:e.agent,"refresh-tasks":e.useHeader?e.autoRefresh:e.refreshTasks,"hide-columns":["id","task_name"],"selected-agents":e.selectedAgents,"selected-users":e.selectedUsers,"selected-tags":e.selectedTags,search:e.search},on:{"refresh-tags":e.getTags}})]},proxy:!0}])})],1)},Z=[],J=m(Y,z,Z,!1,null,null,null,null);const pe=J.exports;export{pe as _};
