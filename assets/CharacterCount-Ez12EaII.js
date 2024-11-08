import{f as n,g as p,h as m,w as f,u as t,o as c,i as C,v as _,a as d,j as x,c as v,t as g,k}from"./index-BHp967-F.js";import{_ as V}from"./Content-CNyVEd1o.js";const A={key:0},y={__name:"CharacterCount",setup(B){const s=n("[Algorithm] 計算字串中的字元出現次數 (Character Count)"),l=n("寫一個函數，輸入一個字串，返回每個字元出現的次數"),u=n('console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }'),o=n(""),r=p(()=>{let a={};return o.value.split("").forEach(e=>{a[e]=(a[e]||0)+1}),a}),i=n(`
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
`);return(a,e)=>(c(),m(V,{info:{title:t(s),description:t(l),example:t(u)},source:t(i)},{implementation:f(()=>[C(d("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=h=>x(o)?o.value=h:null),maxlength:"40"},null,512),[[_,t(o)]]),t(r)?(c(),v("div",A,g(t(r)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{y as default};
