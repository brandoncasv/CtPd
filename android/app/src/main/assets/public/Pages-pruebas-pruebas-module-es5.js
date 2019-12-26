(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-pruebas-pruebas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/pruebas/pruebas.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/pruebas/pruebas.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pruebas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\" *ngIf=\"playerCount > 0\">\n    <form [formGroup]=\"myForm\">\n      <ion-item *ngFor=\"let control of myForm.controls | keyvalue\">\n        <ion-input required type=\"text\" [formControlName]=\"control.key\" placeholder=\"player name...\"></ion-input>\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list>\n  <ion-button expand=\"full\" color=\"light\"\n              (click)=\"addControl()\" color=\"danger\"\n                >Add Player</ion-button>\n\n\n  <ion-button expand=\"block\" color=\"dark\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" >\n          <h6 class=\"firs-label\">221 279 6918</h6>\n          <h6 class=\"second-label\">Movil</h6>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon name=\"mail\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/pruebas/pruebas.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/pruebas/pruebas.module.ts ***!
  \*************************************************/
/*! exports provided: PruebasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasPageModule", function() { return PruebasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pruebas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pruebas.page */ "./src/app/Pages/pruebas/pruebas.page.ts");







var PruebasPageModule = /** @class */ (function () {
    function PruebasPageModule() {
    }
    PruebasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _pruebas_page__WEBPACK_IMPORTED_MODULE_6__["PruebasPage"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_pruebas_page__WEBPACK_IMPORTED_MODULE_6__["PruebasPage"]]
        })
    ], PruebasPageModule);
    return PruebasPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/pruebas/pruebas.page.scss":
/*!*************************************************!*\
  !*** ./src/app/Pages/pruebas/pruebas.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  margin: 0 0 0 0;\n  white-space: normal;\n}\n\nion-button > ion-grid {\n  width: 100%;\n  height: 100%;\n  padding: 0 0 0 0;\n  margin: 0 -15px;\n}\n\nion-button > ion-grid > ion-row {\n  width: 100%;\n  height: 100%;\n}\n\nion-button > ion-grid > ion-row :host {\n  --padding-top: var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding));\n  --padding-bottom: var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding));\n}\n\nion-button > ion-grid > ion-row > ion-col {\n  width: 100%;\n  height: 100%;\n  padding: 5px 5px 5px 5px;\n}\n\n.firs-label {\n  font-size: 14px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 67%;\n  text-align: start;\n  padding-left: 5px;\n}\n\n.second-label {\n  font-size: 10px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 33%;\n  text-align: start;\n  padding-left: 5px;\n}\n\nion-button > ion-grid > ion-row > ion-col > ion-icon {\n  width: 90%;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jvb29zdGVyL0RvY3VtZW50cy9LdWJ1bnR1L1dlYl9TdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvcHJ1ZWJhcy9wcnVlYmFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvcHJ1ZWJhcy9wcnVlYmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGVBQUE7RUFDRCxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0Y7O0FERkU7RUFDRSwrRUFBQTtFQUNBLGtGQUFBO0FDSUo7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9wcnVlYmFzL3BydWViYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gICBtYXJnaW46IDAgMCAwIDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tYnV0dG9uID4gaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBtYXJnaW46IDAgLTE1cHg7XG59XG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93ICB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIDpob3N0IHtcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cyx2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZykpO1xuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nKSk7XG4gIH1cblxufVxuXG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xufVxuXG4uZmlycy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NyU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5zZWNvbmQtbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzMlO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1idXR0b24gPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbn0iLCJpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24tYnV0dG9uID4gaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBtYXJnaW46IDAgLTE1cHg7XG59XG5cbmlvbi1idXR0b24gPiBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkID4gaW9uLXJvdyA6aG9zdCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nKSk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nKSk7XG59XG5cbmlvbi1idXR0b24gPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xufVxuXG4uZmlycy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NyU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnNlY29uZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMyU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/pruebas/pruebas.page.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/pruebas/pruebas.page.ts ***!
  \***********************************************/
/*! exports provided: PruebasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasPage", function() { return PruebasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PruebasPage = /** @class */ (function () {
    function PruebasPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.playerCount = 0;
        this.myForm = formBuilder.group({
            player1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        console.log(this.myForm.value);
    }
    PruebasPage.prototype.addControl = function () {
        this.playerCount++;
        this.myForm.addControl('player' + this.playerCount, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        console.log(this.myForm.value);
    };
    PruebasPage.prototype.removeControl = function (control) {
        this.playerCount--;
        this.myForm.removeControl(control.key);
    };
    PruebasPage.prototype.ngOnInit = function () {
    };
    PruebasPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    PruebasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pruebas',
            template: __webpack_require__(/*! raw-loader!./pruebas.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/pruebas/pruebas.page.html"),
            styles: [__webpack_require__(/*! ./pruebas.page.scss */ "./src/app/Pages/pruebas/pruebas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PruebasPage);
    return PruebasPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-pruebas-pruebas-module-es5.js.map