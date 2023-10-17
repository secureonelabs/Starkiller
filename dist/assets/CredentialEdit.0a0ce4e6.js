import{_ as a}from"./GeneralForm.fe5154ff.js";import{_ as s}from"./ErrorStateAlert.5e9140da.js";import{_ as n}from"./TagViewer.a3da6a20.js";import{_ as d}from"./EditPageTop.30f77a9c.js";import{n as o,bC as l,bD as u,bE as c,bG as h,bH as p,bI as m,f as _}from"./index.85262dd3.js";import"./VSelect.8543571f.js";import"./VSwitch.8a27782c.js";import"./TooltipButton.6f10f736.js";import"./VTooltip.0c849a74.js";import"./VBreadcrumbs.32f4f2d0.js";const f={name:"CredentialEdit",components:{TagViewer:n,GeneralForm:a,ErrorStateAlert:s,EditPageTop:d},data(){return{reset:!0,loading:!1,initialLoad:!1,credential:{},form:{},errorState:!1}},computed:{breads(){return[{text:"Credentials",disabled:!1,to:"/credentials",exact:!0},{text:this.id&&!this.isCopy?`${this.id}`:"New",disabled:!0,to:"/credential-edit"}]},isNew(){return this.$route.name==="credentialNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"Edit"},canEdit(){return!0},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"credentialNew",params:{copy:!0,id:this.id}}:{}},options(){const t={credtype:{required:!0,strict:!0,suggested_values:["plaintext","hash"]},domain:{required:!0},username:{required:!0},password:{required:!0},host:{required:!0},os:{required:!1},sid:{required:!1},notes:{required:!1}};return Object.keys(this.credential).forEach(e=>{e!=="id"&&t[e]&&(t[e].value=this.credential[e])}),t}},mounted(){!this.isNew||this.isCopy?this.getCredential(this.$route.params.id):this.initialLoad=!0},methods:{deleteTag(t){l(this.credential.id,t.id).then(()=>{this.credential.tags=this.credential.tags.filter(e=>e!==t)}).catch(e=>this.$snack.error(`Error: ${e}`))},updateTag(t){u(this.credential.id,t).then(e=>{const r=this.credential.tags.findIndex(i=>i.id===e.id);this.credential.tags.splice(r,1,e),this.$snack.success("Tag updated")}).catch(e=>this.$snack.error(`Error: ${e}`))},addTag(t){c(this.credential.id,t).then(e=>{this.credential.tags.push(e)}).catch(e=>this.$snack.error(`Error: ${e}`))},submit(){this.loading||!this.$refs.generalform.$refs.form.validate()||(this.loading=!0,this.id>0?h(this.id,this.form).then(()=>{this.loading=!1}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}):p(this.form).then(({id:t})=>{this.loading=!1,this.$router.push({name:"credentialEdit",params:{id:t}})}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}),this.loading=!1)},async deleteCredential(){if(await this.$root.$confirm("Delete",`Are you sure you want to delete credential ${this.id}?`,{color:"red"}))try{this.$store.dispatch("credential/deleteCredential",this.id),this.$router.push({name:"credentials"})}catch(t){this.$snack.error(`Error: ${t}`)}},getCredential(t){m(t).then(e=>{this.reset=!1,this.credential=e,this.initialLoad=!0,setTimeout(()=>{this.reset=!0},500)}).catch(()=>{this.errorState=!0})}}};var g=function(){var e=this,r=e._self._c;return r("div",[r(d,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading&&e.initialLoad,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.deleteCredential}}),r("h3",[e._v(e._s(e.mode)+" Credential")]),e.isNew?e._e():r(n,{attrs:{tags:e.credential.tags},on:{"update-tag":e.updateTag,"delete-tag":e.deleteTag,"new-tag":e.addTag}}),e.errorState?r(s,{attrs:{"resource-id":e.id,"resource-type":"credential"}}):r(_,{staticStyle:{padding:"10px"}},[e.reset?r(a,{ref:"generalform",attrs:{options:e.options,readonly:!e.canEdit},model:{value:e.form,callback:function(i){e.form=i},expression:"form"}}):e._e()],1)],1)},$=[],y=o(f,g,$,!1,null,null,null,null);const N=y.exports;export{N as default};
