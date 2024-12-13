import{_ as D,f as u,c as F,d as G,w as C,u as t,o as s,g as m,v as c,b as p,i as b,a as l,F as M,r as T,k as U,t as j,h as v}from"./index-1bFdfSIi.js";import{_ as A}from"./Content-vY5rKDt4.js";const E={key:0},I={key:0},L={__name:"Get6Number",setup(R){const g=u("[tools] 產生6個號碼 (Get 6 Number)"),d=u("用月份日期產生6個1~49號碼"),V=u("console.log(sumArray([1, 2, 3, 4])); // 10"),o=new Date;o.getFullYear();const _=o.getMonth()+1,f=o.getDate(),n=u(_),e=u(f),N=()=>Number(String(n.value).substring(0,1))+Number(String(n.value).substring(1))+Number(String(e.value).substring(0,1))+Number(String(e.value).substring(1)),x=()=>49-(18+(n.value+e.value))+2,S=()=>n.value+e.value,y=()=>49-(18+e.value)+3,h=()=>49-(n.value+e.value)+2,k=()=>49-e.value+1,i=F(()=>[N(),x(),S(),y(),h(),k()]),w=u(`
  \`\`\`javascript  

    const number1 = () => {  

      return  Number(String(inputVal.value).substring(0, 1))  

        + Number(String(inputVal.value).substring(1))  

        + Number(String(inputVal2.value).substring(0, 1))  

        + Number(String(inputVal2.value).substring(1))  

    }  

    const number2 = () => 49 - (18 + (inputVal.value + inputVal2.value)) + 2  

    const number3 = () => inputVal.value + inputVal2.value  

    const number4 = () => 49 - (18 + inputVal2.value) + 3  

    const number5 = () => 49 - (inputVal.value + inputVal2.value) + 2  

    const number6 = () => 49 - inputVal2.value + 1  

  \`\`\`
`);return(Y,r)=>(s(),G(A,{info:{title:t(g),description:t(d),example:t(V)},source:t(w)},{implementation:C(()=>[m(p("input",{type:"number","onUpdate:modelValue":r[0]||(r[0]=a=>b(n)?n.value=a:null),maxlength:"30"},null,512),[[c,t(n)]]),m(p("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=a=>b(e)?e.value=a:null),maxlength:"30"},null,512),[[c,t(e)]]),t(n)?(s(),l("div",E,[(s(!0),l(M,null,T(t(i),(a,B)=>(s(),l("span",null,[U(j(a)+" ",1),B+1<t(i).length?(s(),l("span",I,"、")):v("",!0)]))),256))])):v("",!0)]),_:1},8,["info","source"]))}},z=D(L,[["__scopeId","data-v-f8fe4169"]]);export{z as default};
