(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stagers"],{"0b25":function(t,e,r){var n=r("a691"),i=r("50c4");t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=i(e);if(e!==r)throw RangeError("Wrong length or index");return r}},"145e":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),a=r("50c4"),o=Math.min;t.exports=[].copyWithin||function(t,e){var r=n(this),s=a(r.length),c=i(t,s),u=i(e,s),f=arguments.length>2?arguments[2]:void 0,d=o((void 0===f?s:i(f,s))-u,s-c),l=1;u<c&&c<u+d&&(l=-1,u+=d-1,c+=d-1);while(d-- >0)u in r?r[c]=r[u]:delete r[c],c+=l,u+=l;return r}},"170b":function(t,e,r){"use strict";var n=r("ebb5"),i=r("50c4"),a=r("23cb"),o=r("4840"),s=n.aTypedArray,c=n.exportTypedArrayMethod;c("subarray",(function(t,e){var r=s(this),n=r.length,c=a(t,n);return new(o(r,r.constructor))(r.buffer,r.byteOffset+c*r.BYTES_PER_ELEMENT,i((void 0===e?n:a(e,n))-c))}))},"182d":function(t,e,r){var n=r("f8cd");t.exports=function(t,e){var r=n(t);if(r%e)throw RangeError("Wrong offset");return r}},"219c":function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,a=n.exportTypedArrayMethod,o=[].sort;a("sort",(function(t){return o.call(i(this),t)}))},"25a1":function(t,e,r){"use strict";var n=r("ebb5"),i=r("d58f").right,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("reduceRight",(function(t){return i(a(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(t,e,r){"use strict";var n=r("ebb5"),i=r("4840"),a=r("d039"),o=n.aTypedArray,s=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod,u=[].slice,f=a((function(){new Int8Array(1).slice()}));c("slice",(function(t,e){var r=u.call(o(this),t,e),n=i(this,this.constructor),a=0,c=r.length,f=new(s(n))(c);while(c>a)f[a]=r[a++];return f}),f)},3280:function(t,e,r){"use strict";var n=r("ebb5"),i=r("e58c"),a=n.aTypedArray,o=n.exportTypedArrayMethod;o("lastIndexOf",(function(t){return i.apply(a(this),arguments)}))},"3a7b":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").findIndex,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("findIndex",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(t,e,r){"use strict";var n=r("ebb5"),i=r("50c4"),a=r("182d"),o=r("7b0b"),s=r("d039"),c=n.aTypedArray,u=n.exportTypedArrayMethod,f=s((function(){new Int8Array(1).set({})}));u("set",(function(t){c(this);var e=a(arguments.length>1?arguments[1]:void 0,1),r=this.length,n=o(t),s=i(n.length),u=0;if(s+e>r)throw RangeError("Wrong length");while(u<s)this[e+u]=n[u++]}),f)},"3fcc":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").map,a=r("4840"),o=n.aTypedArray,s=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod;c("map",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(s(a(t,t.constructor)))(e)}))}))},"4cb2":function(t,e,r){"use strict";var n=r("1da1");r("96cf");e["a"]={methods:{copyStager:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,navigator.clipboard.writeText(t);case 2:e.$snack.success("Output copied to clipboard");case 3:case"end":return r.stop()}}),r)})))()}}}},"5cc6":function(t,e,r){var n=r("74e8");n("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},"5f96":function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,a=n.exportTypedArrayMethod,o=[].join;a("join",(function(t){return o.apply(i(this),arguments)}))},"60bd":function(t,e,r){"use strict";var n=r("da84"),i=r("ebb5"),a=r("e260"),o=r("b622"),s=o("iterator"),c=n.Uint8Array,u=a.values,f=a.keys,d=a.entries,l=i.aTypedArray,h=i.exportTypedArrayMethod,p=c&&c.prototype[s],y=!!p&&("values"==p.name||void 0==p.name),b=function(){return u.call(l(this))};h("entries",(function(){return d.call(l(this))})),h("keys",(function(){return f.call(l(this))})),h("values",b,!y),h(s,b,!y)},"621a":function(t,e,r){"use strict";var n=r("da84"),i=r("83ab"),a=r("a981"),o=r("9112"),s=r("e2cc"),c=r("d039"),u=r("19aa"),f=r("a691"),d=r("50c4"),l=r("0b25"),h=r("77a7"),p=r("e163"),y=r("d2bb"),b=r("241c").f,v=r("9bf2").f,g=r("81d5"),w=r("d44e"),m=r("69f3"),A=m.get,x=m.set,T="ArrayBuffer",_="DataView",S="prototype",O="Wrong length",k="Wrong index",R=n[T],C=R,E=n[_],M=E&&E[S],L=Object.prototype,j=n.RangeError,I=h.pack,B=h.unpack,D=function(t){return[255&t]},U=function(t){return[255&t,t>>8&255]},V=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},$=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},P=function(t){return I(t,23,4)},N=function(t){return I(t,52,8)},Y=function(t,e){v(t[S],e,{get:function(){return A(this)[e]}})},F=function(t,e,r,n){var i=l(r),a=A(t);if(i+e>a.byteLength)throw j(k);var o=A(a.buffer).bytes,s=i+a.byteOffset,c=o.slice(s,s+e);return n?c:c.reverse()},W=function(t,e,r,n,i,a){var o=l(r),s=A(t);if(o+e>s.byteLength)throw j(k);for(var c=A(s.buffer).bytes,u=o+s.byteOffset,f=n(+i),d=0;d<e;d++)c[u+d]=f[a?d:e-d-1]};if(a){if(!c((function(){R(1)}))||!c((function(){new R(-1)}))||c((function(){return new R,new R(1.5),new R(NaN),R.name!=T}))){C=function(t){return u(this,C),new R(l(t))};for(var q,G=C[S]=R[S],z=b(R),J=0;z.length>J;)(q=z[J++])in C||o(C,q,R[q]);G.constructor=C}y&&p(M)!==L&&y(M,L);var K=new E(new C(2)),H=M.setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||s(M,{setInt8:function(t,e){H.call(this,t,e<<24>>24)},setUint8:function(t,e){H.call(this,t,e<<24>>24)}},{unsafe:!0})}else C=function(t){u(this,C,T);var e=l(t);x(this,{bytes:g.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},E=function(t,e,r){u(this,E,_),u(t,C,_);var n=A(t).byteLength,a=f(e);if(a<0||a>n)throw j("Wrong offset");if(r=void 0===r?n-a:d(r),a+r>n)throw j(O);x(this,{buffer:t,byteLength:r,byteOffset:a}),i||(this.buffer=t,this.byteLength=r,this.byteOffset=a)},i&&(Y(C,"byteLength"),Y(E,"buffer"),Y(E,"byteLength"),Y(E,"byteOffset")),s(E[S],{getInt8:function(t){return F(this,1,t)[0]<<24>>24},getUint8:function(t){return F(this,1,t)[0]},getInt16:function(t){var e=F(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=F(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return $(F(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return $(F(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return B(F(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return B(F(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){W(this,1,t,D,e)},setUint8:function(t,e){W(this,1,t,D,e)},setInt16:function(t,e){W(this,2,t,U,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){W(this,2,t,U,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){W(this,4,t,V,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){W(this,4,t,V,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){W(this,4,t,P,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){W(this,8,t,N,e,arguments.length>2?arguments[2]:void 0)}});w(C,T),w(E,_),t.exports={ArrayBuffer:C,DataView:E}},"649e":function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").some,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("some",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},"72f7":function(t,e,r){"use strict";var n=r("ebb5").exportTypedArrayMethod,i=r("d039"),a=r("da84"),o=a.Uint8Array,s=o&&o.prototype||{},c=[].toString,u=[].join;i((function(){c.call({})}))&&(c=function(){return u.call(this)});var f=s.toString!=c;n("toString",c,f)},"735e":function(t,e,r){"use strict";var n=r("ebb5"),i=r("81d5"),a=n.aTypedArray,o=n.exportTypedArrayMethod;o("fill",(function(t){return i.apply(a(this),arguments)}))},"74e8":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("83ab"),o=r("8aa7"),s=r("ebb5"),c=r("621a"),u=r("19aa"),f=r("5c6c"),d=r("9112"),l=r("50c4"),h=r("0b25"),p=r("182d"),y=r("c04e"),b=r("5135"),v=r("f5df"),g=r("861d"),w=r("7c73"),m=r("d2bb"),A=r("241c").f,x=r("a078"),T=r("b727").forEach,_=r("2626"),S=r("9bf2"),O=r("06cf"),k=r("69f3"),R=r("7156"),C=k.get,E=k.set,M=S.f,L=O.f,j=Math.round,I=i.RangeError,B=c.ArrayBuffer,D=c.DataView,U=s.NATIVE_ARRAY_BUFFER_VIEWS,V=s.TYPED_ARRAY_TAG,$=s.TypedArray,P=s.TypedArrayPrototype,N=s.aTypedArrayConstructor,Y=s.isTypedArray,F="BYTES_PER_ELEMENT",W="Wrong length",q=function(t,e){var r=0,n=e.length,i=new(N(t))(n);while(n>r)i[r]=e[r++];return i},G=function(t,e){M(t,e,{get:function(){return C(this)[e]}})},z=function(t){var e;return t instanceof B||"ArrayBuffer"==(e=v(t))||"SharedArrayBuffer"==e},J=function(t,e){return Y(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},K=function(t,e){return J(t,e=y(e,!0))?f(2,t[e]):L(t,e)},H=function(t,e,r){return!(J(t,e=y(e,!0))&&g(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?M(t,e,r):(t[e]=r.value,t)};a?(U||(O.f=K,S.f=H,G(P,"buffer"),G(P,"byteOffset"),G(P,"byteLength"),G(P,"length")),n({target:"Object",stat:!0,forced:!U},{getOwnPropertyDescriptor:K,defineProperty:H}),t.exports=function(t,e,r){var a=t.match(/\d+$/)[0]/8,s=t+(r?"Clamped":"")+"Array",c="get"+t,f="set"+t,y=i[s],b=y,v=b&&b.prototype,S={},O=function(t,e){var r=C(t);return r.view[c](e*a+r.byteOffset,!0)},k=function(t,e,n){var i=C(t);r&&(n=(n=j(n))<0?0:n>255?255:255&n),i.view[f](e*a+i.byteOffset,n,!0)},L=function(t,e){M(t,e,{get:function(){return O(this,e)},set:function(t){return k(this,e,t)},enumerable:!0})};U?o&&(b=e((function(t,e,r,n){return u(t,b,s),R(function(){return g(e)?z(e)?void 0!==n?new y(e,p(r,a),n):void 0!==r?new y(e,p(r,a)):new y(e):Y(e)?q(b,e):x.call(b,e):new y(h(e))}(),t,b)})),m&&m(b,$),T(A(y),(function(t){t in b||d(b,t,y[t])})),b.prototype=v):(b=e((function(t,e,r,n){u(t,b,s);var i,o,c,f=0,d=0;if(g(e)){if(!z(e))return Y(e)?q(b,e):x.call(b,e);i=e,d=p(r,a);var y=e.byteLength;if(void 0===n){if(y%a)throw I(W);if(o=y-d,o<0)throw I(W)}else if(o=l(n)*a,o+d>y)throw I(W);c=o/a}else c=h(e),o=c*a,i=new B(o);E(t,{buffer:i,byteOffset:d,byteLength:o,length:c,view:new D(i)});while(f<c)L(t,f++)})),m&&m(b,$),v=b.prototype=w(P)),v.constructor!==b&&d(v,"constructor",b),V&&d(v,V,s),S[s]=b,n({global:!0,forced:b!=y,sham:!U},S),F in b||d(b,F,a),F in v||d(v,F,a),_(s)}):t.exports=function(){}},"77a7":function(t,e){var r=1/0,n=Math.abs,i=Math.pow,a=Math.floor,o=Math.log,s=Math.LN2,c=function(t,e,c){var u,f,d,l=new Array(c),h=8*c-e-1,p=(1<<h)-1,y=p>>1,b=23===e?i(2,-24)-i(2,-77):0,v=t<0||0===t&&1/t<0?1:0,g=0;for(t=n(t),t!=t||t===r?(f=t!=t?1:0,u=p):(u=a(o(t)/s),t*(d=i(2,-u))<1&&(u--,d*=2),t+=u+y>=1?b/d:b*i(2,1-y),t*d>=2&&(u++,d/=2),u+y>=p?(f=0,u=p):u+y>=1?(f=(t*d-1)*i(2,e),u+=y):(f=t*i(2,y-1)*i(2,e),u=0));e>=8;l[g++]=255&f,f/=256,e-=8);for(u=u<<e|f,h+=e;h>0;l[g++]=255&u,u/=256,h-=8);return l[--g]|=128*v,l},u=function(t,e){var n,a=t.length,o=8*a-e-1,s=(1<<o)-1,c=s>>1,u=o-7,f=a-1,d=t[f--],l=127&d;for(d>>=7;u>0;l=256*l+t[f],f--,u-=8);for(n=l&(1<<-u)-1,l>>=-u,u+=e;u>0;n=256*n+t[f],f--,u-=8);if(0===l)l=1-c;else{if(l===s)return n?NaN:d?-r:r;n+=i(2,e),l-=c}return(d?-1:1)*n*i(2,l-e)};t.exports={pack:c,unpack:u}},"7dfe":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("list-page-top",{attrs:{breads:t.breads,"show-create":!0,"show-refresh":!1,"show-delete":t.showDelete},on:{create:t.create,delete:t.deleteStagers}}),r("div",{staticClass:"ml-3 mr-3 align-center",staticStyle:{display:"flex"}},[r("v-switch",{attrs:{label:"Only My Stagers"},model:{value:t.filterOnlyMyStagersCheckbox,callback:function(e){t.filterOnlyMyStagersCheckbox=e},expression:"filterOnlyMyStagersCheckbox"}})],1),r("v-data-table",{attrs:{headers:t.headers,items:t.filteredStagers,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"id",dense:"","show-select":""},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[r("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"stagerEdit",params:{id:n.id}}}},[t._v(" "+t._s(n.name)+" ")])]}},{key:"item.options.Listener",fn:function(e){var n=e.item;return[r("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:n.id}}}},[t._v(" "+t._s(n.options.Listener)+" ")])]}},{key:"item.created_at",fn:function(e){var n=e.item;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[r("span",t._g({},i),[t._v(t._s(t.moment(n.created_at).fromNow()))])]}}],null,!0)},[r("span",[t._v(t._s(t.moment(n.created_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",i,!1),n),[r("v-icon",[t._v("fa-ellipsis-v")])],1)]}}],null,!0)},[r("v-list",{staticClass:"ml-2 mr-2"},[t.isDownload(n)?r("v-list-item",{key:"download",attrs:{link:""},on:{click:function(e){return t.download(n)}}},[r("v-list-item-title",[r("v-icon",[t._v("fa-download")]),t._v(" Download ")],1)],1):t._e(),t.isOneLiner(n)?r("v-list-item",{key:"clipboard",attrs:{link:""},on:{click:function(e){return t.copy(n)}}},[r("v-list-item-title",[r("v-icon",[t._v("fa-paperclip")]),t._v(" Copy to Clipboard ")],1)],1):t._e(),r("v-list-item",{key:"copy",attrs:{to:{name:"stagerNew",params:{copy:!0,id:n.id}},link:""}},[r("v-list-item-title",[r("v-icon",[t._v("fa-clone")]),t._v(" Copy ")],1)],1),r("v-divider",{staticClass:"pb-4"}),r("v-list-item",{key:"delete",attrs:{link:""},on:{click:function(e){return t.deleteStager(n)}}},[r("v-list-item-title",[r("v-icon",[t._v("fa-trash-alt")]),t._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},i=[],a=r("1da1"),o=r("5530"),s=(r("96cf"),r("4de4"),r("159b"),r("2f62")),c=r("ebef"),u=r("4cb2"),f=r("c1df"),d=r.n(f),l=r("828a"),h=r("a993"),p={name:"Stagers",components:{ListPageTop:l["a"]},mixins:[c["a"],u["a"]],data:function(){return{moment:d.a,breads:[{text:"Stagers",disabled:!0,href:"/stagers"}],headers:[{text:"Name",value:"name"},{text:"Listener",value:"options.Listener"},{text:"Type",value:"template"},{text:"Language",value:"options.Language"},{text:"Created At",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}],selected:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])({stagers:function(t){return t.stager.stagers},filterOnlyMyStagersCheckbox:function(t){return t.application.filterOnlyMyStagers}})),{},{filteredStagers:function(){var t=this;return this.stagers.filter((function(e){return!t.filterOnlyMyStagers||e.user_id===t.user.id}))},showDelete:function(){return this.selected.length>0},filterOnlyMyStagersCheckbox:{set:function(t){this.$store.dispatch("application/filterOnlyMyStagers",t)},get:function(){return this.filterOnlyMyStagers}}}),mounted:function(){this.$store.dispatch("stager/getStagers")},methods:{create:function(){this.$router.push({name:"stagerNew"})},isDownload:function(t){return t.downloads&&t.downloads.length>0},isOneLiner:function(t){return t.one_liner},copy:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.downloads.length-1,r.t0=e,r.next=4,h["c"](t.downloads[n].id);case 4:return r.t1=r.sent,r.abrupt("return",r.t0.copyStager.call(r.t0,r.t1));case 6:case"end":return r.stop()}}),r)})))()},download:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.downloads.length-1,e.abrupt("return",h["b"](t.downloads[r].id));case 2:case"end":return e.stop()}}),e)})))()},deleteStager:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$root.$confirm("Delete","Are you sure you want to delete this stager?",{color:"red"});case 2:if(!r.sent){r.next=4;break}e.$store.dispatch("stager/deleteStager",t.id);case 4:case"end":return r.stop()}}),r)})))()},deleteStagers:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$root.$confirm("Delete","Are you sure you want to delete ".concat(t.selected.length," stagers?"),{color:"red"});case 2:if(!e.sent){e.next=5;break}t.selected.forEach((function(e){t.$store.dispatch("stager/deleteStager",e.id)})),t.selected=[];case 5:case"end":return e.stop()}}),e)})))()}}},y=p,b=r("2877"),v=r("6544"),g=r.n(v),w=r("8336"),m=r("8fea"),A=r("ce7e"),x=r("132d"),T=r("8860"),_=r("da13"),S=r("5d23"),O=r("e449"),k=r("b73d"),R=r("3a2f"),C=Object(b["a"])(y,n,i,!1,null,null,null);e["default"]=C.exports;g()(C,{VBtn:w["a"],VDataTable:m["a"],VDivider:A["a"],VIcon:x["a"],VList:T["a"],VListItem:_["a"],VListItemTitle:S["c"],VMenu:O["a"],VSwitch:k["a"],VTooltip:R["a"]})},"828a":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("portal",{attrs:{to:"app-bar"}},[r("div",{staticClass:"v-toolbar__content",staticStyle:{width:"100%"}},[r("v-breadcrumbs",{attrs:{items:t.breads}}),r("v-spacer"),t._t("extra-stuff"),r("div",[t.showDelete?r("v-btn",{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(e){return t.$emit("delete")}}},[t._v(" "+t._s(t.deleteText)+" "),r("v-icon",{attrs:{right:""}},[t._v(" fa-trash-alt ")])],1):t._e(),t.showRefresh?r("v-btn",{staticClass:"mr-2",attrs:{disabled:t.refreshLoading,color:"primary",text:""},on:{click:function(e){return t.$emit("refresh")}}},[t._v(" "+t._s(t.refreshText)+" "),r("v-icon",{attrs:{right:""}},[t._v(" fa-redo "+t._s(t.refreshLoading?"fa-spin":"")+" ")])],1):t._e(),t.showCreate?r("v-btn",{staticClass:"mr-2",attrs:{color:"primary",rounded:""},on:{click:function(e){return t.$emit("create")}}},[t._v(" "+t._s(t.createText)+" "),r("v-icon",{attrs:{right:""}},[t._v(" fa-plus-square ")])],1):t._e()],1)],2)])},i=[],a={name:"ListPageTop",props:{deleteText:{type:String,default:"Delete"},refreshText:{type:String,default:"Refresh"},createText:{type:String,default:"Create"},showDelete:{type:Boolean,default:!1},showRefresh:{type:Boolean,default:!1},showCreate:{type:Boolean,default:!1},refreshLoading:{type:Boolean,default:!1},breads:{type:Array,default:function(){return[]}}}},o=a,s=r("2877"),c=r("6544"),u=r.n(c),f=r("2bc5"),d=r("8336"),l=r("132d"),h=r("2fa4"),p=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=p.exports;u()(p,{VBreadcrumbs:f["a"],VBtn:d["a"],VIcon:l["a"],VSpacer:h["a"]})},"82f8":function(t,e,r){"use strict";var n=r("ebb5"),i=r("4d64").includes,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("includes",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},"8aa7":function(t,e,r){var n=r("da84"),i=r("d039"),a=r("1c7e"),o=r("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,s=n.ArrayBuffer,c=n.Int8Array;t.exports=!o||!i((function(){c(1)}))||!i((function(){new c(-1)}))||!a((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||i((function(){return 1!==new c(new s(2),1,void 0).length}))},"9a8c":function(t,e,r){"use strict";var n=r("ebb5"),i=r("145e"),a=n.aTypedArray,o=n.exportTypedArrayMethod;o("copyWithin",(function(t,e){return i.call(a(this),t,e,arguments.length>2?arguments[2]:void 0)}))},"9d01":function(t,e,r){},a078:function(t,e,r){var n=r("7b0b"),i=r("50c4"),a=r("35a1"),o=r("e95a"),s=r("0366"),c=r("ebb5").aTypedArrayConstructor;t.exports=function(t){var e,r,u,f,d,l,h=n(t),p=arguments.length,y=p>1?arguments[1]:void 0,b=void 0!==y,v=a(h);if(void 0!=v&&!o(v)){d=v.call(h),l=d.next,h=[];while(!(f=l.call(d)).done)h.push(f.value)}for(b&&p>2&&(y=s(y,arguments[2],2)),r=i(h.length),u=new(c(this))(r),e=0;r>e;e++)u[e]=b?y(h[e],e):h[e];return u}},a975:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").every,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("every",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},a981:function(t,e){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},a993:function(t,e,r){"use strict";r.d(e,"e",(function(){return o})),r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c})),r.d(e,"d",(function(){return u})),r.d(e,"c",(function(){return f}));r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("ac1f"),r("1276"),r("5319");var n=r("db10"),i=r("4328"),a=r.n(i);function o(t){var e=t.page,r=t.limit,i=t.sortBy,o=void 0===i?"updated_at":i,s=t.sortOrder,c=void 0===s?"desc":s,u=t.query,f=t.sources;return n["a"].get("/downloads",{params:{page:e,limit:r,query:u,sources:f,order_by:o,order_direction:c},paramsSerializer:function(t){return a.a.stringify(t,{arrayFormat:"repeat",skipNulls:!0})}}).then((function(t){return t.data})).catch((function(t){return Promise.reject(Object(n["b"])(t))}))}function s(t){return Object(n["a"])({method:"post",url:"/downloads",data:t,headers:{"Content-Type":"multipart/form-data"}})}function c(t){return n["a"].get("/downloads/".concat(t,"/download"),{responseType:"blob"}).then((function(t){var e=new Blob([t.data],{type:t.headers["content-type"]}),r=window.URL.createObjectURL(e),n=document.createElement("a");n.href=r;var i=t.headers["content-disposition"].split("filename=")[1];i=i.replace(/^["']|["']$/g,""),n.setAttribute("download",i),document.body.appendChild(n),n.click(),document.body.removeChild(n)})).catch((function(t){return Promise.reject(Object(n["b"])(t))}))}function u(t){return n["a"].get("/downloads/".concat(t,"/download"),{responseType:"blob"}).then((function(t){var e=new Blob([t.data],{type:t.headers["content-type"]}),r=window.URL.createObjectURL(e);return r})).catch((function(t){return Promise.reject(Object(n["b"])(t))}))}function f(t){return n["a"].get("/downloads/".concat(t,"/download"),{responseType:"text"}).then((function(t){return t.data})).catch((function(t){return Promise.reject(Object(n["b"])(t))}))}},ace4:function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("621a"),o=r("825a"),s=r("23cb"),c=r("50c4"),u=r("4840"),f=a.ArrayBuffer,d=a.DataView,l=f.prototype.slice,h=i((function(){return!new f(2).slice(1,void 0).byteLength}));n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:h},{slice:function(t,e){if(void 0!==l&&void 0===e)return l.call(o(this),t);var r=o(this).byteLength,n=s(t,r),i=s(void 0===e?r:e,r),a=new(u(this,f))(c(i-n)),h=new d(this),p=new d(a),y=0;while(n<i)p.setUint8(y++,h.getUint8(n++));return a}})},b39a:function(t,e,r){"use strict";var n=r("da84"),i=r("ebb5"),a=r("d039"),o=n.Int8Array,s=i.aTypedArray,c=i.exportTypedArrayMethod,u=[].toLocaleString,f=[].slice,d=!!o&&a((function(){u.call(new o(1))})),l=a((function(){return[1,2].toLocaleString()!=new o([1,2]).toLocaleString()}))||!a((function(){o.prototype.toLocaleString.call([1,2])}));c("toLocaleString",(function(){return u.apply(d?f.call(s(this)):s(this),arguments)}),l)},b73d:function(t,e,r){"use strict";var n=r("15fd"),i=r("5530"),a=(r("0481"),r("ec29"),r("9d01"),r("fe09")),o=r("c37a"),s=r("c3f0"),c=r("0789"),u=r("490a"),f=r("80d2"),d=["title"];e["a"]=a["a"].extend({name:"v-switch",directives:{Touch:s["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(u["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f["A"].left&&this.isActive||t.keyCode===f["A"].right&&!this.isActive)&&this.onChange()}}})},c1ac:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").filter,a=r("4840"),o=n.aTypedArray,s=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod;c("filter",(function(t){var e=i(o(this),t,arguments.length>1?arguments[1]:void 0),r=a(this,this.constructor),n=0,c=e.length,u=new(s(r))(c);while(c>n)u[n]=e[n++];return u}))},ca91:function(t,e,r){"use strict";var n=r("ebb5"),i=r("d58f").left,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("reduce",(function(t){return i(a(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},cd26:function(t,e,r){"use strict";var n=r("ebb5"),i=n.aTypedArray,a=n.exportTypedArrayMethod,o=Math.floor;a("reverse",(function(){var t,e=this,r=i(e).length,n=o(r/2),a=0;while(a<n)t=e[a],e[a++]=e[--r],e[r]=t;return e}))},d139:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").find,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("find",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},d58f:function(t,e,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),o=r("50c4"),s=function(t){return function(e,r,s,c){n(r);var u=i(e),f=a(u),d=o(u.length),l=t?d-1:0,h=t?-1:1;if(s<2)while(1){if(l in f){c=f[l],l+=h;break}if(l+=h,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=h)l in f&&(c=r(c,f[l],l,u));return c}};t.exports={left:s(!1),right:s(!0)}},d5d6:function(t,e,r){"use strict";var n=r("ebb5"),i=r("b727").forEach,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("forEach",(function(t){i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},e58c:function(t,e,r){"use strict";var n=r("fc6a"),i=r("a691"),a=r("50c4"),o=r("a640"),s=r("ae40"),c=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),l=s("indexOf",{ACCESSORS:!0,1:0}),h=f||!d||!l;t.exports=h?function(t){if(f)return u.apply(this,arguments)||0;var e=n(this),r=a(e.length),o=r-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:u},e91f:function(t,e,r){"use strict";var n=r("ebb5"),i=r("4d64").indexOf,a=n.aTypedArray,o=n.exportTypedArrayMethod;o("indexOf",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(t,e,r){"use strict";var n,i=r("a981"),a=r("83ab"),o=r("da84"),s=r("861d"),c=r("5135"),u=r("f5df"),f=r("9112"),d=r("6eeb"),l=r("9bf2").f,h=r("e163"),p=r("d2bb"),y=r("b622"),b=r("90e3"),v=o.Int8Array,g=v&&v.prototype,w=o.Uint8ClampedArray,m=w&&w.prototype,A=v&&h(v),x=g&&h(g),T=Object.prototype,_=T.isPrototypeOf,S=y("toStringTag"),O=b("TYPED_ARRAY_TAG"),k=i&&!!p&&"Opera"!==u(o.opera),R=!1,C={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},E=function(t){var e=u(t);return"DataView"===e||c(C,e)},M=function(t){return s(t)&&c(C,u(t))},L=function(t){if(M(t))return t;throw TypeError("Target is not a typed array")},j=function(t){if(p){if(_.call(A,t))return t}else for(var e in C)if(c(C,n)){var r=o[e];if(r&&(t===r||_.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},I=function(t,e,r){if(a){if(r)for(var n in C){var i=o[n];i&&c(i.prototype,t)&&delete i.prototype[t]}x[t]&&!r||d(x,t,r?e:k&&g[t]||e)}},B=function(t,e,r){var n,i;if(a){if(p){if(r)for(n in C)i=o[n],i&&c(i,t)&&delete i[t];if(A[t]&&!r)return;try{return d(A,t,r?e:k&&v[t]||e)}catch(s){}}for(n in C)i=o[n],!i||i[t]&&!r||d(i,t,e)}};for(n in C)o[n]||(k=!1);if((!k||"function"!=typeof A||A===Function.prototype)&&(A=function(){throw TypeError("Incorrect invocation")},k))for(n in C)o[n]&&p(o[n],A);if((!k||!x||x===T)&&(x=A.prototype,k))for(n in C)o[n]&&p(o[n].prototype,x);if(k&&h(m)!==x&&p(m,x),a&&!c(x,S))for(n in R=!0,l(x,S,{get:function(){return s(this)?this[O]:void 0}}),C)o[n]&&f(o[n],O,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_TAG:R&&O,aTypedArray:L,aTypedArrayConstructor:j,exportTypedArrayMethod:I,exportTypedArrayStaticMethod:B,isView:E,isTypedArray:M,TypedArray:A,TypedArrayPrototype:x}},ebef:function(t,e,r){"use strict";var n=r("1da1");r("96cf"),r("ac1f"),r("1276"),r("ace4"),r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("d81d"),r("3ca3"),r("ddb0"),r("2b3d");e["a"]={methods:{downloadStager:function(t,e){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,i,a,o,s,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.split("/")[e.split("/").length-1],0!==n.length){r.next=3;break}return r.abrupt("return");case 3:e.length>0&&(i=window.atob(t),a=new Uint8Array(i.length),o=a.map((function(t,e){return i.charCodeAt(e)})),s=new Blob([o]),c=document.createElement("a"),u=URL.createObjectURL(s),c.setAttribute("href",u),c.setAttribute("download",n),c.style.visibility="hidden",document.body.appendChild(c),c.click(),document.body.removeChild(c));case 4:case"end":return r.stop()}}),r)})))()},downloadText:function(t,e){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=new Blob([t],{type:"text/plain"}),i=document.createElement("a"),a=URL.createObjectURL(n),i.setAttribute("href",a),i.setAttribute("download",e),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i);case 9:case"end":return r.stop()}}),r)})))()}}}},f8cd:function(t,e,r){var n=r("a691");t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}}}]);
//# sourceMappingURL=stagers.0a7f2c42.js.map