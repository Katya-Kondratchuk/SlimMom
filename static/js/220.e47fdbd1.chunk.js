"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{5220:function(e,r,o){o.d(r,{Z:function(){return te}});var t=o(9439),n=o(1413),i=o(5705),a=o(2791),d=o(2797),l=o(339),s=o(7462),h=o(3366),u=o(8182),c=o(4419),x=o(6934),p=o(1402),m=o(5878),g=o(1217);function b(e){return(0,g.Z)("MuiFormGroup",e)}(0,m.Z)("MuiFormGroup",["root","row","error"]);var v,f,y=o(2930),Z=o(6147),w=o(184),j=["className","row"],k=(0,x.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.row&&r.row]}})((function(e){var r=e.ownerState;return(0,s.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),W=a.forwardRef((function(e,r){var o=(0,p.Z)({props:e,name:"MuiFormGroup"}),t=o.className,n=o.row,i=void 0!==n&&n,a=(0,h.Z)(o,j),d=(0,y.Z)(),l=(0,Z.Z)({props:o,muiFormControl:d,states:["error"]}),x=(0,s.Z)({},o,{row:i,error:l.error}),m=function(e){var r=e.classes,o={root:["root",e.row&&"row",e.error&&"error"]};return(0,c.Z)(o,b,r)}(x);return(0,w.jsx)(k,(0,s.Z)({className:(0,u.Z)(m.root,t),ownerState:x,ref:r},a))})),F=o(2071),B=o(8278),C=o(8672),P=o(7384),A=["actions","children","defaultValue","name","onChange","value"],S=a.forwardRef((function(e,r){var o=e.actions,n=e.children,i=e.defaultValue,d=e.name,l=e.onChange,u=e.value,c=(0,h.Z)(e,A),x=a.useRef(null),p=(0,B.Z)({controlled:u,default:i,name:"RadioGroup"}),m=(0,t.Z)(p,2),g=m[0],b=m[1];a.useImperativeHandle(o,(function(){return{focus:function(){var e=x.current.querySelector("input:not(:disabled):checked");e||(e=x.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var v=(0,F.Z)(r,x),f=(0,P.Z)(d),y=a.useMemo((function(){return{name:f,onChange:function(e){b(e.target.value),l&&l(e,e.target.value)},value:g}}),[f,l,b,g]);return(0,w.jsx)(C.Z.Provider,{value:y,children:(0,w.jsx)(W,(0,s.Z)({role:"radiogroup",ref:v},c,{children:n}))})})),T=o(1426),R=o(8870),D=o(890),G=o(4110),E=o(7071),M=o(1536),N=o(3400),Y=o(4721),H=o(9900),O=o(168),I=o(8789),q=I.default.li(v||(v=(0,O.Z)(["\n  margin-bottom: 14px;\n  ::marker {\n    color: #9b9faa;\n    font-family: 'Verdana';\n    font-size: 14px;\n    line-height: 1.2;\n  }\n  /* @media screen and (max-width: 767px) {\n    \n  } */\n"]))),z=(0,I.default)(R.Z)(f||(f=(0,O.Z)(["\n  position: absolute;\n  top: 25%;\n  /* left: 50%; */\n  width: 100vw;\n  max-height: 638px;\n  padding: 40px 20px 119px;\n\n  @media screen and (min-width: 768px) {\n    width: 672px;\n    height: 572px;\n    padding: 64px 154px;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n  }\n  @media screen and (min-width: 1280px) {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  background-color: white;\n"]))),V=o(9211),L=o(1087),_=o(9434),J=o(4289),$=o(5130),K=o(229),Q=o(9276),U=o(5594),X=function(e){var r=e.values,o=e.open,n=e.onClose,i=e.setOpen,d=(0,a.useState)({}),s=(0,t.Z)(d,2),h=s[0],u=s[1],c=(0,_.v9)(J.y$);Object.keys(r).forEach((function(e,o){"string"===typeof r[e]&&(r[e]=Number(r[e]))})),(0,a.useEffect)((function(){(0,V.Hp)(r).then((function(e){return u(e)}))}),[r]);var x=function(){return i(!o)};return(0,w.jsx)(M.Z,{open:o,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,w.jsxs)(z,{children:[(0,w.jsx)(N.Z,{onClick:x,sx:{position:"absolute",top:20,right:20,display:{xs:"none",md:"block"}},children:(0,w.jsx)($.Z,{})}),(0,w.jsx)(N.Z,{onClick:x,sx:{position:"absolute",top:"-40px",left:20,display:{xs:"block",md:"none"}},children:(0,w.jsx)(K.Z,{})}),(0,w.jsx)(D.Z,{id:"modal-modal-title",variant:"h2",component:"span",sx:{m:{xs:"0 auto 42px auto",md:"64px auto 20px auto"},textAlign:{xs:"start",md:"center"},fontSize:{xs:"18px",md:"36px"},maxWidth:{xs:"280px",md:"508px"}},children:"Your recommended daily calorie intake is"}),(0,w.jsxs)(D.Z,{id:"modal-modal-title",variant:"h3",component:"p",children:[h.dailyRate," \u043a\u043a\u0430\u043b."]}),(0,w.jsx)(Y.Z,{variant:"middle",sx:{maxWidth:"280px",m:"0 auto"}}),(0,w.jsxs)(Q.Z,{component:"div",sx:{maxWidth:"330px",m:"0 auto"},children:[(0,w.jsx)(D.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto"}},children:"Foods you should not eat"}),(0,w.jsxs)("ol",{type:"1",style:{minHeight:"112px",marginBottom:"40px",padding:"0"},children:[(0,w.jsx)(q,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,w.jsx)(H.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(h.notAllowedProducts))})}),(0,w.jsx)(q,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,w.jsx)(H.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(h.notAllowedProducts))})}),(0,w.jsx)(q,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,w.jsx)(H.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(h.notAllowedProducts))})}),(0,w.jsx)(q,{component:"li",disablePadding:!0,style:{marginBotton:{xs:"14px"}},children:(0,w.jsx)(H.Z,{sx:{color:"#9B9FAA"},primary:"".concat((0,U.b)(h.notAllowedProducts))})})]})]}),(0,w.jsx)(L.Link,{component:"button",style:{margin:"0 auto",textDecoration:"none"},to:c?"/diary":"/registration",onClick:n,children:(0,w.jsx)(l.Eo,{sx:{m:"0 auto"},children:"Start losing weight"})})]})})},ee=o(2754),re=d.Ry().shape({height:d.Rx().required("Please write down your your height").typeError("Your height must be a number!").positive("Height mast be a positive number").min(130,"You cant be that short!").max(220,"Humans cant be that big!"),age:d.Rx().typeError("Your age must be a number!").min(15,"Aplication is not for children").max(80,"Better check your weight with a doctor").required("Please write down your your age"),weight:d.Rx().required("Please write down your current weight").typeError("Your current weight must be a number!").min(50,"You are too light to use this app.").max(350,"You cant be that big!").positive("Weight mast be a positive number"),desiredWeight:d.Rx().typeError("Your desired weight must be a number!").min(45,"You cant be that light.").max(100,"You can do better!").notOneOf([d.iH("weight"),null],"Your desired weight and current weight are same!").required("Please write down your desired weight").positive("Desired weight mast be a positive"),bloodType:d.Z_().required("Please chose your blood type")});function oe(e){var r=(0,T.Z)(),o=!1;return r&&(o=r.value===e.value),(0,w.jsx)(l.I8,(0,n.Z)({checked:o},e))}var te=function(e){e.onSubmit;var r,o=(0,a.useState)(!1),n=(0,t.Z)(o,2),d=n[0],s=n[1],h=(0,_.I0)(),u=(0,_.v9)(J._3),c=JSON.parse(null===(r=localStorage)||void 0===r?void 0:r.getItem("item")),x={height:(null===u||void 0===u?void 0:u.height)||(null===c||void 0===c?void 0:c.height)||"",age:(null===u||void 0===u?void 0:u.age)||(null===c||void 0===c?void 0:c.age)||"",weight:(null===u||void 0===u?void 0:u.weight)||(null===c||void 0===c?void 0:c.weight)||"",desiredWeight:(null===u||void 0===u?void 0:u.desiredWeight)||(null===c||void 0===c?void 0:c.desiredWeight)||"",bloodType:(null===u||void 0===u?void 0:u.bloodType)||(null===c||void 0===c?void 0:c.bloodType)||""};console.log("Hi!");var p=(0,i.TA)({initialValues:x,validationSchema:re,onSubmit:function(e,r){var o=r.setSubmitting;r.resetForm;o(!0),localStorage.setItem("item",JSON.stringify(e)),o(!1)},validateOnBlur:!0}),m=re.isValidSync(p.values),g=function(){s(!d)},b=(0,_.v9)(J.y$),v=(0,_.v9)(J.nR);return(0,w.jsxs)(R.Z,{component:"div",children:[(0,w.jsxs)(R.Z,{component:"div",sx:{textAlign:"centr",maxWidth:{lg:"608px",md:"518px",xs:"280px"},m:{xs:"32px auto 0 auto",md:"100px auto 0 auto",lg:"147px auto 0 0"}},children:[(0,w.jsx)(D.Z,{variant:"h2",component:"h1",sx:{mb:{xs:"34px",md:"68px"},textAlign:{xs:"center",md:"start"},fontSize:{xs:"18px",md:"34px"}},children:"Calculate your daily calorie intake right now"}),(0,w.jsxs)(R.Z,{component:"form",sx:{m:{xs:"0 auto",md:"0 auto 0 0"},maxWidth:{md:"512px",xs:"240px"}},autoComplete:"off",onSubmit:p.handleSubmit,children:[(0,w.jsxs)(R.Z,{component:"div",sx:{display:{md:"flex"},gap:"32px"},children:[(0,w.jsxs)(R.Z,{component:"div",children:[(0,w.jsx)(l.Nd,{htmlFor:"height",disableAnimation:!0,shrink:!0,error:p.touched.height&&Boolean(p.errors.height),children:"Height*"}),(0,w.jsx)(G.Z,{notched:"true",id:"height",placeholder:"Write down your height in sm.",value:p.values.height,onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.height&&Boolean(p.errors.height),sx:{width:"242px"}}),p.touched.height&&p.errors.height?(0,w.jsx)(E.Z,{error:p.touched.height&&Boolean(p.errors.height),id:"height-helper-text",children:p.errors.height}):(0,w.jsx)(E.Z,{id:"height-helper-text",children:" "}),(0,w.jsx)(l.Nd,{htmlFor:"age",disableAnimation:!0,shrink:!0,error:p.touched.age&&Boolean(p.errors.age),sx:{mt:{xs:"32px",md:"20px"}},children:"Age*"}),(0,w.jsx)(G.Z,{notched:"true",id:"age",value:p.values.age,placeholder:"Write down your age.",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.age&&Boolean(p.errors.age),variant:"standard",sx:{width:"240px"}}),p.touched.age&&p.errors.age?(0,w.jsx)(E.Z,{error:p.touched.age&&Boolean(p.errors.age),id:"age-helper-text",children:p.errors.age}):(0,w.jsx)(E.Z,{id:"age-helper-text",children:" "}),(0,w.jsx)(l.Nd,{error:p.touched.weight&&Boolean(p.errors.weight),disableAnimation:!0,shrink:!0,htmlFor:"weight",sx:{mt:{xs:"32px",md:"20px"}},children:"Current Weight*"}),(0,w.jsx)(G.Z,{notched:"true",fullWidth:!0,id:"weight",name:"weight",label:"Current weight*",placeholder:"Write down your weight in kg.",value:p.values.weight,"aria-describedby":"weight-helper-text",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.weight&&Boolean(p.errors.weight),sx:{width:"240px"}}),p.touched.weight&&p.errors.weight?(0,w.jsx)(E.Z,{error:p.touched.weight&&Boolean(p.errors.weight),id:"weight-helper-text",children:p.errors.weight}):(0,w.jsx)(E.Z,{id:"weight-helper-text",children:" "})]}),(0,w.jsxs)(R.Z,{component:"div",children:[(0,w.jsx)(l.Nd,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{mt:{xs:"32px",md:"0"}},disableAnimation:!0,shrink:!0,htmlFor:"desiredWeight",children:"Desired Weight*"}),(0,w.jsx)(G.Z,{notched:"true",fullWidth:!0,id:"desiredWeight",name:"desiredWeight",label:"Desired Weight*",placeholder:"Your desired weight in kg.",value:p.values.desiredWeight,"aria-describedby":"desiredWeight-helper-text",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{width:"240px"}}),p.touched.desiredWeight&&p.errors.desiredWeight?(0,w.jsx)(E.Z,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),id:"desiredWeight-helper-text",children:p.errors.desiredWeight}):(0,w.jsx)(E.Z,{id:"desiredWeight-helper-text",children:" "}),(0,w.jsx)(l.Nd,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{mt:{xs:"32px",md:"20px"}},disableAnimation:!0,shrink:!0,htmlFor:"bloodType",children:"Blood Type*"}),(0,w.jsx)(G.Z,{readOnly:!0,notched:"true",id:"bloodType",name:"bloodType",value:p.values.bloodType,placeholder:"Choose your blood type.","aria-describedby":"bloodType-helper-text",error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{width:"240px"}}),(0,w.jsxs)(S,{notched:"true",row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:p.values.bloodType,onChange:p.handleChange,sx:{color:"#9B9FAA","&.Mui-checked":{color:"#FC842D"}},children:[(0,w.jsx)(oe,{value:"1",control:(0,w.jsx)(l.Wc,{}),label:"1"}),(0,w.jsx)(oe,{value:"2",control:(0,w.jsx)(l.Wc,{}),label:"2"}),(0,w.jsx)(oe,{value:"3",control:(0,w.jsx)(l.Wc,{disableRipple:Boolean(!0)}),label:"3"}),(0,w.jsx)(oe,{value:"4",control:(0,w.jsx)(l.Wc,{disableRipple:!0}),label:"4"})]}),p.touched.bloodType&&p.errors.bloodType?(0,w.jsx)(E.Z,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),id:"bloodType-helper-text",children:p.errors.bloodType}):(0,w.jsx)(E.Z,{id:"bloodType-helper-text"})]})]}),(0,w.jsx)(l.Eo,{sx:{m:{xs:"40px auto 0 auto",md:"60px auto 0 32px",lg:"60px auto 0 323px"}},disabled:!m,type:"submit",variant:"contained",onClick:function(){return b?h((0,ee.p)({id:v,data:p.values})):g()},children:m?"Start losing weight":"Fill in your data "})]})]}),d&&(0,w.jsx)(X,{values:p.values,open:d,onClose:g,setOpen:s})]})}},339:function(e,r,o){o.d(r,{Eo:function(){return x},I8:function(){return g},Nd:function(){return m},PQ:function(){return b},Wc:function(){return p}});var t,n=o(168),i=o(1413),a=o(6151),d=o(6934),l=o(5202),s=o(4925),h=o(5523),u=o(1614),c=o(184),x=(0,d.ZP)(a.Z)((function(e){e.theme;return{color:"#FFFFFF",backgroundColor:"#FC842D",display:"block",fontWeight:"700",borderRadius:"30px",width:"210px",padding:"13px 25px",textTransform:"none","&:hover":{backgroundColor:"#FFFFFF",color:"#FC842D"}}})),p=(0,d.ZP)(l.Z)((function(e){e.theme;return{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}})),m=(0,d.ZP)(s.Z)((function(e){e.theme;return{color:"#9B9FAA",fontFamily:"Verdana",fontWeight:700,fontSize:14,lineHeight:1.14}})),g=(0,d.ZP)((function(e){return(0,c.jsx)(h.Z,(0,i.Z)({},e))}))((function(e){e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:"#FC842D"}}})),b=(0,d.ZP)(u.Z)(t||(t=(0,n.Z)(["\n  margin-left: 0;\n  margin-right: 0;\n"])))},5594:function(e,r,o){o.d(r,{m:function(){return p},b:function(){return x}});var t,n=o(493),i=o(9834),a=o(4852),d=o(9900),l=o(9434),s=o(168),h=o(1266),u=o(8789).default.div(t||(t=(0,s.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    height: 326px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: contain;\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n    width: 517px;\n    height: 850px;\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),h,h,h,h),c=o(184);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=Math.floor(Math.random()*e.length);return e[r]}function p(e){var r,o=e.summaryDayInfo,t=(0,l.v9)((function(e){return e.daily})),s=t.notAllowedProducts,h=(new Date).toISOString().split("T")[0],p=null===t||void 0===t||null===(r=t.summaries)||void 0===r?void 0:r.find((function(e){return e.date===h}));console.log(o),console.log(p);var m=o||p||{},g=m.kcalConsumed,b=void 0===g?0:g,v=m.kcalLeft,f=void 0===v?0:v,y=m.percentsOfDailyRate,Z=void 0===y?0:y,w=m.dailyRate,j=void 0===w?0:w,k=m.date,W=void 0===k?h:k;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(u,{children:[(0,c.jsxs)(n.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},subheader:(0,c.jsxs)(i.Z,{children:["Summary for ",W]}),children:[(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"Left ".concat(f||t.dailyRate-b||0)})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"Consumed ".concat(b)})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"Daily rate ".concat(j||t.dailyRate||0)})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"n% of normal ".concat(Z.toFixed(0)," %")})})]}),(0,c.jsxs)(n.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},subheader:(0,c.jsx)(i.Z,{children:"`Food not recommended`"}),children:[(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"".concat(x(s)||"")})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"".concat(x(s)||"")})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"".concat(x(s)||"")})}),(0,c.jsx)(a.ZP,{disableGutters:!0,children:(0,c.jsx)(d.Z,{primary:"".concat(x(s)||"")})})]})]})})}},5130:function(e,r,o){var t=o(4836);r.Z=void 0;var n=t(o(5649)),i=o(184),a=(0,n.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");r.Z=a},229:function(e,r,o){var t=o(4836);r.Z=void 0;var n=t(o(5649)),i=o(184),a=(0,n.default)((0,i.jsx)("path",{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}),"KeyboardReturn");r.Z=a},1266:function(e,r,o){e.exports=o.p+"static/media/desktoprightSideBar.07ec7143c40752d1b8ad.png"}}]);
//# sourceMappingURL=220.e47fdbd1.chunk.js.map