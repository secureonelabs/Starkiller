import{_ as l}from"./ErrorStateAlert.5e9140da.js";import{_ as s}from"./EditPageTop.30f77a9c.js";import{n as o,bJ as n,bK as d,bL as u,D as m,f as c,aB as f,o as i}from"./index.85262dd3.js";import{_ as h}from"./VTextarea.aac91b1e.js";import"./TooltipButton.6f10f736.js";import"./VTooltip.0c849a74.js";import"./VBreadcrumbs.32f4f2d0.js";const p={name:"MalleableProfileEdit",components:{ErrorStateAlert:l,EditPageTop:s},data(){return{form:{},rules:{name:[t=>!!t||"Name is required",t=>!!t&&t.length>3||"Name must be larger than 3 characters"],category:[t=>!!t||"Category is required"],code:[t=>!!t||"Code is required"]},malleableProfile:{},valid:!0,loading:!1,errorState:!1,initialLoad:!1}},computed:{isNew(){return this.$route.name==="malleableProfileNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"View"},canEdit(){return!0},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"malleableProfileNew",params:{copy:!0,id:this.id}}:{}},breads(){return[{text:"Listeners",disabled:!0,to:"/listeners",exact:!0},{text:"Malleable Profiles",disabled:!1,to:"/listeners?tab=malleable-profiles",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/malleable-profiles-edit"}]},breadcrumbName(){return this.isCopy?"New":this.malleableProfile.name?this.malleableProfile.name:this.id?this.id:"New"}},watch:{id(t){t&&this.getMalleableProfile(t)}},mounted(){!this.isNew||this.isCopy?this.getMalleableProfile(this.$route.params.id):this.initialLoad=!0},methods:{async submit(){this.loading||!this.$refs.form.validate()||(this.loading=!0,this.id>0?n(this.id,this.form.data).then(()=>{this.$snack.success("Malleable Profile updated"),this.loading=!1}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}):d(this.form.name,this.form.category,this.form.data).then(({id:t})=>{this.$snack.success("Malleable Profile created"),this.loading=!1,this.$router.push({name:"malleableProfileEdit",params:{id:t}})}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}))},async deleteMalleableProfile(){if(await this.$root.$confirm("Delete",`Are you sure you want to delete profile ${this.form.name}?`,{color:"red"}))try{await this.$store.dispatch("malleable/deleteMalleableProfile",this.form.name),this.$router.push({name:"malleableProfiles"})}catch(t){this.$snack.error(`Error: ${t}`)}},getMalleableProfile(t){u(t).then(e=>{this.malleableProfile=e,this.initialLoad=!0,m.set(this,"form",{...e})}).catch(()=>{this.errorState=!0})}}};var b=function(){var e=this,a=e._self._c;return a("div",[a(s,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"disable-submit":!e.canEdit&&e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading&&e.initialLoad,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.deleteMalleableProfile}}),a("div",{staticClass:"headers"},[a("h3",[e._v(e._s(e.mode)+" Malleable Profile")])]),e.errorState?a(l,{attrs:{"resource-id":e.id,"resource-type":"malleableProfile"}}):a(c,{staticStyle:{padding:"10px"}},[a(f,{ref:"form",staticStyle:{"max-width":"500px"},nativeOn:{submit:function(r){return r.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[a(i,{attrs:{rules:e.rules.name,label:"name",outlined:"",dense:"",required:"",disabled:!e.isNew},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}}),a(i,{attrs:{rules:e.rules.category,label:"category",outlined:"",dense:"",required:"",disabled:!e.isNew},model:{value:e.form.category,callback:function(r){e.$set(e.form,"category",r)},expression:"form.category"}}),a(h,{attrs:{rules:e.rules.code,label:"code",outlined:"",dense:"",required:"","auto-grow":""},model:{value:e.form.data,callback:function(r){e.$set(e.form,"data",r)},expression:"form.data"}})],1)],1)],1)},_=[],g=o(p,b,_,!1,null,null,null,null);const N=g.exports;export{N as default};
