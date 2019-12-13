(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar >\n    <ion-searchbar animated=\"true\" autocomplete=\"true\"\n    search-icon=\"menu\" placeholder=\"Buscar contactos\"\n    (ionChange)=\"buscarUsuario($event)\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list *ngIf=\"change_State\">\n    <ng-container *ngFor=\"let busqueda of busqueda | searchName:texto_busqueda\">\n      <ion-item lines=\"inset\" button [routerLink]=\"['/details-contact', busqueda.id]\">\n        <ion-avatar slot=\"start\" >\n          <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>{{busqueda.Nombre}} {{busqueda.Apellidos}}</h2>\n        </ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n\n\n  <ion-list *ngIf=\"!change_State\">\n\n  <ion-item >\n    <ion-avatar>\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-avatar>\n    <ion-label >Social</ion-label>\n    <ion-checkbox [(ngModel)]=\"social_Truee \"></ion-checkbox>\n  </ion-item>\n\n    <ng-container *ngFor=\"let otro of otros\">\n        <ion-item *ngIf=\"social_Truee ===  true\"\n                  lines=\"inset\" button [routerLink]=\"['/details-contact', otro.id]\">\n          <ion-avatar slot=\"start\" >\n            <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{otro.Nombre}} {{otro.Apellidos}}</h2>\n          </ion-label>\n        </ion-item>\n    </ng-container>\n\n\n      <ion-item>\n        <ion-avatar>\n          <ion-icon name=\"logo-freebsd-devil\"></ion-icon>\n        </ion-avatar>\n        <ion-label >Amigos</ion-label>\n        <ion-checkbox [(ngModel)]=\"amigos_Truee\" ></ion-checkbox>\n      </ion-item>\n\n  <ng-container  *ngFor=\"let amigo of amigos\">\n    <ion-item  *ngIf=\"amigos_Truee === true\"\n               lines=\"inset\" button [routerLink]=\"['/details-contact', amigo.id]\">\n      <ion-avatar slot=\"start\" >\n        <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{amigo.Nombre}} {{amigo.Apellidos}}</h2>\n      </ion-label>\n    </ion-item>\n  </ng-container>\n\n      <ion-item>\n        <ion-avatar>\n          <ion-icon name=\"body\">s</ion-icon>\n        </ion-avatar>\n        <ion-label >Trabajo</ion-label>\n        <ion-checkbox [(ngModel)]=\"trabajo_Truee\" ></ion-checkbox>\n      </ion-item>\n\n  <ng-container *ngFor=\"let trabajo of trabajos\">\n    <ion-item  *ngIf=\"trabajo_Truee === true\"\n               lines=\"inset\" button [routerLink]=\"['/details-contact', trabajo.id]\">\n      <ion-avatar slot=\"start\" >\n        <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{trabajo.Nombre}} {{trabajo.Apellidos}}</h2>\n      </ion-label>\n    </ion-item>\n  </ng-container>\n\n  </ion-list>\n\n  <ion-fab  vertical=\"center\" horizontal=\"center\" slot=\"fixed\" edge>\n    <ion-fab-button color=\"light\" routerLink=\"/create\">\n                    <!--href=\"/create\"-->\n      <ion-icon name=\"add\" ></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/Pages/home/home.page.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/Pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#000000;\n  --ion-text-color: var(--ion-color-light);\n}\n\nion-searchbar {\n  --background: #505050;\n  --color: #ffffff;\n  --icon-color: #ffffff;\n  --placeholder-color: #ffffff;\n  --placeholder-font-weight: 50px;\n  padding: 10px 15px 0px 15px;\n  border-radius: 50px;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\n\nion-button {\n  --ion-text-color: var(--ion-color-light);\n  --ion-background-color: #85929E;\n}\n\nion-checkbox {\n  --background: #fff;\n  --background-checked: #fff;\n  --checkmark-color: var(--ion-color-primary);\n  --border-style: none;\n}\n\nion-list {\n  display: grid;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n\nion-fab {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FEU0E7RUFDRSwrQkFBQTtFQUNBLHdDQUFBO0FDTkY7O0FEUUE7RUFDRSx3Q0FBQTtFQUNBLCtCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxjQUFBO0FDTEY7O0FEUUE7RUFDQSxjQUFBO0FDTEEiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuXG59XG5pb24taGVhZGVyID4gaW9uLXRpdGxlIHtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzUwNTA1MDtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pY29uLWNvbG9yOiAjZmZmZmZmO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cblxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1idXR0b24ge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODU5MjlFO1xuXG59XG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuaW9uLWZhYiB7XG5kaXNwbGF5OiBibG9jaztcbn1cbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICM1MDUwNTA7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0taWNvbi1jb2xvcjogI2ZmZmZmZjtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZmZmZjtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjODU5MjlFO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuaW9uLWZhYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_crud_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/crud-firestore.service */ "./src/app/Services/crud-firestore.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(router, crudService) {
        this.router = router;
        this.crudService = crudService;
        this.amigos_Truee = false;
        this.trabajo_Truee = false;
        this.social_Truee = false;
        this.texto_busqueda = '';
        this.change_State = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.crudService.get_Contacts().subscribe(function (res) {
            console.log(res);
            _this.busqueda = res;
            _this.obtener(res);
        });
    };
    HomePage.prototype.buscarUsuario = function (event) {
        var texto = event.target.value;
        this.texto_busqueda = texto;
        if (texto === '') {
            this.change_State = false;
        }
        if (texto != '') {
            this.change_State = true;
        }
    };
    HomePage.prototype.obtener = function (res) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.pruebaFiltro = res;
                        _a = this;
                        return [4 /*yield*/, this.pruebaFiltro.filter(function (otros) {
                                return otros.Circulo === 'Otros' || otros.Circulo === '';
                            })];
                    case 1:
                        _a.otros = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.pruebaFiltro.filter(function (trabajos) {
                                return trabajos.Circulo === 'Trabajo';
                            })];
                    case 2:
                        _b.trabajos = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.pruebaFiltro.filter(function (amigos) {
                                return amigos.Circulo === 'Amigos';
                            })];
                    case 3:
                        _c.amigos = _d.sent();
                        console.log(this.otros, this.amigos, this.trabajos);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_crud_firestore_service__WEBPACK_IMPORTED_MODULE_3__["CrudFirestoreService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/Pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_crud_firestore_service__WEBPACK_IMPORTED_MODULE_3__["CrudFirestoreService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/Services/crud-firestore.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/crud-firestore.service.ts ***!
  \****************************************************/
/*! exports provided: CrudFirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudFirestoreService", function() { return CrudFirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CrudFirestoreService = /** @class */ (function () {
    /* private amigos_Collection: AngularFirestoreCollection<Contacto>;
     private amigos_Contacs: Observable<Contacto[]>;
     private otros_Collection: AngularFirestoreCollection<Contacto>;
     private otros_Contacs: Observable<Contacto[]>;*/
    function CrudFirestoreService(fs) {
        this.fs = fs;
        this.trabajo_Collection = fs.collection('Contacto');
        this.trabajo_Contacs = this.trabajo_Collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    CrudFirestoreService.prototype.get_Contacts = function () {
        return this.trabajo_Contacs;
    };
    CrudFirestoreService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    CrudFirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CrudFirestoreService);
    return CrudFirestoreService;
}());

/* this.trabajo_Collection = fs.collection<Contacto>('Contacto',
            ref => ref.where('Circulo', '==', 'Trabajo'));
    this.trabajo_Contacs = this.trabajo_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));

    this.amigos_Collection = fs.collection<Contacto>('Contacto',
        ref => ref.where('Circulo', '==', 'Amigos') );
    this.amigos_Contacs = this.amigos_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));

    this.otros_Collection = fs.collection<Contacto>('Contacto',
        ref => ref.where('Circulo', '==', 'Otros') );
    this.otros_Contacs = this.otros_Collection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
    ));*/ 


/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-name.pipe */ "./src/app/pipe/search-name.pipe.ts");



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_name_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchNamePipe"]],
            exports: [_search_name_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchNamePipe"]],
            imports: []
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/pipe/search-name.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/search-name.pipe.ts ***!
  \******************************************/
/*! exports provided: SearchNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNamePipe", function() { return SearchNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchNamePipe = /** @class */ (function () {
    function SearchNamePipe() {
    }
    SearchNamePipe.prototype.transform = function (contacts, texto) {
        if (texto.length === 0) {
            return contacts;
        }
        texto = texto.toLocaleLowerCase();
        return contacts.filter(function (usuario) {
            return usuario.Nombre.toLocaleLowerCase().includes(texto)
                || usuario.Apellidos.toLocaleLowerCase().includes(texto);
        });
    };
    SearchNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchName'
        })
    ], SearchNamePipe);
    return SearchNamePipe;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-home-home-module-es5.js.map