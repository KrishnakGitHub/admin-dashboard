(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(7),a=c.n(r),i=(c(20),c(9)),j=c(5),o=c(19),l=c(21),d=c(10),b=c.n(d),h=c(12),u=c(11),O=c(15),x=c(2),m="https://dr-admin-dashboard.herokuapp.com",p=Object(s.createContext)(),f=p,v=function(e){var t=e.children,c=Object(s.useState)((function(){return localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null})),n=Object(u.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)((function(){return localStorage.getItem("authTokens")?Object(O.a)(localStorage.getItem("authTokens")):null})),o=Object(u.a)(i,2),l=o[0],d=o[1],f=Object(s.useState)(!0),v=Object(u.a)(f,2),g=v[0],N=v[1],w=Object(j.f)(),y=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(m,"/api/register/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,email:t.target.email.value,password:t.target.password.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?(alert(s.message),w.push("/")):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(m,"/api/token/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?(a(s),d(Object(O.a)(s.access)),localStorage.setItem("authTokens",JSON.stringify(s)),w.push("/dashboard")):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){a(null),d(null),localStorage.removeItem("authTokens"),w.push("/login")},P=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/api/token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:null===r||void 0===r?void 0:r.refresh})});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?(a(c),d(Object(O.a)(c.access)),localStorage.setItem("authTokens",JSON.stringify(c))):k(),g&&N(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T={user:l,authTokens:r,loginUser:S,RegisterUser:y,logoutUser:k};return Object(s.useEffect)((function(){g&&P();var e=setInterval((function(){r&&P()}),24e4);return function(){return clearInterval(e)}}),[r,g]),Object(x.jsx)(p.Provider,{value:T,children:g?null:t})},g=["children"],N=function(e){var t=e.children,c=Object(l.a)(e,g),n=Object(s.useContext)(f).user;return Object(x.jsx)(j.b,Object(o.a)(Object(o.a)({},c),{},{children:n?t:Object(x.jsx)(j.a,{to:"/login"})}))},w=c(4),y=function(){var e=Object(s.useContext)(f),t=e.user,c=e.logoutUser,n=Object(s.useState)("1"),r=Object(u.a)(n,2),a=r[0],j=r[1];return Object(x.jsx)(i.a,{children:Object(x.jsx)(w.e,{vertical:!0,children:Object(x.jsxs)(w.a,{open:a,toggle:function(e){a===e?j():j(e)},children:[Object(x.jsx)(w.f,{children:t&&Object(x.jsxs)("p",{children:["Hello ",t.username]})}),Object(x.jsxs)(w.d,{children:[Object(x.jsxs)(w.c,{targetId:"1",children:[Object(x.jsx)("i",{class:"bi bi-house-door-fill"})," Dashboard"]}),Object(x.jsx)(w.b,{accordionId:"1",children:Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/",children:"Dashboard"})})})]}),Object(x.jsxs)(w.d,{children:[Object(x.jsxs)(w.c,{targetId:"2",children:[Object(x.jsx)("i",{class:"bi bi-lightning-fill"})," Project"]}),Object(x.jsxs)(w.b,{accordionId:"2",children:[Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/project",children:"Project"})}),Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/project-details",children:"Project Details"})}),Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/new-project",children:"New Project"})})]})]}),Object(x.jsxs)(w.d,{children:[Object(x.jsxs)(w.c,{targetId:"3",children:[Object(x.jsx)("i",{class:"bi bi-person-fill"})," Client"]}),Object(x.jsxs)(w.b,{accordionId:"3",children:[Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/mc",children:"Manager Client"})}),Object(x.jsx)(w.f,{children:Object(x.jsx)(w.g,{href:"/clnt",children:"Client Details"})})]})]}),Object(x.jsx)(w.f,{children:t?Object(x.jsx)("button",{className:"btn btn-primary mt-2",onClick:c,children:"Logout"}):Object(x.jsx)(w.g,{href:"/login",children:"Login"})})]})})})},S=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(s.useContext)(f),a=r.authTokens,i=r.logoutUser;Object(s.useEffect)((function(){j()}),[]);var j=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dr-admin-dashboard.herokuapp.com","/api/notes/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(a.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?n(c):"Unauthorized"===t.statusText&&i();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"You are logged to the home page!"}),Object(x.jsx)("ul",{children:c.map((function(e){return Object(x.jsx)("li",{children:e.body},e.id)}))})]})},k=function(){var e=Object(s.useContext)(f).loginUser;return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(x.jsx)("div",{className:"col-lg-5 rounded shadow",children:Object(x.jsx)("div",{className:"card mt-4 border-0",children:Object(x.jsx)("div",{className:"card-body px-5",children:Object(x.jsxs)("div",{className:"mb-5",children:[Object(x.jsx)("p",{className:"text-center",children:"Login here"}),Object(x.jsxs)("form",{onSubmit:e,children:[Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Enter Username"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Enter Password"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{type:"submit",name:"Login"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsxs)("p",{children:["Don't have an account? ",Object(x.jsx)(i.b,{to:"/register",children:"create one"})]})})]})]})})})})})})})})},P=function(){var e=Object(s.useContext)(f).RegisterUser;return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(x.jsx)("div",{className:"col-lg-5 rounded shadow",children:Object(x.jsx)("div",{className:"card mt-4 border-0",children:Object(x.jsx)("div",{className:"card-body px-5",children:Object(x.jsxs)("div",{className:"mb-5",children:[Object(x.jsx)("p",{className:"text-center",children:"Register Here"}),Object(x.jsxs)("form",{onSubmit:e,children:[Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Enter Username"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{className:"form-control",type:"text",name:"email",placeholder:"Enter Username"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Enter Password"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsx)("input",{type:"submit",name:"Register"})}),Object(x.jsx)("div",{className:"row mt-2",children:Object(x.jsxs)("p",{children:["Already, have an account? ",Object(x.jsx)(i.b,{to:"/login",children:"Login here"})]})})]})]})})})})})})})})},T=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(x.jsx)("sapn",{children:Object(x.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(x.jsx)("span",{className:"d-inline-block",children:Object(x.jsx)("h4",{children:" Project"})})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-10 text-center",children:Object(x.jsxs)("div",{className:"row total-row",children:[Object(x.jsxs)("div",{className:"col m-2 p-3",children:["Total Projects",Object(x.jsx)("span",{className:"d-block justify-content-between",children:"10"})]}),Object(x.jsxs)("div",{className:"col m-2 p-3",children:["Pending Projects",Object(x.jsx)("span",{className:"d-block justify-content-between",children:"3"})]}),Object(x.jsxs)("div",{className:"col m-2 p-3",children:["Ongoing Projects",Object(x.jsx)("span",{className:"d-block justify-content-between",children:"2"})]}),Object(x.jsxs)("div",{className:"col m-2 p-3",children:["Completed Projects",Object(x.jsx)("span",{className:"d-block justify-content-between",children:"5"})]})]})}),Object(x.jsx)("div",{className:"col-2",children:Object(x.jsx)("button",{className:"btn btn-primary",children:"+ create new project"})})]}),Object(x.jsx)("div",{class:"row chart-row",children:Object(x.jsx)("div",{children:Object(x.jsx)("canvas",{id:"myChart"})})})]})},C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(x.jsx)("sapn",{children:Object(x.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(x.jsx)("span",{className:"d-inline-block",children:Object(x.jsx)("h4",{children:" Project Details"})})]}),Object(x.jsx)("div",{className:"row total-row"})]})},I=function(){return Object(x.jsx)("div",{children:"NewProjectPage"})},U=function(){return Object(x.jsx)("div",{children:"ClientDetailsPage"})},D=function(){return Object(x.jsx)("div",{children:"ManagerClientPage"})},E=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(x.jsx)("sapn",{children:Object(x.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(x.jsx)("span",{className:"d-inline-block",children:Object(x.jsx)("h4",{children:" Dashboard"})})]}),Object(x.jsx)("div",{className:"row total-row"})]})};var J=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"row base",children:[Object(x.jsx)(i.a,{children:Object(x.jsx)(v,{children:Object(x.jsx)("div",{className:"sidebar col-3 mt-2 shadow",children:Object(x.jsx)(y,{})})})}),Object(x.jsx)("div",{className:"main col mt-5",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(v,{children:[Object(x.jsx)(N,{component:E,path:"/",exact:!0}),Object(x.jsx)(N,{component:S,path:"/home",exact:!0}),Object(x.jsx)(N,{component:T,path:"/project",exact:!0}),Object(x.jsx)(N,{component:C,path:"/project-details",exact:!0}),Object(x.jsx)(N,{component:I,path:"/new-project",exact:!0}),Object(x.jsx)(N,{component:D,path:"/mc",exact:!0}),Object(x.jsx)(N,{component:U,path:"/clnt",exact:!0}),Object(x.jsx)(j.b,{component:k,path:"/login",exact:!0}),Object(x.jsx)(j.b,{component:P,path:"/register"})]})})})})]})})})})};c(42),c(43);a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8cb70cf2.chunk.js.map