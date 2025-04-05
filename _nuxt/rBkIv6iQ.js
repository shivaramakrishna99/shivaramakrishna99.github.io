import{_ as y}from"./Bv7hmHSO.js";import{_ as w}from"./BczMBcUB.js";import g from"./DVg1XmVa.js";import{aq as $,_ as v,o as d,c as f,a as t,b as o,w as h,F as T,r as I,S,d as x,t as k,N as L,ak as _,g as p,V as M}from"./SiWkwfCR.js";import{u as C}from"./u_82VY5_.js";function D(a,s){const{title:c,titleTemplate:n,...l}=a;return C({title:c,titleTemplate:n,_flatMeta:l},{...s,transform(r){const m=$({...r._flatMeta});return delete r._flatMeta,{...r,meta:m}}})}const N={data(){return{navItems:[{title:"Projects",url:"/projects"},{title:"Writing",url:"/writing"}]}},computed:{isDarkMode(){return document.documentElement.classList.contains("dark")}},methods:{toggleDarkMode(){const a=document.documentElement;a.classList.contains("dark")?(a.classList.remove("dark"),localStorage.setItem("theme","light")):(a.classList.add("dark"),localStorage.setItem("theme","dark"))}},mounted(){localStorage.getItem("theme")==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}},E={class:"bg-flexoki-light-bg dark:bg-flexoki-dark-bg-2 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md dark:backdrop-blur bg-clip-padding border-none sm:border-2 border-flexoki-light-bg-2 dark:border-flexoki-dark-bg-2-2 rounded-3xl mt-2 sm:mt-6 py-2 sm:py-6 mx-auto max-w-5xl"},z={class:"layout-container flex flex-col space-y-2 items-start sm:items-center sm:flex-row sm:justify-between"},P={class:"flex items-center"},j={class:"flex items-start space-x-4"};function F(a,s,c,n,l,r){const m=y,e=w,i=g;return d(),f("header",null,[t("div",E,[t("div",z,[o(e,{to:"/"},{default:h(()=>[t("div",P,[o(m,{src:"/img/utils/srks.png",alt:"Logo",class:"h-10 w-10 mr-2 rounded-full shadow-none"}),s[1]||(s[1]=t("span",{class:"text-xl font-title font-medium"},"Shivaramakrishna Srinivasan",-1))])]),_:1}),t("nav",j,[(d(!0),f(T,null,I(l.navItems,(u,b)=>(d(),S(e,{key:b,to:u.url,class:"rounded-lg pr-4 font-normal hover:text-flexoki-light-bl transition duration-300 ease-in-out"},{default:h(()=>[x(k(u.title),1)]),_:2},1032,["to"]))),128)),t("button",{onClick:s[0]||(s[0]=(...u)=>r.toggleDarkMode&&r.toggleDarkMode(...u)),class:"rounded-lg text-gray-800 dark:text-gray-200 transition duration-300"},[o(i,{name:"mdi:theme-light-dark",size:"24px"})])])])])])}const V=v(N,[["render",F]]),B={class:"py-12"},Y={class:"layout-container"},q={class:"flex flex-col space-y-2 sm:justify-between items-start"},H={class:"flex justify-start items-center space-x-4"},U={href:"https://github.com/shivaramakrishna99",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.linkedin.com/in/srks/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://x.com/srinivason99",target:"_blank",rel:"noopener noreferrer"},G={class:"text-sm flex items-center space-x-2"},J={key:0,class:"text-flexoki-light-ui-3"},K={class:"text-sm flex items-center space-x-2"},O={key:0,class:"text-flexoki-light-ui-3"},Q={class:"py-3 border-t-2 border-t-flexoki-light-bg-2 dark:border-t-flexoki-dark-bg-2-2"},R={class:"layout-container"},X={class:"flex justify-between text-sm sm:text-base text-flexoki-semantic-text-muted"},Z={class:"font-mono"},tt={__name:"Footer",setup(a){const s=L({email1:!1,email2:!1});function c(m,e){navigator.clipboard.writeText(m).then(()=>{s[e]=!0,setTimeout(()=>{s[e]=!1},3e3)},i=>{console.error("Failed to copy text: ",i)})}const n=new Date,l=n.getFullYear(),r=n.toLocaleString("default",{month:"short"});return(m,e)=>{const i=g;return d(),f("footer",null,[t("div",B,[t("div",Y,[e[4]||(e[4]=t("h4",null,"@connect",-1)),t("div",q,[t("div",H,[t("a",U,[o(i,{name:"mdi:github",size:"32px",class:"text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"})]),t("a",W,[o(i,{name:"mdi:linkedin",size:"32px",class:"text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"})]),t("a",A,[o(i,{name:"mdi:twitter",size:"32px",class:"text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"})])]),t("p",G,[e[2]||(e[2]=t("a",{href:"mailto:shivaramakrishna.srinivasan@gmail.com"},[t("code",null,"shivaramakrishna.srinivasan@gmail.com")],-1)),t("button",{onClick:e[0]||(e[0]=u=>c("shivaramakrishna.srinivasan@gmail.com","email1")),class:"ml-2 flex items-center space-x-1"},[o(i,{name:"tabler:copy",size:"12px",class:"text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"}),s.email1?(d(),f("span",J,"Copied!")):_("",!0)])]),t("p",K,[e[3]||(e[3]=t("a",{href:"mailto:s5srinivasan@ucsd.edu"},[t("code",null,"s5srinivasan@ucsd.edu")],-1)),t("button",{onClick:e[1]||(e[1]=u=>c("s5srinivasan@gmail.com","email2")),class:"ml-2 flex items-center space-x-1"},[o(i,{name:"tabler:copy",size:"12px",class:"text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"}),s.email2?(d(),f("span",O,"Copied!")):_("",!0)])])])])]),t("div",Q,[t("div",R,[t("div",X,[e[5]||(e[5]=t("div",null,[t("span",{class:"font-serif italic"},[x("In a 10"),t("sup",null,"1"),x("m frame among the many Powers of Ten")])],-1)),t("div",null,[t("span",Z,k(p(r))+" "+k(p(l)),1)])])])])])}}},et={class:"bg-flexoki-light-bg dark:bg-flexoki-dark-bg-2 text-flexoki-dark-ui dark:text-flexoki-light-ui"},st={class:"flex flex-col min-h-screen"},ot={class:"sticky top-0 z-10"},at={class:"flex-grow layout-container pt-12"},it={__name:"default",setup(a){return D({title:"Shivaramakrishna ivasan",description:"Exploring the infinite scales of the Powers of Ten.",ogTitle:"srks",ogDescription:"Exploring the infinite scales of the Powers of Ten.",ogImage:"https://shivaramakrishna99.github.io/img/utils/srks.png",ogUrl:"https://shivaramakrishna99.github.io",twitterCard:"summary_large_image",twitterTitle:"srks",twitterDescription:"Exploring the infinite scales of the Powers of Ten.",twitterImage:"https://shivaramakrishna99.github.io/img/utils/srks.png",keywords:"Shivaramakrishna, Powers of Ten, Nuxt, Vue, Portfolio",author:"srks",robots:"index, follow"}),(s,c)=>{const n=V,l=tt;return d(),f("body",et,[t("div",st,[t("nav",null,[t("div",ot,[o(n)])]),t("main",at,[M(s.$slots,"default",{},void 0,!0)]),t("footer",null,[o(l)])])])}}},mt=v(it,[["__scopeId","data-v-3518055d"]]);export{mt as default};
