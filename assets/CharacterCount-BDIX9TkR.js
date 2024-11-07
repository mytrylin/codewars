import{r as n,c as p,d as m,w as f,u as t,o as c,e as C,v as d,b as _,i as x,a as v,t as V,f as g}from"./index-BLPjndYo.js";import{_ as k}from"./Content-Cye-U4OO.js";const A={key:0},E={__name:"CharacterCount",setup(B){const s=n("[Algorithm] 計算字串中的字元出現次數 (Character Count)"),l=n("寫一個函數，輸入一個字串，返回每個字元出現的次數"),u=n('console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }'),o=n(""),r=p(()=>{let a={};return o.value.split("").forEach(e=>{a[e]=(a[e]||0)+1}),a}),i=n(`
  // example 1:

  \`\`\`javascript
    function solution(A) { 

      let charCount = {} 

      for (let char of inputVal.value) { 

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
`);return(a,e)=>(c(),m(k,{info:{title:t(s),description:t(l),example:t(u)},source:t(i)},{implementation:f(()=>[C(_("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=h=>x(o)?o.value=h:null),maxlength:"40"},null,512),[[d,t(o)]]),t(r)?(c(),v("div",A,V(t(r)),1)):g("",!0)]),_:1},8,["info","source"]))}};export{E as default};
