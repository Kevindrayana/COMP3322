"use strict";
(self["webpackChunksemtron_studio"] = self["webpackChunksemtron_studio"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _page_ide_page_ide_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/ide-page/ide-page.component */ 5594);
/* harmony import */ var _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/home-page/home-page.component */ 37431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent },
    { path: 'ide', component: _page_ide_page_ide_page_component__WEBPACK_IMPORTED_MODULE_0__.IdePageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.title = 'semtron-studio';
        this.translateService.setDefaultLang('en');
        const lang = localStorage.getItem('lang') || 'en';
        this.translateService.use(lang);
        document.documentElement.lang = lang;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_components_paper_paper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/paper/paper.component */ 73310);
/* harmony import */ var _core_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/menu/menu.component */ 54936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _shared_pipes_shortcut_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/pipes/shortcut.pipe */ 93708);
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-hotkeys */ 71573);
/* harmony import */ var _core_components_controller_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/controller/controller.component */ 21776);
/* harmony import */ var _page_ide_page_ide_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/ide-page/ide-page.component */ 5594);
/* harmony import */ var _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/home-page/home-page.component */ 37431);
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/seo.service */ 2186);
/* harmony import */ var _core_components_controller_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/controller/title/title.component */ 49738);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _state_filename_filename_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/filename/filename.reducer */ 973);
/* harmony import */ var _core_components_controller_filename_filename_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/controller/filename/filename.component */ 42673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);






/*test */







/*page*/




/* ngrx */







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forRoot({ filename: _state_filename_filename_reducer__WEBPACK_IMPORTED_MODULE_10__.filenameReducer }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__.TranslateHttpLoader(http, './assets/locale/', '.json');
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient],
                },
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_19__.HotkeyModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _shared_pipes_shortcut_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortcutPipe,
        _page_ide_page_ide_page_component__WEBPACK_IMPORTED_MODULE_6__.IdePageComponent,
        _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__.HomePageComponent,
        _core_components_controller_controller_component__WEBPACK_IMPORTED_MODULE_5__.ControllerComponent,
        _core_components_paper_paper_component__WEBPACK_IMPORTED_MODULE_2__.PaperComponent,
        _core_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
        _core_components_controller_title_title_component__WEBPACK_IMPORTED_MODULE_9__.TitleComponent,
        _core_components_controller_filename_filename_component__WEBPACK_IMPORTED_MODULE_11__.FilenameComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreRootModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, angular2_hotkeys__WEBPACK_IMPORTED_MODULE_19__.HotkeyModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule] }); })();


/***/ }),

/***/ 90328:
/*!********************************************************************!*\
  !*** ./src/app/core/components/controller/config/sample-graphs.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sampleGraphs": () => (/* binding */ sampleGraphs)
/* harmony export */ });
/*! JointJS+ v3.5.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-06-28


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/
const sampleGraphs = {
    // credit goes to `http://www.continuitycentral.com/`
    emergencyProcedure: '{"cells":[{"type":"standard.Polygon","position":{"x":435,"y":225.50000000000003},"size":{"width":160,"height":98.99999999999994},"angle":0,"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6","z":88,"attrs":{"body":{"refPoints":"50,0 100,50 50,100 0,50","stroke":"#7c68fc","fill":"transparent","strokeDasharray":"0"},"label":{"fontSize":15,"fill":"#7c68fc","text":"Auto alarm\\nactivated?","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Ellipse","position":{"x":475,"y":82},"size":{"width":80,"height":80},"angle":0,"id":"6374dec5-83d1-4e31-832a-ac24755672a2","z":89,"attrs":{"body":{"stroke":"#fe854f","fill":"transparent","width":50,"height":30,"strokeDasharray":"10,5"},"label":{"fontSize":16,"fill":"#fe854f","text":"Fire\\nIncident","fontFamily":"Roboto Condensed","fontWeight":"Bold","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"6374dec5-83d1-4e31-832a-ac24755672a2"},"target":{"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6"},"id":"56dc6e7b-916d-42fa-8d5b-0942474383e5","z":90,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Ellipse","position":{"x":375,"y":260},"size":{"width":30,"height":30},"angle":0,"id":"064747aa-f153-43bd-af2d-76e5b9a63a8c","z":91,"attrs":{"body":{"stroke":"#7c68fc","fill":"transparent","width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#7c68fc","text":"No","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6"},"target":{"id":"064747aa-f153-43bd-af2d-76e5b9a63a8c"},"id":"4c3c6d56-4c5e-4def-93f7-953972f65086","z":92,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2,"targetMarker":{"d":"M 0 0 0 0"}},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Ellipse","position":{"x":500,"y":351},"size":{"width":30,"height":30},"angle":0,"id":"3fd6a2d5-959c-4124-aa18-cc9cdc33cd3a","z":94,"attrs":{"body":{"stroke":"#7c68fc","fill":"transparent","width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#7c68fc","text":"Yes","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6"},"target":{"id":"3fd6a2d5-959c-4124-aa18-cc9cdc33cd3a"},"id":"627c93be-f5f9-4a06-bf62-cfdc8eec3df2","z":95,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2,"targetMarker":{"d":"M 0 0 0 0"}},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":660,"y":248},"size":{"width":90,"height":54},"angle":0,"id":"0619ff3d-7bb1-4d5f-94e3-2b359b545077","z":96,"attrs":{"body":{"stroke":"#fe854f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"10,5"},"label":{"fontSize":15,"fill":"#fe854f","text":"Activate\\nevacuation","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"bbbd5104-4965-4b86-bcb1-1552bfbb04d6"},"target":{"id":"0619ff3d-7bb1-4d5f-94e3-2b359b545077"},"id":"bcaae721-b040-4916-815d-6abe67f9119f","z":98,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":250,"y":339},"size":{"width":90,"height":54},"angle":0,"id":"cb9a597f-ea84-4b2f-bd50-0581c27ec557","z":99,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Employees\\ninforms\\nprimary\\ncontact","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"064747aa-f153-43bd-af2d-76e5b9a63a8c"},"target":{"id":"afc095b8-452b-4833-bb8f-ead56dfbf64e"},"id":"249acf5d-3c8a-4ec1-b730-410d637f9dbd","z":100,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":100,"y":248},"size":{"width":90,"height":54},"angle":0,"id":"8cdadca1-587b-47f1-a9af-1ea813e098ea","z":101,"attrs":{"body":{"stroke":"#fe854f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"10,5"},"label":{"fontSize":15,"fill":"#fe854f","text":"Activate\\nevacuation","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"afc095b8-452b-4833-bb8f-ead56dfbf64e"},"target":{"id":"8cdadca1-587b-47f1-a9af-1ea813e098ea"},"id":"93eb8c3b-2256-468f-8516-032b413c7e81","z":102,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":250,"y":248},"size":{"width":90,"height":54},"angle":0,"id":"afc095b8-452b-4833-bb8f-ead56dfbf64e","z":103,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Employees\\nmanually\\nactivates alarm","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"afc095b8-452b-4833-bb8f-ead56dfbf64e"},"target":{"id":"cb9a597f-ea84-4b2f-bd50-0581c27ec557"},"id":"46200e2d-4bd2-46db-844f-772ef273cbe5","z":104,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Polygon","position":{"x":435,"y":411},"size":{"width":160,"height":98.99999999999994},"angle":0,"id":"1eaf6c3a-520f-41c7-9ac7-7008c5cc3e44","z":106,"attrs":{"body":{"refPoints":"50,0 100,50 50,100 0,50","stroke":"#7c68fc","fill":"transparent","strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#7c68fc","text":"Alarm monitoring\\nservice provider\\ncontacts organization?","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"cb9a597f-ea84-4b2f-bd50-0581c27ec557"},"target":{"id":"1eaf6c3a-520f-41c7-9ac7-7008c5cc3e44"},"id":"b5f09409-0526-4252-9289-739a24fd7839","z":107,"labels":[],"vertices":[{"x":295,"y":460.5}],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"3fd6a2d5-959c-4124-aa18-cc9cdc33cd3a"},"target":{"id":"1eaf6c3a-520f-41c7-9ac7-7008c5cc3e44"},"id":"70d38b87-d427-4da8-82ed-c98fb6f290dd","z":108,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Ellipse","position":{"x":500,"y":542},"size":{"width":30,"height":30},"angle":0,"id":"d61f5f92-b2c1-46fb-8677-40426f2db2a8","z":109,"attrs":{"body":{"stroke":"#7c68fc","fill":"transparent","width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#7c68fc","text":"Yes","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Ellipse","position":{"x":625,"y":495},"size":{"width":30,"height":30},"angle":0,"id":"8167630c-8740-4bdc-bae2-2b85127eec04","z":110,"attrs":{"body":{"stroke":"#7c68fc","fill":"transparent","width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":11,"fill":"#7c68fc","text":"No","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"1eaf6c3a-520f-41c7-9ac7-7008c5cc3e44"},"target":{"id":"d61f5f92-b2c1-46fb-8677-40426f2db2a8"},"id":"a34c60c4-af41-4a47-a45d-3c02e9b7cf2a","z":111,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2,"targetMarker":{"d":"M 0 0 0 0"}},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"1eaf6c3a-520f-41c7-9ac7-7008c5cc3e44"},"target":{"id":"8167630c-8740-4bdc-bae2-2b85127eec04"},"id":"10230441-e15f-4202-b37c-6aed52911f23","z":112,"labels":[],"vertices":[{"x":640,"y":460.5}],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2,"targetMarker":{"d":"M 0 0 0 0"}},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":468,"y":607},"size":{"width":90,"height":54},"angle":0,"id":"d08f5ece-f171-4bbe-a7ee-ffd4b262ad92","z":115,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Primary\\ncontact\\nconfirms fire\\nincident","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":468,"y":691},"size":{"width":90,"height":54},"angle":0,"id":"2c44a2f3-ab10-49c7-9ff2-74b74ef55253","z":116,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Service\\nProvider\\ncontacts Fire\\nDepartment","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":468,"y":775},"size":{"width":90,"height":54},"angle":0,"id":"3d91727c-6b73-4ee7-b74a-dbba705654a8","z":117,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Fire Engines\\narrives","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":468,"y":859},"size":{"width":90,"height":54},"angle":0,"id":"1a9926a7-7dc6-47ba-bfce-6c1c77b709f6","z":118,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":10,"fill":"#31d0c6","text":"Crisis\\nManagement\\nTeam Leader\\nbriefs\\nBattalion Chief","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":243,"y":802},"size":{"width":90,"height":54},"angle":0,"id":"0a0a1a4d-b66c-4e8e-a1cc-5fe9fd62a7e3","z":119,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Crisis\\nManagement\\nTeam directs\\nfuture actions","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":243,"y":718},"size":{"width":90,"height":54},"angle":0,"id":"803a2245-1f1c-48e0-93c5-ea9326d5012c","z":120,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Fire Department\\ngives All-Clear\\nsignal","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":243,"y":635},"size":{"width":90,"height":54},"angle":0,"id":"ad56b0f5-490d-4991-adc7-4141c210e368","z":121,"attrs":{"body":{"stroke":"#31d0c6","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#31d0c6","text":"Fire Department\\nbecomes Incident\\nCommander","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":595,"y":563},"size":{"width":90,"height":54},"angle":0,"id":"d4981a4a-d934-4ce5-9db4-13fe98e28a86","z":122,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#8f8f8f","text":"Primary\\ncontact\\ncontacts Fire\\nDepartment","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":595,"y":647},"size":{"width":90,"height":54},"angle":0,"id":"81010a6e-d5de-4b96-b665-f45bc2aa7ba9","z":123,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#8f8f8f","text":"Primary contact\\ninforms\\nEmergency\\nResponse Team","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":595,"y":731},"size":{"width":90,"height":54},"angle":0,"id":"878b7e3d-5079-4277-992c-4c0a7c39d3e8","z":124,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":10,"fill":"#8f8f8f","text":"Emergency\\nResponse\\nTeam informs\\nCrisis\\nManagement Team","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":786,"y":381},"size":{"width":90,"height":54},"angle":0,"id":"c850d5e9-95e2-4d90-a4ed-934a693a98cf","z":125,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#8f8f8f","text":"Evacuees report\\nto Gathering\\nPoint / Safe Area","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":786,"y":465},"size":{"width":90,"height":54},"angle":0,"id":"832f2c60-da26-4fff-8db4-5ea087bbeef7","z":126,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":12,"fill":"#8f8f8f","text":"Roll call taken by\\nteam leads","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"standard.Rectangle","position":{"x":786,"y":549},"size":{"width":90,"height":54},"angle":0,"id":"df93397c-c309-4ebe-9a33-51d51ea5b4fd","z":127,"attrs":{"body":{"stroke":"#8f8f8f","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":10,"fill":"#8f8f8f","text":"Floor Marshals\\nbrief Crisis\\nManagement\\nTeam using floor\\nplans","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"0619ff3d-7bb1-4d5f-94e3-2b359b545077"},"target":{"id":"c850d5e9-95e2-4d90-a4ed-934a693a98cf"},"id":"ee81ac0d-f8de-420b-8ac0-8b9df5ee279b","z":128,"vertices":[{"x":831,"y":275}],"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"c850d5e9-95e2-4d90-a4ed-934a693a98cf"},"target":{"id":"832f2c60-da26-4fff-8db4-5ea087bbeef7"},"id":"3e742db6-c6f5-412f-b9ff-0b93a371145f","z":129,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"832f2c60-da26-4fff-8db4-5ea087bbeef7"},"target":{"id":"df93397c-c309-4ebe-9a33-51d51ea5b4fd"},"id":"5ffee384-4c12-4664-bd9b-0b6e62eb4498","z":130,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"df93397c-c309-4ebe-9a33-51d51ea5b4fd"},"target":{"id":"1a9926a7-7dc6-47ba-bfce-6c1c77b709f6"},"id":"c21b9ac0-f7c8-436e-a1a9-61611b7993cb","z":131,"labels":[],"vertices":[{"x":831,"y":886}],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"d4981a4a-d934-4ce5-9db4-13fe98e28a86"},"target":{"id":"81010a6e-d5de-4b96-b665-f45bc2aa7ba9"},"id":"fc83084d-8d59-43a4-8478-787b0a889a82","z":132,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"81010a6e-d5de-4b96-b665-f45bc2aa7ba9"},"target":{"id":"878b7e3d-5079-4277-992c-4c0a7c39d3e8"},"id":"0a11f6cb-95fd-4ef6-8d8c-fc7edf69f7d5","z":133,"labels":[],"attrs":{"line":{"stroke":"#8f8f8f","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"8167630c-8740-4bdc-bae2-2b85127eec04"},"target":{"id":"d4981a4a-d934-4ce5-9db4-13fe98e28a86"},"id":"63362a6d-8f77-47a7-a6a3-67c1769348b4","z":134,"labels":[],"vertices":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"1a9926a7-7dc6-47ba-bfce-6c1c77b709f6"},"target":{"id":"ad56b0f5-490d-4991-adc7-4141c210e368"},"id":"f8eb10ae-a4a3-4f82-aaeb-72eef7c87108","z":135,"labels":[],"vertices":[{"x":401,"y":886},{"x":401,"y":605},{"x":288,"y":605}],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"ad56b0f5-490d-4991-adc7-4141c210e368"},"target":{"id":"803a2245-1f1c-48e0-93c5-ea9326d5012c"},"id":"a901a6e9-3c1d-4029-ac52-0aa962b5904a","z":136,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"803a2245-1f1c-48e0-93c5-ea9326d5012c"},"target":{"id":"0a0a1a4d-b66c-4e8e-a1cc-5fe9fd62a7e3"},"id":"080e362f-019c-4c3c-a0f6-599689eb218d","z":137,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"d61f5f92-b2c1-46fb-8677-40426f2db2a8"},"target":{"id":"d08f5ece-f171-4bbe-a7ee-ffd4b262ad92"},"id":"c57b02c8-1e1c-4c64-8641-052814b248bf","z":138,"labels":[],"attrs":{"line":{"stroke":"#7c68fc","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"d08f5ece-f171-4bbe-a7ee-ffd4b262ad92"},"target":{"id":"2c44a2f3-ab10-49c7-9ff2-74b74ef55253"},"id":"71b59998-e319-4a93-b830-87f57850f8db","z":139,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"2c44a2f3-ab10-49c7-9ff2-74b74ef55253"},"target":{"id":"3d91727c-6b73-4ee7-b74a-dbba705654a8"},"id":"4153a528-afd7-4ced-80f3-d0d6205dcd18","z":140,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"rounded"},"source":{"id":"3d91727c-6b73-4ee7-b74a-dbba705654a8"},"target":{"id":"1a9926a7-7dc6-47ba-bfce-6c1c77b709f6"},"id":"88e395df-0004-4e67-9d50-dca0bce3ac77","z":141,"labels":[],"attrs":{"line":{"stroke":"#31d0c6","strokeWidth":2},".connection":{"stroke":"#222138"},".marker-target":{"fill":"#222138"},".marker-source":{"fill":"#222138"}}},{"type":"standard.Rectangle","position":{"x":100,"y":110},"size":{"width":230,"height":50},"angle":0,"id":"f7d17de6-0af5-4b03-836b-0d465e9a2285","z":142,"attrs":{"body":{"stroke":"transparent","fill":"transparent","rx":2,"ry":2,"width":50,"height":30,"strokeDasharray":"0"},"label":{"fontSize":24,"fill":"#4b4a67","text":"Emergency Procedure","fontFamily":"Roboto Condensed","fontWeight":"Normal","strokeWidth":0},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}}]}',
};


/***/ }),

/***/ 21776:
/*!********************************************************************!*\
  !*** ./src/app/core/components/controller/controller.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerComponent": () => (/* binding */ ControllerComponent)
/* harmony export */ });
/* harmony import */ var _services_stencil_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/stencil-service */ 39613);
/* harmony import */ var _services_toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/toolbar-service */ 41396);
/* harmony import */ var _services_inspector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/inspector-service */ 94258);
/* harmony import */ var _services_halo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/halo-service */ 1165);
/* harmony import */ var _services_keyboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/keyboard-service */ 60780);
/* harmony import */ var _services_kitchensink_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/kitchensink-service */ 68684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title/title.component */ 49738);
/* harmony import */ var _filename_filename_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filename/filename.component */ 42673);
// import { dia, ui, shapes } from '@clientio/rappid';









// import { ThemePicker } from './theme-picker';
// import * as $ from 'backbone';
class ControllerComponent {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.rappid = new _services_kitchensink_service__WEBPACK_IMPORTED_MODULE_5__["default"](this.element.nativeElement, new _services_stencil_service__WEBPACK_IMPORTED_MODULE_0__.StencilService(), new _services_toolbar_service__WEBPACK_IMPORTED_MODULE_1__.ToolbarService(), new _services_inspector_service__WEBPACK_IMPORTED_MODULE_2__.InspectorService(), new _services_halo_service__WEBPACK_IMPORTED_MODULE_3__.HaloService(), new _services_keyboard_service__WEBPACK_IMPORTED_MODULE_4__.KeyboardService());
        this.rappid.startRappid();
        // const themePicker = new ThemePicker({ mainView: this.rappid });
        // themePicker.render().$el.appendTo(document.body);
        // console.log(sampleGraphs.emergencyProcedure)
        // this.rappid.graph.fromJSON(JSON.parse(sampleGraphs.emergencyProcedure)); // default graph
    }
}
ControllerComponent.ɵfac = function ControllerComponent_Factory(t) { return new (t || ControllerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef)); };
ControllerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ControllerComponent, selectors: [["app-controller"]], decls: 12, vars: 0, consts: [[1, "controller-container"], [1, "joint-app", "joint-theme-modern"], [1, "app-header"], [1, "app-title"], [1, "toolbar-container"], [1, "app-body"], [1, "stencil-container"], [1, "paper-container"], [1, "inspector-container"], [1, "navigator-container"]], template: function ControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-title")(5, "app-filename");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();


/***/ }),

/***/ 42673:
/*!***************************************************************************!*\
  !*** ./src/app/core/components/controller/filename/filename.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilenameComponent": () => (/* binding */ FilenameComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_filename_filename_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/filename/filename.actions */ 835);
/* harmony import */ var src_app_state_filename_filename_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/filename/filename.selectors */ 371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






class FilenameComponent {
  constructor(store) {
    this.store = store;
    this.filename$ = store.select(src_app_state_filename_filename_selectors__WEBPACK_IMPORTED_MODULE_1__.fileNameSelector);
  }

  ngOnInit() {}

  change() {
    if (this.title) {
      this.store.dispatch((0,src_app_state_filename_filename_actions__WEBPACK_IMPORTED_MODULE_0__.change)({
        newFileName: this.title
      }));
      document.activeElement.blur();
    } else {
      alert('please fill in the filename');
    }
  }

}

FilenameComponent.ɵfac = function FilenameComponent_Factory(t) {
  return new (t || FilenameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

FilenameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilenameComponent,
  selectors: [["app-filename"]],
  decls: 4,
  vars: 4,
  consts: [[1, "body"], ["type", "text", 1, "form_field", 3, "ngModel", "ngModelChange", "click", "keyup.enter"]],
  template: function FilenameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FilenameComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.title = $event;
      })("click", function FilenameComponent_Template_input_click_1_listener($event) {
        return $event.target.select();
      })("keyup.enter", function FilenameComponent_Template_input_keyup_enter_1_listener() {
        return ctx.change();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.filename$), "\n");
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".form_field[_ngcontent-%COMP%] {\n  font-family: \"Cairo\", sans-serif;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid gray;\n  outline: 0;\n  font-size: 1.3rem;\n  text-align: center;\n  color: black;\n  padding: 7px 0;\n  background: transparent;\n  background-color: #be9074;\n  transition: border-color 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVuYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUNGIiwiZmlsZSI6ImZpbGVuYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1fZmllbGQge1xuICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNiZTkwNzQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xufVxuIl19 */"]
});

/***/ }),

/***/ 68828:
/*!***********************************************************************************!*\
  !*** ./src/app/core/components/controller/services/file-name-for-save.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileNameForSaveService": () => (/* binding */ FileNameForSaveService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FileNameForSaveService {
    constructor() {
        this.titleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("myTitle");
        this.currentTitle = this.titleSource.asObservable();
    }
    changeTitle(newTitle) {
        this.titleSource.next(newTitle);
    }
}
FileNameForSaveService.ɵfac = function FileNameForSaveService_Factory(t) { return new (t || FileNameForSaveService)(); };
FileNameForSaveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileNameForSaveService, factory: FileNameForSaveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1165:
/*!*********************************************************************!*\
  !*** ./src/app/core/components/controller/services/halo-service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HaloService": () => (/* binding */ HaloService)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);

const Position = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Halo.HandlePosition;
class HaloService {
    create(cellView) {
        new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Halo({
            cellView,
            handles: this.getHaloConfig(),
            useModelGeometry: true
        }).render();
    }
    getHaloConfig() {
        return [
            {
                name: 'remove',
                position: Position.NW,
                events: { pointerdown: 'removeElement' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click to remove the object',
                        'data-tooltip-position': 'right',
                        'data-tooltip-padding': 15
                    }
                }
            },
            {
                name: 'fork',
                position: Position.NE,
                events: { pointerdown: 'startForking', pointermove: 'doFork', pointerup: 'stopForking' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click and drag to clone and connect the object in one go',
                        'data-tooltip-position': 'left',
                        'data-tooltip-padding': 15
                    }
                }
            },
            {
                name: 'clone',
                position: Position.SE,
                events: { pointerdown: 'startCloning', pointermove: 'doClone', pointerup: 'stopCloning' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click and drag to clone the object',
                        'data-tooltip-position': 'left',
                        'data-tooltip-padding': 15
                    }
                }
            },
            {
                name: 'unlink',
                position: Position.W,
                events: { pointerdown: 'unlinkElement' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click to break all connections to other objects',
                        'data-tooltip-position': 'right',
                        'data-tooltip-padding': 15
                    }
                }
            },
            {
                name: 'link',
                position: Position.E,
                events: { pointerdown: 'startLinking', pointermove: 'doLink', pointerup: 'stopLinking' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click and drag to connect the object',
                        'data-tooltip-position': 'left',
                        'data-tooltip-padding': 15
                    }
                }
            },
            {
                name: 'rotate',
                position: Position.SW,
                events: { pointerdown: 'startRotating', pointermove: 'doRotate', pointerup: 'stopBatch' },
                attrs: {
                    '.handle': {
                        'data-tooltip-class-name': 'small',
                        'data-tooltip': 'Click and drag to rotate the object',
                        'data-tooltip-position': 'right',
                        'data-tooltip-padding': 15
                    }
                }
            }
        ];
    }
}


/***/ }),

/***/ 94258:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/controller/services/inspector-service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectorService": () => (/* binding */ InspectorService)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);

class InspectorService {
    create(cell) {
        const { groups, inputs } = this.getInspectorConfig()[cell.get('type')];
        return _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Inspector.create('.inspector-container', { cell, groups, inputs });
    }
    getInspectorConfig() {
        const options = {
            colorPalette: [
                { content: 'transparent', icon: '/assets/images/controller/transparent-icon.svg' },
                { content: '#f6f6f6' },
                { content: '#dcd7d7' },
                { content: '#8f8f8f' },
                { content: '#c6c7e2' },
                { content: '#feb663' },
                { content: '#fe854f' },
                { content: '#b75d32' },
                { content: '#31d0c6' },
                { content: '#7c68fc' },
                { content: '#61549c' },
                { content: '#6a6c8a' },
                { content: '#4b4a67' },
                { content: '#3c4260' },
                { content: '#33334e' },
                { content: '#222138' }
            ],
            colorPaletteReset: [
                { content: undefined, icon: '/assets/images/controller/no-color-icon.svg' },
                { content: '#f6f6f6' },
                { content: '#dcd7d7' },
                { content: '#8f8f8f' },
                { content: '#c6c7e2' },
                { content: '#feb663' },
                { content: '#fe854f' },
                { content: '#b75d32' },
                { content: '#31d0c6' },
                { content: '#7c68fc' },
                { content: '#61549c' },
                { content: '#6a6c8a' },
                { content: '#4b4a67' },
                { content: '#3c4260' },
                { content: '#33334e' },
                { content: '#222138' }
            ],
            fontWeight: [
                { value: '300', content: '<span style="font-weight: 300">Light</span>' },
                { value: 'Normal', content: '<span style="font-weight: Normal">Normal</span>' },
                { value: 'Bold', content: '<span style="font-weight: Bolder">Bold</span>' }
            ],
            fontFamily: [
                { value: 'Alegreya Sans', content: '<span style="font-family: Alegreya Sans">Alegreya Sans</span>' },
                { value: 'Averia Libre', content: '<span style="font-family: Averia Libre">Averia Libre</span>' },
                { value: 'Roboto Condensed', content: '<span style="font-family: Roboto Condensed">Roboto Condensed</span>' }
            ],
            strokeStyle: [
                { value: '0', content: 'Solid' },
                { value: '2,5', content: 'Dotted' },
                { value: '10,5', content: 'Dashed' }
            ],
            side: [
                { value: 'top', content: 'Top Side' },
                { value: 'right', content: 'Right Side' },
                { value: 'bottom', content: 'Bottom Side' },
                { value: 'left', content: 'Left Side' }
            ],
            portLabelPositionRectangle: [
                { value: { name: 'top', args: { y: -12 } }, content: 'Above' },
                { value: { name: 'right', args: { y: 0 } }, content: 'On Right' },
                { value: { name: 'bottom', args: { y: 12 } }, content: 'Below' },
                { value: { name: 'left', args: { y: 0 } }, content: 'On Left' }
            ],
            portLabelPositionEllipse: [
                { value: 'radial', content: 'Horizontal' },
                { value: 'radialOriented', content: 'Angled' }
            ],
            imageIcons: [
                { value: '/assets/images/collection/resource/default/image-icon1.svg', content: '<img height="42px" src="assets/images/collection/resource/default/image-icon1.svg"/>' },
                { value: '/assets/images/collection/resource/default/image-icon2.svg', content: '<img height="80px" src="assets/images/collection/resource/default/image-icon2.svg"/>' },
                { value: '/assets/images/collection/resource/default/image-icon3.svg', content: '<img height="80px" src="assets/images/collection/resource/default/image-icon3.svg"/>' },
                { value: '/assets/images/collection/resource/default/image-icon4.svg', content: '<img height="80px" src="assets/images/collection/resource/default/image-icon4.svg"/>' }
            ],
            imageGender: [
                { value: '/assets/images/controller/member-male.png', content: '<img height="50px" src="assets/images/controller/member-male.png" style="margin: 5px 0 0 2px;"/>' },
                { value: '/assets/images/controller/member-female.png', content: '<img height="50px" src="assets/images/controller/member-female.png" style="margin: 5px 0 0 2px;"/>' }
            ],
            arrowheadSize: [
                { value: 'M 0 0 0 0', content: 'None' },
                { value: 'M 0 -3 -6 0 0 3 z', content: 'Small' },
                { value: 'M 0 -5 -10 0 0 5 z', content: 'Medium' },
                { value: 'M 0 -10 -15 0 0 10 z', content: 'Large' },
            ],
            strokeWidth: [
                { value: 1, content: '<div style="background:#fff;width:2px;height:30px;margin:0 14px;border-radius: 2px;"/>' },
                { value: 2, content: '<div style="background:#fff;width:4px;height:30px;margin:0 13px;border-radius: 2px;"/>' },
                { value: 4, content: '<div style="background:#fff;width:8px;height:30px;margin:0 11px;border-radius: 2px;"/>' },
                { value: 8, content: '<div style="background:#fff;width:16px;height:30px;margin:0 8px;border-radius: 2px;"/>' }
            ],
            router: [
                { value: 'normal', content: '<p style="background:#fff;width:2px;height:30px;margin:0 14px;border-radius: 2px;"/>' },
                { value: 'orthogonal', content: '<p style="width:20px;height:30px;margin:0 5px;border-bottom: 2px solid #fff;border-left: 2px solid #fff;"/>' },
                { value: 'oneSide', content: '<p style="width:20px;height:30px;margin:0 5px;border: 2px solid #fff;border-top: none;"/>' }
            ],
            connector: [
                { value: 'normal', content: '<p style="width:20px;height:20px;margin:5px;border-top:2px solid #fff;border-left:2px solid #fff;"/>' },
                { value: 'rounded', content: '<p style="width:20px;height:20px;margin:5px;border-top-left-radius:30%;border-top:2px solid #fff;border-left:2px solid #fff;"/>' },
                { value: 'smooth', content: '<p style="width:20px;height:20px;margin:5px;border-top-left-radius:100%;border-top:2px solid #fff;border-left:2px solid #fff;"/>' }
            ],
            labelPosition: [
                { value: 30, content: 'Close to source' },
                { value: 0.5, content: 'In the middle' },
                { value: -30, content: 'Close to target' },
            ],
            portMarkup: [{
                    value: [{
                            tagName: 'rect',
                            selector: 'portBody',
                            attributes: {
                                'width': 20,
                                'height': 20,
                                'x': -10,
                                'y': -10
                            }
                        }],
                    content: 'Rectangle'
                }, {
                    value: [{
                            tagName: 'circle',
                            selector: 'portBody',
                            attributes: {
                                'r': 10
                            }
                        }],
                    content: 'Circle'
                }, {
                    value: [{
                            tagName: 'path',
                            selector: 'portBody',
                            attributes: {
                                'd': 'M -10 -10 10 -10 0 10 z'
                            }
                        }],
                    content: 'Triangle'
                }]
        };
        return {
            'app.Link': {
                inputs: {
                    attrs: {
                        line: {
                            strokeWidth: {
                                type: 'select-button-group',
                                options: options.strokeWidth,
                                group: 'connection',
                                label: 'Link thickness',
                                when: { ne: { 'attrs/line/stroke': 'transparent' } },
                                index: 4
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                group: 'connection',
                                label: 'Link style',
                                when: { ne: { 'attrs/line/stroke': 'transparent' } },
                                index: 5
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                group: 'connection',
                                label: 'Color',
                                index: 6
                            },
                            sourceMarker: {
                                d: {
                                    type: 'select-box',
                                    options: options.arrowheadSize,
                                    group: 'marker-source',
                                    label: 'Source arrowhead',
                                    index: 1
                                },
                                fill: {
                                    type: 'color-palette',
                                    options: options.colorPaletteReset,
                                    group: 'marker-source',
                                    label: 'Color',
                                    when: { ne: { 'attrs/line/sourceMarker/d': 'M 0 0 0 0' } },
                                    index: 2
                                }
                            },
                            targetMarker: {
                                d: {
                                    type: 'select-box',
                                    options: options.arrowheadSize,
                                    group: 'marker-target',
                                    label: 'Target arrowhead',
                                    index: 1
                                },
                                fill: {
                                    type: 'color-palette',
                                    options: options.colorPaletteReset,
                                    group: 'marker-target',
                                    label: 'Color',
                                    when: { ne: { 'attrs/line/targetMarker/d': 'M 0 0 0 0' } },
                                    index: 2
                                }
                            }
                        }
                    },
                    router: {
                        name: {
                            type: 'select-button-group',
                            options: options.router,
                            group: 'connection',
                            label: 'Connection type',
                            index: 1
                        },
                        args: {
                            side: {
                                type: 'select-box',
                                options: options.side,
                                placeholder: 'Pick a side',
                                group: 'connection',
                                label: 'Anchors side',
                                when: { eq: { 'router/name': 'oneSide' }, otherwise: { unset: true } },
                                index: 2
                            }
                        }
                    },
                    connector: {
                        name: {
                            type: 'select-button-group',
                            options: options.connector,
                            group: 'connection',
                            label: 'Connection style',
                            index: 3
                        }
                    },
                    labels: {
                        type: 'list',
                        group: 'labels',
                        label: 'Labels',
                        attrs: {
                            label: {
                                'data-tooltip': 'Set (possibly multiple) labels for the link',
                                'data-tooltip-position': 'right',
                                'data-tooltip-position-selector': '.joint-inspector'
                            }
                        },
                        item: {
                            type: 'object',
                            properties: {
                                attrs: {
                                    text: {
                                        text: {
                                            type: 'content-editable',
                                            label: 'text',
                                            defaultValue: 'label',
                                            index: 1,
                                            attrs: {
                                                label: {
                                                    'data-tooltip': 'Set text of the label',
                                                    'data-tooltip-position': 'right',
                                                    'data-tooltip-position-selector': '.joint-inspector'
                                                }
                                            }
                                        },
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPaletteReset,
                                            label: 'Text Color',
                                            index: 5
                                        }
                                    },
                                    rect: {
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPaletteReset,
                                            label: 'Fill',
                                            index: 3
                                        },
                                        stroke: {
                                            type: 'color-palette',
                                            options: options.colorPaletteReset,
                                            label: 'Outline',
                                            index: 4
                                        }
                                    }
                                },
                                position: {
                                    type: 'select-box',
                                    options: options.labelPosition || [],
                                    defaultValue: 0.5,
                                    label: 'Position',
                                    placeholder: 'Custom',
                                    index: 2,
                                    attrs: {
                                        label: {
                                            'data-tooltip': 'Position the label relative to the source of the link',
                                            'data-tooltip-position': 'right',
                                            'data-tooltip-position-selector': '.joint-inspector'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                groups: {
                    connection: {
                        label: 'Connection',
                        index: 1
                    },
                    'marker-source': {
                        label: 'Source marker',
                        index: 2
                    },
                    'marker-target': {
                        label: 'Target marker',
                        index: 3
                    },
                    labels: {
                        label: 'Labels',
                        index: 4
                    }
                }
            },
            'standard.Rectangle': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'standard.Ellipse': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'standard.Polygon': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'standard.Cylinder': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        top: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'top',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'top',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'top',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'top',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    top: {
                        label: 'Top',
                        index: 2
                    },
                    text: {
                        label: 'Text',
                        index: 3
                    }
                }
            },
            'standard.Image': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        image: {
                            xlinkHref: {
                                type: 'select-box',
                                options: options.imageIcons,
                                label: 'Image',
                                group: 'presentation',
                                index: 1
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'standard.InscribedImage': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        image: {
                            xlinkHref: {
                                type: 'select-box',
                                options: options.imageIcons,
                                label: 'Image',
                                group: 'presentation',
                                index: 1
                            }
                        },
                        background: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 2
                            }
                        },
                        border: {
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 3
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 10,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/border/stroke': 'transparent' } },
                                index: 4
                            }
                        }
                    },
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'standard.EmbeddedImage': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        image: {
                            xlinkHref: {
                                type: 'select-box',
                                options: options.imageIcons,
                                label: 'Image',
                                group: 'image',
                                index: 1
                            }
                        }
                    }
                },
                groups: {
                    image: {
                        label: 'image',
                        index: 1
                    },
                    presentation: {
                        label: 'Presentation',
                        index: 2
                    },
                    text: {
                        label: 'Text',
                        index: 3
                    }
                }
            },
            'standard.HeaderedRectangle': {
                inputs: {
                    attrs: {
                        bodyText: {
                            textWrap: {
                                text: {
                                    type: 'content-editable',
                                    label: 'Wrapped text',
                                    group: 'text',
                                    index: 1
                                }
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/bodyText/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/bodyText/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/bodyText/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/boduText/text': '' } },
                                index: 5
                            }
                        },
                        headerText: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'headerText',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'headerText',
                                when: { ne: { 'attrs/headerText/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'headerText',
                                when: { ne: { 'attrs/headerText/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'headerText',
                                when: { ne: { 'attrs/headerText/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'headerText',
                                when: { ne: { 'attrs/headerText/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        header: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'header',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'header',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'header',
                                when: { ne: { 'attrs/header/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'header',
                                when: {
                                    and: [
                                        { ne: { 'attrs/header/stroke': 'transparent' } },
                                        { ne: { 'attrs/header/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    },
                    header: {
                        label: 'Header',
                        index: 3
                    },
                    headerText: {
                        label: 'Header Text',
                        index: 4
                    }
                }
            },
            'app.RectangularModel': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    },
                    ports: {
                        items: {
                            group: 'ports',
                            type: 'list',
                            label: 'Ports',
                            item: {
                                type: 'object',
                                properties: {
                                    group: {
                                        type: 'select-button-group',
                                        label: 'Group',
                                        defaultValue: 'out',
                                        options: [
                                            { value: 'in', content: 'IN' },
                                            { value: 'out', content: 'OUT' }
                                        ]
                                    },
                                    attrs: {
                                        portLabel: {
                                            text: { type: 'text', label: 'Label' }
                                        },
                                        portBody: {
                                            fill: {
                                                type: 'color-palette',
                                                options: options.colorPaletteReset,
                                                label: 'Override Group Fill',
                                                index: 1
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        groups: {
                            'in': {
                                attrs: {
                                    portBody: {
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPalette,
                                            label: 'Fill',
                                            when: { not: { equal: { inPorts: [] } } },
                                            group: 'inPorts',
                                            index: 1
                                        }
                                    }
                                },
                                position: {
                                    name: {
                                        type: 'select-box',
                                        options: options.side,
                                        label: 'Position',
                                        when: { not: { equal: { inPorts: [] } } },
                                        group: 'inPorts',
                                        index: 3
                                    }
                                },
                                label: {
                                    position: {
                                        type: 'select-box',
                                        options: options.portLabelPositionRectangle,
                                        label: 'Text Position',
                                        when: { not: { equal: { inPorts: [] } } },
                                        group: 'inPorts',
                                        index: 4
                                    }
                                },
                                markup: {
                                    type: 'select-box',
                                    options: options.portMarkup,
                                    label: 'Port Shape',
                                    group: 'inPorts',
                                    index: 5,
                                    overwrite: true
                                }
                            },
                            'out': {
                                attrs: {
                                    portBody: {
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPalette,
                                            label: 'Fill',
                                            when: { not: { equal: { outPorts: [] } } },
                                            group: 'outPorts',
                                            index: 2
                                        }
                                    }
                                },
                                position: {
                                    name: {
                                        type: 'select-box',
                                        options: options.side,
                                        label: 'Position',
                                        when: { not: { equal: { outPorts: [] } } },
                                        group: 'outPorts',
                                        index: 4
                                    }
                                },
                                label: {
                                    position: {
                                        type: 'select-box',
                                        options: options.portLabelPositionRectangle,
                                        label: 'Text Position',
                                        when: { not: { equal: { outPorts: [] } } },
                                        group: 'outPorts',
                                        index: 5
                                    }
                                },
                                markup: {
                                    type: 'select-box',
                                    options: options.portMarkup,
                                    label: 'Port Shape',
                                    group: 'outPorts',
                                    index: 6,
                                    overwrite: true
                                }
                            }
                        }
                    }
                },
                groups: {
                    inPorts: {
                        label: 'Input Ports Defaults',
                        index: 1
                    },
                    outPorts: {
                        label: 'Output Ports Defaults',
                        index: 2
                    },
                    ports: {
                        label: 'Ports',
                        index: 3
                    },
                    presentation: {
                        label: 'Presentation',
                        index: 4
                    },
                    text: {
                        label: 'Text',
                        index: 5
                    }
                }
            },
            'app.CircularModel': {
                inputs: {
                    attrs: {
                        label: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            fontSize: {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 2
                            },
                            fontFamily: {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 3
                            },
                            fontWeight: {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/label/text': '' } },
                                index: 5
                            }
                        },
                        body: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            strokeWidth: {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/body/stroke': 'transparent' } },
                                index: 3
                            },
                            strokeDasharray: {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/body/stroke': 'transparent' } },
                                        { ne: { 'attrs/body/strokeWidth': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    },
                    ports: {
                        items: {
                            group: 'ports',
                            type: 'list',
                            label: 'Ports',
                            item: {
                                type: 'object',
                                properties: {
                                    group: {
                                        type: 'select-button-group',
                                        label: 'Group',
                                        defaultValue: 'out',
                                        options: [
                                            { value: 'in', content: 'IN' },
                                            { value: 'out', content: 'OUT' }
                                        ]
                                    },
                                    attrs: {
                                        portLabel: {
                                            text: { type: 'text', label: 'Label' }
                                        },
                                        portBody: {
                                            fill: {
                                                type: 'color-palette',
                                                options: options.colorPaletteReset,
                                                label: 'Override Group Fill',
                                                index: 1
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        groups: {
                            'in': {
                                attrs: {
                                    portBody: {
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPalette,
                                            label: 'Fill',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'inPorts',
                                            index: 1
                                        }
                                    }
                                },
                                position: {
                                    args: {
                                        startAngle: {
                                            type: 'range',
                                            min: 0,
                                            max: 360,
                                            step: 1,
                                            defaultValue: 0,
                                            unit: '°',
                                            label: 'Position',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'inPorts',
                                            index: 3
                                        }
                                    }
                                },
                                label: {
                                    position: {
                                        name: {
                                            type: 'select-button-group',
                                            options: options.portLabelPositionEllipse,
                                            label: 'Text direction',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'inPorts',
                                            index: 4
                                        }
                                    }
                                },
                                markup: {
                                    type: 'select-box',
                                    options: options.portMarkup,
                                    label: 'Port Shape',
                                    group: 'inPorts',
                                    index: 5,
                                    overwrite: true
                                }
                            },
                            'out': {
                                attrs: {
                                    portBody: {
                                        fill: {
                                            type: 'color-palette',
                                            options: options.colorPalette,
                                            label: 'Fill',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'outPorts',
                                            index: 2
                                        }
                                    }
                                },
                                position: {
                                    args: {
                                        startAngle: {
                                            type: 'range',
                                            min: 0,
                                            max: 360,
                                            step: 1,
                                            defaultValue: 180,
                                            unit: '°',
                                            label: 'Position',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'outPorts',
                                            index: 4
                                        }
                                    }
                                },
                                label: {
                                    position: {
                                        name: {
                                            type: 'select-button-group',
                                            options: options.portLabelPositionEllipse,
                                            label: 'Text Position',
                                            when: { not: { equal: { 'ports/items': [] } } },
                                            group: 'outPorts',
                                            index: 5
                                        }
                                    }
                                },
                                markup: {
                                    type: 'select-box',
                                    options: options.portMarkup,
                                    label: 'Port Shape',
                                    group: 'outPorts',
                                    index: 6,
                                    overwrite: true
                                }
                            }
                        }
                    }
                },
                groups: {
                    inPorts: {
                        label: 'Input Ports Defaults',
                        index: 1
                    },
                    outPorts: {
                        label: 'Output Ports Defaults',
                        index: 2
                    },
                    ports: {
                        label: 'Ports',
                        index: 3
                    },
                    presentation: {
                        label: 'Presentation',
                        index: 4
                    },
                    text: {
                        label: 'Text',
                        index: 5
                    }
                }
            },
            'fsa.StartState': {
                inputs: {
                    attrs: {
                        circle: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    }
                }
            },
            'fsa.EndState': {
                inputs: {
                    attrs: {
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Inner fill',
                                group: 'presentation',
                                index: 2
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'fsa.State': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        circle: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/circle/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/circle/stroke': 'transparent' } },
                                        { ne: { 'attrs/circle/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'pn.Place': {
                inputs: {
                    attrs: {
                        '.label': {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 5
                            }
                        },
                        '.root': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.root/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.root/stroke': 'transparent' } },
                                        { ne: { 'attrs/.root/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    },
                    tokens: {
                        type: 'number',
                        min: 1,
                        max: 500,
                        group: 'data',
                        index: 1
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 2
                    },
                    text: {
                        label: 'Text',
                        index: 3
                    },
                    data: {
                        label: 'Data',
                        index: 1
                    }
                }
            },
            'pn.Transition': {
                inputs: {
                    attrs: {
                        '.label': {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/.label/text': '' } },
                                index: 5
                            }
                        },
                        rect: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/rect/stroke': 'transparent' } },
                                index: 2
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/rect/stroke': 'transparent' } },
                                        { ne: { 'attrs/rect/stroke-width': 0 } }
                                    ]
                                },
                                index: 3
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'erd.Entity': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'erd.WeakEntity': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'outer',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'outer',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'outer',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'outer',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'inner',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'inner',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'inner',
                                when: { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'inner',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                        { ne: { 'attrs/.inner/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    text: {
                        label: 'Text',
                        index: 1
                    },
                    outer: {
                        label: 'Outer rectangle',
                        index: 2
                    },
                    inner: {
                        label: 'Inner rectangle',
                        index: 3
                    }
                }
            },
            'erd.Relationship': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'erd.IdentifyingRelationship': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'outer',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'outer',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'outer',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'outer',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'inner',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'inner',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'inner',
                                when: { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'inner',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                        { ne: { 'attrs/.inner/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    text: {
                        label: 'Text',
                        index: 1
                    },
                    outer: {
                        label: 'Outer polygon',
                        index: 2
                    },
                    inner: {
                        label: 'Inner polygon',
                        index: 3
                    }
                }
            },
            'erd.Key': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'outer',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'outer',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'outer',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'outer',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'inner',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'inner',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'inner',
                                when: { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'inner',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                        { ne: { 'attrs/.inner/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    text: {
                        label: 'Text',
                        index: 1
                    },
                    outer: {
                        label: 'Outer ellipse',
                        index: 2
                    },
                    inner: {
                        label: 'Inner ellipse',
                        index: 3
                    }
                }
            },
            'erd.Normal': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'erd.Multivalued': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'outer',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'outer',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'outer',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'outer',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'inner',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'inner',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'inner',
                                when: { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'inner',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                        { ne: { 'attrs/.inner/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    text: {
                        label: 'Text',
                        index: 1
                    },
                    outer: {
                        label: 'Outer ellipse',
                        index: 2
                    },
                    inner: {
                        label: 'Inner ellipse',
                        index: 3
                    }
                }
            },
            'erd.Derived': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        '.outer': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'outer',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'outer',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'outer',
                                when: { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'outer',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.outer/stroke': 'transparent' } },
                                        { ne: { 'attrs/.outer/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        '.inner': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'inner',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'inner',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'inner',
                                when: { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'inner',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.inner/stroke': 'transparent' } },
                                        { ne: { 'attrs/.inner/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    text: {
                        label: 'Text',
                        index: 1
                    },
                    outer: {
                        label: 'Outer ellipse',
                        index: 2
                    },
                    inner: {
                        label: 'Inner ellipse',
                        index: 3
                    }
                }
            },
            'erd.ISA': {
                inputs: {
                    attrs: {
                        text: {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'text',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'attrs/text/text': '' } },
                                index: 5
                            }
                        },
                        polygon: {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/polygon/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/polygon/stroke': 'transparent' } },
                                        { ne: { 'attrs/polygon/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'Text',
                        index: 2
                    }
                }
            },
            'uml.Class': {
                inputs: {
                    attrs: {
                        '.uml-class-name-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'name',
                                index: 4
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'name',
                                index: 5
                            }
                        },
                        '.uml-class-attrs-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'attributes',
                                index: 4
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'attributes',
                                index: 5
                            }
                        },
                        '.uml-class-methods-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'methods',
                                index: 4
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'methods',
                                index: 5
                            }
                        }
                    },
                    name: {
                        type: 'text',
                        group: 'name',
                        index: 1,
                        label: 'Class name'
                    },
                    attributes: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'attributes',
                        index: 1,
                        label: 'Attributes'
                    },
                    methods: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'methods',
                        index: 1,
                        label: 'Methods'
                    }
                },
                groups: {
                    name: {
                        label: 'Class name',
                        index: 1
                    },
                    attributes: {
                        label: 'Attributes',
                        index: 2
                    },
                    methods: {
                        label: 'Methods',
                        index: 3
                    }
                }
            },
            'uml.Interface': {
                inputs: {
                    attrs: {
                        '.uml-class-name-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'name',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'name',
                                index: 2
                            }
                        },
                        '.uml-class-attrs-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'attributes',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'attributes',
                                index: 2
                            }
                        },
                        '.uml-class-methods-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'methods',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'methods',
                                index: 2
                            }
                        }
                    },
                    name: {
                        type: 'text',
                        group: 'name',
                        index: 0,
                        label: 'Interface name'
                    },
                    attributes: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'attributes',
                        index: 0,
                        label: 'Attributes'
                    },
                    methods: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'methods',
                        index: 0,
                        label: 'Methods'
                    }
                },
                groups: {
                    name: {
                        label: 'Interface name',
                        index: 1
                    },
                    attributes: {
                        label: 'Attributes',
                        index: 2
                    },
                    methods: {
                        label: 'Methods',
                        index: 3
                    }
                }
            },
            'uml.Abstract': {
                inputs: {
                    attrs: {
                        '.uml-class-name-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'name',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'name',
                                index: 2
                            }
                        },
                        '.uml-class-attrs-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'attributes',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'attributes',
                                index: 2
                            }
                        },
                        '.uml-class-methods-rect': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'methods',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'methods',
                                index: 2
                            }
                        }
                    },
                    name: {
                        type: 'text',
                        group: 'name',
                        index: 0,
                        label: 'Abstract class name'
                    },
                    attributes: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'attributes',
                        index: 0,
                        label: 'Attributes'
                    },
                    methods: {
                        type: 'list',
                        item: {
                            type: 'text'
                        },
                        group: 'methods',
                        index: 0,
                        label: 'Methods'
                    }
                },
                groups: {
                    name: {
                        label: 'Abstract class name',
                        index: 1
                    },
                    attributes: {
                        label: 'Attributes Text',
                        index: 2
                    },
                    methods: {
                        label: 'Methods Text',
                        index: 3
                    }
                }
            },
            'uml.State': {
                inputs: {
                    name: {
                        group: 'text',
                        index: 1,
                        type: 'text'
                    },
                    events: {
                        group: 'events',
                        index: 1,
                        type: 'list',
                        item: {
                            type: 'text'
                        }
                    },
                    attrs: {
                        '.uml-state-name': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'text',
                                when: { ne: { 'name': '' } },
                                index: 5
                            }
                        },
                        '.uml-state-body': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.uml-state-body/stroke': 'transparent' } },
                                index: 4
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.uml-state-body/stroke': 'transparent' } },
                                        { ne: { 'attrs/.uml-state-body/stroke-width': 0 } }
                                    ]
                                },
                                index: 5
                            }
                        },
                        '.uml-state-separator': {
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Horizontal rule outline',
                                group: 'presentation',
                                index: 3
                            }
                        },
                        '.uml-state-events': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'events',
                                when: { ne: { 'events': 0 } },
                                index: 5
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 1
                    },
                    text: {
                        label: 'State name text',
                        index: 2
                    },
                    events: {
                        label: 'State events text',
                        index: 3
                    }
                }
            },
            'org.Member': {
                inputs: {
                    attrs: {
                        '.rank': {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'rank',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'rank',
                                when: { ne: { 'attrs/.rank/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'rank',
                                when: { ne: { 'attrs/.rank/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'rank',
                                when: { ne: { 'attrs/.rank/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'rank',
                                when: { ne: { 'attrs/.rank/text': '' } },
                                index: 5
                            }
                        },
                        '.name': {
                            text: {
                                type: 'content-editable',
                                label: 'Text',
                                group: 'name',
                                index: 1
                            },
                            'font-size': {
                                type: 'range',
                                min: 5,
                                max: 80,
                                unit: 'px',
                                label: 'Font size',
                                group: 'name',
                                when: { ne: { 'attrs/.name/text': '' } },
                                index: 2
                            },
                            'font-family': {
                                type: 'select-box',
                                options: options.fontFamily,
                                label: 'Font family',
                                group: 'name',
                                when: { ne: { 'attrs/.name/text': '' } },
                                index: 3
                            },
                            'font-weight': {
                                type: 'select-box',
                                options: options.fontWeight,
                                label: 'Font thickness',
                                group: 'name',
                                when: { ne: { 'attrs/.name/text': '' } },
                                index: 4
                            },
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'name',
                                when: { ne: { 'attrs/.name/text': '' } },
                                index: 5
                            }
                        },
                        '.card': {
                            fill: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Fill',
                                group: 'presentation',
                                index: 1
                            },
                            stroke: {
                                type: 'color-palette',
                                options: options.colorPalette,
                                label: 'Outline',
                                group: 'presentation',
                                index: 2
                            },
                            'stroke-width': {
                                type: 'range',
                                min: 0,
                                max: 30,
                                step: 1,
                                defaultValue: 1,
                                unit: 'px',
                                label: 'Outline thickness',
                                group: 'presentation',
                                when: { ne: { 'attrs/.card/stroke': 'transparent' } },
                                index: 3
                            },
                            'stroke-dasharray': {
                                type: 'select-box',
                                options: options.strokeStyle,
                                label: 'Outline style',
                                group: 'presentation',
                                when: {
                                    and: [
                                        { ne: { 'attrs/.card/stroke': 'transparent' } },
                                        { ne: { 'attrs/.card/stroke-width': 0 } }
                                    ]
                                },
                                index: 4
                            }
                        },
                        image: {
                            'xlink:href': {
                                type: 'select-button-group',
                                options: options.imageGender,
                                label: 'Gender',
                                group: 'gender',
                                index: 1
                            }
                        }
                    }
                },
                groups: {
                    presentation: {
                        label: 'Presentation',
                        index: 4
                    },
                    rank: {
                        label: 'Rank',
                        index: 2
                    },
                    name: {
                        label: 'Name',
                        index: 3
                    },
                    gender: {
                        label: 'Gender',
                        index: 1
                    }
                }
            }
        };
    }
}


/***/ }),

/***/ 60780:
/*!*************************************************************************!*\
  !*** ./src/app/core/components/controller/services/keyboard-service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardService": () => (/* binding */ KeyboardService)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


class KeyboardService {
    constructor() {
        this.keyboard = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Keyboard();
    }
    create(graph, clipboard, selection, paperScroller, commandManager) {
        this.keyboard.on({
            'ctrl+c': () => {
                // Copy all selected elements and their associated links.
                clipboard.copyElements(selection.collection, graph);
            },
            'ctrl+v': () => {
                const pastedCells = clipboard.pasteCells(graph, {
                    translate: { dx: 20, dy: 20 },
                    useLocalStorage: true
                });
                const elements = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(pastedCells, cell => cell.isElement());
                // Make sure pasted elements get selected immediately. This makes the UX better as
                // the user can immediately manipulate the pasted elements.
                selection.collection.reset(elements);
            },
            'ctrl+x shift+delete': () => {
                clipboard.cutElements(selection.collection, graph);
            },
            'delete backspace': (evt) => {
                evt.preventDefault();
                graph.removeCells(selection.collection.toArray());
            },
            'ctrl+z': () => {
                commandManager.undo();
                selection.cancelSelection();
            },
            'ctrl+y': () => {
                commandManager.redo();
                selection.cancelSelection();
            },
            'ctrl+a': () => {
                selection.collection.reset(graph.getElements());
            },
            'ctrl+plus': (evt) => {
                evt.preventDefault();
                paperScroller.zoom(0.2, { max: 5, grid: 0.2 });
            },
            'ctrl+minus': (evt) => {
                evt.preventDefault();
                paperScroller.zoom(-0.2, { min: 0.2, grid: 0.2 });
            },
            'keydown:shift': (evt) => {
                paperScroller.setCursor('crosshair');
            },
            'keyup:shift': () => {
                paperScroller.setCursor('grab');
            }
        });
    }
}


/***/ }),

/***/ 68684:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/controller/services/kitchensink-service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dagre */ 60117);
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dagre__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shapes/app-shapes */ 54737);





class KitchenSinkService {
  constructor(el, stencilService, toolbarService, inspectorService, haloService, keyboardService) {
    // backwards compatibility for older shapes
    this.exportStylesheet = '.scalable * { vector-effect: non-scaling-stroke }';
    this.el = el; // apply current joint js theme

    const view = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.mvc.View({
      el
    });
    view.delegateEvents({
      'mouseup input[type="range"]': evt => evt.target.blur()
    });
    this.stencilService = stencilService;
    this.toolbarService = toolbarService;
    this.inspectorService = inspectorService;
    this.haloService = haloService;
    this.keyboardService = keyboardService;
  }

  startRappid() {
    _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.setTheme('modern');
    this.initializePaper();
    this.initializeStencil();
    this.initializeSelection(); // inspector not needed

    this.initializeToolsAndInspector();
    this.initializeNavigator();
    this.initializeToolbar();
    this.initializeKeyboardShortcuts(); // not needed

    this.initializeTooltips();
  }

  initializePaper() {
    const graph = this.graph = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.Graph({}, {
      cellNamespace: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__
    });
    this.commandManager = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.CommandManager({
      graph: graph
    });
    const paper = this.paper = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.Paper({
      width: 1000,
      height: 1000,
      gridSize: 10,
      drawGrid: true,
      model: graph,
      cellViewNamespace: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__,
      defaultLink: new _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__.app.Link(),
      defaultConnectionPoint: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__.app.Link.connectionPoint,
      interactive: {
        linkMove: false
      },
      async: true,
      sorting: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.Paper.sorting.APPROX
    });
    paper.on('blank:mousewheel', lodash__WEBPACK_IMPORTED_MODULE_2__.partial(this.onMousewheel, null), this);
    paper.on('cell:mousewheel', this.onMousewheel.bind(this));
    this.snaplines = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Snaplines({
      paper: paper
    });
    const paperScroller = this.paperScroller = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.PaperScroller({
      paper,
      autoResizePaper: true,
      scrollWhileDragging: true,
      cursor: 'all scroll'
    });
    this.renderPlugin('.paper-container', paperScroller);
    paperScroller.render().center();
  }

  initializeStencil() {
    const {
      stencilService,
      paperScroller,
      snaplines
    } = this;
    stencilService.create(paperScroller, snaplines);
    this.renderPlugin('.stencil-container', stencilService.stencil);
    stencilService.setShapes();
    stencilService.stencil.on('element:drop', elementView => {
      this.selection.collection.reset([elementView.model]);
    });
  }

  initializeSelection() {
    //Clipboard implements copy-pasting of cells.
    this.clipboard = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Clipboard(); // Selection implements elements selection, moving the selection in one go and manipulating the selection in terms of selecting/deselecting individual elements.

    this.selection = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Selection({
      paper: this.paper,
      useModelGeometry: true
    });
    this.selection.collection.on('reset add remove', this.onSelectionChange.bind(this));
    const keyboard = this.keyboardService.keyboard; // Initiate selecting when the user grabs the blank area of the paper while the Shift key is pressed.
    // Otherwise, initiate paper pan.

    this.paper.on('blank:pointerdown', (evt, x, y) => {
      if (keyboard.isActive('shift', evt)) {
        this.selection.startSelecting(evt);
      } else {
        this.selection.collection.reset([]);
        this.paperScroller.startPanning(evt);
        this.paper.removeTools();
      }
    });
    this.paper.on('element:pointerdown', (elementView, evt) => {
      // Select an element if CTRL/Meta key is pressed while the element is clicked.
      if (keyboard.isActive('ctrl meta', evt)) {
        this.selection.collection.add(elementView.model);
      }
    });
    this.graph.on('remove', cell => {
      // If element is removed from the graph, remove from the selection too.
      if (this.selection.collection.has(cell)) {
        this.selection.collection.reset(this.selection.collection.models.filter(c => c !== cell));
      }
    });
    this.selection.on('selection-box:pointerdown', (elementView, evt) => {
      // Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
      if (keyboard.isActive('ctrl meta', evt)) {
        this.selection.collection.remove(elementView.model);
      }
    }, this);
  }

  onSelectionChange() {
    const {
      paper,
      selection
    } = this;
    const {
      collection
    } = selection;
    paper.removeTools();
    _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Halo.clear(paper);
    _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.FreeTransform.clear(paper);
    _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Inspector.close();

    if (collection.length === 1) {
      const primaryCell = collection.first();
      const primaryCellView = paper.requireView(primaryCell);
      selection.destroySelectionBox(primaryCell);
      this.selectPrimaryCell(primaryCellView);
    } else if (collection.length === 2) {
      collection.each(function (cell) {
        selection.createSelectionBox(cell);
      });
    }
  }

  selectPrimaryCell(cellView) {
    const cell = cellView.model;

    if (cell.isElement()) {
      this.selectPrimaryElement(cellView);
    } else {
      this.selectPrimaryLink(cellView);
    }

    this.inspectorService.create(cell);
  }

  selectPrimaryElement(elementView) {
    const element = elementView.model;
    new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.FreeTransform({
      cellView: elementView,
      allowRotation: false,
      preserveAspectRatio: !!element.get('preserveAspectRatio'),
      allowOrthogonalResize: element.get('allowOrthogonalResize') !== false
    }).render();
    this.haloService.create(elementView);
  }

  selectPrimaryLink(linkView) {
    const ns = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.linkTools;
    const toolsView = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.ToolsView({
      name: 'link-pointerdown',
      tools: [new ns.Vertices(), new ns.SourceAnchor(), new ns.TargetAnchor(), new ns.SourceArrowhead(), new ns.TargetArrowhead(), new ns.Segments(), new ns.Boundary({
        padding: 15
      }), new ns.Remove({
        offset: -20,
        distance: 40
      })]
    });
    linkView.addTools(toolsView);
  }

  initializeToolsAndInspector() {
    this.paper.on('cell:pointerup', cellView => {
      const cell = cellView.model;
      const {
        collection
      } = this.selection;

      if (collection.includes(cell)) {
        return;
      }

      collection.reset([cell]);
    });
    this.paper.on('link:mouseenter', linkView => {
      // Open tool only if there is none yet
      if (linkView.hasTools()) {
        return;
      }

      const ns = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.linkTools;
      const toolsView = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.ToolsView({
        name: 'link-hover',
        tools: [new ns.Vertices({
          vertexAdding: false
        }), new ns.SourceArrowhead(), new ns.TargetArrowhead()]
      });
      linkView.addTools(toolsView);
    });
    this.paper.on('link:mouseleave', linkView => {
      // Remove only the hover tool, not the pointerdown tool
      if (linkView.hasTools('link-hover')) {
        linkView.removeTools();
      }
    });
    this.graph.on('change', (cell, opt) => {
      if (!cell.isLink() || !opt.inspector) {
        return;
      }

      const ns = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.linkTools;
      const toolsView = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.ToolsView({
        name: 'link-inspected',
        tools: [new ns.Boundary({
          padding: 15
        })]
      });
      cell.findView(this.paper).addTools(toolsView);
    });
  }

  initializeNavigator() {
    const navigator = this.navigator = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Navigator({
      width: 240,
      height: 115,
      paperScroller: this.paperScroller,
      zoom: false,
      paperOptions: {
        async: true,
        sorting: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.Paper.sorting.NONE,
        elementView: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__.NavigatorElementView,
        linkView: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_3__.NavigatorLinkView,
        cellViewNamespace: {
          /* no other views are accessible in the navigator */
        }
      }
    });
    this.renderPlugin('.navigator-container', navigator);
  }

  initializeToolbar() {
    this.toolbarService.create(this.commandManager, this.paperScroller);
    this.toolbarService.toolbar.on({
      'svg:pointerclick': this.openAsSVG.bind(this),
      'png:pointerclick': this.openAsPNG.bind(this),
      'to-front:pointerclick': this.applyOnSelection.bind(this, 'toFront'),
      'to-back:pointerclick': this.applyOnSelection.bind(this, 'toBack'),
      'layout:pointerclick': this.layoutDirectedGraph.bind(this),
      'snapline:change': this.changeSnapLines.bind(this),
      'clear:pointerclick': this.graph.clear.bind(this.graph),
      'print:pointerclick': this.paper.print.bind(this.paper),
      'grid-size:change': this.paper.setGridSize.bind(this.paper)
    });
    this.renderPlugin('.toolbar-container', this.toolbarService.toolbar);
  }

  applyOnSelection(method) {
    this.graph.startBatch('selection');
    this.selection.collection.models.forEach(function (model) {
      model[method]();
    });
    this.graph.stopBatch('selection');
  }

  changeSnapLines(checked) {
    if (checked) {
      this.snaplines.startListening();
      this.stencilService.stencil.options.snaplines = this.snaplines;
    } else {
      this.snaplines.stopListening();
      this.stencilService.stencil.options.snaplines = null;
    }
  }

  initializeKeyboardShortcuts() {
    this.keyboardService.create(this.graph, this.clipboard, this.selection, this.paperScroller, this.commandManager);
  }

  initializeTooltips() {
    return new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Tooltip({
      rootTarget: document.body,
      target: '[data-tooltip]',
      direction: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Tooltip.TooltipArrowPosition.Auto,
      padding: 10
    });
  }

  openAsSVG() {
    this.paper.hideTools().toSVG(svg => {
      new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Lightbox({
        image: 'data:image/svg+xml,' + encodeURIComponent(svg),
        downloadable: true,
        fileName: 'Rappid'
      }).open();
      this.paper.showTools();
    }, {
      preserveDimensions: true,
      convertImagesToDataUris: true,
      useComputedStyles: false,
      stylesheet: this.exportStylesheet
    });
  }

  openAsPNG() {
    this.paper.hideTools().toPNG(dataURL => {
      new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Lightbox({
        image: dataURL,
        downloadable: true,
        fileName: 'Rappid'
      }).open();
      this.paper.showTools();
    }, {
      padding: 10,
      useComputedStyles: false,
      stylesheet: this.exportStylesheet
    });
  }

  onMousewheel(cellView, evt, ox, oy, delta) {
    if (this.keyboardService.keyboard.isActive('alt', evt)) {
      evt.preventDefault();
      this.paperScroller.zoom(delta * 0.2, {
        min: 0.2,
        max: 5,
        grid: 0.2,
        ox,
        oy
      });
    }
  }

  layoutDirectedGraph() {
    _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.layout.DirectedGraph.layout(this.graph, {
      graphlib: dagre__WEBPACK_IMPORTED_MODULE_1__.graphlib,
      dagre: dagre__WEBPACK_IMPORTED_MODULE_1__,
      setVertices: true,
      rankDir: 'TB',
      marginX: 100,
      marginY: 100
    });
    this.paperScroller.centerContent({
      useModelGeometry: true
    });
  }

  renderPlugin(selector, plugin) {
    this.el.querySelector(selector).appendChild(plugin.el);
    plugin.render();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KitchenSinkService);

/***/ }),

/***/ 39613:
/*!************************************************************************!*\
  !*** ./src/app/core/components/controller/services/stencil-service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilService": () => (/* binding */ StencilService)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);
/* harmony import */ var _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shapes/app-shapes */ 54737);


class StencilService {
    create(paperScroller, snaplines) {
        this.stencil = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Stencil({
            paper: paperScroller,
            snaplines: snaplines,
            width: 240,
            groups: this.getStencilGroups(),
            dropAnimation: true,
            groupsToggleButtons: true,
            paperOptions: function () {
                return {
                    model: new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.Graph({}, {
                        cellNamespace: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_1__
                    }),
                    cellViewNamespace: _shapes_app_shapes__WEBPACK_IMPORTED_MODULE_1__
                };
            },
            search: {
                '*': ['type', 'attrs/text/text', 'attrs/root/dataTooltip', 'attrs/label/text'],
                'org.Member': ['attrs/.rank/text', 'attrs/root/dataTooltip', 'attrs/.name/text'],
                'logic.Member': ['attrs/.rank/text', 'attrs/root/dataTooltip', 'attrs/.name/text']
            },
            // Use default Grid Layout
            layout: true,
            // Remove tooltip definition from clone
            dragStartClone: (cell) => cell.clone().removeAttr('root/dataTooltip')
        });
    }
    setShapes() {
        this.stencil.load(this.getStencilShapes());
    }
    getStencilGroups() {
        return {
            standard: { index: 1, label: 'Standard shapes' },
            fsa: { index: 2, label: 'State machine' },
            pn: { index: 3, label: 'Petri nets' },
            // erd: { index: 4, label: 'Entity-relationship' },
            // uml: { index: 5, label: 'UML' },
            // org: { index: 6, label: 'ORG' },
            logic: { index: 7, label: 'logic' }
        };
    }
    getStencilShapes() {
        return {
            standard: [
                {
                    type: 'standard.Rectangle',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            rx: 2,
                            ry: 2,
                            width: 50,
                            height: 30,
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rect',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Ellipse',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Ellipse',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            width: 50,
                            height: 30,
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'ellipse',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'app.RectangularModel',
                    size: { width: 40, height: 30 },
                    allowOrthogonalResize: false,
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle with ports',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            rx: 2,
                            ry: 2,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rect',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    },
                    ports: {
                        items: [
                            { group: 'in' },
                            { group: 'in' },
                            { group: 'out' }
                        ]
                    }
                },
                {
                    type: 'app.CircularModel',
                    size: { width: 5, height: 3 },
                    allowOrthogonalResize: false,
                    attrs: {
                        root: {
                            dataTooltip: 'Ellipse with ports',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0',
                        },
                        label: {
                            text: 'ellipse',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    },
                    ports: {
                        items: [
                            { group: 'in' },
                            { group: 'in' },
                            { group: 'out' }
                        ]
                    }
                },
                {
                    type: 'standard.Polygon',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Rhombus',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            refPoints: '50,0 100,50 50,100 0,50',
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rhombus',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Cylinder',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Cylinder',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        top: {
                            fill: '#31d0c6',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'cylinder',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Image',
                    size: { width: 53, height: 42 },
                    attrs: {
                        root: {
                            dataTooltip: 'Image',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        image: {
                            xlinkHref: '/assets/images/collection/resource/default/image-icon1.svg'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'image',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            fill: '#c6c7e2'
                        }
                    }
                },
                {
                    type: 'standard.EmbeddedImage',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Card',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        image: {
                            xlinkHref: '/assets/images/collection/resource/default/image-icon1.svg'
                        },
                        label: {
                            text: 'card',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.InscribedImage',
                    size: { width: 1, height: 1 },
                    attrs: {
                        root: {
                            dataTooltip: 'Icon',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        border: {
                            stroke: '#31d0c6',
                            strokeWidth: 3,
                            strokeDasharray: '0'
                        },
                        background: {
                            fill: 'transparent'
                        },
                        image: {
                            xlinkHref: '/assets/images/collection/resource/default/image-icon1.svg'
                        },
                        label: {
                            text: 'icon',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.HeaderedRectangle',
                    size: { width: 5, height: 3 },
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle with header',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        header: {
                            stroke: '#31d0c6',
                            fill: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0',
                            height: 20
                        },
                        bodyText: {
                            textWrap: {
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie.',
                                width: -10,
                                height: -20,
                                ellipsis: true
                            },
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0,
                            refY2: 12,
                        },
                        headerText: {
                            text: 'header',
                            fill: '#f6f6f6',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0,
                            refY: 12
                        }
                    }
                }
            ],
            fsa: [
                {
                    type: 'fsa.StartState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'Start State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        text: {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.EndState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'End State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.inner': {
                            fill: '#6a6c8a',
                            stroke: 'transparent'
                        },
                        '.outer': {
                            fill: 'transparent',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'endState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.State',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            fill: '#6a6c8a',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'state',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                }
            ],
            pn: [
                {
                    type: 'pn.Place',
                    preserveAspectRatio: true,
                    tokens: 3,
                    attrs: {
                        root: {
                            dataTooltip: 'Place',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.root': {
                            fill: 'transparent',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        '.tokens circle': {
                            fill: '#6a6c8a',
                            stroke: '#000',
                            'stroke-width': 0
                        },
                        '.label': {
                            text: '',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal'
                        }
                    }
                },
                {
                    type: 'pn.Transition',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'Transition',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        rect: {
                            rx: 3,
                            ry: 3,
                            width: 12,
                            height: 50,
                            fill: '#61549c',
                            stroke: '#7c68fc',
                            'stroke-width': 0,
                            'stroke-dasharray': '0'
                        },
                        '.label': {
                            text: 'transition',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'stroke-width': 0,
                            'fill': '#222138'
                        }
                    }
                }
            ],
            // erd: [
            //     {
            //         type: 'erd.Entity',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Entity',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 rx: 3,
            //                 ry: 3,
            //                 fill: '#31d0c6',
            //                 'stroke-width': 2,
            //                 stroke: 'transparent',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Entity',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.WeakEntity',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Weak Entity',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: 'transparent',
            //                 stroke: '#feb663',
            //                 'stroke-width': 2,
            //                 points: '100,0 100,60 0,60 0,0',
            //                 'stroke-dasharray': '0'
            //             },
            //             '.inner': {
            //                 fill: '#feb663',
            //                 stroke: 'transparent',
            //                 points: '97,5 97,55 3,55 3,5',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Weak entity',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.Relationship',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Relationship',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: '#61549c',
            //                 stroke: 'transparent',
            //                 'stroke-width': 2,
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Relation',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.IdentifyingRelationship',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Identifying Relationship',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: 'transparent',
            //                 stroke: '#6a6c8a',
            //                 'stroke-dasharray': '0'
            //             },
            //             '.inner': {
            //                 fill: '#6a6c8a',
            //                 stroke: 'transparent',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Relation',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.ISA',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'ISA',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             text: {
            //                 text: 'ISA',
            //                 fill: '#f6f6f6',
            //                 'letter-spacing': 0,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 'font-size': 11
            //             },
            //             polygon: {
            //                 fill: '#feb663',
            //                 stroke: 'transparent',
            //                 'stroke-dasharray': '0'
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.Key',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Key',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: 'transparent',
            //                 stroke: '#fe854f',
            //                 'stroke-dasharray': '0'
            //             },
            //             '.inner': {
            //                 fill: '#fe854f',
            //                 stroke: 'transparent',
            //                 display: 'block',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Key',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.Normal',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Normal',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: '#feb663',
            //                 stroke: 'transparent',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Normal',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.Multivalued',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Mutltivalued',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: 'transparent',
            //                 stroke: '#fe854f',
            //                 'stroke-dasharray': '0'
            //             },
            //             '.inner': {
            //                 fill: '#fe854f',
            //                 stroke: 'transparent',
            //                 rx: 43,
            //                 ry: 21,
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'MultiValued',
            //                 'font-size': 11,
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 fill: '#f6f6f6',
            //                 'stroke-width': 0
            //             }
            //         }
            //     },
            //     {
            //         type: 'erd.Derived',
            //         attrs: {
            //             root: {
            //                 dataTooltip: 'Derived',
            //                 dataTooltipPosition: 'left',
            //                 dataTooltipPositionSelector: '.joint-stencil'
            //             },
            //             '.outer': {
            //                 fill: 'transparent',
            //                 stroke: '#fe854f',
            //                 'stroke-dasharray': '0'
            //             },
            //             '.inner': {
            //                 fill: '#feb663',
            //                 stroke: 'transparent',
            //                 'display': 'block',
            //                 'stroke-dasharray': '0'
            //             },
            //             text: {
            //                 text: 'Derived',
            //                 fill: '#f6f6f6',
            //                 'font-family': 'Roboto Condensed',
            //                 'font-weight': 'Normal',
            //                 'font-size': 11,
            //                 'stroke-width': 0
            //             }
            //         }
            //     }
            // ],
            uml: [
                {
                    type: 'uml.Class',
                    name: 'Class',
                    attributes: ['+attr1'],
                    methods: ['-setAttr1()'],
                    size: {
                        width: 150,
                        height: 100
                    },
                    attrs: {
                        root: {
                            dataTooltip: 'Class',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.uml-class-name-rect': {
                            top: 2,
                            fill: '#61549c',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-attrs-rect': {
                            top: 2,
                            fill: '#61549c',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-methods-rect': {
                            top: 2,
                            fill: '#61549c',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-name-text': {
                            ref: '.uml-class-name-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        },
                        '.uml-class-attrs-text': {
                            ref: '.uml-class-attrs-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        },
                        '.uml-class-methods-text': {
                            ref: '.uml-class-methods-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        }
                    }
                },
                {
                    type: 'uml.Interface',
                    name: 'Interface',
                    attributes: ['+attr1'],
                    methods: ['-setAttr1()'],
                    size: {
                        width: 150,
                        height: 100
                    },
                    attrs: {
                        root: {
                            dataTooltip: 'Interface',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.uml-class-name-rect': {
                            fill: '#fe854f',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-attrs-rect': {
                            fill: '#fe854f',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-methods-rect': {
                            fill: '#fe854f',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-name-text': {
                            ref: '.uml-class-name-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        },
                        '.uml-class-attrs-text': {
                            ref: '.uml-class-attrs-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-size': 11
                        },
                        '.uml-class-methods-text': {
                            ref: '.uml-class-methods-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        }
                    }
                },
                {
                    type: 'uml.Abstract',
                    name: 'Abstract',
                    attributes: ['+attr1'],
                    methods: ['-setAttr1()'],
                    size: {
                        width: 150,
                        height: 100
                    },
                    attrs: {
                        root: {
                            dataTooltip: 'Abstract',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.uml-class-name-rect': {
                            fill: '#6a6c8a',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-attrs-rect': {
                            fill: '#6a6c8a',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-methods-rect': {
                            fill: '#6a6c8a',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8
                        },
                        '.uml-class-name-text': {
                            ref: '.uml-class-name-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        },
                        '.uml-class-attrs-text': {
                            ref: '.uml-class-attrs-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        },
                        '.uml-class-methods-text': {
                            ref: '.uml-class-methods-rect',
                            'ref-y': 0.5,
                            'y-alignment': 'middle',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11
                        }
                    }
                },
                {
                    type: 'uml.State',
                    name: 'State',
                    events: ['entry/', 'create()'],
                    size: {
                        width: 150,
                        height: 100
                    },
                    attrs: {
                        root: {
                            dataTooltip: 'State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.uml-state-body': {
                            fill: '#feb663',
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            rx: 8,
                            ry: 8,
                            'stroke-dasharray': '0'
                        },
                        '.uml-state-separator': {
                            stroke: '#f6f6f6',
                            'stroke-width': 1,
                            'stroke-dasharray': '0'
                        },
                        '.uml-state-name': {
                            fill: '#f6f6f6',
                            'font-size': 11,
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal'
                        },
                        '.uml-state-events': {
                            fill: '#f6f6f6',
                            'font-size': 11,
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal'
                        }
                    }
                }
            ],
            org: [
                {
                    type: 'org.Member',
                    attrs: {
                        root: {
                            dataTooltip: 'Member',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.rank': {
                            text: 'Rank',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-size': 12,
                            'font-weight': 'Bold',
                            'text-decoration': 'none'
                        },
                        '.name': {
                            text: 'Person',
                            fill: '#f6f6f6',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 10
                        },
                        '.card': {
                            fill: '#31d0c6',
                            stroke: 'transparent',
                            'stroke-width': 0,
                            'stroke-dasharray': '0'
                        },
                        image: {
                            width: 32,
                            height: 32,
                            x: 16,
                            y: 13,
                            ref: null,
                            'ref-x': null,
                            'ref-y': null,
                            'y-alignment': null,
                            'xlink:href': '/assets/images/controller/member-male.png'
                        }
                    }
                }
            ],
            logic: [
                {
                    type: 'logic.And',
                    attrs: {
                        root: {
                            dataTooltip: 'And',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Or',
                    attrs: {
                        root: {
                            dataTooltip: 'Or',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Not',
                    attrs: {
                        root: {
                            dataTooltip: 'Not',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Nand',
                    attrs: {
                        root: {
                            dataTooltip: 'Nand',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Nor',
                    attrs: {
                        root: {
                            dataTooltip: 'Nor',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Xor',
                    attrs: {
                        root: {
                            dataTooltip: 'Xor',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Xnor',
                    attrs: {
                        root: {
                            dataTooltip: 'Xnor',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Input',
                    attrs: {
                        root: {
                            dataTooltip: 'Input',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'logic.Output',
                    attrs: {
                        root: {
                            dataTooltip: 'Output',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.body': {},
                        '.wire': {
                            source: { id: 0, port: 'out' },
                            target: { id: 1, port: 'in' }
                        },
                        "circle": {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        "text": {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                }
            ]
        };
    }
}


/***/ }),

/***/ 41396:
/*!************************************************************************!*\
  !*** ./src/app/core/components/controller/services/toolbar-service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarService": () => (/* binding */ ToolbarService)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);

class ToolbarService {
    create(commandManager, paperScroller) {
        const { tools, groups } = this.getToolbarConfig();
        this.toolbar = new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.ui.Toolbar({
            groups,
            tools,
            autoToggle: true,
            references: {
                paperScroller: paperScroller,
                commandManager: commandManager
            }
        });
    }
    getToolbarConfig() {
        return {
            groups: {
                'undo-redo': { index: 1 },
                'clear': { index: 2 },
                // 'export': { index: 3 },
                // 'print': { index: 4 },
                'fullscreen': { index: 5 },
                'order': { index: 6 },
                'layout': { index: 7 },
                'zoom': { index: 8 },
                'grid': { index: 9 },
                'snapline': { index: 10 }
            },
            tools: [
                {
                    type: 'undo',
                    name: 'undo',
                    group: 'undo-redo',
                    attrs: {
                        button: {
                            'data-tooltip': 'Undo',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'redo',
                    name: 'redo',
                    group: 'undo-redo',
                    attrs: {
                        button: {
                            'data-tooltip': 'Redo',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'button',
                    name: 'clear',
                    group: 'clear',
                    attrs: {
                        button: {
                            id: 'btn-clear',
                            'data-tooltip': 'Clear Paper',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                // {
                //     type: 'button',
                //     name: 'svg',
                //     group: 'export',
                //     text: 'Export SVG',
                //     attrs: {
                //         button: {
                //             id: 'btn-svg',
                //             'data-tooltip': 'Open as SVG in a pop-up',
                //             'data-tooltip-position': 'top',
                //             'data-tooltip-position-selector': '.toolbar-container'
                //         }
                //     }
                // },
                // {
                //     type: 'button',
                //     name: 'png',
                //     group: 'export',
                //     text: 'Export PNG',
                //     attrs: {
                //         button: {
                //             id: 'btn-png',
                //             'data-tooltip': 'Open as PNG in a pop-up',
                //             'data-tooltip-position': 'top',
                //             'data-tooltip-position-selector': '.toolbar-container'
                //         }
                //     }
                // },
                // {
                //     type: 'button',
                //     name: 'print',
                //     group: 'print',
                //     attrs: {
                //         button: {
                //             id: 'btn-print',
                //             'data-tooltip': 'Open a Print Dialog',
                //             'data-tooltip-position': 'top',
                //             'data-tooltip-position-selector': '.toolbar-container'
                //         }
                //     }
                // },
                {
                    type: 'button',
                    name: 'to-front',
                    group: 'order',
                    text: 'Send To Front',
                    attrs: {
                        button: {
                            id: 'btn-to-front',
                            'data-tooltip': 'Bring Object to Front',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'button',
                    name: 'to-back',
                    group: 'order',
                    text: 'Send To Back',
                    attrs: {
                        button: {
                            id: 'btn-to-back',
                            'data-tooltip': 'Send Object to Back',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'button',
                    group: 'layout',
                    name: 'layout',
                    attrs: {
                        button: {
                            id: 'btn-layout',
                            'data-tooltip': 'Auto-layout Graph',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'zoom-to-fit',
                    name: 'zoom-to-fit',
                    group: 'zoom',
                    attrs: {
                        button: {
                            'data-tooltip': 'Zoom To Fit',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'zoom-out',
                    name: 'zoom-out',
                    group: 'zoom',
                    attrs: {
                        button: {
                            'data-tooltip': 'Zoom Out',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'label',
                    name: 'zoom-slider-label',
                    group: 'zoom',
                    text: 'Zoom:'
                },
                {
                    type: 'zoom-slider',
                    name: 'zoom-slider',
                    group: 'zoom'
                },
                {
                    type: 'zoom-in',
                    name: 'zoom-in',
                    group: 'zoom',
                    attrs: {
                        button: {
                            'data-tooltip': 'Zoom In',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'separator',
                    group: 'grid'
                },
                {
                    type: 'label',
                    name: 'grid-size-label',
                    group: 'grid',
                    text: 'Grid size:',
                    attrs: {
                        label: {
                            'data-tooltip': 'Change Grid Size',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'range',
                    name: 'grid-size',
                    group: 'grid',
                    text: 'Grid size:',
                    min: 1,
                    max: 50,
                    step: 1,
                    value: 10
                },
                {
                    type: 'separator',
                    group: 'snapline'
                },
                {
                    type: 'checkbox',
                    name: 'snapline',
                    group: 'snapline',
                    label: 'Snaplines:',
                    value: true,
                    attrs: {
                        input: {
                            id: 'snapline-switch'
                        },
                        label: {
                            'data-tooltip': 'Enable/Disable Snaplines',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                },
                {
                    type: 'fullscreen',
                    name: 'fullscreen',
                    group: 'fullscreen',
                    attrs: {
                        button: {
                            'data-tooltip': 'Toggle Fullscreen Mode',
                            'data-tooltip-position': 'top',
                            'data-tooltip-position-selector': '.toolbar-container'
                        }
                    }
                }
            ]
        };
    }
}


/***/ }),

/***/ 54737:
/*!*****************************************************************!*\
  !*** ./src/app/core/components/controller/shapes/app-shapes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "NavigatorElementView": () => (/* binding */ NavigatorElementView),
/* harmony export */   "NavigatorLinkView": () => (/* binding */ NavigatorLinkView),
/* harmony export */   "basic": () => (/* binding */ basic),
/* harmony export */   "standard": () => (/* binding */ standard),
/* harmony export */   "fsa": () => (/* binding */ fsa),
/* harmony export */   "pn": () => (/* binding */ pn),
/* harmony export */   "erd": () => (/* binding */ erd),
/* harmony export */   "uml": () => (/* binding */ uml),
/* harmony export */   "org": () => (/* binding */ org),
/* harmony export */   "logic": () => (/* binding */ logic)
/* harmony export */ });
/* harmony import */ var _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clientio/rappid */ 20709);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/*! JointJS+ v3.5.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-06-28


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


var app;
(function (app) {
    class CircularModel extends _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Ellipse {
        constructor() {
            super(...arguments);
            this.portLabelMarkup = [{
                    tagName: 'text',
                    selector: 'portLabel'
                }];
        }
        defaults() {
            return _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.defaultsDeep({
                type: 'app.CircularModel',
                attrs: {
                    root: {
                        magnet: false
                    }
                },
                ports: {
                    groups: {
                        'in': {
                            markup: [{
                                    tagName: 'circle',
                                    selector: 'portBody',
                                    attributes: {
                                        'r': 10
                                    }
                                }],
                            attrs: {
                                portBody: {
                                    magnet: true,
                                    fill: '#61549c',
                                    strokeWidth: 0
                                },
                                portLabel: {
                                    fontSize: 11,
                                    fill: '#61549c',
                                    fontWeight: 800
                                }
                            },
                            position: {
                                name: 'ellipse',
                                args: {
                                    startAngle: 0,
                                    step: 30
                                }
                            },
                            label: {
                                position: {
                                    name: 'radial',
                                    args: null
                                }
                            }
                        },
                        'out': {
                            markup: [{
                                    tagName: 'circle',
                                    selector: 'portBody',
                                    attributes: {
                                        'r': 10
                                    }
                                }],
                            attrs: {
                                portBody: {
                                    magnet: true,
                                    fill: '#61549c',
                                    strokeWidth: 0
                                },
                                portLabel: {
                                    fontSize: 11,
                                    fill: '#61549c',
                                    fontWeight: 800
                                }
                            },
                            position: {
                                name: 'ellipse',
                                args: {
                                    startAngle: 180,
                                    step: 30
                                }
                            },
                            label: {
                                position: {
                                    name: 'radial',
                                    args: null
                                }
                            }
                        }
                    }
                }
            }, _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Ellipse.prototype.defaults);
        }
    }
    app.CircularModel = CircularModel;
    class RectangularModel extends _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Rectangle {
        constructor() {
            super(...arguments);
            this.portLabelMarkup = [{
                    tagName: 'text',
                    selector: 'portLabel'
                }];
        }
        defaults() {
            return _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.defaultsDeep({
                type: 'app.RectangularModel',
                attrs: {
                    root: {
                        magnet: false
                    }
                },
                ports: {
                    groups: {
                        'in': {
                            markup: [{
                                    tagName: 'circle',
                                    selector: 'portBody',
                                    attributes: {
                                        'r': 10
                                    }
                                }],
                            attrs: {
                                portBody: {
                                    magnet: true,
                                    fill: '#61549c',
                                    strokeWidth: 0
                                },
                                portLabel: {
                                    fontSize: 11,
                                    fill: '#61549c',
                                    fontWeight: 800
                                }
                            },
                            position: {
                                name: 'left'
                            },
                            label: {
                                position: {
                                    name: 'left',
                                    args: {
                                        y: 0
                                    }
                                }
                            }
                        },
                        'out': {
                            markup: [{
                                    tagName: 'circle',
                                    selector: 'portBody',
                                    attributes: {
                                        'r': 10
                                    }
                                }],
                            position: {
                                name: 'right'
                            },
                            attrs: {
                                portBody: {
                                    magnet: true,
                                    fill: '#61549c',
                                    strokeWidth: 0
                                },
                                portLabel: {
                                    fontSize: 11,
                                    fill: '#61549c',
                                    fontWeight: 800
                                }
                            },
                            label: {
                                position: {
                                    name: 'right',
                                    args: {
                                        y: 0
                                    }
                                }
                            }
                        }
                    }
                }
            }, _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Rectangle.prototype.defaults);
        }
    }
    app.RectangularModel = RectangularModel;
    class Link extends _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Link {
        constructor() {
            super(...arguments);
            this.defaultLabel = {
                attrs: {
                    rect: {
                        fill: '#ffffff',
                        stroke: '#8f8f8f',
                        strokeWidth: 1,
                        refWidth: 10,
                        refHeight: 10,
                        refX: -5,
                        refY: -5
                    }
                }
            };
            this.getDataWidthCached = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.memoize)((d) => (new _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.g.Path(d)).bbox().width);
        }
        static connectionPoint(line, view, magnet, opt, type, linkView) {
            const markerWidth = linkView.model.getMarkerWidth(type);
            opt = { offset: markerWidth, stroke: true };
            // connection point for UML shapes lies on the root group containg all the shapes components
            const modelType = view.model.get('type');
            if (modelType.indexOf('uml') === 0) {
                opt.selector = 'root';
            }
            // taking the border stroke-width into account
            if (modelType === 'standard.InscribedImage') {
                opt.selector = 'border';
            }
            return _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.connectionPoints.boundary.call(this, line, view, magnet, opt, type, linkView);
        }
        defaults() {
            return _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.defaultsDeep({
                type: 'app.Link',
                router: {
                    name: 'normal'
                },
                connector: {
                    name: 'rounded'
                },
                labels: [],
                attrs: {
                    line: {
                        stroke: '#8f8f8f',
                        strokeDasharray: '0',
                        strokeWidth: 2,
                        fill: 'none',
                        sourceMarker: {
                            type: 'path',
                            d: 'M 0 0 0 0',
                            stroke: 'none'
                        },
                        targetMarker: {
                            type: 'path',
                            d: 'M 0 -5 -10 0 0 5 z',
                            stroke: 'none'
                        }
                    }
                }
            }, _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard.Link.prototype.defaults);
        }
        getMarkerWidth(type) {
            const d = (type === 'source') ? this.attr('line/sourceMarker/d') : this.attr('line/targetMarker/d');
            return this.getDataWidth(d);
        }
        getDataWidth(d) {
            return this.getDataWidthCached(d);
        }
    }
    app.Link = Link;
})(app || (app = {}));
const NavigatorElementView = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.ElementView.extend({
    body: null,
    markup: [{
            tagName: 'rect',
            selector: 'body',
            attributes: {
                'fill': '#31d0c6'
            }
        }],
    initFlag: ['RENDER', 'UPDATE', 'TRANSFORM'],
    presentationAttributes: {
        size: ['UPDATE'],
        position: ['TRANSFORM'],
        angle: ['TRANSFORM']
    },
    confirmUpdate: function (flags) {
        if (this.hasFlag(flags, 'RENDER')) {
            this.render();
        }
        if (this.hasFlag(flags, 'UPDATE')) {
            this.update();
        }
        if (this.hasFlag(flags, 'TRANSFORM')) {
            this.updateTransformation();
        }
    },
    render: function () {
        const { fragment, selectors: { body } } = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.parseDOMJSON(this.markup);
        this.body = body;
        this.el.appendChild(fragment);
    },
    update: function () {
        const { model, body } = this;
        const { width, height } = model.size();
        body.setAttribute('width', width);
        body.setAttribute('height', height);
    }
});
const NavigatorLinkView = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.dia.LinkView.extend({
    initialize: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.noop,
    render: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.noop,
    update: _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.util.noop
});
// re-export build-in shapes from rappid
const basic = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.basic;
const standard = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.standard;
const fsa = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.fsa;
const pn = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.pn;
const erd = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.erd;
const uml = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.uml;
const org = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.org;
const logic = _clientio_rappid__WEBPACK_IMPORTED_MODULE_0__.shapes.logic;


/***/ }),

/***/ 49738:
/*!*********************************************************************!*\
  !*** ./src/app/core/components/controller/title/title.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_file_name_for_save_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/file-name-for-save.service */ 68828);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class TitleComponent {
    constructor(fileNameForSaveService) {
        this.fileNameForSaveService = fileNameForSaveService;
    }
    ngOnInit() {
        this.fileNameForSaveService.currentTitle.subscribe((title) => {
            if (!title) {
                this.title = 'defaultTitle';
            }
            else {
                this.title = title;
            }
        });
    }
    // title$ = this.fileNameForSaveService.currentTitle;
    handleInputOnEnter() {
        this.fileNameForSaveService.changeTitle(this.title);
        document.activeElement.blur();
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_file_name_for_save_service__WEBPACK_IMPORTED_MODULE_0__.FileNameForSaveService)); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 2, vars: 1, consts: [[1, "body"], ["type", "text", 1, "form__field", 3, "ngModel", "ngModelChange", "keyup.enter", "click"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TitleComponent_Template_input_ngModelChange_1_listener($event) { return ctx.title = $event; })("keyup.enter", function TitleComponent_Template_input_keyup_enter_1_listener() { return ctx.handleInputOnEnter(); })("click", function TitleComponent_Template_input_click_1_listener($event) { return $event.target.select(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".form__field[_ngcontent-%COMP%] {\n  font-family: \"Cairo\", sans-serif;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid gray;\n  outline: 0;\n  font-size: 1.3rem;\n  text-align: center;\n  color: black;\n  padding: 7px 0;\n  background: transparent;\n  background-color: #74BEA8;\n  transition: border-color 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUNGIiwiZmlsZSI6InRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1fX2ZpZWxkIHtcbiAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjojNzRCRUE4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxufVxuIl19 */"] });


/***/ }),

/***/ 57974:
/*!*****************************************************************!*\
  !*** ./src/app/core/components/menu/language/language.utils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language)
/* harmony export */ });
class Language {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'en';
        this.supportLanguages = ['en', 'zh_HK', 'ko_KR'];
    }
    selectLanguage(lang) {
        console.log('selected language ==> ', lang);
        localStorage.setItem('lang', lang);
        window.location.reload();
    }
}


/***/ }),

/***/ 54936:
/*!********************************************************!*\
  !*** ./src/app/core/components/menu/menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _language_language_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language/language.utils */ 57974);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _controller_config_sample_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/config/sample-graphs */ 90328);
/* harmony import */ var src_app_state_filename_filename_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/filename/filename.selectors */ 371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_shortcut_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/shortcut.pipe */ 93708);











function MenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 82)(1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_ng_template_0_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const d_r4 = restoredCtx.dismiss;
      return d_r4("Cross click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "rect", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "defs")(6, "pattern", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "use", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "image", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 89)(10, "h4", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Semtron Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 91)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Version: 0.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "License GPL-2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 92)(18, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " The objective of this project is to develop the software platform for Semitron Studio, which is a web-based design tool focused on programming FPGA built on icestudio. The tools will provide developer with powerful drag and drop programming interface and support FPGA boards. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 94)(21, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Email : info@turned-e.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Tel: +852- 53985847 James Lam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 97)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u00A9 2022 TURNED-E! Education Limited");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_ng_template_0_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const c_r3 = restoredCtx.close;
      return c_r3("Save click");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}

function MenuComponent_li_210_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 35)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_li_210_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r9.language.selectLanguage(item_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8);
  }
}

const _c0 = function (a0) {
  return {
    "z-index": a0
  };
};

class MenuComponent {
  constructor(store, config, modalService) {
    this.store = store;
    this.modalService = modalService;
    this.zIndex = true;
    this.count = 0;
    this.language = new _language_language_utils__WEBPACK_IMPORTED_MODULE_0__.Language();
    config.backdrop = 'static';
    config.keyboard = false;
    this.filename$ = store.select(src_app_state_filename_filename_selectors__WEBPACK_IMPORTED_MODULE_2__.fileNameSelector);
  }

  ngOnInit() {// this.fileNameForSaveService.currentTitle.subscribe((title) => {
    //   if (!title) {
    //     this.title = 'defaultTitle';
    //   } else {
    //     this.title = title
    //   }
    // });
  }

  cancelTimeouts() {}

  showMenu(newMenu) {}

  hideMenu() {}

  fixMenu(newMenu) {} //File menu


  newProject() {
    // utils.newWindow();
    console.log('click New project');
  }

  openProjectDialog() {}

  saveProject() {
    console.log('save'); // console.log(JSON.stringify(sampleGraphs.emergencyProcedure));
    // console.log(typeof sampleGraphs.emergencyProcedure);
    // this.filename$.pipe(take(1)).subscribe((result) => {
    //   this.fileName = `${result}.json`;
    // });
    // this.fileName = `${this.filename$}.json`;

    this.title = document.getElementById('filename').innerHTML;
    this.fileName = `${this.title}.json`;
    let fileContent = _controller_config_sample_graphs__WEBPACK_IMPORTED_MODULE_1__.sampleGraphs.emergencyProcedure;
    const file = new Blob([fileContent], {
      type: "text/plain"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = this.fileName;
    link.click();
    link.remove();
  }

  saveProjectAs() {}

  addAsBlock() {}

  exportFromCompiler(id, name, ext) {}

  exportVerilog() {
    this.exportFromCompiler('verilog', 'Verilog', '.v');
  }

  exportPCF() {
    this.exportFromCompiler('pcf', 'PCF', '.pcf');
  }

  exportTestbench() {
    this.exportFromCompiler('testbench', 'Testbench', '.v');
  }

  exportGTKwave() {}

  exportBLIF() {}

  exportASC() {}

  exportBitstream() {}

  quit() {
    console.log('quit');
  } //Edit menu


  undoGraph() {}

  redoGraph() {}

  cutSelected() {}

  copySelected() {}

  pasteSelected() {}

  pasteAndCloneSelected() {}

  selectAll() {}

  fitContent() {}

  showLabelFinder() {}

  showToolBox() {}

  toggleBoardRules() {}

  setExternalCollections() {}

  setExternalPlugins() {}

  setPythonEnv() {}

  setRemoteHostname() {}

  toggleLoggingEnabled() {}

  setLoggingFile() {}

  setProjectInformation() {} //View menu


  showPCF() {}

  showPinout() {}

  showDatasheet() {}

  showBoardRules() {}

  showCollectionData() {}

  showCommandOutput() {}

  showSystemInfo() {}

  toggleFPGAResources() {} //tool menu


  verifyCode() {}

  buildCode() {}

  uploadCode() {}

  addCollections() {}

  reloadCollections() {}

  removeCollection(collection) {}

  removeAllCollections() {}

  openVersionInfoWindow() {}

  about(content) {
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
      modalDialogClass: 'modal-xl'
    });
    this.zIndex = false;
  }

}

MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
};

MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalConfig, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal])],
  decls: 456,
  vars: 292,
  consts: [["content", ""], ["ng-controller", "MenuCtrl"], ["id", "menu", "ondragstart", "return false;", "ondrop", "return false;"], ["id", "input-open-project", "type", "file", "accept", ".ice", 1, "hidden"], ["id", "input-save-project", "type", "file", "accept", ".ice", 1, "hidden"], ["id", "input-save-snapshot", "type", "file", "accept", ".png", 1, "hidden"], ["id", "input-add-as-block", "type", "file", "accept", ".ice,.iceb", "multiple", "", 1, "hidden"], ["id", "input-export-verilog", "type", "file", "accept", ".v", 1, "hidden"], ["id", "input-export-pcf", "type", "file", "accept", ".pcf", 1, "hidden"], ["id", "input-export-testbench", "type", "file", "accept", ".v", 1, "hidden"], ["id", "input-export-gtkwave", "type", "file", "accept", ".gtkw", 1, "hidden"], ["id", "input-export-blif", "type", "file", "accept", ".blif", 1, "hidden"], ["id", "input-export-asc", "type", "file", "accept", ".asc", 1, "hidden"], ["id", "input-export-bin", "type", "file", "accept", ".bin", 1, "hidden"], ["id", "input-add-collection", "type", "file", "accept", ".zip", "multiple", "", 1, "hidden"], [2, "background-color", "#A8E2D5"], [1, "title"], ["width", "40", "height", "40", "viewBox", "0 0 54 54", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "54", "height", "54", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0_24_8", "transform", "translate(-0.890411 -0.655172) scale(0.0136986 0.0114943)"], ["id", "image0_24_8", "width", "200", "height", "200", 0, "xlink", "href", "data:image/png;base64,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VTvild3Zd8LC9RTSk4GBqo1UKspSKtoIyxaUjvJq/sWAkY/fMmTcUj9YQuoQK0iA1/3tsQOD7G6XOS7c0jg+JeOANvm+qrIU9FMMs7tcJphWj8AaJVw0UFKYYcIdCUuSISMq9jgNRkJpErajomg0Ou2McCOxo8PPQu4k45MzNsHEKqpMaIekosozENayauptr7A1JmmURTT+UR1rgE+7u1mJoysWmG2tmTFxhahikcnW5wIFHNHktJOpV7jaU160wt2lKCEisnxjyZGxeIaCsckZx0JKA/hhmQATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMIFTSeD/Ab4BncbHs8dNAAAAAElFTkSuQmCC"], [1, "navbar-title"], ["id", "filename"], ["role", "navigation", 1, "navbar", "navbar-default", "navbar-static-top", "ice-bar", 2, "background-color", "#A8E2D5", 3, "ngStyle"], [1, "nav-links"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", 1, "dropdown-toggle"], ["width", "20", "height", "24", "viewBox", "0 0 23 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18.2606 14.25V11.625C18.2606 10.7299 17.9276 9.87145 17.3349 9.23851C16.7422 8.60558 15.9383 8.25 15.1001 8.25H13.6955C13.416 8.25 13.1481 8.13147 12.9505 7.9205C12.7529 7.70952 12.642 7.42337 12.642 7.125V5.625C12.642 4.72989 12.309 3.87145 11.7163 3.23851C11.1236 2.60558 10.3197 2.25 9.48147 2.25H7.72564M9.83263 2.25H5.26749C4.68596 2.25 4.21399 2.754 4.21399 3.375V20.625C4.21399 21.246 4.68596 21.75 5.26749 21.75H17.2071C17.7886 21.75 18.2606 21.246 18.2606 20.625V11.25C18.2606 8.86305 17.3727 6.57387 15.7921 4.88604C14.2116 3.19821 12.0679 2.25 9.83263 2.25V2.25Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "menu-text"], [1, "caret"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"], [1, "shortcut"], ["ngbDropdownItem", ""], [1, "divider"], ["ngbDropdown", "", 1, "dropdown-submenu"], ["href", "", "ngbDropdownToggle", "", 1, "dropdown-toggle"], ["width", "20", "height", "24", "viewBox", "0 0 23 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.1024 6.70526C13.1024 6.35736 13.2734 6.04278 13.4711 5.76544C13.6743 5.48124 13.792 5.14412 13.792 4.7825C13.792 3.76722 12.8661 2.945 11.7232 2.945C10.5803 2.945 9.6544 3.7682 9.6544 4.7825C9.6544 5.14412 9.77209 5.48124 9.97529 5.76544C10.173 6.04278 10.344 6.35736 10.344 6.70526C10.3444 6.78929 10.3289 6.87255 10.2986 6.9501C10.2682 7.02764 10.2235 7.09789 10.1671 7.15667C10.1108 7.21545 10.0439 7.26156 9.97055 7.29226C9.89716 7.32296 9.81872 7.33763 9.73991 7.3354C8.46062 7.29612 7.18352 7.19803 5.91216 7.0414C6.08318 8.62214 6.18157 10.2264 6.20179 11.8503C6.20265 11.9354 6.18761 12.0199 6.15757 12.0988C6.12752 12.1778 6.08306 12.2495 6.02678 12.31C5.97049 12.3704 5.90349 12.4184 5.82967 12.451C5.75585 12.4836 5.67669 12.5003 5.59678 12.5V12.5C5.27037 12.5 4.97522 12.3177 4.71501 12.107C4.45147 11.8876 4.1272 11.7673 3.79279 11.765C2.84022 11.765 2.06879 12.7519 2.06879 13.97C2.06879 15.1881 2.84114 16.175 3.79279 16.175C4.13207 16.175 4.44837 16.0496 4.71501 15.833C4.97522 15.6223 5.27037 15.44 5.59678 15.44C5.88182 15.44 6.10709 15.6948 6.08594 15.9986C5.97157 17.6602 5.77453 19.3142 5.49564 20.9535C6.8914 21.1397 8.30738 21.2563 9.73991 21.3004C9.81872 21.3026 9.89716 21.288 9.97055 21.2573C10.0439 21.2266 10.1108 21.1804 10.1671 21.1217C10.2235 21.0629 10.2682 20.9926 10.2986 20.9151C10.3289 20.8376 10.3444 20.7543 10.344 20.6703V20.6703C10.344 20.3224 10.173 20.0078 9.97529 19.7304C9.76943 19.4495 9.6566 19.1039 9.6544 18.7475C9.6544 17.7332 10.5812 16.91 11.7232 16.91C12.8661 16.91 13.792 17.7332 13.792 18.7475C13.792 19.1091 13.6743 19.4462 13.4711 19.7304C13.2734 20.0078 13.1033 20.3224 13.1033 20.6703C13.1033 20.9966 13.358 21.2573 13.6642 21.2387C15.3371 21.1338 17.0031 20.9277 18.6541 20.6213C18.904 19.0907 19.0826 17.548 19.1893 15.9986C19.1941 15.927 19.185 15.8551 19.1625 15.7874C19.14 15.7197 19.1047 15.6577 19.0587 15.6053C19.0126 15.5528 18.957 15.5111 18.8951 15.4826C18.8333 15.4542 18.7666 15.4397 18.6992 15.44C18.3728 15.44 18.0776 15.6223 17.8174 15.833C17.5508 16.0496 17.2345 16.175 16.8952 16.175C15.9436 16.175 15.1712 15.1881 15.1712 13.97C15.1712 12.7519 15.9436 11.765 16.8952 11.765C17.2354 11.765 17.5508 11.8904 17.8174 12.107C18.0776 12.3177 18.3728 12.5 18.7001 12.5C18.78 12.5003 18.8592 12.4836 18.933 12.451C19.0068 12.4184 19.0738 12.3704 19.1301 12.31C19.1864 12.2495 19.2309 12.1778 19.2609 12.0988C19.2909 12.0199 19.306 11.9354 19.3051 11.8503C19.283 10.094 19.1694 8.34033 18.9649 6.59746C17.2308 6.93262 15.4618 7.15998 13.6633 7.27268C13.5909 7.27696 13.5185 7.26541 13.4504 7.23874C13.3824 7.21207 13.3202 7.17085 13.2676 7.11761C13.2151 7.06437 13.1733 7.00024 13.1449 6.92915C13.1165 6.85807 13.102 6.78154 13.1024 6.70428V6.70428V6.70526Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "dropdown-menu"], ["ngbDropdownItem", "", 4, "ngFor", "ngForOf"], ["ng-show", "profile.data.boardRules", 1, "glyphicon", "glyphicon-ok-circle"], ["ng-show", "profile.data.remoteHostname", 1, "glyphicon", "glyphicon-ok-circle"], ["ng-show", "profile.data.loggingEnabled", 1, "glyphicon", "glyphicon-ok-circle"], ["ngbDropdown", "", "placement", "right", 1, ""], ["d", "M1.90662 12.322C1.842 12.1146 1.842 11.8904 1.90662 11.683C3.20547 7.51 6.89223 4.5 11.2373 4.5C15.5805 4.5 19.2654 7.507 20.5671 11.678C20.6326 11.885 20.6326 12.109 20.5671 12.317C19.2692 16.49 15.5824 19.5 11.2373 19.5C6.89411 19.5 3.20921 16.493 1.90756 12.322H1.90662Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.0466 12C14.0466 12.7956 13.7506 13.5587 13.2238 14.1213C12.6969 14.6839 11.9824 15 11.2373 15C10.4922 15 9.77766 14.6839 9.25081 14.1213C8.72396 13.5587 8.42798 12.7956 8.42798 12C8.42798 11.2044 8.72396 10.4413 9.25081 9.87868C9.77766 9.31607 10.4922 9 11.2373 9C11.9824 9 12.6969 9.31607 13.2238 9.87868C13.7506 10.4413 14.0466 11.2044 14.0466 12V12Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["ng-show", "profile.data.showFPGAResources", 1, "glyphicon", "glyphicon-ok-circle"], ["width", "20", "height", "24", "viewBox", "0 0 18 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.5743 20.672L10.3026 15.6M8.72564 1.25V3.5M14.1888 3.666L12.699 5.257M16.4513 9.5H14.3443M4.75232 13.743L3.26338 15.333M3.10699 9.5H1M4.75232 5.257L3.26338 3.667M10.3026 15.6L7.95214 17.825L8.48497 8.355L13.3797 16.272L10.3026 15.6Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["ngbDropdown", "", "ng-mouseover", "showMenu('tools')", "ng-mouseleave", "hideMenu()", "ng-click", "fixMenu('tools')", "is-open", "status.tools"], ["width", "23", "height", "24", "viewBox", "0 0 23 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5004 15.17L15.8609 21C16.3206 21.484 16.9368 21.7521 17.5767 21.7465C18.2165 21.7408 18.8287 21.4619 19.2811 20.9698C19.7335 20.4777 19.99 19.812 19.9952 19.1161C20.0004 18.4202 19.7539 17.75 19.3089 17.25L13.9052 11.373M10.5004 15.17L12.7954 12.14C13.0868 11.756 13.4758 11.514 13.9061 11.374M10.5004 15.17L6.22025 20.823C6.01281 21.098 5.75472 21.3227 5.4626 21.4827C5.17048 21.6427 4.8508 21.7344 4.52414 21.7518C4.19747 21.7693 3.87105 21.7122 3.5659 21.5842C3.26075 21.4562 2.98362 21.2602 2.75235 21.0086C2.52109 20.7571 2.3408 20.4557 2.22311 20.1238C2.10541 19.792 2.05292 19.4369 2.06899 19.0817C2.08507 18.7264 2.16937 18.3787 2.31646 18.061C2.46355 17.7433 2.67018 17.4626 2.92304 17.237L9.20944 11.607M13.9061 11.374C14.4118 11.21 14.9754 11.186 15.5087 11.234C16.2276 11.3011 16.9501 11.1627 17.6046 10.8323C18.259 10.502 18.8227 9.99124 19.2396 9.35081C19.6565 8.71037 19.9122 7.9625 19.9813 7.1814C20.0504 6.4003 19.9305 5.61313 19.6334 4.898L16.6213 8.175C16.1173 8.04826 15.6562 7.77016 15.2905 7.37238C14.9247 6.97459 14.669 6.4731 14.5525 5.925L17.5646 2.649C16.9071 2.32596 16.1833 2.19554 15.4651 2.27068C14.7469 2.34582 14.0593 2.62391 13.4704 3.07735C12.8816 3.53079 12.412 4.14381 12.1082 4.8556C11.8045 5.56738 11.6772 6.35317 11.7389 7.135C11.8226 8.211 11.6736 9.399 10.9077 10.085L10.8139 10.17M9.20944 11.607L5.43319 7.5H4.13766L2.06885 3.75L3.44805 2.25L6.89606 4.5V5.909L10.813 10.169M9.20852 11.606L10.813 10.169M16.8953 18.375L14.4817 15.75M4.4751 19.125H4.48246V19.133H4.4751V19.125Z", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 2, "min-width", "180px"], ["ng-if", "common.showToolchain()", 1, "divider"], ["uib-dropdown", "", "ng-if", "common.showToolchain()", 1, "dropdown-submenu"], ["ng-class", "toolchain.disabled ? 'disabled' : ''"], ["href", "", "ng-hide", "toolchain.installed", "ng-click", "tools.installToolchain()"], ["href", "", "ng-show", "toolchain.installed", "ng-click", "tools.updateToolchain()"], ["ng-class", "\n                        toolchain.disabled || !toolchain.installed\n                          ? 'disabled'\n                          : ''\n                      "], ["href", "", "ng-show", "toolchain.installed", "ng-click", "tools.installToolchainDev()"], ["ng-show", "toolchain.apio", 1, "divider"], ["ng-show", "toolchain.apio", 1, "disabled"], ["href", ""], ["uib-dropdown", "", "ng-if", "common.showDrivers()", 1, "dropdown-submenu"], ["uib-dropdown", "", 1, "dropdown-submenu"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", "ng-show", "common.internalCollections.length > 0"], ["ngbDropdown", "", "ng-mouseover", "showMenu('help')", "ng-mouseleave", "hideMenu()", "ng-click", "fixMenu('help')", "is-open", "status.help"], ["width", "20", "height", "24", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.77321 5.2235C9.77321 5.0208 9.73359 4.82009 9.65662 4.63283C9.57965 4.44556 9.46683 4.27541 9.32461 4.13208C9.18239 3.98875 9.01354 3.87506 8.82772 3.79749C8.64189 3.71992 8.44273 3.68 8.24159 3.68C8.04046 3.68 7.84129 3.71992 7.65546 3.79749C7.46964 3.87506 7.3008 3.98875 7.15857 4.13208C7.01635 4.27541 6.90353 4.44556 6.82656 4.63283C6.74959 4.82009 6.70997 5.0208 6.70997 5.2235V8.1635M9.77321 5.2235V3.7535C9.77321 3.34414 9.93458 2.95154 10.2218 2.66208C10.509 2.37262 10.8986 2.21 11.3048 2.21C11.711 2.21 12.1006 2.37262 12.3879 2.66208C12.6751 2.95154 12.8365 3.34414 12.8365 3.7535V5.2235M9.77321 5.2235L9.84615 11.03M12.8365 11.765V5.2235M12.8365 5.2235C12.8365 4.81414 12.9978 4.42154 13.2851 4.13208C13.5723 3.84262 13.9619 3.68 14.3681 3.68C14.7743 3.68 15.1639 3.84262 15.4511 4.13208C15.7383 4.42154 15.8997 4.81414 15.8997 5.2235V15.44M6.70997 8.1635C6.70997 7.75414 6.5486 7.36154 6.26137 7.07208C5.97413 6.78262 5.58456 6.62 5.17835 6.62C4.77214 6.62 4.38256 6.78262 4.09533 7.07208C3.8081 7.36154 3.64673 7.75414 3.64673 8.1635V16.175C3.64673 17.9294 4.3383 19.612 5.56931 20.8525C6.80031 22.0931 8.46991 22.79 10.2108 22.79H12.1732C13.5272 22.7898 14.8257 22.2477 15.783 21.2828L17.4673 19.5854C18.4248 18.6206 18.9628 17.3121 18.9629 15.9476L18.9659 13.9641C18.9668 13.7906 19.0361 13.6246 19.1584 13.5025C19.3007 13.3592 19.4135 13.189 19.4905 13.0017C19.5675 12.8143 19.6071 12.6136 19.6071 12.4108C19.6071 12.2081 19.5675 12.0073 19.4905 11.82C19.4135 11.6327 19.3007 11.4625 19.1584 11.3191C19.0161 11.1757 18.8472 11.062 18.6614 10.9844C18.4755 10.9068 18.2763 10.8669 18.0751 10.8669C17.8739 10.8669 17.6747 10.9068 17.4888 10.9844C17.3029 11.062 17.134 11.1757 16.9918 11.3191C16.2979 12.0175 15.9063 12.9641 15.9026 13.9524M6.70997 8.1635V12.5M12.8073 16.7316C13.2131 16.3219 13.6951 15.9969 14.2258 15.7753C14.7564 15.5537 15.3253 15.4397 15.8997 15.44M15.9016 15.44H15.8997", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["disabled", ""], [1, "disabled"], [1, "buttons"], ["href", "#"], ["width", "40", "height", "41", "viewBox", "0 0 40 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.5", "y", "0.5", "width", "39", "height", "40", "rx", "7.5", "fill", "#D1F0E8", "stroke", "black"], ["d", "M19.5 27.25V21.3438M19.5 21.3438C20.0692 21.3442 20.6361 21.2728 21.1875 21.1311M19.5 21.3438C18.9307 21.3442 18.3638 21.2728 17.8125 21.1311M22.0312 29.5439C20.3587 29.8615 18.6413 29.8615 16.9687 29.5439M21.1875 32.2248C20.0655 32.3422 18.9344 32.3422 17.8125 32.2248M22.0312 27.25V27.034C22.0312 25.9281 22.7715 24.9831 23.7277 24.4285C25.3342 23.4982 26.589 22.064 27.2978 20.3482C28.0065 18.6324 28.1296 16.7307 27.648 14.9378C27.1663 13.145 26.1068 11.561 24.6336 10.4313C23.1604 9.3017 21.3558 8.68944 19.4994 8.68944C17.643 8.68944 15.8383 9.3017 14.3652 10.4313C12.892 11.561 11.8325 13.145 11.3508 14.9378C10.8692 16.7307 10.9922 18.6324 11.701 20.3482C12.4097 22.064 13.6646 23.4982 15.2711 24.4285C16.2273 24.9831 16.9687 25.9281 16.9687 27.034V27.25", "stroke", "black", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 30.8333C18.5013 30.8333 17.093 30.549 15.775 29.9802C14.4569 29.4115 13.3104 28.6396 12.3354 27.6646C11.3604 26.6896 10.5885 25.5431 10.0198 24.225C9.451 22.9069 9.16663 21.4986 9.16663 20C9.16663 18.5014 9.451 17.0931 10.0198 15.775C10.5885 14.4569 11.3604 13.3104 12.3354 12.3354C13.3104 11.3604 14.4569 10.5885 15.775 10.0198C17.093 9.45104 18.5013 9.16666 20 9.16666C21.4986 9.16666 22.9069 9.45104 24.225 10.0198C25.543 10.5885 26.6895 11.3604 27.6645 12.3354C28.6395 13.3104 29.4114 14.4569 29.9802 15.775C30.5489 17.0931 30.8333 18.5014 30.8333 20C30.8333 21.4986 30.5489 22.9069 29.9802 24.225C29.4114 25.5431 28.6395 26.6896 27.6645 27.6646C26.6895 28.6396 25.543 29.4115 24.225 29.9802C22.9069 30.549 21.4986 30.8333 20 30.8333ZM20.5416 29.2083C23.0152 29.0278 25.0781 28.0708 26.7302 26.3375C28.3822 24.6042 29.2083 22.4917 29.2083 20C29.2083 17.5083 28.3822 15.3958 26.7302 13.6625C25.0781 11.9292 23.0152 10.9722 20.5416 10.7917V29.2083Z", "fill", "black"], ["width", "38", "height", "33", "viewBox", "0 0 38 33", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.75 28.875V26.8125H33.25V28.875H4.75ZM4.75 17.5312V15.4688H33.25V17.5312H4.75ZM4.75 6.1875V4.125H33.25V6.1875H4.75Z", "fill", "black"], [1, "container"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-header"], ["width", "167", "height", "179", "viewBox", "0 0 167 179", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "167", "height", "179", "fill", "url(#pattern0)"], [0, "xlink", "href", "#image0_27_2", "transform", "translate(-0.00157378) scale(0.0137417 0.0128205)"], ["id", "image0_27_2", "width", "73", "height", "78", 0, "xlink", "href", "data:image/png;base64,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"], [1, "title-container"], ["id", "modal-basic-title", 1, "modal-title"], [1, "subtitle-container"], [1, "modal-body"], [1, "semtron-explanation"], [1, "semtron-contact-container"], [1, "semtron-contact", "mt-25"], [1, "semtron-contact"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MenuComponent_ng_template_0_Template, 30, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 3)(5, "input", 4)(6, "input", 5)(7, "input", 6)(8, "input", 7)(9, "input", 8)(10, "input", 9)(11, "input", 10)(12, "input", 11)(13, "input", 12)(14, "input", 13)(15, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "header", 15)(17, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "rect", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "defs")(21, "pattern", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "use", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "image", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "SEMTRON STUDIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nav", 24)(30, "ul", 25)(31, "li", 26)(32, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ul", 32)(40, "li")(41, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_41_listener() {
        return ctx.newProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li")(48, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_48_listener() {
        return ctx.openProjectDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](53, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li")(55, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li")(59, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li")(63, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_63_listener() {
        return ctx.addAsBlock();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li")(68, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_68_listener() {
        return ctx.saveProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "li")(75, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_75_listener() {
        return ctx.saveProjectAs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](77, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](80, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "li", 37)(83, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](85, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "ul", 32)(87, "li")(88, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_88_listener() {
        return ctx.exportVerilog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "li")(91, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_91_listener() {
        return ctx.exportPCF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "li")(94, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_94_listener() {
        return ctx.exportTestbench();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "li")(98, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_98_listener() {
        return ctx.exportGTKwave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "li")(102, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_102_listener() {
        return ctx.exportBLIF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "li")(105, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_105_listener() {
        return ctx.exportASC();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "li")(108, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_108_listener() {
        return ctx.exportBitstream();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "li")(112, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_112_listener() {
        return ctx.quit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](117, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "li", 26)(119, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "svg", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](124, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "ul", 32)(127, "li")(128, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_128_listener() {
        return ctx.undoGraph();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](130, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](133, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "li")(135, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_135_listener() {
        return ctx.redoGraph();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](137, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](140, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "li")(143, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_143_listener() {
        return ctx.cutSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](145, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](148, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "li")(150, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_150_listener() {
        return ctx.copySelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](152, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](155, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "li")(157, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_157_listener() {
        return ctx.pasteSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](159, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](162, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "li")(164, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_164_listener() {
        return ctx.pasteAndCloneSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](166, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](169, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "li")(171, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_171_listener() {
        return ctx.selectAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](173, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](176, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](177, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "li")(179, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_179_listener() {
        return ctx.fitContent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](181, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](184, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "li")(186, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_186_listener() {
        return ctx.showLabelFinder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](188, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](191, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "li")(193, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_193_listener() {
        return ctx.showToolBox();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](195, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](198, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](199, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "li", 37)(201, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](203, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "ul", 32)(205, "li", 37)(206, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](208, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](210, MenuComponent_li_210_Template, 3, 1, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](211, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "li", 37)(213, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](215, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](216, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "li")(218, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_218_listener() {
        return ctx.toggleBoardRules();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](220, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "li")(223, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_223_listener() {
        return ctx.setExternalCollections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](225, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "li")(227, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_227_listener() {
        return ctx.setExternalPlugins();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](229, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "li")(231, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_231_listener() {
        return ctx.setPythonEnv();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](233, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "li")(235, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_235_listener() {
        return ctx.setRemoteHostname();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](237, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](238, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "li")(240, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_240_listener() {
        return ctx.toggleLoggingEnabled();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](242, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](243, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "li")(245, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_245_listener() {
        return ctx.setLoggingFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](247, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "li")(249, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_249_listener() {
        return ctx.setProjectInformation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](251, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "li")(253, "div", 46)(254, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](256, "path", 47)(257, "path", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](260, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](261, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "ul", 32)(263, "li")(264, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_264_listener() {
        return ctx.showPCF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "li")(267, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_267_listener() {
        return ctx.showPinout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "li")(270, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_270_listener() {
        return ctx.showDatasheet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](272, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "li")(274, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_274_listener() {
        return ctx.showBoardRules();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](276, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](277, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "li")(279, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_279_listener() {
        return ctx.showCollectionData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](281, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "li")(283, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_283_listener() {
        return ctx.showCommandOutput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](285, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "li")(287, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_287_listener() {
        return ctx.showSystemInfo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](288);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](289, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](290, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "li")(292, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_292_listener() {
        return ctx.toggleFPGAResources();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](294, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](295, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "li", 26)(297, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "svg", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](299, "path", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](302, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](303, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "ul", 32)(305, "li", 37)(306, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](308, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "li", 37)(310, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](312, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "li", 52)(314, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "svg", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](316, "path", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](319, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](320, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "ul", 55)(322, "li")(323, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_323_listener() {
        return ctx.verifyCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](324);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](325, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](328, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "li")(330, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_330_listener() {
        return ctx.buildCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](332, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](335, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "li")(337, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_337_listener() {
        return ctx.uploadCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](339, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](342, "shortcut");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "li", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "li", 57)(345, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](347, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "ul", 32)(349, "li", 58)(350, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](351);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](352, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](354);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](355, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "li", 61)(357, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](358);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](359, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "li")(361, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](363, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](364, "li", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "li", 64)(366, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](367);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "li", 66)(369, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](371, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "ul", 32)(373, "li")(374, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](375);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](376, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "li")(378, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](379);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](380, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](381, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "li", 67)(383, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](384);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](385, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "ul", 32)(387, "li")(388, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_388_listener() {
        return ctx.addCollections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](390, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "li")(392, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_392_listener() {
        return ctx.reloadCollections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](393);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](394, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "li", 67)(396, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](397);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](398, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](399, "ul", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "li")(401, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_401_listener() {
        return ctx.removeAllCollections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](402);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](403, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "li", 69)(405, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "svg", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](407, "path", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](409);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](410, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](411, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "ul", 32)(413, "li", 72)(414, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](416, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](417, "li")(418, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_418_listener() {
        return ctx.openVersionInfoWindow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](420, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "li", 73)(422, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](424, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](425, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "li")(427, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](428);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](429, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "li")(431, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](432);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](433, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](434, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "li")(436, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](437);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](438, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](439, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "li")(441, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_441_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

        return ctx.about(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](442);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](443, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "div", 74)(445, "a", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "svg", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](447, "rect", 77)(448, "path", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](449, "a", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "svg", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](451, "rect", 77)(452, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](453, "a", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "svg", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](455, "path", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 98, ctx.filename$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](290, _c0, ctx.zIndex ? 1056 : 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 100, "File"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 102, "New"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](46, 104, "newProject", ctx.newProject));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 107, "Open"), "...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](53, 109, "openProject", ctx.openProjectDialog));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 112, "Blocks"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 114, "Examples"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 116, "Add as block"), "... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 118, "Save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](73, 120, "saveProject", ctx.saveProject));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](77, 123, "Save as"), "...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](80, 125, "saveProjectAs", ctx.saveProjectAs));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](85, 128, "Export"), "...");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Verilog");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("PCF");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](96, 130, "Testbench"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("GTKWave");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("BLIF");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Bitstream");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 132, "Quit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](117, 134, "quit", ctx.quit));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](124, 137, "Edit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](130, 139, "Undo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](133, 141, "undoGraph", ctx.undoGraph));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](137, 144, "Redo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](140, 146, "redoGraph", ctx.redoGraph));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](145, 149, "Cut"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](148, 151, "cutSelected", ctx.cutSelected));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](152, 154, "Copy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](155, 156, "copySelected", ctx.copySelected));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](159, 159, "Paste"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](162, 161, "pasteSelected", ctx.pasteSelected));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](166, 164, "Clone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](169, 166, "pasteAndCloneSelected", ctx.pasteAndCloneSelected));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](173, 169, "Select all"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](176, 171, "selectAll", ctx.selectAll));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](181, 174, "Fit content"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](184, 176, "fitContent", ctx.fitContent));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](188, 179, "Label Finder"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](191, 181, "showLabelFinder", ctx.showLabelFinder));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](195, 184, "Toolbox"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](198, 186, "showToolBox", ctx.showToolBox));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](203, 189, "Preferences"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](208, 191, "Language"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.language.supportLanguages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](215, 193, "UI theme"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](220, 195, "Board rules"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](225, 197, "External collections"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](229, 199, "External plugins"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](233, 201, "Python environment"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](237, 203, "Remote hostname"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](242, 205, "Logging enabled"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](247, 207, "Logging file"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](251, 209, "Project information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](260, 211, "View"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("PCF");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Pinout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](272, 213, "Datasheet"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](276, 215, "Board rules"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](281, 217, "Collection info"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](285, 219, "Command output"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](289, 221, "System Info"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](294, 223, "FPGA resources"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](302, 225, "Select"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](308, 227, "Board"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](312, 229, "Collection"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](319, 231, "Tools"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](325, 233, "Verify"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](328, 235, "verifyCode", ctx.verifyCode));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](332, 238, "Build"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](335, 240, "buildCode", ctx.buildCode));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](339, 243, "Upload"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](342, 245, "uploadCode", ctx.uploadCode));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](347, 248, "Toolchain"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](352, 250, "Install (Stable)"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](355, 252, "Update (Latest stable)"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](359, 254, "Remove"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](363, 256, "Install Development version"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Apio :0.0.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](371, 258, "Drivers"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](376, 260, "Enable"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](380, 262, "Disable"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](385, 264, "Collections"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](390, 266, "Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](394, 268, "Reload"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](398, 270, "Remove"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](403, 272, "Remove all"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](410, 274, "Help"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](416, 276, "View license"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](420, 278, "Version notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](424, 280, "Version"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](429, 282, "Documentation"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](433, 284, "Source code"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](438, 286, "Community forum"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](443, 288, "About Semtron"));
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _shared_pipes_shortcut_pipe__WEBPACK_IMPORTED_MODULE_3__.ShortcutPipe],
  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Cairo:wght@800&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap\");\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.is-disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.8;\n}\n.looks-disabled[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.navbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d5dadd;\n  margin-bottom: 0;\n  z-index: 1502;\n}\n.navbar-right[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.shortcut[_ngcontent-%COMP%] {\n  display: inline;\n  float: right;\n  color: #999;\n}\n.dropdown-submenu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-submenu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  top: 0;\n  left: 100%;\n  margin-top: -6px;\n  margin-left: 0;\n  border-radius: 0;\n  visibility: hidden;\n  transition-delay: 0.3s;\n  \n}\n.dropdown-overflow[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 120px);\n  overflow: auto;\n}\n.dropdown-submenu[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  visibility: visible;\n  transition-delay: 0.3s;\n}\n.dropdown-submenu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  display: block;\n  float: right;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px 20px 5px 5px;\n  border-left-color: #ccc;\n  margin-top: 5px;\n  margin-right: -10px;\n}\n.dropdown-submenu.pull-left[_ngcontent-%COMP%] {\n  float: none;\n}\n.dropdown-submenu.pull-left[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  left: -100%;\n  margin-left: 10px;\n  border-radius: 6px 0 6px 6px;\n}\n.dropdown-submenu-right[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-submenu-right[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  top: 0;\n  right: 100%;\n  margin-top: -6px;\n  margin-left: -1px;\n  border-radius: 0;\n  visibility: hidden;\n  transition-delay: 0.3s;\n}\n.dropdown-submenu-right[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  visibility: visible;\n  transition-delay: 0.3s;\n}\n.dropdown-submenu-right[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \" \";\n  float: left;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #ccc;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.marker[_ngcontent-%COMP%] {\n  float: left;\n  width: 8px;\n  height: 8px;\n  margin-top: 6px;\n  margin-right: 12px;\n  border-radius: 1px;\n}\n.marker-yellow[_ngcontent-%COMP%] {\n  background-color: #f6f688;\n}\n.marker-fuchsia[_ngcontent-%COMP%] {\n  background-color: #d51dec;\n}\n.marker-orange[_ngcontent-%COMP%] {\n  background-color: #f8e5a0;\n}\n.marker-blue[_ngcontent-%COMP%] {\n  background-color: #c0dfeb;\n}\n.marker-gray[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n.disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n.credits-rss-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.alertify[_ngcontent-%COMP%]   .ajs-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.credits-developers-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 15px;\n  padding: 0;\n  margin-left: 15px;\n}\n.credits-developers-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n}\n.credits-developers-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n#iceToolbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 160px;\n  height: 220px;\n  z-index: -1;\n  visibility: hidden;\n}\n#iceToolbox.opened[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 999;\n}\n#iceToolbox.opened[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  top: 0;\n  left: 0;\n}\n.shortcut-toolbox--item[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-block;\n  margin-left: 2px;\n  margin-right: 2px;\n  opacity: 0.6;\n}\n.shortcut-toolbox--item[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.shortcut-toolbox--item[_ngcontent-%COMP%]:first-child {\n  margin-left: 15px;\n}\n.shortcut-toolbox--item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.navbar[_ngcontent-%COMP%] {\n  min-height: 28px;\n  padding-bottom: 0;\n}\n.navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 0px;\n}\n@media (min-width: 768px) {\n  .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 13px;\n    padding-bottom: 10px;\n    line-height: 0;\n  }\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  \n  color: grey;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding-bottom: 3.563rem;\n  padding-top: 5rem;\n  margin-left: 6rem;\n  margin-right: 11rem;\n  border-bottom: 1px solid #000;\n  justify-content: start;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  align-self: start;\n  padding: 0.5rem 0.5rem 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n  margin-top: -6%;\n}\n.modal-title[_ngcontent-%COMP%] {\n  align-self: start;\n  height: 60%;\n  line-height: 1.5;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n}\n.title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: start;\n  margin-top: 0.5rem;\n  justify-content: space-between;\n  height: 100%;\n  width: -moz-fit-content;\n  width: fit-content;\n  flex-direction: column;\n}\n.title-container[_ngcontent-%COMP%]   .subtitle-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 29px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  margin-left: 6rem;\n}\n.modal-body[_ngcontent-%COMP%]   .semtron-explanation[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  margin-right: 11rem;\n}\n.modal-body[_ngcontent-%COMP%]   .semtron-contact[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 29px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n  height: 60%;\n  margin-left: 6rem;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n}\n.icon[_ngcontent-%COMP%] {\n  padding-top: 7.5rem;\n}\n.modal-xl[_ngcontent-%COMP%]   .modal-lg[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.btn-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin-right: 2rem;\n  margin-top: 2rem;\n}\n.semtron-contact-container[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.btn-outline-dark[_ngcontent-%COMP%] {\n  width: 10.563rem;\n  height: 3.688rem;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: #a9a6a6;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 0px 30px 0px 30px;\n  margin: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Cairo\", sans-serif;\n  font-size: 22px;\n  color: #3F8C76;\n  font-weight: 1000;\n  margin-bottom: 5px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n}\n.nav-links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0.5rem;\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #D6E6DF;\n  border-radius: 10px 10px 0 0;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Cairo\", sans-serif;\n}\n@media only screen and (max-width: 1200px) {\n  .menu-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBR0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQURGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFLQTtFQUVFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FBSEY7QUFNQTtFQUNFO0lBQ0UsYUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvOndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2Fpcm86d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaXMtZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubG9va3MtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5uYXZiYXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZGFkZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgei1pbmRleDogMTUwMjtcbn1cblxuLm5hdmJhci1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNob3J0Y3V0IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZHJvcGRvd24tc3VibWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUgPiAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAvKiBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvKi9cbn1cblxuLmRyb3Bkb3duLW92ZXJmbG93IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gLmRyb3Bkb3duLW1lbnUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4uZHJvcGRvd24tc3VibWVudSA+IGE6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDVweCAyMHB4IDVweCA1cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51LnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQgPiAuZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IC0xMDAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51LXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tc3VibWVudS1yaWdodCA+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4uZHJvcGRvd24tc3VibWVudS1yaWdodDpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUtcmlnaHQgPiBhOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNjY2M7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1hcmtlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLm1hcmtlci15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNjg4O1xufVxuXG4ubWFya2VyLWZ1Y2hzaWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUxZGVjO1xufVxuXG4ubWFya2VyLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGU1YTA7XG59XG5cbi5tYXJrZXItYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGRmZWI7XG59XG5cbi5tYXJrZXItZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5kaXNhYmxlZCA+IGEge1xuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbn1cblxuLmNyZWRpdHMtcnNzLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uYWxlcnRpZnkgLmFqcy1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uY3JlZGl0cy1kZXZlbG9wZXJzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNyZWRpdHMtZGV2ZWxvcGVycy1saXN0IGxpIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNyZWRpdHMtZGV2ZWxvcGVycy1saXN0IGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNpY2VUb29sYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgei1pbmRleDogLTE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI2ljZVRvb2xib3gub3BlbmVkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4jaWNlVG9vbGJveC5vcGVuZWQgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc2hvcnRjdXQtdG9vbGJveC0taXRlbSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5zaG9ydGN1dC10b29sYm94LS1pdGVtOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zaG9ydGN1dC10b29sYm94LS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5zaG9ydGN1dC10b29sYm94LS1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubmF2YmFyIHtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgfVxufVxuXG4vLyAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IG5vbmU7XG4vLyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBubyB1bmRlcmxpbmUgKi9cbiAgY29sb3I6IGdyZXk7XG59XG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDMuNTYzcmVtO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XG4gIG1hcmdpbi1yaWdodDogMTFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5idG4tY2xvc2Uge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBtYXJnaW46IC0wLjVyZW0gLTAuNXJlbSAtMC41cmVtIGF1dG87XG4gIG1hcmdpbi10b3A6IC02JTtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGhlaWdodDogNjAlO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZS1jb250YWluZXIgLnN1YnRpdGxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLm1vZGFsLWJvZHkge1xuICBtYXJnaW4tbGVmdDogNnJlbTtcbn1cbi5tb2RhbC1ib2R5IC5zZW10cm9uLWV4cGxhbmF0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcmVtO1xufVxuXG4ubW9kYWwtYm9keSAuc2VtdHJvbi1jb250YWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxMC43NXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiA2cmVtO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcbn1cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA3LjVyZW07XG59XG5cbi5tb2RhbC14bCAubW9kYWwtbGcge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnNlbXRyb24tY29udGFjdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyayB7XG4gIHdpZHRoOiAxMC41NjNyZW07XG4gIGhlaWdodDogMy42ODhyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhNmE2O1xuICAvLyBiYWNrZ3JvdW5kOiNBOUE2QTYgO1xufVxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOWE2YTY7XG59XG5cbmhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDBweCAzMHB4IDBweCAzMHB4O1xuICBtYXJnaW46IDA7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi50aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMzRjhDNzY7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5uYXYtbGlua3N7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubmF2LWxpbmtzPmxpe1xuICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RTZERjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cblxuLmJ1dHRvbnN7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ1dHRvbnMgYXtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG5cbmhlYWRlciBhe1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gIC5tZW51LXRleHR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 73310:
/*!**********************************************************!*\
  !*** ./src/app/core/components/paper/paper.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaperComponent": () => (/* binding */ PaperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// import * as $ from 'jquery';
// import * as _ from 'lodash';
// import * as $ from 'backbone';
// import * as joint from 'jointjs';
class PaperComponent {
    constructor() { }
}
PaperComponent.ɵfac = function PaperComponent_Factory(t) { return new (t || PaperComponent)(); };
PaperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaperComponent, selectors: [["app-paper"]], decls: 1, vars: 0, consts: [["id", "paper"]], template: function PaperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXBlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 37431:
/*!*******************************************************!*\
  !*** ./src/app/page/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/seo.service */ 2186);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class HomePageComponent {
    constructor(seo) {
        this.seo = seo;
        this.seo.generateTags({ title: 'Semtron Studio for FPGA', description: 'Semitron Studio is a web-based design tool focused on programming FPGA built on icestudio. The tools will provide developer with powerful drag and drop programming interface and support FPGA boards.', image: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png', slug: '' });
    }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 8, vars: 0, consts: [["routerLink", "/ide"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "header")(2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Semtron studio home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " welcome to Semtron studio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "explore semtron studio ide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5594:
/*!*****************************************************!*\
  !*** ./src/app/page/ide-page/ide-page.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdePageComponent": () => (/* binding */ IdePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/seo.service */ 2186);
/* harmony import */ var _core_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/menu/menu.component */ 54936);
/* harmony import */ var _core_components_controller_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/controller/controller.component */ 21776);




class IdePageComponent {
    constructor(seo) {
        this.seo = seo;
        this.seo.generateTags({ title: 'Semtron Studio IDE', description: 'Semitron Studio is a web-based design tool focused on programming FPGA built on icestudio. The tools will provide developer with powerful drag and drop programming interface and support FPGA boards.', image: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png', slug: 'ide' });
    }
    ngOnInit() {
    }
}
IdePageComponent.ɵfac = function IdePageComponent_Factory(t) { return new (t || IdePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_0__.SeoService)); };
IdePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IdePageComponent, selectors: [["app-ide-page"]], decls: 3, vars: 0, consts: [["id", "body"]], template: function IdePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-menu")(2, "app-controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_core_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _core_components_controller_controller_component__WEBPACK_IMPORTED_MODULE_2__.ControllerComponent], styles: ["#body[_ngcontent-%COMP%] {\n  min-width: 1000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJpZGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5e1xuICBtaW4td2lkdGg6IDEwMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 93708:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/shortcut.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortcutPipe": () => (/* binding */ ShortcutPipe)
/* harmony export */ });
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-hotkeys */ 71573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



var shortcuts = {
    newProject: {
        linux: { label: 'Ctrl+N' },
        mac: { label: '⌘+N' },
    },
    openProject: {
        linux: { label: 'Ctrl+O' },
        mac: { label: '⌘+O' },
    },
    saveProject: {
        linux: { label: 'Ctrl+S' },
        mac: { label: '⌘+S' },
    },
    saveProjectAs: {
        linux: { label: 'Ctrl+Shift+S' },
        mac: { label: 'Shift+⌘+S' },
    },
    quit: {
        linux: { label: 'Ctrl+Q' },
        mac: { label: '⌘+Q' },
    },
    undoGraph: {
        linux: { label: 'Ctrl+Z' },
        mac: { label: '⌘+Z' },
    },
    redoGraph: {
        linux: { label: 'Ctrl+Y' },
        mac: { label: '⌘+Y' },
    },
    redoGraph2: {
        linux: { label: 'Ctrl+Shift+Z' },
        mac: { label: 'Shift+⌘+Z' },
    },
    cutSelected: {
        linux: { label: 'Ctrl+X' },
        mac: { label: '⌘+X' },
    },
    copySelected: {
        linux: { label: 'Ctrl+C' },
        mac: { label: '⌘+C' },
    },
    pasteSelected: {
        linux: { label: 'Ctrl+V' },
        mac: { label: '⌘+V' },
    },
    pasteAndCloneSelected: {
        linux: { label: 'Ctrl+Shift+V' },
        mac: { label: 'Shit+⌘+V' },
    },
    selectAll: {
        linux: { label: 'Ctrl+A' },
        mac: { label: '⌘+A' },
    },
    fitContent: {
        linux: { label: 'Ctrl+1' },
        mac: { label: '⌘+1' },
    },
    verifyCode: {
        linux: { label: 'Ctrl+R' },
        mac: { label: '⌘+R' },
    },
    buildCode: {
        linux: { label: 'Ctrl+B' },
        mac: { label: '⌘+B' },
    },
    uploadCode: {
        linux: { label: 'Ctrl+U' },
        mac: { label: '⌘+U' },
    },
    stepUp: {
        linux: { label: 'Arrow up' },
        mac: { label: 'Arrow up' },
    },
    stepDown: {
        linux: { label: 'Arrow down' },
        mac: { label: 'Arrow down' },
    },
    stepLeft: {
        linux: { label: 'Arrow left' },
        mac: { label: 'Arrow left' },
    },
    stepRight: {
        linux: { label: 'Arrow right' },
        mac: { label: 'Arrow right' },
    },
    removeSelected: {
        linux: { label: 'Supr' },
        mac: { label: 'Fn+Delete' },
    },
    back: {
        linux: { label: 'Back' },
        mac: { label: 'Delete' },
    },
    takeSnapshot: {
        linux: { label: 'Ctrl+P' },
        mac: { label: '⌘+P' },
    },
};
class ShortcutPipe {
    constructor(_hotkeysService) {
        this._hotkeysService = _hotkeysService;
    }
    transform(action, fnReference, ...fnArguments) {
        var label = 'No shortcut';
        if (action in shortcuts) {
            var isMac = navigator.platform.includes('Mac');
            if (isMac) {
                label = shortcuts[action].mac.label;
            }
            else {
                label = shortcuts[action].linux.label;
            }
        }
        var hotkey = label.replace('Ctrl', 'ctrl').replace('Shift', 'shift').replace('⌘', 'meta').toLowerCase();
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_0__.Hotkey(hotkey, (event) => {
            fnReference.apply(null, fnArguments); // execute function
            return false; // Prevent bubbling
        }));
        return label;
    }
}
ShortcutPipe.ɵfac = function ShortcutPipe_Factory(t) { return new (t || ShortcutPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_0__.HotkeysService, 16)); };
ShortcutPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "shortcut", type: ShortcutPipe, pure: true });


/***/ }),

/***/ 2186:
/*!************************************************!*\
  !*** ./src/app/shared/services/seo.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);


class SeoService {
    constructor(meta) {
        this.meta = meta;
    }
    generateTags(config) {
        // default values
        config = Object.assign({ title: 'Angular <3 Linkbots', description: 'My SEO friendly Angular Component', image: 'https://angularfirebase.com/images/logo.png', slug: '' }, config);
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: `https://instafire-app.firebaseapp.com/${config.slug}` });
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta)); };
SeoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac });


/***/ }),

/***/ 835:
/*!****************************************************!*\
  !*** ./src/app/state/filename/filename.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "change": () => (/* binding */ change)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 35585);

const change = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Filename Component] Change', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 973:
/*!****************************************************!*\
  !*** ./src/app/state/filename/filename.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initial_state": () => (/* binding */ initial_state),
/* harmony export */   "filenameReducer": () => (/* binding */ filenameReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _filename_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filename.actions */ 835);


const initial_state = {
    title: 'defaultTitle',
};
const filenameReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initial_state, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_filename_actions__WEBPACK_IMPORTED_MODULE_0__.change, (state, { newFileName }) => (Object.assign(Object.assign({}, state), { title: newFileName }))));


/***/ }),

/***/ 371:
/*!******************************************************!*\
  !*** ./src/app/state/filename/filename.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectFileName": () => (/* binding */ selectFileName),
/* harmony export */   "fileNameSelector": () => (/* binding */ fileNameSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 35585);

const selectFileName = (state) => state.filename;
const fileNameSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFileName, (state) => state.title);


/***/ }),

/***/ 92340:
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(38202), __webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map