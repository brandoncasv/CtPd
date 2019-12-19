(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/create/create.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/create/create.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"create.page.ts\"></script>\n<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n      <ion-title >Nuevo contacto</ion-title>\n      <ion-button [disabled]=\"!create_Form.valid\" type=\"submit\"\n                  (click)=\"save_Contact(create_Form.value)\"\n                  slot=\"end\" color=\"none\" >\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-button class=\"customButton\" (click)=\"showAction()\" >\n          <ion-avatar *ngIf=\"photo === ''\" >\n            <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n          </ion-avatar>\n          <ion-avatar *ngIf=\"photo !== ''\">\n            <ion-img [src]=\"photo\"></ion-img>\n          </ion-avatar>\n        </ion-button >\n      </ng-container>\n\n    </ion-row>\n    <!--\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-button color=\"dark\" (click)=\"take_a_Photo()\">Agregar foto</ion-button>\n    </ion-row>-->\n\n    <form [formGroup]=\"create_Form\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"contact\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input placeholder=\"Prefijo\" formControlName=\"Prefijo\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n              <ion-label>Circulo</ion-label>\n              <ion-select formControlName=\"Circulo\" placeholder=\"Circulo\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n          <ion-input placeholder=\"Nombre\"\n                     formControlName=\"Nombre\"></ion-input>\n      </ion-row>\n      <ion-row >\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apellidos\" formControlName=\"Apellidos\" ></ion-input>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Apodo\" formControlName=\"Apodo\"></ion-input>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"Sitio Web\" formControlName=\"SitioWeb\" ></ion-input>\n      </ion-row>\n    </form>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Controltel()\">\n          Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"show\">\n        <form [formGroup]=\"tel_Form\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"5\">\n              <ion-input type=\"number\" placeholder=\"Teléfono\"\n                         formControlName=\"Telefono\"></ion-input>\n          </ion-col>\n\n         <ion-col size=\"3\">\n              <ion-select formControlName=\"tipo_Telefono\" placeholder=\"Tipo\">\n                <ion-label>Tipo</ion-label>\n                <ion-select-option value=\"movil\">Movil</ion-select-option>\n                <ion-select-option value=\"casa\">Casa</ion-select-option>\n                <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n          </ion-col>\n\n          <ion-col size=\"2\">\n              <ion-button color=\"none\" (click)=\"delete_Controltel()\" size=\"small\">\n                <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n              </ion-button>\n          </ion-col>\n        </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Controldir()\">\n          Añadir dirección</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"showDir\">\n      <form [formGroup]=\"dir_Form\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" placeholder=\"No. Ext\"\n                       formControlName=\"Numero\"></ion-input>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" placeholder=\"C.P.\"\n                       formControlName=\"CP\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <ion-button color=\"none\" (click)=\"delete_Controldir()\" size=\"small\">\n              <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n            </ion-button>\n          </ion-col>\n      </form>\n      <form [formGroup]=\"dir_Form\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"text\" placeholder=\"Calle\"\n                     formControlName=\"Calle\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Ciudad\"\n                     formControlName=\"Ciudad\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"Estado\"\n                     formControlName=\"Estado\"></ion-input>\n        </ion-col>\n      </form>\n\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_Correo()\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row  *ngIf=\"showCorreo\">\n      <form [formGroup]=\"correo_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input type=\"text\" placeholder=\"Correo electronico\"\n                     formControlName=\"Correo\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" (click)=\"delete_Controlcorreo()\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"add_fecha()\">Fecha</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  *ngIf=\"showfecha\">\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-datetime displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          placeholder=\"Pulsa Aquí\" max=\"2070-12-31\"\n                          formControlName=\"Fecha\"></ion-datetime>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-select formControlName=\"tipo_Fecha\" placeholder=\"Tipo\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"Cumpleaños\">Cumpleaños</ion-select-option>\n            <ion-select-option value=\"Recordatorio\">Recordatorio</ion-select-option>\n            <ion-select-option value=\"Aniversario\">Aniversario</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" (click)=\"delete_Controlfecha()\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-textarea formControlName=\"Descripcion\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/Pages/create/create.page.ts");







const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
let CreatePageModule = class CreatePageModule {
};
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



/***/ }),

/***/ "./src/app/Pages/create/create.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Pages/create/create.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row .customButton {\n  --background: none;\n  width: 64px;\n  height: 64px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start:0;\n}\nion-content ion-grid > ion-row .customButton ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content ion-grid > ion-row ion-button {\n  margin: 0 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\nion-content ion-datetime {\n  padding: 5px 0 12px 0;\n}\nion-content ion-textarea {\n  background-color: #1d1d1d;\n  border-radius: 15px;\n  width: 100%;\n  height: 100%;\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0NGO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0FGO0FESUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRk47QURHTTtFQUNFLHFCQUFBO0FDRFI7QURLSTtFQUNFLGtCQUFBO0FDSE47QURPRTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTko7QURTRTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEV0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEo7QURhRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDWko7QURjSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ1pOO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ2RKO0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKO0FEb0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xCTjtBRHFCSTtFQUNFLFlBQUE7QUNuQk47QURvQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0FDbEJSO0FEMkJFO0VBQ0UsYUFBQTtBQ3pCSjtBRDBCSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7QUN4Qk47QUQwQk07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ3hCUjtBRDhCQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDNUJGO0FENkJFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUMzQko7QUQrQkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7QUQrQkk7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FDN0JOO0FEb0NFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNsQ0o7QURzQ0U7RUFDRSxxQkFBQTtBQ3BDSjtBRHNDRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDcENKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuXG4gIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbiAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAgMCAwIDAgMDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gIH1cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uID4gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgLy9hdmF0YXIgeSBib3RvbiBhZ3JlZ2FyIGZvdG9cbiAgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgICAuY3VzdG9tQnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIH1cbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjFweDtcblxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWNvbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxuXG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIDpob3N0KC5pdGVtLWludGVyYWN0aXZlKSwgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICAgIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMTtcbiAgICAgIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG4gICAgfVxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWNvbCA+IGlvbi1sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLy9BcXVpIHRlcm1pbmEgZWwgZm9ybXVsYXJpbyBjb250YWN0b1xuXG4gIC8vQm90b25lc1xuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuXG4gIC8vRm9ybXVsYXJpb3MgZGVzcGxlZ2FibGVzXG5cbiAgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgICBkaXNwbGF5OiBmbG93O1xuICAgIGZvcm0ge1xuICAgICAgbWF4LWhlaWdodDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5pb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cblxufVxuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1pbnB1dCB7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICAtLXBhZGRpbmc6IDAgMCAwIDA7XG4gICAgZGlzcGxheTogY29tcGFjdDtcblxuICAgIGlucHV0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgfVxuICB9XG5cblxuICAvL0JvdG9uIHkgZm9ybXVsYXJpbyBkZSBkaXJlY2Npw7NuXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgICBkaXNwbGF5OiBmbG93O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gIH1cblxuICBpb24tZGF0ZXRpbWUge1xuICAgIHBhZGRpbmc6IDVweCAwIDEycHggMDtcbiAgfVxuICBpb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyAuY3VzdG9tQnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgLmN1c3RvbUJ1dHRvbiBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCBpb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiA6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGZvcm0gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBjb21wYWN0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiA1cHggMCAxMnB4IDA7XG59XG5pb24tY29udGVudCBpb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/contact.service */ "./src/app/Services/contact.service.ts");
/* harmony import */ var _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/telefono.service */ "./src/app/Services/telefono.service.ts");
/* harmony import */ var _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/direccion.service */ "./src/app/Services/direccion.service.ts");
/* harmony import */ var _Services_fecha_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/fecha.service */ "./src/app/Services/fecha.service.ts");












let CreatePage = class CreatePage {
    constructor(sanitizer, builder, crudService, toastController, loadingController, nav, _telService, _dirService, _fechaService, _action) {
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
    }
    ngOnInit() {
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
    }
    take_a_Photo(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (id === 'Camara') {
                const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                    source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                });
                this.photo = image.webPath;
            }
            else {
                const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                    quality: 100,
                    allowEditing: true,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                    source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos
                });
                this.photo = image.webPath;
            }
        });
    }
    save_Contact(createForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Subiendo a la nube'
            });
            yield loading.present();
            this.contact_ID = yield this.crudService.add_Contact(createForm).then((result) => {
                loading.dismiss();
                this.nav.navigateForward('/');
                return result.id;
            });
            console.log(this.contact_ID);
            if (this.show) {
                this.tel_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                yield this._telService.add_Telefono(this.tel_Form.value).then(() => {
                    loading.dismiss();
                    this.nav.navigateForward('/');
                });
            }
            if (this.showCorreo) {
                yield this.crudService.update_Contact(this.correo_Form.value, this.contact_ID).then(() => {
                    loading.dismiss();
                    this.nav.navigateForward('/');
                });
            }
            if (this.showDir) {
                this.dir_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                yield this._dirService.add_Direccion(this.dir_Form.value).then(() => {
                    loading.dismiss();
                    this.nav.navigateForward('/');
                });
            }
            if (this.showfecha) {
                this.fecha_Form.addControl('id_Contacto', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contact_ID));
                yield this._fechaService.addFecha(this.fecha_Form.value).then(() => {
                    loading.dismiss();
                    this.nav.navigateForward('/');
                });
            }
        });
    }
    add_Controltel() {
        this.show = true;
        this.tel_Form.addControl('Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)));
        this.tel_Form.addControl('tipo_Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        console.log(this.tel_Form.value);
    }
    delete_Controltel() {
        this.show = false;
    }
    add_Controldir() {
        this.showDir = true;
        this.dir_Form.addControl('Calle', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)));
        this.dir_Form.addControl('Ciudad', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('Estado', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('Numero', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        this.dir_Form.addControl('CP', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)));
        console.log(this.tel_Form.value);
    }
    delete_Controldir() {
        this.showDir = false;
    }
    add_Correo() {
        this.showCorreo = true;
        this.correo_Form.addControl('Correo', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
    }
    delete_Controlcorreo() {
        this.showCorreo = false;
    }
    add_fecha() {
        this.showfecha = true;
        this.fecha_Form.addControl('Descripcion', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
        this.fecha_Form.addControl('Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
        this.fecha_Form.addControl('tipo_Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''));
    }
    delete_Controlfecha() {
        this.showfecha = false;
    }
    showAction() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this._action.create({
                header: 'Agrega una imagen',
                buttons: [
                    {
                        text: 'Camara',
                        icon: 'camera',
                        handler: (id = 'Camara') => {
                            this.take_a_Photo(id);
                        }
                    },
                    {
                        text: 'Galeria',
                        icon: 'images',
                        handler: (id = 'Galeria') => {
                            this.take_a_Photo(id);
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
    openToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
};
CreatePage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=Pages-create-create-module-es2015.js.map