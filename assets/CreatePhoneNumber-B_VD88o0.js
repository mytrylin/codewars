import{e as t,f as d,b as f,u as e,o as a,w as v,g as _,v as h,a as w,i as x,c as b,t as j,h as $}from"./index-CvHUwKFP.js";import{_ as g}from"./Content-BcFxYVTo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={key:0},y={__name:"CreatePhoneNumber",setup(C){const i=t("[Codewars] Create Phone Number"),l=t("編寫一個接受 10 個整數（0 到 9 之間）的陣列的函數，該函數以電話號碼的形式傳回這些數字的字串"),r=t('reatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"'),c=t("https://www.codewars.com/kata/525f50e3b73515a6db000b83"),o=t(""),u=d(()=>{let n=o.value.split("");return n.length?`(${n.slice(0,4).join("")}) -  ${n.slice(4,7).join("")} - ${n.slice(7,10).join("")}`:""}),p=t(`
  \`\`\`javascript
    function solution(A) { 

      let val = A.split('') 

      return val.length? 

      \`(\${val.slice(0, 4).join('')}) -  \${val.slice(4, 7).join('')} - \${val.slice(7, 10).join('')}\` 

    }
  \`\`\`
`);return(n,s)=>(a(),f(g,{info:{title:e(i),description:e(l),example:e(r),url:e(c)},source:e(p)},{implementation:v(()=>[_(w("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=m=>x(o)?o.value=m:null),maxlength:"10"},null,512),[[h,e(o)]]),e(o)?(a(),b("div",k,j(e(u)),1)):$("",!0)]),_:1},8,["info","source"]))}};export{y as default};