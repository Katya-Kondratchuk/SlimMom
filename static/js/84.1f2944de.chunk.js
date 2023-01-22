"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{229:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}),"KeyboardReturn");t.Z=i},4852:function(e,t,n){n.d(t,{ZP:function(){return G}});var a=n(4942),o=n(3366),r=n(7462),i=n(2791),s=n(8182),d=n(4419),c=n(6897),l=n(2065),u=n(6934),p=n(1402),m=n(7479),v=n(9103),y=n(162),f=n(2071),b=n(6199),Z=n(5878),g=n(1217);function h(e){return(0,g.Z)("MuiListItem",e)}var x=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var S=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function w(e){return(0,g.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var C=n(184),I=["className"],M=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),P=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,c=(0,o.Z)(n,I),l=i.useContext(b.Z),u=(0,r.Z)({},n,{disableGutters:l.disableGutters}),m=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,d.Z)(a,w,n)}(u);return(0,C.jsx)(M,(0,r.Z)({className:(0,s.Z)(m.root,a),ownerState:u,ref:t},c))}));P.muiName="ListItemSecondaryAction";var L=P,A=["className"],N=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],k=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,a.Z)({},"& > .".concat(S.root),{paddingRight:48}),(t={},(0,a.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,a.Z)(t,"&.".concat(x.selected),(0,a.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(x.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},o.button&&(0,a.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),R=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),G=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,l=void 0===a?"center":a,u=n.autoFocus,Z=void 0!==u&&u,g=n.button,S=void 0!==g&&g,w=n.children,I=n.className,M=n.component,P=n.components,G=void 0===P?{}:P,O=n.componentsProps,T=void 0===O?{}:O,j=n.ContainerComponent,F=void 0===j?"li":j,V=n.ContainerProps,B=(V=void 0===V?{}:V).className,q=n.dense,_=void 0!==q&&q,z=n.disabled,D=void 0!==z&&z,H=n.disableGutters,E=void 0!==H&&H,K=n.disablePadding,Q=void 0!==K&&K,U=n.divider,W=void 0!==U&&U,Y=n.focusVisibleClassName,J=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,oe=(0,o.Z)(n.ContainerProps,A),re=(0,o.Z)(n,N),ie=i.useContext(b.Z),se=i.useMemo((function(){return{dense:_||ie.dense||!1,alignItems:l,disableGutters:E}}),[l,ie.dense,_,E]),de=i.useRef(null);(0,y.Z)((function(){Z&&de.current&&de.current.focus()}),[Z]);var ce=i.Children.toArray(w),le=ce.length&&(0,v.Z)(ce[ce.length-1],["ListItemSecondaryAction"]),ue=(0,r.Z)({},n,{alignItems:l,autoFocus:Z,button:S,dense:se.dense,disabled:D,disableGutters:E,disablePadding:Q,divider:W,hasSecondaryAction:le,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,o=e.dense,r=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,d.Z)(i,h,a)}(ue),me=(0,f.Z)(de,t),ve=ae.root||G.Root||k,ye=te.root||T.root||{},fe=(0,r.Z)({className:(0,s.Z)(pe.root,ye.className,I),disabled:D},re),be=M||"li";return S&&(fe.component=M||"div",fe.focusVisibleClassName=(0,s.Z)(x.focusVisible,Y),be=m.Z),le?(be=fe.component||M?be:"div","li"===F&&("li"===be?be="div":"li"===fe.component&&(fe.component="div")),(0,C.jsx)(b.Z.Provider,{value:se,children:(0,C.jsxs)(R,(0,r.Z)({as:F,className:(0,s.Z)(pe.container,B),ref:me,ownerState:ue},oe,{children:[(0,C.jsx)(ve,(0,r.Z)({},ye,!(0,c.Z)(ve)&&{as:be,ownerState:(0,r.Z)({},ue,ye.ownerState)},fe,{children:ce})),ce.pop()]}))})):(0,C.jsx)(b.Z.Provider,{value:se,children:(0,C.jsxs)(ve,(0,r.Z)({},ye,{as:be,ref:me},!(0,c.Z)(ve)&&{ownerState:(0,r.Z)({},ue,ye.ownerState)},fe,{children:[ce,J&&(0,C.jsx)(L,{children:J})]}))})}))},9900:function(e,t,n){var a=n(4942),o=n(3366),r=n(7462),i=n(2791),s=n(8182),d=n(4419),c=n(890),l=n(6199),u=n(1402),p=n(6934),m=n(9849),v=n(184),y=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],f=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,a.Z)({},"& .".concat(m.Z.primary),t.primary),(0,a.Z)({},"& .".concat(m.Z.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),b=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiListItemText"}),a=n.children,p=n.className,b=n.disableTypography,Z=void 0!==b&&b,g=n.inset,h=void 0!==g&&g,x=n.primary,S=n.primaryTypographyProps,w=n.secondary,C=n.secondaryTypographyProps,I=(0,o.Z)(n,y),M=i.useContext(l.Z).dense,P=null!=x?x:a,L=w,A=(0,r.Z)({},n,{disableTypography:Z,inset:h,primary:!!P,secondary:!!L,dense:M}),N=function(e){var t=e.classes,n=e.inset,a=e.primary,o=e.secondary,r={root:["root",n&&"inset",e.dense&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,d.Z)(r,m.L,t)}(A);return null==P||P.type===c.Z||Z||(P=(0,v.jsx)(c.Z,(0,r.Z)({variant:M?"body2":"body1",className:N.primary,component:null!=S&&S.variant?void 0:"span",display:"block"},S,{children:P}))),null==L||L.type===c.Z||Z||(L=(0,v.jsx)(c.Z,(0,r.Z)({variant:"body2",className:N.secondary,color:"text.secondary",display:"block"},C,{children:L}))),(0,v.jsxs)(f,(0,r.Z)({className:(0,s.Z)(N.root,p),ownerState:A,ref:t},I,{children:[P,L]}))}));t.Z=b},5193:function(e,t,n){var a;n.d(t,{Z:function(){return p}});var o=n(9439),r=n(2791),i=n(9120),s=n(3073),d=n(162);function c(e,t,n,a,i){var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=r.useState((function(){return i&&s?n(e).matches:a?a(e).matches:t})),l=(0,o.Z)(c,2),u=l[0],p=l[1];return(0,d.Z)((function(){var t=!0;if(s){var a=n(e),o=function(){t&&p(a.matches)};return o(),a.addListener(o),function(){t=!1,a.removeListener(o)}}}),[e,n,s]),u}var l=(a||(a=n.t(r,2))).useSyncExternalStore;function u(e,t,n,a){var i=r.useCallback((function(){return t}),[t]),s=r.useMemo((function(){if(null!==a){var t=a(e).matches;return function(){return t}}return i}),[i,e,a]),d=r.useMemo((function(){if(null===n)return[i,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[i,n,e]),c=(0,o.Z)(d,2),u=c[0],p=c[1];return l(p,u,s)}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,i.Z)(),a="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,s.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),r=o.defaultMatches,d=void 0!==r&&r,p=o.matchMedia,m=void 0===p?a?window.matchMedia:null:p,v=o.ssrMatchMedia,y=void 0===v?null:v,f=o.noSsr;var b="function"===typeof e?e(n):e;b=b.replace(/^@media( ?)/m,"");var Z=void 0!==l?u:c,g=Z(b,d,m,y,f);return g}},9276:function(e,t,n){var a=(0,n(3814).Z)();t.Z=a}}]);
//# sourceMappingURL=84.1f2944de.chunk.js.map