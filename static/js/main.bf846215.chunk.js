(this["webpackJsonpbucharest-project3-interactive-platform"]=this["webpackJsonpbucharest-project3-interactive-platform"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),s=a.n(r),o=(a(42),a(82),a(6)),l=a(7),c=a(10),u=a(8),m=a(9),p=a(26),d=a(50),h=a.n(d),g=a(23),w=a(41),f=a(116),v=a(32),b=a(33),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=a.onMarkerClick.bind(Object(g.a)(a)),a.onMapClicked=a.onMapClicked.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(f.a,{fuild:!0},i.a.createElement(v.a,{noGutters:!0},i.a.createElement(b.a,null,i.a.createElement("div",{className:"map"},i.a.createElement(w.Map,{google:this.props.google,zoom:3,className:"gMap"},this.props.locationData.map((function(t,a){return i.a.createElement(w.Marker,{title:t.title,name:t.name,position:t.position,onClick:e.onMarkerClick})})),i.a.createElement(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},i.a.createElement("div",null,i.a.createElement("h1",null,this.state.selectedPlace.name))))))))}}]),t}(i.a.Component),j=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyAI7nWxzjV64pxGJ1p8SmjTeV-1LW2XlTA"})(E),C=a(13),k=a(120),S=a(119),y=a(65),O=a.n(y),N=(a(60),a(31)),A=a(68),z=a(118),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSuccessClose=function(){a.setShowSuccess(!1),a.props.history.push("/")},a.handleSuccessShow=function(){a.setShowSuccess(!0)},a.handleFailureClose=function(){a.setShowFailure(!1),a.props.history.push("/")},a.handleFailureShow=function(){a.setShowFailure(!0)},a.state={showSuccess:!1,showFailure:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setShowSuccess",value:function(e){this.setState({showSuccess:e})}},{key:"setShowFailure",value:function(e){this.setState({showFailure:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"quiz-q-container"},i.a.createElement(C.a,null,i.a.createElement("h3",{className:"q-question"},this.props.question),i.a.createElement("img",{className:"q-img",src:this.props.image,alt:"question",width:"250px",height:"250px"}),i.a.createElement("div",{className:"questions-container"},i.a.createElement(A.a,{variant:this.state.showSuccess?"success":"outline-dark",className:"q-first-ans",onClick:this.handleSuccessShow,size:"lg",block:!0},this.props.answers[0]),i.a.createElement(A.a,{variant:this.state.showFailure?"danger":"outline-dark",onClick:this.handleFailureShow,className:"q-second-ans",size:"lg",block:!0},this.props.answers[1]),i.a.createElement(z.a,{show:this.state.showSuccess,onHide:this.handleSuccessClose},i.a.createElement(z.a.Header,{closeButton:!0},i.a.createElement(z.a.Title,null,"Felicitari! Tocmai ai castigat un cupon de reducere  pe ",i.a.createElement("a",{href:"http://www.techir.ro"},"Techir.ro"))),i.a.createElement(z.a.Body,null,this.props.modalSuccessDescription,i.a.createElement("p",{className:"red-quiz-modal-message"},this.props.modalSuccessLastMessage),i.a.createElement("div",{class:"yeey"},i.a.createElement("div",{class:"before"}),i.a.createElement("div",{class:"after"}))),i.a.createElement(z.a.Footer,null,i.a.createElement("img",{src:"http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png",alt:"logo"}))),i.a.createElement(z.a,{show:this.state.showFailure,onHide:this.handleFailureClose},i.a.createElement(z.a.Header,{closeButton:!0},i.a.createElement(z.a.Title,null,"Aww, mai mult noroc data viitoare!")),i.a.createElement(z.a.Body,null,this.props.modalFailureDescription,i.a.createElement("p",{className:"red-quiz-modal-message"},this.props.modalFailureLastMessage)),i.a.createElement(z.a.Footer,null,i.a.createElement("img",{src:"http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png",alt:"logo"}))))))}}]),t}(i.a.Component),I=a(40),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={modalSuccessTitle:" Felicitari! Tocmai ai castigat un cupon de reducere!",modalSuccessDescription:"Intra pe www.techir.ro si adauga in cos produsele tale preferate, iar la checkout-ul comenzii ai un loc special unde trebuie sa introduci codul de reducere, pentru a scadea valoarea voucher-ului din suma totala a cosului dvs.",modalSuccessLastMessage:"Codul dvs. a fost trimis pe email.Va asteptam saptamana viitoare!",modalFailureTitle:" Aww, mai mult noroc data viitoare!",modalFailureDescription:"De data aceasta, nu a fost sa fie dar te asteptam saptamana viitoare sa mai incercam odata!",modalFailureLastMessage:"Iti multumim ca iei parte parte impreuna cu noi in aceasta minunta experiata, cea de a cunoaste mama natura <3",question:"Care sunt proprietatile acestui sapun?",image:"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png",answers:["Actiune hranitoare","Actiune exfolianta"],firstQuestionCorrect:!0,secondQuestionCorrect:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fluid:!0},i.a.createElement(v.a,{noGutters:!0},i.a.createElement(b.a,null,i.a.createElement("div",{className:"quiz-container"},i.a.createElement(C.a,null,i.a.createElement("h1",{className:"quiz-title"},"Concurs Techir"),i.a.createElement("h6",{className:"quiz-desc"},"Participa, raspunzand la intrebare si poti castiga reduceri la produsele tale favorite."),i.a.createElement(q,{question:this.state.question,image:this.state.image,answers:this.state.answers,discount:this.state.discount,modalSuccessDescription:this.state.modalSuccessDescription,modalSuccessLastMessage:this.state.modalSuccessLastMessage,modalFailureDescription:this.state.modalFailureDescription,modalFailureLastMessage:this.state.modalFailureLastMessage}))))))}}]),t}(i.a.Component),Q=a(52),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleDescOne=function(e){a.setState({descOne:e.target.value})},a.handleLink=function(e){a.setState({link:e.target.value})},a.state={categ:"",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(Q.a,{style:{width:"18rem"}},i.a.createElement(Q.a.Body,null,i.a.createElement(Q.a.Title,null,"Categoria: ",this.props.categ),i.a.createElement(N.a,null,i.a.createElement(N.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(N.a.Label,null,"Descriere"),i.a.createElement(N.a.Control,{as:"textarea",rows:"3",placeholder:this.props.descOne,value:this.props.descOne,onChange:function(t){return e.handleDescOne(t)}})),i.a.createElement(N.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(N.a.Label,null,"Link"),i.a.createElement(N.a.Control,{as:"textarea",rows:"3",placeholder:this.props.link,value:this.props.link,onChange:function(t){return e.handleLink(t)}}))),i.a.createElement(A.a,{variant:"primary"},"Save")))}}]),t}(n.Component),L=(a(100),[{categ:"Fata",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi.",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"},{categ:"Par",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"},{categ:"Masaj",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"},{categ:"Piele",descOne:"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi",link:"http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"}]),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(v.a,{className:"info-cards"},L.map((function(e,t){return i.a.createElement(b.a,null,i.a.createElement(x,Object.assign({},e,{key:t,className:"card"})))})))}}]),t}(n.Component),F=a(14),T=a(49),B=a(70),R=a(117),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleAdminInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(T.a)({},t,n))},a.saveQuizQ=function(){console.log(a.state.imgLink+";"+a.state.firstAns+";"+a.state.secondAns+";"+a.state.question+";")},a.state={category:"",Qno:"",question:"",firstAns:"",secondAns:"",imgLink:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(b.a,{className:"card-container"},i.a.createElement(Q.a,{style:{width:"24rem",height:"29rem"}},i.a.createElement(Q.a.Body,null,i.a.createElement(Q.a.Title,null,"Categoria aleasa: ",this.props.category,"."),i.a.createElement(B.a,{className:"ac-question",placeholder:this.props.question,"aria-label":"Question","aria-describedby":"basic-addon1",name:"question",value:this.state.question,onChange:function(t){return e.handleAdminInput(t)},as:"textarea",rows:"3"})),i.a.createElement(R.a,{className:"mb-3  ac-f-ans"},i.a.createElement(R.a.Prepend,null,i.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})),i.a.createElement(B.a,{placeholder:this.props.answers[0],"aria-label":"Username","aria-describedby":"basic-addon1",name:"firstAns",value:this.state.firstAns,onChange:function(t){return e.handleAdminInput(t)}}),"  "),i.a.createElement(R.a,{className:"mb-3  ac-s-ans"},i.a.createElement(R.a.Prepend,null,i.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})),i.a.createElement(B.a,{placeholder:this.props.answers[1],"aria-label":"Username","aria-describedby":"basic-addon1",name:"secondAns",value:this.state.secondAns,onChange:function(t){return e.handleAdminInput(t)}})),i.a.createElement(Q.a.Title,{className:"q-c-img-title"},"Link imagine:"),i.a.createElement(B.a,{className:"ac-img-src",placeholder:this.props.image,"aria-label":"Username","aria-describedby":"basic-addon1",name:"imgLink",value:this.state.imgLink,onChange:function(t){return e.handleAdminInput(t)}}),i.a.createElement(Q.a.Body,null,i.a.createElement(A.a,{variant:"outline-dark",className:"mySaveCardQuiz-bttn",type:"submit",onClick:this.saveQuizQ},"Salveaza"))))}}]),t}(i.a.Component),D=(a(101),[{category:"Fata",question:F.a.face.firstQuestion.question,answers:F.a.face.firstQuestion.answers,correct:F.a.face.firstQuestion.correct,image:F.a.face.firstQuestion.firstQuestionImg},{category:"Par",question:F.a.hair.firstQuestion.question,answers:F.a.hair.firstQuestion.answers,correct:F.a.hair.firstQuestion.correct,image:F.a.hair.firstQuestion.firstQuestionImg},{category:"Masaj",question:F.a.massage.firstQuestion.question,answers:F.a.massage.firstQuestion.answers,correct:F.a.massage.firstQuestion.correct,image:F.a.massage.firstQuestion.firstQuestionImg},{category:"Anticelulita",question:F.a.anticelulitis.firstQuestion.question,answers:F.a.anticelulitis.firstQuestion.answers,correct:F.a.anticelulitis.firstQuestion.correct,image:F.a.anticelulitis.firstQuestion.firstQuestionImg}]),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(v.a,{className:"quiz-admin-cards-container"},D.map((function(e,t){return i.a.createElement(b.a,null,i.a.createElement(V,Object.assign({},e,{key:t,className:"card"})))})))}}]),t}(i.a.Component),G=(a(102),a(71)),W=a(72),H=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("div",{className:"contact"},i.a.createElement("div",null,"SC TECHIRGHIOL FARMA COSMETICS SRL"),i.a.createElement("div",null,"Nr. ord. Reg. com./aut.: J13-1885-2012"),i.a.createElement("div",null,"Cod inregistrare fiscala: RO30601045"),i.a.createElement("div",null,"Techir \xa9 Copyright 2020"),i.a.createElement("hr",{id:"f-line"}),i.a.createElement("div",{className:"footer-links"},i.a.createElement("a",{href:"https://anpc.ro/",className:"anpc"},"ANPC"),i.a.createElement("a",{href:"#",className:"politica-de-confidentialitate"},"Politica de Confidentialitate"))),i.a.createElement("img",{src:G,className:"brand-romanesc",alt:"brand_romanesc"}),i.a.createElement("img",{src:W,className:"produse-romanesti",alt:"produse_romanesti"}))}}]),t}(i.a.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).descbtnStyleActive={backgroundColor:"#A9A9A9",color:"#696969"},a.descbtnStyleInactive={backgroundColor:"#696969",color:"white"},a.quizbtnStyleActive={backgroundColor:"#A9A9A9",color:"#696969"},a.quizbtnStyleInactive={backgroundColor:"#696969",color:"white"},a.handleDescription=function(){a.setState({descriptionBttnState:!1,quizBttnState:!0});a.props.history.push("/admin")},a.handleQuiz=function(){a.setState({quizBttnState:!1,descriptionBttnState:!0})},a.state={quizBttnState:!1,descriptionBttnState:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(te,null),i.a.createElement(v.a,{className:"admin-nav"},i.a.createElement(b.a,{className:"nav-container"},i.a.createElement(C.b,{to:"/admin/editeaza-descrieri",className:"nav-button-container"},i.a.createElement(A.a,{variant:"secondary",size:"lg",style:this.state.descriptionBttnState?this.descbtnStyleActive:this.descbtnStyleInactive,className:"admin-desc-bttn custom-btn",onClick:this.handleDescription},"Descrieri")),i.a.createElement(C.b,{to:"/admin/editeaza-chestionar"},i.a.createElement(A.a,{variant:"secondary",onClick:this.handleQuiz,style:this.state.quizBttnState?this.quizbtnStyleActive:this.quizbtnStyleInactive,size:"lg",className:"admin-quiz-bttn custom-btn"},"Chestionar")))),i.a.createElement(H,null))}}]),t}(i.a.Component),J=a(15),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={megaImage:J.a.megaImage,carturesti:J.a.carturesti,farmaciaVital:J.a.farmaciaVital,eNatural:J.a.eNatural,camaraCuMerinde:J.a.camaraCuMerinde,stamDeVorba:J.a.stamDeVorba,allBoutique:J.a.allBoutique,tastingRomania:J.a.tastingRomania,iCosmetice:J.a.iCosmetice,elaPlant:J.a.elaPlant,byaPlantMed:J.a.byaPlantMed,floraFarm:J.a.floraFarm,redPixie:J.a.redPixie,getWell:J.a.getWell,natura4All:J.a.natura4All,avalon:J.a.avalon},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{fuild:!0},i.a.createElement(v.a,{noGutters:!0},i.a.createElement(b.a,null,i.a.createElement("div",{className:"parteners-container"},i.a.createElement("h1",{className:"p-title"},"Parteneri Online"),i.a.createElement("img",{className:"p-mega",src:this.state.megaImage,alt:"Mega"}),i.a.createElement("img",{className:"p-carturesti",src:this.state.carturesti,alt:"Carturesti"}),i.a.createElement("img",{className:"p-vital",src:this.state.farmaciaVital,alt:"farmacia-Vital"}),i.a.createElement("img",{className:"p-enatural",src:this.state.eNatural,alt:"e-Natural"}),i.a.createElement("img",{className:"p-camara",src:this.state.camaraCuMerinde,alt:"Camara-Cu-Merinde"}),i.a.createElement("img",{className:"p-stam-de-vorba",src:this.state.stamDeVorba,alt:"Stam-De-Vorba"}),i.a.createElement("img",{className:"p-allboutique",src:this.state.allBoutique,alt:"allBoutique"}),i.a.createElement("img",{className:"p-tastingRO",src:this.state.tastingRomania,alt:"Tasting-Romania"}),i.a.createElement("img",{className:"p-icosmetice",src:this.state.iCosmetice,alt:"iCosmetice"}),i.a.createElement("img",{className:"p-ela",src:this.state.elaPlant,alt:"ElaPlant"}),i.a.createElement("img",{className:"p-bya",src:this.state.byaPlantMed,alt:"ByaPlantMed"}),i.a.createElement("img",{className:"p-flora",src:this.state.floraFarm,alt:"FloraFarm"}),i.a.createElement("img",{className:"p-pixie",src:this.state.redPixie,alt:"RedPixie"}),i.a.createElement("img",{className:"p-get-well",src:this.state.getWell,alt:"GetWell"}),i.a.createElement("img",{className:"p-natura",src:this.state.natura4All,alt:"Natura4All"}),i.a.createElement("img",{className:"p-avalon",src:this.state.avalon,alt:"Avalon"})))))}}]),t}(i.a.Component),$=function(e){var t=e.formErrors;return i.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){return t[e].length>0?"email"===e?i.a.createElement("p",{key:a},"Email-ul"," ",t[e]):"password"===e?i.a.createElement("p",{key:a},"Parola"," ",t[e]):"confirmPassword"===e?i.a.createElement("p",{key:a},"Parolele"," ",t[e]):void 0:""})))},X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleUserInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(T.a)({},t,n),(function(){a.validateField(t,n)})),a.state.password===a.state.confirmPassword&&""!==a.state.password&&""!==a.state.confirmPassword&&a.setState({confirmPasswordValid:!0})},a.routeChange=function(){a.props.history.push("/quiz")},a.state={name:"",email:"",password:"",confirmPassword:"",formErrors:{email:"",password:"",confirmPassword:""},emailValid:!1,passwordValid:!1,formValid:!1,confirmPasswordValid:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid,i=this.state.passwordValid,r=this.state.confirmPasswordValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":" nu este valid.";break;case"password":i=t.length>=6,a.password=i?"":" este prea scurta.";break;case"confirmPassword":r=t===this.state.password,a.confirmPassword=r?"":"nu se potrivesc."}this.setState({formErrors:a,emailValid:n,passwordValid:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid}),console.log("email: ".concat(this.state.name,"; emai: ").concat(this.state.email,"; password: ").concat(this.state.password,";"))}},{key:"render",value:function(){var e=this;return i.a.createElement(f.a,{fuild:!0},i.a.createElement(v.a,null,i.a.createElement(b.a,{className:"py-3",md:{offset:8,span:7},xs:{offset:4,span:7}},i.a.createElement("div",{id:"login"},i.a.createElement(N.a,null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control mySignUp-input",name:"name",value:this.state.name,placeholder:"Nume complet",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",className:"form-control mySignUp-input",name:"email",value:this.state.email,placeholder:"Email",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",className:"form-control mySignUp-input",name:"password",value:this.state.password,placeholder:"Parola",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",className:"form-control mySignUp-input",name:"confirmPassword",value:this.state.confirmPassword,placeholder:"Confirma parola",onChange:function(t){return e.handleUserInput(t)}})),i.a.createElement(b.a,null,i.a.createElement(A.a,{variant:"outline-secondary",className:"mySignUp-bttn",type:"submit",disabled:!this.state.formValid,onClick:this.routeChange},"Creeare cont"))),i.a.createElement("div",{className:"panel panel-default"},i.a.createElement($,{formErrors:this.state.formErrors}))))))}}]),t}(i.a.Component),Y=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(_,null))}}]),t}(i.a.Component),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).routeChange=function(){"admin@admin.com"===a.state.email&&a.props.history.push("/admin"),"user@user.com"===a.state.email&&a.props.history.push("quiz")},a.state={email:"",pass:""},a.onChangeEmail=a.onChangeEmail.bind(Object(g.a)(a)),a.onChangePass=a.onChangePass.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onChangeEmail",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"onChangePass",value:function(e){}},{key:"render",value:function(){return console.log(this.state.email),i.a.createElement(C.a,null,i.a.createElement(f.a,{fuild:!0},i.a.createElement(v.a,null,i.a.createElement(b.a,{className:"py-3",md:{offset:8,span:7},xs:{offset:4,span:7}},i.a.createElement("div",{id:"login"},i.a.createElement(N.a,null,i.a.createElement(N.a.Group,{controlId:"formBasicEmail"},i.a.createElement(N.a.Control,{onChange:this.onChangeEmail,type:"email",placeholder:"Email",size:"sm"})),i.a.createElement(N.a.Group,{controlId:"formBasicPassword"},i.a.createElement(N.a.Control,{onChange:this.onChangePass,type:"password",placeholder:"Parola",size:"sm"})),i.a.createElement(b.a,{md:{offset:4,span:1}},i.a.createElement(A.a,{className:"login-btn",variant:"outline-secondary",type:"submit",onClick:this.routeChange},i.a.createElement("div",{className:"login-text"},"Logare")))))))))}}]),t}(i.a.Component),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).loginCounter=0,a.signinCounter=0,a.state={isShownLogin:!1,isShownSignup:!1},a.showLogIn=a.showLogIn.bind(Object(g.a)(a)),a.showSignUp=a.showSignUp.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showLogIn",value:function(e){e.preventDefault(),this.loginCounter+=1,this.loginCounter%2===0?this.props.onClickLogin("login"):this.loginCounter%2!==0&&this.props.onClickLogin(!1),this.setState({isShownLogin:!this.state.isShownLogin})}},{key:"showSignUp",value:function(e){e.preventDefault(),this.signinCounter+=1,this.signinCounter%2===0?this.props.onClickSignup("signup"):this.signinCounter%2!==0&&this.props.onClickSignup(!1),this.setState({isShownSignup:!this.state.isShownSignup})}},{key:"render",value:function(){var e,t,a=this.state.isShownLogin,n=this.state.isShownSignup;return a?e=i.a.createElement(Z,null):n&&(t=i.a.createElement(X,null)),i.a.createElement("div",null,i.a.createElement(k.a,{bg:"light",expand:"lg"},i.a.createElement(k.a.Brand,null,i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:O.a,alt:"techir-logo",className:"logo-t"}))),i.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(S.a,{className:"mr-auto nav-items"},i.a.createElement(C.b,{className:"nav-link",onClick:this.showLogIn},"Conectare"),i.a.createElement(C.b,{className:"nav-link",onClick:this.showSignUp},"Creeaza cont")))),e,t)}}]),t}(i.a.Component),te=Object(p.withRouter)(ee),ae=a(75),ne=a(76),ie=["arm","leg","hair","face","hand","neck"],re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){console.log(e)},a.retrieveAndSetChosenCateg=function(){var e=I.quiz.hover.category[1];a.setState({category:e})},a.retrieveAndSetAboutFaceInfo=function(){var e=I.quiz.hover.face.one;a.setState({info:e})},a.retrieveBlogLink=function(){var e=I.quiz.hover.face.linkBlog;a.setState({blogLink:e})},a.handleHover=function(){a.setState({isHovered:!0})},a.handleLeaveHover=function(){setTimeout((function(){a.setState({isHovered:!1})}),19e3)},a.toggleGirl=function(){!0===a.props.moveGirl?a.setState({move:!0}):a.setState({move:!1})},a.state={isHidden:a.props.hidden,chosenCategory:"",activeLink:"",faceActive:!1,hairActive:!1,anticel:!1,massage:!1,category:"",info:"",blogLink:"",move:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.retrieveAndSetAboutFaceInfo(),this.retrieveBlogLink()}},{key:"componentWillReceiveProps",value:function(){this.toggleGirl()}},{key:"render",value:function(){var e=this,t=this.state.isHovered?"hover-question":"not-hovered-question",a=!0===this.state.move?"gurlContainer move-Gurl":"gurlContainer stay-Gurl";return i.a.createElement(f.a,{fuild:!0},i.a.createElement(v.a,{noGutters:!0},i.a.createElement(b.a,null,i.a.createElement("div",{className:"model"},this.state.isHidden?null:i.a.createElement("div",{className:a},i.a.createElement("img",{src:ae,alt:"model",className:"gurl"}),ie.map((function(t,a){return i.a.createElement("div",{className:"spinner "+t,key:a,onMouseEnter:e.handleHover,onMouseLeave:e.handleLeaveHover},i.a.createElement("div",{className:"multi-ripple"},i.a.createElement("div",null),i.a.createElement("div",null)))}))),i.a.createElement("div",{className:"info-g-first-bttn",variant:"outline-secondary"},"Pozitioneaza cursorul pe punctele de pe model pentru mai multe detalii"),i.a.createElement("div",{className:"info-g-second-bttn",variant:"outline-secondary"},"Atinge punctele de pe model pentru mai multe detalii"),i.a.createElement("div",{className:t},i.a.createElement("img",{src:ne,width:"50px",height:"50px",className:"check",alt:"check_img"}),i.a.createElement("p",{className:"hover-text"},this.state.info),i.a.createElement(A.a,{className:"onhover-quiz-bttn",variant:"outline-dark"},i.a.createElement(C.b,{to:"/quiz"},"Participa si castiga")),i.a.createElement(A.a,{className:"onhover-findoutMore-bttn",variant:"outline-secondary",href:this.state.blogLink},"Afla detalii"))))))}}]),t}(i.a.Component),se=(a(103),a(104),a(105),a(106),a(107),a(108),a(109),[{title:"marker1_title",name:"Kathmandu City",position:{lat:27.708259611420385,lng:85.31940732779083}},{title:"marker2_title",name:"Salta City",position:{lat:-24.795283873195597,lng:-65.42829136976184}},{title:"marker3_title",name:"Oracoke Lighthouse",position:{lat:35.1096357,lng:-75.9863747}},{title:"marker4_title",name:"Antananarivo City",position:{lat:-18.915194943870617,lng:47.53313308528492}},{title:"marker5_title",name:"Esports",position:{lat:37.5246642275535,lng:126.94545210259305}},{title:"marker6_title",name:"Neo-Tokyo",position:{lat:35.675784883832065,lng:139.7688509481294}},{title:"marker7_title",name:"Boring",position:{lat:47.44931986261183,lng:12.154022557394521}}]),oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleMoving=function(e){"login"===e?a.setState({moveToTheRight:!0,showLogin:!0,showSignup:!1}):"signup"===e?a.setState({moveToTheRight:!0,showLogin:!1,showSignup:!0}):!1===e&&a.setState({moveToTheRight:!0}),console.log("homepage: "+a.state.moveToTheRight)},a.state={moveToTheRight:!1,showLogin:!1,showSignup:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.showLogin,t=this.state.showSignup;return console.log("homepage: "+this.state.moveToTheRight),i.a.createElement("div",{className:"App"},i.a.createElement(te,{onClickLogin:this.toggleMoving,onClickSignup:this.toggleMoving,loginState:e,signupState:t}),i.a.createElement(re,{moveGirl:this.state.moveToTheRight}),i.a.createElement("div",{style:{height:"60vh"}},i.a.createElement(j,{locationData:se})),i.a.createElement(K,null),i.a.createElement(H,null))}}]),t}(i.a.Component),le=(a(110),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,null,i.a.createElement(p.Switch,null,i.a.createElement(p.Route,{exact:!0,path:"/",component:oe})),i.a.createElement(p.Switch,null,i.a.createElement(p.Route,{exact:!0,path:"/admin",component:Y})),i.a.createElement(p.Switch,null,i.a.createElement(p.Route,{exact:!0,path:"/quiz",component:P})),i.a.createElement(p.Switch,null,i.a.createElement(p.Route,{exact:!0,path:"/admin",component:Y})),i.a.createElement(p.Route,{path:"/admin/editeaza-descrieri",component:M}),i.a.createElement(p.Route,{path:"/admin/editeaza-chestionar",component:U})))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h.a,null,i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e){e.exports=JSON.parse('{"a":{"face":{"firstQuestion":{"question":"Care sunt proprietatile acestui sapun?","answers":["Actiune hranitoare","Actiune exfolianta"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?","answers":["Praful","Impurtitatile adunate si uscarea tenului"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"hair":{"firstQuestion":{"question":"Care sunt proprietatile acestui sampon?","answers":["Actiune hranitoare","Actiune reparatoare"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale parului?","answers":["Praful","Arderea parului datorita placii de intins parul or anything related"],"correct":0,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"massage":{"firstQuestion":{"question":"Care sunt proprietatile acestui ulei?","answers":["Actiune anti-inflamatoare","Actiune reparatoare"],"correct":0,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta cea mai buna tehnica de masaj a gatului cu muschii inflamati?","answers":["Repede si apasat","Usor, cu ulei, apasand doar cu varful degetelor"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}},"anticelulitis":{"firstQuestion":{"question":"Care sunt proprietatile acestui ulei?","answers":["Actiune anti-inflamatoare","Actiune reparatoare"],"correct":1,"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png"},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta cea mai buna tehnica de masaj a pulpelor?","answers":["Repede si apasat","Usor, cu ulei, cu toata mana"],"correct":1,"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg"}}}}')},15:function(e){e.exports=JSON.parse('{"a":{"megaImage":"http://www.techir.ro/wp-content/uploads/2015/08/mega-image.jpg","carturesti":"http://www.techir.ro/wp-content/uploads/2015/08/carturesti.jpg","farmaciaVital":"http://www.techir.ro/wp-content/uploads/2015/08/farmacia-vital.jpg","eNatural":"http://www.techir.ro/wp-content/uploads/2015/08/e-natural.jpg","camaraCuMerinde":"http://www.techir.ro/wp-content/uploads/2015/08/camara-cu-merinde.jpg","stamDeVorba":"http://www.techir.ro/wp-content/uploads/2015/08/stam-de-vorba.jpg","allBoutique":"http://www.techir.ro/wp-content/uploads/2015/08/all-boutique.jpg","tastingRomania":"http://www.techir.ro/wp-content/uploads/2015/08/tasting-romania.jpg","iCosmetice":"http://www.techir.ro/wp-content/uploads/2015/08/i-cosmetice.jpg","elaPlant":"http://www.techir.ro/wp-content/uploads/2015/08/ela-plant.jpg","byaPlantMed":"http://www.techir.ro/wp-content/uploads/2015/08/bya-plant.jpg","floraFarm":"http://www.techir.ro/wp-content/uploads/2015/08/flora-farm.jpg","redPixie":"http://www.techir.ro/wp-content/uploads/2015/08/red-pixie.jpg","getWell":"http://www.techir.ro/wp-content/uploads/2015/08/getwell.jpg","natura4All":"http://www.techir.ro/wp-content/uploads/2015/08/natura-4all.jpg","avalon":"http://www.techir.ro/wp-content/uploads/2015/08/avalon.jpg"}}')},40:function(e){e.exports=JSON.parse('{"quiz":{"face":{"firstQuestion":{"question":"Care sunt proprietatile acestui sapun?","answers":["Actiune hranitoare","Actiune exfolianta"],"firstQuestionImg":"http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png","correct":0},"secondQuestion":{"question":"Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?","answers":["Praful","Impurtitatile adunate si uscarea tenului"],"secondQuestionImg":"https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg","correct":1},"discounts":{"ten":{"code":"FATA1234510","sum":10},"twenty":{"code":"FATA1234520","sum":20},"thirty":{"code":"FATA1234530","sum":30}}},"hair":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"PAR1234510"}},"massage":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"MASAJ1234567"}},"anticelulitis":{"firstQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"secondQuestion":{"question":"","rightAnswer":"","wrongAnswer":""},"discounts":{"ten":"ANTICEL1234567"}},"hover":{"category":["par","fata","anticelulita","masaj"],"hair":{},"face":{"one":"Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi.","linkBlog":"http://www.techir.ro/blog-techir/importanta-si-utilizarea-apei/"}},"parteners":{"megaImage":"http://www.techir.ro/wp-content/uploads/2015/08/mega-image.jpg","carturesti":"http://www.techir.ro/wp-content/uploads/2015/08/carturesti.jpg","farmaciaVital":"http://www.techir.ro/wp-content/uploads/2015/08/farmacia-vital.jpg","eNatural":"http://www.techir.ro/wp-content/uploads/2015/08/e-natural.jpg","camaraCuMerinde":"http://www.techir.ro/wp-content/uploads/2015/08/camara-cu-merinde.jpg","stamDeVorba":"http://www.techir.ro/wp-content/uploads/2015/08/stam-de-vorba.jpg","allBoutique":"http://www.techir.ro/wp-content/uploads/2015/08/all-boutique.jpg","tastingRomania":"http://www.techir.ro/wp-content/uploads/2015/08/tasting-romania.jpg","iCosmetice":"http://www.techir.ro/wp-content/uploads/2015/08/i-cosmetice.jpg","elaPlant":"http://www.techir.ro/wp-content/uploads/2015/08/ela-plant.jpg","byaPlantMed":"http://www.techir.ro/wp-content/uploads/2015/08/bya-plant.jpg","floraFarm":"http://www.techir.ro/wp-content/uploads/2015/08/flora-farm.jpg","redPixie":"http://www.techir.ro/wp-content/uploads/2015/08/red-pixie.jpg","getWell":"http://www.techir.ro/wp-content/uploads/2015/08/getwell.jpg","natura4All":"http://www.techir.ro/wp-content/uploads/2015/08/natura-4all.jpg","avalon":"http://www.techir.ro/wp-content/uploads/2015/08/avalon.jpg"}}}')},60:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/logo_techir.21b15624.png"},71:function(e,t,a){e.exports=a.p+"static/media/brand-romanesc.930c2b0f.png"},72:function(e,t,a){e.exports=a.p+"static/media/produse-romanesti.54e8ba36.png"},75:function(e,t,a){e.exports=a.p+"static/media/Kool_Gurl.945ed563.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/hook-1425312.3c8da878.png"},77:function(e,t,a){e.exports=a(114)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.bf846215.chunk.js.map