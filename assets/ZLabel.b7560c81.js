import{d as e,o as a,c as l,j as t,k as s,w as i}from"./vendor.f16f8caa.js";var n=e({name:"ZLabel",props:{type:{type:String,default:"default",validator:e=>["default","primary","success","warning","info","danger"].includes(e)},linkType:{type:Boolean,default:!1}},emits:["click"],setup:(e,{emit:a})=>({handleClick:function(l){e.linkType&&a("click",l)}})});const d=i()(((e,i,n,d,c,o)=>e.$slots.default?(a(),l("label",{key:0,class:["z-label",e.linkType?"z-link":"",e.type?`z-label-${e.type}`:""],onClick:i[1]||(i[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[t(e.$slots,"default",{},void 0,!0)],2)):s("",!0)));n.render=d,n.__scopeId="data-v-03a86d87";export default n;