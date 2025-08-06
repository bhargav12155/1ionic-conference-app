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
/* harmony import */ var _providers_geofence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/geofence.service */ 1480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _ActivityLogPage;





function ActivityLogPage_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ActivityLogPage_div_14_tr_17_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r1.userDeviceInfo.model || event_r1.userDeviceInfo.platform || "Unknown");
  }
}
function ActivityLogPage_div_14_tr_17_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatDuration(event_r1.duration));
  }
}
function ActivityLogPage_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 8)(2, "ion-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 13)(11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ActivityLogPage_div_14_tr_17_span_14_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ActivityLogPage_div_14_tr_17_span_16_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.getEventColor(event_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r1.getEventIcon(event_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r1.type.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatTimestamp(event_r1.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", event_r1.location.latitude.toFixed(4), ", ", event_r1.location.longitude.toFixed(4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r1.userDeviceInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r1.duration && event_r1.type === "exit");
  }
}
function ActivityLogPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ActivityLogPage_div_14_tr_17_Template, 17, 9, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.geofenceEvents);
  }
}
function ActivityLogPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No activity recorded yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enter and exit the Trinidad geofence area to see activity logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ActivityLogPage_ion_card_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-content")(5, "ion-grid")(6, "ion-row")(7, "ion-col", 17)(8, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label")(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 17)(16, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label")(19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Exits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getEntriesCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getExitsCount());
  }
}
class ActivityLogPage {
  isMobile() {
    // Basic check for mobile devices
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  constructor(geofenceService) {
    this.geofenceService = geofenceService;
    this.geofenceEvents = [];
  }
  ngOnInit() {
    console.log("ActivityLogPage: ngOnInit called");
    this.loadEvents();
    // Refresh events every 10 seconds
    setInterval(() => {
      this.loadEvents();
    }, 10000);
  }
  loadEvents() {
    console.log("ActivityLogPage: Loading events...");
    this.geofenceEvents = this.geofenceService.getGeofenceEvents();
    console.log("ActivityLogPage: Loaded events:", this.geofenceEvents.length);
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
}
_ActivityLogPage = ActivityLogPage;
_ActivityLogPage.ɵfac = function ActivityLogPage_Factory(t) {
  return new (t || _ActivityLogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_geofence_service__WEBPACK_IMPORTED_MODULE_0__.GeofenceService));
};
_ActivityLogPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ActivityLogPage,
  selectors: [["app-activity-log"]],
  decls: 18,
  vars: 4,
  consts: [["noEvents", ""], ["slot", "start", 4, "ngIf"], [1, "ion-padding"], ["class", "table-container", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["slot", "start"], [1, "table-container"], [4, "ngFor", "ngForOf"], ["data-label", "Type"], [3, "color"], [3, "name"], ["data-label", "Timestamp"], ["data-label", "Location"], ["data-label", "User ID"], ["data-label", "Device"], ["data-label", "Duration"], ["name", "time", "slot", "start"], ["size", "6"], ["lines", "none"], ["name", "enter", "color", "success", "slot", "start"], ["name", "exit", "color", "warning", "slot", "start"]],
  template: function ActivityLogPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ActivityLogPage_ion_buttons_2_Template, 2, 0, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Activity Log");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content")(6, "ion-card")(7, "ion-card-header")(8, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Geofence Entry/Exit History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Recent activity in Trinidad area");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-card-content")(13, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ActivityLogPage_div_14_Template, 18, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ActivityLogPage_ng_template_15_Template, 7, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ActivityLogPage_ion_card_17_Template, 23, 2, "ion-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const noEvents_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.geofenceEvents.length > 0)("ngIfElse", noEvents_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.geofenceEvents.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 16px;\n}\n\n.event-item[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--ion-color-primary);\n  margin-bottom: 8px;\n}\n\n.enter-event[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-success);\n}\n\n.exit-event[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-warning);\n}\n\nion-chip[_ngcontent-%COMP%] {\n  --border-radius: 16px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid var(--ion-color-medium-tint);\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--ion-color-dark-shade);\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--ion-color-light-tint);\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--ion-color-primary-tint);\n}\n\ncode[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light-shade);\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border-bottom: 2px solid var(--ion-color-medium-tint);\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    font-size: 0.9rem;\n    border-bottom: 1px dotted var(--ion-color-light-shade);\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: var(--ion-color-medium);\n  }\n  \n\n  .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[data-label=Type][_ngcontent-%COMP%] {\n    padding-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWN0aXZpdHktbG9nL2FjdGl2aXR5LWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUEsNEJBQUE7QUFDQTtFQUNFO0lBQ0UsU0FBQTtFQUNGO0VBRUE7SUFDRSxhQUFBLEVBQUEsMkJBQUE7RUFBRjtFQUdBO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0EscURBQUE7RUFERjtFQUlBO0lBQ0UsZ0JBQUE7RUFGRjtFQUtBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxzREFBQTtFQUhGO0VBTUE7SUFDRSxnQkFBQTtFQUpGO0VBT0E7SUFDRSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7RUFMRjtFQVFBLDBCQUFBO0VBQ0E7SUFDRSxtQkFBQTtFQU5GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuXG4uZXZlbnQtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5lbnRlci1ldmVudCB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5leGl0LWV2ZW50IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuaW9uLWNoaXAge1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi8qIFRhYmxlIFN0eWxlcyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG50YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbnRhYmxlIHRoLFxudGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xufVxuXG50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi8qIFJlc3BvbnNpdmUgVGFibGUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIGhlYWRlcnMgb24gbW9iaWxlICovXG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICB9XG4gIFxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRyOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHRkOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cblxuICAvKiBBZGp1c3QgY2hpcCBhbGlnbm1lbnQgKi9cbiAgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0ZFtkYXRhLWxhYmVsPVwiVHlwZVwiXSB7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  decls: 14,
  vars: 0,
  consts: [["slot", "bottom"], ["tab", "users"], ["name", "people"], ["tab", "map"], ["name", "location"], ["tab", "activity-log"], ["name", "list"]],
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