import{e as l,f as x,b as v,w as B,u as t,o as p,g as m,v as c,a as u,i as g,c as _,t as j,h as V}from"./index-Cwo5lnOX.js";import{_ as w}from"./Content-DYZDsLy9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={key:0},N={__name:"mergeSortedArrays",setup(S){const d=l("[Algorithm] 合併兩個已排序的陣列 (merge Sorted Arrays)"),f=l("寫一個函數來合併兩個已經排序的陣列，並保持合併後的陣列有序"),h=l("console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]"),r=l(""),i=l(""),A=x(()=>{let s=r.value.split(""),e=i.value.split(""),n=[],o=0,a=0;for(;o<s.length&&a<e.length;)s[o]<e[a]?(n.push(s[o]),o++):(n.push(e[a]),a++);return n.concat(s.slice(o)).concat(e.slice(a))}),y=l(`
  \`\`\`javascript
    function solution(A, B) { 

      let mergeArray = [] 

      let i = 0, j = 0; 

      while (i < A.length && j < B.length) { 

        if (A[i] < B[j]) { 

          mergeArray.push(A[i]) 

          i++ 

        } else { 

          mergeArray.push(B[j]) 

          j++ 

        } 

      } 

    }
  \`\`\`
`);return(s,e)=>(p(),v(w,{info:{title:t(d),description:t(f),example:t(h)},source:t(y)},{implementation:B(()=>[m(u("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>g(r)?r.value=n:null),maxlength:"30"},null,512),[[c,t(r)]]),e[2]||(e[2]=u("br",null,null,-1)),m(u("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>g(i)?i.value=n:null),maxlength:"30"},null,512),[[c,t(i)]]),t(r)?(p(),_("div",k,j(t(A)),1)):V("",!0)]),_:1},8,["info","source"]))}};export{N as default};
