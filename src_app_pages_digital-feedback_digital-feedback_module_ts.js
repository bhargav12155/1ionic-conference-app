"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_digital-feedback_digital-feedback_module_ts"],{

/***/ 5129:
/*!***************************************************************************!*\
  !*** ./src/app/pages/digital-feedback/digital-feedback-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFeedbackPageRoutingModule: () => (/* binding */ DigitalFeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _digital_feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-feedback.page */ 2107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _DigitalFeedbackPageRoutingModule;




const routes = [{
  path: '',
  component: _digital_feedback_page__WEBPACK_IMPORTED_MODULE_0__.DigitalFeedbackPage
}];
class DigitalFeedbackPageRoutingModule {}
_DigitalFeedbackPageRoutingModule = DigitalFeedbackPageRoutingModule;
_DigitalFeedbackPageRoutingModule.ɵfac = function DigitalFeedbackPageRoutingModule_Factory(t) {
  return new (t || _DigitalFeedbackPageRoutingModule)();
};
_DigitalFeedbackPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _DigitalFeedbackPageRoutingModule
});
_DigitalFeedbackPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DigitalFeedbackPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9776:
/*!*******************************************************************!*\
  !*** ./src/app/pages/digital-feedback/digital-feedback.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFeedbackPageModule: () => (/* binding */ DigitalFeedbackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _digital_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-feedback-routing.module */ 5129);
/* harmony import */ var _digital_feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital-feedback.page */ 2107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _DigitalFeedbackPageModule;






class DigitalFeedbackPageModule {}
_DigitalFeedbackPageModule = DigitalFeedbackPageModule;
_DigitalFeedbackPageModule.ɵfac = function DigitalFeedbackPageModule_Factory(t) {
  return new (t || _DigitalFeedbackPageModule)();
};
_DigitalFeedbackPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _DigitalFeedbackPageModule
});
_DigitalFeedbackPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _digital_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitalFeedbackPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DigitalFeedbackPageModule, {
    declarations: [_digital_feedback_page__WEBPACK_IMPORTED_MODULE_1__.DigitalFeedbackPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _digital_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitalFeedbackPageRoutingModule]
  });
})();

/***/ }),

/***/ 2107:
/*!*****************************************************************!*\
  !*** ./src/app/pages/digital-feedback/digital-feedback.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFeedbackPage: () => (/* binding */ DigitalFeedbackPage)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _providers_digital_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/digital-feedback.service */ 8626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _DigitalFeedbackPage;






function DigitalFeedbackPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading digital feedback data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DigitalFeedbackPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Error Loading Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_16_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.doRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Try Again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function DigitalFeedbackPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Total Submissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 24)(10, "div", 25)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "This Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 24)(17, "div", 25)(18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Avg Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 24)(24, "div", 25)(25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Unique Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.totalSubmissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.thisMonthCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.uniqueEmailsCount);
  }
}
function DigitalFeedbackPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "ion-searchbar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DigitalFeedbackPage_div_18_Template_ion_searchbar_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInput", function DigitalFeedbackPage_div_18_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.handleSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 33)(3, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_chip_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleRatingFilter("excellent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Excellent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_chip_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleRatingFilter("good"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_chip_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleRatingFilter("average"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_chip_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleRatingFilter("poor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Poor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 39)(20, "ion-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DigitalFeedbackPage_div_18_Template_ion_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.sortBy, $event) || (ctx_r1.sortBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-select-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Date (Newest)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Date (Oldest)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Name (A-Z)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-select-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 45)(30, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.doRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_18_Template_ion_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.exportToCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Export CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.ratingFilter === "excellent" ? "success" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.ratingFilter === "good" ? "primary" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.ratingFilter === "average" ? "warning" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.ratingFilter === "poor" ? "danger" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.displayedSubmissions.length === 0);
  }
}
function DigitalFeedbackPage_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(filtered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DigitalFeedbackPage_div_19_div_5_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Try adjusting your filters or search terms.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DigitalFeedbackPage_div_19_div_5_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Digital feedback submissions will appear here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DigitalFeedbackPage_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No digital feedback found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DigitalFeedbackPage_div_19_div_5_p_4_Template, 2, 0, "p", 59)(5, DigitalFeedbackPage_div_19_div_5_p_5_Template, 2, 0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.hasSelectedFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.hasSelectedFilter);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.contact.phone);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Website/CRM Improvements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.digitalFeedback.websiteCrmImprovements);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Likes/Dislikes Digital:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.digitalFeedback.likesDislikesDigital);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Priority Improvements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.digitalFeedback.priorityImprovements);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Additional Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.digitalFeedback.additionalComments);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Device:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getDeviceInfo(submission_r5.device));
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Network:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getNetworkInfo(submission_r5.network));
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getLocationInfo(submission_r5.location));
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Session:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](submission_r5.sessionId);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Technical Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_4_Template, 5, 1, "div", 81)(5, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_5_Template, 5, 1, "div", 81)(6, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_6_Template, 5, 1, "div", 81)(7, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_div_7_Template, 5, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.device);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.sessionId);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 83)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Received:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(submission_r5.receivedAt), " ");
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 83)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "App:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", submission_r5.appName, " ");
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card-content")(1, "div", 73)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Digital Experience Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_4_Template, 5, 1, "div", 74)(5, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_5_Template, 5, 1, "div", 74)(6, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_6_Template, 5, 1, "div", 74)(7, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_7_Template, 5, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_div_8_Template, 8, 4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_p_10_Template, 4, 1, "p", 77)(11, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_p_11_Template, 4, 1, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.websiteCrmImprovements);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.likesDislikesDigital);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.priorityImprovements);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.additionalComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.device || submission_r5.network || submission_r5.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.receivedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.appName);
  }
}
function DigitalFeedbackPage_div_19_div_6_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 62)(1, "ion-card-header", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_19_div_6_ion_card_1_Template_ion_card_header_click_1_listener() {
      const submission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleCard(submission_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 64)(3, "div", 65)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DigitalFeedbackPage_div_19_div_6_ion_card_1_p_8_Template, 2, 1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 68)(10, "ion-chip", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DigitalFeedbackPage_div_19_div_6_ion_card_1_ion_card_content_15_Template, 12, 7, "ion-card-content", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submission_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx_r1.expandedCards.has(submission_r5.id || submission_r5.sessionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((submission_r5.contact == null ? null : submission_r5.contact.name) || "Anonymous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((submission_r5.contact == null ? null : submission_r5.contact.email) || "No email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", submission_r5.contact == null ? null : submission_r5.contact.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.getRatingColor(submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.overallExperience));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (submission_r5.digitalFeedback == null ? null : submission_r5.digitalFeedback.overallExperience) || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatDate(submission_r5.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.expandedCards.has(submission_r5.id || submission_r5.sessionId) ? "chevron-up" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.expandedCards.has(submission_r5.id || submission_r5.sessionId));
  }
}
function DigitalFeedbackPage_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DigitalFeedbackPage_div_19_div_6_ion_card_1_Template, 16, 10, "ion-card", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedSubmissions)("ngForTrackBy", ctx_r1.trackBySubmission);
  }
}
function DigitalFeedbackPage_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "ion-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_19_div_7_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 88)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DigitalFeedbackPage_div_19_div_7_Template_ion_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function DigitalFeedbackPage_div_19_div_7_Template_ion_select_ionChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onPageSizeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-select-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "10 per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-select-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "25 per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-select-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "50 per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_div_19_div_7_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function DigitalFeedbackPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DigitalFeedbackPage_div_19_span_4_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DigitalFeedbackPage_div_19_div_5_Template, 6, 2, "div", 53)(6, DigitalFeedbackPage_div_19_div_6_Template, 2, 2, "div", 54)(7, DigitalFeedbackPage_div_19_div_7_Template, 18, 5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Showing ", ctx_r1.displayedSubmissions.length, " of ", ctx_r1.totalSubmissions, " submissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.hasSelectedFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.displayedSubmissions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.displayedSubmissions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.totalPages > 1);
  }
}
class DigitalFeedbackPage {
  constructor(digitalFeedbackService) {
    this.digitalFeedbackService = digitalFeedbackService;
    this.submissions = [];
    this.search = '';
    this.sortColumn = 'timestamp';
    this.sortDirection = 'desc';
    this.pageSize = 10;
    this.currentPage = 1;
    this.timeFilter = 'all';
    this.experienceFilter = 'all';
    this.startDateTime = null;
    this.endDateTime = null;
    this.status = '';
    this.loading = false;
    this.Math = Math; // Make Math available in template
    this.errorMessage = null;
  }
  ngOnInit() {
    this.refresh();
    this.timer = setInterval(() => this.refresh(false), 60 * 1000);
  }
  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
  refresh(showLoading = true) {
    var _this = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = showLoading;
      if (showLoading) _this.status = 'Loading digital feedback data...';else _this.status = 'Syncing latest data...';
      try {
        const remote = yield _this.digitalFeedbackService.fetchFromServer();
        _this.digitalFeedbackService.mergeRemote(remote);
        _this.submissions = _this.digitalFeedbackService.getAll();
        // Update status with clear distinction between total and filtered
        const totalRecords = _this.submissions.length;
        const filteredCount = _this.filtered.length;
        if (filteredCount === totalRecords) {
          _this.status = `Successfully loaded ${totalRecords} records`;
        } else {
          _this.status = `Loaded ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
        }
      } catch (error) {
        const cachedCount = _this.submissions.length;
        const filteredCount = _this.filtered.length;
        _this.errorMessage = error instanceof Error ? error.message : 'Failed to load data';
        if (filteredCount === cachedCount) {
          _this.status = `Failed to sync. Showing ${cachedCount} cached records`;
        } else {
          _this.status = `Failed to sync. Showing ${filteredCount} of ${cachedCount} cached records`;
        }
      } finally {
        _this.loading = false;
        setTimeout(() => _this.updateStatusForFilters(), 100);
      }
    })();
  }
  // Force refresh by clearing cache first
  forceRefresh() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.status = 'Force refreshing from server...';
      try {
        _this2.submissions = yield _this2.digitalFeedbackService.forceRefresh();
        const totalRecords = _this2.submissions.length;
        const filteredCount = _this2.filtered.length;
        if (filteredCount === totalRecords) {
          _this2.status = `Force refreshed ${totalRecords} records from server`;
        } else {
          _this2.status = `Force refreshed ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
        }
      } catch (error) {
        _this2.status = 'Failed to force refresh from server';
        console.error('Force refresh failed:', error);
      } finally {
        _this2.loading = false;
        setTimeout(() => _this2.updateStatusForFilters(), 100);
      }
    })();
  }
  // Handle ion-refresher events
  onRefresh(event) {
    var _this3 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.refresh(false);
      event.target.complete();
    })();
  }
  // Analytics getters
  get excellentCount() {
    return this.filtered.filter(f => {
      var _f$digitalFeedback;
      return ((_f$digitalFeedback = f.digitalFeedback) === null || _f$digitalFeedback === void 0 ? void 0 : _f$digitalFeedback.overallExperience) === 'excellent';
    }).length;
  }
  get todayCount() {
    const today = new Date().toDateString();
    return this.filtered.filter(f => new Date(f.timestamp).toDateString() === today).length;
  }
  // Check if any filters are active
  get hasSelectedFilter() {
    return this.search.trim() !== '' || this.timeFilter !== 'all' || this.experienceFilter !== 'all' || this.startDateTime !== null || this.endDateTime !== null;
  }
  // UI Helper methods
  updateStatusForFilters() {
    if (!this.submissions.length) return;
    const totalRecords = this.submissions.length;
    const filteredCount = this.filtered.length;
    if (filteredCount === totalRecords) {
      this.status = `Showing all ${totalRecords} records`;
    } else {
      this.status = `Loaded ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
    }
  }
  onSearchChange(event) {
    this.search = event.detail.value;
    this.currentPage = 1;
    this.updateStatusForFilters();
  }
  onDateRangeChange() {
    if (this.startDateTime && this.endDateTime) {
      const startMs = new Date(this.startDateTime).getTime();
      const endMs = new Date(this.endDateTime).getTime();
      if (endMs < startMs) {
        const temp = this.startDateTime;
        this.startDateTime = this.endDateTime;
        this.endDateTime = temp;
      }
    }
    this.currentPage = 1;
    this.updateStatusForFilters();
  }
  // Check if any filters are active
  hasActiveFilters() {
    return this.search.trim() !== '' || this.timeFilter !== 'all' || this.experienceFilter !== 'all' || this.hasCustomRange();
  }
  // Clear all filters
  clearAllFilters() {
    this.search = '';
    this.timeFilter = 'all';
    this.experienceFilter = 'all';
    this.startDateTime = null;
    this.endDateTime = null;
    this.currentPage = 1;
    this.updateStatusForFilters();
  }
  // Check if date range is valid
  get isDateRangeValid() {
    if (!this.startDateTime || !this.endDateTime) return true;
    return new Date(this.startDateTime).getTime() <= new Date(this.endDateTime).getTime();
  }
  // Get current filter info for display
  get filterInfo() {
    if (this.hasCustomRange()) {
      const start = this.startDateTime ? new Date(this.startDateTime).toLocaleString() : 'Start';
      const end = this.endDateTime ? new Date(this.endDateTime).toLocaleString() : 'End';
      const valid = this.isDateRangeValid ? '' : ' (Invalid Range - Auto-corrected)';
      return `Custom range: ${start} to ${end}${valid}`;
    }
    if (this.timeFilter !== 'all') {
      return `Showing: ${this.timeFilter.replace('h', ' hours').replace('d', ' days')}`;
    }
    return 'Showing: All records';
  }
  hasCustomRange() {
    return !!(this.startDateTime || this.endDateTime);
  }
  // Filtering & sorting helpers
  get filtered() {
    let data = [...this.submissions];
    const now = Date.now();
    // Search filter
    if (this.search.trim()) {
      const searchLower = this.search.toLowerCase();
      data = data.filter(d => {
        var _d$contact, _d$contact2, _d$digitalFeedback, _d$digitalFeedback2, _d$digitalFeedback3, _d$digitalFeedback4, _d$digitalFeedback5;
        return ((_d$contact = d.contact) === null || _d$contact === void 0 || (_d$contact = _d$contact.name) === null || _d$contact === void 0 ? void 0 : _d$contact.toLowerCase().includes(searchLower)) || ((_d$contact2 = d.contact) === null || _d$contact2 === void 0 || (_d$contact2 = _d$contact2.email) === null || _d$contact2 === void 0 ? void 0 : _d$contact2.toLowerCase().includes(searchLower)) || ((_d$digitalFeedback = d.digitalFeedback) === null || _d$digitalFeedback === void 0 || (_d$digitalFeedback = _d$digitalFeedback.overallExperience) === null || _d$digitalFeedback === void 0 ? void 0 : _d$digitalFeedback.toLowerCase().includes(searchLower)) || ((_d$digitalFeedback2 = d.digitalFeedback) === null || _d$digitalFeedback2 === void 0 || (_d$digitalFeedback2 = _d$digitalFeedback2.websiteCrmImprovements) === null || _d$digitalFeedback2 === void 0 ? void 0 : _d$digitalFeedback2.toLowerCase().includes(searchLower)) || ((_d$digitalFeedback3 = d.digitalFeedback) === null || _d$digitalFeedback3 === void 0 || (_d$digitalFeedback3 = _d$digitalFeedback3.likesDislikesDigital) === null || _d$digitalFeedback3 === void 0 ? void 0 : _d$digitalFeedback3.toLowerCase().includes(searchLower)) || ((_d$digitalFeedback4 = d.digitalFeedback) === null || _d$digitalFeedback4 === void 0 || (_d$digitalFeedback4 = _d$digitalFeedback4.priorityImprovements) === null || _d$digitalFeedback4 === void 0 ? void 0 : _d$digitalFeedback4.toLowerCase().includes(searchLower)) || ((_d$digitalFeedback5 = d.digitalFeedback) === null || _d$digitalFeedback5 === void 0 || (_d$digitalFeedback5 = _d$digitalFeedback5.additionalComments) === null || _d$digitalFeedback5 === void 0 ? void 0 : _d$digitalFeedback5.toLowerCase().includes(searchLower));
      });
    }
    // Experience filter
    if (this.experienceFilter !== 'all') {
      data = data.filter(d => {
        var _d$digitalFeedback6;
        return ((_d$digitalFeedback6 = d.digitalFeedback) === null || _d$digitalFeedback6 === void 0 ? void 0 : _d$digitalFeedback6.overallExperience) === this.experienceFilter;
      });
    }
    // Relative time filter only if no custom range
    if (!this.hasCustomRange() && this.timeFilter !== 'all') {
      const cutoffMap = {
        '24h': 24 * 3600 * 1000,
        '7d': 7 * 24 * 3600 * 1000,
        '30d': 30 * 24 * 3600 * 1000
      };
      const cutoff = now - cutoffMap[this.timeFilter];
      data = data.filter(d => new Date(d.timestamp).getTime() >= cutoff);
    }
    // Custom date/time range filter
    if (this.hasCustomRange()) {
      let startMs = this.startDateTime ? new Date(this.startDateTime).getTime() : -Infinity;
      let endMs = this.endDateTime ? new Date(this.endDateTime).getTime() : Infinity;
      if (startMs > endMs && startMs !== -Infinity && endMs !== Infinity) {
        [startMs, endMs] = [endMs, startMs];
      }
      data = data.filter(d => {
        const timestamp = new Date(d.timestamp).getTime();
        return timestamp >= startMs && timestamp <= endMs;
      });
    }
    // Sort
    data.sort((a, b) => {
      let aVal, bVal;
      if (this.sortColumn === 'timestamp') {
        aVal = new Date(a.timestamp).getTime();
        bVal = new Date(b.timestamp).getTime();
      } else if (this.sortColumn === 'contact.name') {
        var _a$contact, _b$contact;
        aVal = ((_a$contact = a.contact) === null || _a$contact === void 0 ? void 0 : _a$contact.name) || '';
        bVal = ((_b$contact = b.contact) === null || _b$contact === void 0 ? void 0 : _b$contact.name) || '';
      } else if (this.sortColumn === 'digitalFeedback.overallExperience') {
        var _a$digitalFeedback, _b$digitalFeedback;
        aVal = ((_a$digitalFeedback = a.digitalFeedback) === null || _a$digitalFeedback === void 0 ? void 0 : _a$digitalFeedback.overallExperience) || '';
        bVal = ((_b$digitalFeedback = b.digitalFeedback) === null || _b$digitalFeedback === void 0 ? void 0 : _b$digitalFeedback.overallExperience) || '';
      } else {
        return 0;
      }
      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    return data;
  }
  get paginated() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize);
  }
  setSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'desc';
    }
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  getPageNumbers() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  // Helper methods
  formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }
  formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString();
  }
  getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  }
  getStatusColor() {
    if (this.status.includes('Failed')) return 'danger';
    if (this.status.includes('Force refreshed')) return 'success';
    if (this.status.includes('Successfully')) return 'success';
    return 'primary';
  }
  getStatusIcon() {
    if (this.status.includes('Failed')) return 'warning';
    if (this.status.includes('Force refreshed')) return 'checkmark-circle';
    if (this.status.includes('Successfully')) return 'checkmark-circle';
    return 'information-circle';
  }
  trackByFn(index, item) {
    return item.id || item.timestamp + item.sessionId;
  }
  // Export functions
  exportCSV() {
    const headers = ['Date', 'Time', 'Name', 'Email', 'Phone', 'Overall Experience', 'Website/CRM Improvements', 'Likes/Dislikes', 'Priority Improvements', 'Additional Comments', 'Device Platform', 'IP Address', 'Location'];
    const rows = [headers];
    this.filtered.forEach(r => {
      var _r$contact, _r$contact2, _r$contact3, _r$digitalFeedback, _r$digitalFeedback2, _r$digitalFeedback3, _r$digitalFeedback4, _r$digitalFeedback5, _r$device, _r$network, _r$location;
      rows.push([this.formatDate(r.timestamp), this.formatTime(r.timestamp), ((_r$contact = r.contact) === null || _r$contact === void 0 ? void 0 : _r$contact.name) || '', ((_r$contact2 = r.contact) === null || _r$contact2 === void 0 ? void 0 : _r$contact2.email) || '', ((_r$contact3 = r.contact) === null || _r$contact3 === void 0 ? void 0 : _r$contact3.phone) || '', ((_r$digitalFeedback = r.digitalFeedback) === null || _r$digitalFeedback === void 0 ? void 0 : _r$digitalFeedback.overallExperience) || '', ((_r$digitalFeedback2 = r.digitalFeedback) === null || _r$digitalFeedback2 === void 0 ? void 0 : _r$digitalFeedback2.websiteCrmImprovements) || '', ((_r$digitalFeedback3 = r.digitalFeedback) === null || _r$digitalFeedback3 === void 0 ? void 0 : _r$digitalFeedback3.likesDislikesDigital) || '', ((_r$digitalFeedback4 = r.digitalFeedback) === null || _r$digitalFeedback4 === void 0 ? void 0 : _r$digitalFeedback4.priorityImprovements) || '', ((_r$digitalFeedback5 = r.digitalFeedback) === null || _r$digitalFeedback5 === void 0 ? void 0 : _r$digitalFeedback5.additionalComments) || '', ((_r$device = r.device) === null || _r$device === void 0 ? void 0 : _r$device.platform) || '', ((_r$network = r.network) === null || _r$network === void 0 ? void 0 : _r$network.ip) || '', (_r$location = r.location) !== null && _r$location !== void 0 && _r$location.coordinates ? `${r.location.coordinates.latitude}, ${r.location.coordinates.longitude}` : '']);
    });
    const csv = rows.map(r => r.map(c => '"' + c.replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'digital-feedback.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  exportPrint() {
    var _document$getElementB;
    const printContents = ((_document$getElementB = document.getElementById('digitalFeedbackTable')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.outerHTML) || '';
    const w = window.open('', '', 'height=700,width=900');
    if (!w) return;
    w.document.write('<html><head><title>Digital Feedback</title>');
    w.document.write('<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>');
    w.document.write('</head><body>');
    w.document.write(printContents);
    w.document.write('</body></html>');
    w.document.close();
    w.print();
  }
}
_DigitalFeedbackPage = DigitalFeedbackPage;
_DigitalFeedbackPage.ɵfac = function DigitalFeedbackPage_Factory(t) {
  return new (t || _DigitalFeedbackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_digital_feedback_service__WEBPACK_IMPORTED_MODULE_1__.DigitalFeedbackService));
};
_DigitalFeedbackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _DigitalFeedbackPage,
  selectors: [["app-digital-feedback"]],
  decls: 22,
  vars: 8,
  consts: [[3, "translucent"], ["slot", "start"], ["defaultHref", "/"], ["slot", "end"], [3, "click", "disabled"], ["name", "filter-outline"], [1, "digital-feedback-content", 3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "analytics-section", 4, "ngIf"], ["class", "controls-section", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "chevron-down-circle-outline", "pullingText", "Pull to refresh", "refreshingSpinner", "circular", "refreshingText", "Refreshing..."], [1, "loading-container"], ["name", "circular"], [1, "error-container"], ["name", "warning-outline", "color", "danger"], ["fill", "outline", 3, "click"], ["name", "refresh-outline", "slot", "start"], [1, "analytics-section"], [1, "analytics-grid"], [1, "analytics-card"], [1, "card-header"], ["name", "document-text-outline"], [1, "card-value"], ["name", "calendar-outline"], ["name", "star-outline"], ["name", "people-outline"], [1, "controls-section"], ["placeholder", "Search by name, email, or comments...", "debounce", "300", "show-clear-button", "focus", 3, "ngModelChange", "ionInput", "ngModel"], [1, "filter-chips"], [3, "click", "color"], ["name", "star"], ["name", "thumbs-up"], ["name", "remove"], ["name", "thumbs-down"], [1, "controls-row"], ["placeholder", "Sort by...", "interface", "popover", 3, "ngModelChange", "ngModel"], ["value", "timestamp"], ["value", "timestamp-asc"], ["value", "name"], ["value", "rating"], [1, "button-group"], ["fill", "outline", "size", "small", 3, "click", "disabled"], ["fill", "solid", "size", "small", 3, "click", "disabled"], ["name", "download-outline", "slot", "start"], [1, "results-section"], [1, "results-header"], [1, "results-count"], ["class", "filter-indicator", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "submissions-list", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [1, "filter-indicator"], [1, "empty-state"], ["name", "document-outline", "color", "medium"], [4, "ngIf"], [1, "submissions-list"], ["class", "submission-card", 3, "expanded", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "submission-card"], [3, "click"], [1, "card-header-content"], [1, "contact-info"], [1, "email"], ["class", "phone", 4, "ngIf"], [1, "card-meta"], [1, "rating-chip", 3, "color"], [1, "timestamp"], [3, "name"], [1, "phone"], [1, "feedback-section"], ["class", "feedback-item", 4, "ngIf"], ["class", "technical-section", 4, "ngIf"], [1, "metadata-section"], ["class", "meta-item", 4, "ngIf"], [1, "feedback-item"], [1, "technical-section"], [1, "tech-grid"], ["class", "tech-item", 4, "ngIf"], [1, "tech-item"], [1, "meta-item"], [1, "pagination-section"], [1, "pagination-controls"], ["fill", "clear", 3, "click", "disabled"], ["name", "chevron-back"], [1, "page-info"], [3, "ngModelChange", "ionChange", "ngModel"], ["value", "10"], ["value", "25"], ["value", "50"], ["name", "chevron-forward"]],
  template: function DigitalFeedbackPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button")(4, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Digital Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DigitalFeedbackPage_Template_ion_button_click_8_listener() {
        return ctx.clearAllFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content", 6)(11, "ion-header", 7)(12, "ion-toolbar")(13, "ion-title", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Digital Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DigitalFeedbackPage_div_15_Template, 4, 0, "div", 9)(16, DigitalFeedbackPage_div_16_Template, 9, 1, "div", 10)(17, DigitalFeedbackPage_div_17_Template, 30, 4, "div", 11)(18, DigitalFeedbackPage_div_18_Template, 36, 8, "div", 12)(19, DigitalFeedbackPage_div_19_Template, 8, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-refresher", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function DigitalFeedbackPage_Template_ion_refresher_ionRefresh_20_listener($event) {
        return ctx.onRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-refresher-content", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.hasSelectedFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton],
  styles: [".digital-feedback-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --color: #ffffff;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  --color: #ffffff;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.error-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0 0 8px 0;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0 0 20px 0;\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .analytics-section[_ngcontent-%COMP%]   .analytics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .analytics-section[_ngcontent-%COMP%]   .analytics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.2);\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1;\n}\n\n.controls-section[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.controls-section[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: #ffffff;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  --icon-color: rgba(255, 255, 255, 0.7);\n  --clear-button-color: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n.controls-section[_ngcontent-%COMP%]   .filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.controls-section[_ngcontent-%COMP%]   .filter-chips[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n}\n.controls-section[_ngcontent-%COMP%]   .filter-chips[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.controls-section[_ngcontent-%COMP%]   .filter-chips[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: #ffffff;\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 150px;\n}\n@media (max-width: 768px) {\n  .controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n}\n.controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: #ffffff;\n  --border-color: rgba(255, 255, 255, 0.3);\n}\n.controls-section[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   ion-button[fill=solid][_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.25);\n}\n\n.results-section[_ngcontent-%COMP%] {\n  padding: 0 16px 100px 16px;\n}\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.results-section[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]   .filter-indicator[_ngcontent-%COMP%] {\n  color: #ffd700;\n  font-weight: 500;\n}\n.results-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.results-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 20px;\n}\n.results-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0 0 12px 0;\n}\n.results-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0;\n}\n\n.submissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  margin: 0;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.2);\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card.expanded[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  cursor: pointer;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.9rem;\n  margin: 0 0 2px 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.85rem;\n  margin: 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n@media (max-width: 600px) {\n  .submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .rating-chip[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.8rem;\n  margin: 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1.2rem;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0 20px 20px 20px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 8px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   .feedback-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   .feedback-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   .feedback-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9rem;\n  display: block;\n  margin-bottom: 4px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]   .feedback-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  line-height: 1.5;\n  margin: 0;\n  padding-left: 12px;\n  border-left: 2px solid rgba(255, 255, 255, 0.3);\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 8px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   .tech-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   .tech-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   .tech-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 12px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   .tech-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.85rem;\n  display: block;\n  margin-bottom: 4px;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .technical-section[_ngcontent-%COMP%]   .tech-grid[_ngcontent-%COMP%]   .tech-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n  margin: 0;\n  word-break: break-word;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .metadata-section[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.8rem;\n  margin: 0 0 4px 0;\n}\n.submissions-list[_ngcontent-%COMP%]   .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .metadata-section[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n\nion-chip[color=success][_ngcontent-%COMP%] {\n  --background: rgba(46, 125, 50, 0.8);\n  --color: #ffffff;\n}\nion-chip[color=primary][_ngcontent-%COMP%] {\n  --background: rgba(33, 150, 243, 0.8);\n  --color: #ffffff;\n}\nion-chip[color=warning][_ngcontent-%COMP%] {\n  --background: rgba(255, 152, 0, 0.8);\n  --color: #ffffff;\n}\nion-chip[color=danger][_ngcontent-%COMP%] {\n  --background: rgba(244, 67, 54, 0.8);\n  --color: #ffffff;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #ffffff;\n  --background: rgba(255, 255, 255, 0.15);\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  --color: rgba(255, 255, 255, 0.4);\n  --background: rgba(255, 255, 255, 0.05);\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: #ffffff;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  min-width: 120px;\n}\n\n@media (max-width: 768px) {\n  .analytics-section[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .controls-section[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .results-section[_ngcontent-%COMP%] {\n    padding: 0 12px 100px 12px;\n  }\n  .submission-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .submission-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n    padding: 0 16px 16px 16px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .analytics-card[_ngcontent-%COMP%], \n   .submission-card[_ngcontent-%COMP%], \n   ion-chip[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .analytics-card[_ngcontent-%COMP%]:hover, \n   .submission-card[_ngcontent-%COMP%]:hover, \n   ion-chip[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .digital-feedback-content[_ngcontent-%COMP%] {\n    --background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlnaXRhbC1mZWVkYmFjay9kaWdpdGFsLWZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLCtEQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSwrQkFBQTtFQUNBLFNBQUE7QUFGSjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVdBO0VBQ0UsYUFBQTtBQVJGO0FBVUU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBUko7QUFVSTtFQUxGO0lBTUkscUNBQUE7RUFQSjtBQUNGO0FBU0k7RUFURjtJQVVJLDBCQUFBO0VBTko7QUFDRjtBQVNFO0VBQ0UscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUEo7QUFTSTtFQUNFLDJCQUFBO0VBQ0Esb0NBQUE7QUFQTjtBQVVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJOO0FBVU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FBUlI7QUFXTTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUFUUjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFYTjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWdCRTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFpQkU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWZKO0FBaUJJO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7QUFmTjtBQWlCTTtFQUNFLHNCQUFBO0FBZlI7QUFrQk07RUFDRSxpQkFBQTtBQWhCUjtBQXFCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFuQko7QUFxQkk7RUFQRjtJQVFJLHNCQUFBO0lBQ0Esb0JBQUE7RUFsQko7QUFDRjtBQW9CSTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFsQk47QUFvQk07RUFQRjtJQVFJLGVBQUE7SUFDQSxXQUFBO0VBakJOO0FBQ0Y7QUFvQkk7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQWxCTjtBQW9CTTtFQUpGO0lBS0ksV0FBQTtFQWpCTjtFQW1CTTtJQUNFLE9BQUE7RUFqQlI7QUFDRjtBQW9CTTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQWxCUjtBQW9CUTtFQUNFLHVDQUFBO0FBbEJWOztBQTBCQTtFQUNFLDBCQUFBO0FBdkJGO0FBeUJFO0VBQ0UsbUJBQUE7QUF2Qko7QUF5Qkk7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQXZCTjtBQXlCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQXZCUjtBQTRCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE0Qkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUExQk47QUE2Qkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUEzQk47QUE4Qkk7RUFDRSwrQkFBQTtFQUNBLFNBQUE7QUE1Qk47O0FBa0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQS9CRjtBQWlDRTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQS9CSjtBQWlDSTtFQUNFLDJCQUFBO0VBQ0Esb0NBQUE7QUEvQk47QUFrQ0k7RUFDRSxvQ0FBQTtBQWhDTjtBQW1DSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBakNOO0FBbUNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBakNSO0FBbUNRO0VBTkY7SUFPSSxzQkFBQTtJQUNBLFNBQUE7RUFoQ1I7QUFDRjtBQWtDUTtFQUNFLE9BQUE7QUFoQ1Y7QUFrQ1U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBaENaO0FBbUNVO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBakNaO0FBb0NVO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFsQ1o7QUFzQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7QUFwQ1Y7QUFzQ1U7RUFORjtJQU9JLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7RUFuQ1Y7QUFDRjtBQXFDVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQ1o7QUFzQ1U7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQXBDWjtBQXVDVTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFyQ1o7QUEyQ0k7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0FBekNOO0FBMkNNO0VBQ0UsbUJBQUE7QUF6Q1I7QUEyQ1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBekNWO0FBNENRO0VBQ0UsbUJBQUE7QUExQ1Y7QUE0Q1U7RUFDRSxnQkFBQTtBQTFDWjtBQTZDVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNDWjtBQThDVTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQTVDWjtBQWlETTtFQUNFLG1CQUFBO0FBL0NSO0FBaURRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtBQS9DVjtBQWtEUTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFoRFY7QUFrRFU7RUFMRjtJQU1JLDBCQUFBO0VBL0NWO0FBQ0Y7QUFpRFU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQS9DWjtBQWlEWTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQS9DZDtBQWtEWTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFoRGQ7QUF1RFE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFyRFY7QUF1RFU7RUFDRSwrQkFBQTtBQXJEWjs7QUErREU7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBNURKO0FBK0RFO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtBQTdESjtBQWdFRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUE5REo7QUFpRUU7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBL0RKOztBQW9FQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQWpFRjtBQW1FRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWpFSjtBQW1FSTtFQU5GO0lBT0ksc0JBQUE7SUFDQSxTQUFBO0VBaEVKO0FBQ0Y7QUFrRUk7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FBaEVOO0FBa0VNO0VBQ0UsaUNBQUE7RUFDQSx1Q0FBQTtBQWhFUjtBQW9FSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBbEVOO0FBb0VNO0VBUEY7SUFRSSxzQkFBQTtJQUNBLFFBQUE7SUFDQSxrQkFBQTtFQWpFTjtBQUNGO0FBbUVNO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpFUjs7QUF3RUE7RUFDRTtJQUNFLGFBQUE7RUFyRUY7RUF3RUE7SUFDRSxlQUFBO0VBdEVGO0VBeUVBO0lBQ0UsMEJBQUE7RUF2RUY7RUEyRUU7SUFDRSxhQUFBO0VBekVKO0VBNEVFO0lBQ0UseUJBQUE7RUExRUo7QUFDRjtBQStFQTtFQUNFOzs7SUFHRSxnQkFBQTtFQTdFRjtFQWdGQTs7O0lBR0UsZUFBQTtFQTlFRjtBQUNGO0FBa0ZBO0VBQ0U7SUFDRSwrREFBQTtFQWhGRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGlnaXRhbCBGZWVkYmFjayBQYWdlIFN0eWxlc1xuLmRpZ2l0YWwtZmVlZGJhY2stY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLy8gTG9hZGluZyBTdGF0ZVxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIGlvbi1zcGlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIHAge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi8vIEVycm9yIFN0YXRlXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIFxuICBoMyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIH1cbiAgXG4gIHAge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICB9XG59XG5cbi8vIEFuYWx5dGljcyBTZWN0aW9uXG4uYW5hbHl0aWNzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBcbiAgLmFuYWx5dGljcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG4gIFxuICAuYW5hbHl0aWNzLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBcbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNhcmQtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRyb2xzIFNlY3Rpb25cbi5jb250cm9scy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBcbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIC0taWNvbi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIFxuICAuZmlsdGVyLWNoaXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIFxuICAgIGlvbi1jaGlwIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jb250cm9scy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG4gICAgXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgXG4gICAgICAgICZbZmlsbD1cInNvbGlkXCJdIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzdWx0cyBTZWN0aW9uXG4ucmVzdWx0cy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAxNnB4IDEwMHB4IDE2cHg7XG4gIFxuICAucmVzdWx0cy1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgLnJlc3VsdHMtY291bnQge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgXG4gICAgICAuZmlsdGVyLWluZGljYXRvciB7XG4gICAgICAgIGNvbG9yOiAjZmZkNzAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmVtcHR5LXN0YXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNjBweCAyMHB4O1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIFN1Ym1pc3Npb24gQ2FyZHNcbi5zdWJtaXNzaW9ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBcbiAgLnN1Ym1pc3Npb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi5leHBhbmRlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIFxuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgXG4gICAgICAuY2FyZC1oZWFkZXItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29udGFjdC1pbmZvIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAycHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnBob25lIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2FyZC1tZXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnJhdGluZy1jaGlwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnRpbWVzdGFtcCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIFxuICAgICAgLmZlZWRiYWNrLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBcbiAgICAgICAgaDUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mZWVkYmFjay1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAudGVjaG5pY2FsLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBcbiAgICAgICAgaDUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50ZWNoLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC50ZWNoLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5tZXRhZGF0YS1zZWN0aW9uIHtcbiAgICAgICAgLm1ldGEtaXRlbSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICBcbiAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmF0aW5nIENvbG9yc1xuaW9uLWNoaXAge1xuICAmW2NvbG9yPVwic3VjY2Vzc1wiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ2LCAxMjUsIDUwLCAwLjgpO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjgpO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gICZbY29sb3I9XCJ3YXJuaW5nXCJdIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTIsIDAsIDAuOCk7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBcbiAgJltjb2xvcj1cImRhbmdlclwiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjgpO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLy8gUGFnaW5hdGlvblxuLnBhZ2luYXRpb24tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBcbiAgLnBhZ2luYXRpb24tY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgXG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucGFnZS1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYW5hbHl0aWNzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgXG4gIC5jb250cm9scy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbiAgXG4gIC5yZXN1bHRzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAgMTJweCAxMDBweCAxMnB4O1xuICB9XG4gIFxuICAuc3VibWlzc2lvbi1jYXJkIHtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwIDE2cHggMTZweCAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBY2Nlc3NpYmlsaXR5XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuYW5hbHl0aWNzLWNhcmQsXG4gIC5zdWJtaXNzaW9uLWNhcmQsXG4gIGlvbi1jaGlwIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG4gIFxuICAuYW5hbHl0aWNzLWNhcmQ6aG92ZXIsXG4gIC5zdWJtaXNzaW9uLWNhcmQ6aG92ZXIsXG4gIGlvbi1jaGlwOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLy8gRGFyayBNb2RlIFN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLmRpZ2l0YWwtZmVlZGJhY2stY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTJlIDAlLCAjMTYyMTNlIDEwMCUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8626:
/*!*******************************************************!*\
  !*** ./src/app/providers/digital-feedback.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalFeedbackService: () => (/* binding */ DigitalFeedbackService)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);

var _DigitalFeedbackService;

class DigitalFeedbackService {
  constructor() {
    this.localKey = 'app_digital_feedback_submissions_v1';
    this.submissions = [];
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.localKey);
      if (raw) this.submissions = JSON.parse(raw);
    } catch (e) {
      console.warn('Failed to load digital feedback from storage', e);
    }
  }
  persist() {
    try {
      localStorage.setItem(this.localKey, JSON.stringify(this.submissions));
    } catch (e) {
      console.warn('Failed to persist digital feedback to storage', e);
    }
  }
  getAll() {
    return [...this.submissions];
  }
  // Clear local cache and force fresh fetch
  clearCache() {
    console.log('Clearing digital feedback cache');
    this.submissions = [];
    localStorage.removeItem(this.localKey);
  }
  // Force refresh from server (clears cache first)
  forceRefresh() {
    var _this = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.clearCache();
      const serverData = yield _this.fetchFromServer();
      _this.mergeRemote(serverData);
      return _this.getAll();
    })();
  }
  getApiBase() {
    const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocal ? 'http://localhost:3000' : 'https://loc-end.onrender.com';
  }
  // Fetch list from backend (read-only)
  fetchFromServer() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const API_BASE = _this2.getApiBase();
      console.log('Fetching from server:', `${API_BASE}/api/digital-feedback`);
      try {
        const res = yield fetch(`${API_BASE}/api/digital-feedback`, {
          headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        if (!res.ok) throw new Error(`GET /api/digital-feedback ${res.status}`);
        const data = yield res.json();
        console.log('Server response:', {
          count: data === null || data === void 0 ? void 0 : data.length,
          sample: data === null || data === void 0 ? void 0 : data[0]
        });
        if (!Array.isArray(data)) return [];
        // Normalize minimal fields (defensive)
        return data.map(d => ({
          id: d.id || d._id,
          timestamp: d.timestamp || d.createdAt || new Date().toISOString(),
          sessionId: d.sessionId || 'n/a',
          digitalFeedback: d.digitalFeedback || {
            websiteCrmImprovements: d.websiteCrmImprovements || '',
            likesDislikesDigital: d.likesDislikesDigital || '',
            overallExperience: d.overallExperience || '',
            priorityImprovements: d.priorityImprovements || '',
            additionalComments: d.additionalComments || ''
          },
          contact: d.contact || {
            name: d.name || '',
            email: d.email || '',
            phone: d.phone || ''
          },
          location: d.location,
          device: d.device,
          network: d.network,
          receivedAt: d.receivedAt,
          appName: d.appName
        }));
      } catch (e) {
        console.error('Failed to fetch digital feedback list:', e);
        throw e; // Re-throw to let caller handle the error
      }
    })();
  }
  mergeRemote(list) {
    console.log('Merging remote data:', {
      remoteCount: list.length,
      localCount: this.submissions.length
    });
    // Instead of merging, completely replace with server data
    // This ensures deletions and updates from server are reflected
    if (list.length >= 0) {
      // Even if empty array, trust the server
      this.submissions = [...list];
      this.persist();
      console.log('Replaced local cache with server data:', this.submissions.length);
    }
  }
  // Retain submit method for future use
  submit(feedback) {
    var _this3 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const API_BASE = _this3.getApiBase();
      const response = yield fetch(`${API_BASE}/api/digital-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(feedback)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = yield response.json();
      const stored = {
        ...feedback,
        id: data.id || data._id
      };
      _this3.submissions.unshift(stored);
      _this3.persist();
      return stored;
    })();
  }
}
_DigitalFeedbackService = DigitalFeedbackService;
_DigitalFeedbackService.ɵfac = function DigitalFeedbackService_Factory(t) {
  return new (t || _DigitalFeedbackService)();
};
_DigitalFeedbackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _DigitalFeedbackService,
  factory: _DigitalFeedbackService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_digital-feedback_digital-feedback_module_ts.js.map