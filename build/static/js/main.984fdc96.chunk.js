(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{194:function(e,t,c){},333:function(e,t,c){},334:function(e,t,c){},335:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(28),r=c.n(a),l=(c(194),c(34)),i=c(20),o=c(121),j=c(161),d=c(14),b=c(22),h=c(16),u=c(97),m=c(2),p="https://dr-admin-dashboard.herokuapp.com",O=Object(s.createContext)(),x=O,f=function(e){var t=e.children,c=Object(s.useState)((function(){return localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null})),n=Object(h.a)(c,2),a=n[0],r=n[1],l=Object(s.useState)((function(){return localStorage.getItem("authTokens")?Object(u.a)(localStorage.getItem("authTokens")):null})),o=Object(h.a)(l,2),j=o[0],x=o[1],f=Object(s.useState)(!0),v=Object(h.a)(f,2),g=v[0],N=v[1],w=Object(i.f)(),y=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(p,"/api/register/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,email:t.target.email.value,password:t.target.password.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?(alert(s.message),w.push("/")):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(p,"/api/token/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?(r(s),x(Object(u.a)(s.access)),localStorage.setItem("authTokens",JSON.stringify(s)),w.push("/")):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(p,"/api/create-client/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_name:t.target.client_name.value,client_company:t.target.client_company.value,client_phone:t.target.client_phone.value,client_email:t.target.client_email.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,200===c.status?alert(s.message):alert("Something went wrong!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){r(null),x(null),localStorage.removeItem("authTokens"),w.push("/login")},S=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/api/token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:null===a||void 0===a?void 0:a.refresh})});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?(r(c),x(Object(u.a)(c.access)),localStorage.setItem("authTokens",JSON.stringify(c))):C(),g&&N(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T={user:j,authTokens:a,loginUser:_,RegisterUser:y,logoutUser:C,addClient:k};return Object(s.useEffect)((function(){g&&S();var e=setInterval((function(){a&&S()}),24e4);return function(){return clearInterval(e)}}),[a,g]),Object(m.jsx)(O.Provider,{value:T,children:g?null:t})},v=["children"],g=function(e){var t=e.children,c=Object(j.a)(e,v),n=Object(s.useContext)(x).user;return Object(m.jsx)(i.b,Object(o.a)(Object(o.a)({},c),{},{children:n?t:Object(m.jsx)(i.a,{to:"/login"})}))},N=c(9),w=function(){var e=Object(s.useContext)(x),t=e.user,c=e.logoutUser,n=Object(s.useState)(""),a=Object(h.a)(n,2),r=a[0],i=a[1];return Object(m.jsx)("div",{children:t?Object(m.jsx)(l.a,{children:Object(m.jsx)(N.i,{vertical:!0,children:Object(m.jsxs)(N.a,{open:r,toggle:function(e){r===e?i():i(e)},children:[Object(m.jsx)(N.j,{children:t&&Object(m.jsxs)("p",{children:["Hello ",t.username]})}),Object(m.jsxs)(N.d,{children:[Object(m.jsxs)(N.c,{targetId:"1",children:[Object(m.jsx)("i",{class:"bi bi-house-door-fill"})," Dashboard"]}),Object(m.jsx)(N.b,{accordionId:"1",children:Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/",children:"Dashboard"})})})]}),Object(m.jsxs)(N.d,{children:[Object(m.jsxs)(N.c,{targetId:"2",children:[Object(m.jsx)("i",{class:"bi bi-lightning-fill"})," Project"]}),Object(m.jsxs)(N.b,{accordionId:"2",children:[Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/project",children:"Project"})}),Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/project-details",children:"Project Details"})}),Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/new-project",children:"New Project"})})]})]}),Object(m.jsxs)(N.d,{children:[Object(m.jsxs)(N.c,{targetId:"3",children:[Object(m.jsx)("i",{class:"bi bi-person-fill"})," Client"]}),Object(m.jsxs)(N.b,{accordionId:"3",children:[Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/mc",children:"Manager Client"})}),Object(m.jsx)(N.j,{children:Object(m.jsx)(N.k,{href:"/clnt",children:"Client Details"})})]})]}),Object(m.jsx)(N.j,{children:Object(m.jsx)("button",{className:"btn btn-primary mt-2",onClick:c,children:"Logout"})})]})})}):Object(m.jsxs)(N.i,{className:"mt-5 mx-5 p-4 text-center",children:[Object(m.jsx)(N.j,{className:"mx-2",children:Object(m.jsx)(l.b,{className:"btn btn-primary link-light mb-2 d-inline",to:"/login",children:"Login"})}),Object(m.jsx)(N.j,{className:"",children:Object(m.jsx)(l.b,{className:"btn btn-primary link-light d-inline",to:"/register",children:"Register"})})]})})},y=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useContext)(x),r=a.authTokens,l=a.logoutUser;Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(r.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?n(c):"Unauthorized"===t.statusText&&l();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"You are logged to the home page!"}),Object(m.jsx)("ul",{children:c.map((function(e){return Object(m.jsx)("li",{children:e.body},e.id)}))})]})},_=function(){var e=Object(s.useContext)(x).loginUser;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-5 bg-white rounded shadow",children:Object(m.jsx)("div",{className:"card mt-4 border-0",children:Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("div",{className:"mb-5",children:[Object(m.jsx)("p",{className:"text-center",children:"Login here"}),Object(m.jsxs)("form",{onSubmit:e,className:"form-floating",children:[Object(m.jsxs)("div",{class:"form-floating mb-3",children:[Object(m.jsx)("input",{type:"text",name:"username",class:"form-control",id:"floatingInput",placeholder:"username"}),Object(m.jsx)("label",{for:"floatingInput",children:"Enter Username"})]}),Object(m.jsxs)("div",{class:"form-floating",children:[Object(m.jsx)("input",{type:"password",name:"password",class:"form-control",id:"floatingPassword",placeholder:"Password"}),Object(m.jsx)("label",{for:"floatingPassword",children:"Password"})]}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsx)("input",{className:"btn btn-primary mx-auto w-25",type:"submit",value:"Login",name:"Login"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsxs)("p",{children:["Don't have an account? ",Object(m.jsx)(l.b,{to:"/register",children:"create one"})]})})]})]})})})})})})})})},k=function(){var e=Object(s.useContext)(x).RegisterUser;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"container-fluid p-0 pt-2 m-0 ",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row py-5 align-items-center justify-content-center",children:Object(m.jsx)("div",{className:"col-lg-5 bg-white rounded shadow",children:Object(m.jsx)("div",{className:"card mt-4 border-0",children:Object(m.jsx)("div",{className:"card-body px-5",children:Object(m.jsxs)("div",{className:"mb-5",children:[Object(m.jsx)("p",{className:"text-center",children:"Register Here"}),Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsx)("input",{className:"form-control",type:"text",name:"username",placeholder:"Enter Username"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsx)("input",{className:"form-control",type:"text",name:"email",placeholder:"Enter Username"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Enter Password"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsx)("input",{type:"submit",name:"Register"})}),Object(m.jsx)("div",{className:"row mt-2",children:Object(m.jsxs)("p",{children:["Already, have an account? ",Object(m.jsx)(l.b,{to:"/login",children:"Login here"})]})})]})]})})})})})})})})},C=c(89),S=c(90),T=c(47),P=c(91),D=c(96),A=function(e){Object(P.a)(c,e);var t=Object(D.a)(c);function c(e){var s;return Object(C.a)(this,c),(s=t.call(this,e)).createProject=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/create-project/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("authTokens")).access},body:JSON.stringify({project_id:t.target.project_id.value,project_title:t.target.project_title.value,department:t.target.department.value,project_priority:t.target.project_priority.value,client:t.target.client.value,date_from:t.target.date_from.value,date_to:t.target.date_to.value,work_status:t.target.work_status.value})});case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,200===c.status?(alert(n.message),s.setState({modal:!1})):alert(n.message);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getClient=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/clients/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("authTokens")).access}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?(s.setState({isLoaded:!0,clients:c.clients}),console.log(s.state.clients)):alert(c.detail);case 7:case"end":return e.stop()}}),e)}))),s.state={modal:!1,clients:[],isLoaded:!1},s.getClient=s.getClient.bind(Object(T.a)(s)),s.toggle=s.toggle.bind(Object(T.a)(s)),s}return Object(S.a)(c,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N.e,{color:"primary",onClick:this.toggle,children:"+ CREATE NEW PROJECT"}),Object(m.jsx)(N.f,{isOpen:this.state.modal,toggle:this.toggle,className:"modal-dialog modal-dialog-centered modal-lg",children:Object(m.jsxs)(N.g,{children:[Object(m.jsx)("h3",{className:"text-center m-4",children:"Add Client"}),Object(m.jsxs)("form",{onSubmit:this.createProject,children:[Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_project_id",class:"form-label",children:"Project Id"}),Object(m.jsx)("input",{type:"tel",class:"form-control",name:"project_id",id:"id_project_id",pattern:"[0-9]{6}",placeholder:"Project Id"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_project_title",class:"form-label",children:"Project Title"}),Object(m.jsx)("input",{type:"text",class:"form-control",name:"project_title",id:"id_project_title",placeholder:"Project Title"})]})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_project_priority",class:"form-label",children:"Project Title"}),Object(m.jsxs)("select",{class:"form-select",name:"department","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Select Department"}),Object(m.jsx)("option",{value:"DD",children:"Development Department"}),Object(m.jsx)("option",{value:"MD",children:"Managers Department"}),Object(m.jsx)("option",{value:"APPD",children:"Application Department"}),Object(m.jsx)("option",{value:"ACCD",children:"Accounts Department"})]})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_project_priority",class:"form-label",children:"Project Title"}),Object(m.jsxs)("select",{class:"form-select",name:"project_priority","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Select Priority"}),Object(m.jsx)("option",{value:"L",children:"Low"}),Object(m.jsx)("option",{value:"M",children:"Medium"}),Object(m.jsx)("option",{value:"H",children:"High"})]})]})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_project_priority",class:"form-label",children:"Project Title"}),Object(m.jsxs)("select",{class:"form-select",onClick:this.getClient,name:"client","aria-label":"Default select example",children:[Object(m.jsx)("option",{selected:!0,children:"Select Client"}),this.state.clients.map((function(e,t){return Object(m.jsx)("option",{value:e.id,children:e.client_name},t)}))]})]}),Object(m.jsx)("div",{className:"col"})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_date_from",class:"form-label",children:"Date From"}),Object(m.jsx)("input",{type:"date",class:"form-control",name:"date_from",id:"id_date_from",placeholder:"DD-MM-YYYY"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{for:"id_date_to",class:"form-label",children:"Date To"}),Object(m.jsx)("input",{type:"date",class:"form-control",name:"date_to",id:"id_date_to",placeholder:"DD-MM-YYYY"})]})]})}),Object(m.jsxs)("div",{class:"mb-3 d-flex",children:[Object(m.jsx)("label",{for:"id_client_email",class:"form-label mx-2",children:"Work Status"}),Object(m.jsxs)("div",{class:"form-check",children:[Object(m.jsx)("input",{class:"form-check-input",type:"radio",name:"work_status",id:"exampleRadios1",value:"option1"}),Object(m.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"Completed"})]}),Object(m.jsxs)("div",{class:"form-check mx-2",children:[Object(m.jsx)("input",{class:"form-check-input",type:"radio",name:"work_status",id:"exampleRadios2",value:"option2"}),Object(m.jsx)("label",{class:"form-check-label",for:"exampleRadios2",children:"Pending"})]}),Object(m.jsxs)("div",{class:"form-check mx-2",children:[Object(m.jsx)("input",{class:"form-check-input",type:"radio",name:"work_status",id:"exampleRadios1",value:"option3"}),Object(m.jsx)("label",{class:"form-check-label",for:"exampleRadios3",children:"On Progress"})]})]}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)(N.h,{children:[Object(m.jsx)(N.e,{color:"primary",type:"submit",children:"Add"})," ",Object(m.jsx)(N.e,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})})]})]})})]})}}]),c}(n.a.Component),I=A,E=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){a()}),[]);var a=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/projects/",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("authTokens")).access}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?(n(c),console.log(c)):alert("Something went wrong!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(m.jsx)("sapn",{children:Object(m.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(m.jsx)("span",{className:"d-inline-block",children:Object(m.jsx)("h4",{children:" Project"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-10 text-center",children:Object(m.jsxs)("div",{className:"row total-row",children:[Object(m.jsxs)("div",{className:"col m-2 p-3",children:["Total Projects",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.projects_count})]}),Object(m.jsxs)("div",{className:"col m-2 p-3",children:["Pending Projects",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.pending_projects})]}),Object(m.jsxs)("div",{className:"col m-2 p-3",children:["Ongoing Projects",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.ongoing_projects})]}),Object(m.jsxs)("div",{className:"col m-2 p-3",children:["Completed Projects",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.completed_projects})]})]})}),Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)(I,{})})]}),Object(m.jsx)("div",{class:"row chart-row",children:Object(m.jsx)("div",{children:Object(m.jsx)("canvas",{id:"myChart"})})})]})},J=function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(m.jsx)("sapn",{children:Object(m.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(m.jsx)("span",{className:"d-inline-block",children:Object(m.jsx)("h4",{children:" Project Details"})})]}),Object(m.jsx)("div",{className:"row total-row"})]})},R=function(){return Object(m.jsx)("div",{children:"NewProjectPage"})},U=function(e){Object(P.a)(c,e);var t=Object(D.a)(c);function c(e){var s;return Object(C.a)(this,c),(s=t.call(this,e)).AddClient=function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var c,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Click happened"),t.preventDefault(),e.next=4,fetch("".concat("https://8000-autumn-night-66818328.eu-ws2.runcode.io","/api/create-client/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_name:t.target.client_name.value,client_company:t.target.client_company.value,client_phone:t.target.client_phone.value,client_email:t.target.client_email.value})});case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,200===c.status?alert(s.message):alert("Something went wrong!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={modal:!1},s.AddClient=s.AddClient.bind(Object(T.a)(s)),s.toggle=s.toggle.bind(Object(T.a)(s)),s}return Object(S.a)(c,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N.e,{color:"primary",onClick:this.toggle,children:"+ ADD NEW CLIENT"}),Object(m.jsx)(N.f,{isOpen:this.state.modal,toggle:this.toggle,className:"modal-dialog modal-dialog-centered",children:Object(m.jsxs)(N.g,{children:[Object(m.jsx)("h3",{className:"text-center m-4",children:"Add Client"}),Object(m.jsxs)("form",{onSubmit:this.AddClient,children:[Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"id_client_name",class:"form-label",children:"Client Name"}),Object(m.jsx)("input",{type:"text",class:"form-control",name:"client_name",id:"id_client_name",placeholder:"Client Name"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"id_client_company",class:"form-label",children:"Client Company"}),Object(m.jsx)("input",{type:"text",class:"form-control",name:"client_company",id:"id_client_company",placeholder:"Company Name"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"id_client_phone",class:"form-label",children:"Client Phone"}),Object(m.jsx)("input",{type:"tel",class:"form-control",name:"client_phone",id:"id_client_phone",placeholder:"1234567890",pattern:"[0-9]{10}"})]}),Object(m.jsxs)("div",{class:"mb-3",children:[Object(m.jsx)("label",{for:"id_client_email",class:"form-label",children:"Client Email"}),Object(m.jsx)("input",{type:"email",class:"form-control",name:"client_email",id:"id_client_email",placeholder:"name@example.com"})]}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)(N.h,{children:[Object(m.jsx)(N.e,{color:"primary",type:"submit",children:"Add"})," ",Object(m.jsx)(N.e,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})})]})]})})]})}}]),c}(n.a.Component),z=U,M=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){a()}),[]);var a=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/clients/",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("authTokens")).access}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200===t.status?n(c):alert("Something went wrong!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(m.jsx)("sapn",{children:Object(m.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(m.jsx)("span",{className:"d-inline-block",children:Object(m.jsx)("h4",{children:" Client Details"})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12",children:Object(m.jsxs)("div",{className:"row mt-3",children:[Object(m.jsx)("div",{className:"col-9",children:Object(m.jsxs)("div",{className:"row total-row bg-white rounded p-2 mx-2",children:[Object(m.jsxs)("div",{className:"col-4 p-2",children:["Total Clients",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.client_count})]}),Object(m.jsx)("div",{className:"col-2 bg-transparent"}),Object(m.jsx)("div",{className:"col-2 bg-transparent"}),Object(m.jsxs)("div",{className:"col-4 p-2",children:["Current Clients",Object(m.jsx)("span",{className:"d-block justify-content-between",children:c.client_count})]})]})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("div",{className:"row bg-white rounded p-2",children:Object(m.jsx)("div",{className:"col p-2",children:Object(m.jsx)(z,{})})})})]})})}),Object(m.jsx)("div",{class:"row chart-row",children:Object(m.jsx)("div",{children:Object(m.jsx)("canvas",{id:"myChart"})})})]})},B=function(){return Object(m.jsx)("div",{children:"ManagerClientPage"})},L=c(347),Y=c(183),F=c(179),G=c(75),H=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],W=["#0088FE","#00C49F","#FFBB28","#FF8042"],K=Math.PI/180,q=function(e){var t=e.cx,c=e.cy,s=e.midAngle,n=e.innerRadius,a=e.outerRadius,r=e.percent,l=(e.index,n+.5*(a-n)),i=t+l*Math.cos(-s*K),o=c+l*Math.sin(-s*K);return Object(m.jsx)("text",{x:i,y:o,fill:"white",textAnchor:i>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},Q=function(){var e=Object(s.useContext)(x),t=e.authTokens,c=e.logoutUser,n=Object(s.useState)([]),a=Object(h.a)(n,2),r=a[0],l=a[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var s,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/counts/",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(t.access)}});case 2:return s=e.sent,e.next=5,s.json();case 5:n=e.sent,200===s.status?(l([{name:"Completed",value:n.completed_projects_count},{name:"On Process",value:n.ongoing_projects_count},{name:"Pending",value:n.pending_projects_count}]),console.log(n)):"Unauthorized"===s.statusText?c():alert("Something went wrong!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-4 m-3 p-2 bg-white rounded",children:[Object(m.jsx)("span",{children:"Projects"}),Object(m.jsxs)(L.a,{width:200,height:200,children:[Object(m.jsx)(Y.a,{data:r,cx:"50%",cy:"50%",labelLine:!1,label:q,outerRadius:80,fill:"#8884d8",dataKey:"value",children:H.map((function(e,t){return Object(m.jsx)(F.a,{fill:W[t%W.length]},"cell-".concat(t))}))}),Object(m.jsx)(G.a,{})]})]})})},V=function(){var e=Object(s.useContext)(x),t=e.authTokens,c=e.logoutUser,n=Object(s.useState)([]),a=Object(h.a)(n,2),r=a[0],l=a[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var s,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/dashboard/",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(t.access)}});case 2:return s=e.sent,e.next=5,s.json();case 5:n=e.sent,200===s.status?l(n):"Unauthorized"===s.statusText?c():alert("Something went wrong!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"fw-bold",style:{fontSize:"1.525em"},children:[Object(m.jsx)("sapn",{children:Object(m.jsx)("i",{className:"bi bi-house-door-fill"})}),Object(m.jsx)("span",{className:"d-inline-block",children:Object(m.jsx)("h4",{children:" Dashboard"})})]}),Object(m.jsx)("div",{className:"d-flex p-3 rounded total-row",children:Object(m.jsx)(I,{})}),Object(m.jsxs)("div",{className:"row p-2",children:[Object(m.jsxs)("div",{className:"col m-2 p-3 bg-white rounded",children:["Total Clients",Object(m.jsx)("h3",{className:"d-block justify-content-between",children:r.client_count})]}),Object(m.jsx)("div",{className:"col m-2 p-3 bg-white rounded",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-9",children:["Total Projects Completed",Object(m.jsx)("div",{class:"progress my-3",children:Object(m.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:r.project_progress+"%"},"aria-valuenow":r.completed_projects_count,"aria-valuemin":"0","aria-valuemax":r.ongoing_projects_count+r.pending_projects_count})})]}),Object(m.jsx)("div",{className:"col text-center",children:Object(m.jsx)("h3",{className:"d-block justify-content-between",children:r.completed_projects_count})})]})}),Object(m.jsxs)("div",{className:"col m-2 p-3 bg-white rounded",children:["Project Category",Object(m.jsx)("span",{className:"d-block justify-content-between"})]})]}),Object(m.jsx)(Q,{}),Object(m.jsx)("div",{})]})};var X=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(f,{children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row base",children:[Object(m.jsx)("div",{className:"sidebar col-3 shadow",children:Object(m.jsx)(w,{})}),Object(m.jsx)("div",{className:"main col mt-5",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(g,{component:V,path:"/",exact:!0}),Object(m.jsx)(g,{component:y,path:"/home",exact:!0}),Object(m.jsx)(g,{component:E,path:"/project",exact:!0}),Object(m.jsx)(g,{component:J,path:"/project-details",exact:!0}),Object(m.jsx)(g,{component:R,path:"/new-project",exact:!0}),Object(m.jsx)(g,{component:B,path:"/mc",exact:!0}),Object(m.jsx)(g,{component:M,path:"/clnt",exact:!0}),Object(m.jsx)(i.b,{component:_,path:"/login",exact:!0}),Object(m.jsx)(i.b,{component:k,path:"/register"})]})})]})})})})})})};c(333),c(334);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root"))}},[[335,1,2]]]);
//# sourceMappingURL=main.984fdc96.chunk.js.map