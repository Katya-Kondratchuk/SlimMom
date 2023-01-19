"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[366],{8782:function(n,e,t){t.d(e,{Mq:function(){return g},OQ:function(){return h},Py:function(){return w},cX:function(){return y},lG:function(){return b}});var i,r,a,o=t(168),c=t(6934),d=t(1087),l=t(6151),s=t(890),u=t(8870),p=t(5613),f=t(1733),m=t(1578),x=t(6034),g=(0,c.ZP)(d.Link)({display:"block",textAlign:"center",boxSizing:"border-box",paddingTop:"13px",paddingBottom:"13px",border:"1px solid #FC842D",borderRadius:30,width:182,height:"44px",fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"none",color:"white",textDecoration:"none",letterSpacing:"0.04em","&:hover, &:focus":{backgroundColor:"#de9847",color:"white"}}),h=(0,c.ZP)(l.Z)({display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #FC842D",borderRadius:30,width:182,fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"none",paddingTop:"13px",paddingBottom:"13px","&:hover, &:focus":{backgroundColor:"#f28f1d"},"&:disabled":{backgroundColor:"#f28f1d"}}),v=(0,c.ZP)(s.Z)({color:"#FC842D",fontWeight:700,fontSize:"14px",lineHeight:1.2,textTransform:"uppercase",letterSpacing:"0.04em",textAlign:"center",marginBottom:"55px"}),b=(0,c.ZP)(v)(i||(i=(0,o.Z)(["\n  @media screen and (min-width: 768px) {\n    text-align: start;\n  }\n"]))),y=(0,c.ZP)(u.Z)(r||(r=(0,o.Z)(["\n  padding-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 160px;\n  }\n"]))),w=(0,c.ZP)(u.Z)(a||(a=(0,o.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 70px;\n    left: 0;\n    z-index: -1;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right bottom;\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    top: 0;\n    left: 100px;\n    background-image: url(",");\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),p,f,m,x)},6164:function(n,e,t){t.d(e,{C:function(){return d},l:function(){return c}});var i,r,a=t(168),o=t(6088),c=o.Z.form(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    align-items: flex-start;\n  }\n"]))),d=o.Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 60px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: center;\n    gap: 32px;\n  }\n"])))},7008:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r=t(1413),a=t(5987),o=(t(2791),t(168)),c=t(6934),d=t(5935),l=(0,c.ZP)(d.Z)(i||(i=(0,o.Z)(["\n  width: 280px;\n  @media screen and (min-width: 768px) {\n    width: 240px;\n  }\n"]))),s=t(184),u=["onChange","value"],p=function(n){var e=n.onChange,t=n.value,i=(0,a.Z)(n,u);return(0,s.jsx)(l,(0,r.Z)({required:!0,variant:"standard",value:t,onChange:e},i))}},3055:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(2791),r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(n){var e=function(n){if("number"===typeof n)return{value:n,unit:"px"};var e,t=(n.match(/^[0-9.]*/)||"").toString();e=t.includes(".")?parseFloat(t):parseInt(t,10);var i=(n.match(/[^0-9]*$/)||"").toString();return r[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}(n);return"".concat(e.value).concat(e.unit)}var o=function(){return o=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},o.apply(this,arguments)},c=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]])}return t},d=function(n,e,t){var i="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return i;var r=document.createElement("style");document.head.appendChild(r);var a=r.sheet,o="\n    @keyframes ".concat(i," {\n      ").concat(e,"\n    }\n  ");return a&&a.insertRule(o,0),i}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");var l=function(n){var e=n.loading,t=void 0===e||e,r=n.color,l=void 0===r?"#000000":r,s=n.speedMultiplier,u=void 0===s?1:s,p=n.cssOverride,f=void 0===p?{}:p,m=n.size,x=void 0===m?15:m,g=n.margin,h=void 0===g?2:g,v=c(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),b=o({display:"inherit"},f),y=function(n){return{display:"inline-block",backgroundColor:l,width:a(x),height:a(x),margin:a(h),borderRadius:"100%",animation:"".concat(d," ").concat(.7/u,"s ").concat(n%2?"0s":"".concat(.35/u,"s")," infinite linear"),animationFillMode:"both"}};return t?i.createElement("span",o({style:b},v),i.createElement("span",{style:y(1)}),i.createElement("span",{style:y(2)}),i.createElement("span",{style:y(3)})):null},s=t(184),u=function(){return(0,s.jsx)(l,{color:"#ffffff",size:12})}},9198:function(n,e,t){var i=t(1614),r=(t(2791),t(184));e.Z=function(n){var e=n.children;return(0,r.jsx)(i.Z,{sx:{px:{sm:"20px",md:"32px",lg:"16px"}},children:e})}},5366:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i=t(9198),r=t(9439),a=t(8782),o=t(2791),c=t(9434),d=t(2598),l=t(4289),s=t(6164),u=t(7008),p=t(3055),f=t(184),m=function(){var n=(0,c.v9)(l.AP),e=(0,o.useState)(""),t=(0,r.Z)(e,2),i=t[0],m=t[1],x=(0,o.useState)(""),g=(0,r.Z)(x,2),h=g[0],v=g[1],b=(0,o.useState)(""),y=(0,r.Z)(b,2),w=y[0],Z=y[1],j=(0,c.I0)();return(0,f.jsxs)(s.l,{onSubmit:function(n){n.preventDefault(),w&&i&&h&&(j((0,d.a$)({username:w,email:i,password:h})),Z(""),m(""),v(""))},children:[(0,f.jsx)(u.Z,{id:"standard-required-register-name",label:"Name",type:"text",name:"username",sx:{mb:"40px"},value:w,onChange:function(n){return Z(n.target.value)}}),(0,f.jsx)(u.Z,{id:"standard-required-register-email",label:"Email",type:"email",name:"email",sx:{mb:"40px"},value:i,onChange:function(n){return m(n.target.value)}}),(0,f.jsx)(u.Z,{id:"standard-required-register-pass",label:"Password",type:"password",name:"password",value:h,onChange:function(n){return v(n.target.value)}}),(0,f.jsxs)(s.C,{children:[(0,f.jsx)(a.OQ,{type:"submit",variant:"contained",disabled:n,sx:{backgroundColor:"#FC842D"},children:n?(0,f.jsx)(p.Z,{}):"Register"}),(0,f.jsx)(a.Mq,{variant:"outlined",sx:{color:"#FC842D",pointerEvents:"".concat(n?"none":"all")},to:"/login",children:"Log in"})]})]})},x=function(){return(0,f.jsx)(a.cX,{children:(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(a.lG,{children:"Register"}),(0,f.jsx)(m,{}),(0,f.jsx)(a.Py,{})]})})}},1578:function(n,e,t){n.exports=t.p+"static/media/auth-bg-desk-1x.564081392be1cf34ad1e.png"},6034:function(n,e,t){n.exports=t.p+"static/media/auth-bg-desk-2x.145a2125c2d58fad8d45.png"},5613:function(n,e,t){n.exports=t.p+"static/media/auth-bg-tabl-1x.56b324fbc95cb332ac24.png"},1733:function(n,e,t){n.exports=t.p+"static/media/auth-bg-tabl-2x.7762f634d1c96b6baf04.png"}}]);
//# sourceMappingURL=366.b859506c.chunk.js.map