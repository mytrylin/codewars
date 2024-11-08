import{e as r,f,b as m,w as d,u as e,o,g as h,v as _,a as g,i as v,c as x,t as y,h as C}from"./index-Cwo5lnOX.js";import{_ as D}from"./Content-DYZDsLy9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={key:0},O={__name:"CharacterTypeDescription",setup(A){const i=r("[Codility] 字元類型描述函數 (Character type description function)"),a=r("判斷第一個字為何種字元 (digit代表數字、upper代表大寫字母、lower代表小寫字母、other代表其他)"),c=r("console.log(CharacterTypeDescription(1)); // Digit"),t=r(""),l=f(()=>{if(t.value===0)return"Other";const n=t.value[0];return/[0-9]/.test(n)?"Digit":/[a-z]/.test(n)?"Lower":/[A-Z]/.test(n)?"Upper":"Other"}),u=r(`
  \`\`\`javascript
    function solution(A) { 

      if (/[0-9]/.test(A)) { 

        return 'Digit' 

      } else if (/[a-z]/.test(A)) { 

        return 'Lower' 

      } else if (/[A-Z]/.test(A)) { 

        return 'Upper' 

      } else { 

        return 'Other' 

      }
    }
  \`\`\`
`);return(n,s)=>(o(),m(D,{info:{title:e(i),description:e(a),example:e(c)},source:e(u)},{implementation:d(()=>[h(g("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=p=>v(t)?t.value=p:null),maxlength:"30"},null,512),[[_,e(t)]]),e(t)?(o(),x("div",w,y(e(l)),1)):C("",!0)]),_:1},8,["info","source"]))}};export{O as default};
