"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{5220:function(e,r,o){o.d(r,{Z:function(){return le}});var t=o(9439),i=o(1413),n=o(5705),a=o(2791),d=o(2797),l=o(339),s=o(7462),h=o(3366),u=o(8182),x=o(4419),c=o(6934),p=o(1402),g=o(5878),m=o(1217);function v(e){return(0,m.Z)("MuiFormGroup",e)}(0,g.Z)("MuiFormGroup",["root","row","error"]);var b,w,y=o(2930),f=o(6147),Z=o(184),j=["className","row"],W=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.row&&r.row]}})((function(e){var r=e.ownerState;return(0,s.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})})),k=a.forwardRef((function(e,r){var o=(0,p.Z)({props:e,name:"MuiFormGroup"}),t=o.className,i=o.row,n=void 0!==i&&i,a=(0,h.Z)(o,j),d=(0,y.Z)(),l=(0,f.Z)({props:o,muiFormControl:d,states:["error"]}),c=(0,s.Z)({},o,{row:n,error:l.error}),g=function(e){var r=e.classes,o={root:["root",e.row&&"row",e.error&&"error"]};return(0,x.Z)(o,v,r)}(c);return(0,Z.jsx)(W,(0,s.Z)({className:(0,u.Z)(g.root,t),ownerState:c,ref:r},a))})),C=o(2071),B=o(8278),T=o(8672),S=o(7384),Y=["actions","children","defaultValue","name","onChange","value"],F=a.forwardRef((function(e,r){var o=e.actions,i=e.children,n=e.defaultValue,d=e.name,l=e.onChange,u=e.value,x=(0,h.Z)(e,Y),c=a.useRef(null),p=(0,B.Z)({controlled:u,default:n,name:"RadioGroup"}),g=(0,t.Z)(p,2),m=g[0],v=g[1];a.useImperativeHandle(o,(function(){return{focus:function(){var e=c.current.querySelector("input:not(:disabled):checked");e||(e=c.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var b=(0,C.Z)(r,c),w=(0,S.Z)(d),y=a.useMemo((function(){return{name:w,onChange:function(e){v(e.target.value),l&&l(e,e.target.value)},value:m}}),[w,l,v,m]);return(0,Z.jsx)(T.Z.Provider,{value:y,children:(0,Z.jsx)(k,(0,s.Z)({role:"radiogroup",ref:b},x,{children:i}))})})),R=o(1426),A=o(8870),E=o(890),N=o(4110),M=o(7071),O=o(1536),P=o(3400),q=o(4721),I=o(4852),D=o(9900),G=o(5193),H=o(168),z=o(8789),V=(z.default.li(b||(b=(0,H.Z)(["\n  margin-bottom: 14px;\n  & span,\n  ::marker {\n    color: #9b9faa;\n    font-family: 'Verdana';\n    font-size: 14px;\n    line-height: 1.2;\n    margin-right: 2px;\n  }\n"]))),(0,z.default)(A.Z)(w||(w=(0,H.Z)(["\n  position: absolute;\n  top: 14.4%;\n  width: 100vw;\n  max-height: 656px;\n  padding: 40px 20px 119px;\n\n  @media screen and (min-width: 768px) {\n    width: 672px;\n    height: 572px;\n    padding: 64px 154px;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n  }\n  @media screen and (min-width: 1280px) {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  background-color: white;\n"])))),_=o(9211),L=o(1087),J=o(9434),Q=o(4289),$=o(5130),K=o(229),U=o(9276),X=o(5594),ee=o(1756),re=o(4686),oe=o(3967),te=o(9955),ie=function(e){var r=e.values,o=e.open,i=e.onClose,n=e.setOpen,d=(0,a.useState)({}),s=(0,t.Z)(d,2),h=s[0],u=s[1],x=(0,J.v9)(Q.y$),c=h.notAllowedProducts,p=(0,a.useState)(!1),g=(0,t.Z)(p,2),m=g[0],v=g[1],b=(0,a.useState)(""),w=(0,t.Z)(b,2),y=w[0],f=w[1],j=function(e,r){return e?r.filter((function(r){return r.toLowerCase().includes(e.trim())})):r}(y,c);Object.keys(r).forEach((function(e,o){"string"===typeof r[e]&&(r[e]=Number(r[e]))})),(0,a.useEffect)((function(){v(!0),(0,_.Hp)(r).then((function(e){return u(e)})).finally((function(){return v(!1)}))}),[r]);var W=function(){return n(!o)},k=(0,oe.Z)(),C=(0,G.Z)(k.breakpoints.down("md"));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(O.Z,{open:o,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",hideBackdrop:!!C,children:(0,Z.jsxs)(V,{children:[(0,Z.jsx)(P.Z,{onClick:W,sx:{position:"absolute",top:20,right:20,display:{xs:"none",md:"block"}},children:(0,Z.jsx)($.Z,{})}),(0,Z.jsx)(U.Z,{component:"div",sx:{backgroundColor:"#E0E0E0",width:"100vw",hight:"40px",position:"absolute",zIndex:2,top:"-39px",left:0,display:{xs:"block",md:"none"}},children:(0,Z.jsx)(P.Z,{onClick:W,sx:{ml:"20px"},children:(0,Z.jsx)(K.Z,{})})}),(0,Z.jsx)(E.Z,{id:"modal-modal-title",variant:"h2",component:"span",sx:{m:{xs:"20px auto 42px auto",md:"24px auto 20px auto"},textAlign:{xs:"start",md:"center"},fontSize:{xs:"18px",md:"36px"},maxWidth:{xs:"280px",md:"508px"},lineHeight:"1.4"},children:"Your recommended daily calorie intake is"}),(0,Z.jsx)(E.Z,{id:"modal-modal-title",variant:"h3",component:"p",sx:{mb:"30px"},children:m?(0,Z.jsx)(re.Z,{color:"#264061"}):Math.ceil(h.dailyRate,1)+" kcal"}),(0,Z.jsx)(q.Z,{variant:"middle",sx:{maxWidth:"280px",m:"0 auto"}}),(0,Z.jsxs)(U.Z,{component:"div",sx:{m:"0 auto"},children:[(0,Z.jsx)(E.Z,{id:"modal-modal-title",variant:"h4",component:"h4",sx:{m:{xs:"20px auto",md:"12px auto 20px auto"},textAlign:"center"},children:"Food you should not eat"}),(0,Z.jsx)(ee.Z,{searchQuery:y,setSearchQuery:f}),(0,Z.jsx)(te.B,{sx:{height:"140px",m:"0 auto 30px","& .MuiListItem-root":{padding:0},"&.MuiList-root":{marginTop:"15px",width:{xs:"78vw",md:"370px"}}},children:null===j||void 0===j?void 0:j.map((function(e){return(0,Z.jsx)(I.ZP,{disableGutters:!0,children:(0,Z.jsx)(D.Z,{primary:e||"".concat((0,X.b)(c)||"")})},e)}))})]}),(0,Z.jsx)(L.Link,{component:"button",style:{margin:"0 auto",textDecoration:"none"},to:x?"/diary":"/registration",onClick:i,children:(0,Z.jsx)(l.Eo,{sx:{m:"0 auto"},children:"Start losing weight"})})]})})})},ne=o(2754),ae=d.Ry().shape({height:d.Rx().required("Please write down your your height").typeError("Your height must be a number!").positive("Height mast be a positive number").min(110,"You cant be that short!").integer("Your height must be an integer!").max(230,"You cant be that big!"),age:d.Rx().required("Please write down your your age").typeError("Your age must be a number!").positive("Age mast be a positive number").min(15,"Aplication is not for children").integer("Your age must be an integer!").max(80,"Better check your weight with a doctor"),weight:d.Rx().required("Please write down your current weight").typeError("Your current weight must be a number!").positive("Weight mast be a positive number").min(50,"You are too light to use this app.").integer("Your weight must be an integer!").max(350,"You cant be that big!"),desiredWeight:d.Rx().required("Please write down your desired weight").typeError("Your desired weight must be a number!").positive("Desired weight mast be a positive").min(45,"You cant be that light.").integer("Your desired weight must be an integer!").max(120,"You can do better!").notOneOf([d.iH("weight"),null],"Your desired weight and current weight are same!"),bloodType:d.Rx().required("Please chose your blood type")});function de(e){var r=(0,R.Z)(),o=!1;return r&&(o=r.value===e.value),(0,Z.jsx)(l.I8,(0,i.Z)({checked:o},e))}var le=function(e){e.onSubmit;var r,o=(0,a.useState)(!1),i=(0,t.Z)(o,2),d=i[0],s=i[1],h=(0,J.I0)(),u=(0,J.v9)(Q._3),x=JSON.parse(null===(r=localStorage)||void 0===r?void 0:r.getItem("item")),c={height:(null===u||void 0===u?void 0:u.height)||(null===x||void 0===x?void 0:x.height)||"",age:(null===u||void 0===u?void 0:u.age)||(null===x||void 0===x?void 0:x.age)||"",weight:(null===u||void 0===u?void 0:u.weight)||(null===x||void 0===x?void 0:x.weight)||"",desiredWeight:(null===u||void 0===u?void 0:u.desiredWeight)||(null===x||void 0===x?void 0:x.desiredWeight)||"",bloodType:(null===u||void 0===u?void 0:u.bloodType)||(null===x||void 0===x?void 0:x.bloodType)||""},p=(0,n.TA)({initialValues:c,validationSchema:ae,onSubmit:function(e,r){var o=r.setSubmitting;r.resetForm;o(!0),localStorage.setItem("item",JSON.stringify(e)),o(!1)},validateOnBlur:!0}),g=ae.isValidSync(p.values),m=function(){s(!d)},v=(0,J.v9)(Q.y$),b=(0,J.v9)(Q.nR);return(0,Z.jsxs)(A.Z,{component:"div",sx:{p:{xs:"32px 0 41px 0",md:"100px 0 48px 0",lg:"293px 0 111px 0 "},mr:{lg:"139px"}},children:[(0,Z.jsxs)(A.Z,{component:"div",sx:{maxWidth:{lg:"608px",md:"518px",xs:"280px"},m:{xs:"0 auto",lg:"0"}},children:[(0,Z.jsx)(E.Z,{variant:"h2",component:"h1",sx:{mb:{xs:"34px",md:"68px"},textAlign:{xs:"center",md:"start"},fontSize:{xs:"18px",md:"34px"}},children:"Calculate your daily calorie intake right now"}),(0,Z.jsxs)(A.Z,{component:"form",sx:{m:{xs:"0 auto",md:"0 auto 0 0"},maxWidth:{md:"512px",xs:"240px"}},autoComplete:"off",onSubmit:p.handleSubmit,children:[(0,Z.jsxs)(A.Z,{component:"div",sx:{display:{md:"flex"},gap:"32px"},children:[(0,Z.jsxs)(A.Z,{component:"div",children:[(0,Z.jsx)(l.Nd,{htmlFor:"height",disableAnimation:!0,shrink:!0,error:p.touched.height&&Boolean(p.errors.height),children:"Height*"}),(0,Z.jsx)(N.Z,{notched:"true",id:"height",placeholder:"Write down your height in sm.",value:p.values.height,onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.height&&Boolean(p.errors.height),sx:{width:"242px"}}),p.touched.height&&p.errors.height?(0,Z.jsx)(M.Z,{error:p.touched.height&&Boolean(p.errors.height),id:"height-helper-text",children:p.errors.height}):(0,Z.jsx)(M.Z,{id:"height-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{htmlFor:"age",disableAnimation:!0,shrink:!0,error:p.touched.age&&Boolean(p.errors.age),sx:{mt:{xs:"12px",md:"20px"}},children:"Age*"}),(0,Z.jsx)(N.Z,{notched:"true",id:"age",value:p.values.age,placeholder:"Write down your age.",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.age&&Boolean(p.errors.age),variant:"standard",sx:{width:"240px"}}),p.touched.age&&p.errors.age?(0,Z.jsx)(M.Z,{error:p.touched.age&&Boolean(p.errors.age),id:"age-helper-text",children:p.errors.age}):(0,Z.jsx)(M.Z,{id:"age-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{error:p.touched.weight&&Boolean(p.errors.weight),disableAnimation:!0,shrink:!0,htmlFor:"weight",sx:{mt:{xs:"12px",md:"20px"}},children:"Current Weight*"}),(0,Z.jsx)(N.Z,{notched:"true",id:"weight",placeholder:"Write down your weight in kg.","aria-describedby":"weight-helper-text",value:p.values.weight,onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.weight&&Boolean(p.errors.weight),sx:{width:"240px"}}),p.touched.weight&&p.errors.weight?(0,Z.jsx)(M.Z,{error:p.touched.weight&&Boolean(p.errors.weight),id:"weight-helper-text",children:p.errors.weight}):(0,Z.jsx)(M.Z,{id:"weight-helper-text",children:" "})]}),(0,Z.jsxs)(A.Z,{component:"div",children:[(0,Z.jsx)(l.Nd,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{mt:{xs:"12px",md:"0"}},disableAnimation:!0,shrink:!0,htmlFor:"desiredWeight",children:"Desired Weight*"}),(0,Z.jsx)(N.Z,{notched:"true",id:"desiredWeight",placeholder:"Your desired weight in kg.",value:p.values.desiredWeight,"aria-describedby":"desiredWeight-helper-text",onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),sx:{width:"240px"}}),p.touched.desiredWeight&&p.errors.desiredWeight?(0,Z.jsx)(M.Z,{error:p.touched.desiredWeight&&Boolean(p.errors.desiredWeight),id:"desiredWeight-helper-text",children:p.errors.desiredWeight}):(0,Z.jsx)(M.Z,{id:"desiredWeight-helper-text",children:" "}),(0,Z.jsx)(l.Nd,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{mt:{xs:"12px",md:"20px"}},disableAnimation:!0,shrink:!0,htmlFor:"bloodType",children:"Blood Type*"}),(0,Z.jsx)(N.Z,{readOnly:!0,notched:"true",id:"bloodType",name:"bloodType",value:p.values.bloodType,placeholder:"Choose your blood type.","aria-describedby":"bloodType-helper-text",error:p.touched.bloodType&&Boolean(p.errors.bloodType),sx:{width:"240px"}}),(0,Z.jsxs)(F,{notched:"true",row:!0,"aria-labelledby":"bloodType",name:"bloodType",value:p.values.bloodType,onChange:p.handleChange,sx:{color:"#9B9FAA","&.Mui-checked":{color:"#FC842D"}},children:[(0,Z.jsx)(de,{value:"1",control:(0,Z.jsx)(l.Wc,{}),label:"1"}),(0,Z.jsx)(de,{value:"2",control:(0,Z.jsx)(l.Wc,{}),label:"2"}),(0,Z.jsx)(de,{value:"3",control:(0,Z.jsx)(l.Wc,{disableRipple:Boolean(!0)}),label:"3"}),(0,Z.jsx)(de,{value:"4",control:(0,Z.jsx)(l.Wc,{disableRipple:!0}),label:"4"})]}),p.touched.bloodType&&p.errors.bloodType?(0,Z.jsx)(M.Z,{error:p.touched.bloodType&&Boolean(p.errors.bloodType),id:"bloodType-helper-text",children:p.errors.bloodType}):(0,Z.jsx)(M.Z,{id:"bloodType-helper-text",children:" "})]})]}),(0,Z.jsx)(l.Eo,{sx:{m:{xs:"20px auto 0 auto",md:"40px auto 0 0px",lg:"40px auto 0 323px"}},disabled:!g,type:"submit",variant:"contained",onClick:function(){return v?h((0,ne.p)({id:b,data:p.values})):m()},children:g?"Start losing weight":"Fill in your data "})]})]}),d&&(0,Z.jsx)(ie,{values:p.values,open:d,onClose:m,setOpen:s})]})}},5130:function(e,r,o){var t=o(4836);r.Z=void 0;var i=t(o(5649)),n=o(184),a=(0,i.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");r.Z=a}}]);
//# sourceMappingURL=220.57fe7963.chunk.js.map