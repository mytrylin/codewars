import{f as r,m as i,c as _,j as V,d as h,w as B,u as o,o as c,g as p,v as m,b as u,i as y,a as A,t as b,h as k}from"./index-1bFdfSIi.js";import{_ as w}from"./Content-vY5rKDt4.js";const N={key:0},C={__name:"GroupArrayByProperty",setup(j){const f=r("[Algorithm] 群組化物件陣列 (Group Array of Objects by Property)"),d=r("寫一個函數根據指定的屬性將物件陣列分組"),g=r('console.log(groupBy(items, "type"))'),n=r(""),s=r(i.slice(1));s.value.forEach(t=>t.url="");const a=r(JSON.stringify(s.value,null,2)),v=_(()=>s.value.reduce((t,e)=>(t[e.category]||(t[n.value]=[]),t[n.value].push(e),t),{}));V(a,t=>{try{i.value=JSON.parse(t)}catch(e){console.log(e)}});const x=r(`
  \`\`\`javascript
    function solution(A, category) { 

      return A.reduce((groups, item) => { 

        if (!groups[item.category]) { 

          groups[category] = [] 

        }  

        groups[category].push(item) 

        return groups 

      }, {}) 

    }
  \`\`\`
`);return(t,e)=>(c(),h(w,{info:{title:o(f),description:o(d),example:o(g)},source:o(x)},{implementation:B(()=>[p(u("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>y(n)?n.value=l:null),maxlength:"30"},null,512),[[m,o(n)]]),e[2]||(e[2]=u("br",null,null,-1)),p(u("textarea",{"onUpdate:modelValue":e[1]||(e[1]=l=>y(a)?a.value=l:null)},null,512),[[m,o(a)]]),o(a)&&o(n)?(c(),A("div",N,b(o(v)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{C as default};
