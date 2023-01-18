"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[506],{8782:function(n,e,t){t.d(e,{Mq:function(){return f},OQ:function(){return h},Py:function(){return w},cX:function(){return v},lG:function(){return Z}});var i,r,o,a=t(168),d=t(6934),p=t(1087),c=t(6151),u=t(890),l=t(4554),s=t(5613),x=t(1733),m=t(1578),g=t(6034),f=(0,d.ZP)(p.rU)({display:"block",textAlign:"center",boxSizing:"border-box",paddingTop:"13px",paddingBottom:"13px",border:"1px solid #FC842D",borderRadius:30,width:182,height:"44px",fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"none",color:"white",textDecoration:"none",letterSpacing:"0.04em","&:hover":{backgroundColor:"#de9847",boxShadow:"0 0 0 0.2rem #edb322",color:"white"}}),h=(0,d.ZP)(c.Z)({border:"1px solid #FC842D",borderRadius:30,width:182,fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"none",paddingTop:"13px",paddingBottom:"13px","&:hover":{backgroundColor:"#de9847",boxShadow:"0 0 0 0.2rem #edb322"}}),b=(0,d.ZP)(u.Z)({color:"#FC842D",fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"uppercase",letterSpacing:"0.04em",textAlign:"center",marginBottom:"55px"}),Z=(0,d.ZP)(b)(i||(i=(0,a.Z)(["\n  @media screen and (min-width: 768px) {\n    text-align: start;\n  }\n"]))),v=(0,d.ZP)(l.Z)(r||(r=(0,a.Z)(["\n  padding-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 160px;\n  }\n"]))),w=(0,d.ZP)(l.Z)(o||(o=(0,a.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 70px;\n    left: 0;\n    z-index: -1;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right bottom;\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    top: 0;\n    left: 100px;\n    background-image: url(",");\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),s,x,m,g)},6164:function(n,e,t){t.d(e,{C:function(){return p},l:function(){return d}});var i,r,o=t(168),a=t(6088),d=a.Z.form(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    align-items: flex-start;\n  }\n"]))),p=a.Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 60px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: center;\n    gap: 32px;\n  }\n"])))},3867:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),r=t(3366);t(2791);var o,a=t(168),d=t(6934),p=t(9969),c=(0,d.ZP)(p.Z)(o||(o=(0,a.Z)(["\n  width: 280px;\n  @media screen and (min-width: 768px) {\n    width: 240px;\n  }\n"]))),u=t(184),l=["onChange","value"],s=function(n){var e=n.onChange,t=n.value,o=function(n,e){if(null==n)return{};var t,i,o=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(n,l);return(0,u.jsx)(c,(0,i.Z)({required:!0,variant:"standard",value:t,onChange:e},o))}},9198:function(n,e,t){var i=t(1614),r=(t(2791),t(184));e.Z=function(n){var e=n.children;return(0,r.jsx)(i.Z,{sx:{px:{sm:"20px",md:"32px",lg:"16px"}},children:e})}},7506:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i=t(9198),r=t(9439),o=t(8782),a=t(2791),d=t(9434),p=t(2598),c=t(6164),u=t(3867),l=t(184),s=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1],s=(0,a.useState)(""),x=(0,r.Z)(s,2),m=x[0],g=x[1],f=(0,d.I0)();return(0,l.jsxs)(c.l,{onSubmit:function(n){n.preventDefault(),t&&m&&(f((0,p.pH)({email:t,password:m})),i(""),g(""))},children:[(0,l.jsx)(u.Z,{id:"standard-required-login-email",label:"Email",type:"email",name:"email",value:t,sx:{mb:"40px"},onChange:function(n){return i(n.target.value)}}),(0,l.jsx)(u.Z,{id:"standard-required-login-pass",label:"Password",type:"password",name:"password",value:m,onChange:function(n){return g(n.target.value)}}),(0,l.jsxs)(c.C,{children:[(0,l.jsx)(o.OQ,{type:"submit",variant:"contained",sx:{backgroundColor:"#FC842D"},children:"Log in"}),(0,l.jsx)(o.Mq,{variant:"outlined",sx:{color:"#FC842D"},to:"/registration",children:"Register"})]})]})},x=function(){return(0,l.jsx)(o.cX,{children:(0,l.jsxs)(i.Z,{sx:{pt:"160px"},children:[(0,l.jsx)(o.lG,{children:"Log in"}),(0,l.jsx)(s,{}),(0,l.jsx)(o.Py,{})]})})}},1578:function(n,e,t){n.exports=t.p+"static/media/auth-bg-desk-1x.564081392be1cf34ad1e.png"},6034:function(n,e,t){n.exports=t.p+"static/media/auth-bg-desk-2x.145a2125c2d58fad8d45.png"},5613:function(n,e,t){n.exports=t.p+"static/media/auth-bg-tabl-1x.56b324fbc95cb332ac24.png"},1733:function(n,e,t){n.exports=t.p+"static/media/auth-bg-tabl-2x.7762f634d1c96b6baf04.png"}}]);
//# sourceMappingURL=506.a6a2937d.chunk.js.map