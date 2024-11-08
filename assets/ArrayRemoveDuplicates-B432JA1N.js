import{f as t,g as p,h as m,w as f,u as e,o as n,i as _,v as d,a as v,j as x,c as g,t as h,k}from"./index-BHp967-F.js";import{_ as y}from"./Content-CNyVEd1o.js";const A={key:0},j={__name:"ArrayRemoveDuplicates",setup(D){const i=t("[Algorithm] 陣列去重 (Remove Duplicates from an Array)"),r=t("寫一個函數，去除一個數組中的重複值"),l=t("console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]"),o=t(""),s=p(()=>[...new Set(o.value)]),c=t(`
  \`\`\`javascript
    function solution(A) { 

      A.split('').reverse().join('') 

    }
  \`\`\`
`);return(w,a)=>(n(),m(y,{info:{title:e(i),description:e(r),example:e(l)},source:e(c)},{implementation:f(()=>[_(v("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=u=>x(o)?o.value=u:null),maxlength:"10"},null,512),[[d,e(o)]]),e(s)?(n(),g("div",A,h(e(s)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{j as default};
