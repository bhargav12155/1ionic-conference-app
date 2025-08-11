"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_feedback_feedback_module_ts"],{

/***/ 3207:
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPageRoutingModule: () => (/* binding */ FeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page */ 457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _FeedbackPageRoutingModule;




const routes = [{
  path: "",
  component: _feedback_page__WEBPACK_IMPORTED_MODULE_0__.FeedbackPage
}];
class FeedbackPageRoutingModule {}
_FeedbackPageRoutingModule = FeedbackPageRoutingModule;
_FeedbackPageRoutingModule.ɵfac = function FeedbackPageRoutingModule_Factory(t) {
  return new (t || _FeedbackPageRoutingModule)();
};
_FeedbackPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _FeedbackPageRoutingModule
});
_FeedbackPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeedbackPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9846:
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPageModule: () => (/* binding */ FeedbackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-routing.module */ 3207);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page */ 457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _FeedbackPageModule;






class FeedbackPageModule {}
_FeedbackPageModule = FeedbackPageModule;
_FeedbackPageModule.ɵfac = function FeedbackPageModule_Factory(t) {
  return new (t || _FeedbackPageModule)();
};
_FeedbackPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _FeedbackPageModule
});
_FeedbackPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeedbackPageModule, {
    declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FeedbackPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule]
  });
})();

/***/ }),

/***/ 457:
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPage: () => (/* binding */ FeedbackPage)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _providers_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/feedback.service */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _FeedbackPage;






function FeedbackPage_ion_button_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_ion_button_103_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.clearAllFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Clear All Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FeedbackPage_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "ion-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.isDateRangeValid ? "primary" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.isDateRangeValid ? "funnel" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.filterInfo);
  }
}
function FeedbackPage_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75)(1, "ion-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.getStatusColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.getStatusIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.status);
  }
}
function FeedbackPage_ion_icon_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 76);
  }
}
function FeedbackPage_ion_card_subtitle_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card-subtitle", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Filters applied - showing ", (ctx_r1.filtered.length / ctx_r1.submissions.length * 100).toFixed(1), "% of total data ");
  }
}
function FeedbackPage_ion_spinner_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 79);
  }
}
function FeedbackPage_ion_icon_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 80);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function FeedbackPage_ion_icon_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 80);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function FeedbackPage_tr_163_ion_avatar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-avatar", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getInitials(r_r3.contact.name));
  }
}
function FeedbackPage_tr_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 81)(1, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 84)(6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FeedbackPage_tr_163_ion_avatar_7_Template, 3, 1, "ion-avatar", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 87)(10, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 90)(15, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 92)(18, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td", 94)(21, "ion-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatDate(r_r3.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatTime(r_r3.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r3.contact == null ? null : r_r3.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (r_r3.contact == null ? null : r_r3.contact.name) || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.overall);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.truncateText(r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.overall, 50), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((r_r3.contact == null ? null : r_r3.contact.email) || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.positives);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.truncateText(r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.positives, 30), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.negatives);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.truncateText(r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.negatives, 30), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.getReferralColor(r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.referralPotential));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r1.getReferralIcon(r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.referralPotential));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((r_r3.propertyFeedback == null ? null : r_r3.propertyFeedback.referralPotential) || "\u2014");
  }
}
function FeedbackPage_tr_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 97)(1, "td", 98)(2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No feedback records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Try adjusting your filters or refresh the data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function FeedbackPage_div_165_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", (ctx_r1.filtered.length / ctx_r1.submissions.length * 100).toFixed(1), "% filtered) ");
  }
}
function FeedbackPage_div_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101)(1, "div", 102)(2, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_165_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.exportCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Export CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_165_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.exportPrint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Print Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 107)(9, "ion-text", 108)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " records shown ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FeedbackPage_div_165_span_16_Template, 2, 1, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.filtered.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.submissions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.submissions.length !== ctx_r1.filtered.length);
  }
}
function FeedbackPage_div_166_ion_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_166_ion_button_10_Template_ion_button_click_0_listener() {
      const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePage(page_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", page_r7 === ctx_r1.currentPage ? "primary" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r7, " ");
  }
}
function FeedbackPage_div_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 111)(1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 113)(4, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_166_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 114)(6, "ion-icon", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_166_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FeedbackPage_div_166_ion_button_10_Template, 2, 2, "ion-button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_166_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_div_166_Template_ion_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changePage(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 117)(15, "ion-icon", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Showing ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, " to ", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.filtered.length), " of ", ctx_r1.filtered.length, " records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getPageNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
class FeedbackPage {
  constructor(feedbackService) {
    this.feedbackService = feedbackService;
    this.submissions = [];
    this.search = "";
    this.sortColumn = "timestamp";
    this.sortDirection = "desc";
    this.pageSize = 10;
    this.currentPage = 1;
    this.timeFilter = "all";
    this.referralFilter = "all";
    this.startDateTime = null;
    this.endDateTime = null;
    this.status = "";
    this.loading = false;
    this.Math = Math; // Make Math available in template
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
      if (showLoading) _this.status = "Loading feedback data...";else _this.status = "Syncing latest data...";
      try {
        const remote = yield _this.feedbackService.fetchFromServer();
        _this.feedbackService.mergeRemote(remote);
        _this.submissions = _this.feedbackService.getAll();
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
        if (filteredCount === cachedCount) {
          _this.status = `Failed to sync. Showing ${cachedCount} cached records`;
        } else {
          _this.status = `Failed to sync. Showing ${filteredCount} of ${cachedCount} cached records`;
        }
      } finally {
        _this.loading = false;
        // Update status to reflect current filter state
        setTimeout(() => _this.updateStatusForFilters(), 100);
      }
    })();
  }
  // Force refresh by clearing cache first
  forceRefresh() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.status = "Force refreshing from server...";
      try {
        _this2.submissions = yield _this2.feedbackService.forceRefresh();
        // Update status with clear distinction between total and filtered
        const totalRecords = _this2.submissions.length;
        const filteredCount = _this2.filtered.length;
        if (filteredCount === totalRecords) {
          _this2.status = `Force refreshed ${totalRecords} records from server`;
        } else {
          _this2.status = `Force refreshed ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
        }
      } catch (error) {
        _this2.status = "Failed to force refresh from server";
        console.error("Force refresh failed:", error);
      } finally {
        _this2.loading = false;
        setTimeout(() => _this2.updateStatusForFilters(), 100);
      }
    })();
  }
  // Analytics getters
  get positiveCount() {
    return this.filtered.filter(f => {
      var _f$propertyFeedback;
      return ((_f$propertyFeedback = f.propertyFeedback) === null || _f$propertyFeedback === void 0 ? void 0 : _f$propertyFeedback.referralPotential) === "Yes";
    }).length;
  }
  get todayCount() {
    const today = new Date().toDateString();
    return this.filtered.filter(f => new Date(f.timestamp).toDateString() === today).length;
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
    // Validate and fix date range if needed
    if (this.startDateTime && this.endDateTime) {
      const startMs = new Date(this.startDateTime).getTime();
      const endMs = new Date(this.endDateTime).getTime();
      // If end is before start, swap them
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
    return this.search.trim() !== "" || this.timeFilter !== "all" || this.referralFilter !== "all" || this.hasCustomRange();
  }
  // Clear all filters
  clearAllFilters() {
    this.search = "";
    this.timeFilter = "all";
    this.referralFilter = "all";
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
      const start = this.startDateTime ? new Date(this.startDateTime).toLocaleString() : "Start";
      const end = this.endDateTime ? new Date(this.endDateTime).toLocaleString() : "End";
      const valid = this.isDateRangeValid ? "" : " (Invalid Range - Auto-corrected)";
      return `Custom range: ${start} to ${end}${valid}`;
    }
    if (this.timeFilter !== "all") {
      return `Showing: ${this.timeFilter.replace("h", " hours").replace("d", " days")}`;
    }
    return "Showing: All records";
  }
  trackByFn(index, item) {
    return item.id || item.timestamp + item.sessionId;
  }
  getInitials(name) {
    if (!name) return "";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  }
  truncateText(text, length) {
    if (!text) return "—";
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
  getReferralColor(referral) {
    switch (referral) {
      case "Yes":
        return "success";
      case "No":
        return "danger";
      case "Maybe":
        return "warning";
      default:
        return "medium";
    }
  }
  getReferralIcon(referral) {
    switch (referral) {
      case "Yes":
        return "thumbs-up";
      case "No":
        return "thumbs-down";
      case "Maybe":
        return "help";
      default:
        return "remove";
    }
  }
  getStatusColor() {
    if (this.status.includes("Failed")) return "danger";
    if (this.status.includes("Successfully")) return "success";
    if (this.status.includes("Loading") || this.status.includes("Syncing")) return "primary";
    return "medium";
  }
  getStatusIcon() {
    if (this.status.includes("Failed")) return "alert-circle";
    if (this.status.includes("Successfully")) return "checkmark-circle";
    if (this.status.includes("Loading") || this.status.includes("Syncing")) return "sync";
    return "information-circle";
  }
  getPageNumbers() {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2;
    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);
    if (current <= delta) {
      end = Math.min(total, 2 * delta + 1);
    }
    if (current + delta >= total) {
      start = Math.max(1, total - 2 * delta);
    }
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  // Helper to know if custom range active
  hasCustomRange() {
    return !!(this.startDateTime || this.endDateTime);
  }
  clearRange() {
    this.startDateTime = null;
    this.endDateTime = null;
    this.currentPage = 1;
  }
  // Formatting helpers
  formatDate(ts) {
    return new Date(ts).toLocaleDateString();
  }
  formatTime(ts) {
    return new Date(ts).toLocaleTimeString();
  }
  // Filtering & sorting helpers
  get filtered() {
    let data = [...this.submissions];
    const now = Date.now();
    // Relative time filter only if no custom range
    if (!this.hasCustomRange() && this.timeFilter !== "all") {
      const cutoffMap = {
        "24h": 24 * 3600 * 1000,
        "7d": 7 * 24 * 3600 * 1000,
        "30d": 30 * 24 * 3600 * 1000
      };
      const cutoff = now - cutoffMap[this.timeFilter];
      data = data.filter(d => new Date(d.timestamp).getTime() >= cutoff);
    }
    // Custom date/time range filter overrides relative selection
    if (this.hasCustomRange()) {
      var _data$0$contact;
      let startMs = this.startDateTime ? new Date(this.startDateTime).getTime() : -Infinity;
      let endMs = this.endDateTime ? new Date(this.endDateTime).getTime() : Infinity;
      // Auto-correct invalid ranges (end before start)
      if (startMs > endMs && startMs !== -Infinity && endMs !== Infinity) {
        [startMs, endMs] = [endMs, startMs]; // Swap them
      }
      console.log("Date Range Filter:", {
        startDateTime: this.startDateTime,
        endDateTime: this.endDateTime,
        startMs: new Date(startMs).toLocaleString(),
        endMs: new Date(endMs).toLocaleString(),
        recordCount: data.length,
        sampleRecord: data[0] ? {
          timestamp: data[0].timestamp,
          timestampMs: new Date(data[0].timestamp).getTime(),
          name: (_data$0$contact = data[0].contact) === null || _data$0$contact === void 0 ? void 0 : _data$0$contact.name
        } : null
      });
      data = data.filter(d => {
        const t = new Date(d.timestamp).getTime();
        const matches = t >= startMs && t <= endMs;
        return matches;
      });
      console.log("After date filter:", data.length, "records");
    }
    if (this.referralFilter !== "all") {
      data = data.filter(d => {
        var _d$propertyFeedback;
        return ((_d$propertyFeedback = d.propertyFeedback) === null || _d$propertyFeedback === void 0 ? void 0 : _d$propertyFeedback.referralPotential) === this.referralFilter;
      });
    }
    if (this.search.trim()) {
      const q = this.search.toLowerCase();
      data = data.filter(d => {
        var _d$contact, _d$contact2, _d$propertyFeedback2;
        return ((_d$contact = d.contact) === null || _d$contact === void 0 || (_d$contact = _d$contact.name) === null || _d$contact === void 0 ? void 0 : _d$contact.toLowerCase().includes(q)) || ((_d$contact2 = d.contact) === null || _d$contact2 === void 0 || (_d$contact2 = _d$contact2.email) === null || _d$contact2 === void 0 ? void 0 : _d$contact2.toLowerCase().includes(q)) || ((_d$propertyFeedback2 = d.propertyFeedback) === null || _d$propertyFeedback2 === void 0 || (_d$propertyFeedback2 = _d$propertyFeedback2.overall) === null || _d$propertyFeedback2 === void 0 ? void 0 : _d$propertyFeedback2.toLowerCase().includes(q));
      });
    }
    if (this.sortColumn) {
      data.sort((a, b) => {
        let va = a[this.sortColumn];
        let vb = b[this.sortColumn];
        if (this.sortColumn === "timestamp") {
          va = new Date(a.timestamp).getTime();
          vb = new Date(b.timestamp).getTime();
        }
        if (va < vb) return this.sortDirection === "asc" ? -1 : 1;
        if (va > vb) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }
  get paginated() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize) || 1;
  }
  setSort(col) {
    if (this.sortColumn === col) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = col;
      this.sortDirection = "asc";
    }
  }
  exportCSV() {
    const rows = [["Date", "Time", "Name", "Feedback", "Email", "Phone", "Positives", "Negatives", "Price Opinion", "Referral", "Latitude", "Longitude"]];
    this.filtered.forEach(r => {
      var _r$contact, _r$propertyFeedback, _r$contact2, _r$contact3, _r$propertyFeedback2, _r$propertyFeedback3, _r$propertyFeedback4, _r$propertyFeedback5, _r$location, _r$location2;
      rows.push([this.formatDate(r.timestamp), this.formatTime(r.timestamp), ((_r$contact = r.contact) === null || _r$contact === void 0 ? void 0 : _r$contact.name) || "", ((_r$propertyFeedback = r.propertyFeedback) === null || _r$propertyFeedback === void 0 ? void 0 : _r$propertyFeedback.overall) || "", ((_r$contact2 = r.contact) === null || _r$contact2 === void 0 ? void 0 : _r$contact2.email) || "", ((_r$contact3 = r.contact) === null || _r$contact3 === void 0 ? void 0 : _r$contact3.phone) || "", ((_r$propertyFeedback2 = r.propertyFeedback) === null || _r$propertyFeedback2 === void 0 ? void 0 : _r$propertyFeedback2.positives) || "", ((_r$propertyFeedback3 = r.propertyFeedback) === null || _r$propertyFeedback3 === void 0 ? void 0 : _r$propertyFeedback3.negatives) || "", ((_r$propertyFeedback4 = r.propertyFeedback) === null || _r$propertyFeedback4 === void 0 ? void 0 : _r$propertyFeedback4.priceOpinion) || "", ((_r$propertyFeedback5 = r.propertyFeedback) === null || _r$propertyFeedback5 === void 0 ? void 0 : _r$propertyFeedback5.referralPotential) || "", ((_r$location = r.location) === null || _r$location === void 0 || (_r$location = _r$location.coordinates) === null || _r$location === void 0 || (_r$location = _r$location.latitude) === null || _r$location === void 0 ? void 0 : _r$location.toString()) || "", ((_r$location2 = r.location) === null || _r$location2 === void 0 || (_r$location2 = _r$location2.coordinates) === null || _r$location2 === void 0 || (_r$location2 = _r$location2.longitude) === null || _r$location2 === void 0 ? void 0 : _r$location2.toString()) || ""]);
    });
    const csv = rows.map(r => r.map(c => '"' + c.replace(/"/g, '""') + '"').join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "feedback.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  exportPrint() {
    var _document$getElementB;
    const printContents = ((_document$getElementB = document.getElementById("feedbackTable")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.outerHTML) || "";
    const w = window.open("", "", "height=700,width=900");
    if (!w) return;
    w.document.write("<html><head><title>Feedback</title>");
    w.document.write("<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>");
    w.document.write("</head><body>");
    w.document.write(printContents);
    w.document.write("</body></html>");
    w.document.close();
    w.print();
  }
  changePage(p) {
    if (p >= 1 && p <= this.totalPages) this.currentPage = p;
  }
}
_FeedbackPage = FeedbackPage;
_FeedbackPage.ɵfac = function FeedbackPage_Factory(t) {
  return new (t || _FeedbackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_feedback_service__WEBPACK_IMPORTED_MODULE_1__.FeedbackService));
};
_FeedbackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _FeedbackPage,
  selectors: [["app-feedback"]],
  decls: 167,
  vars: 34,
  consts: [[3, "translucent"], ["name", "analytics", 1, "title-icon"], ["slot", "end"], ["fill", "clear", 3, "click", "disabled"], ["name", "refresh-circle", "slot", "icon-only"], ["fill", "clear", "title", "Force refresh from server (clears cache)", 3, "click", "disabled"], ["name", "cloud-download", "slot", "icon-only"], [1, "feedback-content", 3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "summary-section"], [1, "summary-card", "glass-card"], [1, "summary-item"], ["name", "documents"], ["name", "thumbs-up"], ["name", "today"], ["name", "trending-up"], [1, "filters-card", "glass-card"], ["name", "options"], [1, "filters-grid"], [1, "search-container"], ["placeholder", "\uD83D\uDD0D Search feedback, names, emails...", "show-clear-button", "focus", 3, "ngModelChange", "ionInput", "ngModel"], [1, "filter-group"], ["lines", "none"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel", "disabled"], ["value", "all"], ["value", "24h"], ["value", "7d"], ["value", "30d"], [1, "date-range-group"], [1, "range-input-group"], ["position", "stacked"], ["type", "datetime-local", 1, "custom-datetime", 3, "ngModelChange", "change", "ngModel"], ["fill", "clear", "color", "medium", 3, "click", "disabled"], ["name", "close-circle-outline"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "Yes"], ["value", "No"], ["value", "Maybe"], [1, "action-buttons"], ["fill", "clear", "color", "danger", "style", "margin-right: 16px;", 3, "click", 4, "ngIf"], ["fill", "outline", 3, "click", "disabled"], ["name", "download-outline", "slot", "start"], ["name", "print-outline", "slot", "start"], ["class", "filter-info", 4, "ngIf"], ["class", "status-section", 4, "ngIf"], [1, "data-card", "glass-card"], ["name", "library"], ["name", "funnel", "style", "color: #667eea; margin-left: 8px; font-size: 0.8em;", 4, "ngIf"], [1, "record-count"], ["style", "color: #667eea; font-weight: 500; margin-top: 8px;", 4, "ngIf"], [1, "table-container"], ["name", "circles", 4, "ngIf"], [1, "table-responsive"], ["id", "feedbackTable", 1, "professional-table"], [1, "sortable", 3, "click"], [1, "header-content"], ["name", "calendar"], ["class", "sort-indicator", 3, "name", 4, "ngIf"], ["name", "time"], ["name", "person"], ["name", "chatbubble-ellipses"], ["name", "at"], ["name", "heart"], ["name", "sad"], ["name", "star"], ["class", "data-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "empty-state", 4, "ngIf"], ["class", "action-bar", 4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], ["fill", "clear", "color", "danger", 2, "margin-right", "16px", 3, "click"], ["name", "close-circle", "slot", "start"], [1, "filter-info"], [3, "color"], [3, "name"], [1, "status-section"], ["name", "funnel", 2, "color", "#667eea", "margin-left", "8px", "font-size", "0.8em"], [2, "color", "#667eea", "font-weight", "500", "margin-top", "8px"], ["name", "funnel", 2, "margin-right", "8px"], ["name", "circles"], [1, "sort-indicator", 3, "name"], [1, "data-row"], [1, "date-cell"], [1, "time-cell"], [1, "name-cell"], [1, "cell-content"], ["class", "mini-avatar", 4, "ngIf"], [1, "feedback-cell"], [1, "feedback-text", 3, "title"], [1, "email-cell"], [1, "positives-cell"], [1, "positives-text", 3, "title"], [1, "negatives-cell"], [1, "negatives-text", 3, "title"], [1, "referral-cell"], [1, "mini-avatar"], [1, "avatar-text"], [1, "empty-state"], ["colspan", "8"], [1, "empty-content"], ["name", "document-outline", "size", "large"], [1, "action-bar"], [1, "export-section"], ["fill", "solid", "color", "success", 1, "export-btn", 3, "click"], ["name", "download", "slot", "start"], ["fill", "outline", "color", "primary", 1, "print-btn", 3, "click"], ["name", "print", "slot", "start"], [1, "summary-text"], ["color", "medium"], ["style", "color: #667eea; margin-left: 8px;", 4, "ngIf"], [2, "color", "#667eea", "margin-left", "8px"], [1, "pagination-container"], [1, "pagination-info"], [1, "pagination-controls"], ["name", "chevron-back-outline"], [1, "page-numbers"], ["fill", "clear", 3, "color", "click", 4, "ngFor", "ngForOf"], ["name", "chevron-forward-outline"], ["fill", "clear", 3, "click", "color"]],
  template: function FeedbackPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Feedback Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2)(6, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_ion_button_click_6_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_ion_button_click_8_listener() {
        return ctx.forceRefresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content", 7)(11, "ion-header", 8)(12, "ion-toolbar")(13, "ion-title", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Feedback Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "ion-card", 11)(18, "ion-card-content")(19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Total Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-card", 11)(27, "ion-card-content")(28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div")(31, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Positive Referrals");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-card", 11)(36, "ion-card-content")(37, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div")(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Today's Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-card", 11)(45, "ion-card-content")(46, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div")(49, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Total Referrals");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ion-card", 17)(54, "ion-card-header")(55, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Advanced Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "ion-card-content")(59, "div", 19)(60, "div", 20)(61, "ion-searchbar", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackPage_Template_ion_searchbar_ngModelChange_61_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInput", function FeedbackPage_Template_ion_searchbar_ionInput_61_listener($event) {
        return ctx.onSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 22)(63, "ion-item", 23)(64, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Time Period");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ion-select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackPage_Template_ion_select_ngModelChange_66_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.timeFilter, $event) || (ctx.timeFilter = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function FeedbackPage_Template_ion_select_ionChange_66_listener() {
        ctx.currentPage = 1;
        return ctx.updateStatusForFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ion-select-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "All Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "ion-select-option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Last 24h");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "ion-select-option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Last 7 days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ion-select-option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Last 30 days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 29)(76, "div", 30)(77, "ion-item", 23)(78, "ion-label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "From Date & Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackPage_Template_input_ngModelChange_80_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.startDateTime, $event) || (ctx.startDateTime = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FeedbackPage_Template_input_change_80_listener() {
        return ctx.onDateRangeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 30)(82, "ion-item", 23)(83, "ion-label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "To Date & Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackPage_Template_input_ngModelChange_85_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.endDateTime, $event) || (ctx.endDateTime = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FeedbackPage_Template_input_change_85_listener() {
        return ctx.onDateRangeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "ion-button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_ion_button_click_86_listener() {
        return ctx.clearRange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "ion-icon", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 22)(90, "ion-item", 23)(91, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Referral Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "ion-select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackPage_Template_ion_select_ngModelChange_93_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.referralFilter, $event) || (ctx.referralFilter = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function FeedbackPage_Template_ion_select_ionChange_93_listener() {
        ctx.currentPage = 1;
        return ctx.updateStatusForFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "ion-select-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "All Referrals");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "ion-select-option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "ion-select-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "ion-select-option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Maybe");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, FeedbackPage_ion_button_103_Template, 3, 0, "ion-button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "ion-button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_ion_button_click_104_listener() {
        return ctx.exportCSV();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "ion-icon", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Export CSV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "ion-button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_ion_button_click_107_listener() {
        return ctx.exportPrint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "ion-icon", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " Print/PDF ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, FeedbackPage_div_110_Template, 5, 3, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, FeedbackPage_div_111_Template, 5, 3, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "ion-card", 46)(113, "ion-card-header")(114, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "ion-icon", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Feedback Database ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](117, FeedbackPage_ion_icon_117_Template, 1, 0, "ion-icon", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, FeedbackPage_ion_card_subtitle_120_Template, 3, 1, "ion-card-subtitle", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "ion-card-content")(122, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, FeedbackPage_ion_spinner_123_Template, 1, 0, "ion-spinner", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 53)(125, "table", 54)(126, "thead")(127, "tr")(128, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_th_click_128_listener() {
        return ctx.setSort("timestamp");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "ion-icon", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, FeedbackPage_ion_icon_132_Template, 1, 1, "ion-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "th")(134, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "ion-icon", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " Time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FeedbackPage_Template_th_click_137_listener() {
        return ctx.setSort("contact.name");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "ion-icon", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](141, FeedbackPage_ion_icon_141_Template, 1, 1, "ion-icon", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "th")(143, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "ion-icon", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, " Feedback ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "th")(147, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "ion-icon", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "th")(151, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "ion-icon", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " Positives ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "th")(155, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "ion-icon", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " Improvements ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "th")(159, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "ion-icon", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " Referral Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](163, FeedbackPage_tr_163_Template, 25, 14, "tr", 66)(164, FeedbackPage_tr_164_Template, 8, 0, "tr", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, FeedbackPage_div_165_Template, 17, 3, "div", 68)(166, FeedbackPage_div_166_Template, 16, 8, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.filtered.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.positiveCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.todayCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.positiveCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.timeFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.startDateTime || ctx.endDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.startDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.endDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.startDateTime && !ctx.endDateTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.referralFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasActiveFilters());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.filtered.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.filtered.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasCustomRange() || ctx.timeFilter !== "all");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasActiveFilters());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.filtered.length, " of ", ctx.submissions.length, " records");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submissions.length !== ctx.filtered.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortColumn === "timestamp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortColumn === "contact.name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paginated)("ngForTrackBy", ctx.trackByFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.paginated.length === 0 && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filtered.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
  styles: [".feedback-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --ion-background-color: transparent;\n}\n\n.title-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.4em;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.glass-card[_ngcontent-%COMP%], .data-card[_ngcontent-%COMP%], .filters-card[_ngcontent-%COMP%], .summary-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  transition: all 0.3s ease;\n}\n.glass-card[_ngcontent-%COMP%]:hover, .data-card[_ngcontent-%COMP%]:hover, .filters-card[_ngcontent-%COMP%]:hover, .summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 45px 0 rgba(31, 38, 135, 0.5);\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.3em;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --background: rgba(255, 255, 255, 0.1);\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover {\n  --background: rgba(255, 255, 255, 0.2);\n}\n\n.summary-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 24px;\n  margin-bottom: 0;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  position: relative;\n}\n.summary-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #667eea, #764ba2);\n}\n.summary-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.summary-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n  padding: 16px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.summary-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.summary-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 2.5em;\n  font-weight: 700;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 1em;\n  font-weight: 500;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  margin: 0 24px 24px;\n  overflow: hidden;\n}\n.filters-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  padding: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.filters-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #1e293b;\n  font-weight: 600;\n  font-size: 1.2em;\n}\n.filters-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #667eea;\n}\n.filters-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.search-container[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --background: white;\n  --border-radius: 15px;\n  --box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  --placeholder-color: #9ca3af;\n  --color: #374151;\n}\n.search-container[_ngcontent-%COMP%]   ion-searchbar.searchbar-has-focus[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 25px rgba(102, 126, 234, 0.3);\n}\n\n.filter-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: white;\n  --border-radius: 15px;\n  --box-shadow: 0 2px 10px rgba(0,0,0,0.08);\n  margin-bottom: 12px;\n  border: 1px solid #e5e7eb;\n}\n.filter-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover {\n  --box-shadow: 0 4px 20px rgba(0,0,0,0.12);\n  transform: translateY(-1px);\n}\n.filter-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.filter-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --placeholder-color: #9ca3af;\n}\n\n.date-range-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 16px;\n  align-items: end;\n}\n.date-range-group[_ngcontent-%COMP%]   .range-input-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: white;\n  --border-radius: 15px;\n  --box-shadow: 0 2px 10px rgba(0,0,0,0.08);\n  border: 1px solid #e5e7eb;\n}\n.date-range-group[_ngcontent-%COMP%]   .range-input-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.date-range-group[_ngcontent-%COMP%]   .custom-datetime[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 15px;\n  font-size: 14px;\n  background: white;\n  color: #374151;\n  transition: all 0.3s ease;\n}\n.date-range-group[_ngcontent-%COMP%]   .custom-datetime[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  transform: translateY(-1px);\n}\n.date-range-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --background: #ef4444;\n  --color: white;\n  height: 44px;\n}\n.date-range-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  --background: #dc2626;\n  transform: translateY(-1px);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 15px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 48px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child {\n  --background: linear-gradient(135deg, #10b981, #059669);\n  --color: white;\n  --border-color: transparent;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child:hover:not([disabled]) {\n  transform: translateY(-2px);\n  --box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child {\n  --background: linear-gradient(135deg, #3b82f6, #2563eb);\n  --color: white;\n  --border-color: transparent;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child:hover:not([disabled]) {\n  transform: translateY(-2px);\n  --box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.filter-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.filter-info[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #667eea, #764ba2);\n  --color: white;\n  font-weight: 500;\n  padding: 8px 16px;\n  border-radius: 25px;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n}\n.filter-info[_ngcontent-%COMP%]   ion-chip[color=warning][_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #f59e0b, #d97706);\n  animation: _ngcontent-%COMP%_gentle-shake 0.5s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_gentle-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(2px);\n  }\n}\n.status-section[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n  text-align: center;\n}\n.status-section[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 25px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 0 24px 24px;\n  overflow: hidden;\n}\n.data-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  padding: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.data-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #1e293b;\n  font-weight: 600;\n  font-size: 1.2em;\n}\n.data-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #667eea;\n}\n.data-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #64748b;\n  font-weight: 400;\n  margin-left: auto;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 4px 12px;\n  border-radius: 15px;\n}\n.data-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 300px;\n}\n.table-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  --color: #667eea;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 0;\n  border: none;\n}\n.table-responsive.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.professional-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.professional-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n}\n.professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 20px 16px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 14px;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  border-bottom: 3px solid rgba(255, 255, 255, 0.2);\n}\n.professional-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.professional-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: translateY(-1px);\n}\n.professional-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  opacity: 0.9;\n}\n.professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 1em;\n  animation: _ngcontent-%COMP%_bounce 0.3s ease;\n}\n.professional-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.professional-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8fafc;\n}\n.professional-table[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));\n  transform: translateX(2px);\n  box-shadow: 4px 0 0 #667eea;\n}\n.professional-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  vertical-align: top;\n  line-height: 1.5;\n}\n.professional-table[_ngcontent-%COMP%]   td.date-cell[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.time-cell[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", \"Monaco\", \"Inconsolata\", \"Roboto Mono\", monospace;\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);\n  border-radius: 8px;\n  margin: 2px;\n  text-align: center;\n}\n.professional-table[_ngcontent-%COMP%]   td.name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.professional-table[_ngcontent-%COMP%]   td.name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.professional-table[_ngcontent-%COMP%]   td.name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]   .avatar-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.professional-table[_ngcontent-%COMP%]   td.name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n}\n.professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n.professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #374151;\n  font-size: 13px;\n}\n.professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.feedback-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.positives-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .feedback-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .positives-text[_ngcontent-%COMP%]:hover, .professional-table[_ngcontent-%COMP%]   td.negatives-cell[_ngcontent-%COMP%]   .negatives-text[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n  cursor: help;\n}\n.professional-table[_ngcontent-%COMP%]   td.email-cell[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 500;\n}\n.professional-table[_ngcontent-%COMP%]   td.email-cell[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 32px;\n  border-radius: 16px;\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[color=success][_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #10b981, #059669);\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[color=danger][_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #ef4444, #dc2626);\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[color=warning][_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #f59e0b, #d97706);\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.professional-table[_ngcontent-%COMP%]   td.referral-cell[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4em;\n  opacity: 0.3;\n  color: #667eea;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3em;\n  color: #374151;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1em;\n  color: #6b7280;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  border-top: 2px solid #e2e8f0;\n  border-bottom: 2px solid #e2e8f0;\n  margin: 0 -24px;\n}\n.action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  --border-radius: 15px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 44px;\n  font-weight: 600;\n  --background: linear-gradient(135deg, #10b981, #059669);\n  --box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);\n}\n.action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  --box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);\n}\n.action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%] {\n  --border-radius: 15px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  height: 44px;\n  font-weight: 600;\n  --border-color: #667eea;\n  --color: #667eea;\n}\n.action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  transform: translateY(-2px);\n  --background: rgba(102, 126, 234, 0.1);\n  --box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);\n}\n.action-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.action-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  margin-top: 0;\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  border-top: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  font-weight: 500;\n}\n\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  height: 40px;\n  transition: all 0.3s ease;\n}\n.pagination-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:not([disabled]):hover {\n  transform: translateY(-1px);\n  --box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin: 0 12px;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  min-width: 40px;\n  height: 40px;\n  font-weight: 600;\n}\n.pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   ion-button[color=primary][_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #667eea, #764ba2);\n  --color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n\n@media (max-width: 768px) {\n  .summary-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 16px;\n    gap: 16px;\n  }\n  .summary-item[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .summary-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    padding: 12px;\n  }\n  .summary-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .filters-card[_ngcontent-%COMP%], .data-card[_ngcontent-%COMP%] {\n    margin: 0 16px 16px;\n  }\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .date-range-group[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .date-range-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    justify-self: center;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 120px;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 20px;\n  }\n  .action-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n    padding: 20px;\n  }\n  .action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 140px;\n  }\n  .professional-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n  }\n  .professional-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .professional-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:not(.sort-indicator) {\n    display: none;\n  }\n  .professional-table[_ngcontent-%COMP%]   .name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .professional-table[_ngcontent-%COMP%]   .name-cell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 480px) {\n  .filters-card[_ngcontent-%COMP%], .data-card[_ngcontent-%COMP%] {\n    margin: 0 8px 16px;\n  }\n  .summary-section[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .summary-item[_ngcontent-%COMP%] {\n    gap: 12px;\n    text-align: center;\n    flex-direction: column;\n  }\n  .summary-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n  .summary-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 2em;\n    padding: 10px;\n  }\n  .professional-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    font-size: 11px;\n  }\n  .professional-table[_ngcontent-%COMP%]   .date-cell[_ngcontent-%COMP%], .professional-table[_ngcontent-%COMP%]   .time-cell[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .action-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n    padding: 16px;\n    margin: 0 -8px;\n  }\n  .action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .action-bar[_ngcontent-%COMP%]   .export-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsK0RBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFXLFVBQUE7RUFDWDtFQUFBO0lBQU0sWUFBQTtFQUdOO0FBQ0Y7QUFBQTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBRTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7QUFFSjs7QUFJRTtFQUNFLCtEQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFJSTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUFGTjtBQUlNO0VBQ0Usc0NBQUE7QUFGUjs7QUFTQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUVFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVEY7QUFXRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQVRKO0FBWUU7RUFDRSxPQUFBO0FBVko7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBWEo7QUFj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O0VBMkhFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBekhKO0VBNEhFO0lBQ0UsZUFBQTtFQTFISjtFQThIQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUE1SEY7RUE4SEU7SUFDRSxzQkFBQTtJQUNBLFdBQUE7RUE1SEo7RUE4SEk7SUFDRSxXQUFBO0lBQ0EsU0FBQTtFQTVITjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvZmVzc2lvbmFsIEZlZWRiYWNrIFBhZ2UgU3R5bGVzXG4uZmVlZGJhY2stY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aXRsZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNzsgfVxufVxuXG4vLyBHbGFzcyBtb3JwaGlzbSBlZmZlY3Rcbi5nbGFzcy1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQ1cHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjUpO1xuICB9XG59XG5cbi8vIEhlYWRlciBlbmhhbmNlbWVudHNcbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTdW1tYXJ5IENhcmRzIFNlY3Rpb24gd2l0aCBlbmhhbmNlZCBkZXNpZ25cbi5zdW1tYXJ5LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgQGV4dGVuZCAuZ2xhc3MtY2FyZDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICB9XG4gIFxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG59XG5cbi5zdW1tYXJ5LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIFxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuICB9XG4gIFxuICBkaXYge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgfVxuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLy8gRW5oYW5jZWQgRmlsdGVycyBDYXJkXG4uZmlsdGVycy1jYXJkIHtcbiAgQGV4dGVuZCAuZ2xhc3MtY2FyZDtcbiAgbWFyZ2luOiAwIDI0cHggMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYywgI2UyZThmMCk7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcbiAgICBcbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG59XG5cbi5maWx0ZXJzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzljYTNhZjtcbiAgICAtLWNvbG9yOiAjMzc0MTUxO1xuICAgIFxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyB7XG4gICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4uZmlsdGVyLWdyb3VwIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC0tYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIC0tYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cbiAgICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgIH1cbiAgICBcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5Y2EzYWY7XG4gICAgfVxuICB9XG59XG5cbi5kYXRlLXJhbmdlLWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIGF1dG87XG4gIGdhcDogMTZweDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgXG4gIC5yYW5nZS1pbnB1dC1ncm91cCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIC0tYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY3VzdG9tLWRhdGV0aW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzM3NDE1MTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzY2N2VlYTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWY0NDQ0O1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNkYzI2MjY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICB9XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBcbiAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYjgyZjYsICMyNTYzZWIpO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBcbiAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uZmlsdGVyLWluZm8ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG4gICAgXG4gICAgJltjb2xvcj1cIndhcm5pbmdcIl0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiLCAjZDk3NzA2KTtcbiAgICAgIGFuaW1hdGlvbjogZ2VudGxlLXNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2VudGxlLXNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpOyB9XG59XG5cbi8vIFN0YXR1cyBTZWN0aW9uIGVuaGFuY2VtZW50XG4uc3RhdHVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDI0cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgaW9uLWNoaXAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbn1cblxuLy8gRW5oYW5jZWQgRGF0YSBDYXJkXG4uZGF0YS1jYXJkIHtcbiAgQGV4dGVuZCAuZ2xhc3MtY2FyZDtcbiAgbWFyZ2luOiAwIDI0cHggMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYywgI2UyZThmMCk7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcbiAgICBcbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5yZWNvcmQtY291bnQge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi8vIEVuaGFuY2VkIFRhYmxlIFN0eWxlc1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAtLWNvbG9yOiAjNjY3ZWVhO1xuICB9XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgJi5sb2FkaW5nIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLnByb2Zlc3Npb25hbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgXG4gIHRoZWFkIHRyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgdGgge1xuICAgIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBcbiAgICAmLnNvcnRhYmxlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNvcnQtaW5kaWNhdG9yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBhbmltYXRpb246IGJvdW5jZSAwLjNzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGF0YS1yb3cge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDgpLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4wOCkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgICBib3gtc2hhZG93OiA0cHggMCAwICM2NjdlZWE7XG4gICAgfVxuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIFxuICAgICYuZGF0ZS1jZWxsLCAmLnRpbWUtY2VsbCB7XG4gICAgICBmb250LWZhbWlseTogJ1NGIE1vbm8nLCAnTW9uYWNvJywgJ0luY29uc29sYXRhJywgJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YxZjVmOSwgI2UyZThmMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJi5uYW1lLWNlbGwgLmNlbGwtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIFxuICAgICAgLm1pbmktYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgXG4gICAgICAgIC5hdmF0YXItdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLmZlZWRiYWNrLWNlbGwsICYucG9zaXRpdmVzLWNlbGwsICYubmVnYXRpdmVzLWNlbGwge1xuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIFxuICAgICAgLmZlZWRiYWNrLXRleHQsIC5wb3NpdGl2ZXMtdGV4dCwgLm5lZ2F0aXZlcy10ZXh0IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICAgIGN1cnNvcjogaGVscDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLmVtYWlsLWNlbGwge1xuICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM1YTY3ZDg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYucmVmZXJyYWwtY2VsbCB7XG4gICAgICBpb24tY2hpcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICBcbiAgICAgICAgJltjb2xvcj1cInN1Y2Nlc3NcIl0ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICZbY29sb3I9XCJkYW5nZXJcIl0ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2RjMjYyNik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICZbY29sb3I9XCJ3YXJuaW5nXCJdIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbn1cblxuLy8gRW5oYW5jZWQgRW1wdHkgU3RhdGVcbi5lbXB0eS1zdGF0ZSB7XG4gIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNjBweCAyMHB4O1xuICAgIFxuICAgIC5lbXB0eS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBjb2xvcjogIzY2N2VlYTtcbiAgICAgICAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbn1cblxuLy8gUHJvZmVzc2lvbmFsIEFjdGlvbiBCYXJcbi5hY3Rpb24tYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjLCAjZTJlOGYwKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJlOGYwO1xuICBtYXJnaW46IDAgLTI0cHg7XG4gIFxuICAuZXhwb3J0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIFxuICAgIC5leHBvcnQtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcbiAgICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgICAgIFxuICAgICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIC0tYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDE2LCAxODUsIDEyOSwgMC40KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByaW50LWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICAgICAgLS1jb2xvcjogIzY2N2VlYTtcbiAgICAgIFxuICAgICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnN1bW1hcnktdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgXG4gICAgaW9uLXRleHQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW5oYW5jZWQgUGFnaW5hdGlvblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjLCAjZTJlOGYwKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbi1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhZ2luYXRpb24tY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBcbiAgICAmOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICAgIH1cbiAgfVxuICBcbiAgLnBhZ2UtbnVtYmVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBtYXJnaW46IDAgMTJweDtcbiAgICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIFxuICAgICAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduIEVuaGFuY2VtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdW1tYXJ5LXNlY3Rpb24ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG4gIFxuICAuc3VtbWFyeS1pdGVtIHtcbiAgICBnYXA6IDE2cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmZpbHRlcnMtY2FyZCwgLmRhdGEtY2FyZCB7XG4gICAgbWFyZ2luOiAwIDE2cHggMTZweDtcbiAgfVxuICBcbiAgLmZpbHRlcnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5kYXRlLXJhbmdlLWdyb3VwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmFjdGlvbi1iYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIFxuICAgIC5leHBvcnQtc2VjdGlvbiB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucHJvZmVzc2lvbmFsLXRhYmxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG4gICAgdGgsIHRkIHtcbiAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgXG4gICAgICBpb24taWNvbjpub3QoLnNvcnQtaW5kaWNhdG9yKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5uYW1lLWNlbGwgLmNlbGwtY29udGVudCB7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIFxuICAgICAgLm1pbmktYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5maWx0ZXJzLWNhcmQsIC5kYXRhLWNhcmQge1xuICAgIG1hcmdpbjogMCA4cHggMTZweDtcbiAgfVxuICBcbiAgLnN1bW1hcnktc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgXG4gIC5zdW1tYXJ5LWl0ZW0ge1xuICAgIGdhcDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIH1cbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZmVzc2lvbmFsLXRhYmxlIHtcbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogOHB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgXG4gICAgLmRhdGUtY2VsbCwgLnRpbWUtY2VsbCB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuYWN0aW9uLWJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luOiAwIC04cHg7XG4gICAgXG4gICAgLmV4cG9ydC1zZWN0aW9uIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5353:
/*!***********************************************!*\
  !*** ./src/app/providers/feedback.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackService: () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);

var _FeedbackService;

class FeedbackService {
  constructor() {
    this.localKey = "app_feedback_submissions_v1";
    this.submissions = [];
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.localKey);
      if (raw) this.submissions = JSON.parse(raw);
    } catch (e) {
      console.warn("Failed to load feedback from storage", e);
    }
  }
  persist() {
    try {
      localStorage.setItem(this.localKey, JSON.stringify(this.submissions));
    } catch (e) {
      console.warn("Failed to persist feedback to storage", e);
    }
  }
  getAll() {
    return [...this.submissions];
  }
  // Clear local cache and force fresh fetch
  clearCache() {
    console.log("Clearing feedback cache");
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
    const isLocal = window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    return isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
  }
  // Fetch list from backend (read-only). No POST here.
  fetchFromServer() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const API_BASE = _this2.getApiBase();
      console.log("Fetching from server:", `${API_BASE}/api/feedback`);
      try {
        const res = yield fetch(`${API_BASE}/api/feedback`, {
          headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          }
        });
        if (!res.ok) throw new Error(`GET /api/feedback ${res.status}`);
        const data = yield res.json();
        console.log("Server response:", {
          count: data === null || data === void 0 ? void 0 : data.length,
          sample: data === null || data === void 0 ? void 0 : data[0]
        });
        if (!Array.isArray(data)) return [];
        // Normalize minimal fields (defensive)
        return data.map(d => ({
          id: d.id || d._id,
          timestamp: d.timestamp || d.createdAt || new Date().toISOString(),
          sessionId: d.sessionId || "n/a",
          propertyFeedback: d.propertyFeedback || {
            overall: d.overall || "",
            positives: d.positives || "",
            negatives: d.negatives || "",
            priceOpinion: d.priceOpinion || "",
            referralPotential: d.referralPotential || d.referral || ""
          },
          contact: d.contact || {
            name: d.name || "",
            email: d.email || "",
            phone: d.phone || ""
          },
          location: d.location,
          device: d.device,
          network: d.network
        }));
      } catch (e) {
        console.error("Failed to fetch feedback list:", e);
        throw e; // Re-throw to let caller handle the error
      }
    })();
  }
  mergeRemote(list) {
    console.log("Merging remote data:", {
      remoteCount: list.length,
      localCount: this.submissions.length
    });
    // Instead of merging, completely replace with server data
    // This ensures deletions and updates from server are reflected
    if (list.length >= 0) {
      // Even if empty array, trust the server
      this.submissions = [...list];
      this.persist();
      console.log("Replaced local cache with server data:", this.submissions.length);
    }
  }
  // Retain submit method ONLY for explicit future use; not called automatically anywhere.
  submit(feedback) {
    var _this3 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const API_BASE = _this3.getApiBase();
      const response = yield fetch(`${API_BASE}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
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
_FeedbackService = FeedbackService;
_FeedbackService.ɵfac = function FeedbackService_Factory(t) {
  return new (t || _FeedbackService)();
};
_FeedbackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _FeedbackService,
  factory: _FeedbackService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feedback_feedback_module_ts.js.map