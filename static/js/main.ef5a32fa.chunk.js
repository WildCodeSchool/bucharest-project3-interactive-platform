(this["webpackJsonpbucharest-project3-interactive-platform"]=this["webpackJsonpbucharest-project3-interactive-platform"]||[]).push([[0],{105:function(e){e.exports=JSON.parse("{}")},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),o=a.n(s),r=a(13),c=a(30),l=(a(45),a(86),a(6)),u=a(7),m=a(10),h=a(8),d=a(9),p=a(22),g=a(44),f=a(119),w=a(33),E=a(34),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onMarkerClick=function(e,t,n){console.log(t,e,n),a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=a.onMarkerClick.bind(Object(p.a)(a)),a.onMapClicked=a.onMapClicked.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/locations",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement(f.a,{fluid:!0},i.a.createElement(w.a,{noGutters:!0},i.a.createElement(E.a,null,i.a.createElement("div",{className:"map"},i.a.createElement("p",{className:"map-title"},"Pentru a afla locatia cea mai apropiata de tine si in care poti sa gasesti mai multe produse ",i.a.createElement("a",{href:"www.techir.ro"},"Techir"),", poti studia harta noastra. Iti sugeram sa contactezi locatia aleasa telefonic pentru a verifica stocul produselor dorite."),i.a.createElement(g.Map,{google:this.props.google,zoom:12,className:"gMap",initialCenter:{lat:44.434931,lng:26.102866}},this.state.data?this.state.data.map((function(t,a){return i.a.createElement(g.Marker,{title:t.location_id,key:a,adress:t.adress,telephone:t.telephone,name:t.name,position:{lat:t.latitude,lng:t.longitude},onClick:e.onMarkerClick})})):null,i.a.createElement(g.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},i.a.createElement("div",null,i.a.createElement("h1",null,this.state.selectedPlace.name),i.a.createElement("h3",null,this.state.selectedPlace.adress),i.a.createElement("h3",null,this.state.selectedPlace.telephone)))),i.a.createElement("p",{className:"map-msg"},"Asteptam oricand, pe ",i.a.createElement("span",{className:"bold"},"office@techir.ro"),", recomandarea ta cu locatii in care ai vrea sa gasesti brandul Techir.",i.a.createElement("br",null),"Nu uita! Poti comanda oricand direct din ",i.a.createElement("a",{href:"www.techir.ro"},"magazinul nostru online")," pentru a putea avea acces la toate produsele noastre miraculoase.")))))}}]),t}(i.a.Component),b=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyAI7nWxzjV64pxGJ1p8SmjTeV-1LW2XlTA"})(v),j=a(123),S=a(122),C=a(68),O=a.n(C),k=(a(64),a(32)),y=a(69),N=a(121),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSuccessClose=function(){a.setShowSuccess(!1)},a.handleSuccessShow=function(){a.setShowSuccess(!0)},a.handleFailureClose=function(){a.setShowFailure(!1)},a.handleFailureShow=function(){a.setShowFailure(!0)},a.state={showSuccess:!1,showFailure:!1,correct:a.props.correct},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"setShowSuccess",value:function(e){this.setState({showSuccess:e})}},{key:"setShowFailure",value:function(e){this.setState({showFailure:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"quiz-q-container"},i.a.createElement("h3",{className:"q-question"},this.props.question),i.a.createElement("img",{className:"q-img",src:this.props.image,alt:"question",width:"250px",height:"250px"}),i.a.createElement("div",{className:"questions-container"},i.a.createElement(y.a,{variant:this.state.showSuccess?"success":"outline-dark",className:"q-first-ans",onClick:this.handleSuccessShow,size:"lg",block:!0},this.props.answer1),i.a.createElement(y.a,{variant:this.state.showFailure?"danger":"outline-dark",onClick:this.handleFailureShow,className:"q-second-ans",size:"lg",block:!0},this.props.answer2),i.a.createElement(N.a,{className:"modal",show:this.state.showSuccess,onHide:this.handleSuccessClose},i.a.createElement(N.a.Header,{closeButton:!0},i.a.createElement(N.a.Title,null,i.a.createElement("span",{className:"modal-congrats"},"Felicitari! "),i.a.createElement("br",null))),i.a.createElement(N.a.Body,null," ",i.a.createElement("h6",{className:"title-message"},"Tocmai ",i.a.createElement("span",{className:"bold"},"AI CASTIGAT UN CUPON DE REDUCERE ")," pe ",i.a.createElement("a",{href:"http://www.techir.ro"},"Techir.ro")," "),i.a.createElement("div",{className:"modal-description-success"},this.props.modalSuccessDescription),i.a.createElement("div",{className:"modal-lastm-success"},i.a.createElement("p",{className:"bold"},this.props.modalSuccessLastMessage)),i.a.createElement("p",{className:"modal-p"},"Va asteptam cu drag saptamana viitoare!"),i.a.createElement("div",{class:"yeey"},i.a.createElement("div",{class:"before"}),i.a.createElement("div",{class:"after"}))),i.a.createElement(N.a.Footer,null,i.a.createElement("img",{src:"http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png",alt:"logo",className:"modal-logo"}))),i.a.createElement(N.a,{className:"modal",show:this.state.showFailure,onHide:this.handleFailureClose},i.a.createElement(N.a.Header,{closeButton:!0},i.a.createElement(N.a.Title,null,"Aww, mai mult noroc data viitoare!")),i.a.createElement(N.a.Body,null,this.props.modalFailureDescription,i.a.createElement("p",{className:"red-quiz-modal-message"},this.props.modalFailureLastMessage)),i.a.createElement(N.a.Footer,null,i.a.createElement("img",{className:"modal-logo",src:"http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png",alt:"logo"})))))}}]),t}(i.a.Component),q=a(71),A=a(72),L=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0,marginLeft:0,marginRight:0}},i.a.createElement(w.a,{noGutters:!0},i.a.createElement(E.a,null,i.a.createElement("div",{className:"d-flex flex-column ",id:"footer"},i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"contact"},i.a.createElement("h6",null,"SC TECHIRGHIOL FARMA COSMETICS SRL"),i.a.createElement("p",null,"Nr. ord. Reg. com./aut.: J13-1885-2012"),i.a.createElement("p",null,"Cod inregistrare fiscala: RO30601045"),i.a.createElement("div",null,i.a.createElement("hr",{id:"f-line",style:{backgroundColor:"white"}}),i.a.createElement("div",{className:"footer-color"}),i.a.createElement("div",{className:"footer-links"},i.a.createElement("a",{href:"https:anpc.ro/",className:"anpc"},"ANPC"),i.a.createElement("a",{href:"#",className:"politica-de-confidentialitate"},"Politica de Confidentialitate")),i.a.createElement("img",{src:q,className:"brand-romanesc",alt:"brand_romanesc"}),i.a.createElement("img",{src:A,className:"produse-romanesti",alt:"produse_romanesti"}))))))))}}]),t}(i.a.Component),I=a(43),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={modalData:{},quizData:[],quizzez:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/authentication/quizz",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({quizzez:t})})).catch((function(e){return console.log("ERROR quiz-modal-bk: ".concat(e))})),fetch("/authentication/quiz-modal",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({modalData:t})})).catch((function(e){return console.log("ERROR quiz-modal-bk: ".concat(e))})),fetch("/authentication/q-title-desc",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({quizData:t})})).catch((function(e){return console.log("ERROR quiz-modal-bk: ".concat(e))}))}},{key:"render",value:function(){var e=this.state.quizData?this.state.quizData:null;console.log(e);var t=e?e.title:null,a=e?e.desc:null;console.log(t);var n=this.state.quizzez?this.state.quizzez[0]:null,s=n?n.question:null,o=n?n.image_link:null,r=n?n.answer1:null,c=n?n.answer2:null,l=n?n.correct:null,u=this.state.modalData?this.state.modalData:null;return console.log(u),i.a.createElement(f.a,{fluid:!0},i.a.createElement(B,null),i.a.createElement(w.a,{noGutters:!0},i.a.createElement(E.a,null,i.a.createElement("h1",{className:"quiz-title"},t),i.a.createElement("h6",{className:"quiz-desc"},a),i.a.createElement(z,{question:s,image:o,answer1:r,answer2:c,correct:l,modalSuccessDescription:this.state.modalData.successDesc,modalSuccessLastMessage:this.state.modalData.successLastMessage,modalSuccessTitle:this.state.modalData.successTitle,modalFailureTitle:this.state.modalData.failureTitle,modalFailureDescription:this.state.modalData.failureDesc,modalFailureLastMessage:this.state.modalData.failureLastMessage}))),i.a.createElement(w.a,null,i.a.createElement("div",{className:"q-footer"},i.a.createElement(L,null))))}}]),t}(i.a.Component),D=Object(c.f)(T),Q=a(29),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).routeChange=function(){},a.state={user:{},email:"",password:""},a.onChangeEmail=a.onChangeEmail.bind(Object(p.a)(a)),a.onChangePass=a.onChangePass.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeEmail",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"onChangePass",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/authentication/sign-in",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){console.log(e),t.props.dispatch({type:"CREATE_LOGIN_SESSION",token:e.token,msg:e.msg,isUserLogged:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log(),i.a.createElement(f.a,{fluid:!0},i.a.createElement(w.a,null,i.a.createElement(E.a,{className:"py-3"},i.a.createElement("div",{id:"user-form"},i.a.createElement(k.a,{onSubmit:this.handleSubmit},i.a.createElement(k.a.Group,{controlId:"formBasicEmail"},i.a.createElement(k.a.Control,{className:"myinput",onChange:this.onChangeEmail,type:"email",placeholder:"Email",size:"sm"})),i.a.createElement(k.a.Group,{controlId:"formBasicPassword"},i.a.createElement(k.a.Control,{className:"myinput",onChange:this.onChangePass,type:"password",placeholder:"Parola",size:"sm"})),i.a.createElement(E.a,null,i.a.createElement(y.a,{variant:"outline-secondary",className:"submit",type:"submit"},i.a.createElement("div",{className:"login-text"},"Logare"))))))))}}]),t}(i.a.Component),P=Object(c.f)(Object(Q.b)((function(e){return{token:e.authentication.token,msg:e.authentication.msg,isUserLogged:e.authentication.isUserLogged}}))(R)),x=a(36),M=function(e){var t=e.formErrors;return i.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){return t[e].length>0?"email"===e?i.a.createElement("p",{key:a},"Email-ul"," ",t[e]):"password"===e?i.a.createElement("p",{key:a},"Parola"," ",t[e]):"confirmPassword"===e?i.a.createElement("p",{key:a},"Parolele"," ",t[e]):void 0:""})))},U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleUserInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(x.a)({},t,n),(function(){a.validateField(t,n)})),a.state.password===a.state.confirmPassword&&""!==a.state.password&&""!==a.state.confirmPassword&&a.setState({confirmPasswordValid:!0})},a.handleSubmit=function(e){e.preventDefault(),fetch("/authentication/sign-up",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({fullname:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){console.log(e),a.props.dispatch({type:"REDIRECT_TO_LOGIN"})})).catch((function(e){return console.log(e)}))},a.state={name:"",email:"",password:"",confirmPassword:"",formErrors:{email:"",password:"",confirmPassword:""},emailValid:!1,passwordValid:!1,formValid:!1,confirmPasswordValid:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid,i=this.state.passwordValid,s=this.state.confirmPasswordValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":" nu este valid.";break;case"password":i=t.length>=6,a.password=i?"":" este prea scurta.";break;case"confirmPassword":s=t===this.state.password,a.confirmPassword=s?"":"nu se potrivesc."}this.setState({formErrors:a,emailValid:n,passwordValid:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"render",value:function(){var e=this;return i.a.createElement(f.a,{fluid:!0},i.a.createElement(w.a,null,i.a.createElement(E.a,null,i.a.createElement("div",{id:"user-form"},i.a.createElement(k.a,{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control myinput",name:"name",value:this.state.name,placeholder:"Nume complet",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",className:"form-control myinput",name:"email",value:this.state.email,placeholder:"Email",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",className:"form-control myinput",name:"password",value:this.state.password,placeholder:"Parola",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",className:"form-control mySignUp-input",name:"confirmPassword",value:this.state.confirmPassword,placeholder:"Confirma parola",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement(E.a,null,i.a.createElement(y.a,{variant:"outline-secondary",className:"submit",type:"submit",disabled:!this.state.formValid},"Creeare cont"))),i.a.createElement("div",{className:"panel panel-default"},i.a.createElement(M,{formErrors:this.state.formErrors}))))))}}]),t}(i.a.Component),G=Object(c.f)(Object(Q.b)((function(e){return{}}))(U)),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).loginCounter=0,a.signinCounter=0,a.toggleLogin=function(){console.log("do"),a.loginCounter+=1,a.loginCounter%2===0?(a.props.onClickLogin(!1),console.log("open")):a.counter%2!==0&&(a.props.onClickLogin(!0),console.log("close"))},a.disconnectUser=function(e){e.preventDefault(),a.props.dispatch({type:"DELETE_LOGIN_SESSION"}),a.props.history.push("/")},a.state={isUserlogged:!1,isShownLogin:!1,isShownSignup:!1},a.showLogIn=a.showLogIn.bind(Object(p.a)(a)),a.showSignUp=a.showSignUp.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"showLogIn",value:function(e){e.preventDefault(),this.setState({isShownLogin:!this.state.isShownLogin,isShownSignup:!1})}},{key:"showSignUp",value:function(e){e.preventDefault(),this.setState({isShownSignup:!this.state.isShownSignup,isShownLogin:!1})}},{key:"render",value:function(){this.props.redirectLogin&&this.state.isShownSignup&&this.setState({isShownLogin:!this.state.isShownLogin,isShownSignup:!1});var e=this.state.isShownLogin,t=this.state.isShownSignup;return e?i.a.createElement(P,null):t&&i.a.createElement(G,null),i.a.createElement("div",null,i.a.createElement(j.a,{bg:"light",expand:"lg"},i.a.createElement(j.a.Brand,null,i.a.createElement(r.b,{exact:!0,to:"/"},i.a.createElement("img",{src:O.a,alt:"techir-logo",className:"logo-t"}))),i.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),this.props.isUserLogged?i.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(S.a,{className:"mr-auto nav-items"},i.a.createElement(r.b,{className:"nav-link",onClick:this.disconnectUser},"Deconectare"))):i.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(S.a,{className:"mr-auto nav-items"},i.a.createElement("div",{className:"nav-link",onClick:this.showLogIn},"Conectare"),i.a.createElement("div",{className:"nav-link",onClick:this.showSignUp},"Creeaza cont")))),this.props.isUserLogged||!this.state.isShownLogin||this.state.isShownSignup?null:i.a.createElement(P,null),this.props.isUserLogged||!this.state.isShownSignup||this.state.isShownLogin?null:i.a.createElement(G,null))}}]),t}(i.a.Component),B=Object(c.f)(Object(Q.b)((function(e){return{token:e.authentication.token,msg:e.authentication.msg,isUserLogged:e.authentication.isUserLogged,redirectLogin:e.authentication.redirectLogin}}))(F)),H=a(79),_=a(80),V=["arm","leg","hair","face","hand","neck"],W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){console.log(e)},a.retrieveAndSetChosenCateg=function(){var e=I.quiz.hover.category[1];a.setState({category:e})},a.retrieveAndSetAboutFaceInfo=function(){var e=I.quiz.hover.face.one;a.setState({info:e})},a.retrieveBlogLink=function(){var e=I.quiz.hover.face.linkBlog;a.setState({blogLink:e})},a.handleHover=function(){a.setState({isHovered:!0})},a.handleLeaveHover=function(){setTimeout((function(){a.setState({isHovered:!1})}),19e3)},a.toggleGirl=function(){!0===a.props.moveGirl?a.setState({move:!0}):a.setState({move:!1}),!0===a.props.loginState?a.setState({login:!0}):a.setState({login:!1}),!0===a.props.signupState?a.setState({login:!0}):a.setState({singup:!1})},a.prepareQuiz=function(){a.props.history.push("/quiz")},a.changeClass=function(){a.setState({isHovered:!1})},a.state={isHidden:a.props.hidden,chosenCategory:"",activeLink:"",faceActive:!1,hairActive:!1,anticel:!1,massage:!1,category:"",info:"",blogLink:"",move:!1,login:!1,signup:!1,dataDesc:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/description/",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({dataDesc:t})})).catch((function(e){return console.log("ERROR quizData-bk: ".concat(e))}))}},{key:"componentWillReceiveProps",value:function(){this.toggleGirl()}},{key:"render",value:function(){var e=this,t=this.state.isHovered?"hover-question":"not-hovered-question",a=!0===this.state.move?"move-Gurl":"gurlContainer",n=this.state.dataDesc?this.state.dataDesc[0]:null;console.log(n);var s=n?n.text:null,o=n?n.link:null;return console.log(s),console.log(o),i.a.createElement(f.a,null,i.a.createElement(w.a,{noGutters:!0},i.a.createElement("div",{className:"model"},this.state.isHidden?null:i.a.createElement("div",{className:a},i.a.createElement("img",{src:H,alt:"model",className:"gurl"}),V.map((function(t,a){return i.a.createElement("div",{className:"spinner "+t,key:a,onMouseEnter:e.handleHover,onMouseLeave:e.handleLeaveHover},i.a.createElement("div",{className:"multi-ripple"},i.a.createElement("div",null),i.a.createElement("div",null)))}))),i.a.createElement("div",{className:"info-g-first-bttn",variant:"outline-secondary"},"Pozitioneaza cursorul pe punctele de pe model pentru mai multe detalii"),i.a.createElement("div",{className:"info-g-second-bttn",variant:"outline-secondary"},"Atinge punctele de pe model pentru mai multe detalii"),i.a.createElement("div",{className:t},i.a.createElement("button",{onClick:this.changeClass},i.a.createElement("a",{href:"#",class:"close-thik"})),i.a.createElement("img",{src:_,width:"50px",height:"50px",className:"check",alt:"check_img"}),i.a.createElement("p",{className:"hover-text"},s),i.a.createElement(y.a,{className:"onhover-quiz-bttn",variant:"outline-warning",onClick:this.prepareQuiz},"Participa si castiga"),i.a.createElement(y.a,{className:"onhover-findoutMore-bttn",variant:"outline-warning",href:o},"Afla detalii")))))}}]),t}(i.a.Component),J=Object(c.f)(W),K=(a(105),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={parteners:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/parteners",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({parteners:t})})).catch((function(e){return console.log("ERROR parteners-bk: ".concat(e))}))}},{key:"render",value:function(){var e=this.state.parteners;return console.log(e),i.a.createElement(f.a,{fluid:!0},i.a.createElement(w.a,{noGutters:!0},i.a.createElement(E.a,null,i.a.createElement("div",{className:"parteners-container"},i.a.createElement("h6",{className:"parteners-title"},"Parteneri Online"),this.state.parteners.map((function(e){return i.a.createElement("div",{className:"partener"},i.a.createElement("a",{href:e.link},i.a.createElement("img",{className:"p-img",src:e.logo,alt:e.name})))}))))))}}]),t}(i.a.Component)),$=(a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(54)),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleDescOne=function(e){a.setState({descOne:e.target.value})},a.handleLink=function(e){a.setState({link:e.target.value})},a.state={categ:"",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement($.a,{style:{width:"18rem"}},i.a.createElement($.a.Body,null,i.a.createElement($.a.Title,null,"Categoria: ",this.state.categ),i.a.createElement(k.a,null,i.a.createElement(k.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(k.a.Label,null,"Descriere"),i.a.createElement(k.a.Control,{as:"textarea",rows:"3",value:this.props.text,onChange:function(t){return e.handleDescOne(t)}})),i.a.createElement(k.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(k.a.Label,null,"Link"),i.a.createElement(k.a.Control,{as:"textarea",rows:"3",value:this.props.link,onChange:function(t){return e.handleLink(t)}}))),i.a.createElement(y.a,{variant:"outline-dark",style:{width:"190px"}},"Save")))}}]),t}(n.Component),Y=(a(113),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={quizData:[],descData:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/authentication/description/",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({descData:t})})).catch((function(e){return console.log("ERROR adminDesc-bk: ".concat(e))}))}},{key:"render",value:function(){var e=this.state.descData?this.state.descData:null;return console.log(e),i.a.createElement(w.a,{className:"info-cards"},this.state.descData.map((function(e,t){return i.a.createElement(E.a,null,i.a.createElement(X,Object.assign({},e,{key:t,className:"card"})))})))}}]),t}(n.Component)),Z=Object(c.f)(Y),ee=a(14),te=a(76),ae=a(120),ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleAdminInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(x.a)({},t,n))},a.saveQuizQ=function(){console.log(a.state.imgLink+";"+a.state.firstAns+";"+a.state.secondAns+";"+a.state.question+";"),fetch("/authentication/description/",{method:"PUT",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){e.body={text:a.state.descOne,link:a.state.link}})).catch((function(e){return console.log("ERROR adminDesc-bk: ".concat(e))}))},a.state={category:"",Qno:"",question:"",firstAns:"",secondAns:"",imgLink:"",correct:a.props.correct},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(E.a,{className:"card-container"},i.a.createElement($.a,{style:{width:"24rem",height:"29rem"}},i.a.createElement($.a.Body,null,i.a.createElement($.a.Title,null,"Categoria aleasa: ",this.props.category,"."),i.a.createElement(te.a,{className:"ac-question",placeholder:this.props.question,"aria-label":"Question","aria-describedby":"basic-addon1",name:"question",value:this.state.question,onChange:function(t){return e.handleAdminInput(t)},as:"textarea",rows:"3"})),i.a.createElement(ae.a,{className:"mb-3  ac-f-ans"},i.a.createElement(ae.a.Prepend,null,i.a.createElement(ae.a.Checkbox,{"aria-label":"Checkbox for following text input"})),i.a.createElement(te.a,{placeholder:this.props.answer1,"aria-label":"Username","aria-describedby":"basic-addon1",name:"firstAns",value:this.state.firstAns,onChange:function(t){return e.handleAdminInput(t)}}),"  "),i.a.createElement(ae.a,{className:"mb-3  ac-s-ans"},i.a.createElement(ae.a.Prepend,null,i.a.createElement(ae.a.Checkbox,{"aria-label":"Checkbox for following text input"})),i.a.createElement(te.a,{placeholder:this.props.answer2,"aria-label":"Username","aria-describedby":"basic-addon1",name:"secondAns",value:this.state.secondAns,onChange:function(t){return e.handleAdminInput(t)}})),i.a.createElement($.a.Title,{className:"q-c-img-title"},"Link imagine:"),i.a.createElement(te.a,{className:"ac-img-src",placeholder:this.props.image,"aria-label":"Username","aria-describedby":"basic-addon1",name:"imgLink",value:this.state.imgLink,onChange:function(t){return e.handleAdminInput(t)}}),i.a.createElement($.a.Body,null,i.a.createElement(y.a,{variant:"outline-dark",className:"mySaveCardQuiz-bttn",style:{width:"190px"},type:"submit",onClick:this.saveQuizQ},"Salveaza"))))}}]),t}(i.a.Component),ie=(a(114),[{category:"Fata",question:ee.a.face.firstQuestion.question,answers:ee.a.face.firstQuestion.answers,correct:ee.a.face.firstQuestion.correct,image:ee.a.face.firstQuestion.firstQuestionImg},{category:"Par",question:ee.a.hair.firstQuestion.question,answers:ee.a.hair.firstQuestion.answers,correct:ee.a.hair.firstQuestion.correct,image:ee.a.hair.firstQuestion.firstQuestionImg},{category:"Masaj",question:ee.a.massage.firstQuestion.question,answers:ee.a.massage.firstQuestion.answers,correct:ee.a.massage.firstQuestion.correct,image:ee.a.massage.firstQuestion.firstQuestionImg},{category:"Anticelulita",question:ee.a.anticelulitis.firstQuestion.question,answers:ee.a.anticelulitis.firstQuestion.answers,correct:ee.a.anticelulitis.firstQuestion.correct,image:ee.a.anticelulitis.firstQuestion.firstQuestionImg}]),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={quizzez:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/authentication/quizz/",{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setState({quizzez:t})})).catch((function(e){return console.log("ERROR adminDesc-bk: ".concat(e))}))}},{key:"render",value:function(){var e=this.state.quizzez?this.state.quizzez:null;return console.log(e),i.a.createElement(w.a,{className:"quiz-admin-cards-container"},ie.map((function(e,t){return i.a.createElement(E.a,null,i.a.createElement(ne,Object.assign({},e,{key:t,className:"card"})))})))}}]),t}(i.a.Component),oe=Object(c.f)(se),re=(a(115),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).descbtnStyleActive={backgroundColor:"#A9A9A9",color:"#696969"},a.descbtnStyleInactive={backgroundColor:"#696969",color:"white"},a.quizbtnStyleActive={backgroundColor:"#A9A9A9",color:"#696969"},a.quizbtnStyleInactive={backgroundColor:"#696969",color:"white"},a.handleDescription=function(e){e.preventDefault(),a.setState({descriptionBttnState:!1,quizBttnState:!0}),a.props.choose("info")},a.handleQuiz=function(e){e.preventDefault(),a.setState({quizBttnState:!1,descriptionBttnState:!0}),a.props.choose("quiz")},a.state={quizBttnState:!1,descriptionBttnState:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(B,null),i.a.createElement(w.a,{className:"admin-nav"},i.a.createElement(E.a,{className:"nav-container"},i.a.createElement(y.a,{variant:"secondary",size:"lg",style:this.state.descriptionBttnState?this.descbtnStyleActive:this.descbtnStyleInactive,className:"admin-desc-bttn custom-btn",onClick:this.handleDescription},"Descrieri"),i.a.createElement(y.a,{variant:"secondary",onClick:this.handleQuiz,style:this.state.quizBttnState?this.quizbtnStyleActive:this.quizbtnStyleInactive,size:"lg",className:"admin-quiz-bttn custom-btn"},"Chestionar"))),i.a.createElement(L,null))}}]),t}(i.a.Component)),ce=Object(c.f)(re),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).showCards=function(e){"info"===e?a.setState({infoCards:!0,quizCards:!1}):"quiz"===e?a.setState({infoCards:!1,quizCards:!0}):a.setState({infoCards:!1,quizCards:!1})},a.state={infoCards:!1,quizCards:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,a=this.state.infoCards,n=this.state.quizCards;return a?e=i.a.createElement(Z,null):n&&(t=i.a.createElement(oe,null)),i.a.createElement("div",null,i.a.createElement(ce,{choose:this.showCards}),e,t)}}]),t}(i.a.Component),ue=Object(c.f)(le),me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleMoving=function(e){"login"===e?a.setState({moveToTheRight:!0,showLogin:!0,showSignup:!1}):"signup"===e?a.setState({moveToTheRight:!0,showLogin:!1,showSignup:!0}):!1===e&&a.setState({moveToTheRight:!1})},a.state={moveToTheRight:!1,showLogin:!1,showSignup:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.showLogin,t=this.state.showSignup;return i.a.createElement("div",{className:"App"},i.a.createElement(B,{onClickLogin:this.toggleMoving,onClickSignup:this.toggleMoving,loginState:e,signupState:t}),i.a.createElement(J,{moveGirl:this.state.moveToTheRight,loginState:e,signupState:t}),i.a.createElement("div",{style:{height:"60vh"}},i.a.createElement(b,null)),i.a.createElement(K,null),i.a.createElement(L,null))}}]),t}(i.a.Component),he=(a(116),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"})}}]),t}(i.a.Component)),de=Object(c.f)(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=a(16),ge=a(35),fe=a(53),we=Object(ge.b)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_LOGIN_SESSION":return Object(fe.a)({},e,{token:t.token,user:t.user,msg:t.msg,isUserLogged:t.isUserLogged});case"DELETE_LOGIN_SESSION":return Object(fe.a)({},e,{token:null,user:"",msg:"Not Logged.",isUserLogged:!1});case"REDIRECT_TO_LOGIN":return Object(fe.a)({},e,{redirectLogin:!0});default:return e}}}),Ee=Object(ge.c)(we),ve=Object(pe.a)();o.a.render(i.a.createElement(Q.a,{store:Ee},i.a.createElement(r.a,{history:ve},i.a.createElement(de,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:me}),i.a.createElement(c.a,{exact:!0,path:"/quiz",component:D}),i.a.createElement(c.a,{exact:!0,path:"/admin",component:ue})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e){e.exports=JSON.parse('{"a":{"face":{"firstQuestion":{"question":"Care sunt proprietatile acestui sapun?","answers":["Actiune hranitoare","Actiune exfolianta"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?","answers":["Praful","Impurtitatile adunate si uscarea tenului"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"hair":{"firstQuestion":{"question":"Care sunt proprietatile acestui sampon?","answers":["Actiune hranitoare","Actiune reparatoare"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale parului?","answers":["Praful","Arderea parului datorita placii de intins parul or anything related"],"correct":0,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"massage":{"firstQuestion":{"question":"Care sunt proprietatile acestui ulei?","answers":["Actiune anti-inflamatoare","Actiune reparatoare"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta cea mai buna tehnica de masaj a gatului cu muschii inflamati?","answers":["Repede si apasat","Usor, cu ulei, apasand doar cu varful degetelor"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"anticelulitis":{"firstQuestion":{"question":"Care sunt proprietatile acestui ulei?","answers":["Actiune anti-inflamatoare","Actiune reparatoare"],"correct":1,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta cea mai buna tehnica de masaj a pulpelor?","answers":["Repede si apasat","Usor, cu ulei, cu toata mana"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}}}}')},43:function(e){e.exports=JSON.parse('{"quiz":{"face":{"firstQuestion":{"question":"Care sunt proprietatile acestui sapun?","answers":["Actiune hranitoare","Actiune exfolianta"],"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png","correct":0},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?","answers":["Praful","Impurtitatile adunate si uscarea tenului"],"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg","correct":1},"discounts":{"ten":{"code":"FATA1234510","sum":10},"twenty":{"code":"FATA1234520","sum":20},"thirty":{"code":"FATA1234530","sum":30}}},"hair":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"PAR1234510"}},"massage":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"MASAJ1234567"}},"anticelulitis":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"ANTICEL1234567"}},"hover":{"category":["par","fata","anticelulita","masaj"],"hair":{},"face":{"one":"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi.","linkBlog":"http://www.techir.ro/blog-techir/importanta-si-utilizarea-apei/"}},"parteners":{"megaImage":"http://www.techir.ro/wp-content/uploads/2015/08/mega-image.jpg","carturesti":"http://www.techir.ro/wp-content/uploads/2015/08/carturesti.jpg","farmaciaVital":"http://www.techir.ro/wp-content/uploads/2015/08/farmacia-vital.jpg","eNatural":"http://www.techir.ro/wp-content/uploads/2015/08/e-natural.jpg","camaraCuMerinde":"http://www.techir.ro/wp-content/uploads/2015/08/camara-cu-merinde.jpg","stamDeVorba":"http://www.techir.ro/wp-content/uploads/2015/08/stam-de-vorba.jpg","allBoutique":"http://www.techir.ro/wp-content/uploads/2015/08/all-boutique.jpg","tastingRomania":"http://www.techir.ro/wp-content/uploads/2015/08/tasting-romania.jpg","iCosmetice":"http://www.techir.ro/wp-content/uploads/2015/08/i-cosmetice.jpg","elaPlant":"http://www.techir.ro/wp-content/uploads/2015/08/ela-plant.jpg","byaPlantMed":"http://www.techir.ro/wp-content/uploads/2015/08/bya-plant.jpg","floraFarm":"http://www.techir.ro/wp-content/uploads/2015/08/flora-farm.jpg","redPixie":"http://www.techir.ro/wp-content/uploads/2015/08/red-pixie.jpg","getWell":"http://www.techir.ro/wp-content/uploads/2015/08/getwell.jpg","natura4All":"http://www.techir.ro/wp-content/uploads/2015/08/natura-4all.jpg","avalon":"http://www.techir.ro/wp-content/uploads/2015/08/avalon.jpg"}}}')},64:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/logo_techir.21b15624.png"},71:function(e,t,a){e.exports=a.p+"static/media/brand-romanesc.930c2b0f.png"},72:function(e,t,a){e.exports=a.p+"static/media/produse-romanesti.54e8ba36.png"},79:function(e,t,a){e.exports=a.p+"static/media/Kool_Gurl.945ed563.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/hook-1425312.3c8da878.png"},81:function(e,t,a){e.exports=a(117)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.ef5a32fa.chunk.js.map