import{f as s,c as p,d,w as f,u as e,o as n,g as _,v,b as x,i as y,a as A,t as g,h}from"./index-CnDFdbL1.js";import{_ as k}from"./Content-CvjWIKzT.js";const B={key:0},C={__name:"SumArray",setup(V){const r=s("[Algorithm] 陣列的元素之和 (Sum of Array Elements)"),i=s("寫一個函數來計算陣列中所有元素的和"),l=s("console.log(sumArray([1, 2, 3, 4])); // 10"),t=s(""),u=p(()=>t.value.split("").reduce((a,o)=>a+parseInt(o),0)),c=s(`
  \`\`\`javascript
    function solution(A) { 

      let val = A.split('') 

      return val.reduce((sum, cur) => sum + parseInt(cur), 0) 

    }
  \`\`\`
`);return(a,o)=>(n(),d(k,{info:{title:e(r),description:e(i),example:e(l)},source:e(c)},{implementation:f(()=>[_(x("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=m=>y(t)?t.value=m:null),maxlength:"30"},null,512),[[v,e(t)]]),e(t)?(n(),A("div",B,g(e(u)),1)):h("",!0)]),_:1},8,["info","source"]))}};export{C as default};
