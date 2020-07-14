(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(9),c=a.n(r),l=a(12),u=a(13),d=a(39),i=a(24),s=a(10),m={todos:[],loading:!1},E=Object(u.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":return Object(s.a)(Object(s.a)({},e),{},{todos:t.payload,loading:!1});case"DELETE_TODO":return Object(s.a)(Object(s.a)({},e),{},{todos:Object(i.a)(e.todos).filter((function(e){return e._id!==t.payload})),loading:!1});case"ADD_TODO":return Object(s.a)(Object(s.a)({},e),{},{todos:[t.payload].concat(Object(i.a)(e.todos)),loading:!1});case"UPDATE_TODOS":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.map((function(e){return e._id===t.payload._id?t.payload:e})),loading:!1});case"ITEMS_LOADING":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});default:return Object(s.a)({},e)}}}),p=[d.a],O=Object(u.e)(E,{},Object(u.d)(u.a.apply(void 0,p),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),b=a(14),f=a(87),j=a(88),T=a(89),g=a(90),y=a(91),v=a(92),D=a(93),_=a(94),h=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement(f.a,{color:"dark",dark:!0,expand:"sm",className:"mb-4"},o.a.createElement(j.a,null,o.a.createElement(T.a,{href:"/"},"Todos list"),o.a.createElement(g.a,{onClick:function(){return r(!a)}}),o.a.createElement(y.a,{isOpen:a,navbar:!0},o.a.createElement(v.a,{className:"ml-auto",navbar:!0},o.a.createElement(D.a,null,o.a.createElement(_.a,{href:"http://aurasjobs.ro"},"aurasjobs")))))))},N=a(40),S=a(41),k=a(43),w=a(42),A=a(18),C=a.n(A),I=function(){return{type:"ITEMS_LOADING"}},L=a(102),U=a(103),x=a(95),G=a(106),M=a(104),P=a(105),X=a(96),V=a(97),z=a(98),J=a(99),R=a(100),B=a(101),q=Object(l.b)((function(e){return{todos:e.todos}}),{addTodo:function(e){return function(t){t(I()),C.a.post("/api/todos",e).then((function(e){return t({type:"ADD_TODO",payload:e.data})}))}}})((function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),u=Object(b.a)(l,2),d=u[0],i=u[1];return o.a.createElement("div",null,o.a.createElement(x.a,{color:"dark",className:"mb-2",onClick:function(){return c(!r)}},"Add new todo"),o.a.createElement(P.a,{isOpen:r,toggle:function(){return c(!r)}},o.a.createElement(X.a,{toggle:function(){return c(!r)}},"Add new todo"),o.a.createElement(V.a,null,o.a.createElement(z.a,{onSubmit:function(t){t.preventDefault(),e.addTodo({name:d,date:Date.now()}),c(!r)}},o.a.createElement(J.a,null,o.a.createElement(R.a,{for:"event.target.name"},"New todo:"),o.a.createElement(B.a,{type:"text",name:"name",id:"name",placeholder:"Please add you todo here",onChange:function(e){i(e.target.value)}}),o.a.createElement(x.a,{type:"submit",color:"dark",className:"mt-2 btn-block"},"Add new todo"))))))})),F=a(44),H=Object(l.b)((function(e){return{todos:e.todos}}),{updateTodo:function(e,t){return function(a){a(I()),C.a.put("/api/todos/".concat(e),{name:t}).then((function(e){a({type:"UPDATE_TODOS",payload:e.data})}))}}})((function(e){var t=e.id,a=e.currentName,r=Object(F.a)(e,["id","currentName"]),c=Object(n.useState)(!1),l=Object(b.a)(c,2),u=l[0],d=l[1],i=Object(n.useState)(""),s=Object(b.a)(i,2),m=s[0],E=s[1];return o.a.createElement("div",{className:"d-inline"},o.a.createElement(x.a,{className:"btn btn-secondary p-1 mx-1 d-inline",size:"sm",onClick:function(){return d(!u)}},"\u270e"),o.a.createElement(P.a,{isOpen:u,toggle:function(){return d(!u)}},o.a.createElement(X.a,{toggle:function(){return d(!u)}},"Add new todo"),o.a.createElement(V.a,null,o.a.createElement(z.a,{onSubmit:function(e){e.preventDefault(),r.updateTodo(t,m),d(!u)}},o.a.createElement(J.a,null,o.a.createElement(R.a,{for:"event.target.name"},"Update todo:"),o.a.createElement(B.a,{type:"text",name:"name",id:"name",defaultValue:a,placeholder:"Please change you todo here",onChange:function(e){E(e.target.value)}}),o.a.createElement(x.a,{type:"submit",color:"dark",className:"mt-2 btn-block"},"Update todo"))))))})),K=function(e){Object(k.a)(a,e);var t=Object(w.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.getTodos()}},{key:"render",value:function(){var e=this,t=this.props.todos.todos;return o.a.createElement(j.a,null,o.a.createElement(q,null),o.a.createElement(L.a,null,o.a.createElement(G.a,{className:"todo-list"},t.map((function(t){var a=t._id,n=t.name;return o.a.createElement(M.a,{key:a,timeout:500,classNames:"fade"},o.a.createElement(U.a,null,o.a.createElement(x.a,{className:"btn btn-danger",size:"sm",onClick:function(){return e.props.deleteTodo(a)}},"\u2718"),o.a.createElement(H,{id:a,currentName:n}),n))})))))}}]),a}(n.Component),Q=Object(l.b)((function(e){return{todos:e.todos}}),{getTodos:function(){return function(e){e(I()),C.a.get("/api/todos").then((function(t){e({type:"GET_TODOS",payload:t.data})}))}},deleteTodo:function(e){return function(t){t(I()),C.a.delete("/api/todos/".concat(e)).then((function(a){return t({type:"DELETE_TODO",payload:e})}))}}})(K);a(83),a(84);var W=function(){return o.a.createElement(l.a,{store:O},o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(Q,null)))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f105fcb6.chunk.js.map