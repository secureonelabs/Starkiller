import{z as a,aM as s,A as n,B as i}from"./index-9016587b.js";function c({tags:t,search:e}={}){return a.get("/credentials",{params:{tags:t,search:e},paramsSerializer:r=>s.stringify(r,{arrayFormat:"repeat",skipNulls:!0})}).then(({data:r})=>r.records).catch(r=>Promise.reject(n(r)))}function o(t){return a.get(`/credentials/${t}`).then(({data:e})=>e).catch(e=>Promise.reject(n(e)))}function u(t,e){return a.put(`/credentials/${t}`,e).then(({data:r})=>r).catch(r=>Promise.reject(n(r)))}function h(t){return a.post("/credentials",t).then(({data:e})=>e).catch(e=>Promise.reject(n(e)))}function d(t){return a.delete(`/credentials/${t}`).catch(e=>Promise.reject(n(e)))}function f(t,e){return a.delete(`credentials/${t}/tags/${e}`).catch(r=>Promise.reject(n(r)))}function m(t,e){return a.put(`credentials/${t}/tags/${e.id}`,e).then(({data:r})=>r).catch(r=>Promise.reject(n(r)))}function p(t,e){return a.post(`credentials/${t}/tags`,e).then(({data:r})=>r).catch(r=>Promise.reject(n(r)))}const g=i("credential",{state:()=>({credentials:[]}),actions:{async getCredentials(t){const e=await c(t);this.credentials=e},async deleteCredential(t){await d(t);const e=this.credentials.findIndex(r=>r.id===t);e>-1&&this.credentials.splice(e,1)}},getters:{credentialIds:t=>t.credentials.map(e=>e.id)}});export{m as a,p as b,u as c,f as d,h as e,o as f,c as g,g as u};
