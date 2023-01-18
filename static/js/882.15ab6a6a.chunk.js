"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[882],{9198:function(e,r,t){var o=t(1614),n=(t(2791),t(184));r.Z=function(e){var r=e.children;return(0,n.jsx)(o.Z,{sx:{px:{sm:"20px",md:"32px",lg:"16px"}},children:r})}},9392:function(e,r,t){t.d(r,{Z:function(){return N}});var o,n=t(9439),i=t(1413),a=t(5705),d=t(2791),l=t(2797),h=t(6151),s=t(6934),u=t(5202),c=t(4925),g=t(5523),p=t(184),x=(0,s.ZP)(h.Z)((function(e){e.theme;return{color:"#FFFFFF",backgroundColor:"#FC842D",display:"block",borderRadius:"30px",maxWidth:"210px",marginTop:"60px",marginLeft:"323px","&:hover":{backgroundColor:"#FFFFFF",color:"#FC842D"}}})),m=(0,s.ZP)(u.Z)((function(e){e.theme;return{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}})),b=(0,s.ZP)(c.Z)((function(e){e.theme;return{color:"#9B9FAA",fontWeight:700,fontSize:14,lineHeight:1.14}})),v=(0,s.ZP)((function(e){return(0,p.jsx)(g.Z,(0,i.Z)({},e))}))((function(e){e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:"#FC842D"}}})),y=t(9211),Z=t(765),j=t(5527),f=t(8870),W=t(890),w=t(8096),k=t(7078),C=t(7071),B=t(792),F=t(493),T=t(4852),A=t(9900),P=t(168),Y=t(8789),S=(0,Y.default)(f.Z)(o||(o=(0,P.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400;\n  background-color: white;\n  box-shadow: 24;\n  padding: 64px 154px;\n"]))),E=t(5861),R=t(4687),D=t.n(R),q=t(3263);q.Z.defaults.baseURL="https://slimmom-backend.goit.global";var M,_=function(){var e=(0,E.Z)(D().mark((function e(r){var t;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.Z.post("/daily-rate",r);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),H=t(4261),L=t(1087),z=t(9434),O=t(4289),V=function(e){var r,t=e.values,o=e.open,i=e.onClose,a=(0,d.useState)({}),l=(0,n.Z)(a,2),h=l[0],s=l[1],u=(0,z.v9)(O.y$);return(0,d.useEffect)((function(){_(t).then((function(e){return s(e)}))}),[t]),(0,p.jsx)(B.Z,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,p.jsxs)(S,{children:[(0,p.jsx)(W.Z,{id:"modal-modal-title",variant:"h2",component:"span",children:"Your recommended daily calorie intake is"}),(0,p.jsxs)(W.Z,{id:"modal-modal-title",variant:"h3",component:"p",children:[h.dailyRate,"\u043a\u043a\u0430\u043b"]}),(0,p.jsxs)(W.Z,{id:"modal-modal-title",variant:"h4",component:"span",children:["Foods you should not eat",(0,p.jsx)(F.Z,{children:null===h||void 0===h||null===(r=h.notAllowedProducts)||void 0===r?void 0:r.slice(0,4).map((function(e){return(0,p.jsx)(T.ZP,{disablePadding:!0,children:(0,p.jsx)(A.Z,{primary:e})},(0,H.Z)())}))})]}),(0,p.jsx)(L.Link,{to:u?"/diary":"/registration",onClick:i,children:"Start losing weight"})]})})},U=t(1013),$=t(8624),G=Y.default.div(M||(M=(0,P.Z)(["\n  @media screen and (min-width: 768px) {\n    position: fixed;\n    top: 0;\n    right: 0;\n    z-index: -1;\n\n    width: 100vw;\n    height: 100vh;\n\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: contain;\n    /* @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(../images/header/main-768@2x.png);\n    } */\n  }\n\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n  }\n"])),$,U),I={height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:""},J=l.Ry().shape({height:l.Rx().required("Please write down your your height").typeError("Your height must be a number!").positive().min(130,"You cant be that short!").max(220,"Humans cant be that big!"),age:l.Rx().typeError("Your age must be a number!").min(15,"Aplication is not for children").max(80,"Better check your weight with a doctor").required("Please write down your your age"),currentWeight:l.Rx().required("Please write down your current weight").typeError("Your current weight must be a number!").min(50,"You are too light to use this app.").max(350,"You cant be that big!").positive(),desiredWeight:l.Rx().typeError("Your desired weight must be a number!").min(45,"You cant be that light.").max(100,"You can do better!").notOneOf([l.iH("currentWeight"),null],"Your desired weight and current weight are same!").required("Please write down your desired weight"),bloodType:l.Z_().required("Please chose your blood type")});function K(e){var r=(0,y.Z)(),t=!1;return r&&(t=r.value===e.value),(0,p.jsx)(v,(0,i.Z)({checked:t},e))}var N=function(){var e=(0,d.useState)(!1),r=(0,n.Z)(e,2),t=r[0],o=r[1],i=(0,a.TA)({initialValues:I,validationSchema:J,onSubmit:function(e,r){var t=r.setSubmitting;r.resetForm;t(!1)},validateOnBlur:!0}),l=J.isValidSync(i.values),h=function(){o(!t)};return(0,p.jsxs)(j.Z,{elevation:0,sx:{backgroundColor:"transparent"},children:[(0,p.jsx)(G,{}),(0,p.jsxs)(f.Z,{component:"form",sx:{width:"608px",mt:"147px"},autoComplete:"off",onSubmit:i.handleSubmit,children:[(0,p.jsx)(W.Z,{variant:"mainTitle",component:"h1",sx:{mb:"41px"},children:"Calculate your daily calorie intake right now"}),(0,p.jsxs)(w.Z,{variant:"standard",children:[(0,p.jsx)(b,{htmlFor:"height",disableAnimation:!0,shrink:!0,error:i.touched.height&&Boolean(i.errors.height),children:"Height*"}),(0,p.jsx)(k.Z,{notched:"true",id:"height",placeholder:"Write down your height in sm.",value:i.values.height,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.height&&Boolean(i.errors.height),sx:{width:"240px",mt:"17px",mr:"32px"}}),i.touched.height&&i.errors.height?(0,p.jsx)(C.Z,{error:i.touched.height&&Boolean(i.errors.height),id:"height-helper-text",children:i.errors.height}):(0,p.jsx)(C.Z,{id:"height-helper-text",children:" "})]}),(0,p.jsxs)(w.Z,{variant:"standard",children:[(0,p.jsx)(b,{htmlFor:"age",disableAnimation:!0,shrink:!0,error:i.touched.age&&Boolean(i.errors.age),children:"Age*"}),(0,p.jsx)(k.Z,{notched:"true",id:"age",value:i.values.age,placeholder:"Write down your age.",onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.age&&Boolean(i.errors.age),variant:"standard",sx:{width:"240px"}}),i.touched.age&&i.errors.age?(0,p.jsx)(C.Z,{error:i.touched.age&&Boolean(i.errors.age),id:"age-helper-text",children:i.errors.age}):(0,p.jsx)(C.Z,{id:"age-helper-text",children:" "})]}),(0,p.jsxs)(w.Z,{sx:{width:"240px",mt:"17px",mr:"32px"},variant:"standard",children:[(0,p.jsx)(b,{error:i.touched.currentWeight&&Boolean(i.errors.currentWeight),disableAnimation:!0,shrink:!0,htmlFor:"currentWeight",children:"Current Weight*"}),(0,p.jsx)(k.Z,{notched:"true",fullWidth:!0,id:"currentWeight",name:"currentWeight",label:"Current weight*",placeholder:"Write down your weight in kg.",value:i.values.currentWeight,"aria-describedby":"currentWeight-helper-text",onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.currentWeight&&Boolean(i.errors.currentWeight)}),i.touched.currentWeight&&i.errors.currentWeight?(0,p.jsx)(C.Z,{error:i.touched.currentWeight&&Boolean(i.errors.currentWeight),id:"currentWeight-helper-text",children:i.errors.currentWeight}):(0,p.jsx)(C.Z,{id:"currentWeight-helper-text",children:" "})]}),(0,p.jsxs)(w.Z,{sx:{width:"240px",mt:"17px"},variant:"standard",children:[(0,p.jsx)(b,{error:i.touched.bloodType&&Boolean(i.errors.bloodType),disableAnimation:!0,shrink:!0,htmlFor:"bloodType",children:"Blood Type*"}),(0,p.jsx)(k.Z,{disabled:!0,notched:"true",id:"bloodType",name:"bloodType",value:i.values.bloodType,placeholder:"Choose your blood type.","aria-describedby":"bloodType-helper-text",error:i.touched.bloodType&&Boolean(i.errors.bloodType)}),(0,p.jsxs)(Z.Z,{notched:"true",row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:i.values.bloodType,onChange:i.handleChange,sx:{color:"#9B9FAA","&.Mui-checked":{color:"#FC842D"}},children:[(0,p.jsx)(K,{value:"1",control:(0,p.jsx)(m,{}),label:"1"}),(0,p.jsx)(K,{value:"2",control:(0,p.jsx)(m,{}),label:"2"}),(0,p.jsx)(K,{value:"3",control:(0,p.jsx)(m,{}),label:"3"}),(0,p.jsx)(K,{value:"4",control:(0,p.jsx)(m,{}),label:"4"})]}),i.touched.bloodType&&i.errors.bloodType?(0,p.jsx)(C.Z,{error:i.touched.bloodType&&Boolean(i.errors.bloodType),id:"bloodType-helper-text",children:i.errors.bloodType}):(0,p.jsx)(C.Z,{id:"bloodType-helper-text"})]}),(0,p.jsxs)(w.Z,{sx:{width:"240px"},variant:"standard",children:[(0,p.jsx)(b,{error:i.touched.desiredWeight&&Boolean(i.errors.desiredWeight),disableAnimation:!0,shrink:!0,htmlFor:"desiredWeight",children:"Desired Weight*"}),(0,p.jsx)(k.Z,{notched:"true",fullWidth:!0,id:"desiredWeight",name:"desiredWeight",label:"Desired Weight*",placeholder:"Your desired weight in kg.",value:i.values.desiredWeight,"aria-describedby":"desiredWeight-helper-text",onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.desiredWeight&&Boolean(i.errors.desiredWeight)}),i.touched.desiredWeight&&i.errors.desiredWeight?(0,p.jsx)(C.Z,{error:i.touched.desiredWeight&&Boolean(i.errors.desiredWeight),id:"desiredWeight-helper-text",children:i.errors.desiredWeight}):(0,p.jsx)(C.Z,{id:"desiredWeight-helper-text"})]})]}),(0,p.jsx)(x,{disabled:!l,type:"submit",variant:"contained",onClick:h,children:"Start losing weight"}),t&&(0,p.jsx)(V,{values:i.values,open:t,onClose:h})]})}},2882:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var o=t(9198),n=t(9392),i=t(184),a=function(){return(0,i.jsx)(o.Z,{children:(0,i.jsx)(n.Z,{})})}},1013:function(e,r,t){e.exports=t.p+"static/media/desktopMainBg-min.c18cf4700d148dc38596.png"},8624:function(e,r,t){e.exports=t.p+"static/media/tabletMainBg-min.1c320fee67164ac0d33b.png"}}]);
//# sourceMappingURL=882.15ab6a6a.chunk.js.map