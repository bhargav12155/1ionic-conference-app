"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_map_map_module_ts"],{

/***/ 451:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageRoutingModule: () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 3701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _MapPageRoutingModule;




const routes = [{
  path: "",
  component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
}];
class MapPageRoutingModule {}
_MapPageRoutingModule = MapPageRoutingModule;
_MapPageRoutingModule.ɵfac = function MapPageRoutingModule_Factory(t) {
  return new (t || _MapPageRoutingModule)();
};
_MapPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _MapPageRoutingModule
});
_MapPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8850:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageModule: () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 451);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 3701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _MapPageModule;






class MapPageModule {}
_MapPageModule = MapPageModule;
_MapPageModule.ɵfac = function MapPageModule_Factory(t) {
  return new (t || _MapPageModule)();
};
_MapPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MapPageModule
});
_MapPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapPageModule, {
    declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule]
  });
})();

/***/ }),

/***/ 3701:
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPage: () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _providers_geofence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/geofence.service */ 1480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);

var _MapPage;







const _c0 = ["mapPlotting"];
const _c1 = (a0, a1) => ({
  "inside-geofence": a0,
  "outside-geofence": a1
});
function MapPage_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Click on map to add points, then click \"Finish\" when done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Points: ", ctx_r1.currentPolygonPoints.length, "");
  }
}
function MapPage_ion_item_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Multiple geofences created - different colors for each");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total Polygons: ", ctx_r1.polygons.length, "");
  }
}
class MapPage {
  constructor(toastCtrl, geofenceService, ngZone) {
    this.toastCtrl = toastCtrl;
    this.geofenceService = geofenceService;
    this.ngZone = ngZone;
    this.polygons = [];
    this.currentPolygon = null;
    this.allPolygonsData = [];
    this.currentPolygonPoints = [];
    this.isInsidePolygon = false;
    this.statusText = "Click 'Draw Polygon' to start drawing a custom geofence";
    this.wasInPolygon = false;
    this.isDrawing = false;
    this.drawingManagerEnabled = false;
    this.tempMarkers = [];
    this.polygonCount = 0;
    this.apiKey = "AIzaSyABw7DX0sg8fmhPt9H6JdlIGO-GikNgWhI";
    this.enterSound = new Audio("/assets/sounds/chime.mp3");
    this.exitSound = new Audio("/assets/sounds/chime.mp3");
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.loadGoogleMaps();
  }
  loadGoogleMaps() {
    if (typeof google !== "undefined") {
      this.initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=geometry,drawing`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.initializeMap();
      };
      document.head.appendChild(script);
    }
  }
  initializeMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.createMapAt(userLatLng, 20);
      }, error => {
        console.error("Error getting user location:", error);
        this.handleLocationError(error);
        const fallbackLatLng = {
          lat: 10.6918,
          lng: -61.2225
        };
        this.createMapAt(fallbackLatLng, 12);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      } // Add these options
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      const fallbackLatLng = {
        lat: 10.6918,
        lng: -61.2225
      };
      this.createMapAt(fallbackLatLng, 12);
    }
  }
  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.toastCtrl.create({
          message: "User denied the request for Geolocation.",
          duration: 3000
        }).then(toast => toast.present());
        break;
      case error.POSITION_UNAVAILABLE:
        this.toastCtrl.create({
          message: "Location information is unavailable.",
          duration: 3000
        }).then(toast => toast.present());
        break;
      case error.TIMEOUT:
        this.toastCtrl.create({
          message: "The request to get user location timed out.",
          duration: 3000
        }).then(toast => toast.present());
        break;
      case error.UNKNOWN_ERROR:
        this.toastCtrl.create({
          message: "An unknown error occurred.",
          duration: 3000
        }).then(toast => toast.present());
        break;
    }
  }
  createMapAt(centerLatLng, zoomLevel) {
    const mapOptions = {
      center: centerLatLng,
      zoom: zoomLevel,
      // Use the passed zoomLevel
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // Create draggable marker at center
    this.marker = new google.maps.Marker({
      position: centerLatLng,
      map: this.map,
      draggable: true,
      title: "Drag me to simulate movement!"
    });
    // Listen to marker drag events
    this.marker.addListener("dragend", () => {
      this.checkPolygonStatus();
    });
    // Enable polygon drawing
    this.enablePolygonDrawing(); // Assuming you have this method defined
    // Initial status check
    this.checkPolygonStatus(); // Assuming you have this method defined
  }
  enablePolygonDrawing() {
    // Remove the old click listener for automatic polygon creation
    // We'll now use manual drawing methods
    this.statusText = "Click 'Draw Polygon' to start drawing a custom geofence";
  }
  startDrawing() {
    // Don't clear existing polygons - allow multiple polygons
    this.ngZone.run(() => {
      this.isDrawing = true;
      this.currentPolygonPoints = [];
      this.statusText = "Click on the map to add points to your polygon";
    });
    // Add click listener for polygon drawing
    this.map.addListener("click", this.onMapClick.bind(this));
  }
  onMapClick(event) {
    if (!this.isDrawing) return;
    const latLng = event.latLng;
    this.currentPolygonPoints.push({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
    // Add a temporary marker to show the point
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    const color = colors[this.polygonCount % colors.length];
    const tempMarker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: color,
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#FFFFFF"
      }
    });
    this.tempMarkers.push(tempMarker);
    this.ngZone.run(() => {
      this.statusText = `Points added: ${this.currentPolygonPoints.length}. Click 'Finish' when done (minimum 3 points)`;
    });
  }
  finishDrawing() {
    if (!this.isDrawing || this.currentPolygonPoints.length < 3) {
      return;
    }
    this.ngZone.run(() => {
      this.isDrawing = false;
    });
    google.maps.event.clearListeners(this.map, "click");
    // Clear temporary markers
    this.tempMarkers.forEach(marker => marker.setMap(null));
    this.tempMarkers = [];
    // Create the polygon with different colors for each polygon
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    const color = colors[this.polygonCount % colors.length];
    const polygonData = [...this.currentPolygonPoints];
    this.currentPolygon = new google.maps.Polygon({
      paths: polygonData,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
      editable: true
    });
    this.currentPolygon.setMap(this.map);
    // Store the polygon and its data
    this.polygons.push(this.currentPolygon);
    this.allPolygonsData.push(polygonData);
    this.polygonCount++;
    this.ngZone.run(() => {
      this.statusText = `Polygon ${this.polygonCount} created! Total polygons: ${this.polygons.length}. Drag marker to test geofences.`;
    });
    this.checkPolygonStatus();
    // Add listener for polygon editing
    this.currentPolygon.addListener("set_at", () => {
      this.updatePolygonPoints();
    });
    this.currentPolygon.addListener("insert_at", () => {
      this.updatePolygonPoints();
    });
    // Reset current polygon points
    this.currentPolygonPoints = [];
  }
  updatePolygonPoints() {
    // Update polygon data when edited
    this.polygons.forEach((polygon, index) => {
      const path = polygon.getPath();
      this.allPolygonsData[index] = [];
      path.forEach(latLng => {
        this.allPolygonsData[index].push({
          lat: latLng.lat(),
          lng: latLng.lng()
        });
      });
    });
    this.checkPolygonStatus();
  }
  enableDrawingManager() {
    // Always allow enabling drawing tools, even after clearing
    if (this.drawingManager) {
      this.drawingManager.setMap(null);
      this.drawingManager = null;
      this.drawingManagerEnabled = false;
    }
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON, google.maps.drawing.OverlayType.CIRCLE, google.maps.drawing.OverlayType.RECTANGLE]
      },
      polygonOptions: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        editable: true
      }
    });
    this.drawingManager.setMap(this.map);
    this.drawingManagerEnabled = true;
    google.maps.event.addListener(this.drawingManager, "overlaycomplete", event => {
      // Don't clear existing polygons - add to the collection
      const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
      const color = colors[this.polygonCount % colors.length];
      // Update the new polygon's appearance
      event.overlay.setOptions({
        strokeColor: color,
        fillColor: color,
        editable: true
      });
      this.polygons.push(event.overlay);
      const path = event.overlay.getPath();
      const polygonData = [];
      path.forEach(latLng => {
        polygonData.push({
          lat: latLng.lat(),
          lng: latLng.lng()
        });
      });
      this.allPolygonsData.push(polygonData);
      this.polygonCount++;
      this.ngZone.run(() => {
        this.statusText = `Polygon ${this.polygonCount} created with drawing tools! Total: ${this.polygons.length}`;
      });
      this.checkPolygonStatus();
      // Add listeners for editing
      event.overlay.addListener("set_at", () => {
        this.updatePolygonPoints();
      });
      event.overlay.addListener("insert_at", () => {
        this.updatePolygonPoints();
      });
    });
  }
  clearPolygon() {
    // Clear the last polygon only
    if (this.polygons.length > 0) {
      const lastPolygon = this.polygons.pop();
      lastPolygon === null || lastPolygon === void 0 || lastPolygon.setMap(null);
      this.allPolygonsData.pop();
      this.polygonCount = Math.max(0, this.polygonCount - 1);
    }
    // Clear temporary markers
    this.tempMarkers.forEach(marker => marker.setMap(null));
    this.tempMarkers = [];
    // Stop drawing mode if active
    if (this.isDrawing) {
      this.isDrawing = false;
      google.maps.event.clearListeners(this.map, "click");
      this.currentPolygonPoints = [];
    }
    this.ngZone.run(() => {
      if (this.polygons.length === 0) {
        this.statusText = "Click 'Draw Polygon' to start drawing a custom geofence";
        this.isInsidePolygon = false;
      } else {
        this.statusText = `${this.polygons.length} polygon(s) remaining. Drag marker to test geofences.`;
        this.checkPolygonStatus();
      }
    });
  }
  clearAllPolygons() {
    // Clear all polygons
    this.polygons.forEach(polygon => polygon.setMap(null));
    this.polygons = [];
    this.allPolygonsData = [];
    this.polygonCount = 0;
    // Clear temporary markers
    this.tempMarkers.forEach(marker => marker.setMap(null));
    this.tempMarkers = [];
    // Stop drawing mode if active
    if (this.isDrawing) {
      this.isDrawing = false;
      google.maps.event.clearListeners(this.map, "click");
      this.currentPolygonPoints = [];
    }
    // Clear drawing manager if enabled
    if (this.drawingManager) {
      this.drawingManager.setMap(null);
      this.drawingManager = null;
    }
    this.drawingManagerEnabled = false;
    this.ngZone.run(() => {
      this.statusText = "All polygons cleared. Click 'Draw Polygon' to start drawing.";
      this.isInsidePolygon = false;
    });
  }
  checkPolygonStatus() {
    if (this.polygons.length === 0 || !this.marker) {
      return;
    }
    const markerPosition = this.marker.getPosition();
    let isInsideAny = false;
    let polygonIndex = -1;
    // Check if marker is inside any polygon
    for (let i = 0; i < this.polygons.length; i++) {
      const isInside = google.maps.geometry.poly.containsLocation(markerPosition, this.polygons[i]);
      if (isInside) {
        isInsideAny = true;
        polygonIndex = i + 1;
        break;
      }
    }
    this.isInsidePolygon = isInsideAny;
    this.ngZone.run(() => {
      if (isInsideAny) {
        this.statusText = `Inside Geofence ${polygonIndex}`;
      } else {
        this.statusText = `Outside all geofences (${this.polygons.length} total)`;
      }
    });
    // Handle geofence transitions
    if (!this.wasInPolygon && isInsideAny) {
      // Entering geofence
      this.wasInPolygon = true;
      this.handleGeofenceEntry(polygonIndex);
    } else if (this.wasInPolygon && !isInsideAny) {
      // Exiting geofence
      this.wasInPolygon = false;
      this.handleGeofenceExit();
    }
  }
  handleGeofenceEntry(polygonIndex) {
    var _this = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const polygonText = polygonIndex ? ` ${polygonIndex}` : "";
      console.log(`Entered geofence area${polygonText}`);
      // Play sound
      _this.enterSound.play().catch(error => console.error("Error playing enter sound:", error));
      // Record event in GeofenceService
      _this.geofenceService.addMockEvent("enter");
      // Show toast notification
      const toast = yield _this.toastCtrl.create({
        header: "Geofence Entry",
        message: `You have entered geofence${polygonText}!`,
        duration: 3000,
        color: "success",
        position: "top"
      });
      yield toast.present();
    })();
  }
  handleGeofenceExit() {
    var _this2 = this;
    return (0,_Users_ananya_Documents_bhargav_1ionic_conference_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Exited geofence area");
      // Play sound
      _this2.exitSound.play().catch(error => console.error("Error playing exit sound:", error));
      // Record event in GeofenceService
      _this2.geofenceService.addMockEvent("exit");
      // Show toast notification
      const toast = yield _this2.toastCtrl.create({
        header: "Geofence Exit",
        message: "You have left the geofence area!",
        duration: 3000,
        color: "warning",
        position: "top"
      });
      yield toast.present();
    })();
  }
}
_MapPage = MapPage;
_MapPage.ɵfac = function MapPage_Factory(t) {
  return new (t || _MapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_geofence_service__WEBPACK_IMPORTED_MODULE_1__.GeofenceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
};
_MapPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _MapPage,
  selectors: [["app-map"]],
  viewQuery: function MapPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 45,
  vars: 13,
  consts: [["mapPlotting", ""], ["slot", "start"], ["id", "mapPlotting", 2, "height", "70vh", "width", "100%"], ["size", "6"], ["expand", "block", "fill", "solid", "color", "primary", 3, "click", "disabled"], ["name", "create", "slot", "start"], ["expand", "block", "fill", "outline", "color", "secondary", 3, "click", "disabled"], ["name", "checkmark", "slot", "start"], ["expand", "block", "fill", "outline", "color", "warning", 3, "click", "disabled"], ["name", "trash", "slot", "start"], ["expand", "block", "fill", "outline", "color", "danger", 3, "click", "disabled"], ["size", "12"], ["expand", "block", "fill", "outline", "color", "tertiary", 3, "click", "disabled"], ["name", "shapes", "slot", "start"], [3, "ngClass"], [4, "ngIf"]],
  template: function MapPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Interactive Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 2, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-card")(10, "ion-card-header")(11, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Drawing Tools");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-card-content")(14, "ion-row")(15, "ion-col", 3)(16, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.startDrawing());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-col", 3)(20, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.finishDrawing());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Finish ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 3)(25, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_25_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearPolygon());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Clear Last ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-col", 3)(29, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearAllPolygons());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Clear All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 11)(34, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_34_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.enableDrawingManager());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Google Drawing Tools ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-item")(38, "ion-label")(39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, MapPage_ion_item_43_Template, 6, 1, "ion-item", 15)(44, MapPage_ion_item_44_Template, 6, 1, "ion-item", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isDrawing);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isDrawing ? "Drawing..." : "Draw Polygon", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isDrawing || ctx.currentPolygonPoints.length < 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.polygons.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.polygons.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.drawingManagerEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c1, ctx.isInsidePolygon, !ctx.isInsidePolygon));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.statusText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDrawing && ctx.currentPolygonPoints.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.polygons.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["#mapPlotting[_ngcontent-%COMP%] {\n  height: 70vh;\n  width: 100%;\n}\n\n.inside-geofence[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n  font-weight: bold;\n}\n\n.outside-geofence[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI21hcFBsb3R0aW5nIHtcbiAgaGVpZ2h0OiA3MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluc2lkZS1nZW9mZW5jZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3V0c2lkZS1nZW9mZW5jZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_map_map_module_ts.js.map