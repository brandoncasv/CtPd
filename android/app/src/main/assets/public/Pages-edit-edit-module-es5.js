(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/edit/edit.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Nuevo contacto</ion-title>\n    <ion-button type=\"submit\" slot=\"end\" color=\"none\" >\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-avatar *ngIf=\"photo === ''\">\n          <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n        </ion-avatar>\n        <ion-avatar *ngIf=\"photo !== ''\">\n          <ion-img [src]=\"photo\"></ion-img>\n        </ion-avatar>\n      </ng-container>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-button color=\"dark\" (click)=\"take_a_Photo()\">Agregar foto</ion-button>\n    </ion-row>\n\n\n    <form *ngFor=\"let data of data\">\n\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"contact\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input placeholder=\"Prefijo\" >\n          </ion-input>\n        </ion-col>\n\n        <ion-col size=\"6\">\n\n          <ion-item>\n            <ion-label>Circulo</ion-label>\n            <ion-select  placeholder=\"Social\">\n              <ion-select-option value=\"Otros\">Otros</ion-select-option>\n              <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n              <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"{{(data | async)?.Nombre}}\"></ion-input>\n      </ion-row>\n      <ion-row >\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apellidos\"></ion-input>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apodo\"></ion-input>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Sitio Web\"></ion-input>\n      </ion-row>\n    </form>\n\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" >Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  >\n      <form>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"number\" placeholder=\"Teléfono\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"3\">\n          <ion-select placeholder=\"Tipo\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"movil\">Movil</ion-select-option>\n            <ion-select-option value=\"casa\">Casa</ion-select-option>\n            <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\"  size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" >Añadir dirección</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  >\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-input type=\"number\" placeholder=\"No. Ext\"></ion-input>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-input type=\"number\" placeholder=\"C.P.\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form >\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"text\" placeholder=\"Calle\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Ciudad\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Estado\"></ion-input>\n        </ion-col>\n      </form>\n\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row >\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input type=\"text\" placeholder=\"Correo electronico\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\"  size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/edit/edit.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/edit/edit.module.ts ***!
  \*******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/Pages/edit/edit.page.ts");







var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/edit/edit.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/edit/edit.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content ion-grid > ion-row ion-button {\n  margin: 0 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURNQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNIRjtBRE9JO0VBQ0UscUJBQUE7QUNMTjtBRE9JO0VBQ0Usa0JBQUE7QUNMTjtBRFNFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ1BKO0FEVUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdFO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGVFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURnQkk7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNkTjtBRGtCRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQko7QURzQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNwQko7QURzQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsWUFBQTtBQ3JCTjtBRHNCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNwQlI7QUQ2QkU7RUFDRSxhQUFBO0FDM0JKO0FENEJJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtBQzFCTjtBRDRCTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDMUJSO0FEZ0NFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUM5Qko7QUQrQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzdCTjtBRGlDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQy9CSjtBRGlDSTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7QUMvQk47QURzQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ3BDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuXG4gIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbiAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAgMCAwIDAgMDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gIH1cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uID4gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgLy9hdmF0YXIgeSBib3RvbiBhZ3JlZ2FyIGZvdG9cbiAgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgfVxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMXB4O1xuXG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG5cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzhweDtcbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pdGVtID4gaW9uLXNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCA6aG9zdCguaXRlbS1saW5lcy1mdWxsKSB7XG4gICAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAxO1xuICAgICAgLS1zaG93LWluc2V0LWhpZ2hsaWdodDogMTtcbiAgICB9XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAvL0FxdWkgdGVybWluYSBlbCBmb3JtdWxhcmlvIGNvbnRhY3RvXG5cbiAgLy9Cb3RvbmVzXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG5cbiAgLy9Gb3JtdWxhcmlvcyBkZXNwbGVnYWJsZXNcblxuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsb3c7XG4gICAgZm9ybSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgfVxuXG4gIH1cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQge1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICAgIGRpc3BsYXk6IGNvbXBhY3Q7XG5cbiAgICBpbnB1dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICAgIH1cbiAgfVxuXG5cbiAgLy9Cb3RvbiB5IGZvcm11bGFyaW8gZGUgZGlyZWNjacOzblxuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxvdztcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCBpb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiA6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGZvcm0gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBjb21wYWN0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/edit/edit.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/edit/edit.page.ts ***!
  \*****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditPage = /** @class */ (function () {
    function EditPage(_route, router) {
        this._route = _route;
        this.router = router;
        this.photo = '';
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.user;
                console.log(_this.data);
            }
        });
    };
    EditPage.prototype.take_a_Photo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                            quality: 100,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                        })];
                    case 1:
                        image = _a.sent();
                        this.photo = image.webPath;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/Pages/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-edit-edit-module-es5.js.map