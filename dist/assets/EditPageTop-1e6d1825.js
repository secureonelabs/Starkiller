import{_ as a}from"./TooltipButton-69f903f0.js";import{n,a1 as i,a as o,b as l}from"./index-9016587b.js";import{a as r}from"./VTooltip-7de50c7b.js";const p={name:"ListPageTop",components:{TooltipButton:a},props:{deleteText:{type:String,default:"Delete"},copyText:{type:String,default:"Copy"},submitText:{type:String,default:"Submit"},showDelete:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1},showSubmit:{type:Boolean,default:!1},disableSubmit:{type:Boolean},submitLoading:{type:Boolean,default:!1},copyLink:{type:Object,default:()=>{}},smallCopy:{type:Boolean,default:!1},smallDelete:{type:Boolean,default:!1},breads:{type:Array,default:()=>[]}}};var _=function(){var t=this,e=t._self._c;return e("portal",{attrs:{to:"app-bar"}},[e("div",{staticClass:"v-toolbar__content pt-2",staticStyle:{width:"100%"}},[e(r,{attrs:{items:t.breads}}),e(i),e("div",{staticClass:"pt-2"},[t._t("extra-stuff")],2),t.showDelete&&!t.smallDelete?e(o,{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(s){return t.$emit("delete")}}},[t._v(" "+t._s(t.deleteText)+" "),e(l,{attrs:{right:""}},[t._v(" fa-trash-alt ")])],1):t.showDelete&&t.smallDelete?e(a,{attrs:{icon:"fa-trash-alt",color:"error",text:t.deleteText},on:{click:function(s){return t.$emit("delete")}}}):t._e(),t.showCopy&&Object.keys(t.copyLink).length>0&&!t.smallCopy?e(o,{staticClass:"mr-2",attrs:{color:"primary",text:"",to:t.copyLink}},[t._v(" "+t._s(t.copyText)+" "),e(l,{attrs:{right:""}},[t._v(" fa-copy ")])],1):t.showCopy&&Object.keys(t.copyLink).length>0&&t.smallCopy?e(a,{attrs:{icon:"fa-copy",text:t.copyText,to:t.copyLink}}):t._e(),t.showSubmit?e(o,{staticClass:"primary",attrs:{disabled:t.disableSubmit,type:"submit",loading:t.submitLoading},on:{click:function(s){return t.$emit("submit")}}},[t._v(" "+t._s(t.submitText)+" ")]):t._e()],1)])},c=[],u=n(p,_,c,!1,null,null,null,null);const b=u.exports;export{b as _};
