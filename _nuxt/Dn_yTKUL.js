import c from"./D8ztZY7G.js";import{u as m,e as p,f as u,c as l,a as s,t as n,g as o,b as _,o as f}from"./DZJXRnfU.js";import{q as d}from"./DMnJkVkI.js";import"./jIJcMqKw.js";import"./BmbfTwk9.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./Dj8Zv2sP.js";import"./uDa0z0GE.js";import"./D_oPwo3d.js";import"./o4tyNL57.js";const g={class:"font-serif font-italic py-4"},M={__name:"[slug]",async setup(h){let t,r;const a=m().params.slug,e=([t,r]=p(()=>d("writing").where({slug:a}).findOne()),t=await t,r(),t);if(!e)throw u({statusCode:404,statusMessage:"Article not found"});return(y,C)=>{const i=c;return f(),l("div",null,[s("h1",g,n(o(e).title),1),s("h5",null,n(o(e).description),1),_(i,{document:o(e)},null,8,["document"])])}}};export{M as default};