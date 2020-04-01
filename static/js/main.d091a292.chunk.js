(this["webpackJsonpui-apollo-tasks-app"]=this["webpackJsonpui-apollo-tasks-app"]||[]).push([[0],{264:function(e,t,n){e.exports=n(473)},425:function(e,t,n){},426:function(e,t,n){},457:function(e,t,n){},473:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=n(11),s=n(59);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(16),u=n.n(l),d=n(29),m=n(32),p=n(20),f=n(64),v=n(74),h=n(96),E=function(){function e(){Object(v.a)(this,e)}return Object(h.a)(e,null,[{key:"saveToken",value:function(e){localStorage.setItem("TASKS_APP_TOKEN",e)}},{key:"getToken",value:function(){return localStorage.getItem("TASKS_APP_TOKEN")}},{key:"getAuthHeader",value:function(){var t=e.getToken();return t?{authorization:"Bearer ".concat(t)}:{}}},{key:"deleteToken",value:function(){localStorage.removeItem("TASKS_APP_TOKEN")}}]),e}();function b(){var e=Object(p.a)([" \n mutation Logout($nothing: Boolean) {\n    logout(nothing: $nothing) @client\n }"]);return b=function(){return e},e}function g(){var e=Object(p.a)([" \n mutation SetSession($access_token: String!) {\n    setSession(access_token: $access_token) @client\n }\n "]);return g=function(){return e},e}function k(){var e=Object(p.a)([" \n query GetSession {\n    session @client  \n}"]);return k=function(){return e},e}Object(f.a)(k()),Object(f.a)(g());var y=Object(f.a)(b()),O={setSession:function(e,t,n){var a=t.access_token;return n.cache.writeData({data:{session:a}}),E.saveToken(a),null},logout:function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.deleteToken(),e.next=3,R.resetStore();case 3:return e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},j=n(83),T=n(49),S=n(95),x=n(242),w=n(123),I=n(22),C=new j.a;C.writeData({data:{session:E.getToken()}});var A=Object(S.b)({uri:"https://apple-cake-68011.herokuapp.com/graphql"}),P=Object(x.a)((function(e,t){var n=t.headers;return{headers:Object(m.a)({},n,{},E.getAuthHeader())}})),D=Object(w.a)((function(e){e.networkError;var t=e.graphQLErrors,n=void 0===t?[]:t,a=e.operation.getContext().response,r=n.find((function(e){var t,n,a;return 401===(null===e||void 0===e||null===(t=e.extensions)||void 0===t||null===(n=t.exception)||void 0===n||null===(a=n.response)||void 0===a?void 0:a.statusCode)}));(401===(null===a||void 0===a?void 0:a.status)||r)&&R.mutate({mutation:y}).catch()})),R=new T.a({link:I.a.from([D,P,A]),cache:C,resolvers:{Mutation:Object(m.a)({},O)}});R.onResetStore(Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.writeData({data:{session:E.getToken()}});case 1:case"end":return e.stop()}}),e)}))));var N,$=n(79),_=n(15),q=n(475),L=n(112),G=n(54),F=n(479),B=n(488),K=n(483),U=n(485),Y=n(80),H=n(492),J=n(493),z=n(36),M=n.n(z),Q=(n(26),n(39),n(19));function W(){var e=Object(p.a)(["\n    query GetTaskEvents($taskId: Int!) {\n  taskEvents(taskId: $taskId) {\n    id\n    createdAt\n    taskId\n    status\n    user {\n      id\n      username\n    }\n  }\n}\n    "]);return W=function(){return e},e}function V(){var e=Object(p.a)(["\n    query GetSharedTasks {\n  sharedTasks {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    status\n    author {\n      id\n      username\n    }\n  }\n}\n    "]);return V=function(){return e},e}function X(){var e=Object(p.a)(["\n    query GetProfiles {\n  profiles {\n    id\n    username\n  }\n}\n    "]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n    query GetTasks {\n  tasks {\n    id\n    title\n    description\n    createdAt\n    updatedAt\n    status\n    author {\n      id\n      username\n    }\n  }\n}\n    "]);return Z=function(){return e},e}function ee(){var e=Object(p.a)(["\n    query Me {\n  me {\n    id\n    username\n  }\n}\n    "]);return ee=function(){return e},e}function te(){var e=Object(p.a)(["\n    mutation ShareTask($shareTaskInput: ShareTaskInput!) {\n  shareTask(shareTaskInput: $shareTaskInput) {\n    id\n  }\n}\n    "]);return te=function(){return e},e}function ne(){var e=Object(p.a)(["\n    mutation CreateTask($newTaskData: NewTaskInput!) {\n  addTask(newTaskData: $newTaskData) {\n    id\n    title\n    description\n    status\n    createdAt\n    updatedAt\n    author {\n      id\n      username\n    }\n  }\n}\n    "]);return ne=function(){return e},e}function ae(){var e=Object(p.a)(["\n    mutation UpdateTaskDetails($taskDetails: UpdateTaskDetails!) {\n  updateTaskDetails(taskDetails: $taskDetails) {\n    id\n    title\n    description\n    status\n    createdAt\n    updatedAt\n    author {\n      id\n      username\n    }\n  }\n}\n    "]);return ae=function(){return e},e}function re(){var e=Object(p.a)(["\n    mutation ChangeTaskStatus($changeTaskStatusInput: ChangeTaskStatusInput!) {\n  changeTaskStatus(changeTaskStatusInput: $changeTaskStatusInput) {\n    id\n    title\n    description\n    status\n    createdAt\n    updatedAt\n    author {\n      id\n      username\n    }\n  }\n}\n    "]);return re=function(){return e},e}function ce(){var e=Object(p.a)(["\n    mutation Signup($localAuthPayload: LocalAuthPayload!) {\n  signup(localAuthPayload: $localAuthPayload) {\n    id\n    username\n    access_token\n  }\n}\n    "]);return ce=function(){return e},e}function ie(){var e=Object(p.a)(["\n    mutation Login($localAuthPayload: LocalAuthPayload!) {\n  login(localAuthPayload: $localAuthPayload) {\n    id\n    username\n    access_token\n  }\n}\n    "]);return ie=function(){return e},e}function oe(){var e=Object(p.a)(["\n    mutation Logout($nothing: Boolean) {\n  logout(nothing: $nothing) @client\n}\n    "]);return oe=function(){return e},e}function se(){var e=Object(p.a)(["\n    mutation SetSession($access_token: String!) {\n  setSession(access_token: $access_token) @client\n}\n    "]);return se=function(){return e},e}function le(){var e=Object(p.a)(["\n    query GetSession {\n  session @client\n}\n    "]);return le=function(){return e},e}!function(e){e.READY="READY",e.IN_PROGRESS="IN_PROGRESS",e.DONE="DONE",e.REJECTED="REJECTED"}(N||(N={}));var ue=M()(le());function de(e){return Q.c(ue,e)}var me=M()(se());var pe=M()(oe());var fe=M()(ie());var ve=M()(ce());var he=M()(re());var Ee=M()(ae());var be=M()(ne());var ge=M()(te());var ke=M()(ee());function ye(e){return Q.c(ke,e)}var Oe=M()(Z());var je=M()(X());var Te=M()(V());var Se=M()(W());var xe,we,Ie=q.a.Content,Ce=[{key:"login",tab:"Log in"},{key:"signup",tab:"Sign up"}],Ae=function(){var e,t=de(),n=t.data,c=t.client,i=Object($.g)(),o=Q.b(fe,e),s=Object(_.a)(o,2),l=s[0],m=s[1].error,p=function(e){return Q.b(ve,e)}(),f=Object(_.a)(p,2),v=f[0],h=f[1].error,E=function(e){return Q.b(me,e)}(),b=Object(_.a)(E,1)[0],g=function(){var e=Object($.h)(),t=Object($.g)(),n=new URLSearchParams(e.search);return[function(e,t){return n.get(e)||t},function(a,r){n.set(a,r),t.push({pathname:e.pathname,search:n.toString()})}]}(),k=Object(_.a)(g,2),y=k[0],O=k[1],j=y("tab","login");Object(a.useEffect)((function(){y("tab","")||O("tab","login"),(null===n||void 0===n?void 0:n.session)&&i.replace("/"),c.stop()}),[]);var T={login:{action:l,submitTitle:"Log in"},signup:{action:v,submitTitle:"Sign up"}}[j],S=T.action,x=T.submitTitle,w=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,e.next=4,S({variables:{localAuthPayload:{username:n,password:a}}});case 4:if(r=e.sent,"login"in(c=r.data||{})&&(o=null===(s=r.data)||void 0===s?void 0:s.login.access_token),"signup"in c&&(o=null===(l=r.data)||void 0===l?void 0:l.signup.access_token),!o){e.next=12;break}return e.next=11,b({variables:{access_token:o}});case 11:i.replace("/");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.a,{className:"layout"},r.a.createElement(Ie,null,r.a.createElement(L.a,{justify:"center",align:"middle",style:{minHeight:"100vh"}},r.a.createElement(G.a,{span:8},r.a.createElement(F.a,{style:{width:"100%"},tabList:Ce,activeTabKey:j,onTabChange:function(e){return O("tab",e)}},m&&"login"===j&&r.a.createElement(B.a,{message:"Bad login or password",type:"error",showIcon:!0,style:{marginBottom:"20px"}}),h&&"signup"===j&&h.graphQLErrors.map((function(e){return r.a.createElement(B.a,{key:e.message,message:e.message,type:"error",showIcon:!0,style:{marginBottom:"20px"}})})),r.a.createElement(K.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){w(e)}},r.a.createElement(K.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(U.a,{prefix:r.a.createElement(H.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(K.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(U.a,{prefix:r.a.createElement(J.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(K.a.Item,null,r.a.createElement(Y.a,{type:"primary",htmlType:"submit",className:"login-form-button"},x))))))))},Pe=n(63),De=function(e){var t=e.children,n=Object(Pe.a)(e,["children"]),a=de({fetchPolicy:"cache-only"}).data,c=Object($.i)("/auth");return(null===a||void 0===a?void 0:a.session)||c?r.a.createElement($.b,n,t):r.a.createElement($.a,{to:{pathname:"/auth"}})},Re=n(484),Ne=(n(425),n(476)),$e=(n(426),function(){var e=ye(),t=e.data;e.loading,e.error;return r.a.createElement("div",{className:"user-header"},r.a.createElement(Ne.a,{style:{backgroundColor:"#f56a00",verticalAlign:"middle"},size:"large",shape:"square"},null===t||void 0===t?void 0:t.me.username))}),_e=q.a.Header,qe=q.a.Content,Le=function(e){return function(t){var n,a=Object($.h)(),c=Q.b(pe,n),i=Object(_.a)(c,1)[0];return r.a.createElement(q.a,{className:"layout",style:{minHeight:"100vh"}},r.a.createElement(_e,null,r.a.createElement($e,null),r.a.createElement(Re.a,{theme:"dark",mode:"horizontal",selectedKeys:[a.pathname]},r.a.createElement(Re.a.Item,{key:"/",style:{float:"left"}},r.a.createElement(s.b,{to:"/",className:"nav-text"},"My tasks")),r.a.createElement(Re.a.Item,{key:"/shared-tasks",style:{float:"left"}},r.a.createElement(s.b,{to:"/shared-tasks",className:"nav-text"},"Shared Tasks")),r.a.createElement(Re.a.Item,{style:{float:"right"}},r.a.createElement(Y.a,{type:"danger",onClick:function(){return i()}},"Logout")))),r.a.createElement(qe,{style:{padding:"0 50px"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(e,t))))}},Ge=n(477),Fe=n(103),Be=n(102),Ke=n(481),Ue=n(111),Ye=n.n(Ue),He=n(13),Je=n(486),ze=n(494),Me=(xe={},Object(He.a)(xe,N.READY,"default"),Object(He.a)(xe,N.IN_PROGRESS,"processing"),Object(He.a)(xe,N.DONE,"success"),Object(He.a)(xe,N.REJECTED,"error"),xe),Qe=(we={},Object(He.a)(we,N.READY,"Ready"),Object(He.a)(we,N.IN_PROGRESS,"In Progress"),Object(He.a)(we,N.DONE,"Done"),Object(He.a)(we,N.REJECTED,"Rejected"),we),We=function(e){var t,n=e.taskId,c=e.status,i=e.clickable,o=Object(a.useState)(!1),s=Object(_.a)(o,2),l=s[0],m=s[1],p=Object(a.useState)(null),f=Object(_.a)(p,2),v=f[0],h=f[1],E=Q.b(he,t),b=Object(_.a)(E,2),g=b[0],k=b[1].loading,y=function(e,t){return r.a.createElement(Je.a,{style:i?{cursor:"pointer"}:{},color:Me[e],onClick:function(n){n.stopPropagation(),t&&t(e)}},Qe[e])};return r.a.createElement(ze.a,{content:v?r.a.createElement(B.a,{message:v.message,type:"error",showIcon:!0,closable:!0,onClose:function(){return h(null)}}):r.a.createElement(Ge.a,{tip:"Loading...",spinning:k,delay:200},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},Object.keys(Me).filter((function(e){return e!==c})).map((function(e){return r.a.createElement("div",{style:{margin:"5px"},key:e},y(e,function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g({variables:{changeTaskStatusInput:{taskId:n,status:t}},refetchQueries:[{query:Se,variables:{taskId:n}}]});case 3:(null===(a=e.sent)||void 0===a?void 0:a.errors)||m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))})))),title:"Change status",trigger:"click",visible:l&&i,onVisibleChange:m,placement:"bottomRight"},y(c))};We.defaultProps={clickable:!0};var Ve,Xe=n(480),Ze=n(478),et=n(491),tt=n(482),nt=n(489),at=n(255),rt=function(e){var t=e.onAfterClose,n=e.onExpire,a=e.startFromSeconds,c=e.message,i=Object(at.useTimer)({expiryTimestamp:(new Date).getTime()+1e3*a,onExpire:n}).seconds;return r.a.createElement(B.a,{message:c,description:"Closing in ".concat(i,"s"),type:"success",showIcon:!0,closeText:"Share again",afterClose:t})},ct=tt.a.Option,it=function(e){var t=e.onSend,n=e.loading,c=e.profiles,i=Object(a.useState)(),o=Object(_.a)(i,2),s=o[0],l=o[1];return r.a.createElement(Ge.a,{tip:"Loading...",spinning:n,delay:200},r.a.createElement(tt.a,{autoFocus:!0,style:{width:"90%"},onChange:function(e){e&&l(+e)}},c.map((function(e){return r.a.createElement(ct,{value:e.id,key:e.id},e.username)}))),r.a.createElement(Y.a,{type:"primary",loading:n,icon:r.a.createElement(nt.a,null),style:{float:"right"},disabled:!Boolean(s&&s>0),onClick:function(){t(s)}}))},ot=function(e){var t,n,a=e.task,c=Q.b(ge,n),i=Object(_.a)(c,2),o=i[0],s=i[1].loading,l=function(e){return Q.c(je,e)}().data,m=ye({fetchPolicy:"cache-only"}).data;if(((null===m||void 0===m?void 0:m.me.id)||-1)!==(null===(t=a.author)||void 0===t?void 0:t.id))return null;var p=(null===l||void 0===l?void 0:l.profiles)||[],f=function(e){return r.a.createElement(it,{onSend:function(t){v(e,t)},loading:s,profiles:p})},v=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,o({variables:{shareTaskInput:{taskId:a.id,shareWithId:n}}});case 5:t&&t.update({content:r.a.createElement(rt,{message:"Task shared!",onExpire:t.destroy,startFromSeconds:5,onAfterClose:function(){t.update({content:f(t)})}})}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(Je.a,{icon:r.a.createElement(nt.a,null),onClick:function(e){e.stopPropagation(),function(){var e=Xe.a.info({title:"Select User to share",centered:!0,icon:null,okText:"Close"});e.update({content:f(e)})}()},style:{cursor:"pointer",margin:"5px"}},"Share Task")},st=n(487),lt=n(495),ut=(Ve={},Object(He.a)(Ve,N.READY,"gray"),Object(He.a)(Ve,N.IN_PROGRESS,"blue"),Object(He.a)(Ve,N.DONE,"green"),Object(He.a)(Ve,N.REJECTED,"red"),Ve),dt=Ke.a.Text,mt=function(e){var t,n=e.task,c=Object(a.useState)(5),i=Object(_.a)(c,2),o=i[0],s=i[1],l=(t={variables:{taskId:n.id}},Q.c(Se,t)),u=l.data,d=l.loading,m=(l.error,ye({fetchPolicy:"cache-only"}).data),p=(null===m||void 0===m?void 0:m.me.id)||-1,f=(null===u||void 0===u?void 0:u.taskEvents)||[],v=function(e){var t=e.user,n=e.createdAt,a=t.id===p?"You":t.username,r=Object(Be.a)(new Date(+n));return"".concat(a,", ").concat(r)};return r.a.createElement(Ge.a,{tip:"Loading...",spinning:d,delay:200},r.a.createElement(Fe.a,{delay:200,interval:20,duration:250,component:st.a,componentProps:{gutter:16},forcedReplay:!0},f.filter((function(e,t){return t+1<o})).map((function(e,t){return t===f.length-1?r.a.createElement(st.a.Item,{color:ut[e.status],key:e.id},r.a.createElement(dt,null,"Created"),r.a.createElement("br",null),r.a.createElement(dt,{type:"secondary"},v(e))):r.a.createElement(st.a.Item,{color:ut[e.status],key:e.id},r.a.createElement(dt,null,"Changed to"," ",r.a.createElement(We,{taskId:e.taskId,status:e.status,clickable:!1})),r.a.createElement("br",null),r.a.createElement(dt,{type:"secondary"},v(e)))})),o<f.length+1&&r.a.createElement(st.a.Item,{dot:r.a.createElement(lt.a,null)},r.a.createElement(Y.a,{type:"dashed",onClick:function(){return s(o+5)}},"Show more"))))},pt=Ke.a.Paragraph,ft=Ke.a.Title,vt=Ke.a.Text,ht=function(e){var t,n=e.task,c=e.visible,i=e.onClose,o=Object(a.useState)(""),s=Object(_.a)(o,2),l=s[0],m=s[1],p=Object(a.useState)(""),f=Object(_.a)(p,2),v=f[0],h=f[1],E=ye({fetchPolicy:"cache-only"}).data,b=(null===E||void 0===E?void 0:E.me.id)||-1,g=Q.b(Ee,t),k=Object(_.a)(g,2),y=k[0],O=k[1],j=O.loading,T=O.error,S=function(){l||v?Xe.a.confirm({title:"Confirm",centered:!0,icon:r.a.createElement(et.a,null),content:"You haven't saved the modified fields. Would you link to discard the changes?",okText:"Discard",cancelText:"Cancel",onOk:function(){m(""),h(""),i()}}):i()},x=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({variables:{taskDetails:{taskId:n.id,title:l||n.title,description:v}}});case 3:m(""),h(""),i(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Xe.a,{centered:!0,width:700,bodyStyle:{maxHeight:"80vh",overflow:"scroll"},destroyOnClose:!0,title:r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(ft,{level:4,style:{margin:0}},r.a.createElement(pt,{editable:{onChange:function(e){e&&m(e)}},style:{margin:0}},l||n.title)),r.a.createElement(We,{taskId:n.id,status:n.status})),footer:[r.a.createElement(vt,{type:"secondary",style:{float:"left",margin:"5px"}},"Updated ",Object(Be.a)(new Date(+n.updatedAt))),r.a.createElement(Y.a,{key:"cancel",onClick:S,disabled:j},"Cancel"),r.a.createElement(Y.a,{key:"save",type:"primary",disabled:j||!v&&!l,onClick:x},"Save")],visible:c,onCancel:S,closable:!1},T&&r.a.createElement(B.a,{message:"Error",description:null===T||void 0===T?void 0:T.message,type:"error",showIcon:!0,style:{marginBottom:"15px"}}),r.a.createElement(Ge.a,{tip:"Loading...",spinning:j,delay:100},r.a.createElement(L.a,null,r.a.createElement(G.a,{span:14},r.a.createElement(Ye.a,{title:"Author",description:r.a.createElement(r.a.Fragment,null,function(){var e,t;return(null===(e=n.author)||void 0===e?void 0:e.id)===b?"You, ":null===(t=n.author)||void 0===t?void 0:t.username}(),r.a.createElement(ot,{task:n}))}),r.a.createElement(Ze.a,{direction:"vertical",size:30},r.a.createElement(Ye.a,{title:"Description",description:r.a.createElement("div",{style:{paddingLeft:"15px"}},r.a.createElement(pt,{editable:{onChange:h}},v||n.description||gt))}))),r.a.createElement(G.a,{span:9,offset:1},r.a.createElement(Ye.a,{title:"History",description:r.a.createElement(mt,{task:n})})))))},Et=Ke.a.Paragraph,bt=Ke.a.Text,gt="Description is missing",kt=function(e){var t=e.task,n=Object(a.useState)(!1),c=Object(_.a)(n,2),i=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{title:t.title,hoverable:!0,extra:r.a.createElement(We,{taskId:t.id,status:t.status}),onClick:function(){return o(!0)},actions:[r.a.createElement(bt,{type:"secondary",style:{float:"left",padding:"0 25px",textAlign:"right"}},"Updated ",Object(Be.a)(new Date(+t.updatedAt)))]},r.a.createElement(Ye.a,{title:"Description",description:r.a.createElement(Et,{ellipsis:{rows:1,expandable:!1}},t.description||gt)})),r.a.createElement(ht,{task:t,visible:i,onClose:function(){return o(!1)}}))},yt=n(490),Ot=(n(457),n(258)),jt=n.n(Ot),Tt=n(18);function St(){var e=Object(p.a)(["\n  query GetTaskEvents($taskId: Int!) {\n    taskEvents(taskId: $taskId) {\n      id\n      createdAt\n      taskId\n      status\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);return St=function(){return e},e}function xt(){var e=Object(p.a)(["\n  query GetSharedTasks {\n    sharedTasks {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n      status\n      author {\n        id\n        username\n      }\n    }\n  }\n"]);return xt=function(){return e},e}function wt(){var e=Object(p.a)(["\n  query GetProfiles {\n    profiles {\n      id\n      username\n    }\n  }\n"]);return wt=function(){return e},e}function It(){var e=Object(p.a)(["\n  query GetTasks {\n    tasks {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n      status\n      author {\n        id\n        username\n      }\n    }\n  }\n"]);return It=function(){return e},e}function Ct(){var e=Object(p.a)(["\n  query Me {\n    me{\n      id\n      username \n    }\n  }\n"]);return Ct=function(){return e},e}Object(f.a)(Ct());var At=Object(f.a)(It()),Pt=(Object(f.a)(wt()),Object(f.a)(xt()),Object(f.a)(St()),{labelCol:{span:6},wrapperCol:{span:16}}),Dt=function(e){var t,n=e.visible,a=e.onCancel,c=e.onFinish,i=K.a.useForm(),o=Object(_.a)(i,1)[0],s=Q.b(be,t),l=Object(_.a)(s,2),m=l[0],p=l[1],f=p.loading,v=p.error,h=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.validateFields();case 3:return t=e.sent,n=t.title,a=t.description,e.next=8,m({variables:{newTaskData:{title:n,description:a}},update:function(e,t){var n=t.data;if(null===n||void 0===n?void 0:n.addTask){var a=e.readQuery({query:At});if(null===a||void 0===a?void 0:a.tasks){var r=[n.addTask].concat(Object(Tt.a)(null===a||void 0===a?void 0:a.tasks));e.writeQuery({query:At,data:{tasks:r}})}}}});case 8:o.resetFields(),c(),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Xe.a,{title:"Add task",visible:n,onOk:h,onCancel:a,okButtonProps:{disabled:f},cancelButtonProps:{disabled:f}},v&&r.a.createElement(B.a,{message:"Error",description:v.message,type:"error",showIcon:!0}),r.a.createElement(Ge.a,{tip:"Loading...",spinning:f},r.a.createElement(K.a,Object.assign({},Pt,{form:o,onFinish:c}),r.a.createElement(K.a.Item,{label:"Task Title",name:"title",rules:[{required:!0,message:"Title is required!"}]},r.a.createElement(U.a,null)),r.a.createElement(K.a.Item,{label:"Task Description",name:"description"},r.a.createElement(U.a.TextArea,null)))))},Rt=function(){var e=Object(a.useState)(!1),t=Object(_.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{className:"add-task-container",onClick:function(){return c(!0)}},r.a.createElement(yt.a,{style:{fontSize:"35px",color:"#08c"}}),r.a.createElement(jt.a,{level:4},"Add Task")),r.a.createElement(Dt,{visible:n,onCancel:function(){return c(!1)},onFinish:function(){return c(!1)}}))},Nt=function(){var e,t=Q.c(Oe,e),n=t.data,a=t.loading,c=(null===n||void 0===n?void 0:n.tasks)||[];return r.a.createElement(Ge.a,{tip:"Loading...",spinning:a,delay:200},r.a.createElement(Fe.a,{delay:300,interval:30,duration:300,component:L.a,componentProps:{gutter:16}},r.a.createElement(G.a,{span:6,style:{padding:"10px"}},r.a.createElement(Rt,null)),c.map((function(e){return r.a.createElement(G.a,{span:6,style:{padding:"10px"},key:e.id},r.a.createElement(kt,{task:e}))}))))},$t=Le((function(){return r.a.createElement(Nt,null)})),_t=function(e){var t=e.children,n=Object(Pe.a)(e,["children"]),a=de().data;return(null===a||void 0===a?void 0:a.session)?r.a.createElement($.a,{to:{pathname:"/"}}):r.a.createElement($.b,n,t)},qt=n(113),Lt=Le((function(){var e,t=Q.c(Te,e),n=t.data,a=t.loading,c=(t.error,(null===n||void 0===n?void 0:n.sharedTasks)||[]);return r.a.createElement(Ge.a,{tip:"Loading...",spinning:a,delay:200},r.a.createElement(Fe.a,{delay:300,interval:30,duration:300,component:L.a,componentProps:{gutter:16}},c.map((function(e){return r.a.createElement(G.a,{span:6,style:{padding:"10px"},key:e.id},r.a.createElement(kt,{task:e}))})),0===c.length&&r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"400px"}},r.a.createElement(qt.a,{imageStyle:{height:120},description:"There are no tasks shared with you yet."}))))}));var Gt=function(){return r.a.createElement($.d,null,r.a.createElement(_t,{path:"/auth",exact:!0},r.a.createElement(Ae,null)),r.a.createElement(De,{path:"/",exact:!0},r.a.createElement($t,null)),r.a.createElement(De,{path:"/shared-tasks",exact:!0},r.a.createElement(Lt,null)))};n(472);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(o.b,{client:R},r.a.createElement(Gt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[264,1,2]]]);
//# sourceMappingURL=main.d091a292.chunk.js.map