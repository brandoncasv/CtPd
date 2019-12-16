(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/edit/edit.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/edit/edit.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Editar {{data2['Nombre']}}</ion-title>\n    <ion-button type=\"submit\" slot=\"end\" color=\"none\" (click)=\"updateCollections()\" >\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ng-container>\n        <ion-avatar *ngIf=\"photo === ''\">\n          <ion-img src=\"./assets/images/avatar.png\"></ion-img>\n        </ion-avatar>\n        <ion-avatar *ngIf=\"photo !== ''\">\n          <ion-img [src]=\"photo\"></ion-img>\n        </ion-avatar>\n      </ng-container>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-button color=\"dark\" (click)=\"take_a_Photo()\">Agregar foto</ion-button>\n    </ion-row>\n\n\n    <form *ngFor=\"let data of data\">\n\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"contact\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ng-container>\n            <ion-input *ngIf=\"data2['Prefijo'] !== ''\" placeholder=\"{{data2['Prefijo']}}\" >\n            </ion-input>\n            <ion-input *ngIf=\"data2['Prefijo'] === ''\" placeholder=\"Prefijo\" >\n            </ion-input>\n          </ng-container>\n\n        </ion-col>\n\n        <ion-col size=\"6\">\n\n          <ion-item>\n            <ion-label>Circulo</ion-label>\n            <ion-select *ngIf=\"data2['Circulo'] !== ''\" placeholder=\"{{data2['Circulo']}}\">\n              <ion-select-option value=\"Otros\">Otros</ion-select-option>\n              <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n              <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n            <ion-select  *ngIf=\"data2['Circulo'] === ''\" placeholder=\"Circulo\">\n              <ion-select-option value=\"Otros\">Otros</ion-select-option>\n              <ion-select-option value=\"Amigos\">Amigos</ion-select-option>\n              <ion-select-option value=\"Trabajo\">Trabajo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-row >\n        <ion-col size=\"1\"></ion-col>\n        <ion-input placeholder=\"{{data2['Nombre']}}\"></ion-input>\n      </ion-row>\n      <ion-row >\n        <ion-col size=\"1\"></ion-col>\n        <ion-input *ngIf=\"data2['Apellido'] !== ''\" placeholder=\"{{data2['Apellidos']}}\"></ion-input>\n        <ion-input *ngIf=\"data2['Apellido'] === ''\" placeholder=\"Apellidos\"></ion-input>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input *ngIf=\"data2['Apodo'] !== ''\" placeholder=\"{{data2['Apodo']}}\"></ion-input>\n        <ion-input *ngIf=\"data2['Apodo'] === ''\" placeholder=\"Apodo\"></ion-input>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-input *ngIf=\"data2['SitioWeb'] !== ''\" placeholder=\"{{data2['SitioWeb']}}\"></ion-input>\n        <ion-input *ngIf=\"data2['SitioWeb'] === ''\" placeholder=\"SitioWeb\"></ion-input>\n      </ion-row>\n    </form>\n\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" >Añadir teléfono</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let data of data3\" >\n      <form>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"number\" *ngIf=\"data.Telefono !== null\"\n                     placeholder=\"{{data.Telefono}}\"></ion-input>\n          <ion-input type=\"number\" *ngIf=\"data.Telefono === null\"\n                     placeholder=\"Numero Telefonico\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"3\">\n          <ion-select *ngIf=\"data.tipo_Telefono !== null\" placeholder=\"{{data.tipo_Telefono}}\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"movil\">Movil</ion-select-option>\n            <ion-select-option value=\"casa\">Casa</ion-select-option>\n            <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n          </ion-select>\n          <ion-select *ngIf=\"data.tipo_Telefono === null\" placeholder=\"Tipo\">\n            <ion-label>Tipo</ion-label>\n            <ion-select-option value=\"movil\">Movil</ion-select-option>\n            <ion-select-option value=\"casa\">Casa</ion-select-option>\n            <ion-select-option value=\"trabajo\">Trabajo</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\"  size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\" >Añadir dirección</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let dat of data\">\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\">\n          <ion-input type=\"number\" placeholder=\"{{dat.Numero}}\"></ion-input>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-input type=\"number\" placeholder=\"{{dat.CP}}\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\" size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n      <form >\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-input type=\"text\" placeholder=\"{{dat.Calle}}\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"{{dat.Ciudad}}\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input type=\"text\" placeholder=\"{{dat.Estado}}\"></ion-input>\n        </ion-col>\n      </form>\n\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-button fill=\"clear\" expand=\"full\" size=\"small\"\n                    class=\"ion-text-capitalize\">Añadir Correo</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row >\n      <form >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"8\">\n          <ion-input type=\"text\" placeholder=\"{{data2['Correo']}}\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-button color=\"none\"  size=\"small\">\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/Pages/edit/edit.page.ts");







const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
let EditPageModule = class EditPageModule {
};
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



/***/ }),

/***/ "./src/app/Pages/edit/edit.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/edit/edit.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-header ion-toolbar > ion-button {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 0 0 0;\n  height: 48px;\n  width: 48px;\n}\nion-header ion-toolbar > ion-button > ion-icon {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\nion-content ion-grid > ion-row ion-avatar {\n  margin: 10px 0 10px 0;\n}\nion-content ion-grid > ion-row ion-button {\n  margin: 0 0 10px 0;\n}\nion-content form > ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-content form > ion-row > ion-col {\n  padding: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  height: 21px;\n}\nion-content form > ion-row > ion-col > ion-col {\n  width: 33%;\n  height: 100%;\n  padding: 0 0 0 0;\n}\nion-content form > ion-row > ion-col > ion-item {\n  display: -webkit-inline-flex;\n  position: relative;\n  width: 100%;\n  max-height: 38px;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select {\n  max-width: 100%;\n  width: 100%;\n  padding: 0 0 10px 0;\n  text-align: center;\n}\nion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-interactive), ion-content form > ion-row > ion-col > ion-item > ion-select :host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 1;\n}\nion-content form > ion-row > ion-col > ion-col > ion-label {\n  position: absolute;\n  padding-bottom: 10px;\n}\nion-content ion-grid > ion-row > ion-col {\n  padding: 0 0 0 0;\n  font-size: 16px;\n}\nion-content ion-grid > ion-row > ion-col ion-icon {\n  width: 100%;\n  height: 21px;\n  padding-top: 7px;\n}\nion-content ion-grid > ion-row > ion-col ion-button {\n  color: white;\n}\nion-content ion-grid > ion-row > ion-col ion-button :host {\n  margin-left: 0;\n  margin-right: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\nion-content ion-grid > ion-row {\n  display: flow;\n}\nion-content ion-grid > ion-row form {\n  max-height: 38px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n}\nion-content ion-grid > ion-row form ion-col {\n  padding: 0 0 0 0;\n  height: 100%;\n  align-content: center;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button {\n  --border-radius: 80px;\n  height: 100%;\n  width: 100%;\n  margin: 0 0 0 0;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-button ion-icon {\n  width: 70%;\n  height: 70%;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input {\n  position: center;\n  --padding: 0 0 0 0;\n  display: compact;\n}\nion-content ion-grid > ion-row > form > ion-col > ion-input input {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content .native-input.sc-ion-input-md {\n  border-bottom: #003cff;\n}\nion-content ion-grid > ion-row > form > ion-row {\n  display: flow;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURNQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUNIRjtBRE9JO0VBQ0UscUJBQUE7QUNMTjtBRE9JO0VBQ0Usa0JBQUE7QUNMTjtBRFNFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ1BKO0FEVUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdFO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGVFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURnQkk7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNkTjtBRGtCRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQko7QURzQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNwQko7QURzQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsWUFBQTtBQ3JCTjtBRHNCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNwQlI7QUQ2QkU7RUFDRSxhQUFBO0FDM0JKO0FENEJJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtBQzFCTjtBRDRCTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDMUJSO0FEZ0NFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUM5Qko7QUQrQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzdCTjtBRGlDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQy9CSjtBRGdDSTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7QUM5Qk47QURpQ0U7RUFDRSxzQkFBQTtBQy9CSjtBRHFDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG5cbiAgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICAwIDAgMCAwO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgfVxuICBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAvL2F2YXRhciB5IGJvdG9uIGFncmVnYXIgZm90b1xuICBpb24tZ3JpZCA+IGlvbi1yb3cge1xuICAgIGlvbi1hdmF0YXIge1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICB9XG4gIH1cblxuICBmb3JtID4gaW9uLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMzhweDtcbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIxcHg7XG5cbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cblxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWl0ZW0gPiBpb24tc2VsZWN0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICA6aG9zdCguaXRlbS1pbnRlcmFjdGl2ZSksIDpob3N0KC5pdGVtLWxpbmVzLWZ1bGwpIHtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gICAgICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gICAgICAtLXNob3ctaW5zZXQtaGlnaGxpZ2h0OiAxO1xuICAgIH1cbiAgfVxuXG4gIGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wgPiBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC8vQXF1aSB0ZXJtaW5hIGVsIGZvcm11bGFyaW8gY29udGFjdG9cblxuICAvL0JvdG9uZXNcbiAgaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjFweDtcbiAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cblxuICAvL0Zvcm11bGFyaW9zIGRlc3BsZWdhYmxlc1xuXG4gIGlvbi1ncmlkID4gaW9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxvdztcbiAgICBmb3JtIHtcbiAgICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogODBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICB9XG5cbiAgfVxuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1pbnB1dCB7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICAtLXBhZGRpbmc6IDAgMCAwIDA7XG4gICAgZGlzcGxheTogY29tcGFjdDtcbiAgICBpbnB1dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gIH1cbiAgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICAgIGJvcmRlci1ib3R0b206ICMwMDNjZmY7XG5cbiAgfVxuXG5cbiAgLy9Cb3RvbiB5IGZvcm11bGFyaW8gZGUgZGlyZWNjacOzblxuICBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxvdztcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgPiBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciA+IGlvbi1idXR0b24gPiBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0taW50ZXJhY3RpdmUpLCBpb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1zZWxlY3QgOmhvc3QoLml0ZW0tbGluZXMtZnVsbCkge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDE7XG4gIC0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDE7XG59XG5pb24tY29udGVudCBmb3JtID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24tY29sID4gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWJ1dHRvbiA6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyBmb3JtIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93IGZvcm0gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCA+IGlvbi1yb3cgPiBmb3JtID4gaW9uLWNvbCA+IGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tY29sID4gaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgLS1wYWRkaW5nOiAwIDAgMCAwO1xuICBkaXNwbGF5OiBjb21wYWN0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgPiBpb24tcm93ID4gZm9ybSA+IGlvbi1jb2wgPiBpb24taW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmlvbi1jb250ZW50IC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgYm9yZGVyLWJvdHRvbTogIzAwM2NmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkID4gaW9uLXJvdyA+IGZvcm0gPiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxvdztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/contact.service */ "./src/app/Services/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/telefono.service */ "./src/app/Services/telefono.service.ts");
/* harmony import */ var _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/direccion.service */ "./src/app/Services/direccion.service.ts");









let EditPage = class EditPage {
    constructor(_route, router, _contact, _builder, toastController, loadingController, nav, _telService, _dirService) {
        this._route = _route;
        this.router = router;
        this._contact = _contact;
        this._builder = _builder;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.nav = nav;
        this._telService = _telService;
        this._dirService = _dirService;
        this.photo = '';
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.dir;
                this.id_contacto = this.router.getCurrentNavigation().extras.state.id;
                this.data2 = this.router.getCurrentNavigation().extras.state.user;
                this.data3 = this.router.getCurrentNavigation().extras.state.tel;
                console.log(this.data, this.data2, Object.values(this.data3[0]));
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
    }
    take_a_Photo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
            });
            this.photo = image.webPath;
        });
    }
    updateCollections(contacForm, telForm, dirForm, correoForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Actualizando datos...'
            });
            //await loading.present();
            //await this._contact.update_Contact(this.id_contacto, contacForm);
            let idTel = Object.values(this.data[0]);
            let idDir = Object.values(this.data3[0]);
            //await this._telService.update_Telefono(telForm, idTel[0].toString());
            //await  this._dirService.update_Direccion(dirForm, idDir[0].toString());
            console.log(idTel[0].toString(), idDir);
        });
    }
    obtainData(array) {
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"] },
    { type: _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"] }
];
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _Services_telefono_service__WEBPACK_IMPORTED_MODULE_7__["TelefonoService"],
        _Services_direccion_service__WEBPACK_IMPORTED_MODULE_8__["DireccionService"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=Pages-edit-edit-module-es2015.js.map