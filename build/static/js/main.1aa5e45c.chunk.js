(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(7),a=c.n(r),i=(c(20),c(11)),j=c(5),l=c(19),o=c(21),d=c(10),b=c.n(d),h=c(12),O=c(9),x=c(15),u=c(2),m="https://dr-admin-dashboard.herokuapp.com",p=Object(s.createContext)(),f=p,v=function(e){var t=e.children,c=Object(s.useState)((function(){return localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null})),n=Object(O.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)((function(){return localStorage.getItem("authTokens")?Object(x.a)(localStorage.getItem("authTokens")):null})),l=Object(O.a)(i,2),o=l[0],d=l[1],f=Object(s.useState)(!0),v=Object(O.a)(f,2),N=v[0],g=v[1],w=Object(j.g)(),y=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(m,"/api/token/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?(a(s),d(Object(x.a)(s.access)),localStorage.setItem("authTokens",JSON.stringify(s)),w.push("/")):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){a(null),d(null),localStorage.removeItem("authTokens"),w.push("/login")},k=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/api/token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:null===r||void 0===r?void 0:r.refresh})});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?(a(c),d(Object(x.a)(c.access)),localStorage.setItem("authTokens",JSON.stringify(c))):S(),N&&g(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P={user:o,authTokens:r,loginUser:y,logoutUser:S};return Object(s.useEffect)((function(){N&&k();var e=setInterval((function(){r&&k()}),24e4);return function(){return clearInterval(e)}}),[r,N]),Object(u.jsx)(p.Provider,{value:P,children:N?null:t})},N=["children"],g=function(e){var t=e.children,c=Object(o.a)(e,N),n=Object(s.useContext)(f).user;return Object(u.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{children:n?t:Object(u.jsx)(j.a,{to:"/login"})}))},w=c(4);var y=function(e){var t=Object(s.useState)("1"),c=Object(O.a)(t,2),n=c[0],r=c[1];return Object(u.jsx)(i.a,{children:Object(u.jsx)(w.e,{vertical:!0,children:Object(u.jsxs)(w.a,{open:n,toggle:function(e){n===e?r():r(e)},children:[Object(u.jsxs)(w.d,{children:[Object(u.jsxs)(w.c,{targetId:"1",children:[Object(u.jsx)("i",{class:"bi bi-house-door-fill"})," Dashboard"]}),Object(u.jsx)(w.b,{accordionId:"1",children:Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/",children:"Dashboard"})})})]}),Object(u.jsxs)(w.d,{children:[Object(u.jsxs)(w.c,{targetId:"2",children:[Object(u.jsx)("i",{class:"bi bi-lightning-fill"})," Project"]}),Object(u.jsxs)(w.b,{accordionId:"2",children:[Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/project",children:"Project"})}),Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/project-details",children:"Project Details"})}),Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/new-project",children:"New Project"})})]})]}),Object(u.jsxs)(w.d,{children:[Object(u.jsxs)(w.c,{targetId:"3",children:[Object(u.jsx)("i",{class:"bi bi-person-fill"})," Client"]}),Object(u.jsxs)(w.b,{accordionId:"3",children:[Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/mc",children:"Manager Client"})}),Object(u.jsx)(w.f,{children:Object(u.jsx)(w.g,{href:"/clnt",children:"Client Details"})})]})]})]})})})},S=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(s.useContext)(f),a=r.authTokens,i=r.logoutUser;Object(s.useEffect)((function(){j()}),[]);var j=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dr-admin-dashboard.herokuapp.com","/api/notes/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(a.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?n(c):"Unauthorized"===t.statusText&&i();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"You are logged to the home page!"}),Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:e.body},e.id)}))})]})},k=function(){var e=Object(s.useContext)(f).loginUser;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(u.jsx)("div",{className:"col-lg-5 rounded shadow",children:Object(u.jsx)("div",{className:"card mt-4 border-0",children:Object(u.jsx)("div",{className:"card-body px-5",children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("p",{className:"text-center",children:"Dashboard LogIn"}),Object(u.jsxs)("form",{onSubmit:e,children:[Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Enter Username"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Enter Password"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{type:"submit",name:"Login"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsxs)("p",{children:["Don't have an account? ",Object(u.jsx)("a",{href:"/register",children:"create one"})]})})]})]})})})})})})})})},P=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(u.jsx)("div",{className:"col-lg-5 rounded shadow",children:Object(u.jsx)("div",{className:"card mt-4 border-0",children:Object(u.jsx)("div",{className:"card-body px-5",children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("p",{className:"text-center",children:"Register Here"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Enter Username"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{className:"form-control",type:"text",name:"email",placeholder:"Enter Username"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Enter Password"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsx)("input",{type:"submit",name:"Register"})}),Object(u.jsx)("div",{className:"row mt-2",children:Object(u.jsxs)("p",{children:["Already, have an account? ",Object(u.jsx)("a",{href:"/login",children:"Login here"})]})})]})]})})})})})})})})},I=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(u.jsx)("sapn",{children:Object(u.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(u.jsx)("span",{className:"d-inline-block",children:Object(u.jsx)("h4",{children:" Project"})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-10 text-center",children:Object(u.jsxs)("div",{className:"row total-row",children:[Object(u.jsxs)("div",{className:"col m-2 p-3",children:["Total Projects",Object(u.jsx)("span",{className:"d-block justify-content-between",children:"10"})]}),Object(u.jsxs)("div",{className:"col m-2 p-3",children:["Pending Projects",Object(u.jsx)("span",{className:"d-block justify-content-between",children:"3"})]}),Object(u.jsxs)("div",{className:"col m-2 p-3",children:["Ongoing Projects",Object(u.jsx)("span",{className:"d-block justify-content-between",children:"2"})]}),Object(u.jsxs)("div",{className:"col m-2 p-3",children:["Completed Projects",Object(u.jsx)("span",{className:"d-block justify-content-between",children:"5"})]})]})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("button",{className:"btn btn-primary",children:"+ create new project"})})]}),Object(u.jsx)("div",{class:"row chart-row",children:Object(u.jsx)("div",{children:Object(u.jsx)("canvas",{id:"myChart"})})})]})},T=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(u.jsx)("sapn",{children:Object(u.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(u.jsx)("span",{className:"d-inline-block",children:Object(u.jsx)("h4",{children:" Project Details"})})]}),Object(u.jsx)("div",{className:"row total-row"})]})},C=function(){return Object(u.jsx)("div",{children:"NewProjectPage"})},D=function(){return Object(u.jsx)("div",{children:"ClientDetailsPage"})},E=function(){return Object(u.jsx)("div",{children:"ManagerClientPage"})},U=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(u.jsx)("sapn",{children:Object(u.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(u.jsx)("span",{className:"d-inline-block",children:Object(u.jsx)("h4",{children:" Dashboard"})})]}),Object(u.jsx)("div",{className:"row total-row"})]})};var J=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row base",children:[Object(u.jsx)("div",{className:"sidebar col-3 mt-2 shadow",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{className:"main col mt-5",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)(i.a,{children:Object(u.jsx)(j.d,{children:Object(u.jsxs)(v,{children:[Object(u.jsx)(g,{component:U,path:"/",exact:!0}),Object(u.jsx)(g,{component:S,path:"/home",exact:!0}),Object(u.jsx)(g,{component:I,path:"/project",exact:!0}),Object(u.jsx)(g,{component:T,path:"/project-details",exact:!0}),Object(u.jsx)(g,{component:C,path:"/new-project",exact:!0}),Object(u.jsx)(g,{component:E,path:"/mc",exact:!0}),Object(u.jsx)(g,{component:D,path:"/clnt",exact:!0}),Object(u.jsx)(j.b,{component:k,path:"/login"}),Object(u.jsx)(j.b,{component:P,path:"/register"})]})})})})})]})})})})};c(42),c(43);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1aa5e45c.chunk.js.map