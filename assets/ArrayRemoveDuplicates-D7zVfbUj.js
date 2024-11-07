import{r as t,c as p,d as m,w as f,u as e,o as n,e as d,v as _,b as v,i as x,a as y,t as A,f as D}from"./index-BTZgGJZT.js";import{_ as g}from"./Content-DNimQkls.js";const h={key:0},R={__name:"ArrayRemoveDuplicates",setup(k){const i=t("[Algorithm] 陣列去重 (Remove Duplicates from an Array)"),r=t("寫一個函數，去除一個數組中的重複值"),l=t("console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]"),o=t(""),s=p(()=>[...new Set(o.value)]),c=t(`
  \`\`\`javascript
    function solution(A) { 

      A.split('').reverse().join('') 

    }
  \`\`\`
`);return(w,a)=>(n(),m(g,{info:{title:e(i),description:e(r),example:e(l)},source:e(c)},{implementation:f(()=>[d(v("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=u=>x(o)?o.value=u:null),maxlength:"10"},null,512),[[_,e(o)]]),e(s)?(n(),y("div",h,A(e(s)),1)):D("",!0)]),_:1},8,["info","source"]))}};export{R as default};
