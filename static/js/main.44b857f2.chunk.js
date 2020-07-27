(this["webpackJsonpapple-pie"]=this["webpackJsonpapple-pie"]||[]).push([[0],{108:function(e,t,n){e.exports=n(121)},113:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(9),l=n.n(c),i=(n(113),n(15)),u=n(46),s=n(19),m=n(43),p=n(87),d=n(23);!function(e){e.SetToken="Auth/SetToken",e.RemoveToken="Auth/RemoveToken"}(a||(a={}));var f,g={token:localStorage.getItem("token")};!function(e){e.SetName="User/SetName",e.SetMonth="User/SetMonth"}(f||(f={}));var h,b=function(e){return{type:f.SetMonth,payload:e}},v={name:"",month:0};!function(e){e.SetStatement="Statement/SetStatement"}(h||(h={}));var E=function(e){return{type:h.SetStatement,payload:e}},w={items:[]},k=Object(m.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case a.SetToken:return Object(d.a)({},e,{token:r});case a.RemoveToken:return Object(d.a)({},e,{token:null});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f.SetName:return Object(d.a)({},e,{name:a});case f.SetMonth:return Object(d.a)({},e,{month:a});default:return e}},statement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h.SetStatement:return Object(d.a)({},e,{items:a});default:return e}}}),y=Object(m.createStore)(k,{},Object(p.composeWithDevTools)()),x=n(24),O=n(185),j=n(171),S=n(168),C=n(181),N=n(88),T=n.n(N),D=n(68),B=n(166),I=function(){var e=Object(s.b)();return{onSetToken:function(t){t&&t.length>0&&(localStorage.setItem("token",t),e(function(e){return{type:a.SetToken,payload:e}}(t)))}}},R=n(164),W=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),M=function(){var e=W(),t=I(),n=r.useState(""),a=Object(x.a)(n,2),o=a[0],c=a[1],l=r.useCallback((function(e){c(e.target.value)}),[c]),i=r.useCallback((function(e){e.preventDefault(),t.onSetToken(o)}),[t,o]);return r.createElement(B.a,{component:"main",maxWidth:"xs"},r.createElement(S.a,null),r.createElement("div",{className:e.paper},r.createElement(O.a,{className:e.avatar},r.createElement(T.a,null)),r.createElement(D.a,{component:"h1",variant:"h5"},"\u041ci\u0439 \u0442\u043e\u043a\u0435\u043d"),r.createElement("form",{className:e.form,noValidate:!0},r.createElement(C.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"token",label:"Token",type:"password",id:"token",autoComplete:"none",value:o,onChange:l}),r.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:i},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044f"))))},H=n(5),F=n(184),L=n(175),G=n(91),P=n.n(G),U=n(176),z=n(170),A=n(172),J=n(173),X=n(174),q=n(90),V=n.n(q),$=n(89),K=n.n($),Q=n(60),Y=Object(R.a)((function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(Q.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},userContainer:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:15,paddingBottom:15},userName:{display:"visible"},userNameHidden:{display:"none"},dateContainer:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:15,paddingBottom:15},date:{display:"visible"},dateHidden:{display:"none"}}})),Z=function(e){var t=e.drawerOpen,n=e.userName,a=e.onDrawerToggleClick,o=Y(),c=i.g(),l={paper:Object(H.a)(o.drawerPaper,!t&&o.drawerPaperClose)},u=Object(H.a)(o.userName,!t&&o.userNameHidden),s=Object(H.a)(o.date,!t&&o.dateHidden),m=r.useCallback((function(e){return function(){c.push(e)}}),[c]);return r.createElement(F.a,{variant:"permanent",classes:l,open:t},r.createElement("div",{className:o.toolbarIcon},r.createElement(L.a,{onClick:a},r.createElement(P.a,null))),r.createElement(U.a,null),r.createElement("div",{className:o.userContainer},r.createElement(O.a,null,n.split(" ").reduce((function(e,t){return e+t.substring(0,1).toUpperCase()}),"")),r.createElement("div",{className:u},r.createElement(D.a,{variant:"h6"},n))),r.createElement(U.a,null),r.createElement("div",{className:o.dateContainer},r.createElement("div",{className:s},r.createElement(D.a,{variant:"body2"},"\u041b\u0438\u043f\u0435\u043d\u044c 2020"))),r.createElement(U.a,null),r.createElement(z.a,null,function(e){return r.createElement(r.Fragment,null,r.createElement(A.a,{button:!0,onClick:e("/planning")},r.createElement(J.a,null,r.createElement(K.a,null)),r.createElement(X.a,{primary:"\u041f\u043b\u0430\u043d\u0443\u0432\u0430\u043d\u043d\u044f"})),r.createElement(A.a,{button:!0,onClick:e("/dashboard")},r.createElement(J.a,null,r.createElement(V.a,null)),r.createElement(X.a,{primary:"\u0414\u0430\u0448\u0431\u043e\u0440\u0434"})))}(m)))},_=n(177),ee=n(178),te=n(92),ne=n.n(te),ae=n(93),re=n.n(ae),oe=Object(R.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},toolbar:{paddingRight:24}}})),ce=function(e){var t=e.drawerOpen,n=e.onDrawerToggleClick,a=e.onLogout,o=oe(),c=Object(H.a)(o.appBar,t&&o.appBarShift),l=Object(H.a)(o.menuButton,t&&o.menuButtonHidden);return r.createElement(_.a,{position:"absolute",className:c},r.createElement(ee.a,{className:o.toolbar},r.createElement(L.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:n,className:l},r.createElement(ne.a,null)),r.createElement(D.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:o.title},"Page"),r.createElement(L.a,{color:"inherit",onClick:a},r.createElement(re.a,null))))},le=n(94),ie=n.n(le),ue=n(183),se=n(122),me={0:"\u0421\u0456\u0447\u0435\u043d\u044c",1:"\u041b\u044e\u0442\u0438\u0439",2:"\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c",3:"\u041a\u0432\u0456\u0442\u0435\u043d\u044c",4:"\u0422\u0440\u0430\u0432\u0435\u043d\u044c",5:"\u0427\u0435\u0440\u0432\u0435\u043d\u044c",6:"\u041b\u0438\u043f\u0435\u043d\u044c",7:"\u0421\u0435\u0440\u043f\u0435\u043d\u044c",8:"\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c",9:"\u0416\u043e\u0432\u0442\u0435\u043d\u044c",10:"\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434",11:"\u0413\u0440\u0443\u0434\u0435\u043d\u044c"},pe=Object(R.a)((function(e){return{container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},modal:{maxWidth:500,width:"100%",height:500,position:"absolute",left:"50%",top:"50%",transform:"translate(-150px, -250px)",outline:"none"},modalInner:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexWrap:"wrap",height:"100%"},button:{marginLeft:10,marginRight:10}}})),de=function(){var e=pe(),t=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user}));return{month:t.month,monthLabel:me[t.month],onSetMonth:function(t){e(b(t))}}}(),n=r.useState(!1),a=Object(x.a)(n,2),o=a[0],c=a[1],l=r.useCallback((function(e){return function(){c(e)}}),[c]),i=r.useCallback((function(e){return function(){t.onSetMonth(e)}}),[t]);return r.createElement(r.Fragment,null,r.createElement("div",{className:e.container},r.createElement(D.a,{variant:"h4"},t.monthLabel," 2020"),r.createElement(L.a,{"aria-label":"delete",onClick:l(!0)},r.createElement(ie.a,null))),r.createElement(ue.a,{open:o,onClose:l(!1),"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.createElement("div",{className:e.modal},r.createElement(se.a,{className:e.modalInner},Object.entries(me).map((function(t){var n=Object(x.a)(t,2),a=n[0],o=n[1],c=i(parseInt(a));return function(e,t,n){return r.createElement(j.a,{variant:"outlined",color:"primary",className:e.button,onClick:n},t)}(e,o,c)}))))))},fe=n(179),ge=n(182),he=n(180),be=n(35),ve=n(12),Ee=Object(R.a)((function(e){return{paper:{width:"100%"}}})),we=function(e){var t=e.chartData,n=Ee(),a=r.useState("income"),o=Object(x.a)(a,2),c=o[0],l=o[1],i=r.useCallback((function(e,t){l(t)}),[l]);return r.createElement(fe.a,{container:!0,spacing:3},r.createElement(fe.a,{item:!0,xs:12,md:8,lg:9},r.createElement(se.a,{className:n.paper},r.createElement(ge.a,{value:c,onChange:i,"aria-label":"simple tabs example"},r.createElement(he.a,{label:"\u0414\u043e\u0445\u043e\u0434\u0438",value:"income"}),r.createElement(he.a,{label:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438",value:"expenses"})),"income"===c&&r.createElement(be.c,{data:t},r.createElement(be.a,null),r.createElement(be.d,null),r.createElement(be.b,{name:"plus",valueField:"plus",argumentField:"day",color:"#00b300"}),r.createElement(ve.e,null),r.createElement(ve.f,null)),"expenses"===c&&r.createElement(be.c,{data:t},r.createElement(be.a,null),r.createElement(be.d,null),r.createElement(be.b,{name:"minus",valueField:"minus",argumentField:"day",color:"#ff4d4d"}),r.createElement(ve.e,null),r.createElement(ve.f,null)))),r.createElement(fe.a,{item:!0,xs:12,md:4,lg:3},r.createElement(se.a,null,"TODO: statistic for day")))},ke=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}})),ye=function(){var e=ke(),t=function(){for(var e=Object(s.c)((function(e){return e.statement})),t=Object(s.c)((function(e){return e.user})),n=new Map,a=new Date(2020,t.month,0).getDate(),r=0;r<a;r+=1){var o="".concat(r);n.set(o,{day:o,minus:0,plus:0})}e.items.forEach((function(e){var t=e.time,a=e.amount,r=(e.balance,a/100),o={day:"".concat(new Date(1e3*t).getDate()),minus:r<0?r:0,plus:r>0?r:0},c=n.get(o.day);o.minus+=c?c.minus:0,o.plus+=c?c.plus:0,n.set(o.day,o)}));var c=[];return n.forEach((function(e){c.push(Object(d.a)({},e,{minus:-1*e.minus}))})),{statementGroupedByDay:c}}();return r.createElement("div",{className:e.paper},r.createElement(we,{chartData:t.statementGroupedByDay}))},xe=n(30),Oe=n.n(xe),je=n(45),Se=function(e){return function(e,t){var n=localStorage.getItem("token"),a=new Headers,r="https://api.monobank.ua/".concat(t);return n&&a.append("X-Token",n),fetch(r,{method:e,headers:a})}("get",e)},Ce=function(){var e=Object(je.a)(Oe.a.mark((function e(){var t,n,a;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se("personal/client-info");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.name,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(je.a)(Oe.a.mark((function e(t){var n,a,r,o,c;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date("2020.".concat(t,".01")).getTime()/1e3,a=new Date("2020.".concat(t,".").concat(new Date(2020,t,0).getDate())).getTime()/1e3,e.prev=2,e.next=5,Se("personal/statement/0/".concat(n,"/").concat(a));case 5:return r=e.sent,e.next=8,r.json();case 8:if(!((o=e.sent)&&o.length>0)){e.next=12;break}return c=o,e.abrupt("return",c);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:return e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user})),n=r.useCallback(Object(je.a)(Oe.a.mark((function t(){var n;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce();case 2:(n=t.sent)&&e((a=n,{type:f.SetName,payload:a}));case 4:case"end":return t.stop()}var a}),t)}))),[e]),o=r.useCallback(function(){var t=Object(je.a)(Oe.a.mark((function t(n){var a;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ne(n);case 2:a=t.sent,e(E(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),c=r.useCallback((function(){var t=(new Date).getMonth();e(b(t))}),[e]);return r.useEffect((function(){n(),c()}),[n,c]),r.useEffect((function(){o(t.month)}),[o,t.month]),{userName:t.name,onRemoveToken:function(){localStorage.removeItem("token"),e({type:a.RemoveToken})}}},De=Object(R.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),Be=function(){var e=De(),t=Te(),n=r.useState(!0),a=Object(x.a)(n,2),o=a[0],c=a[1],l=r.useCallback((function(){console.log(o,!o),c(!o)}),[o,c]),u=r.useCallback((function(){t.onRemoveToken()}),[t]);return r.createElement("div",{className:e.root},r.createElement(S.a,null),r.createElement(ce,{drawerOpen:o,onDrawerToggleClick:l,onLogout:u}),r.createElement(Z,{drawerOpen:o,userName:t.userName,onDrawerToggleClick:l}),r.createElement("main",{className:e.content},r.createElement("div",{className:e.appBarSpacer}),r.createElement(B.a,{maxWidth:"lg",className:e.container},r.createElement(de,null),r.createElement(i.b,{path:"/dashboard"},r.createElement(ye,null)))))},Ie=n(67),Re=function(){return!!Object(s.c)((function(e){return e.auth})).token},We=function(e){var t=e.children,n=Object(Ie.a)(e,["children"]),a=Re();return r.createElement(i.b,Object.assign({},n,{render:function(e){var n=e.location;return a?t:r.createElement(i.a,{to:{pathname:"/login",state:{from:n}}})}}))},Me=function(e){var t=e.children,n=Object(Ie.a)(e,["children"]),a=Re();return r.createElement(i.b,Object.assign({},n,{render:function(e){var n=e.location;return a?r.createElement(i.a,{to:{pathname:"/",state:{from:n}}}):t}}))},He=function(){return r.createElement(i.d,null,r.createElement(Me,{path:"/login"},r.createElement(M,null)),r.createElement(We,{path:"/"},r.createElement(Be,null)))},Fe=function(){return r.createElement(s.a,{store:y},r.createElement(u.a,null,r.createElement(He,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.44b857f2.chunk.js.map