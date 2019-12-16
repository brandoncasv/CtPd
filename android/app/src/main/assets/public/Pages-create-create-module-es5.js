(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/create/create.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/create/create.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n      <ion-title >Nuevo contacto</ion-title>\n      <ion-button [disabled]=\"!create_Form.valid\" type=\"submit\"\n                  (click)=\"save_Contact(create_Form.value)\"\n                  slot=\"end\" color=\"none\" >\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-button class=\"customButton\" (click)=\"showAction()\" >\n          <ion-avatar *ngIf=\"photo === ''\" >\n            <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n          </ion-avatar>\n          <ion-avatar *ngIf=\"photo !== ''\">\n            <ion-img [src]=\"photo\"></ion-img>\n          </ion-avatar>\n        </ion-button >\n\n      </ng-container>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-button color=\"dark\" (click)=\"take_a_Photo()\">Agregar foto</ion-button>\n    </ion-row>\n\n    <form [formGroup]=\"create_Form\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"contact\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input placeholder=\"Prefijo\" formControlName=\"Prefijo\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n              <ion-label>Circulo</ion-label>\n              <ion-select formControlName=\"Circulo\" placeholder=\"Circulo\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n          <ion-input placeholder=\"Nombre\"\n                     formControlName=\"Nombre\"></ion-input>\n      </ion-row>\n      <ion-row >\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apellidos\" formControlName=\"Apellidos\" ></ion-input>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apodo\" formControlName=\"Apodo\"></ion-input>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Sitio Web\" formControlName=\"SitioWeb\" ></ion-input>\n      </ion-row>\n    </form>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Controltel()\">\n          Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"show\">\n        <form [formGroup]=\"tel_Form\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"5\">\n              <ion-input type=\"number\" placeholder=\"Teléfono\"\n                         formControlName=\"Telefono\"></ion-input>\n          </ion-col>\n\n         <ion-col size=\"3\">\n              <ion-select formControlName=\"tipo_Telefono\" placeholder=\"Tipo\">\n                <ion-label>Tipo</ion-label>\n                <ion-select-option value=\"movil\">Movil</ion-select-option>\n                <ion-select-option value=\"casa\">Casa</ion-select-option>\n                <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n          </ion-col>\n\n          <ion-col size=\"2\">\n              <ion-button color=\"none\" (click)=\"delete_Controltel()\" size=\"small\">\n                <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n              </ion-button>\n          </ion-col>\n        </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Controldir()\">\n          Añadir dirección</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"showDir\">\n      <form [formGroup]=\"dir_Form\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" placeholder=\"No. Ext\"\n                       formControlName=\"Numero\"></ion-input>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" placeholder=\"C.P.\"\n                       formControlName=\"CP\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <ion-button color=\"none\" (click)=\"delete_Controldir()\" size=\"small\">\n              <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n            </ion-button>\n          </ion-col>\n      </form>\n      <form [formGroup]=\"dir_Form\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"text\" placeholder=\"Calle\"\n                     formControlName=\"Calle\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Ciudad\"\n                     formControlName=\"Ciudad\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Estado\"\n                     formControlName=\"Estado\"></ion-input>\n        </ion-col>\n      </form>\n\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Correo()\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"showCorreo\">\n      <form [formGroup]=\"correo_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input type=\"text\" placeholder=\"Correo electronico\"\n                     formControlName=\"Correo\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" (click)=\"delete_Controlcorreo()\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_fecha()\">Fecha</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  *ngIf=\"showfecha\">\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-datetime displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          placeholder=\"Pulsa Aquí\" max=\"2070-12-31\"\n                          formControlName=\"Fecha\"></ion-datetime>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-select formControlName=\"tipo_Fecha\" placeholder=\"Tipo\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"Cumpleaños\">Cumpleaños</ion-select-option>\n            <ion-select-option value=\"Recordatorio\">Recordatorio</ion-select-option>\n            <ion-select-option value=\"Aniversario\">Aniversario</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" (click)=\"delete_Controlfecha()\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-textarea formControlName=\"Descripcion\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/create/create.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/create/create.module.ts ***!
  \***********************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/Pages/create/create.page.ts");







var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/Pages/create/create.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Pages/create/create.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row .customButton {\n  --background: none;\n  width: 64px;\n  height: 64px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start:0;\n}\nion-content ion-grid > ion-row .customButton ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content ion-grid > ion-row ion-button {\n  margin: 0 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\nion-content ion-datetime {\n  padding: 5px 0 12px 0;\n}\nion-content ion-textarea {\n  background-color: #1d1d1d;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0NGO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0FGO0FESUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRk47QURHTTtFQUNFLHFCQUFBO0FDRFI7QURLSTtFQUNFLGtCQUFBO0FDSE47QURPRTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTko7QURTRTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEV0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEo7QURhRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDWko7QURjSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ1pOO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ2RKO0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKO0FEb0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xCTjtBRHFCSTtFQUNFLFlBQUE7QUNuQk47QURvQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0FDbEJSO0FEMkJFO0VBQ0UsYUFBQTtBQ3pCSjtBRDBCSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7QUN4Qk47QUQwQk07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ3hCUjtBRDhCQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDNUJGO0FENkJFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUMzQko7QUQrQkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7QUQrQkk7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FDN0JOO0FEb0NFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNsQ0o7QURzQ0U7RUFDRSxxQkFBQTtBQ3BDSjtBRHNDRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG5cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICAwIDAgMCAwO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgfVxuICBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAvL2F2YXRhciB5IGJvdG9uIGFncmVnYXIgZm90b1xuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIC5jdXN0b21CdXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgfVxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMXB4O1xuXG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG5cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzhweDtcbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pdGVtID4gaW9uLXNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCA6aG9zdCguaXRlbS1saW5lcy1mdWxsKSB7XG4gICAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAxO1xuICAgICAgLS1zaG93LWluc2V0LWhpZ2hsaWdodDogMTtcbiAgICB9XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAvL0FxdWkgdGVybWluYSBlbCBmb3JtdWxhcmlvIGNvbnRhY3RvXG5cbiAgLy9Cb3RvbmVzXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG5cbiAgLy9Gb3JtdWxhcmlvcyBkZXNwbGVnYWJsZXNcblxuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsb3c7XG4gICAgZm9ybSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbmlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuXG59XG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgICBwb3NpdGlvbjogY2VudGVyO1xuICAgIC0tcGFkZGluZzogMCAwIDAgMDtcbiAgICBkaXNwbGF5OiBjb21wYWN0O1xuXG4gICAgaW5wdXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICB9XG4gIH1cblxuXG4gIC8vQm90b24geSBmb3JtdWxhcmlvIGRlIGRpcmVjY2nDs25cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsb3c7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgfVxuXG4gIGlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZzogNXB4IDAgMTJweCAwO1xuICB9XG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyAuY3VzdG9tQnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgLmN1c3RvbUJ1dHRvbiBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCBpb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiA6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGZvcm0gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBjb21wYWN0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiA1cHggMCAxMnB4IDA7XG59XG5pb24tY29udGVudCBpb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/create/create.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/create/create.page.ts ***!
  \*********************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/contact.service */ "./src/app/Services/contact.service.ts");
/* harmony import */ var _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/telefono.service */ "./src/app/Services/telefono.service.ts");
/* harmony import */ var _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/direccion.service */ "./src/app/Services/direccion.service.ts");
/* harmony import */ var _Services_fecha_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/fecha.service */ "./src/app/Services/fecha.service.ts");












var CreatePage = /** @class */ (function () {
    function CreatePage(sanitizer, builder, crudService, toastController, loadingController, nav, _telService, _dirService, _fechaService, _action) {
        this.sanitizer = sanitizer;
        this.builder = builder;
        this.crudService = crudService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this._telService = _telService;
        this._dirService = _dirService;
        this._fechaService = _fechaService;
        this._action = _action;
        this.showCorreo = false;
        this.showfecha = false;
        this.photo = '';
        this.default_Number = null;
        this.customDayShortNames = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
        this.customShowMonth = ['Enero', 'Febrero', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'];
    }
    CreatePage.prototype.ngOnInit = function () {
        this.create_Form = this.builder.group({
            Nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Apellidos: [''],
            Correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            Apodo: [''],
            Circulo: [''],
            Prefijo: [''],
            SitioWeb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)],
        });
        this.tel_Form = this.builder.group({});
        this.dir_Form = this.builder.group({});
        this.correo_Form = this.builder.group({});
        this.fecha_Form = this.builder.group({});
    };
    CreatePage.prototype.take_a_Photo = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image, image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(id === 'Camara')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                                quality: 100,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                            })];
                    case 1:
                        image = _a.sent();
                        this.photo = image.webPath;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                            quality: 100,
                            allowEditing: true,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos
                        })];
                    case 3:
                        image = _a.sent();
                        this.photo = image.webPath;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreatePage.prototype.openToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatePage.prototype.save_Contact = function (createForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Subiendo a la nube'
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.crudService.add_Contact(createForm).then(function (result) {
                                return result.id;
                            })];
                    case 3:
                        _a.contact_ID = _b.sent();
                        console.log(this.contact_ID);
                        if (!this.show) return [3 /*break*/, 5];
                        this.tel_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                        return [4 /*yield*/, this._telService.add_Telefono(this.tel_Form.value)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        if (!this.showCorreo) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.crudService.update_Contact(this.correo_Form.value, this.contact_ID)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        if (!this.showDir) return [3 /*break*/, 9];
                        this.dir_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                        return [4 /*yield*/, this._dirService.add_Direccion(this.dir_Form.value).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/');
                            })];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        if (!this.showfecha) return [3 /*break*/, 11];
                        this.fecha_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                        return [4 /*yield*/, this._fechaService.addFecha(this.fecha_Form.value).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/');
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CreatePage.prototype.add_Controltel = function () {
        this.show = true;
        this.tel_Form.addControl('Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)));
        this.tel_Form.addControl('tipo_Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        console.log(this.tel_Form.value);
    };
    CreatePage.prototype.delete_Controltel = function () {
        this.show = false;
    };
    CreatePage.prototype.add_Controldir = function () {
        this.showDir = true;
        this.dir_Form.addControl('Calle', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)));
        this.dir_Form.addControl('Ciudad', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('Estado', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('Numero', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('CP', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        console.log(this.tel_Form.value);
    };
    CreatePage.prototype.delete_Controldir = function () {
        this.showDir = false;
    };
    CreatePage.prototype.add_Correo = function () {
        this.showCorreo = true;
        this.correo_Form.addControl('Correo', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
    };
    CreatePage.prototype.delete_Controlcorreo = function () {
        this.showCorreo = false;
    };
    CreatePage.prototype.add_fecha = function () {
        this.showfecha = true;
        this.fecha_Form.addControl('Descripcion', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
        this.fecha_Form.addControl('Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
        this.fecha_Form.addControl('tipo_Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
    };
    CreatePage.prototype.delete_Controlfecha = function () {
        this.showfecha = false;
    };
    CreatePage.prototype.showAction = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._action.create({
                            header: 'Agrega una imagen',
                            buttons: [
                                {
                                    text: 'Camara',
                                    icon: 'camera',
                                    handler: function (id) {
                                        if (id === void 0) { id = 'Camara'; }
                                        _this.take_a_Photo(id);
                                    }
                                },
                                {
                                    text: 'Galeria',
                                    icon: 'images',
                                    handler: function (id) {
                                        if (id === void 0) { id = 'Galeria'; }
                                        _this.take_a_Photo(id);
                                    }
                                },
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatePage.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _Services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"] },
        { type: _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"] },
        { type: _Services_fecha_service__WEBPACK_IMPORTED_MODULE_9__["FechaService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
    ]; };
    CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/Pages/create/create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _Services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"],
            _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"],
            _Services_fecha_service__WEBPACK_IMPORTED_MODULE_9__["FechaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]])
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-create-create-module-es5.js.map