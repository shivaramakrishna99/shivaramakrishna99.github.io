import c from"./Bef6hpgI.js";import{u as m,e as p,f as u,c as l,a as s,t as n,g as o,b as _,o as f}from"./VRLDveT2.js";import{q as d}from"./Drl_HXgy.js";import"./C7qxkx7v.js";import"./D_jsMjR5.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./G-F-mvDA.js";import"./ZbtFqT9_.js";import"./wlnpXZt_.js";import"./Dk3fkE5Z.js";const g={class:"font-serif font-italic py-4"},M={__name:"[slug]",async setup(h){let t,r;const a=m().params.slug,e=([t,r]=p(()=>d("writing").where({slug:a}).findOne()),t=await t,r(),t);if(!e)throw u({statusCode:404,statusMessage:"Article not found"});return(y,C)=>{const i=c;return f(),l("div",null,[s("h1",g,n(o(e).title),1),s("h5",null,n(o(e).description),1),_(i,{document:o(e)},null,8,["document"])])}}};export{M as default};
