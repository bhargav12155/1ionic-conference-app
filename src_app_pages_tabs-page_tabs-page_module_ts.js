"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-page_tabs-page_module_ts"],{

/***/ 9697:
/*!*******************************************************************!*\
  !*** ./src/app/pages/activity-log/activity-log-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogPageRoutingModule: () => (/* binding */ ActivityLogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _activity_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-log.page */ 291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _ActivityLogPageRoutingModule;




const routes = [{
  path: "",
  component: _activity_log_page__WEBPACK_IMPORTED_MODULE_0__.ActivityLogPage
}];
class ActivityLogPageRoutingModule {}
_ActivityLogPageRoutingModule = ActivityLogPageRoutingModule;
_ActivityLogPageRoutingModule.ɵfac = function ActivityLogPageRoutingModule_Factory(t) {
  return new (t || _ActivityLogPageRoutingModule)();
};
_ActivityLogPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ActivityLogPageRoutingModule
});
_ActivityLogPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActivityLogPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 472:
/*!***********************************************************!*\
  !*** ./src/app/pages/activity-log/activity-log.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogModule: () => (/* binding */ ActivityLogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _activity_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-log.page */ 291);
/* harmony import */ var _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-log-routing.module */ 9697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _ActivityLogModule;






class ActivityLogModule {}
_ActivityLogModule = ActivityLogModule;
_ActivityLogModule.ɵfac = function ActivityLogModule_Factory(t) {
  return new (t || _ActivityLogModule)();
};
_ActivityLogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ActivityLogModule
});
_ActivityLogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_1__.ActivityLogPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ActivityLogModule, {
    declarations: [_activity_log_page__WEBPACK_IMPORTED_MODULE_0__.ActivityLogPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_1__.ActivityLogPageRoutingModule]
  });
})();

/***/ }),

/***/ 291:
/*!*********************************************************!*\
  !*** ./src/app/pages/activity-log/activity-log.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogPage: () => (/* binding */ ActivityLogPage)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _providers_geofence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/geofence.service */ 1480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _ActivityLogPage;






function ActivityLogPage_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ActivityLogPage_div_38_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_ion_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 26);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.sortDirection === "asc" ? "chevron-up" : "chevron-down");
  }
}
function ActivityLogPage_div_38_tr_30_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.getNumberField(event_r4.location, "latitude", 4), ", ", ctx_r2.getNumberField(event_r4.location, "longitude", 4), "");
  }
}
function ActivityLogPage_div_38_tr_30_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "_");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ActivityLogPage_div_38_tr_30_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDuration(event_r4.duration), " ");
  }
}
function ActivityLogPage_div_38_tr_30_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "_");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ActivityLogPage_div_38_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "ion-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ActivityLogPage_div_38_tr_30_ng_container_12_Template, 3, 2, "ng-container", 32)(13, ActivityLogPage_div_38_tr_30_ng_template_13_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "code", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td")(22, "code", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td")(25, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ActivityLogPage_div_38_tr_30_span_28_Template, 2, 1, "span", 38)(29, ActivityLogPage_div_38_tr_30_span_29_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const locationFallback_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.currentPage - 1) * ctx_r2.pageSize + i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r2.getEventColor(event_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r2.getEventIcon(event_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 13, ctx_r2.getDisplayField(event_r4, "type")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getDisplayField(event_r4, "timestamp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", event_r4.location && event_r4.location.latitude !== null && event_r4.location.longitude !== null)("ngIfElse", locationFallback_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getDisplayField(event_r4, "userId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getDisplayField(event_r4, "device"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getDisplayField(event_r4, "ipAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getDisplayField(event_r4, "accuracy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", event_r4.duration && event_r4.type === "exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !event_r4.duration || event_r4.type !== "exit");
  }
}
function ActivityLogPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("type"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ActivityLogPage_div_38_ion_icon_8_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("timestamp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ActivityLogPage_div_38_ion_icon_11_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("location"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ActivityLogPage_div_38_ion_icon_14_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("userId"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " User ID/Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ActivityLogPage_div_38_ion_icon_17_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("device"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ActivityLogPage_div_38_ion_icon_20_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("ipAddress"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " IP Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ActivityLogPage_div_38_ion_icon_23_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_38_Template_th_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.setSort("accuracy"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Accuracy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ActivityLogPage_div_38_ion_icon_26_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ActivityLogPage_div_38_tr_30_Template, 30, 15, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "userId");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "device");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "ipAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sortColumn === "accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.paginatedEvents);
  }
}
function ActivityLogPage_div_39_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_39_ion_button_11_Template_ion_button_click_0_listener() {
      const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.jumpToPage(page_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fill", ctx_r2.currentPage === page_r9 ? "solid" : "outline")("color", ctx_r2.currentPage === page_r9 ? "primary" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r9, " ");
  }
}
function ActivityLogPage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 44)(5, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_39_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.jumpToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_39_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ActivityLogPage_div_39_ion_button_11_Template, 2, 3, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_39_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_div_39_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.jumpToPage(ctx_r2.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 52)(18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Go to page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInput", function ActivityLogPage_div_39_Template_ion_input_ionInput_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onPageInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Showing ", (ctx_r2.currentPage - 1) * ctx_r2.pageSize + 1, " - ", ctx_r2.getMin(ctx_r2.currentPage * ctx_r2.pageSize, ctx_r2.filteredEvents.length), " of ", ctx_r2.filteredEvents.length, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.pageNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.currentPage)("max", ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("of ", ctx_r2.totalPages, "");
  }
}
function ActivityLogPage_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No Events Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No geofence events match your current filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_ng_template_40_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.refreshEvents());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Refresh Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ActivityLogPage {
  // Helper to safely format numbers for display (prevents .toFixed errors)
  getNumberField(event, field, digits = 2) {
    const value = event[field];
    return typeof value === "number" ? value.toFixed(digits) : "_";
  }
  fetchExternalEvents() {
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Determine API base URL based on environment
        const isLocal = window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        const API_BASE = isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
        console.log("Fetching external events from:", `${API_BASE}/api/location`);
        const response = yield fetch(`${API_BASE}/api/location`);
        if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
        const data = yield response.json();
        // Sanitize and adapt API response to GeofenceEvent[]
        if (!Array.isArray(data)) return [];
        return data.map(event => {
          var _ref, _ref2, _event$timestamp, _ref3, _ref4, _event$locationName, _event$userId, _ref5, _event$phoneNumber, _event$email, _event$type, _event$entryTimestamp, _event$exitTimestamp, _event$userDeviceInfo, _event$accuracy;
          // Always return location as an object
          let location = {
            latitude: null,
            longitude: null
          };
          if (event.lat !== undefined && event.lng !== undefined) {
            location = {
              latitude: event.lat,
              longitude: event.lng
            };
          }
          // Extract ip address from network object (not array)
          let ipAddress = "_";
          if (event.network && event.network.ip) {
            ipAddress = event.network.ip;
          }
          // Extract device platform from device object (not array)
          let deviceType = "_";
          if (event.device && event.device.platform) {
            deviceType = event.device.platform;
          }
          return {
            timestamp: (_ref = (_ref2 = (_event$timestamp = event.timestamp) !== null && _event$timestamp !== void 0 ? _event$timestamp : event.receivedAt) !== null && _ref2 !== void 0 ? _ref2 : event.serverReceivedAt) !== null && _ref !== void 0 ? _ref : null,
            locationName: (_ref3 = (_ref4 = (_event$locationName = event.locationName) !== null && _event$locationName !== void 0 ? _event$locationName : event.location) !== null && _ref4 !== void 0 ? _ref4 : event.name) !== null && _ref3 !== void 0 ? _ref3 : "_",
            userId: (_event$userId = event.userId) !== null && _event$userId !== void 0 ? _event$userId : "_",
            phoneNumber: (_ref5 = (_event$phoneNumber = event.phoneNumber) !== null && _event$phoneNumber !== void 0 ? _event$phoneNumber : event.phone) !== null && _ref5 !== void 0 ? _ref5 : "_",
            email: (_event$email = event.email) !== null && _event$email !== void 0 ? _event$email : "_",
            ipAddress,
            deviceType,
            type: (_event$type = event.type) !== null && _event$type !== void 0 ? _event$type : "_",
            entryTimestamp: (_event$entryTimestamp = event.entryTimestamp) !== null && _event$entryTimestamp !== void 0 ? _event$entryTimestamp : null,
            exitTimestamp: (_event$exitTimestamp = event.exitTimestamp) !== null && _event$exitTimestamp !== void 0 ? _event$exitTimestamp : null,
            userDeviceInfo: (_event$userDeviceInfo = event.userDeviceInfo) !== null && _event$userDeviceInfo !== void 0 ? _event$userDeviceInfo : "_",
            location,
            // Add accuracy field
            accuracy: (_event$accuracy = event.accuracy) !== null && _event$accuracy !== void 0 ? _event$accuracy : null
          };
        });
      } catch (error) {
        console.error("Error fetching external events:", error);
        return [];
      }
    })();
  }
  // Helper to format event data for display
  getDisplayField(event, field) {
    let value = event[field];
    if (field === "ipAddress") {
      // Check direct field first, then network object
      if (event.ipAddress && event.ipAddress !== "_") {
        value = event.ipAddress;
      } else if (event.network && event.network.ip) {
        value = event.network.ip;
      }
      if (value === undefined || value === null || value === "") return "_";
      return value;
    }
    if (field === "device" || field === "deviceType") {
      // Check direct field first, then device object
      if (event.deviceType && event.deviceType !== "_") {
        value = event.deviceType;
      } else if (event.device && event.device.platform) {
        value = event.device.platform;
      }
      if (value === undefined || value === null || value === "") return "Unknown";
      return value;
    }
    if (field === "accuracy") {
      if (typeof value === "number") return value.toString();
      if (event.accuracy !== undefined && event.accuracy !== null) return event.accuracy.toString();
      return "_";
    }
    if (field === "userId") {
      if (event.userId && event.userId !== "_") return event.userId;
      return "_";
    }
    if (value === undefined || value === null || value === "") return "_";
    if (field === "timestamp" || field === "entryTimestamp" || field === "exitTimestamp") {
      return value ? this.formatTimestamp(value) : "_";
    }
    if (field === "location") {
      if (value && typeof value === "object" && value.latitude !== null && value.longitude !== null) {
        return `${Number(value.latitude).toFixed(4)}, ${Number(value.longitude).toFixed(4)}`;
      } else {
        return "_";
      }
    }
    return value;
  }
  isMobile() {
    // Basic check for mobile devices
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  constructor(geofenceService) {
    this.geofenceService = geofenceService;
    // Add filtering properties
    this.searchQuery = "";
    this.filterType = "all";
    this.geofenceEvents = [];
    // Pagination and sorting
    this.pageSize = 10;
    this.currentPage = 1;
    this.sortColumn = "";
    this.sortDirection = "asc";
  }
  ngOnInit() {
    console.log("ActivityLogPage: ngOnInit called");
    this.loadEvents();
    // Removed auto-refresh. Use manual refresh button instead.
  }
  // Manual refresh method for button
  refreshEvents() {
    this.loadEvents();
  }
  loadEvents() {
    var _this = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("ActivityLogPage: Loading events...");
      const localEvents = _this.geofenceService.getGeofenceEvents();
      const externalEvents = yield _this.fetchExternalEvents();
      // Merge local and external events
      const allEvents = [...localEvents, ...externalEvents];
      // Remove duplicates by normalized timestamp (rounded to nearest minute), coordinates, IP address, and device type
      const seen = new Set();
      _this.geofenceEvents = allEvents.filter(event => {
        var _event$location, _event$location2, _event$location3, _event$location4;
        // Round timestamp to nearest minute to catch duplicates that are seconds apart
        const timestamp = event.timestamp || 0;
        const roundedTimestamp = Math.floor(timestamp / 60000) * 60000; // Round to nearest minute
        const ts = String(roundedTimestamp);
        // Normalize coordinates to 4 decimals (enough for ~10m precision)
        const lat = ((_event$location = event.location) === null || _event$location === void 0 ? void 0 : _event$location.latitude) !== undefined && ((_event$location2 = event.location) === null || _event$location2 === void 0 ? void 0 : _event$location2.latitude) !== null ? Number(event.location.latitude).toFixed(4) : "_";
        const lng = ((_event$location3 = event.location) === null || _event$location3 === void 0 ? void 0 : _event$location3.longitude) !== undefined && ((_event$location4 = event.location) === null || _event$location4 === void 0 ? void 0 : _event$location4.longitude) !== null ? Number(event.location.longitude).toFixed(4) : "_";
        // Include IP address and device type in deduplication key
        const ip = _this.getDisplayField(event, "ipAddress");
        const device = _this.getDisplayField(event, "device");
        const userId = _this.getDisplayField(event, "userId");
        // Create a comprehensive deduplication key
        const key = `${ts}-${lat}-${lng}-${ip}-${device}-${userId}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      console.log("ActivityLogPage: Loaded events:", _this.geofenceEvents.length);
    })();
  }
  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
  formatDuration(duration) {
    if (!duration) return "";
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor(duration % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(duration % (1000 * 60) / 1000);
    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }
  getEventColor(type) {
    return type === "enter" ? "success" : "warning";
  }
  getEventIcon(type) {
    return type === "enter" ? "enter" : "exit";
  }
  getEntriesCount() {
    return this.geofenceEvents.filter(event => event.type === "enter").length;
  }
  getExitsCount() {
    return this.geofenceEvents.filter(event => event.type === "exit").length;
  }
  addSampleEntry() {
    this.geofenceService.addMockEvent("enter");
    this.loadEvents();
  }
  addSampleExit() {
    this.geofenceService.addMockEvent("exit");
    this.loadEvents();
  }
  clearEvents() {
    this.geofenceService.clearEvents();
    this.loadEvents();
  }
  // Add search and filter functionality
  get filteredEvents() {
    let events = [...this.geofenceEvents];
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      events = events.filter(event => this.getDisplayField(event, "userId").toLowerCase().includes(query) || this.getDisplayField(event, "ipAddress").toLowerCase().includes(query) || this.getDisplayField(event, "device").toLowerCase().includes(query) || this.getDisplayField(event, "type").toLowerCase().includes(query));
    }
    // Apply type filter
    if (this.filterType !== "all") {
      events = events.filter(event => event.type === this.filterType);
    }
    return events;
  }
  get paginatedEvents() {
    let events = [...this.filteredEvents];
    // Apply sorting
    if (this.sortColumn) {
      events.sort((a, b) => {
        let valA = this.getDisplayField(a, this.sortColumn);
        let valB = this.getDisplayField(b, this.sortColumn);
        // Handle numeric sorting for specific fields
        if (this.sortColumn === "timestamp" || this.sortColumn === "accuracy") {
          valA = a[this.sortColumn] || 0;
          valB = b[this.sortColumn] || 0;
        }
        if (valA == null) return 1;
        if (valB == null) return -1;
        if (valA < valB) return this.sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    const start = (this.currentPage - 1) * this.pageSize;
    return events.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filteredEvents.length / this.pageSize);
  }
  get pageNumbers() {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2; // Show 2 pages before/after current
    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);
    // Adjust if we're near the beginning or end
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
  onSearchChange(event) {
    this.searchQuery = event.target.value;
    this.currentPage = 1; // Reset to first page when searching
  }
  onFilterChange(event) {
    this.filterType = event.target.value;
    this.currentPage = 1; // Reset to first page when filtering
  }
  // Enhanced jump to page with validation
  jumpToPage(page) {
    const maxPage = this.totalPages;
    if (page < 1) {
      this.currentPage = 1;
    } else if (page > maxPage) {
      this.currentPage = maxPage;
    } else {
      this.currentPage = page;
    }
  }
  onPageInputChange(event) {
    const page = parseInt(event.target.value);
    if (!isNaN(page)) {
      this.jumpToPage(page);
    }
  }
  // Helper method for template to access Math.min
  getMin(a, b) {
    return Math.min(a, b);
  }
  setSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
_ActivityLogPage = ActivityLogPage;
_ActivityLogPage.ɵfac = function ActivityLogPage_Factory(t) {
  return new (t || _ActivityLogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_geofence_service__WEBPACK_IMPORTED_MODULE_1__.GeofenceService));
};
_ActivityLogPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _ActivityLogPage,
  selectors: [["app-activity-log"]],
  decls: 42,
  vars: 10,
  consts: [["noEvents", ""], ["locationFallback", ""], ["slot", "start", 4, "ngIf"], [1, "controls-section"], [1, "search-filter-row"], ["placeholder", "Search by User ID, IP, Device, Type...", "debounce", "300", 3, "ngModelChange", "ionInput", "ngModel"], ["placeholder", "Filter by Type", "interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "all"], ["value", "enter"], ["value", "exit"], ["fill", "outline", "color", "primary", 3, "click"], ["name", "refresh", "slot", "start"], [1, "page-size-row"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], ["class", "table-container", 4, "ngIf", "ngIfElse"], ["class", "pagination-section", 4, "ngIf"], ["slot", "start"], [1, "table-container"], [1, "activity-table"], [1, "sortable", 3, "click"], [3, "name", 4, "ngIf"], ["class", "event-row", 4, "ngFor", "ngForOf"], [3, "name"], [1, "event-row"], [1, "row-number"], [1, "type-chip", 3, "color"], [1, "timestamp-cell"], [1, "location-cell"], [4, "ngIf", "ngIfElse"], [1, "user-id"], [1, "device-info"], [1, "ip-address"], [1, "accuracy"], [1, "duration-cell"], ["class", "duration", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "no-data"], [1, "duration"], [1, "pagination-section"], [1, "pagination-info"], [1, "pagination-controls"], ["fill", "outline", "size", "small", 3, "click", "disabled"], ["name", "chevron-back-outline", "slot", "start"], ["name", "chevron-back", "slot", "icon-only"], [1, "page-numbers"], ["size", "small", "class", "page-number", 3, "fill", "color", "click", 4, "ngFor", "ngForOf"], ["name", "chevron-forward", "slot", "icon-only"], ["name", "chevron-forward-outline", "slot", "end"], [1, "jump-to-page"], ["type", "number", "min", "1", "placeholder", "Page", 1, "page-input", 3, "ionInput", "value", "max"], [1, "total-pages"], ["size", "small", 1, "page-number", 3, "click", "fill", "color"], [1, "no-events"], ["name", "location-outline", 1, "no-events-icon"]],
  template: function ActivityLogPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ActivityLogPage_ion_buttons_2_Template, 2, 0, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Activity Log");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-content")(6, "ion-card")(7, "ion-card-header")(8, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Activity Log");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-card-content")(13, "div", 3)(14, "div", 4)(15, "ion-searchbar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ActivityLogPage_Template_ion_searchbar_ngModelChange_15_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInput", function ActivityLogPage_Template_ion_searchbar_ionInput_15_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSearchChange($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ActivityLogPage_Template_ion_select_ngModelChange_16_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.filterType, $event) || (ctx.filterType = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ActivityLogPage_Template_ion_select_ionChange_16_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFilterChange($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-select-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "All Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-select-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Enter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-select-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Exit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityLogPage_Template_ion_button_click_23_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.refreshEvents());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Refresh ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Items per page:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ActivityLogPage_Template_ion_select_ngModelChange_29_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.pageSize, $event) || (ctx.pageSize = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ActivityLogPage_Template_ion_select_ionChange_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.currentPage = 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-select-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ActivityLogPage_div_38_Template, 31, 8, "div", 18)(39, ActivityLogPage_div_39_Template, 23, 11, "div", 19)(40, ActivityLogPage_ng_template_40_Template, 9, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const noEvents_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Showing ", ctx.paginatedEvents.length, " of ", ctx.filteredEvents.length, " events (", ctx.geofenceEvents.length, " total) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.filterType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.pageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredEvents.length > 0)("ngIfElse", noEvents_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 16px;\n}\n\n.event-item[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--ion-color-primary);\n  margin-bottom: 8px;\n}\n\n.enter-event[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-success);\n}\n\n.exit-event[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-warning);\n}\n\nion-chip[_ngcontent-%COMP%] {\n  --border-radius: 16px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid var(--ion-color-medium-tint);\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--ion-color-dark-shade);\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--ion-color-light-tint);\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--ion-color-primary-tint);\n}\n\ncode[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light-shade);\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border-bottom: 2px solid var(--ion-color-medium-tint);\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    font-size: 0.9rem;\n    border-bottom: 1px dotted var(--ion-color-light-shade);\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: var(--ion-color-medium);\n  }\n  \n\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[data-label=Type][_ngcontent-%COMP%] {\n    padding-bottom: 8px;\n  }\n}\n.controls-section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.controls-section[_ngcontent-%COMP%]   .page-size-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.controls-section[_ngcontent-%COMP%]   .page-size-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n.controls-section[_ngcontent-%COMP%]   .page-size-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.activity-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--ion-color-light);\n}\n.activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .activity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n.activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  font-weight: 600;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.activity-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: background-color 0.2s;\n}\n.activity-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-primary-shade);\n}\n.activity-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 14px;\n}\n.activity-table[_ngcontent-%COMP%]   .event-row[_ngcontent-%COMP%] {\n  transition: background-color 0.2s;\n}\n.activity-table[_ngcontent-%COMP%]   .event-row[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-light-tint);\n}\n.activity-table[_ngcontent-%COMP%]   .event-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(var(--ion-color-light-rgb), 0.3);\n}\n.activity-table[_ngcontent-%COMP%]   .row-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  width: 60px;\n  text-align: center;\n}\n.activity-table[_ngcontent-%COMP%]   .type-chip[_ngcontent-%COMP%]   .ion-chip[_ngcontent-%COMP%] {\n  min-height: 28px;\n}\n.activity-table[_ngcontent-%COMP%]   .timestamp-cell[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-size: 0.85rem;\n  min-width: 180px;\n}\n.activity-table[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.activity-table[_ngcontent-%COMP%]   .location-cell[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-secondary-rgb), 0.1);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n}\n.activity-table[_ngcontent-%COMP%]   .user-id[_ngcontent-%COMP%], .activity-table[_ngcontent-%COMP%]   .ip-address[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-tertiary-rgb), 0.1);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n}\n.activity-table[_ngcontent-%COMP%]   .device-info[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n.activity-table[_ngcontent-%COMP%]   .accuracy[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--ion-color-success);\n}\n.activity-table[_ngcontent-%COMP%]   .duration-cell[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-warning-rgb), 0.1);\n  color: var(--ion-color-warning-shade);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.activity-table[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-style: italic;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.pagination-section[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  min-width: 40px;\n  height: 32px;\n}\n.pagination-section[_ngcontent-%COMP%]   .jump-to-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-section[_ngcontent-%COMP%]   .jump-to-page[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n.pagination-section[_ngcontent-%COMP%]   .jump-to-page[_ngcontent-%COMP%]   .page-input[_ngcontent-%COMP%] {\n  width: 80px;\n  --background: var(--ion-color-light-contrast);\n  --border-radius: 4px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 0.9rem;\n}\n.pagination-section[_ngcontent-%COMP%]   .jump-to-page[_ngcontent-%COMP%]   .total-pages[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--ion-color-medium);\n}\n.no-events[_ngcontent-%COMP%]   .no-events-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-events[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem 0;\n  color: var(--ion-color-dark);\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 768px) {\n  .controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%], .controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%], .controls-section[_ngcontent-%COMP%]   .search-filter-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .activity-table[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .activity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .activity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n  .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWN0aXZpdHktbG9nL2FjdGl2aXR5LWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUEsNEJBQUE7QUFDQTtFQUNFO0lBQ0UsU0FBQTtFQUNGO0VBRUE7SUFDRSxhQUFBLEVBQUEsMkJBQUE7RUFBRjtFQUdBO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0EscURBQUE7RUFERjtFQUlBO0lBQ0UsZ0JBQUE7RUFGRjtFQUtBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxzREFBQTtFQUhGO0VBTUE7SUFDRSxnQkFBQTtFQUpGO0VBT0E7SUFDRSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7RUFMRjtFQVFBLDBCQUFBO0VBQ0E7SUFDRSxtQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFLG1CQUFBO0FBUEY7QUFTRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVNJO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0FBUE47QUFVSTtFQUNFLGdCQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWFJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQVhOO0FBY0k7RUFDRSxlQUFBO0FBWk47O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBZEY7O0FBaUJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFkRjtBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtBQWRKO0FBaUJFO0VBQ0Usb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGlDQUFBO0FBZk47QUFpQk07RUFDRSwwQ0FBQTtBQWZSO0FBa0JNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBaEJSO0FBcUJFO0VBQ0UsaUNBQUE7QUFuQko7QUFxQkk7RUFDRSx1Q0FBQTtBQW5CTjtBQXNCSTtFQUNFLGlEQUFBO0FBcEJOO0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXRCSjtBQTBCSTtFQUNFLGdCQUFBO0FBeEJOO0FBNEJFO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMUJKO0FBNkJFO0VBQ0UsZ0JBQUE7QUEzQko7QUE2Qkk7RUFDRSxxREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTNCTjtBQStCRTtFQUNFLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQTlCSjtBQWlDRTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUEvQko7QUFtQ0k7RUFDRSxtREFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFqQ047QUFxQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBbkNKOztBQXVDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFwQ0Y7QUFzQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXJDSjtBQXVDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBckNOO0FBdUNNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFyQ1I7QUEwQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBeENOO0FBMkNJO0VBQ0UsV0FBQTtFQUNBLDZDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF6Q047QUE0Q0k7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBMUNOOztBQStDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQTVDRjtBQThDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE1Q0o7QUErQ0U7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBN0NKO0FBZ0RFO0VBQ0UsbUJBQUE7QUE5Q0o7O0FBbURBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBaERGO0VBa0RFO0lBQ0UsV0FBQTtFQWhESjtFQW9EQTtJQUNFLGtCQUFBO0VBbERGO0VBb0RFO0lBQ0UsaUJBQUE7RUFsREo7RUF1REU7SUFDRSxRQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUFyREo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG59XG5cbi5ldmVudC1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmVudGVyLWV2ZW50IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmV4aXQtZXZlbnQge1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLyogVGFibGUgU3R5bGVzICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbnRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxudGFibGUgdGgsXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG59XG5cbnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxudGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLyogUmVzcG9uc2l2ZSBUYWJsZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YWJsZS1jb250YWluZXIgdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdGhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgaGVhZGVycyBvbiBtb2JpbGUgKi9cbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIH1cbiAgXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdHI6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIgdGFibGUgdGQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuXG4gIC8qIEFkanVzdCBjaGlwIGFsaWdubWVudCAqL1xuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRkW2RhdGEtbGFiZWw9XCJUeXBlXCJdIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG59XG5cbi5jb250cm9scy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgXG4gIC5zZWFyY2gtZmlsdGVyLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBcbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgICBcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cbiAgXG4gIC5wYWdlLXNpemUtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgICBcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmFjdGl2aXR5LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIFxuICB0aCwgdGQge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICB9XG4gIFxuICB0aCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBcbiAgICAmLnNvcnRhYmxlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5ldmVudC1yb3cge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICB9XG4gICAgXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4zKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5yb3ctbnVtYmVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC50eXBlLWNoaXAge1xuICAgIC5pb24tY2hpcCB7XG4gICAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRpbWVzdGFtcC1jZWxsIHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICB9XG4gIFxuICAubG9jYXRpb24tY2VsbCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBcbiAgICBjb2RlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjEpO1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC51c2VyLWlkLCAuaXAtYWRkcmVzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiKSwgMC4xKTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbiAgXG4gIC5kZXZpY2UtaW5mbyB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG4gIFxuICAuYWNjdXJhY3kge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgfVxuICBcbiAgLmR1cmF0aW9uLWNlbGwge1xuICAgIC5kdXJhdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiksIDAuMSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuICB9XG4gIFxuICAubm8tZGF0YSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxufVxuXG4ucGFnaW5hdGlvbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIFxuICAucGFnaW5hdGlvbi1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgXG4gICAgLnBhZ2UtbnVtYmVycyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgXG4gICAgICAucGFnZS1udW1iZXIge1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5qdW1wLXRvLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuICAgIFxuICAgIC5wYWdlLWlucHV0IHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICBcbiAgICAudG90YWwtcGFnZXMge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuICB9XG59XG5cbi5uby1ldmVudHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBcbiAgLm5vLWV2ZW50cy1pY29uIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBtYXJnaW46IDFyZW0gMCAwLjVyZW0gMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRyb2xzLXNlY3Rpb24gLnNlYXJjaC1maWx0ZXItcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIFxuICAgIGlvbi1zZWFyY2hiYXIsIGlvbi1zZWxlY3QsIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIFxuICAuYWN0aXZpdHktdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBcbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgfVxuICB9XG4gIFxuICAucGFnaW5hdGlvbi1jb250cm9scyB7XG4gICAgLnBhZ2UtbnVtYmVycyB7XG4gICAgICBvcmRlcjogMztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4523:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 2122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsPageRoutingModule;




const routes = [{
  path: "tabs",
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: "users",
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../users/users.module */ 9794)).then(m => m.UsersPageModule)
  }, {
    path: "map",
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../map/map.module */ 8850)).then(m => m.MapPageModule)
  }, {
    path: "activity-log",
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../activity-log/activity-log.module */ 472)).then(m => m.ActivityLogModule)
  }, {
    path: "feedback",
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feedback_feedback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../feedback/feedback.module */ 9846)).then(m => m.FeedbackPageModule)
  }, {
    path: "",
    redirectTo: "/app/tabs/map",
    pathMatch: "full"
  }]
}];
class TabsPageRoutingModule {}
_TabsPageRoutingModule = TabsPageRoutingModule;
_TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) {
  return new (t || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TabsPageRoutingModule
});
_TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 650:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsModule: () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 2122);
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-page-routing.module */ 4523);
/* harmony import */ var _activity_log_activity_log_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-log/activity-log.module */ 472);
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.module */ 9794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
var _TabsModule;







class TabsModule {}
_TabsModule = TabsModule;
_TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || _TabsModule)();
};
_TabsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _TabsModule
});
_TabsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_activity_log_activity_log_module__WEBPACK_IMPORTED_MODULE_2__.ActivityLogModule, _users_users_module__WEBPACK_IMPORTED_MODULE_3__.UsersPageModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TabsModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    imports: [_activity_log_activity_log_module__WEBPACK_IMPORTED_MODULE_2__.ActivityLogModule, _users_users_module__WEBPACK_IMPORTED_MODULE_3__.UsersPageModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 2122:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _TabsPage;


class TabsPage {}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)();
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 0,
  consts: [["slot", "bottom"], ["tab", "users"], ["name", "people"], ["tab", "map"], ["name", "location"], ["tab", "activity-log"], ["name", "list"], ["tab", "feedback"], ["name", "chatbubbles"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Activity Log");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs],
  encapsulation: 2
});

/***/ }),

/***/ 3539:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPageRoutingModule: () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 8229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _UsersPageRoutingModule;




const routes = [{
  path: "",
  component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
}];
class UsersPageRoutingModule {}
_UsersPageRoutingModule = UsersPageRoutingModule;
_UsersPageRoutingModule.ɵfac = function UsersPageRoutingModule_Factory(t) {
  return new (t || _UsersPageRoutingModule)();
};
_UsersPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _UsersPageRoutingModule
});
_UsersPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9794:
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPageModule: () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 3539);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 8229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _UsersPageModule;






class UsersPageModule {}
_UsersPageModule = UsersPageModule;
_UsersPageModule.ɵfac = function UsersPageModule_Factory(t) {
  return new (t || _UsersPageModule)();
};
_UsersPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _UsersPageModule
});
_UsersPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersPageModule, {
    declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule]
  });
})();

/***/ }),

/***/ 8229:
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPage: () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var _providers_geofence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/geofence.service */ 1480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _UsersPage;





function UsersPage_ion_list_14_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item")(1, "ion-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.getStatusColor(user_r1.geofenceStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.geofenceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last Seen: ", ctx_r1.formatTimestamp(user_r1.lastSeen), "");
  }
}
function UsersPage_ion_list_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UsersPage_ion_list_14_ion_item_1_Template, 12, 4, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.users);
  }
}
function UsersPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No users to display.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class UsersPage {
  constructor(geofenceService) {
    this.geofenceService = geofenceService;
    this.users = [];
  }
  ngOnInit() {
    this.loadUsers();
    setInterval(() => {
      this.loadUsers();
    }, 5000); // Refresh every 5 seconds
  }
  loadUsers() {
    const currentUser = this.geofenceService.getCurrentUser();
    const otherUsers = this.geofenceService.getUsers();
    this.users = currentUser ? [currentUser, ...otherUsers] : otherUsers;
  }
  formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  getStatusColor(status) {
    switch (status) {
      case "inside":
        return "success";
      case "outside":
        return "medium";
      case "entering":
        return "primary";
      case "exiting":
        return "warning";
      default:
        return "medium";
    }
  }
}
_UsersPage = UsersPage;
_UsersPage.ɵfac = function UsersPage_Factory(t) {
  return new (t || _UsersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_geofence_service__WEBPACK_IMPORTED_MODULE_0__.GeofenceService));
};
_UsersPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _UsersPage,
  selectors: [["app-users"]],
  decls: 17,
  vars: 2,
  consts: [["noUsers", ""], ["slot", "start"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["name", "person-circle", 1, "user-avatar"], [3, "color"], ["name", "people-outline", "slot", "start"]],
  template: function UsersPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-card")(8, "ion-card-header")(9, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "User List");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Users currently being tracked");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UsersPage_ion_list_14_Template, 2, 1, "ion-list", 2)(15, UsersPage_ng_template_15_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const noUsers_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length > 0)("ngIfElse", noUsers_r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: [".user-avatar[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nion-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWF2YXRhciB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1480:
/*!***********************************************!*\
  !*** ./src/app/providers/geofence.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeofenceService: () => (/* binding */ GeofenceService)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 7801);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 8321);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ 5477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);

var _GeofenceService;




class GeofenceService {
  // Send all polygons to backend API
  sendPolygonsToBackend(polygons) {
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Determine API base URL based on environment
      const isLocal = window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_BASE = isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
      const results = [];
      for (const geofenceData of polygons) {
        try {
          console.log("Sending geofence to:", `${API_BASE}/api/geofence`);
          console.log("Geofence data:", geofenceData);
          const response = yield fetch(`${API_BASE}/api/geofence`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(geofenceData)
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = yield response.json();
          console.log("Backend response:", result);
          results.push(result);
        } catch (error) {
          console.error("Error sending polygon to backend:", error);
          results.push({
            error: error.message
          });
        }
      }
      return results;
    })();
  }
  constructor() {
    this.geofenceCenter = {
      lat: 10.6918,
      lng: -61.2225
    }; // Trinidad coordinates
    this.geofenceRadius = 1000; // 1km radius
    this.users = [];
    this.currentUser = null;
    this.geofenceEvents = [];
    this.entryTime = null;
    this.initializeCurrentUser();
  }
  initializeCurrentUser() {
    var _this = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const deviceInfo = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
        const networkInfo = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.getStatus();
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition();
        _this.currentUser = {
          id: _this.generateUserId(),
          deviceInfo,
          networkInfo,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy || 0,
            timestamp: Date.now()
          },
          geofenceStatus: _this.isInsideGeofence(position.coords.latitude, position.coords.longitude) ? "inside" : "outside",
          lastSeen: Date.now()
        };
        // Start watching position
        _this.startWatchingPosition();
      } catch (error) {
        console.error("Error initializing user:", error);
      }
    })();
  }
  generateUserId() {
    return "user_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();
  }
  isInsideGeofence(lat, lng) {
    const distance = this.calculateDistance(lat, lng, this.geofenceCenter.lat, this.geofenceCenter.lng);
    return distance <= this.geofenceRadius;
  }
  calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  startWatchingPosition() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.watchId = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.watchPosition({}, (position, err) => {
          if (position && _this2.currentUser) {
            const wasInside = _this2.currentUser.geofenceStatus === "inside";
            const isNowInside = _this2.isInsideGeofence(position.coords.latitude, position.coords.longitude);
            // Update current user location
            _this2.currentUser.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy || 0,
              timestamp: Date.now()
            };
            _this2.currentUser.lastSeen = Date.now();
            // Check for geofence transitions
            if (!wasInside && isNowInside) {
              // Entering geofence
              _this2.currentUser.geofenceStatus = "entering";
              _this2.entryTime = Date.now();
              _this2.recordGeofenceEvent("enter");
              setTimeout(() => {
                if (_this2.currentUser) _this2.currentUser.geofenceStatus = "inside";
              }, 1000);
            } else if (wasInside && !isNowInside) {
              // Exiting geofence
              _this2.currentUser.geofenceStatus = "exiting";
              const duration = _this2.entryTime ? Date.now() - _this2.entryTime : 0;
              _this2.recordGeofenceEvent("exit", duration);
              _this2.entryTime = null;
              setTimeout(() => {
                if (_this2.currentUser) _this2.currentUser.geofenceStatus = "outside";
              }, 1000);
            } else if (isNowInside) {
              _this2.currentUser.geofenceStatus = "inside";
            } else {
              _this2.currentUser.geofenceStatus = "outside";
            }
          }
          if (err) {
            console.error("Position watch error:", err);
          }
        });
      } catch (error) {
        console.error("Error starting position watch:", error);
      }
    })();
  }
  recordGeofenceEvent(type, duration) {
    if (!this.currentUser) return;
    const event = {
      userId: this.currentUser.id,
      userDeviceInfo: this.currentUser.deviceInfo,
      type,
      timestamp: Date.now(),
      location: {
        latitude: this.currentUser.location.latitude,
        longitude: this.currentUser.location.longitude
      },
      duration
    };
    this.geofenceEvents.unshift(event); // Add to beginning
    // Keep only last 50 events
    if (this.geofenceEvents.length > 50) {
      this.geofenceEvents = this.geofenceEvents.slice(0, 50);
    }
  }
  getCurrentUser() {
    return this.currentUser;
  }
  getUsers() {
    // In a real app, this would come from a server
    // For demo, we'll simulate other users
    return this.users;
  }
  getUsersInGeofence() {
    return this.users.filter(user => user.geofenceStatus === "inside");
  }
  getGeofenceEvents() {
    return this.geofenceEvents;
  }
  getGeofenceCenter() {
    return this.geofenceCenter;
  }
  getGeofenceRadius() {
    return this.geofenceRadius;
  }
  stopWatching() {
    var _this3 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.watchId) {
        yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.clearWatch({
          id: _this3.watchId
        });
      }
    })();
  }
  // Simulate adding other users (in real app, this would be real-time data)
  simulateOtherUsers() {
    const mockUsers = [{
      id: "user_mock_1",
      deviceInfo: {
        model: "iPhone 12",
        platform: "ios",
        operatingSystem: "ios",
        osVersion: "15.0",
        manufacturer: "Apple"
      },
      networkInfo: {
        connected: true,
        connectionType: "wifi"
      },
      location: {
        latitude: 10.692,
        longitude: -61.222,
        accuracy: 5,
        timestamp: Date.now() - 30000
      },
      geofenceStatus: "inside",
      lastSeen: Date.now() - 30000
    }, {
      id: "user_mock_2",
      deviceInfo: {
        model: "Samsung Galaxy S21",
        platform: "android",
        operatingSystem: "android",
        osVersion: "11",
        manufacturer: "Samsung"
      },
      networkInfo: {
        connected: true,
        connectionType: "4g"
      },
      location: {
        latitude: 10.6915,
        longitude: -61.223,
        accuracy: 8,
        timestamp: Date.now() - 60000
      },
      geofenceStatus: "inside",
      lastSeen: Date.now() - 60000
    }];
    this.users = mockUsers;
  }
  // Methods for activity log testing
  addMockEvent(type) {
    var _this$currentUser, _this$currentUser2;
    const mockEvent = {
      userId: ((_this$currentUser = this.currentUser) === null || _this$currentUser === void 0 ? void 0 : _this$currentUser.id) || "mock_user_" + Date.now(),
      userDeviceInfo: ((_this$currentUser2 = this.currentUser) === null || _this$currentUser2 === void 0 ? void 0 : _this$currentUser2.deviceInfo) || {
        model: "Mock Device",
        platform: "web",
        operatingSystem: "unknown",
        osVersion: "1.0",
        manufacturer: "Mock"
      },
      type,
      timestamp: Date.now(),
      location: {
        latitude: 10.6918 + (Math.random() - 0.5) * 0.001,
        longitude: -61.2225 + (Math.random() - 0.5) * 0.001
      },
      duration: type === "exit" ? Math.floor(Math.random() * 300000) + 60000 : undefined // 1-5 minutes
    };
    this.geofenceEvents.unshift(mockEvent);
    // Keep only last 50 events
    if (this.geofenceEvents.length > 50) {
      this.geofenceEvents = this.geofenceEvents.slice(0, 50);
    }
  }
  clearEvents() {
    this.geofenceEvents = [];
  }
  // Add some initial sample data for demonstration
  addInitialSampleData() {
    // if (this.geofenceEvents.length === 0) {
    //   // Add some sample events from the past
    //   const sampleEvents: GeofenceEvent[] = [
    //     {
    //       userId: "sample_user_1",
    //       userDeviceInfo: {
    //         model: "iPhone 12",
    //         platform: "ios",
    //         operatingSystem: "ios",
    //         osVersion: "15.0",
    //         manufacturer: "Apple",
    //       },
    //       type: "enter",
    //       timestamp: Date.now() - 3600000, // 1 hour ago
    //       location: { latitude: 10.6918, longitude: -61.2225 },
    //     },
    //     {
    //       userId: "sample_user_1",
    //       userDeviceInfo: {
    //         model: "iPhone 12",
    //         platform: "ios",
    //         operatingSystem: "ios",
    //         osVersion: "15.0",
    //         manufacturer: "Apple",
    //       },
    //       type: "exit",
    //       timestamp: Date.now() - 1800000, // 30 minutes ago
    //       location: { latitude: 10.692, longitude: -61.2227 },
    //       duration: 1800000, // 30 minutes
    //     },
    //     {
    //       userId: "sample_user_2",
    //       userDeviceInfo: {
    //         model: "Samsung Galaxy S21",
    //         platform: "android",
    //         operatingSystem: "android",
    //         osVersion: "11",
    //         manufacturer: "Samsung",
    //       },
    //       type: "enter",
    //       timestamp: Date.now() - 900000, // 15 minutes ago
    //       location: { latitude: 10.6916, longitude: -61.2223 },
    //     },
    //   ];
    //   this.geofenceEvents = sampleEvents;
    // }
  }
}
_GeofenceService = GeofenceService;
_GeofenceService.ɵfac = function GeofenceService_Factory(t) {
  return new (t || _GeofenceService)();
};
_GeofenceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _GeofenceService,
  factory: _GeofenceService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 2135:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7801:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Device: () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 2135);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4763)).then(m => new m.DeviceWeb())
});



/***/ }),

/***/ 7283:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5477:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Network: () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7283);

const Network = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Network', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_network_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3023)).then(m => new m.NetworkWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs-page_tabs-page_module_ts.js.map