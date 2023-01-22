"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[929],{3931:function(e,o,t){t.d(o,{Z:function(){return z}});var r,i,n=t(9439),d=t(1413),a=t(5705),l=t(2791),s=t(2797),h=t(339),u=t(1426),x=t(765),c=t(8870),p=t(890),g=t(4110),m=t(7071),b=t(1536),v=t(3400),y=t(4721),w=t(4852),j=t(9900),Z=t(5193),f=t(168),k=t(8789),W=(k.default.li(r||(r=(0,f.Z)(["\n  margin-bottom: 14px;\n  & span,\n  ::marker {\n    color: #9b9faa;\n    font-family: 'Verdana';\n    font-size: 14px;\n    line-height: 1.2;\n    margin-right: 2px;\n  }\n"]))),(0,k.default)(c.Z)(i||(i=(0,f.Z)(["\n  position: absolute;\n  top: 14.4%;\n  width: 100vw;\n  max-height: 656px;\n  padding: 40px 20px 119px;\n\n  @media screen and (min-width: 768px) {\n    width: 672px;\n    height: 572px;\n    padding: 64px 154px;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n  }\n  @media screen and (min-width: 1280px) {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  background-color: white;\n"])))),C=t(9211),B=t(1087),F=t(9434),T=t(4289),S=t(5130),A=t(229),Y=t(9276),E=t(5594),P=t(1756),R=t(4686),N=t(3967),O=t(9955),D=t(184),I=function(e){var o=e.values,t=e.open,r=e.onClose,i=e.setOpen,d=(0,l.useState)({}),a=(0,n.Z)(d,2),s=a[0],u=a[1],x=(0,F.v9)(T.y$),c=s.notAllowedProducts,g=(0,l.useState)(!1),m=(0,n.Z)(g,2),f=m[0],k=m[1],I=(0,l.useState)(""),H=(0,n.Z)(I,2),M=H[0],q=H[1],z=function(e,o){return e?o.filter((function(o){return o.toLowerCase().includes(e.trim())})):o}(M,c);Object.keys(o).forEach((function(e,t){"string"===typeof o[e]&&(o[e]=Number(o[e]))})),(0,l.useEffect)((function(){k(!0),(0,C.Hp)(o).then((function(e){return u(e)})).finally((function(){return k(!1)}))}),[o]);var L=function(){return i(!t)},_=(0,N.Z)(),V=(0,Z.Z)(_.breakpoints.down("md"));return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(b.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",hideBackdrop:!!V,children:(0,D.jsxs)(W,{children:[(0,D.jsx)(v.Z,{onClick:L,sx:{position:"absolute",top:20,right:20,display:{xs:"none",md:"block"}},children:(0,D.jsx)(S.Z,{})}),(0,D.jsx)(Y.Z,{component:"div",sx:{backgroundColor:"#E0E0E0",width:"100vw",hight:"40px",position:"absolute",zIndex:2,top:"-39px",left:0,display:{xs:"block",md:"none"}},children:(0,D.jsx)(v.Z,{onClick:L,sx:{ml:"20px"},children:(0,D.jsx)(A.Z,{})})}),(0,D.jsx)(p.Z,{id:"modal-modal-title",variant:"h2",component:"span",sx:{m:{xs:"20px auto 42px auto",md:"24px auto 20px auto"},textAlign:{xs:"start",md:"center"},fontSize:{xs:"18px",md:"36px"},maxWidth:{xs:"280px",md:"508px"},lineHeight:"1.4"},children:"Your recommended daily calorie intake is"}),(0,D.jsx)(p.Z,{id:"modal-modal-title",variant:"h3",component:"p",sx:{mb:"30px"},children:f?(0,D.jsx)(R.Z,{color:"#264061"}):Math.ceil(s.dailyRate,1)+" kcal"}),(0,D.jsx)(y.Z,{variant:"middle",sx:{maxWidth:"280px",m:"0 auto"}}),(0,D.jsxs)(Y.Z,{component:"div",sx:{m:"0 auto"},children:[(0,D.jsx)(p.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto"},textAlign:"center"},children:"Food you should not eat"}),(0,D.jsx)(P.Z,{searchQuery:M,setSearchQuery:q}),(0,D.jsx)(O.B,{sx:{height:"140px",m:"0 auto 30px","& .MuiListItem-root":{padding:0},"&.MuiList-root":{marginTop:"15px",width:{xs:"78vw",md:"370px"}}},children:null===z||void 0===z?void 0:z.map((function(e){return(0,D.jsx)(w.ZP,{disableGutters:!0,children:(0,D.jsx)(j.Z,{primary:e||"".concat((0,E.b)(c)||"")})},e)}))})]}),(0,D.jsx)(B.Link,{component:"button",style:{margin:"0 auto",textDecoration:"none"},to:x?"/diary":"/registration",onClick:r,children:(0,D.jsx)(h.Eo,{sx:{m:"0 auto"},children:"Start losing weight"})})]})})})},H=t(2754),M=s.Ry().shape({height:s.Rx().required("Please write down your your height").typeError("Your height must be a number!").positive("Height mast be a positive number").min(110,"You cant be that short!").integer("Your height must be an integer!").max(230,"You cant be that big!"),age:s.Rx().required("Please write down your your age").typeError("Your age must be a number!").positive("Age mast be a positive number").min(15,"Aplication is not for children").integer("Your age must be an integer!").max(80,"Better check your weight with a doctor"),weight:s.Rx().required("Please write down your current weight").typeError("Your current weight must be a number!").positive("Weight mast be a positive number").min(50,"You are too light to use this app.").integer("Your weight must be an integer!").max(350,"You cant be that big!"),desiredWeight:s.Rx().required("Please write down your desired weight").typeError("Your desired weight must be a number!").positive("Desired weight mast be a positive").min(45,"You cant be that light.").integer("Your desired weight must be an integer!").max(120,"You can do better!").notOneOf([s.iH("weight"),null],"Your desired weight and current weight are same!"),bloodType:s.Rx().required("Please chose your blood type")});function q(e){var o=(0,u.Z)(),t=!1;return o&&(t=o.value===e.value),(0,D.jsx)(h.I8,(0,d.Z)({checked:t},e))}var z=function(e){e.onSubmit;var o,t=(0,l.useState)(!1),r=(0,n.Z)(t,2),i=r[0],d=r[1],s=(0,F.I0)(),u=(0,F.v9)(T._3),b=JSON.parse(null===(o=localStorage)||void 0===o?void 0:o.getItem("item")),v={height:(null===u||void 0===u?void 0:u.height)||(null===b||void 0===b?void 0:b.height)||"",age:(null===u||void 0===u?void 0:u.age)||(null===b||void 0===b?void 0:b.age)||"",weight:(null===u||void 0===u?void 0:u.weight)||(null===b||void 0===b?void 0:b.weight)||"",desiredWeight:(null===u||void 0===u?void 0:u.desiredWeight)||(null===b||void 0===b?void 0:b.desiredWeight)||"",bloodType:(null===u||void 0===u?void 0:u.bloodType)||(null===b||void 0===b?void 0:b.bloodType)||""},y=(0,a.TA)({initialValues:v,validationSchema:M,onSubmit:function(e,o){var t=o.setSubmitting;o.resetForm;t(!0),localStorage.setItem("item",JSON.stringify(e)),t(!1)},validateOnBlur:!0}),w=M.isValidSync(y.values),j=function(){d(!i)},Z=(0,F.v9)(T.y$),f=(0,F.v9)(T.nR);return(0,D.jsxs)(c.Z,{component:"div",sx:{p:{xs:"32px 0 41px 0",md:"100px 0 48px 0",lg:"293px 0 111px 0 "},mr:{lg:"139px"}},children:[(0,D.jsxs)(c.Z,{component:"div",sx:{maxWidth:{lg:"608px",md:"518px",xs:"280px"},m:{xs:"0 auto",lg:"0"}},children:[(0,D.jsx)(p.Z,{variant:"h2",component:"h1",sx:{mb:{xs:"34px",md:"68px"},textAlign:{xs:"center",md:"start"},fontSize:{xs:"18px",md:"34px"}},children:"Calculate your daily calorie intake right now"}),(0,D.jsxs)(c.Z,{component:"form",sx:{m:{xs:"0 auto",md:"0 auto 0 0"},maxWidth:{md:"512px",xs:"240px"}},autoComplete:"off",onSubmit:y.handleSubmit,children:[(0,D.jsxs)(c.Z,{component:"div",sx:{display:{md:"flex"},gap:"32px"},children:[(0,D.jsxs)(c.Z,{component:"div",children:[(0,D.jsx)(h.Nd,{htmlFor:"height",disableAnimation:!0,shrink:!0,error:y.touched.height&&Boolean(y.errors.height),children:"Height*"}),(0,D.jsx)(g.Z,{notched:"true",id:"height",placeholder:"Write down your height in sm.",value:y.values.height,onChange:y.handleChange,onBlur:y.handleBlur,error:y.touched.height&&Boolean(y.errors.height),sx:{width:"242px"}}),y.touched.height&&y.errors.height?(0,D.jsx)(m.Z,{error:y.touched.height&&Boolean(y.errors.height),id:"height-helper-text",children:y.errors.height}):(0,D.jsx)(m.Z,{id:"height-helper-text",children:" "}),(0,D.jsx)(h.Nd,{htmlFor:"age",disableAnimation:!0,shrink:!0,error:y.touched.age&&Boolean(y.errors.age),sx:{mt:{xs:"12px",md:"20px"}},children:"Age*"}),(0,D.jsx)(g.Z,{notched:"true",id:"age",value:y.values.age,placeholder:"Write down your age.",onChange:y.handleChange,onBlur:y.handleBlur,error:y.touched.age&&Boolean(y.errors.age),variant:"standard",sx:{width:"240px"}}),y.touched.age&&y.errors.age?(0,D.jsx)(m.Z,{error:y.touched.age&&Boolean(y.errors.age),id:"age-helper-text",children:y.errors.age}):(0,D.jsx)(m.Z,{id:"age-helper-text",children:" "}),(0,D.jsx)(h.Nd,{error:y.touched.weight&&Boolean(y.errors.weight),disableAnimation:!0,shrink:!0,htmlFor:"weight",sx:{mt:{xs:"12px",md:"20px"}},children:"Current Weight*"}),(0,D.jsx)(g.Z,{notched:"true",id:"weight",placeholder:"Write down your weight in kg.","aria-describedby":"weight-helper-text",value:y.values.weight,onChange:y.handleChange,onBlur:y.handleBlur,error:y.touched.weight&&Boolean(y.errors.weight),sx:{width:"240px"}}),y.touched.weight&&y.errors.weight?(0,D.jsx)(m.Z,{error:y.touched.weight&&Boolean(y.errors.weight),id:"weight-helper-text",children:y.errors.weight}):(0,D.jsx)(m.Z,{id:"weight-helper-text",children:" "})]}),(0,D.jsxs)(c.Z,{component:"div",children:[(0,D.jsx)(h.Nd,{error:y.touched.desiredWeight&&Boolean(y.errors.desiredWeight),sx:{mt:{xs:"12px",md:"0"}},disableAnimation:!0,shrink:!0,htmlFor:"desiredWeight",children:"Desired Weight*"}),(0,D.jsx)(g.Z,{notched:"true",id:"desiredWeight",placeholder:"Your desired weight in kg.",value:y.values.desiredWeight,"aria-describedby":"desiredWeight-helper-text",onChange:y.handleChange,onBlur:y.handleBlur,error:y.touched.desiredWeight&&Boolean(y.errors.desiredWeight),sx:{width:"240px"}}),y.touched.desiredWeight&&y.errors.desiredWeight?(0,D.jsx)(m.Z,{error:y.touched.desiredWeight&&Boolean(y.errors.desiredWeight),id:"desiredWeight-helper-text",children:y.errors.desiredWeight}):(0,D.jsx)(m.Z,{id:"desiredWeight-helper-text",children:" "}),(0,D.jsx)(h.Nd,{error:y.touched.bloodType&&Boolean(y.errors.bloodType),sx:{mt:{xs:"12px",md:"20px"}},disableAnimation:!0,shrink:!0,htmlFor:"bloodType",children:"Blood Type*"}),(0,D.jsx)(g.Z,{readOnly:!0,notched:"true",id:"bloodType",name:"bloodType",value:y.values.bloodType,placeholder:"Choose your blood type.","aria-describedby":"bloodType-helper-text",error:y.touched.bloodType&&Boolean(y.errors.bloodType),sx:{width:"240px"}}),(0,D.jsxs)(x.Z,{notched:"true",row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:y.values.bloodType,onChange:y.handleChange,sx:{color:"#9B9FAA","&.Mui-checked":{color:"#FC842D"}},children:[(0,D.jsx)(q,{value:"1",control:(0,D.jsx)(h.Wc,{}),label:"1"}),(0,D.jsx)(q,{value:"2",control:(0,D.jsx)(h.Wc,{}),label:"2"}),(0,D.jsx)(q,{value:"3",control:(0,D.jsx)(h.Wc,{disableRipple:Boolean(!0)}),label:"3"}),(0,D.jsx)(q,{value:"4",control:(0,D.jsx)(h.Wc,{disableRipple:!0}),label:"4"})]}),y.touched.bloodType&&y.errors.bloodType?(0,D.jsx)(m.Z,{error:y.touched.bloodType&&Boolean(y.errors.bloodType),id:"bloodType-helper-text",children:y.errors.bloodType}):(0,D.jsx)(m.Z,{id:"bloodType-helper-text",children:" "})]})]}),(0,D.jsx)(h.Eo,{sx:{m:{xs:"20px auto 0 auto",md:"40px auto 0 0px",lg:"40px auto 0 323px"}},disabled:!w,type:"submit",variant:"contained",onClick:function(){return Z?s((0,H.p)({id:f,data:y.values})):j()},children:w?"Start losing weight":"Fill in your data "})]})]}),i&&(0,D.jsx)(I,{values:y.values,open:i,onClose:j,setOpen:d})]})}},339:function(e,o,t){t.d(o,{Eo:function(){return c},I8:function(){return m},Nd:function(){return g},PQ:function(){return b},Wc:function(){return p}});var r,i=t(168),n=t(1413),d=t(6151),a=t(6934),l=t(5202),s=t(4925),h=t(5523),u=t(1614),x=t(184),c=(0,a.ZP)(d.Z)((function(e){e.theme;return{color:"#FFFFFF",backgroundColor:"#FC842D",display:"block",fontWeight:"700",borderRadius:"30px",width:"210px",padding:"13px 25px",textTransform:"none","&:hover":{backgroundColor:"#FFFFFF",color:"#FC842D","&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.12)",border:"1px solid rgba(0, 0, 0, 0.12)"}}}})),p=(0,a.ZP)(l.Z)((function(e){e.theme;return{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}})),g=(0,a.ZP)(s.Z)((function(e){e.theme;return{color:"#9B9FAA",fontFamily:"Verdana",fontWeight:700,fontSize:14,lineHeight:1.14}})),m=(0,a.ZP)((function(e){return(0,x.jsx)(h.Z,(0,n.Z)({},e))}))((function(e){e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:"#FC842D"}}})),b=(0,a.ZP)(u.Z)(r||(r=(0,i.Z)(["\n  margin-left: 0;\n  margin-right: 0;\n"])))},4929:function(e,o,t){t.r(o),t.d(o,{default:function(){return a}});var r=t(3767),i=t(3931),n=t(5594),d=t(184),a=function(){return(0,d.jsxs)(r.Z,{direction:{xs:"column",md:"column",lg:"row"},sx:{pl:{lg:"16px"}},children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)(n.m,{})]})}}}]);
//# sourceMappingURL=929.1407f474.chunk.js.map