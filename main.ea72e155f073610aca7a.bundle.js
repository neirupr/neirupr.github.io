webpackJsonp([1,4],{0:function(t,e,n){t.exports=n("x35b")},"30/1":function(t,e){t.exports='<div class="row justify-content-around">\n\t<div *ngFor="let skill of skills" class="skillCard flex-row card col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-1 justify-content-between">\n\t\t<img src="{{skill.image}}" alt="" class="col-5">\n\t\t<div class="aboutSkill col-7 ml-auto">\n\t\t\t<p class="skillName"><strong>{{skill.name}}</strong></p>\n\t\t\t<div style="display:flex;flex-direction:column;\t">\n\t\t\t\t<span><strong>Nivel: </strong>{{skill.level}}</span>\n\t\t\t\t<span><strong>Trabajado: </strong>{{skill.workExperience}}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'},"84gI":function(t,e){t.exports='<div class="card contactCard">\n\t<div class="contactDetails">\n\t\t<h4><strong>{{name}}</strong></h4>\n\t\n\t\t<h6 style="text-align:center;"><strong>{{title}}</strong>\n\t\t\t{{framework}}\n\t\t</h6>\n\t\t<p *ngFor="let tech of addTools" style="text-align:left;"><strong>{{tech.tool}}</strong>\n\t\t\t{{tech.version}}\n\t\t</p>\n\t</div>\n</div>'},HGfn:function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY"),a=n("YWx4");n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}},l=function(){function t(t,e){this._router=t,this.parent=e,this.name="Neiro Andres Torres Castro",this.email="neiroandres@yahoo.com.co",this.mobile="(+57) 3053671792",this.location="Medellín, Colombia",this.emailTitle="Email:",this.mobileTitle="Móvil:",this.locationTitle="Ubicación:",this.cvTitle="Solicita mi Currículo!:",this.cv=[{lang:"Español",link:"https://drive.google.com/open?id=0B1uPRn_EOqfDekNpOUhtQmdBUzg"},{lang:"English",link:"https://drive.google.com/open?id=0B1uPRn_EOqfDQ25wWkljaVpBazg"}]}return t.prototype.ngOnInit=function(){this.parent.choose("contact")},t}();l=r([n.i(o._14)({selector:"contact",template:n("hXbM")}),c(1,n.i(o.E)(a.a)),s("design:paramtypes",["function"==typeof(p=void 0!==i.b&&i.b)&&p||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],l);var p,f},IWLn:function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY"),a=n("YWx4");n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}},l=function(){function t(t,e){this._router=t,this.parent=e,this.jobs=[{name:"MAS Global Consulting",jobLogo:"../../assets/images/jobs/masglobal.png",role:"Sr. Front End Developer",projects:[{name:"JCI - Chillers"},{name:"Amadeus - Avianca"}],from:"Dec, 2019",to:"Nowadays"},{name:"Keyrus Digital",jobLogo:"../../assets/images/jobs/keyrus.png",role:"Front End Developer",projects:[{name:"Yanbal"},{name:"Alkomprar"}],from:"May, 2017",to:"Dec, 2019"},{name:"Almacenes Éxito",jobLogo:"../../assets/images/jobs/exito.png",role:"Analista Desarrollo E-Commerce",projects:[{name:"www.exito.com"},{name:"www.carulla.com"},{name:"Nuevos aplicativos"}],from:"Ago, 2017",to:"May, 2017"},{name:"Sophos Banking Solutions",jobLogo:"../../assets/images/jobs/sophos.png",role:"Implementation Consultant",projects:[{name:"CDT"},{name:"Indebtness"}],from:"Mar, 2016",to:"Ago, 2017"},{name:"Mercash Digital S.A.S.",jobLogo:"",role:"Front End Developer",projects:[{name:"Tipon"}],from:"Jul, 2014",to:"Mar, 2016"}]}return t.prototype.ngOnInit=function(){this.parent.choose("experience")},t}();l=r([n.i(o._14)({selector:"experience",template:n("hm9n")}),c(1,n.i(o.E)(a.a)),s("design:paramtypes",["function"==typeof(p=void 0!==i.b&&i.b)&&p||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],l);var p,f},Iksp:function(t,e,n){"use strict";var o=n("Qbdm"),i=n("3j3K"),a=n("NVOs"),r=n("Fzro"),s=n("TWki"),c=n("YWx4"),l=n("PPs8"),p=n("HGfn"),f=n("S19R"),u=n("kCmd"),d=n("IWLn");n.d(e,"a",function(){return v});var m=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},v=function(){function t(){}return t}();v=m([n.i(i.b)({declarations:[c.a,l.a,p.a,f.a,u.a,d.a],imports:[o.a,a.a,r.a,s.a],providers:[s.b],bootstrap:[c.a]})],v)},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},Naim:function(t,e){t.exports='<header class="portFolioHeader">\n\t<div class="headerCont">\n\t\t<div class="profileImage">\n\t    </div>\n\t    <p><strong>Neiro Andres Torres Castro</strong></p>\n\t</div>\n</header>\n\n<nav class="portFolioNav">\n\t<ul class="navUl row align-items-center justify-content-around">\n\t\t<li class="col-2 navLi">\n\t\t\t<div class="navLiContainer" [routerLink]="[\'/overview\']" [class.navLiContNoHover]="choosen === \'overview\'" [class.choosenOption]="choosen === \'overview\'" (click)="choose(\'overview\')">\n\t\t\t\t<i class="material-icons">account_box</i>\n\t\t\t\t<a class="navLink">Resumen</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="col-2 navLi">\n\t\t\t<div class="navLiContainer" [routerLink]="[\'/skills\']" [class.navLiContNoHover]="choosen === \'skills\'" [class.choosenOption]="choosen === \'skills\'" (click)="choose(\'skills\')">\n\t\t\t\t<i class="material-icons">trending_up</i>\n\t\t\t\t<a class="navLink">Habilidades</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="col-2 navLi">\n\t\t\t<div class="navLiContainer" [routerLink]="[\'/experience\']" [class.navLiContNoHover]="choosen === \'experience\'" [class.choosenOption]="choosen === \'experience\'" (click)="choose(\'experience\')">\n\t\t\t\t<i class="material-icons">work</i>\n\t\t\t\t<a class="navLink">Experiencia</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="col-2 navLi">\n\t\t\t<div class="navLiContainer" [routerLink]="[\'/contact\']" [class.navLiContNoHover]="choosen === \'contact\'" [class.choosenOption]="choosen === \'contact\'" (click)="choose(\'contact\')">\n\t\t\t\t<i class="material-icons">contact_mail</i>\n\t\t\t\t<a class="navLink">Contacto</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="col-2 navLi">\n\t\t\t<div class="navLiContainer" [routerLink]="[\'/about\']" [class.navLiContNoHover]="choosen === \'about\'" [class.choosenOption]="choosen === \'about\'" (click)="choose(\'about\')">\n\t\t\t\t<i class="material-icons">info</i>\n\t\t\t\t<a class="navLink">Acerca</a>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\t\n</nav>\n\n<div class="container-fluid outletContainer">\n\t<router-outlet></router-outlet>\n</div>'},PPs8:function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY"),a=n("YWx4");n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}},l=function(){function t(t,e){this._router=t,this.parent=e,this.name="Portafolio Neiro Torres",this.title="Framework: ",this.framework="Angular",this.addTools=[{tool:"Angular CLI: ",version:"4.0.0"},{tool:"Bootstrap: ",version:"4"},{tool:"NodeJS: ",version:"6.0.60"},{tool:"Typescript: ",version:"2.2.0"}]}return t.prototype.ngOnInit=function(){this.parent.choose("about")},t}();l=r([n.i(o._14)({selector:"about",template:n("84gI")}),c(1,n.i(o.E)(a.a)),s("design:paramtypes",["function"==typeof(p=void 0!==i.b&&i.b)&&p||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],l);var p,f},S19R:function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY"),a=n("YWx4");n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}},l=function(){function t(t,e){this._router=t,this.parent=e,this.careers=[{career:"Ingeniero de Sistemas e Informática"},{career:"Especialista en Mercados de Energía"}],this.about="Mi nombre es Neiro Andres Torres Castro, Ingeniero en Sistemas e Informática \n\t\ty Especialista en Mercados de Energía de la Universidad Nacional de Colombia, sede Medellín. \n\t\t\tAmante de la programación, especialmente el desarrollo web enfocado al Front-end.",this.university="Universidad Nacional de Colombia"}return t.prototype.ngOnInit=function(){this.parent.choose("overview")},t}();l=r([n.i(o._14)({selector:"overview",template:n("YHt7")}),c(1,n.i(o.E)(a.a)),s("design:paramtypes",["function"==typeof(p=void 0!==i.b&&i.b)&&p||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],l);var p,f},TWki:function(t,e,n){"use strict";var o=n("5oXY"),i=n("HGfn"),a=n("PPs8"),r=n("S19R"),s=n("kCmd"),c=n("IWLn");n.d(e,"b",function(){return p}),n.d(e,"a",function(){return f});var l=[{path:"",redirectTo:"/overview",pathMatch:"full"},{path:"about",component:a.a},{path:"contact",component:i.a},{path:"experience",component:c.a},{path:"overview",component:r.a},{path:"skills",component:s.a}],p=[],f=o.a.forRoot(l)},YHt7:function(t,e){t.exports='<div class="row">\n\t<div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 card ml-auto mr-auto aboutContainer">\n\t\t<span>{{about}}</span>\n\t</div>\n</div>'},YWx4:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){this.profilePicture="../assets/images/profile.jpg"}return t.prototype.choose=function(t){this.choosen=t},t}();r=i([n.i(o._14)({selector:"app-root",template:n("Naim")}),a("design:paramtypes",[])],r)},hXbM:function(t,e){t.exports='<div class="card contactCard">\n\t<div class="contactDetails">\n\t\t<h4><strong>{{name}}</strong></h4>\n\t\t\n\t\t<p><strong>{{cvTitle}}</strong>\n\t\t\t<a class="cvLink" target="_blank" href={{cur.link}} *ngFor="let cur of cv">{{cur.lang}}</a>\n\t\t</p>\n\t\t\n\t\t<p><strong>{{emailTitle}}</strong>\n\t\t\t{{email}}\n\t\t</p>\n\t\t<p><strong>{{mobileTitle}}</strong>\n\t\t\t{{mobile}}\n\t\t</p>\n\t\t<p><strong>{{locationTitle}}</strong>\n\t\t\t{{location}}\n\t\t</p>\n\t</div>\n</div>'},hm9n:function(t,e){t.exports='<div class="row justify-content-around">\n\t<div *ngFor="let job of jobs" class="jobCard card col-12 col-sm-10 col-md-7 col-lg-4 justify-content-between">\n\t\t<div class="aboutJob">\n\t\t\t<p class="jobName col-12"><strong>{{job.name}}</strong></p>\n\t\t\t<p class="col-12 d-flex justify-content-center">{{job.role}}</p>\n\t\t\t<br>\n\t\t\t<div class="col-7">\n\t\t\t\t<span><strong>Proyectos:</strong></span>\n\t\t\t\t\t<ul class="jobProyects">\n\t\t\t\t\t\t<li *ngFor="let project of job.projects">{{project.name}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t<p><strong>Desde: </strong>{{job.from}}</p>\n\t\t\t\t<p><strong>Hasta: </strong>{{job.to}}</p>\n\t\t\t</div>\n\t\t\t<div class="col-5 d-flex align-items-center justify-content-center">\n\t\t\t\t<img src="{{job.jobLogo}}" alt="" style="width:100%;">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'},kCmd:function(t,e,n){"use strict";var o=n("3j3K"),i=n("5oXY"),a=n("YWx4");n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=this&&this.__param||function(t,e){return function(n,o){e(n,o,t)}},l=function(){function t(t,e){this._router=t,this.parent=e,this.skills=[{name:"Angular",image:"../../assets/images/workExperience/angular.svg",level:"Alto",workExperience:"Sí"},{name:"BEM",image:"../../assets/images/workExperience/BEM.svg",level:"Medio",workExperience:"Sí"},{name:"JavaScript",image:"../../assets/images/workExperience/javascript.png",level:"Alto",workExperience:"Sí"},{name:"HTML5",image:"../../assets/images/workExperience/html5.png",level:"Alto",workExperience:"Sí"},{name:"CSS3",image:"../../assets/images/workExperience/css3.png",level:"Alto",workExperience:"Sí"},{name:"JQuery",image:"../../assets/images/workExperience/jquery.png",level:"Alto",workExperience:"Sí"},{name:"Material Design",image:"../../assets/images/workExperience/material-design.jpg",level:"Alto",workExperience:"Sí"},{name:"Bootstrap",image:"../../assets/images/workExperience/bootstrap.png",level:"Alto",workExperience:"Sí"},{name:"Ember JS",image:"../../assets/images/workExperience/emberjs.png",level:"Medio",workExperience:"Sí"},{name:"MongoDB",image:"../../assets/images/workExperience/mongodb.png",level:"Medio",workExperience:"Sí"},{name:"Amazon DynamoDB",image:"../../assets/images/workExperience/dynamoDb.png",level:"Básico",workExperience:"Sí"},{name:"NodeJS",image:"../../assets/images/workExperience/nodejs.png",level:"Básico",workExperience:"Sí"},{name:"Redis",image:"../../assets/images/workExperience/redis.png",level:"Basico",workExperience:"Sí"},{name:"VBA",image:"../../assets/images/workExperience/vba.png",level:"Alto",workExperience:"Sí"},{name:"Java",image:"../../assets/images/workExperience/java.png",level:"Medio",workExperience:"Sí"},{name:"PL/SQL",image:"../../assets/images/workExperience/oracle.jpg",level:"Básico",workExperience:"Sí"},{name:"C++",image:"../../assets/images/workExperience/c++.png",level:"Básico",workExperience:"No"},{name:"Finacle",image:"../../assets/images/workExperience/finacle.jpg",level:"Alto",workExperience:"Sí"},{name:"AS/400",image:"../../assets/images/workExperience/as400.jpg",level:"Básico",workExperience:"No"}]}return t.prototype.ngOnInit=function(){this.parent.choose("skills")},t}();l=r([n.i(o._14)({selector:"skills",template:n("30/1")}),c(1,n.i(o.E)(a.a)),s("design:paramtypes",["function"==typeof(p=void 0!==i.b&&i.b)&&p||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],l);var p,f},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("3j3K"),i=n("O61y"),a=n("Iksp");n("kZql").a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(a.a)}},[0]);