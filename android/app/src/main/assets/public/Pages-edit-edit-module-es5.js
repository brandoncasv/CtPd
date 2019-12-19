(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/edit/edit.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Editar {{data2['Nombre']}}</ion-title>\n    <ion-button type=\"submit\" slot=\"end\" color=\"none\" (click)=\"updateCollections()\" >\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-button class=\"customButton\" (click)=\"showAction()\" >\n          <ion-avatar *ngIf=\"photo === ''\" >\n            <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n          </ion-avatar>\n          <ion-avatar *ngIf=\"photo !== ''\">\n            <ion-img [src]=\"photo\"></ion-img>\n          </ion-avatar>\n        </ion-button >\n       </ng-container>\n    </ion-row>\n\n    <ng-container>\n      <form>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"contact\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input *ngIf=\"data2['Prefijo'] !== ''\" placeholder=\"{{data2['Prefijo']}}\" >\n            </ion-input>\n            <ion-input *ngIf=\"data2['Prefijo'] === ''\" placeholder=\"Prefijo\" >\n            </ion-input>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label>Circulo</ion-label>\n              <ion-select *ngIf=\"data2['Circulo'] !== ''\" placeholder=\"{{data2['Circulo']}}\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n              <ion-select  *ngIf=\"data2['Circulo'] === ''\" placeholder=\"Circulo\">\n                <ion-select-option value=\"Otros\">Otros</ion-select-option>\n                <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n                <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row >\n          <ion-col size=\"1\"></ion-col>\n          <ion-input placeholder=\"{{data2['Nombre']}}\"></ion-input>\n        </ion-row>\n        <ion-row >\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['Apellido'] !== ''\" placeholder=\"{{data2['Apellidos']}}\"></ion-input>\n          <ion-input *ngIf=\"data2['Apellido'] === ''\" placeholder=\"Apellidos\"></ion-input>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['Apodo'] !== ''\" placeholder=\"{{data2['Apodo']}}\"></ion-input>\n          <ion-input *ngIf=\"data2['Apodo'] === ''\" placeholder=\"Apodo\"></ion-input>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-input *ngIf=\"data2['SitioWeb'] !== ''\" placeholder=\"{{data2['SitioWeb']}}\"></ion-input>\n          <ion-input *ngIf=\"data2['SitioWeb'] === ''\" placeholder=\"SitioWeb\"></ion-input>\n        </ion-row>\n      </form>\n    </ng-container>\n\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" (click)=\"addTel()\">Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ng-container>\n      <ion-row >\n        <form>\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"5\">\n            <ion-input *ngIf=\"showTel === true\" type=\"number\"\n                       placeholder=\"{{data3['Telefono']}}\"></ion-input>\n            <ion-input *ngIf=\"showLocalTel\" type=\"number\"\n                       placeholder=\"Telefono\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-select *ngIf=\"showTel === true\"\n                        placeholder=\"{{data3['tipo_Telefono']}}\">\n              <ion-label>Tipo</ion-label>\n              <ion-select-option value=\"movil\">Movil</ion-select-option>\n              <ion-select-option value=\"casa\">Casa</ion-select-option>\n              <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n\n           <ion-select *ngIf=\"showLocalTel\"\n                        placeholder=\"Tipo\">\n              <ion-label>Tipo</ion-label>\n              <ion-select-option value=\"movil\">Movil</ion-select-option>\n              <ion-select-option value=\"casa\">Casa</ion-select-option>\n              <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"2\">\n            <ion-button *ngIf = 'showLocalTel' color=\"none\"  size=\"small\"\n            (click)=\"deleteTel()\">\n              <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </form>\n      </ion-row>\n    </ng-container>\n\n\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                        class=\"ion-text-capitalize\" >Añadir dirección</ion-button>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <form >\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"4\">\n              <ion-input *ngIf=\"showDir\" type=\"number\" placeholder=\"{{data['Numero']}}\"></ion-input>\n              <ion-input *ngIf=\"!showDir\" type=\"number\" placeholder=\"Numero ext.\"></ion-input>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-input *ngIf=\"showDir\" type=\"number\" placeholder=\"{{data['CP']}}\"></ion-input>\n              <ion-input *ngIf=\"!showDir\" type=\"number\" placeholder=\"Ingresa tu codigo postal\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <ion-button color=\"none\" size=\"small\">\n                <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </form>\n          <form >\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" placeholder=\"{{data['Calle']}}\"></ion-input>\n              <ion-input *ngIf=\"!showDir\" type=\"text\" placeholder=\"Calle\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" placeholder=\"{{data['Ciudad']}}\"></ion-input>\n              <ion-input *ngIf=\"!showDir\" type=\"text\" placeholder=\"Ciudad\"></ion-input>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-input *ngIf=\"showDir\" type=\"text\" placeholder=\"{{data['Estado']}}\"></ion-input>\n              <ion-input *ngIf=\"!showDir\" type=\"text\" placeholder=\"Estado\"></ion-input>\n            </ion-col>\n          </form>\n        </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row >\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input *ngIf=\"data2['Correo'] !== ''\" type=\"correo\" placeholder=\"{{data2['Correo']}}\"></ion-input>\n          <ion-input *ngIf=\"data2['Correo'] === ''\" type=\"correo\" placeholder=\"Ingresa tu correo\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\"  size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\">Fecha</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-datetime *ngIf=\"showfecha\"\n                    displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          placeholder=\"{{fechaData['Fecha']}}\" max=\"2070-12-31\"\n                          ></ion-datetime>\n            <ion-datetime *ngIf=\"!showfecha\"\n                          displayFormat=\"DD MMM YYYY\" min=\"1900-01-00\"\n                          doneText='Hecho' cancel-text=\"Cancelar\"\n                          placeholder=\"Pulsa Aquí\" max=\"2070-12-31\"\n            ></ion-datetime>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-select *ngIf=\"showfecha\" placeholder=\"{{fechaData['Tipo']}}\">\n            <ion-select *ngIf=\"!showfecha\" placeholder=\"Tipo\" >\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"Cumpleaños\">Cumpleaños</ion-select-option>\n            <ion-select-option value=\"Recordatorio\">Recordatorio</ion-select-option>\n            <ion-select-option value=\"Aniversario\">Aniversario</ion-select-option>\n            </ion-select>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-textarea *ngIf=\"!showfecha\" placeholder=\"Descripción\"></ion-textarea>\n          <ion-textarea *ngIf=\"showfecha\" placeholder=\"{{fechaData['Descripcion']}}\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

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

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row .customButton {\n  --background: none;\n  width: 64px;\n  height: 64px;\n  --border-radius: 50%;\n  --padding-end: 0;\n  --padding-start: 0;\n}\nion-content ion-grid > ion-row .customButton ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content .native-input.sc-ion-input-md {\n  border-bottom: #003cff;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURNQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNIRjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xOO0FET007RUFDRSxxQkFBQTtBQ0xSO0FEVUU7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDUko7QURXRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUU7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNWSjtBRGNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZ0JFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEaUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZko7QURpQkk7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNmTjtBRG1CRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNqQko7QUR1QkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNyQko7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckJOO0FEd0JJO0VBQ0UsWUFBQTtBQ3RCTjtBRHVCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNyQlI7QUQ4QkU7RUFDRSxhQUFBO0FDNUJKO0FENkJJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtBQzNCTjtBRDZCTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDM0JSO0FEaUNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMvQko7QURnQ0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzlCTjtBRGtDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2hDSjtBRGlDSTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7QUMvQk47QURrQ0U7RUFDRSxzQkFBQTtBQ2hDSjtBRHNDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDcENKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG5cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICAwIDAgMCAwO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgfVxuICBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAvL2F2YXRhciB5IGJvdG9uIGFncmVnYXIgZm90b1xuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIC5jdXN0b21CdXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMXB4O1xuXG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG5cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzhweDtcbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pdGVtID4gaW9uLXNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCA6aG9zdCguaXRlbS1saW5lcy1mdWxsKSB7XG4gICAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAxO1xuICAgICAgLS1zaG93LWluc2V0LWhpZ2hsaWdodDogMTtcbiAgICB9XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAvL0FxdWkgdGVybWluYSBlbCBmb3JtdWxhcmlvIGNvbnRhY3RvXG5cbiAgLy9Cb3RvbmVzXG4gIGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG5cbiAgLy9Gb3JtdWxhcmlvcyBkZXNwbGVnYWJsZXNcblxuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsb3c7XG4gICAgZm9ybSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgfVxuXG4gIH1cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQge1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICAgIGRpc3BsYXk6IGNvbXBhY3Q7XG4gICAgaW5wdXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxuICB9XG4gIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgICBib3JkZXItYm90dG9tOiAjMDAzY2ZmO1xuXG4gIH1cblxuXG4gIC8vQm90b24geSBmb3JtdWxhcmlvIGRlIGRpcmVjY2nDs25cbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsb3c7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgfVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyID4gaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgLmN1c3RvbUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyAuY3VzdG9tQnV0dG9uIGlvbi1hdmF0YXIge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCBpb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiA6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGZvcm0gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBjb21wYWN0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1jb250ZW50IC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgYm9yZGVyLWJvdHRvbTogIzAwM2NmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
                console.log(_this.data2, _this.data3, _this.showTel, _this.fechaData, _this.showfecha);
            }
        });
        this.contac_Form = this._builder.group({
            Nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Apellidos: [''],
            Correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email],
            Apodo: [''],
            Circulo: [''],
            Prefijo: [''],
            SitioWeb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)],
        });
        this.tel_Form = this._builder.group({
            Telefono: ['',],
            CP: [''],
            Calle: [''],
            Ciudad: [''],
            Estado: [''],
            Numero: [''],
        });
        this.dir_Form = this._builder.group({});
        this.correo_Form = this._builder.group({});
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
            var loading, idTel, idDir;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Actualizando datos...'
                        })];
                    case 1:
                        loading = _a.sent();
                        idTel = Object.values(this.data[0]);
                        idDir = Object.values(this.data3[0]);
                        //await this._telService.update_Telefono(telForm, idTel[0].toString());
                        //await  this._dirService.update_Direccion(dirForm, idDir[0].toString());
                        console.log(idTel[0].toString(), idDir);
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