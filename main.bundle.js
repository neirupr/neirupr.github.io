webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_skills_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_xperience_component__ = __webpack_require__(64);
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

/***/ 101:
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

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div class=\"card contactCard\">\r\n\t<div class=\"contactDetails\">\r\n\t\t<h4><strong>{{name}}</strong></h4>\r\n\t\r\n\t\t<h6 style=\"text-align:center;\"><strong>{{title}}</strong>\r\n\t\t\t{{framework}}\r\n\t\t</h6>\r\n\t\t<p *ngFor=\"let tech of addTools\" style=\"text-align:left;\"><strong>{{tech.tool}}</strong>\r\n\t\t\t{{tech.version}}\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"card contactCard\">\r\n\t<div class=\"contactDetails\">\r\n\t\t<h4><strong>{{name}}</strong></h4>\r\n\t\t\r\n\t\t<p><strong>{{cvTitle}}</strong>\r\n\t\t\t<a class=\"cvLink\" target=\"_blank\" href={{cur.link}} *ngFor=\"let cur of cv\">{{cur.lang}}</a>\r\n\t\t</p>\r\n\t\t\r\n\t\t<p><strong>{{emailTitle}}</strong>\r\n\t\t\t{{email}}\r\n\t\t</p>\r\n\t\t<p><strong>{{mobileTitle}}</strong>\r\n\t\t\t{{mobile}}\r\n\t\t</p>\r\n\t\t<p><strong>{{locationTitle}}</strong>\r\n\t\t\t{{location}}\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 card ml-auto mr-auto aboutContainer\">\r\n\t\t<span>{{about}}</span>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<header class=\"portFolioHeader\">\r\n\t<div class=\"headerCont\">\r\n\t\t<div class=\"profileImage\">\r\n\t    </div>\r\n\t    <p><strong>Neiro Andres Torres Castro</strong></p>\r\n\t</div>\r\n</header>\r\n\r\n<nav class=\"portFolioNav\">\r\n\t<ul class=\"navUl row align-items-center justify-content-around\">\r\n\t\t<li class=\"col-2 navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/overview']\" [class.navLiContNoHover]=\"choosen === 'overview'\" [class.choosenOption]=\"choosen === 'overview'\" (click)=\"choose('overview')\">\r\n\t\t\t\t<i class=\"material-icons\">account_box</i>\r\n\t\t\t\t<a class=\"navLink\">Resumen</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"col-2 navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/skills']\" [class.navLiContNoHover]=\"choosen === 'skills'\" [class.choosenOption]=\"choosen === 'skills'\" (click)=\"choose('skills')\">\r\n\t\t\t\t<i class=\"material-icons\">trending_up</i>\r\n\t\t\t\t<a class=\"navLink\">Habilidades</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"col-2 navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/experience']\" [class.navLiContNoHover]=\"choosen === 'experience'\" [class.choosenOption]=\"choosen === 'experience'\" (click)=\"choose('experience')\">\r\n\t\t\t\t<i class=\"material-icons\">work</i>\r\n\t\t\t\t<a class=\"navLink\">Experiencia</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"col-2 navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/contact']\" [class.navLiContNoHover]=\"choosen === 'contact'\" [class.choosenOption]=\"choosen === 'contact'\" (click)=\"choose('contact')\">\r\n\t\t\t\t<i class=\"material-icons\">contact_mail</i>\r\n\t\t\t\t<a class=\"navLink\">Contacto</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class=\"col-2 navLi\">\r\n\t\t\t<div class=\"navLiContainer\" [routerLink]=\"['/about']\" [class.navLiContNoHover]=\"choosen === 'about'\" [class.choosenOption]=\"choosen === 'about'\" (click)=\"choose('about')\">\r\n\t\t\t\t<i class=\"material-icons\">info</i>\r\n\t\t\t\t<a class=\"navLink\">Acerca</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\t\r\n</nav>\r\n\r\n<div class=\"container-fluid outletContainer\">\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div *ngFor=\"let skill of skills\" class=\"skillCard flex-row card col-12 col-sm-10 col-md-8 col-lg-5 mr-auto ml-auto justify-content-between\">\r\n\t\t<img src=\"{{skill.image}}\" alt=\"\" class=\"col-5\">\r\n\t\t<div class=\"aboutSkill col-8 ml-auto\">\r\n\t\t\t<p class=\"skillName\"><strong>{{skill.name}}</strong></p>\r\n\t\t\t<div style=\"display:flex;flex-direction:column;\t\">\r\n\t\t\t\t<span><strong>Nivel: </strong>{{skill.level}}</span>\r\n\t\t\t\t<span><strong>Trabajado: </strong>{{skill.workExperience}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class=\"row xperience-container\">\r\n\t<div *ngFor=\"let job of jobs\" class=\"jobCard card col-12 col-sm-10 col-md-7 col-lg-5 mr-auto ml-auto justify-content-between\">\r\n\t\t<div class=\"aboutJob\">\r\n\t\t\t<p class=\"jobName\"><strong>{{job.name}}</strong></p>\r\n\t\t\t<p>{{job.role}}</p>\r\n\t\t\t<br>\r\n\t\t\t<span><strong>Proyectos:</strong></span>\r\n\t\t\t\t<ul class=\"jobProyects\">\r\n\t\t\t\t\t<li *ngFor=\"let project of job.projects\">{{project.name}}</li>\r\n\t\t\t\t</ul>\r\n\t\t\t<p><strong>Desde: </strong>{{job.from}}</p>\r\n\t\t\t<p><strong>Hasta: </strong>{{job.to}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 17:
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
        template: __webpack_require__(159)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = (function () {
    function AboutComponent(_router, parent) {
        this._router = _router;
        this.parent = parent;
        this.name = "Portafolio Neiro Torres";
        this.title = "Framework: ";
        this.framework = "Angular";
        this.addTools = [{
                tool: "Angular CLI: ",
                version: "4.0.0"
            },
            {
                tool: "Bootstrap: ",
                version: "4"
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
    AboutComponent.prototype.ngOnInit = function () {
        this.parent.choose('about');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'about',
        template: __webpack_require__(156)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], AboutComponent);

var _a, _b;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContactComponent = (function () {
    function ContactComponent(_router, parent) {
        this._router = _router;
        this.parent = parent;
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
    ContactComponent.prototype.ngOnInit = function () {
        this.parent.choose('contact');
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'contact',
        template: __webpack_require__(157)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OverviewComponent = (function () {
    function OverviewComponent(_router, parent) {
        this._router = _router;
        this.parent = parent;
        this.careers = [
            { career: "Ingeniero de Sistemas e Informática" },
            { career: "Especialista en Mercados de Energía" }
        ];
        this.about = "Mi nombre es Neiro Andres Torres Castro, Ingeniero en Sistemas e Inform\u00E1tica \n\t\ty Especialista en Mercados de Energ\u00EDa de la Universidad Nacional de Colombia, sede Medell\u00EDn. \n\t\t\tAmante de la programaci\u00F3n, especialmente el desarrollo web enfocado al Front-end.";
        this.university = "Universidad Nacional de Colombia";
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.parent.choose('overview');
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'overview',
        template: __webpack_require__(158)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], OverviewComponent);

var _a, _b;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SkillsComponent = (function () {
    function SkillsComponent(_router, parent) {
        this._router = _router;
        this.parent = parent;
        this.skills = [
            { name: 'Angular',
                image: '../../assets/images/workExperience/angular.jpg',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'NodeJS',
                image: '../../assets/images/workExperience/nodejs.png',
                level: 'Básico',
                workExperience: 'Sí'
            },
            { name: 'MongoDB',
                image: '../../assets/images/workExperience/mongodb.png',
                level: 'Básico',
                workExperience: 'Sí'
            },
            { name: 'JavaScript',
                image: '../../assets/images/workExperience/javascript.png',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'HTML5',
                image: '../../assets/images/workExperience/html5.png',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'CSS3',
                image: '../../assets/images/workExperience/css3.png',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'Ember JS',
                image: '../../assets/images/workExperience/emberjs.png',
                level: 'Medio',
                workExperience: 'Sí'
            },
            { name: 'JQuery',
                image: '../../assets/images/workExperience/jquery.png',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'Material Design',
                image: '../../assets/images/workExperience/material-design.jpg',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'Bootstrap',
                image: '../../assets/images/workExperience/bootstrap.png',
                level: 'Alto',
                workExperience: 'Sí'
            },
            { name: 'VBA',
                image: '../../assets/images/workExperience/vba.png',
                level: "Alto",
                workExperience: 'Sí'
            },
            { name: 'Java',
                image: '../../assets/images/workExperience/java.png',
                level: 'Medio',
                workExperience: 'Sí'
            },
            { name: 'PL/SQL',
                image: '../../assets/images/workExperience/oracle.jpg',
                level: 'Básico',
                workExperience: 'Sí'
            },
            { name: 'C++',
                image: '../../assets/images/workExperience/c++.png',
                level: 'Básico',
                workExperience: 'No'
            },
            { name: 'Finacle',
                image: '../../assets/images/workExperience/finacle.jpg',
                level: "Alto",
                workExperience: 'Sí'
            },
            { name: 'AS/400',
                image: '../../assets/images/workExperience/as400.jpg',
                level: 'Básico',
                workExperience: 'No'
            },
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.parent.choose('skills');
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'skills',
        template: __webpack_require__(160)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], SkillsComponent);

var _a, _b;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XperienceComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var XperienceComponent = (function () {
    function XperienceComponent(_router, parent) {
        this._router = _router;
        this.parent = parent;
        this.jobs = [
            {
                name: 'Almacenes Éxito',
                role: 'Analista II - Tecnología',
                projects: [
                    { name: 'www.exito.com' },
                    { name: 'www.carulla.com' },
                    { name: 'Nuevos aplicativos' }
                ],
                from: 'Ago, 2017',
                to: 'Actually'
            },
            {
                name: 'Sophos Banking Solutions',
                role: 'Implementation Consultant',
                projects: [
                    { name: 'CDT' },
                    { name: 'Indebtness' }
                ],
                from: 'Mar, 2016',
                to: 'Ago, 2017'
            },
            {
                name: 'Mercash Digital S.A.S.',
                role: 'Front-end Web Developer',
                projects: [
                    { name: 'Tipon' }
                ],
                from: 'Jul, 2014',
                to: 'Mar, 2016'
            }
        ];
    }
    XperienceComponent.prototype.ngOnInit = function () {
        this.parent.choose('experience');
    };
    return XperienceComponent;
}());
XperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'experience',
        template: __webpack_require__(161)
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], XperienceComponent);

var _a, _b;
//# sourceMappingURL=xperience.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_overview_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_skills_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_xperience_component__ = __webpack_require__(64);
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

/***/ })

},[209]);
//# sourceMappingURL=main.bundle.js.map