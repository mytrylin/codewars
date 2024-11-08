import{e as o,f as m,b as p,w as f,u as t,o as a,g as d,v as _,a as h,i as x,c as v,t as y,h as A}from"./index-Cwo5lnOX.js";import{_ as g}from"./Content-DYZDsLy9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0},C={__name:"ShuffleArraySort",setup(k){const r=o("[Algorithm] 隨機陣列排序 (Shuffle Array Sort)"),n=o("隨機打亂陣列中的元素順序"),i=o("console.log(shuffleArray([1, 2, 3, 4, 5])); // 隨機排序的陣列，例如 [3, 1, 5, 2, 4]"),e=o(""),l=m(()=>e.value.split("").sort(()=>Math.random()-.5)),c=o(`
  \`\`\`javascript
    function solution(A) { 

      return A.sort(() => Math.random() - 0.5) 

    }
  \`\`\`
`);return(B,s)=>(a(),p(g,{info:{title:t(r),description:t(n),example:t(i)},source:t(c)},{implementation:f(()=>[d(h("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>x(e)?e.value=u:null),maxlength:"30"},null,512),[[_,t(e)]]),t(e)?(a(),v("div",S,y(t(l)),1)):A("",!0)]),_:1},8,["info","source"]))}};export{C as default};
