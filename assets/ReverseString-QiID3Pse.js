import{e as o,f as p,b as m,w as f,u as e,o as n,g as v,v as _,a as d,i as g,c as x,t as h,h as k}from"./index-CARImNgB.js";import{_ as B}from"./Content-CjoejRFl.js";const S={key:0},A={__name:"ReverseString",setup(V){const r=o("[Algorithm] 反轉字串 (Reverse String)"),i=o("寫一個函數來反轉給定的字串"),a=o('console.log(reverseString("hello")); // "olleh"'),t=o(""),l=p(()=>t.value.split("").reverse().join("")),c=o(`
  \`\`\`javascript
    function solution(A) { 

      return A.split('').reverse().join('') 

    }
  \`\`\`
`);return(j,s)=>(n(),m(B,{info:{title:e(r),description:e(i),example:e(a)},source:e(c)},{implementation:f(()=>[v(d("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>g(t)?t.value=u:null),maxlength:"10"},null,512),[[_,e(t)]]),e(t)?(n(),x("div",S,h(e(l)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{A as default};
