(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-details-contact-details-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/details-contact/details-contact.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/details-contact/details-contact.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons >\n      <ion-back-button defaultHref=\"/\" color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-button slot=\"end\" color=\"none\" (click)=\"delete_Contact()\">\n      <ion-icon name=\"trash\" color=\"primary\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"asignData()\" color=\"none\" slot=\"end\">\n      <ion-icon name=\"brush\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid >\n    <ion-row class=\"ion-justify-content-center\" >\n      <ion-col size=\"8\" >\n        <ion-avatar >\n          <h1 class=\"nombre_Avatar\">{{ (contact | async)?.Nombre.charAt(0).toLocaleUpperCase() }}</h1>\n          <h1 class=\"apellido_Avatar\" *ngIf=\"(contact | async)?.Apellidos !== ''\">\n            {{ (contact | async)?.Apellidos.charAt(0).toLocaleUpperCase() }}</h1>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n        <h2>{{ (contact | async)?.Nombre }} {{ (contact | async)?.Apellidos }}</h2>\n    </ion-row>\n\n    <ng-container *ngFor=\"let cell of cell\" >\n      <ion-button expand=\"block\" color=\"dark\" *ngIf=\"cell.Telefono !== '' \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\" >\n              <h6 class=\"firs-label\">\n                {{ cell.Telefono.toString().substring(0, 3)}}\n                {{ cell.Telefono.toString().substring(3, 6)}}\n                {{ cell.Telefono.toString().substring(6, 10)}}</h6>\n              <h6 class=\"second-label\">{{cell.tipo_Telefono.toLocaleUpperCase()}}</h6>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </ng-container>\n\n\n  <ng-container *ngFor=\"let addres of address\">\n    <ion-button expand=\"block\" color=\"dark\" *ngIf=\"addres.Numero !== '' \">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" >\n            <h6 class=\"firs-label\">{{  addres.Calle }} {{ addres.Ciudad }}</h6>\n            <h6 class=\"second-label\">{{  addres.Estado }} {{  addres.CP }}</h6>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ng-container>\n\n      <ion-button expand=\"block\" color=\"dark\" *ngIf=\"(contact | async)?.Correo !== '' \">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-col>\n\n            <ion-col class =\"correo\" size=\"11\" >\n              <h6>{{  (contact | async)?.Correo }} </h6>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n\n    <ion-button expand=\"block\" color=\"dark\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon name=\"bookmarks\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" >\n            <h6 class=\"firs-label\"></h6>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Pages/details-contact/details-contact.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/details-contact/details-contact.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsContactPageModule", function() { return DetailsContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-contact.page */ "./src/app/Pages/details-contact/details-contact.page.ts");







const routes = [
    {
        path: '',
        component: _details_contact_page__WEBPACK_IMPORTED_MODULE_6__["DetailsContactPage"]
    }
];
let DetailsContactPageModule = class DetailsContactPageModule {
};
DetailsContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_details_contact_page__WEBPACK_IMPORTED_MODULE_6__["DetailsContactPage"]]
    })
], DetailsContactPageModule);



/***/ }),

/***/ "./src/app/Pages/details-contact/details-contact.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/details-contact/details-contact.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#000000;\n  --ion-text-color: var(--ion-color-light);\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-text-color: var(--ion-color-light);\n}\n\nion-grid > ion-row > ion-col > ion-avatar {\n  background: #00557f;\n  margin-left: calc(50% - 32px);\n}\n\n.nombre_Avatar {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin: 0 0 0 0;\n  padding: 27% 0 0 23%;\n}\n\n.apellido_Avatar {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin: 0 0 0 0;\n}\n\nion-button {\n  margin: 0 0 0 0;\n  white-space: normal;\n  border-radius: 30px;\n}\n\nion-button > ion-grid {\n  width: 100%;\n  height: 100%;\n  padding: 0 0 0 0;\n  margin: 0 -15px;\n}\n\nion-button > ion-grid > ion-row {\n  width: 100%;\n  height: 100%;\n}\n\nion-button > ion-grid > ion-row :host {\n  --padding-top: var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding));\n  --padding-bottom: var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding));\n}\n\nion-button > ion-grid > ion-row > ion-col {\n  width: 100%;\n  height: 100%;\n  padding: 5px 5px 5px 5px;\n}\n\nion-button > ion-grid > ion-row > ion-col > ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.firs-label {\n  font-size: 12px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 67%;\n  text-align: start;\n  padding-left: 5px;\n  text-transform: none;\n}\n\n.second-label {\n  font-size: 10px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 33%;\n  text-align: start;\n  padding-left: 5px;\n  text-transform: none;\n}\n\n.correo {\n  display: flow;\n}\n\n.correo h6 {\n  width: 100%;\n  margin: 0 0 0 0;\n  padding: 5px 0 15px 5px;\n  max-height: 36px;\n  text-align: start;\n  font-size: 14px;\n  text-transform: none;\n}\n\nion-button > ion-grid > ion-row > ion-col > ion-icon {\n  width: 90%;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JjYXN0aWxsby9Eb2N1bWVudHMvQnJhbmRvbi9XZWJTdG9ybS9Jb25pYy9DdFBkL3NyYy9hcHAvUGFnZXMvZGV0YWlscy1jb250YWN0L2RldGFpbHMtY29udGFjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2RldGFpbHMtY29udGFjdC9kZXRhaWxzLWNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBRENBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURERTtFQUNFLCtFQUFBO0VBQ0Esa0ZBQUE7QUNHSjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNFRjs7QURBQTtFQUNFLCtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FERkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0lKOztBRENBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2RldGFpbHMtY29udGFjdC9kZXRhaWxzLWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQ6ICMwMDU1N2Y7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDMycHgpO1xufVxuLm5vbWJyZV9BdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBwYWRkaW5nOiAyNyUgMCAwIDIzJTtcbn1cbi5hcGVsbGlkb19BdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuXG59XG5cblxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xufVxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkID4gaW9uLXJvdyAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICA6aG9zdCB7XG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteHMsdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcpKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cyx2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZykpO1xuICB9XG5cbn1cbmlvbi1idXR0b24gPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29se1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG59XG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmZpcnMtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjclO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLnNlY29uZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMyU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cbn1cblxuLmNvcnJlbyB7XG4gIGRpc3BsYXk6IGZsb3c7XG4gIGg2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgcGFkZGluZzogNXB4IDAgMTVweCA1cHg7XG4gICAgbWF4LWhlaWdodDogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cbiAgfVxufVxuXG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pY29uIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG59IiwiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQ6ICMwMDU1N2Y7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDMycHgpO1xufVxuXG4ubm9tYnJlX0F2YXRhciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIHBhZGRpbmc6IDI3JSAwIDAgMjMlO1xufVxuXG4uYXBlbGxpZG9fQXZhdGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xufVxuXG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1idXR0b24gPiBpb24tZ3JpZCA+IGlvbi1yb3cgOmhvc3Qge1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cyx2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZykpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cyx2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZykpO1xufVxuXG5pb24tYnV0dG9uID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5maXJzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY3JTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNlY29uZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMyU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jb3JyZW8ge1xuICBkaXNwbGF5OiBmbG93O1xufVxuLmNvcnJlbyBoNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIHBhZGRpbmc6IDVweCAwIDE1cHggNXB4O1xuICBtYXgtaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWJ1dHRvbiA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgPiBpb24taWNvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/details-contact/details-contact.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/details-contact/details-contact.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailsContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsContactPage", function() { return DetailsContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_telefono_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/telefono.service */ "./src/app/Services/telefono.service.ts");
/* harmony import */ var _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/contact.service */ "./src/app/Services/contact.service.ts");
/* harmony import */ var _Services_direccion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/direccion.service */ "./src/app/Services/direccion.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let DetailsContactPage = class DetailsContactPage {
    constructor(route, _telefono, _contact, _direccion, _loadingController, _nav, _router) {
        this.route = route;
        this._telefono = _telefono;
        this._contact = _contact;
        this._direccion = _direccion;
        this._loadingController = _loadingController;
        this._nav = _nav;
        this._router = _router;
        this.contact_Id = '';
        this.data = [];
    }
    ngOnInit() {
        this.contact_Id = this.route.snapshot.params['id'];
        this.contact = this._contact.get_Contact(this.contact_Id).valueChanges();
        this._direccion.get_Direccion(this.contact_Id).subscribe(res => {
            this.address = res;
        });
        this._telefono.get_Telefono(this.contact_Id).subscribe(res => {
            this.cell = res;
        });
    }
    delete_Contact() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._contact.delete_Contact(this.contact_Id);
            yield this.cell.filter(check => {
                if (check.id_Contacto !== '') {
                    this._telefono.delete_Telefono(check.id);
                }
            });
            yield this.address.filter(check => {
                if (check.id_Contacto !== '') {
                    this._direccion.delete_Direccion(check.id);
                    this._nav.navigateForward('/');
                }
            });
        });
    }
    asignData() {
        this.contact.subscribe(res => {
            this.data = res;
        });
        console.log(this.data);
        let navigationExtras = {
            state: {
                user: this.data
            }
        };
        this._router.navigate(['edit'], navigationExtras);
    }
};
DetailsContactPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_telefono_service__WEBPACK_IMPORTED_MODULE_3__["TelefonoService"] },
    { type: _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: _Services_direccion_service__WEBPACK_IMPORTED_MODULE_5__["DireccionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-contact',
        template: __webpack_require__(/*! raw-loader!./details-contact.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/details-contact/details-contact.page.html"),
        styles: [__webpack_require__(/*! ./details-contact.page.scss */ "./src/app/Pages/details-contact/details-contact.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _Services_telefono_service__WEBPACK_IMPORTED_MODULE_3__["TelefonoService"],
        _Services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
        _Services_direccion_service__WEBPACK_IMPORTED_MODULE_5__["DireccionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DetailsContactPage);



/***/ })

}]);
//# sourceMappingURL=Pages-details-contact-details-contact-module-es2015.js.map