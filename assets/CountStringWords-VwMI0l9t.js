import{f as o,c as m,d as p,w as d,u as t,o as n,g as f,v as _,b as g,i as h,a as x,t as v,h as w}from"./index-CnDFdbL1.js";import{_ as k}from"./Content-CvjWIKzT.js";const y={key:0},N={__name:"CountStringWords",setup(B){const r=o("[Algorithm] 字串中的單詞計數 (Count the Number of Words in a String)"),a=o("寫一個函數計算字串中的單詞數"),i=o('console.log(countWords("Hello world! How are you?")); // 5'),e=o(""),l=m(()=>e.value.trim().split(/\s+/).length),c=o(`
  \`\`\`javascript
    function solution(A) { 

      return A.trim().split(/s+/).length 

    }
  \`\`\`
`);return(C,s)=>(n(),p(k,{info:{title:t(r),description:t(a),example:t(i)},source:t(c)},{implementation:d(()=>[f(g("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>h(e)?e.value=u:null),maxlength:"30"},null,512),[[_,t(e)]]),t(e)?(n(),x("div",y,v(t(l)),1)):w("",!0)]),_:1},8,["info","source"]))}};export{N as default};
