(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/edit/edit.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Editar {{data2['Nombre']}}</ion-title>\n    <ion-button type=\"submit\" slot=\"end\" color=\"none\" (click)=\"updateCollections()\" >\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-button class=\"customButton\" (click)=\"showAction()\" >\n          <ion-avatar *ngIf=\"photo === ''\" >\n            <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n          </ion-avatar>\n          <ion-avatar *ngIf=\"photo !== ''\">\n            <ion-img [src]=\"photo\"></ion-img>\n          </ion-avatar>\n        </ion-button >\n       </ng-container>\n    </ion-row>\n\n    <ng-container>\n      <form [formGroup]=\"contac_Form\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"contact\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input *ngIf=\"data2['Prefijo'] !== ''\" formControlName=\"Prefijo\">\n            </ion-input>\n            <ion-input *ngIf=\"data2['Prefijo'] === ''\" placeholder=\"Prefijo\"\n                       formControlName=\"Prefijo\">\n            </ion-input>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label>Circulo</ion-label>\n              <ion-select *ngIf=\"data2['Circulo'] !== ''\" formControlName=\"Circulo\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n              <ion-select  *ngIf=\"data2['Circulo'] === ''\" placeholder=\"Circulo\"\n                           formControlName=\"Circulo\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row >\n          <ion-col size=\"1\"></ion-col>\n          <ion-input formControlName=\"Nombre\"></ion-input>\n        </ion-row>\n        <ion-row >\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['Apellido'] !== ''\" formControlName=\"Apellidos\"></ion-input>\n          <ion-input *ngIf=\"data2['Apellido'] === ''\" placeholder=\"Apellidos\"\n                     formControlName=\"Apellidos\"></ion-input>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['Apodo'] !== ''\" formControlName=\"Apodo\"></ion-input>\n          <ion-input *ngIf=\"data2['Apodo'] === ''\" placeholder=\"Apodo\"\n                     formControlName=\"Apodo\"></ion-input>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['SitioWeb'] !== ''\" formControlName=\"SitioWeb\"></ion-input>\n          <ion-input *ngIf=\"data2['SitioWeb'] === ''\" placeholder=\"SitioWeb\"\n                     formControlName=\"SitioWeb\"></ion-input>\n        </ion-row>\n      </form>\n    </ng-container>\n\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"addTel()\">Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ng-container>\n      <ion-row >\n        <form [formGroup]=\"tel_Form\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"5\">\n            <ion-input *ngIf=\"showTel === true\" type=\"number\"\n                       formControlName=\"Telefono\"></ion-input>\n            <ion-input *ngIf=\"showLocalTel\" type=\"number\"\n                       placeholder=\"Telefono\" formControlName=\"Telefono\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-select *ngIf=\"showTel === true\"\n                        formControlName=\"tipo_Telefono\">\n              <ion-label>Tipo</ion-label>\n              <ion-select-option value=\"movil\">Movil</ion-select-option>\n              <ion-select-option value=\"casa\">Casa</ion-select-option>\n              <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n\n           <ion-select *ngIf=\"showLocalTel\"\n                        placeholder=\"Tipo\" formControlName=\"tipo_Telefono\">\n              <ion-label>Tipo</ion-label>\n              <ion-select-option value=\"movil\">Movil</ion-select-option>\n              <ion-select-option value=\"casa\">Casa</ion-select-option>\n              <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <ion-button *ngIf = 'showTel' color=\"none\"  size=\"small\"\n            (click)=\"deleteTel()\">\n              <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf = 'showLocalTel' color=\"none\"  size=\"small\"\n                        (click)=\"deleteTel()\">\n              <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </form>\n      </ion-row>\n    </ng-container>\n\n\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                        class=\"ion-text-capitalize\" (click)=\"addDir()\">Añadir dirección</ion-button>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <form [formGroup]=\"dir_Form\">\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"4\">\n              <ion-input *ngIf=\"showDir\" type=\"number\" formControlName=\"Numero\"></ion-input>\n              <ion-input *ngIf=\"showLocalDir\" type=\"number\" placeholder=\"Numero ext.\"\n                         formControlName=\"Numero\"></ion-input>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-input *ngIf=\"showDir\" type=\"number\" formControlName=\"CP\"></ion-input>\n              <ion-input *ngIf=\"showLocalDir\" type=\"number\" placeholder=\"Codigo postal\"\n                         formControlName=\"CP\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"2\">\n                <ion-button *ngIf=\"showDir\"\n                        color=\"none\" size=\"small\" (click)=\"deleteDir()\">\n                  <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n                </ion-button>\n              <ion-button *ngIf=\"showLocalDir\"\n                      color=\"none\" size=\"small\" (click)=\"deleteDir()\">\n                <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </form>\n          <form [formGroup]=\"dir_Form\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" formControlName=\"Calle\"></ion-input>\n              <ion-input *ngIf=\"showLocalDir\" type=\"text\" placeholder=\"Calle\"\n                         formControlName=\"Calle\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" formControlName=\"Ciudad\"></ion-input>\n              <ion-input *ngIf=\"showLocalDir\" type=\"text\" placeholder=\"Ciudad\"\n                         formControlName=\"Ciudad\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" formControlName=\"Estado\"></ion-input>\n              <ion-input *ngIf=\"showLocalDir\" type=\"text\" placeholder=\"Estado\"\n                         formControlName=\"Estado\"></ion-input>\n            </ion-col>\n          </form>\n        </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"addCorreo()\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row >\n      <form [formGroup]=\"contac_Form\" >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input *ngIf=\"showCorreo\" type=\"correo\" formControlName=\"Correo\"></ion-input>\n          <ion-input *ngIf=\"showLocalCorreo\" type=\"correo\" placeholder=\"Ingresa tu correo\"\n                     formControlName=\"Correo\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button *ngIf=\"showCorreo\"\n                  color=\"none\"  size=\"small\" (click)=\"deleteCorreo()\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"showLocalCorreo\"\n                  color=\"none\"  size=\"small\" (click)=\"deleteCorreo()\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"addFecha()\">Fecha</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-datetime *ngIf=\"showfecha\"\n                    displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          formControlName=\"Fecha\" max=\"2070-12-31\"\n                          ></ion-datetime>\n            <ion-datetime *ngIf=\"showLocalFecha\"\n                          displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          placeholder=\"Pulsa Aquí\" max=\"2070-12-31\"\n                          formControlName=\"Fecha\"\n            ></ion-datetime>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-select *ngIf=\"showfecha\" formControlName=\"tipo_Fecha\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"Cumpleaños\">Cumpleaños</ion-select-option>\n            <ion-select-option value=\"Recordatorio\">Recordatorio</ion-select-option>\n            <ion-select-option value=\"Aniversario\">Aniversario</ion-select-option>\n          </ion-select>\n          <ion-select *ngIf=\"showLocalFecha\" placeholder=\"Tipo\" formControlName=\"tipo_Fecha\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"Cumpleaños\">Cumpleaños</ion-select-option>\n            <ion-select-option value=\"Recordatorio\">Recordatorio</ion-select-option>\n            <ion-select-option value=\"Aniversario\">Aniversario</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" size=\"small\" *ngIf=\"showfecha\"\n                      (click)=\"deleteFecha()\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n          <ion-button color=\"none\" size=\"small\" *ngIf=\"showLocalFecha\"\n          (click)=\"deleteFecha()\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form [formGroup]=\"fecha_Form\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-textarea *ngIf=\"showfecha\" formControlName=\"Descripcion\"></ion-textarea>\n          <ion-textarea *ngIf=\"showLocalFecha\" placeholder=\"Descripcion\" formControlName=\"Descripcion\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
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

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row .customButton {\n  --background: none;\n  width: 64px;\n  height: 64px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-content ion-grid > ion-row .customButton ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content .native-input.sc-ion-input-md {\n  border-bottom: #003cff;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\nion-content ion-datetime {\n  padding: 0 0 0 0;\n}\nion-content ion-textarea {\n  background-color: #1d1d1d;\n  border-radius: 15px;\n  width: 100%;\n  height: 100%;\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURNQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNIRjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xOO0FET007RUFDRSxxQkFBQTtBQ0xSO0FEVUU7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDUko7QURXRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUU7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNWSjtBRGNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZ0JFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEaUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZko7QURpQkk7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNmTjtBRG1CRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNqQko7QUR1QkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNyQko7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckJOO0FEd0JJO0VBQ0UsWUFBQTtBQ3RCTjtBRHVCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNyQlI7QUQ4QkU7RUFDRSxhQUFBO0FDNUJKO0FENkJJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtBQzNCTjtBRDZCTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDM0JSO0FEaUNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMvQko7QURnQ0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzlCTjtBRGtDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2hDSjtBRGlDSTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7QUMvQk47QURrQ0U7RUFDRSxzQkFBQTtBQ2hDSjtBRHNDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDcENKO0FEdUNFO0VBQ0UsZ0JBQUE7QUNyQ0o7QUR1Q0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3JDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuXG4gIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbiAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAgMCAwIDAgMDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gIH1cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uID4gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgLy9hdmF0YXIgeSBib3RvbiBhZ3JlZ2FyIGZvdG9cbiAgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgICAuY3VzdG9tQnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjFweDtcblxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWNvbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxuXG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIDpob3N0KC5pdGVtLWludGVyYWN0aXZlKSwgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICAgIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMTtcbiAgICAgIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG4gICAgfVxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWNvbCA+IGlvbi1sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLy9BcXVpIHRlcm1pbmEgZWwgZm9ybXVsYXJpbyBjb250YWN0b1xuXG4gIC8vQm90b25lc1xuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuXG4gIC8vRm9ybXVsYXJpb3MgZGVzcGxlZ2FibGVzXG5cbiAgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgICBkaXNwbGF5OiBmbG93O1xuICAgIGZvcm0ge1xuICAgICAgbWF4LWhlaWdodDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgIH1cblxuICB9XG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgICBwb3NpdGlvbjogY2VudGVyO1xuICAgIC0tcGFkZGluZzogMCAwIDAgMDtcbiAgICBkaXNwbGF5OiBjb21wYWN0O1xuICAgIGlucHV0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgfVxuICAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogIzAwM2NmZjtcblxuICB9XG5cblxuICAvL0JvdG9uIHkgZm9ybXVsYXJpbyBkZSBkaXJlY2Npw7NuXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgICBkaXNwbGF5OiBmbG93O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gIH1cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciA+IGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbiA+IGlvbi1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IC5jdXN0b21CdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgLmN1c3RvbUJ1dHRvbiBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzhweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxcHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0gPiBpb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0gPiBpb24tc2VsZWN0IDpob3N0KC5pdGVtLWludGVyYWN0aXZlKSwgaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0gPiBpb24tc2VsZWN0IDpob3N0KC5pdGVtLWxpbmVzLWZ1bGwpIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAxO1xuICAtLXNob3ctaW5zZXQtaGlnaGxpZ2h0OiAxO1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWNvbCA+IGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCBpb24taWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1idXR0b24gOmhvc3Qge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsb3c7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgZm9ybSB7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIC0tcGFkZGluZzogMCAwIDAgMDtcbiAgZGlzcGxheTogY29tcGFjdDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IGlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5pb24tY29udGVudCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIGJvcmRlci1ib3R0b206ICMwMDNjZmY7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cbmlvbi1jb250ZW50IGlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn0iXX0= */"

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
/* harmony import */ var _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/contact.service */ "./src/app/Services/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/telefono.service */ "./src/app/Services/telefono.service.ts");
/* harmony import */ var _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/direccion.service */ "./src/app/Services/direccion.service.ts");










var EditPage = /** @class */ (function () {
    function EditPage(_route, router, _contact, _builder, _action, toastController, loadingController, nav, _telService, _dirService) {
        this._route = _route;
        this.router = router;
        this._contact = _contact;
        this._builder = _builder;
        this._action = _action;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this._telService = _telService;
        this._dirService = _dirService;
        this.photo = '';
        this.fechaData = [];
        this.showCorreo = false;
        this.showTel = false;
        this.showLocalDir = false;
        this.showLocalFecha = false;
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.id_contacto = _this.router.getCurrentNavigation().extras.state.id;
                _this.data2 = _this.router.getCurrentNavigation().extras.state.user;
                _this.data3 = _this.router.getCurrentNavigation().extras.state.tel;
                _this.data = _this.router.getCurrentNavigation().extras.state.dir;
                _this.fechaData = _this.router.getCurrentNavigation().extras.state.fecha;
                _this.showTel = _this.data3 !== undefined;
                _this.showDir = _this.data !== undefined;
                _this.showfecha = _this.fechaData !== undefined;
                _this.showCorreo = _this.data2['Correo'] !== '';
                console.log(_this.data2, _this.data3, _this.showTel, _this.fechaData, _this.showfecha, _this.showDir);
            }
        });
        this.contac_Form = this._builder.group({
            Nombre: [this.data2['Nombre'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Apellidos: [this.data2['Apellidos']],
            Correo: [this.data2['Correo'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email],
            Apodo: [this.data2['Apodo']],
            Circulo: [this.data2['Circulo']],
            Prefijo: [this.data2['Prefijo']],
            SitioWeb: [this.data2['SitioWeb'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)],
        });
        this.correo_Form = this._builder.group({});
        if (this.showTel) {
            this.tel_Form = this._builder.group({
                Telefono: [this.data3['Telefono']],
                tipo_Telefono: [this.data3['tipo_Telefono']],
            });
        }
        else {
            this.tel_Form = this._builder.group({});
        }
        if (this.showDir) {
            this.dir_Form = this._builder.group({
                Numero: [this.data['Numero']],
                CP: [this.data['CP']],
                Calle: [this.data['Calle']],
                Ciudad: [this.data['Ciudad']],
                Estado: [this.data['Estado']],
            });
        }
        else {
            this.dir_Form = this._builder.group({});
        }
        if (this.showfecha) {
            this.fecha_Form = this._builder.group({
                Fecha: [this.fechaData['Fecha']],
                tipo_Fecha: [this.fechaData['tipo_Fecha']],
                Descripcion: [this.fechaData['Descripcion']],
            });
        }
        else {
            this.fecha_Form = this._builder.group({});
        }
    };
    EditPage.prototype.take_a_Photo = function (id) {
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
    EditPage.prototype.updateCollections = function (contacForm, telForm, dirForm, correoForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Actualizando datos...'
                        })];
                    case 1:
                        loading = _a.sent();
                        //await loading.present();
                        //await this._contact.update_Contact(this.id_contacto, contacForm);
                        //let idTel = Object.values(this.data[0]);
                        //let idDir = Object.values(this.data3[0]);
                        //await this._telService.update_Telefono(telForm, idTel[0].toString());
                        //await  this._dirService.update_Direccion(dirForm, idDir[0].toString());
                        console.log(this.contac_Form.value, this.tel_Form.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.showAction = function () {
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
    EditPage.prototype.addTel = function () {
        this.showLocalTel = true;
        this.tel_Form.addControl('Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)));
        this.tel_Form.addControl('tipo_Telefono', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)));
        console.log(this.tel_Form.value);
    };
    EditPage.prototype.deleteTel = function () {
        this.showLocalTel = false;
    };
    EditPage.prototype.addDir = function () {
        if (!this.showLocalDir && !this.showDir) {
            this.showLocalDir = true;
            this.dir_Form.addControl('Calle', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)));
            this.dir_Form.addControl('Ciudad', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)));
            this.dir_Form.addControl('Estado', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)));
            this.dir_Form.addControl('Numero', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)));
            this.dir_Form.addControl('CP', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)));
            console.log(this.dir_Form);
        }
        if (!this.showLocalDir) {
            this.showDir = true;
        }
    };
    EditPage.prototype.deleteDir = function () {
        if (this.showLocalDir) {
            this.showLocalDir = false;
        }
        if (this.showDir) {
            this.showDir = false;
            console.log('cambio boolean fuera');
        }
    };
    EditPage.prototype.addCorreo = function () {
        if (!this.showLocalCorreo && this.data2['Correo'] === '') {
            this.showLocalCorreo = true;
            this.correo_Form.addControl('Correo', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
            console.log(this.correo_Form.value);
        }
        if (!this.showLocalCorreo && this.data2['Correo'] !== '') {
            this.showCorreo = true;
        }
    };
    EditPage.prototype.deleteCorreo = function () {
        if (this.showLocalCorreo) {
            this.showLocalCorreo = false;
            console.log('cambio boolean local');
        }
        if (this.showCorreo) {
            this.showCorreo = false;
            console.log('cambio boolean fuera');
        }
    };
    EditPage.prototype.addFecha = function () {
        this.showLocalFecha = true;
        this.fecha_Form.addControl('Descripcion', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
        this.fecha_Form.addControl('Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
        this.fecha_Form.addControl('tipo_Fecha', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
        console.log(this.fecha_Form);
    };
    EditPage.prototype.deleteFecha = function () {
        this.showLocalFecha = false;
    };
    EditPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"] },
        { type: _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"] }
    ]; };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/Pages/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"],
            _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-edit-edit-module-es5.js.map