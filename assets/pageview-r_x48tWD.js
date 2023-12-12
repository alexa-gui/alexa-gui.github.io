import{_ as t}from"./app-jvwlosC9.js";var a={provider:"Waline",dark:"auto",serverURL:"https://comment.axagiii.com",reaction:["/reactions/smile.png","/reactions/lovingit.png","/reactions/surprised.png","/reactions/awkward.png","/reactions/tears.png","/reactions/scared.png"],comment:!0,pageview:!0,copyright:!1};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-jvwlosC9.js").then(r=>r.L),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}