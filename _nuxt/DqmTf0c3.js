import{j as n,H as o,o as c,Z as h,g as r,ad as l,P as p,l as u,i as d,Q as f}from"./CMWC4bEY.js";import{_ as m}from"./DzTGpol7.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(a){const t=a,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(u(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return f(e,t.src)}return t.src});return(s,e)=>(c(),h(l(r(m)),{src:r(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};