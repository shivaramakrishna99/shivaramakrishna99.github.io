import n from"./BD5Yl3PD.js";import{u as a,e as c,f as m,c as p,b as u,g as i,o as _}from"./D-Nfu3xA.js";import{q as l}from"./t6tPXyZc.js";import"./DG3MDdhb.js";import"./DYYMg0Vm.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./DwVncTXb.js";import"./DcIHvM5A.js";import"./BW5mANVm.js";import"./nxQ-3bbn.js";const A={__name:"[slug]",async setup(f){let t,o;const r=a().params.slug,e=([t,o]=c(()=>l("projects").where({slug:r}).findOne()),t=await t,o(),t);if(!e)throw m({statusCode:404,statusMessage:"Project not found"});return(g,h)=>{const s=n;return _(),p("div",null,[u(s,{document:i(e)},null,8,["document"])])}}};export{A as default};