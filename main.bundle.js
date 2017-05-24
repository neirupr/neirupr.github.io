webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div class=\"card contactCard\">\r\n\t<div class=\"contactDetails\">\r\n\t\t<h4><strong>{{name}}</strong></h4>\r\n\t\r\n\t\t<h6 style=\"text-align:center;\"><strong>{{title}}</strong>\r\n\t\t\t{{framework}}\r\n\t\t</h6>\r\n\t\t<p *ngFor=\"let tech of addTools\" style=\"text-align:left;\"><strong>{{tech.tool}}</strong>\r\n\t\t\t{{tech.version}}\r\n\t\t</p>\r\n\t\t<p><strong>{{locationTitle}}</strong>\r\n\t\t\t{{location}}\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"card contactCard\">\r\n\t<div class=\"contactDetails\">\r\n\t\t<h4><strong>{{name}}</strong></h4>\r\n\t\t\r\n\t\t<p><strong>{{cvTitle}}</strong>\r\n\t\t\t<a class=\"cvLink\" target=\"_blank\" href={{cur.link}} *ngFor=\"let cur of cv\">{{cur.lang}}</a>\r\n\t\t</p>\r\n\t\t\r\n\t\t<p><strong>{{emailTitle}}</strong>\r\n\t\t\t{{email}}\r\n\t\t</p>\r\n\t\t<p><strong>{{mobileTitle}}</strong>\r\n\t\t\t{{mobile}}\r\n\t\t</p>\r\n\t\t<p><strong>{{locationTitle}}</strong>\r\n\t\t\t{{location}}\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n<!-- \r\n<div class=\"card\">\r\n\t<h4><strong>{{cvTitle}}</strong></h4>\r\n\t<div>\r\n\t\t<a target=\"_blank\" href={{cur.link}} *ngFor=\"let cur of cv\">{{cur.lang}}</a>\r\n\t</div>\r\n</div> -->"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"overview-container\">\r\n\t<div class=\"aboutContainer card\">\r\n\t\t<span>{{about}}</span>\r\n\t</div>\r\n\t<img class=\"overview-image\" src=\"../../assets/images/me.jpg\" alt=\"\">\r\n</div>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<header class=\"portFolioHeader\">\r\n\t<div class=\"headerCont\">\r\n\t\t<div class=\"profileImage\">\r\n\t    </div>\r\n\t    <p><strong>Neiro Andres Torres Castro</strong></p>\r\n\t</div>\r\n</header>\r\n\r\n<nav class=\"portFolioNav\">\r\n\t<ul class=\"navUl\">\r\n\t\t<li class=\"navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/overview']\" [class.navLiContNoHover]=\"choosen === 'overview'\" [class.choosenOption]=\"choosen === 'overview'\" (click)=\"choose('overview')\">\r\n\t\t\t\t<i class=\"material-icons\">account_box</i>\r\n\t\t\t\t<a class=\"navLink\">Resumen</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/skills']\" [class.navLiContNoHover]=\"choosen === 'skills'\" [class.choosenOption]=\"choosen === 'skills'\" (click)=\"choose('skills')\">\r\n\t\t\t\t<i class=\"material-icons\">trending_up</i>\r\n\t\t\t\t<a class=\"navLink\">Habilidades</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/experience']\" [class.navLiContNoHover]=\"choosen === 'experience'\" [class.choosenOption]=\"choosen === 'experience'\" (click)=\"choose('experience')\">\r\n\t\t\t\t<i class=\"material-icons\">work</i>\r\n\t\t\t\t<a class=\"navLink\">Experiencia laboral</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/contact']\" [class.navLiContNoHover]=\"choosen === 'contact'\" [class.choosenOption]=\"choosen === 'contact'\" (click)=\"choose('contact')\">\r\n\t\t\t\t<i class=\"material-icons\">contact_mail</i>\r\n\t\t\t\t<a class=\"navLink\">Contacto</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/about']\" [class.navLiContNoHover]=\"choosen === 'about'\" [class.choosenOption]=\"choosen === 'about'\" (click)=\"choose('about')\">\r\n\t\t\t\t<i class=\"material-icons\">info</i>\r\n\t\t\t\t<a class=\"navLink\">Acerca de</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\t\r\n</nav>\r\n\r\n<div class=\"outletContainer\">\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let skill of skills\" class=\"skillCard card\">\r\n\t<img src=\"{{skill.image}}\" alt=\"\">\r\n\t<div class=\"aboutSkill\">\r\n\t\t<p class=\"skillName\"><strong>{{skill.name}}</strong></p>\r\n\t\t<p>{{skill.description}}</p>\r\n\t\t<p><strong>Worked: </strong>{{skill.workExperience}}</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let job of jobs\" class=\"jobCard card\">\r\n\t<div class=\"aboutSkill\">\r\n\t\t<p class=\"jobName\"><strong>{{job.name}}</strong></p>\r\n\t\t<p>{{job.role}}</p>\r\n\t\t<span>Projects:</span>\r\n\t\t\t<ul class=\"jobProyects\">\r\n\t\t\t\t<li *ngFor=\"let project of job.projects\">{{project.name}}</li>\r\n\t\t\t</ul>\r\n\t\t<p><strong>From: </strong>{{job.from}}</p>\r\n\t\t<p><strong>To: </strong>{{job.to}}</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.name = "Portafolio Neiro Torres";
        this.title = "Construido en: ";
        this.framework = "Angular 4";
        this.addTools = [{
                tool: "Angular CLI: ",
                version: "4.0.0"
            },
            {
                tool: "Material Design: ",
                version: "Lite"
            },
            {
                tool: "NodeJS: ",
                version: "6.0.60"
            },
            {
                tool: "Typescript: ",
                version: "2.2.0"
            }];
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'about',
        template: __webpack_require__(153)
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.name = "Neiro Andres Torres Castro";
        this.email = "neiroandres@yahoo.com.co";
        this.mobile = "(+57) 3044834004";
        this.location = "Medellín, Colombia";
        this.emailTitle = "Email:";
        this.mobileTitle = "Móvil:";
        this.locationTitle = "Ubicación:";
        this.cvTitle = "Solicita mi Currículo!:";
        this.cv = [{
                lang: "Español",
                link: "https://drive.google.com/open?id=0B1uPRn_EOqfDekNpOUhtQmdBUzg"
            },
            {
                lang: "English",
                link: "https://drive.google.com/open?id=0B1uPRn_EOqfDQ25wWkljaVpBazg"
            }];
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'contact',
        template: __webpack_require__(154)
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OverviewComponent = (function () {
    function OverviewComponent() {
        this.careers = [
            { career: "Ingeniero de Sistemas e Informática" },
            { career: "Especialista en Mercados de Energía" }
        ];
        this.about = "Mi nombre es Neiro Andres Torres Castro, Ingeniero en Sistemas e Informática y Especialista en Mercados de Energía de la Universidad Nacional de Colombia, sede Medellín. Amante de la programación, especialmente el desarrollo web enfocado al Front-end.";
        this.university = "Universidad Nacional de Colombia";
    }
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'overview',
        template: __webpack_require__(155)
    })
], OverviewComponent);

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skills = [
            { name: 'JavaScript',
                image: '../../assets/images/workExperience/javascript.png',
                description: 'JavaScript for dynamic websites handling',
                workExperience: 'Yes'
            },
            { name: 'HTML5',
                image: '../../assets/images/workExperience/html5.png',
                description: 'HTML5 any description for the sample',
                workExperience: 'Yes'
            },
            { name: 'CSS3',
                image: '../../assets/images/workExperience/css3.jpg',
                description: 'Skillw with the latest version of css',
                workExperience: 'Yes'
            },
            { name: 'Ember JS',
                image: '../../assets/images/workExperience/emberjs.png',
                description: 'Social networks using EmberJS framework',
                workExperience: 'Yes'
            },
            { name: 'JQuery',
                image: '../../assets/images/workExperience/jquery.png',
                description: 'Javascript tools compilation for quick web developing.',
                workExperience: 'Yes'
            },
            { name: 'Angular',
                image: '../../assets/images/workExperience/angular.jpg',
                description: 'Autolearning coursed in Udemy. Skills growing up.',
                workExperience: 'No'
            },
            { name: 'Material Design',
                image: '../../assets/images/workExperience/material-design.jpg',
                description: 'CSS framework for google stylized components.',
                workExperience: 'Yes'
            },
            { name: 'Bootstrap',
                image: '../../assets/images/workExperience/bootstrap.png',
                description: 'CSS framework for components stylizing.',
                workExperience: 'Yes'
            },
            { name: 'AS/400',
                image: '../../assets/images/workExperience/as400.jpg',
                description: 'IBM operative system. Including Cobol language and RPG',
                workExperience: 'Yes'
            },
            { name: 'PL/SQL',
                image: '../../assets/images/workExperience/oracle.jpg',
                description: 'Autolearning and some work experience on Oracle SQL and PL/SQL',
                workExperience: 'Yes'
            },
            { name: 'Java',
                image: '../../assets/images/workExperience/java.png',
                description: 'Modern, scalable and mantainable applications using Java.',
                workExperience: 'No'
            },
            { name: 'C++',
                image: '../../assets/images/workExperience/c++.png',
                description: 'Intermediate level domain on this programming language.',
                workExperience: 'No'
            },
            { name: 'Finacle',
                image: '../../assets/images/workExperience/finacle.jpg',
                description: "Banking solution System. Finacle Scripting for system customization.",
                workExperience: 'Yes'
            },
            { name: 'VBA',
                image: '../../assets/images/workExperience/vba.png',
                description: "Macros for Microsoft Office documents' tasks automation",
                workExperience: 'Yes'
            }
        ];
    }
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'skills',
        template: __webpack_require__(157)
    })
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var XperienceComponent = (function () {
    function XperienceComponent() {
        this.jobs = [
            {
                name: 'Mercash Digital S.A.S.',
                role: 'Front-end Web Developer',
                projects: [
                    { name: 'Tipon' }
                ],
                from: 'Jul, 2014',
                to: 'Mar, 2016'
            },
            {
                name: 'Sophos Banking Solutions',
                role: 'Implementation Consultant',
                projects: [
                    { name: 'CDT' },
                    { name: 'Indebtness' }
                ],
                from: 'Mar, 2016',
                to: 'Actually'
            }
        ];
    }
    return XperienceComponent;
}());
XperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'experience',
        template: __webpack_require__(158)
    })
], XperienceComponent);

//# sourceMappingURL=xperience.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.choosen = "overview";
        this.profilePicture = '../assets/images/profile.jpg';
    }
    AppComponent.prototype.choose = function (option) {
        this.choosen = option;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(156),
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_overview_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_skills_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_xperience_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Components






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_xperience_component__["a" /* XperienceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_skills_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_xperience_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

//Components





var appRoutes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_1__components_contact_component__["a" /* ContactComponent */] },
    { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_5__components_xperience_component__["a" /* XperienceComponent */] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_3__components_overview_component__["a" /* OverviewComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_4__components_skills_component__["a" /* SkillsComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[189]);
//# sourceMappingURL=main.bundle.js.map