"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{9955:function(e,o,t){t.d(o,{B:function(){return l},k:function(){return s}});var n,r,i=t(168),a=t(493),d=t(8789),l=(0,d.default)(a.Z)(n||(n=(0,i.Z)(["\n  ::-webkit-scrollbar {\n    width: 6px;\n    background: #f0f1f3;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 6px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #264061;\n    border-radius: 6px;\n  }\n\n  &.MuiList-root {\n    margin-top: 44px;\n    padding: 0;\n    width: 650px;\n    position: relative;\n    overflow: auto;\n    max-height: 271px;\n    @media screen and (max-width: 767px) {\n      margin-top: 12px;\n      width: 292px;\n      max-height: 220px;\n    }\n  }\n"]))),s=d.default.h2(r||(r=(0,i.Z)(["\n  text-align: center;\n  font-size: 36px;\n  font-weight: 700;\n  font-family: 'Verdana';\n  color: #070730a7;\n  margin-left: 40px;\n  margin-top: 55px;\n  width: 550px;\n"])))},5220:function(e,o,t){t.d(o,{Z:function(){return ne}});var n=t(9439),r=t(1413),i=t(5705),a=t(2791),d=t(2797),l=t(339),s=t(7462),u=t(3366),h=t(8182),x=t(4419),c=t(6934),p=t(1402),m=t(5878),g=t(1217);function b(e){return(0,g.Z)("MuiFormGroup",e)}(0,m.Z)("MuiFormGroup",["root","row","error"]);var f,v,y=t(2930),w=t(6147),Z=t(184),j=["className","row"],k=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,t.row&&o.row]}})((function(e){var o=e.ownerState;return(0,s.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})})),W=a.forwardRef((function(e,o){var t=(0,p.Z)({props:e,name:"MuiFormGroup"}),n=t.className,r=t.row,i=void 0!==r&&r,a=(0,u.Z)(t,j),d=(0,y.Z)(),l=(0,w.Z)({props:t,muiFormControl:d,states:["error"]}),c=(0,s.Z)({},t,{row:i,error:l.error}),m=function(e){var o=e.classes,t={root:["root",e.row&&"row",e.error&&"error"]};return(0,x.Z)(t,b,o)}(c);return(0,Z.jsx)(k,(0,s.Z)({className:(0,h.Z)(m.root,n),ownerState:c,ref:o},a))})),F=t(2071),B=t(8278),C=t(8672),A=t(7384),T=["actions","children","defaultValue","name","onChange","value"],S=a.forwardRef((function(e,o){var t=e.actions,r=e.children,i=e.defaultValue,d=e.name,l=e.onChange,h=e.value,x=(0,u.Z)(e,T),c=a.useRef(null),p=(0,B.Z)({controlled:h,default:i,name:"RadioGroup"}),m=(0,n.Z)(p,2),g=m[0],b=m[1];a.useImperativeHandle(t,(function(){return{focus:function(){var e=c.current.querySelector("input:not(:disabled):checked");e||(e=c.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var f=(0,F.Z)(o,c),v=(0,A.Z)(d),y=a.useMemo((function(){return{name:v,onChange:function(e){b(e.target.value),l&&l(e,e.target.value)},value:g}}),[v,l,b,g]);return(0,Z.jsx)(C.Z.Provider,{value:y,children:(0,Z.jsx)(W,(0,s.Z)({role:"radiogroup",ref:f},x,{children:r}))})})),P=t(1426),R=t(8870),D=t(890),M=t(4110),E=t(7071),N=t(1536),Y=t(3400),H=t(4721),O=t(9900),L=t(168),z=t(8789),G=z.default.li(f||(f=(0,L.Z)(["\n  margin-bottom: 14px;\n  ::marker {\n    color: #9b9faa;\n    font-family: 'Verdana';\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  /* @media screen and (max-width: 767px) {\n    \n  } */\n"]))),I=(0,z.default)(R.Z)(v||(v=(0,L.Z)(["\n  position: absolute;\n  top: 25%;\n  /* left: 50%; */\n  width: 100vw;\n  max-height: 638px;\n  padding: 40px 20px 119px;\n\n  @media screen and (min-width: 768px) {\n    width: 672px;\n    height: 572px;\n    padding: 64px 154px;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n  }\n  @media screen and (min-width: 1280px) {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  background-color: white;\n"]))),V=t(9211),q=t(1087),_=t(9434),$=t(4289),J=t(5130),K=t(229),Q=t(9276),U=t(5594),X=function(e){var o=e.values,t=e.open,r=e.onClose,i=e.setOpen,d=(0,a.useState)({}),s=(0,n.Z)(d,2),u=s[0],h=s[1],x=(0,_.v9)($.y$);Object.keys(o).forEach((function(e,t){"string"===typeof o[e]&&(o[e]=Number(o[e]))})),(0,a.useEffect)((function(){(0,V.Hp)(o).then((function(e){return h(e)}))}),[o]);var c=function(){return i(!t)};return(0,Z.jsx)(N.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsxs)(I,{children:[(0,Z.jsx)(Y.Z,{onClick:c,sx:{position:"absolute",top:20,right:20,display:{xs:"none",md:"block"}},children:(0,Z.jsx)(J.Z,{})}),(0,Z.jsx)(Y.Z,{onClick:c,sx:{position:"absolute",top:"-40px",left:20,display:{xs:"block",md:"none"}},children:(0,Z.jsx)(K.Z,{})}),(0,Z.jsx)(D.Z,{id:"modal-modal-title",variant:"h2",component:"span",sx:{m:{xs:"0 auto 42px auto",md:"64px auto 20px auto"},textAlign:{xs:"start",md:"center"},fontSize:{xs:"18px",md:"36px"},maxWidth:{xs:"280px",md:"508px"}},children:"Your recommended daily calorie intake is"}),(0,Z.jsxs)(D.Z,{id:"modal-modal-title",variant:"h3",component:"p",children:[u.dailyRate," \u043a\u043a\u0430\u043b."]}),(0,Z.jsx)(H.Z,{variant:"middle",sx:{maxWidth:"280px",m:"0 auto"}}),(0,Z.jsxs)(Q.Z,{component:"div",sx:{maxWidth:"330px",m:"0 auto"},children:[(0,Z.jsx)(D.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto"}},children:"Foods you should not eat"}),(0,Z.jsxs)("ol",{type:"1",style:{minHeight:"112px",marginBottom:"40px",padding:"0"},children:[(0,Z.jsx)(G,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,Z.jsx)(O.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(u.notAllowedProducts))})}),(0,Z.jsx)(G,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,Z.jsx)(O.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(u.notAllowedProducts))})}),(0,Z.jsx)(G,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,Z.jsx)(O.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(u.notAllowedProducts))})}),(0,Z.jsx)(G,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,Z.jsx)(O.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(u.notAllowedProducts))})})]})]}),(0,Z.jsx)(q.Link,{component:"button",style:{margin:"0 auto",textDecoration:"none"},to:x?"/diary":"/registration",onClick:r,children:(0,Z.jsx)(l.Eo,{sx:{m:"0 auto"},children:"Start losing weight"})})]})})},ee=t(2754),oe=d.Ry().shape({height:d.Rx().required("Please write down your your height").typeError("Your height must be a number!").positive("Height mast be a positive number").min(130,"You cant be that short!").max(220,"Humans cant be that big!"),age:d.Rx().typeError("Your age must be a number!").min(15,"Aplication is not for children").max(80,"Better check your weight with a doctor").required("Please write down your your age"),weight:d.Rx().required("Please write down your current weight").typeError("Your current weight must be a number!").min(50,"You are too light to use this app.").max(350,"You cant be that big!").positive("Weight mast be a positive number"),desiredWeight:d.Rx().typeError("Your desired weight must be a number!").min(45,"You cant be that light.").max(100,"You can do better!").notOneOf([d.iH("weight"),null],"Your desired weight and current weight are same!").required("Please write down your desired weight").positive("Desired weight mast be a positive"),bloodType:d.Z_().required("Please chose your blood type")});function te(e){var o=(0,P.Z)(),t=!1;return o&&(t=o.value===e.value),(0,Z.jsx)(l.I8,(0,r.Z)({checked:t},e))}var ne=function(e){e.onSubmit;var o,t=(0,a.useState)(!1),r=(0,n.Z)(t,2),d=r[0],s=r[1],u=(0,_.I0)(),h=(0,_.v9)($._3),x=JSON.parse(null===(o=localStorage)||void 0===o?void 0:o.getItem("item")),c={height:(null===h||void 0===h?void 0:h.height)||(null===x||void 0===x?void 0:x.height)||"",age:(null===h||void 0===h?void 0:h.age)||(null===x||void 0===x?void 0:x.age)||"",weight:(null===h||void 0===h?void 0:h.weight)||(null===x||void 0===x?void 0:x.weight)||"",desiredWeight:(null===h||void 0===h?void 0:h.desiredWeight)||(null===x||void 0===x?void 0:x.desiredWeight)||"",bloodType:(null===h||void 0===h?void 0:h.bloodType)||(null===x||void 0===x?void 0:x.bloodType)||""};console.log("Hi!");var p=(0,i.TA)({initialValues:c,validationSchema:oe,onSubmit:function(e,o){var t=o.setSubmitting;o.resetForm;t(!0),localStorage.setItem("item",JSON.stringify(e)),t(!1)},validateOnBlur:!0}),m=oe.isValidSync(p.values),g=function(){s(!d)},b=(0,_.v9)($.y$),f=(0,_.v9)($.nR);return(0,Z.jsxs)(R.Z,{component:"div",children:[(0,Z.jsxs)(R.Z,{component:"div",sx:{textAlign:"centr",maxWidth:{lg:"608px",md:"518px",xs:"280px"},m:{xs:"32px auto 0 auto",md:"100px auto 0 auto",lg:"147px auto 0 0"}},children:[(0,Z.jsx)(D.Z,{variant:"h2",component:"h1",sx:{mb:{xs:"34px",md:"68px"},textAlign:{xs:"center",md:"start"},fontSize:{xs:"18px",md:"34px"}},children:"Calculate your daily calorie intake right now"}),(0,Z.jsxs)(R.Z,{component:"form",sx:{m:{xs:"0 auto",md:"0 auto 0 0"},maxWidth:{md:"512px",xs:"240px"}},autoComplete:"off",onSubmit:p.handleSubmit,children:[(0,Z.jsxs)(R.Z,{component:"div",sx:{display:{md:"flex"},gap:"32px"},children:[(0,Z.jsxs)(R.Z,{component:"div",children:[(0,Z.jsx)(l.Nd,{htmlFor:"height",disableAnimation:!0,shrink:!0,error:p.touched.height&&Boolean(p.errors.height),children:"Height*"}),(0,Z.jsx)(M.Z,{notched:"true",id:"height",placeholder:"Write down your height in sm.",value:p.values.height,onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.height&&Boolean(p.errors.height),sx:{width:"242px"}}),p.touched.height&&p.errors.height?(0,Z.jsx)(E.Z,{error:p.touched.height&&Boolean(p.errors.height),id:"height-helper-text",children:p.errors.height}):(0,Z.jsx)(E.Z,{id:"height-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{htmlFor:"age",disableAnimation:!0,shrink:!0,error:p.touched.age&&Boolean(p.errors.age),sx:{mt:{xs:"32px",md:"20px"}},children:"Age*"}),(0,Z.jsx)(M.Z,{notched:"true",id:"age",value:p.values.age,placeholder:"Write down your age.",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.age&&Boolean(p.errors.age),variant:"standard",sx:{width:"240px"}}),p.touched.age&&p.errors.age?(0,Z.jsx)(E.Z,{error:p.touched.age&&Boolean(p.errors.age),id:"age-helper-text",children:p.errors.age}):(0,Z.jsx)(E.Z,{id:"age-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{error:p.touched.weight&&Boolean(p.errors.weight),disableAnimation:!0,shrink:!0,htmlFor:"weight",sx:{mt:{xs:"32px",md:"20px"}},children:"Current Weight*"}),(0,Z.jsx)(M.Z,{notched:"true",fullWidth:!0,id:"weight",name:"weight",label:"Current weight*",placeholder:"Write down your weight in kg.",value:p.values.weight,"aria-describedby":"weight-helper-text",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.weight&&Boolean(p.errors.weight),sx:{width:"240px"}}),p.touched.weight&&p.errors.weight?(0,Z.jsx)(E.Z,{error:p.touched.weight&&Boolean(p.errors.weight),id:"weight-helper-text",children:p.errors.weight}):(0,Z.jsx)(E.Z,{id:"weight-helper-text",children:" "})]}),(0,Z.jsxs)(R.Z,{component:"div",children:[(0,Z.jsx)(l.Nd,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{mt:{xs:"32px",md:"0"}},disableAnimation:!0,shrink:!0,htmlFor:"desiredWeight",children:"Desired Weight*"}),(0,Z.jsx)(M.Z,{notched:"true",fullWidth:!0,id:"desiredWeight",name:"desiredWeight",label:"Desired Weight*",placeholder:"Your desired weight in kg.",value:p.values.desiredWeight,"aria-describedby":"desiredWeight-helper-text",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{width:"240px"}}),p.touched.desiredWeight&&p.errors.desiredWeight?(0,Z.jsx)(E.Z,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),id:"desiredWeight-helper-text",children:p.errors.desiredWeight}):(0,Z.jsx)(E.Z,{id:"desiredWeight-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{mt:{xs:"32px",md:"20px"}},disableAnimation:!0,shrink:!0,htmlFor:"bloodType",children:"Blood Type*"}),(0,Z.jsx)(M.Z,{readOnly:!0,notched:"true",id:"bloodType",name:"bloodType",value:p.values.bloodType,placeholder:"Choose your blood type.","aria-describedby":"bloodType-helper-text",error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{width:"240px"}}),(0,Z.jsxs)(S,{notched:"true",row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:p.values.bloodType,onChange:p.handleChange,sx:{color:"#9B9FAA","&.Mui-checked":{color:"#FC842D"}},children:[(0,Z.jsx)(te,{value:"1",control:(0,Z.jsx)(l.Wc,{}),label:"1"}),(0,Z.jsx)(te,{value:"2",control:(0,Z.jsx)(l.Wc,{}),label:"2"}),(0,Z.jsx)(te,{value:"3",control:(0,Z.jsx)(l.Wc,{disableRipple:Boolean(!0)}),label:"3"}),(0,Z.jsx)(te,{value:"4",control:(0,Z.jsx)(l.Wc,{disableRipple:!0}),label:"4"})]}),p.touched.bloodType&&p.errors.bloodType?(0,Z.jsx)(E.Z,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),id:"bloodType-helper-text",children:p.errors.bloodType}):(0,Z.jsx)(E.Z,{id:"bloodType-helper-text"})]})]}),(0,Z.jsx)(l.Eo,{sx:{m:{xs:"40px auto 0 auto",md:"60px auto 0 32px",lg:"60px auto 0 323px"}},disabled:!m,type:"submit",variant:"contained",onClick:function(){return b?u((0,ee.p)({id:f,data:p.values})):g()},children:m?"Start losing weight":"Fill in your data "})]})]}),d&&(0,Z.jsx)(X,{values:p.values,open:d,onClose:g,setOpen:s})]})}},339:function(e,o,t){t.d(o,{Eo:function(){return c},I8:function(){return g},Nd:function(){return m},PQ:function(){return b},Wc:function(){return p}});var n,r=t(168),i=t(1413),a=t(6151),d=t(6934),l=t(5202),s=t(4925),u=t(5523),h=t(1614),x=t(184),c=(0,d.ZP)(a.Z)((function(e){e.theme;return{color:"#FFFFFF",backgroundColor:"#FC842D",display:"block",fontWeight:"700",borderRadius:"30px",width:"210px",padding:"13px 25px",textTransform:"none","&:hover":{backgroundColor:"#FFFFFF",color:"#FC842D"}}})),p=(0,d.ZP)(l.Z)((function(e){e.theme;return{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}})),m=(0,d.ZP)(s.Z)((function(e){e.theme;return{color:"#9B9FAA",fontFamily:"Verdana",fontWeight:700,fontSize:14,lineHeight:1.14}})),g=(0,d.ZP)((function(e){return(0,x.jsx)(u.Z,(0,i.Z)({},e))}))((function(e){e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:"#FC842D"}}})),b=(0,d.ZP)(h.Z)(n||(n=(0,r.Z)(["\n  margin-left: 0;\n  margin-right: 0;\n"])))},5594:function(e,o,t){t.d(o,{m:function(){return f},b:function(){return b}});var n,r=t(3767),i=t(890),a=t(493),d=t(4852),l=t(9900),s=t(9434),u=t(788),h=t(168),x=t(1266),c=t(8789).default.div(n||(n=(0,h.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    height: 326px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-color: #F0F1F3;\n    font-family: Verdana;\nfont-size: 14px;\nfont-weight: 400;\nline-height: 17px;\nletter-spacing: 0.04em;\ncolor: #9B9FAA;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n    width: 517px;\n    height: 100vh;\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),x,x,x,x),p=t(4289),m=t(9955),g=t(184);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=Math.floor(Math.random()*e.length);return e[o]}function f(e){var o,t=e.summaryDayInfo,n=(0,s.v9)((function(e){return e.daily})),h=(new Date).toISOString().split("T")[0],x=null===n||void 0===n||null===(o=n.summaries)||void 0===o?void 0:o.find((function(e){return e.date===h})),b=(0,s.v9)(p.y$),f=t||x||{},v=f.kcalConsumed,y=void 0===v?0:v,w=f.kcalLeft,Z=void 0===w?0:w,j=f.percentsOfDailyRate,k=void 0===j?0:j,W=f.dailyRate,F=void 0===W?0:W,B=f.date,C=void 0===B?h:B;return(0,g.jsxs)(c,{styled:{marginTop:"292px"},children:[b&&(0,g.jsx)(u.Z,{styles:{xs:"none",md:"none",lg:"flex"}}),(0,g.jsxs)(r.Z,{direction:{xs:"column",md:"row",lg:"column"},children:[(0,g.jsxs)(i.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto",lg:"149px 123px 36px 94px"}},children:["Summary for ",C]}),(0,g.jsxs)(a.Z,{sx:{width:"100%",m:{xs:"0 auto",md:"auto 79px auto 32px",lg:"0 123px 60px 94px"},maxWidth:{xs:"280px",md:"288px"},fontWeight:"700"},children:[(0,g.jsxs)(d.ZP,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,g.jsx)(l.Z,{primary:"Left"}),(0,g.jsx)(l.Z,{sx:{textAlign:"end"},primary:" ".concat(Z||n.dailyRate-y||"000 kcal")})]}),(0,g.jsxs)(d.ZP,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,g.jsx)(l.Z,{primary:"Consumed"}),(0,g.jsx)(l.Z,{sx:{textAlign:"end"},primary:"".concat(y||"000 kcal")})]}),(0,g.jsxs)(d.ZP,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,g.jsx)(l.Z,{primary:"Daily rate"}),(0,g.jsx)(l.Z,{sx:{textAlign:"end"},primary:" ".concat(F||n.dailyRate||"000 kcal")})]}),(0,g.jsxs)(d.ZP,{sx:{display:"flex",justifyContent:"space-between"},disableGutters:!0,children:[(0,g.jsx)(l.Z,{primary:"n% of normal"}),(0,g.jsx)(l.Z,{sx:{textAlign:"end"},primary:"".concat(k.toFixed(0)+"%"||0)})]})]}),(0,g.jsx)(i.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto"},fontWeight:"700"},children:"Food you should not eat"}),(0,g.jsx)(m.B,{sx:{height:"140px",marginBottom:"30px",marginTop:"10px",marginLeft:"8px",maxWidth:"100%","& .MuiListItem-root":{padding:0},"&.MuiList-root":{marginTop:0}}})]})]})}},5130:function(e,o,t){var n=t(4836);o.Z=void 0;var r=n(t(5649)),i=t(184),a=(0,r.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");o.Z=a},229:function(e,o,t){var n=t(4836);o.Z=void 0;var r=n(t(5649)),i=t(184),a=(0,r.default)((0,i.jsx)("path",{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}),"KeyboardReturn");o.Z=a},1266:function(e,o,t){e.exports=t.p+"static/media/desktoprightSideBar.07ec7143c40752d1b8ad.png"}}]);
//# sourceMappingURL=220.348e0d8a.chunk.js.map