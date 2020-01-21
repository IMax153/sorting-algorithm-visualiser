(this["webpackJsonpsorting-algorithm-visualiser"]=this["webpackJsonpsorting-algorithm-visualiser"]||[]).push([[0],{14:function(n,e,t){n.exports=t(21)},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t(1),c=t(2);function u(){var n=Object(i.a)(["\n  /* http://meyerweb.com/eric/tools/css/reset/\n    v2.0 | 20110126\n    License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    font-family: ",";\n    color: #252a31;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n"]);return u=function(){return n},n}var l=Object(c.a)(u(),["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")),s=t(4),f=t(5),d=t(3),p=function(n,e,t){var r=n[e];n[e]=n[t],n[t]=r},b=function(n){for(var e=Object(d.a)(n),t=[],r=0;r<e.length-1;r++)for(var a=function(n){t.push(e.map((function(e,t){return{value:e,selected:t===n,comparator:t===n+1}}))),e[n]>e[n+1]&&p(e,n,n+1)},o=0;o<e.length-r-1;o++)a(o);return e.map((function(n){return{value:n,selected:!1,comparator:!1}})),t},m=function(n){for(var e=Object(d.a)(n),t=[],r=function(n){for(var r=n;r>0&&e[r]<e[r-1];)t.push(e.map((function(n,e){return{value:n,selected:e===r,comparator:e===r-1}}))),p(e,r,r-1),r--},a=0;a<e.length;a++)r(a);return t.push(e.map((function(n,e){return{value:n,selected:!1,comparator:!1}}))),t},g=function n(e,t,r,a){if(e.length>1){var o=function(n,e,t,r){for(var a=n[Math.floor((t+r)/2)],o=t,i=r;o<=i;){for(;n[o]<a;)o++;for(;n[i]>a;)i--;e.push(n.map((function(n,e){return{value:n,selected:e===o,comparator:e===i}}))),o<=i&&(p(n,o,i),o++,i--)}return o}(e,t,r,a);r<o-1&&n(e,t,r,o-1),o<a&&n(e,t,o,a)}},h=function(n){var e=Object(d.a)(n),t=[];return g(e,t,0,e.length-1),t.push(e.map((function(n,e){return{value:n,selected:!1,comparator:!1}}))),t},v=function(n){for(var e=Object(d.a)(n),t=[],r=function(n){for(var r=n,a=function(n){t.push(e.map((function(e,t){return{value:e,selected:t===r,comparator:t===n}}))),e[n]<e[r]&&(r=n)},o=n+1;o<e.length;o++)a(o);t.push(e.map((function(e,t){return{value:e,selected:t===n,comparator:t===r}}))),p(e,n,r)},a=0;a<e.length-1;a++)r(a);return t.push(e.map((function(n,e){return{value:n,selected:!1,comparator:!1}}))),t},x=function(n,e,t,r){for(var a=function(a){for(var o=a;o-r>=t&&n[o]<n[o-r];)e.push(n.map((function(n,e){return{value:n,selected:e===o,comparator:e===o-r}}))),p(n,o,o-r),o-=r},o=t+r;o<n.length;o+=r)a(o)},O=function(n){for(var e=Object(d.a)(n),t=[],r=e.length;r>0;r=Math.floor(r/2))for(var a=0;a<r;a++)x(e,t,a,r);return t.push(e.map((function(n,e){return{value:n,selected:!1,comparator:!1}}))),t},j={BUBBLE_SORT:"Bubble Sort",INSERTION_SORT:"Insertion Sort",QUICK_SORT:"Quick Sort",SELECTION_SORT:"Selection Sort",SHELL_SORT:"Shell Sort"},S=function(n){return Array.from({length:n}).map((function(){return e=1,t=n,Math.floor(Math.random()*(t-e+1)+e);var e,t}))},k=Object(r.createContext)({}),E=function(){return Object(r.useContext)(k)},y=function(n){var e=n.children,t=Object(r.useState)(j.SELECTION_SORT),o=Object(s.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(50),l=Object(s.a)(u,2),d=l[0],p=l[1],g=Object(r.useState)(100),x=Object(s.a)(g,2),E=x[0],y=x[1],w=Object(r.useState)(S(d).map((function(n){return{value:n}}))),C=Object(s.a)(w,2),z=C[0],T=C[1],I=Object(r.useState)(0),R=Object(s.a)(I,2),A=R[0],F=R[1],L=Object(r.useState)(!1),_=Object(s.a)(L,2),q=_[0],B=_[1],H=Object(r.useState)(!1),N=Object(s.a)(H,2),U=N[0],D=N[1],M=Object(r.useCallback)((function(){B(!1),D(!0);var n=function(n){var e;return(e={},Object(f.a)(e,j.BUBBLE_SORT,b),Object(f.a)(e,j.INSERTION_SORT,m),Object(f.a)(e,j.QUICK_SORT,h),Object(f.a)(e,j.SELECTION_SORT,v),Object(f.a)(e,j.SHELL_SORT,O),e)[n]}(i)(z.map((function(n){return n.value})));A>0&&(n=n.slice(A));var e,t;n.forEach((e=function(e,t){T(e),F(A+t),t===n.length-1&&(F(0),B(!0),D(!1))},t=E,function(n,r){setTimeout((function(){e(n,r)}),r*t)}))}),[i,z,A,E]),Q=Object(r.useCallback)((function(){B(!1),D(!1);for(var n=setTimeout((function(){}),0);n--;)clearTimeout(n)}),[]),J=Object(r.useCallback)((function(){Q(),B(!1),D(!1),T(S(d).map((function(n){return{value:n}}))),F(0)}),[d,Q]),K=Object(r.useCallback)((function(n){c(n)}),[]),P=Object(r.useCallback)((function(n){p(n),J()}),[J]),Y=Object(r.useCallback)((function(n){y(n)}),[]);return a.a.createElement(k.Provider,{value:{algorithm:i,arraySize:d,sortSpeed:E,sortHistory:z,sorted:q,isSorting:U,start:M,pause:Q,shuffle:J,setAlgorithm:K,setSize:P,setSpeed:Y}},e)};function w(){var n=Object(i.a)(["\n  margin: 0;\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8.4px;\n    background: #fff;\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: 8.4px;\n    background: #bac7d5;\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  &::ms-track {\n    width: 100%;\n    height: 8.4px;\n    background: #bac7d5;\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  &::-webkit-slider-thumb {\n    height: 20px;\n    width: 12px;\n    margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    background: #fff;\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n\n  &::-moz-range-thumb {\n    height: 20px;\n    width: 12px;\n    background: #ffffff;\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    cursor: pointer;\n  }\n\n  &::-ms-thumb {\n    height: 20px;\n    width: 12px;\n    background: #ffffff;\n    border: 1px solid #bac7d5;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(i.a)(["\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.4;\n"]);return C=function(){return n},n}function z(){var n=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n"]);return z=function(){return n},n}function T(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 5px;\n"]);return T=function(){return n},n}function I(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n"]);return I=function(){return n},n}var R=c.b.div(I()),A=c.b.div(T()),F=c.b.label(z()),L=c.b.p(C()),_=c.b.input(w()),q=function(n){var e=n.id,t=n.label,r=n.min,o=n.max,i=n.value,c=n.onChange,u=void 0===c?function(){}:c;return a.a.createElement(A,null,a.a.createElement(F,{htmlFor:e},t),a.a.createElement(R,null,a.a.createElement(_,{id:e,type:"range",min:r,max:o,value:i,onChange:function(n){var e=n.target.value,t=parseInt(e,10);u(t)}}),a.a.createElement(L,null,i)))};function B(){var n=Object(i.a)([""]);return B=function(){return n},n}function H(){var n=Object(i.a)(["\n  display: flex;\n  width: ",";\n  flex-direction: column;\n  height: 100%;\n  margin-right: ",";\n  box-shadow: 0 -2px 2px #bac7d5;\n  opacity: ",";\n  transition: all 0.3s ease-in-out;\n  border-right: 1px solid #bac7d5;\n\n  > * {\n    transition: all 0.3s ease-in-out;\n    opacity: ",";\n  }\n"]);return H=function(){return n},n}var N=c.b.div(H(),(function(n){return n.open?"275px":"0px"}),(function(n){return n.open&&"10px"}),(function(n){return n.open?"1":"0"}),(function(n){return n.open?"1":"0"})),U=(c.b.div(B()),function(n){var e=n.open,t=n.children;return a.a.createElement(N,{open:e},t)});function D(){var n=Object(i.a)(["\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-weight: 500;\n"]);return D=function(){return n},n}function M(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n"]);return M=function(){return n},n}function Q(){var n=Object(i.a)(["\n  display: block;\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  margin: 0;\n  padding: 5px;\n  background-color: #fff;\n  background-repeat: no-repeat, repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  background-size: 0.65em auto, 100%;\n  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  font-size: 12px;\n  font-weight: 400;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n"]);return Q=function(){return n},n}var J=c.b.select(Q()),K=c.b.div(M()),P=c.b.label(D()),Y=function(n){var e=n.id,t=n.label,r=n.value,o=n.onChange,i=void 0===o?function(){}:o,c=n.children;return a.a.createElement(K,null,t&&a.a.createElement(P,{htmlFor:e},t),a.a.createElement(J,{id:e,value:r,onChange:function(n){var e=n.target.value;i(e)}},c))};function G(){var n=Object(i.a)(["\n  box-sizing: border-box;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 16px;\n  background: transparent;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.4;\n  transition: all 0.15s ease-in-out;\n  appearance: none;\n\n  &:hover {\n    background: #e5eaef;\n    color: #333;\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}var V=c.b.button(G());function W(){var n=Object(i.a)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-right: 20px;\n"]);return W=function(){return n},n}function X(){var n=Object(i.a)(["\n  grid-area: toolbar-right;\n  justify-self: flex-end;\n  margin-right: 10px;\n"]);return X=function(){return n},n}function Z(){var n=Object(i.a)(["\n  grid-area: toolbar-left;\n  justify-self: flex-start;\n  margin-left: 10px;\n"]);return Z=function(){return n},n}function $(){var n=Object(i.a)(["\n  grid-area: toolbar-center;\n"]);return $=function(){return n},n}function nn(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-template-areas: 'toolbar-left toolbar-center toolbar-right';\n  justify-items: center;\n  align-items: center;\n  min-height: 54px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #bac7d5;\n  box-shadow: 0 2px 1px -1px #bac7d5;\n  z-index: 1;\n"]);return nn=function(){return n},n}var en=c.b.div(nn()),tn=c.b.div($()),rn=c.b.div(Z()),an=c.b.div(X()),on=c.b.h1(W()),cn=function(n){var e=n.sidebarOpen,t=n.toggleSidebar,r=E(),o=r.algorithm,i=r.isSorting,c=r.start,u=r.pause,l=r.shuffle;return a.a.createElement(en,null,a.a.createElement(rn,null,a.a.createElement(on,null,o)),a.a.createElement(tn,null,i?a.a.createElement(V,{onClick:u},"Pause"):a.a.createElement(V,{onClick:function(){e&&t(),c()}},"Start"),a.a.createElement(V,{onClick:l},"Reset")),a.a.createElement(an,null,a.a.createElement(V,{onClick:t},"Options")))};function un(){var n=Object(i.a)(["\n  flex: 1;\n  height: ","%;\n  margin-right: 2px;\n  background: ",";\n\n  &:last-child {\n    margin: 0;\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(i.a)(["\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: ",";\n  background: #f5f5f5;\n"]);return ln=function(){return n},n}function sn(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"]);return sn=function(){return n},n}var fn=c.b.div(sn()),dn=c.b.div(ln(),(function(n){return n.sidebarOpen?"0 10px 0 0":"0 10px"})),pn=c.b.div(un(),(function(n){return n.height}),(function(n){var e=n.comparator,t=n.selected;return n.sorted?"#28a138":t?"#b91919":e?"#0172cb":"#b19cd9"})),bn=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],o=e[1],i=E(),c=i.algorithm,u=i.arraySize,l=i.isSorting,f=i.sortHistory,d=i.sorted,p=i.sortSpeed,b=i.setAlgorithm,m=i.setSize,g=i.setSpeed,h=Object(r.useCallback)((function(){o((function(n){return!n}))}),[]);return a.a.createElement(fn,null,a.a.createElement(cn,{sidebarOpen:t,toggleSidebar:h}),a.a.createElement(dn,{sidebarOpen:t},a.a.createElement(U,{open:t},a.a.createElement(Y,{id:"Algorithm Select",label:"Algorithm",value:c,onChange:function(n){return b(n)}},Object.values(j).map((function(n){return a.a.createElement("option",{value:n},n)}))),!l&&a.a.createElement(q,{id:"Array Size Slider",label:"Array Size",min:10,max:100,value:u,onChange:function(n){return m(n)}}),!l&&a.a.createElement(q,{id:"Sort Delay Slider",label:"Sort Delay",min:50,max:1e3,value:p,onChange:g})),f.map((function(n,e){var t=n.value,r=n.comparator,o=n.selected;return a.a.createElement(pn,{key:e,height:t/f.length*90,comparator:r,selected:o,sorted:d})}))))};Object(o.render)(a.a.createElement((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,null),a.a.createElement(y,null,a.a.createElement(bn,null)))}),null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f7f28a95.chunk.js.map