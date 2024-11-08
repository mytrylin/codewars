import{e as o,f as p,b as m,w as f,u as t,o as r,g as C,v as _,a as d,i as x,c as v,t as g,h as A}from"./index-CvHUwKFP.js";import{_ as k}from"./Content-BcFxYVTo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0},j={__name:"CharacterCount",setup(V){const c=o("[Algorithm] 計算字串中的字元出現次數 (Character Count)"),s=o("寫一個函數，輸入一個字串，返回每個字元出現的次數"),l=o('console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }'),e=o(""),u=p(()=>{let a={};return e.value.split("").forEach(n=>{a[n]=(a[n]||0)+1}),a}),i=o(`
  // example 1:

  \`\`\`javascript
    function solution(A) { 

      let charCount = {} 

      for (let char of A) { 

        charCount[char] = ( charCount[char] || 0) + 1 )

      } 

      return charCount 

    } 

  \`\`\`
  // example 2:

  \`\`\`javascript
    function solution(A) { 

      let charCount = {} 

      A.split('').forEach(char => charCount[char] = ( charCount[char] || 0) + 1 ) 

      return charCount 

    } 

  \`\`\`
`);return(a,n)=>(r(),m(k,{info:{title:t(c),description:t(s),example:t(l)},source:t(i)},{implementation:f(()=>[C(d("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=h=>x(e)?e.value=h:null),maxlength:"40"},null,512),[[_,t(e)]]),t(e)?(r(),v("div",B,g(t(u)),1)):A("",!0)]),_:1},8,["info","source"]))}};export{j as default};
