import{e as o,f as m,b as p,w as f,u as e,o as a,g as _,v as d,a as v,i as x,c as g,t as h,h as w}from"./index-CARImNgB.js";import{_ as y}from"./Content-CjoejRFl.js";const A={key:0},R={__name:"ArrayRemoveDuplicates",setup(D){const n=o("[Algorithm] 陣列去重 (Remove Duplicates from an Array)"),i=o("寫一個函數，去除一個陣列中的重複值"),r=o("console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]"),t=o(""),c=m(()=>[...new Set(t.value)]),l=o(`
  \`\`\`javascript
    function solution(A) { 

      return [...new Set(A)] 

    }
  \`\`\`
`);return(k,s)=>(a(),p(y,{info:{title:e(n),description:e(i),example:e(r)},source:e(l)},{implementation:f(()=>[_(v("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>x(t)?t.value=u:null),maxlength:"10"},null,512),[[d,e(t)]]),e(t)?(a(),g("div",A,h(e(c)),1)):w("",!0)]),_:1},8,["info","source"]))}};export{R as default};
