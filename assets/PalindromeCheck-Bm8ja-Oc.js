import{e as o,f as u,b as p,w as d,u as e,o as n,g as f,v as _,a as v,i as h,c as x,t as g,h as k}from"./index-CARImNgB.js";import{_ as A}from"./Content-CjoejRFl.js";const B={key:0},w={__name:"PalindromeCheck",setup(C){const a=o("[Algorithm] 迴文檢查 (Palindrome Check)"),i=o("寫一個函數檢查一個字串是否為迴文（正反讀都一樣的字串）"),l=o(`console.log(isPalindrome("hello")); // false 

  console.log(isPalindrome("madam")); // true
`),t=o(""),r=u(()=>t.value===t.value.split("").reverse().join("")),c=o(`
  \`\`\`javascript
    function solution(A) { 

      return A === A.split('').reverse().join('') 

    }
  \`\`\`
`);return(P,s)=>(n(),p(A,{info:{title:e(a),description:e(i),example:e(l)},source:e(c)},{implementation:d(()=>[f(v("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=m=>h(t)?t.value=m:null),maxlength:"20"},null,512),[[_,e(t)]]),e(t)?(n(),x("div",B,g(e(r)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{w as default};
