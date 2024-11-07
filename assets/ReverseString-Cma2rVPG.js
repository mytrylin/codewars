import{r as t,c as u,d as m,w as d,u as e,o as i,e as f,v,b as _,i as x,a as g,t as h,f as k}from"./index-BLPjndYo.js";import{_ as B}from"./Content-Cye-U4OO.js";const S={key:0},A={__name:"ReverseString",setup(V){const r=t("[Algorithm] 反轉字串 (Reverse String)"),a=t("寫一個函數來反轉給定的字串"),l=t('console.log(reverseString("hello")); // "olleh"'),o=t(""),s=u(()=>o.value.split("").reverse().join("")),c=t(`
  \`\`\`javascript
    function solution(A) { 

      A.split('').reverse().join('') 

    }
  \`\`\`
`);return(j,n)=>(i(),m(B,{info:{title:e(r),description:e(a),example:e(l)},source:e(c)},{implementation:d(()=>[f(_("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=p=>x(o)?o.value=p:null),maxlength:"10"},null,512),[[v,e(o)]]),e(s)?(i(),g("div",S,h(e(s)),1)):k("",!0)]),_:1},8,["info","source"]))}};export{A as default};
