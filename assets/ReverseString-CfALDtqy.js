import{f as t,g as u,h as m,w as f,u as e,o as i,i as v,v as _,a as d,j as g,c as x,t as h,k}from"./index-BHp967-F.js";import{_ as j}from"./Content-CNyVEd1o.js";const B={key:0},A={__name:"ReverseString",setup(S){const r=t("[Algorithm] 反轉字串 (Reverse String)"),a=t("寫一個函數來反轉給定的字串"),l=t('console.log(reverseString("hello")); // "olleh"'),o=t(""),s=u(()=>o.value.split("").reverse().join("")),c=t(`
  \`\`\`javascript
    function solution(A) { 

      A.split('').reverse().join('') 

    }
  \`\`\`
`);return(V,n)=>(i(),m(j,{info:{title:e(r),description:e(a),example:e(l)},source:e(c)},{implementation:f(()=>[v(d("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=p=>g(o)?o.value=p:null),maxlength:"10"},null,512),[[_,e(o)]]),e(s)?(i(),x("div",B,h(e(s)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{A as default};
