"use strict";
(self["webpackChunkSeriousCRUDAngular"] = self["webpackChunkSeriousCRUDAngular"] || []).push([["main"],{

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-component/app.component */ 117);
/* harmony import */ var _settings_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/imports */ 6142);
/* harmony import */ var _settings_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/providers */ 3010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-page/about-page.component */ 1299);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 8170);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _modules_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/root-store/root-store.module */ 211);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/routing.module */ 8915);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-in-memory-web-api */ 1845);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_component_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: _settings_providers__WEBPACK_IMPORTED_MODULE_2__.providers, imports: [_settings_imports__WEBPACK_IMPORTED_MODULE_1__.imports] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_component_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__.AboutPageComponent, _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__.HomePageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _modules_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_5__.RootStoreModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__.RoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__.HttpClientInMemoryWebApiModule] }); })();


/***/ }),

/***/ 1299:
/*!***************************************************************!*\
  !*** ./src/app/components/about-page/about-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageComponent": () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutPageComponent {
    constructor() { }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 15, vars: 0, consts: [[1, "about-list"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This site has 3 pages: Home, Heroes list and about. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This site in development state. There is the list of planned features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Developing of backend server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Using of mongoDB for storing data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " CRUD implementation and improvement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n\ndiv.about-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5hYm91dC1saXN0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 117:
/*!***********************************************************!*\
  !*** ./src/app/components/app-component/app.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'SeriousCRUDAngular';
    }
    routeToMainPage() {
        this.router.navigateByUrl('/heroes');
    }
    routeToAboutPage() {
        this.router.navigateByUrl("/about");
    }
    routeToHomePage() {
        this.router.navigateByUrl("/home");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["color", "primary"], ["mat-fab", "", 1, "toolbar__button", 3, "click"], ["src", "../../../assets/logo.jpg", "alt", "flower", 1, "toolbar__logo"], ["mat-stroked-button", "", 1, "toolbar__button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.routeToHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.routeToMainPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Heroes list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.routeToAboutPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".toolbar__button[_ngcontent-%COMP%] {\n  background-color: darkmagenta;\n  margin-right: 25px;\n}\n\n.toolbar__logo[_ngcontent-%COMP%] {\n  position: relative;\n  top: -17px;\n  left: -1px;\n  border-radius: 50%;\n  height: 58px;\n  width: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJfX2J1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrbWFnZW50YTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuLnRvb2xiYXJfX2xvZ297XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTE3cHg7XHJcbiAgbGVmdDogLTFweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIHdpZHRoOiA1OHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 8170:
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomePageComponent {
    constructor() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "There is no functionality at all.) Just use toolbar for navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-size: 60px;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6142:
/*!*************************************!*\
  !*** ./src/app/settings/imports.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imports": () => (/* binding */ imports)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _modules_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/root-store */ 2912);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing.module */ 8915);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-in-memory-web-api */ 1845);
/* harmony import */ var _modules_heroes_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/heroes/services/in-memory-data.service */ 1565);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 2340);













const imports = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
    _modules_root_store__WEBPACK_IMPORTED_MODULE_0__.RootStoreModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
    _routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutingModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
    _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_12__.HttpClientInMemoryWebApiModule.forRoot(_modules_heroes_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_2__.InMemoryDataService, { passThruUnknownUrl: true }),
];


/***/ }),

/***/ 3010:
/*!***************************************!*\
  !*** ./src/app/settings/providers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "providers": () => (/* binding */ providers)
/* harmony export */ });
const providers = [];


/***/ }),

/***/ 3952:
/*!*******************************************!*\
  !*** ./src/app/settings/router-config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routerConfig": () => (/* binding */ routerConfig)
/* harmony export */ });
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home-page/home-page.component */ 8170);
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/about-page/about-page.component */ 1299);


const routerConfig = [
    {
        path: "about",
        component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__.AboutPageComponent,
    },
    {
        path: "home",
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
    },
    {
        path: "heroes",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_modules_heroes_heroes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../modules/heroes/heroes.module */ 4245))
            .then(mod => mod.default),
    },
    {
        path: '',
        redirectTo: "/home",
        pathMatch: "full"
    }
];


/***/ }),

/***/ 8915:
/*!********************************************!*\
  !*** ./src/app/settings/routing.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingModule": () => (/* binding */ RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-config */ 3952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class RoutingModule {
}
RoutingModule.ɵfac = function RoutingModule_Factory(t) { return new (t || RoutingModule)(); };
RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(_router_config__WEBPACK_IMPORTED_MODULE_0__.routerConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2454:
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverURL": () => (/* binding */ serverURL)
/* harmony export */ });
const serverURL = 'http://localhost:5001/api/Hero';


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5713:
/*!*****************************************************!*\
  !*** ./src/modules/heroes/services/data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../const */ 2454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
    })
};
class DataService {
    constructor(http) {
        this.http = http;
    }
    post(name, heroPoints, age, height, superPowers, superVillain) {
        let hero = { name: name, heroPoints: heroPoints, age: age, height: height, superPowers: superPowers, superVillain: superVillain };
        return this.http.post(_const__WEBPACK_IMPORTED_MODULE_0__.serverURL, hero, httpOptions);
    }
    fetch(name) {
        if (name === null) {
            return this.http.get(_const__WEBPACK_IMPORTED_MODULE_0__.serverURL, httpOptions);
        }
        else {
            return this.http.get(_const__WEBPACK_IMPORTED_MODULE_0__.serverURL + '/' + name, httpOptions);
        }
    }
    update(name, heroPoints, age, height, superPowers, superVillain) {
        let hero = { name: name, heroPoints: heroPoints, age: age, height: height, superPowers: superPowers, superVillain: superVillain };
        return this.http.patch(_const__WEBPACK_IMPORTED_MODULE_0__.serverURL, hero, httpOptions);
    }
    delete(name) {
        return this.http.delete(_const__WEBPACK_IMPORTED_MODULE_0__.serverURL + '/' + name, httpOptions);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1565:
/*!***************************************************************!*\
  !*** ./src/modules/heroes/services/in-memory-data.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collection": () => (/* binding */ collection),
/* harmony export */   "InMemoryDataService": () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ 1845);

const collection = [
    {
        name: "string",
        heroPoints: 1000,
        age: 22,
        height: 2,
        superPowers: "characters",
        superVillain: "array",
    },
    {
        name: "piligrim",
        heroPoints: 1000,
        age: 22,
        height: 2,
        superPowers: "tent",
        superVillain: "bears",
    },
    {
        name: "fear",
        heroPoints: 10000,
        age: 22,
        height: 2,
        superPowers: "they run",
        superVillain: "bless",
    },
];
class InMemoryDataService {
    post(requestInfo) {
        const data = requestInfo.utils.getJsonBody(requestInfo.req);
        console.log(data);
        if (collection.filter(item => item.name === data.name) !== []) {
            console.log(1);
            collection.push(data);
            const options = {
                body: { data },
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: requestInfo.headers,
                url: requestInfo.url
            };
            return requestInfo.utils.createResponse$(() => options);
        }
        return null;
    }
    patch(requestInfo) {
        const data = requestInfo.utils.getJsonBody(requestInfo.req);
        const index = collection.findIndex(item => item.name === data.name);
        console.log(data);
        if (index !== -1) {
            collection[index] = data;
            console.log("changed: ", collection[index]);
            const options = {
                body: { data },
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: requestInfo.headers,
                url: requestInfo.url
            };
            return requestInfo.utils.createResponse$(() => options);
        }
        return null;
    }
    delete(requestInfo) {
        const data = requestInfo.id;
        const index = collection.findIndex(item => item.name === data);
        if (index !== -1) {
            const removed = collection[index];
            collection.splice(index, 1);
            const options = {
                body: { removed },
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                headers: requestInfo.headers,
                url: requestInfo.url
            };
            return requestInfo.utils.createResponse$(() => options);
        }
        return null;
    }
    createDb() {
        return {
            Hero: collection
        };
    }
}


/***/ }),

/***/ 9217:
/*!*********************************************!*\
  !*** ./src/modules/heroes/store/actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsTypes": () => (/* binding */ ActionsTypes),
/* harmony export */   "DeleteActionRequest": () => (/* binding */ DeleteActionRequest),
/* harmony export */   "DeleteActionSuccess": () => (/* binding */ DeleteActionSuccess),
/* harmony export */   "DeleteActionFailure": () => (/* binding */ DeleteActionFailure),
/* harmony export */   "FetchActionRequest": () => (/* binding */ FetchActionRequest),
/* harmony export */   "FetchActionSuccess": () => (/* binding */ FetchActionSuccess),
/* harmony export */   "FetchActionFailure": () => (/* binding */ FetchActionFailure),
/* harmony export */   "PostRequestAction": () => (/* binding */ PostRequestAction),
/* harmony export */   "PostSuccessAction": () => (/* binding */ PostSuccessAction),
/* harmony export */   "PostFailureAction": () => (/* binding */ PostFailureAction),
/* harmony export */   "UpdateRequestAction": () => (/* binding */ UpdateRequestAction),
/* harmony export */   "UpdateSuccessAction": () => (/* binding */ UpdateSuccessAction),
/* harmony export */   "UpdateFailureAction": () => (/* binding */ UpdateFailureAction)
/* harmony export */ });
var ActionsTypes;
(function (ActionsTypes) {
    ActionsTypes["DELETE_REQUEST"] = "Deletion request";
    ActionsTypes["DELETE_SUCCESS"] = "Deletion success";
    ActionsTypes["DELETE_FAILURE"] = "Deletion failure";
    ActionsTypes["FETCH_REQUEST"] = "Fetching request";
    ActionsTypes["FETCH_SUCCESS"] = "Fetching success";
    ActionsTypes["FETCH_FAILURE"] = "Fetching failure";
    ActionsTypes["POST_REQUEST"] = "Create request";
    ActionsTypes["POST_SUCCESS"] = "Create success";
    ActionsTypes["POST_FAILURE"] = "Create failure";
    ActionsTypes["UPDATE_REQUEST"] = "Update request";
    ActionsTypes["UPDATE_SUCCESS"] = "Update success";
    ActionsTypes["UPDATE_FAILURE"] = "Update failure";
})(ActionsTypes || (ActionsTypes = {}));
class DeleteActionRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.DELETE_REQUEST;
    }
}
class DeleteActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.DELETE_SUCCESS;
    }
}
class DeleteActionFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.DELETE_FAILURE;
    }
}
class FetchActionRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.FETCH_REQUEST;
    }
}
class FetchActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.FETCH_SUCCESS;
    }
}
class FetchActionFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.FETCH_FAILURE;
    }
}
class PostRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.POST_REQUEST;
    }
}
class PostSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.POST_SUCCESS;
    }
}
class PostFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.POST_FAILURE;
    }
}
class UpdateRequestAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.UPDATE_REQUEST;
    }
}
class UpdateSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.UPDATE_SUCCESS;
    }
}
class UpdateFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionsTypes.UPDATE_FAILURE;
    }
}


/***/ }),

/***/ 3038:
/*!*********************************************!*\
  !*** ./src/modules/heroes/store/effects.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroesFeatureEffects": () => (/* binding */ heroesFeatureEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 9217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 5713);







class heroesFeatureEffects {
    constructor(dataService, actions$) {
        this.dataService = dataService;
        this.actions$ = actions$;
        this.deleteRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.ActionsTypes.DELETE_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.dataService.delete(action.payload.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => new _actions__WEBPACK_IMPORTED_MODULE_0__.DeleteActionSuccess({ result: result.result })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _actions__WEBPACK_IMPORTED_MODULE_0__.DeleteActionFailure({ error }))))));
        });
        this.fetchRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.ActionsTypes.FETCH_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.dataService.fetch(action.payload.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => new _actions__WEBPACK_IMPORTED_MODULE_0__.FetchActionSuccess({ result: result })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _actions__WEBPACK_IMPORTED_MODULE_0__.FetchActionFailure({ error }))))));
        });
        this.postRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.ActionsTypes.POST_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.dataService.post(action.payload.name, action.payload.heroPoints, action.payload.age, action.payload.height, action.payload.superPowers, action.payload.superVillain).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(hero => new _actions__WEBPACK_IMPORTED_MODULE_0__.PostSuccessAction({ hero })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _actions__WEBPACK_IMPORTED_MODULE_0__.PostFailureAction({ error }))))));
        });
        this.updateRequestEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.ActionsTypes.UPDATE_REQUEST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.dataService.update(action.payload.name, action.payload.heroPoints, action.payload.age, action.payload.height, action.payload.superPowers, action.payload.superVillain).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(hero => new _actions__WEBPACK_IMPORTED_MODULE_0__.UpdateSuccessAction({ hero })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _actions__WEBPACK_IMPORTED_MODULE_0__.UpdateFailureAction({ error }))))));
        });
    }
}
heroesFeatureEffects.ɵfac = function heroesFeatureEffects_Factory(t) { return new (t || heroesFeatureEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions)); };
heroesFeatureEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: heroesFeatureEffects, factory: heroesFeatureEffects.ɵfac });


/***/ }),

/***/ 2703:
/*!*********************************************************!*\
  !*** ./src/modules/heroes/store/heroes-store.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesStoreModule": () => (/* binding */ HeroesStoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ 8157);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ 3038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class HeroesStoreModule {
}
HeroesStoreModule.ɵfac = function HeroesStoreModule_Factory(t) { return new (t || HeroesStoreModule)(); };
HeroesStoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HeroesStoreModule });
HeroesStoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature("heroes", _reducer__WEBPACK_IMPORTED_MODULE_0__.Reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_effects__WEBPACK_IMPORTED_MODULE_1__.heroesFeatureEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeroesStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 7324:
/*!*******************************************!*\
  !*** ./src/modules/heroes/store/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesStoreModule": () => (/* reexport safe */ _heroes_store_module__WEBPACK_IMPORTED_MODULE_0__.HeroesStoreModule),
/* harmony export */   "HeroesStoreSelector": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "HeroesStoreActions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _heroes_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroes-store.module */ 2703);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ 7551);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ 9217);






/***/ }),

/***/ 8157:
/*!*********************************************!*\
  !*** ./src/modules/heroes/store/reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reducer": () => (/* binding */ Reducer)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ 2679);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 9217);


function Reducer(state = _state__WEBPACK_IMPORTED_MODULE_0__.initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.DELETE_REQUEST:
            return Object.assign(Object.assign({}, state), { heroName: action.payload.name, isLoading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.DELETE_SUCCESS:
            return Object.assign(Object.assign({}, state), { heroName: null, isLoading: false, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.DELETE_FAILURE:
            return Object.assign(Object.assign({}, state), { heroName: state.heroName, isLoading: false, error: action.payload.error });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.FETCH_REQUEST:
            return Object.assign(Object.assign({}, state), { heroesList: state.heroesList, isLoading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.FETCH_SUCCESS:
            return Object.assign(Object.assign({}, state), { heroesList: action.payload.result, isLoading: false, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.FETCH_FAILURE:
            return Object.assign(Object.assign({}, state), { heroesList: state.heroesList, isLoading: false, error: action.payload.error });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.POST_REQUEST:
            return Object.assign(Object.assign({}, state), { hero: state.hero, isLoading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.POST_SUCCESS:
            return Object.assign(Object.assign({}, state), { hero: action.payload.hero, isLoading: false, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.POST_FAILURE:
            return Object.assign(Object.assign({}, state), { hero: state.hero, isLoading: false, error: action.payload.error.error });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.UPDATE_REQUEST:
            return Object.assign(Object.assign({}, state), { hero: state.hero, isLoading: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.UPDATE_SUCCESS:
            return Object.assign(Object.assign({}, state), { hero: action.payload.hero, isLoading: false, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_1__.ActionsTypes.UPDATE_FAILURE:
            return Object.assign(Object.assign({}, state), { hero: state.hero, isLoading: false, error: action.payload.error.error });
        default:
            return Object.assign({}, state);
    }
}


/***/ }),

/***/ 7551:
/*!**********************************************!*\
  !*** ./src/modules/heroes/store/selector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectState": () => (/* binding */ selectState),
/* harmony export */   "selectHeroName": () => (/* binding */ selectHeroName),
/* harmony export */   "selectHero": () => (/* binding */ selectHero),
/* harmony export */   "selectHeroesList": () => (/* binding */ selectHeroesList),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectError": () => (/* binding */ selectError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const getHeroName = (state) => state.heroName;
const getHero = (state) => state.hero;
const getHeroesList = (state) => state.heroesList;
const getIsLoading = (state) => state.isLoading;
const getError = (state) => state.error;
const selectState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)("heroes");
const selectHeroName = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, getHeroName);
const selectHero = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, getHero);
const selectHeroesList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, getHeroesList);
const selectIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, getIsLoading);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, getError);


/***/ }),

/***/ 2679:
/*!*******************************************!*\
  !*** ./src/modules/heroes/store/state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
    heroName: null,
    hero: null,
    heroesList: null,
    isLoading: false,
    error: null
};


/***/ }),

/***/ 2912:
/*!*****************************************!*\
  !*** ./src/modules/root-store/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesStoreActions": () => (/* reexport safe */ _heroes_store__WEBPACK_IMPORTED_MODULE_3__.HeroesStoreActions),
/* harmony export */   "HeroesStoreModule": () => (/* reexport safe */ _heroes_store__WEBPACK_IMPORTED_MODULE_3__.HeroesStoreModule),
/* harmony export */   "HeroesStoreSelector": () => (/* reexport safe */ _heroes_store__WEBPACK_IMPORTED_MODULE_3__.HeroesStoreSelector),
/* harmony export */   "RootStoreModule": () => (/* reexport safe */ _root_store_module__WEBPACK_IMPORTED_MODULE_0__.RootStoreModule),
/* harmony export */   "RootStoreState": () => (/* reexport module object */ _root_state__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "RootStoreSelectors": () => (/* reexport module object */ _root_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _root_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-store.module */ 211);
/* harmony import */ var _root_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-selectors */ 6879);
/* harmony import */ var _root_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root-state */ 3114);
/* harmony import */ var _heroes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heroes/store */ 7324);







/***/ }),

/***/ 6879:
/*!**************************************************!*\
  !*** ./src/modules/root-store/root-selectors.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectRootError": () => (/* binding */ selectRootError),
/* harmony export */   "selectRootIsLoading": () => (/* binding */ selectRootIsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _heroes_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heroes/store */ 7324);


const selectRootError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_heroes_store__WEBPACK_IMPORTED_MODULE_0__.HeroesStoreSelector.selectError, (Error) => {
    return (Error);
});
const selectRootIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_heroes_store__WEBPACK_IMPORTED_MODULE_0__.HeroesStoreSelector.selectIsLoading, (IsLoading) => {
    return (IsLoading);
});


/***/ }),

/***/ 3114:
/*!**********************************************!*\
  !*** ./src/modules/root-store/root-state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 211:
/*!*****************************************************!*\
  !*** ./src/modules/root-store/root-store.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootStoreModule": () => (/* binding */ RootStoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _heroes_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heroes/store */ 7324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);







class RootStoreModule {
}
RootStoreModule.ɵfac = function RootStoreModule_Factory(t) { return new (t || RootStoreModule)(); };
RootStoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RootStoreModule });
RootStoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _heroes_store__WEBPACK_IMPORTED_MODULE_0__.HeroesStoreModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.EffectsModule.forRoot([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RootStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _heroes_store__WEBPACK_IMPORTED_MODULE_0__.HeroesStoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.EffectsRootModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map