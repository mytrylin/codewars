import{f as o,c as p,d as m,w as d,u as e,o as n,g as f,v,b as _,i as g,a as x,t as h,h as k}from"./index-CnDFdbL1.js";import{_ as B}from"./Content-CvjWIKzT.js";const S={key:0},A={__name:"ReverseString",setup(V){const r=o("[Algorithm] 反轉字串 (Reverse String)"),i=o("寫一個函數來反轉給定的字串"),a=o('console.log(reverseString("hello")); // "olleh"'),t=o(""),l=p(()=>t.value.split("").reverse().join("")),c=o(`
  \`\`\`javascript
    function solution(A) { 

      return A.split('').reverse().join('') 

    }
  \`\`\`
`);return(j,s)=>(n(),m(B,{info:{title:e(r),description:e(i),example:e(a)},source:e(c)},{implementation:d(()=>[f(_("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>g(t)?t.value=u:null),maxlength:"10"},null,512),[[v,e(t)]]),e(t)?(n(),x("div",S,h(e(l)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{A as default};
