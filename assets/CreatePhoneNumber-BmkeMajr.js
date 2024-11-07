import{r as t,c as d,d as f,u as e,o as a,w as v,e as _,v as h,b as w,i as x,a as b,t as j,f as $}from"./index-DyU_RppG.js";import{_ as k}from"./Content-UY2P1HGE.js";const C={key:0},V={__name:"CreatePhoneNumber",setup(N){const i=t("[Codewars] Create Phone Number"),l=t("編寫一個接受 10 個整數（0 到 9 之間）的陣列的函數，該函數以電話號碼的形式傳回這些數字的字串"),r=t('reatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"'),c=t("https://www.codewars.com/kata/525f50e3b73515a6db000b83"),o=t(""),u=d(()=>{let n=o.value.split("");return n.length?`(${n.slice(0,4).join("")}) -  ${n.slice(4,7).join("")} - ${n.slice(7,10).join("")}`:""}),p=t(`
  \`\`\`javascript
    function solution(A) { 

      let val = A.split('') 

      return val.length? 

      \`(\${val.slice(0, 4).join('')}) -  \${val.slice(4, 7).join('')} - \${val.slice(7, 10).join('')}\` 

    }
  \`\`\`
`);return(n,s)=>(a(),f(k,{info:{title:e(i),description:e(l),example:e(r),url:e(c)},source:e(p)},{implementation:v(()=>[_(w("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=m=>x(o)?o.value=m:null),maxlength:"10"},null,512),[[h,e(o)]]),e(o)?(a(),b("div",C,j(e(u)),1)):$("",!0)]),_:1},8,["info","source"]))}};export{V as default};
