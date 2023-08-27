import{m as r,T as u,P as o,ac as h,ah as d,K as l}from"./index.154e9cc6.js";const n=r(h,o,u).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:this.value!==void 0?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return this.internalValue==null?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const e=this.internalValue;return Array.isArray(e)?t=>e.some(a=>this.valueComparator(a,t)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&d("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return e.value===void 0?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),a=this.getValue(e,t);if(this.items.splice(t,1),!(this.selectedValues.indexOf(a)<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(i=>i!==a):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const a=this.getValue(e,t);e.isActive=this.toggleMethod(a)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const a=t.find(i=>!i.disabled);if(!a)return;const s=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,s))},updateMultiple(e){const a=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),s=a.findIndex(i=>this.valueComparator(i,e));this.mandatory&&s>-1&&a.length-1<1||this.max!=null&&s<0&&a.length+1>this.max||(s>-1?a.splice(s,1):a.push(e),this.internalValue=a)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});n.extend({name:"v-item-group",provide(){return{itemGroup:this}}});const c=n.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...n.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&l("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&typeof this.value[0]=="boolean"&&l(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const a=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(s)}}});export{n as B,c as _};
