"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{4879:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r,i,a=n(3433),o=n(9439),l=n(5714),u=n(3466),d=n(2419),s=n(168),c=n(9877),x=n(8789),m=(0,x.default)(c.Z)(r||(r=(0,s.Z)(["\n  &.MuiFab-root {\n    background-color: #fc842d;\n    color: #fff;\n    margin-left: 30px;\n\n    &:hover {\n      background-color: #fc2d2d;\n    }\n  }\n"]))),p=(0,x.default)(l.Z)(i||(i=(0,s.Z)(["\n  &.MuiTextField-root {\n    margin: 0 24px;\n    width: 240px;\n\n    .MuiInputBase-root.Mui-focused {\n      background-color: #1acebf26;\n    }\n  }\n"]))),f=n(184);function g(e){var t=e.onSubmitting;return(0,f.jsxs)("form",{onSubmit:t,children:[(0,f.jsx)(p,{required:!0,id:"filled-product",label:"Enter product name",name:"product",variant:"filled"}),(0,f.jsx)(l.Z,{required:!0,label:"Grams",id:"filled-number",name:"grams",type:"number",sx:{width:150,mx:3,"&.MuiTextField-root .MuiInputBase-root.Mui-focused":{backgroundColor:"#1acebf26"}},InputProps:{endAdornment:(0,f.jsx)(u.Z,{position:"end",children:"gr"})},inputProps:{inputMode:"numeric",pattern:"d{4}",max:9999},variant:"filled"}),(0,f.jsx)(m,{"aria-label":"add",type:"submit",children:(0,f.jsx)(d.Z,{})})]})}var h=n(4852),w=n(9900),v=n(3400),j=n(7247);function b(e){var t=e.name,n=e.grams,r=e.kcal,i=e.deleteProduct;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(h.ZP,{children:[(0,f.jsx)(w.Z,{sx:{width:240,mr:4,borderBottom:"1px solid #80808038",flexGrow:0},primary:t}),(0,f.jsx)(w.Z,{sx:{width:107,ml:2,textAlign:"right",borderBottom:"1px solid #80808038",flexGrow:0},primary:"".concat(n," g")}),(0,f.jsx)(w.Z,{sx:{width:106,ml:4,mr:2,textAlign:"right",borderBottom:"1px solid #80808038",flexGrow:0},primary:"".concat(r," kcal")}),(0,f.jsx)(v.Z,{edge:"end","aria-label":"delete",onClick:i,children:(0,f.jsx)(j.Z,{})})]})})}var Z,k=n(493),M=(0,x.default)(k.Z)(Z||(Z=(0,s.Z)(["\n  &.MuiList-root {\n    margin-top: 40px;\n    width: 650px;\n    position: relative;\n    overflow: auto;\n    max-height: 270px;\n  }\n"])));function C(e){var t=e.poducts,n=e.onDeleteContact;return(0,f.jsx)(M,{children:t.map((function(e){var t=e.id,r=e.weight,i=e.title,a=e.calories;return(0,f.jsx)(b,{name:i.ru,grams:r,kcal:a,deleteContact:function(e){return n(t,e)}},t)}))})}function D(e){e.respons,e.data,e.products;return(0,f.jsx)(f.Fragment,{})}var S,y=n(2426),I=n.n(y),B=n(9276),A=n(6571),F=n(2054),P=n(9783),_=n(2791),G=x.default.h2(S||(S=(0,s.Z)(["\n  margin-left: 24px;\n  margin-right: 12px;\n  font-size: 34px;\n  font-weight: 900;\n  font-family: 'Verdana';\n"])));function T(e){var t=e.onDateChange,n=(0,_.useState)(I()(new Date)),r=(0,o.Z)(n,2),i=r[0],a=r[1],l=new Date(i).toLocaleDateString();return(0,f.jsx)(A._,{dateAdapter:P.Z,children:(0,f.jsx)(F.M,{label:"Basic example",value:i,onChange:function(e){a(e),t(e)},renderInput:function(e){var t=e.inputRef,n=e.InputProps;return(0,f.jsxs)(B.Z,{sx:{display:"flex",alignItems:"baseline"},children:[(0,f.jsx)(G,{ref:t,children:l}),null===n||void 0===n?void 0:n.endAdornment]})}})})}var q=function(){var e=(0,_.useState)(L),t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,f.jsx)("div",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)(T,{onDateChange:function(e){var t=new Date(e).toISOString().split("T")[0];console.log(t)}}),(0,f.jsx)(g,{onSubmitting:function(e){e.preventDefault();var t=e.target.elements.product.value.trim(),n=e.target.elements.grams.value.trim(),i=[{id:new Date,title:{ru:t},weight:n,calories:999}];console.log(i),r((function(e){return[].concat((0,a.Z)(e),i)})),e.target.reset()}}),(0,f.jsx)(C,{poducts:n}),(0,f.jsx)(D,{})]})})},L=[{id:1,weight:100,title:{ru:"\u041c\u0435\u043b\u0430\u043d\u0436 \u044f\u0438\u0447\u043d\u044b\u0439",ua:"\u041c\u0435\u043b\u0430\u043d\u0436 \u044f\u0454\u0447\u043d\u0438\u0439"},calories:157},{id:12,weight:100,title:{ru:"\u041c\u044f\u0441\u043e",ua:"\u041c\u044f\u0441\u043e"},calories:157},{id:11,weight:100,title:{ru:"\u041a\u0443\u0440\u0438\u0446\u0430",ua:"\u041a\u0443\u0440\u0438\u0446\u0430"},calories:157},{id:31,weight:100,title:{ru:"\u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434",ua:"\u041c\u0430\u0440\u043c\u0435\u043b\u0430\u0434"},calories:157},{id:71,weight:100,title:{ru:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434",ua:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434"},calories:17},{id:3231,weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043a\u0430",ua:"\u0413\u0440\u0435\u0447\u043a\u0430"},calories:197},{id:19,weight:100,title:{ru:"\u041a\u0430\u0440\u0442\u043e\u0448\u043a\u0430 \u0444\u0440\u0438",ua:"\u041a\u0430\u0440\u0442\u043e\u0448\u043a\u0430 \u0444\u0440\u0438"},calories:135},{id:331,weight:100,title:{ru:"\u0428\u0430\u0448\u043b\u0438\u043a",ua:"\u0428\u0430\u0448\u043b\u0438\u043a"},calories:157},{id:17,weight:100,title:{ru:"\u0425\u0432\u0430\u0442\u0438\u0442 \u0436\u0440\u0430\u0442\u044c",ua:"\u0425\u0432\u0430\u0442\u0438\u0442 \u0436\u0440\u0430\u0442\u044c"},calories:997},{id:3321,weight:100,title:{ru:"\u0423\u0441\u0442\u0430\u043b",ua:"\u0423\u0441\u0442\u0430\u043b"},calories:888}]}}]);
//# sourceMappingURL=879.da646ea6.chunk.js.map