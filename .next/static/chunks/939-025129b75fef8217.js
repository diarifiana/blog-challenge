"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{1277:(t,e,i)=>{i.d(e,{T:()=>s});function s(){let t,e;let i=new Promise((i,s)=>{t=i,e=s});function s(t){Object.assign(i,t),delete i.resolve,delete i.reject}return i.status="pending",i.catch(()=>{}),i.resolve=e=>{s({status:"fulfilled",value:e}),t(e)},i.reject=t=>{s({status:"rejected",reason:t}),e(t)},i}},2955:(t,e,i)=>{i.d(e,{k:()=>n});var s=i(4403),n=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.gn)(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.S$?1/0:3e5))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}}},4017:(t,e,i)=>{i.d(e,{m:()=>r});var s=i(9323),n=i(4403),r=new class extends s.Q{#e;#i;#s;constructor(){super(),this.#s=t=>{if(!n.S$&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#i||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#i?.(),this.#i=void 0)}setEventListener(t){this.#s=t,this.#i?.(),this.#i=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#e!==t&&(this.#e=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#e?this.#e:globalThis.document?.visibilityState!=="hidden"}}},4146:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),!function(t,e){for(var i in e)Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}(e,{default:function(){return u},getImageProps:function(){return a}});let s=i(306),n=i(666),r=i(7970),o=s._(i(7979));function a(t){let{props:e}=(0,n.getImgProps)(t,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,i]of Object.entries(e))void 0===i&&delete e[t];return{props:e}}let u=r.Image},4267:(t,e,i)=>{i.d(e,{II:()=>l,v_:()=>u,wm:()=>h});var s=i(4017),n=i(8248),r=i(1277),o=i(4403);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||n.t.isOnline()}var c=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof c}function l(t){let e,i=!1,h=0,l=!1,d=(0,r.T)(),f=()=>s.m.isFocused()&&("always"===t.networkMode||n.t.isOnline())&&t.canRun(),p=()=>u(t.networkMode)&&t.canRun(),y=i=>{l||(l=!0,t.onSuccess?.(i),e?.(),d.resolve(i))},v=i=>{l||(l=!0,t.onError?.(i),e?.(),d.reject(i))},b=()=>new Promise(i=>{e=t=>{(l||f())&&i(t)},t.onPause?.()}).then(()=>{e=void 0,l||t.onContinue?.()}),m=()=>{let e;if(l)return;let s=0===h?t.initialPromise:void 0;try{e=s??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(l)return;let s=t.retry??3*!o.S$,n=t.retryDelay??a,r="function"==typeof n?n(h,e):n,u=!0===s||"number"==typeof s&&h<s||"function"==typeof s&&s(h,e);if(i||!u){v(e);return}h++,t.onFail?.(h,e),(0,o.yy)(r).then(()=>f()?void 0:b()).then(()=>{i?v(e):m()})})};return{promise:d,cancel:e=>{l||(v(new c(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{i=!0},continueRetry:()=>{i=!1},canStart:p,start:()=>(p()?m():b().then(m),d)}}},4403:(t,e,i)=>{i.d(e,{Cp:()=>p,EN:()=>f,Eh:()=>c,F$:()=>d,MK:()=>h,S$:()=>s,ZM:()=>C,ZZ:()=>O,Zw:()=>r,d2:()=>u,f8:()=>y,gn:()=>o,hT:()=>F,j3:()=>a,lQ:()=>n,nJ:()=>l,pl:()=>S,y9:()=>w,yy:()=>g});var s="undefined"==typeof window||"Deno"in globalThis;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function c(t,e){return"function"==typeof t?t(e):t}function h(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:o,stale:a}=t;if(o){if(s){if(e.queryHash!==d(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof a||e.isStale()===a)&&(!n||n===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:i,status:s,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(f(e.options.mutationKey)!==f(r))return!1}else if(!p(e.options.mutationKey,r))return!1}return(!s||e.state.status===s)&&(!n||!!n(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>b(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!p(t[i],e[i]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(m(i)&&i.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function S(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=v(e)&&v(i);if(s||b(e)&&b(i)){let n=s?e:Object.keys(e),r=n.length,o=s?i:Object.keys(i),a=o.length,u=s?[]:{},c=0;for(let r=0;r<a;r++){let a=s?r:o[r];(!s&&n.includes(a)||s)&&void 0===e[a]&&void 0===i[a]?(u[a]=void 0,c++):(u[a]=t(e[a],i[a]),u[a]===e[a]&&void 0!==e[a]&&c++)}return r===a&&c===r?e:u}return i}(t,e):e}function w(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function O(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}var F=Symbol();function C(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==F?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}},5565:(t,e,i)=>{i.d(e,{default:()=>n.a});var s=i(4146),n=i.n(s)},5586:(t,e,i)=>{i.d(e,{j:()=>s});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>setTimeout(t,0),r=s=>{e?t.push(s):n(()=>{i(s)})},o=()=>{let e=t;t=[],e.length&&n(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||o()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{n=t}}}()},5906:(t,e,i)=>{i.d(e,{Ht:()=>a,jE:()=>o});var s=i(2115),n=i(5155),r=s.createContext(void 0),o=t=>{let e=s.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=t=>{let{client:e,children:i}=t;return s.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,n.jsx)(r.Provider,{value:e,children:i})}},7702:(t,e,i)=>{i.d(e,{X:()=>a,k:()=>u});var s=i(4403),n=i(5586),r=i(4267),o=i(2955),a=class extends o.k{#n;#r;#o;#a;#u;#c;#h;constructor(t){super(),this.#h=!1,this.#c=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#a=t.client,this.#o=this.#a.getQueryCache(),this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#n,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#u?.promise}setOptions(t){this.options={...this.#c,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){let i=(0,s.pl)(this.state.data,t,this.options);return this.#l({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#l({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(s.lQ).catch(s.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.observers.some(t=>!1!==(0,s.Eh)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===s.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,s.j3)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#u&&(this.#h?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let i=new AbortController,n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#h=!0,i.signal)})},o={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:()=>{let t=(0,s.ZM)(this.options,e),i={client:this.#a,queryKey:this.queryKey,meta:this.meta};return(n(i),this.#h=!1,this.options.persister)?this.options.persister(t,i,this):t(i)}};n(o),this.options.behavior?.onFetch(o,this),this.#r=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#l({type:"fetch",meta:o.fetchOptions?.meta});let a=t=>{(0,r.wm)(t)&&t.silent||this.#l({type:"error",error:t}),(0,r.wm)(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#u=(0,r.II)({initialPromise:e?.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){a(t);return}this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:a,onFail:(t,e)=>{this.#l({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}),this.#u.start()}#l(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,r.wm)(i)&&i.revert&&this.#r)return{...this.#r,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.j.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,r.v_)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},8248:(t,e,i)=>{i.d(e,{t:()=>r});var s=i(9323),n=i(4403),r=new class extends s.Q{#d=!0;#i;#s;constructor(){super(),this.#s=t=>{if(!n.S$&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#i||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#i?.(),this.#i=void 0)}setEventListener(t){this.#s=t,this.#i?.(),this.#i=t(this.setOnline.bind(this))}setOnline(t){this.#d!==t&&(this.#d=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#d}}},9323:(t,e,i)=>{i.d(e,{Q:()=>s});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}}}]);