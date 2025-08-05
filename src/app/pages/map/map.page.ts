import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
} from "@angular/core";
import { ToastController } from "@ionic/angular";
import { GeofenceService } from "../../providers/geofence.service";

declare const google: any;

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit, AfterViewInit {
  @ViewChild("mapPlotting", { static: false }) mapElement: ElementRef;

  map: any;
  marker: any;
  polygons: any[] = [];
  currentPolygon: any = null;
  allPolygonsData: any[][] = [];
  currentPolygonPoints: any[] = [];
  isInsidePolygon: boolean = false;
  statusText: string =
    "Click 'Draw Polygon' to start drawing a custom geofence";
  wasInPolygon: boolean = false;
  isDrawing: boolean = false;
  drawingManagerEnabled: boolean = false;
  drawingManager: any;
  tempMarkers: any[] = [];
  polygonCount: number = 0;
  apiKey = "AIzaSyABw7DX0sg8fmhPt9H6JdlIGO-GikNgWhI";
  enterSound: HTMLAudioElement;
  exitSound: HTMLAudioElement;

  constructor(
    private toastCtrl: ToastController,
    private geofenceService: GeofenceService,
    private ngZone: NgZone
  ) {
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.createMapAt(userLatLng, 20);
        },
        (error) => {
          console.error("Error getting user location:", error);
          this.handleLocationError(error);
          const fallbackLatLng = { lat: 10.6918, lng: -61.2225 };
          this.createMapAt(fallbackLatLng, 12);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 } // Add these options
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      const fallbackLatLng = { lat: 10.6918, lng: -61.2225 };
      this.createMapAt(fallbackLatLng, 12);
    }
  }
  private handleLocationError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.toastCtrl
          .create({
            message: "User denied the request for Geolocation.",
            duration: 3000,
          })
          .then((toast) => toast.present());
        break;
      case error.POSITION_UNAVAILABLE:
        this.toastCtrl
          .create({
            message: "Location information is unavailable.",
            duration: 3000,
          })
          .then((toast) => toast.present());
        break;
      case error.TIMEOUT:
        this.toastCtrl
          .create({
            message: "The request to get user location timed out.",
            duration: 3000,
          })
          .then((toast) => toast.present());
        break;
      case error.UNKNOWN_ERROR:
        this.toastCtrl
          .create({
            message: "An unknown error occurred.",
            duration: 3000,
          })
          .then((toast) => toast.present());
        break;
    }
  }
  createMapAt(centerLatLng: { lat: number; lng: number }, zoomLevel: number) {
    const mapOptions = {
      center: centerLatLng,
      zoom: zoomLevel, // Use the passed zoomLevel
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Create draggable marker at center
    this.marker = new google.maps.Marker({
      position: centerLatLng,
      map: this.map,
      draggable: true,
      title: "Drag me to simulate movement!",
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

  onMapClick(event: any) {
    if (!this.isDrawing) return;

    const latLng = event.latLng;
    this.currentPolygonPoints.push({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });

    // Add a temporary marker to show the point
    const colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
    ];
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
        strokeColor: "#FFFFFF",
      },
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
    this.tempMarkers.forEach((marker) => marker.setMap(null));
    this.tempMarkers = [];

    // Create the polygon with different colors for each polygon
    const colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
    ];
    const color = colors[this.polygonCount % colors.length];

    const polygonData = [...this.currentPolygonPoints];
    this.currentPolygon = new google.maps.Polygon({
      paths: polygonData,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
      editable: true,
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
      path.forEach((latLng: any) => {
        this.allPolygonsData[index].push({
          lat: latLng.lat(),
          lng: latLng.lng(),
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
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      polygonOptions: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        editable: true,
      },
    });

    this.drawingManager.setMap(this.map);
    this.drawingManagerEnabled = true;

    google.maps.event.addListener(
      this.drawingManager,
      "overlaycomplete",
      (event: any) => {
        // Don't clear existing polygons - add to the collection
        const colors = [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
        ];
        const color = colors[this.polygonCount % colors.length];

        // Update the new polygon's appearance
        event.overlay.setOptions({
          strokeColor: color,
          fillColor: color,
          editable: true,
        });

        this.polygons.push(event.overlay);
        const path = event.overlay.getPath();
        const polygonData: any[] = [];

        path.forEach((latLng: any) => {
          polygonData.push({
            lat: latLng.lat(),
            lng: latLng.lng(),
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
      }
    );
  }

  clearPolygon() {
    // Clear the last polygon only
    if (this.polygons.length > 0) {
      const lastPolygon = this.polygons.pop();
      lastPolygon?.setMap(null);
      this.allPolygonsData.pop();
      this.polygonCount = Math.max(0, this.polygonCount - 1);
    }

    // Clear temporary markers
    this.tempMarkers.forEach((marker) => marker.setMap(null));
    this.tempMarkers = [];

    // Stop drawing mode if active
    if (this.isDrawing) {
      this.isDrawing = false;
      google.maps.event.clearListeners(this.map, "click");
      this.currentPolygonPoints = [];
    }

    this.ngZone.run(() => {
      if (this.polygons.length === 0) {
        this.statusText =
          "Click 'Draw Polygon' to start drawing a custom geofence";
        this.isInsidePolygon = false;
      } else {
        this.statusText = `${this.polygons.length} polygon(s) remaining. Drag marker to test geofences.`;
        this.checkPolygonStatus();
      }
    });
  }

  clearAllPolygons() {
    // Clear all polygons
    this.polygons.forEach((polygon) => polygon.setMap(null));
    this.polygons = [];
    this.allPolygonsData = [];
    this.polygonCount = 0;

    // Clear temporary markers
    this.tempMarkers.forEach((marker) => marker.setMap(null));
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
      this.statusText =
        "All polygons cleared. Click 'Draw Polygon' to start drawing.";
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
      const isInside = google.maps.geometry.poly.containsLocation(
        markerPosition,
        this.polygons[i]
      );
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

  async handleGeofenceEntry(polygonIndex?: number) {
    const polygonText = polygonIndex ? ` ${polygonIndex}` : "";
    console.log(`Entered geofence area${polygonText}`);

    // Play sound
    this.enterSound
      .play()
      .catch((error) => console.error("Error playing enter sound:", error));

    // Record event in GeofenceService
    this.geofenceService.addMockEvent("enter");

    // Show toast notification
    const toast = await this.toastCtrl.create({
      header: "Geofence Entry",
      message: `You have entered geofence${polygonText}!`,
      duration: 3000,
      color: "success",
      position: "top",
    });
    await toast.present();
  }

  async handleGeofenceExit() {
    console.log("Exited geofence area");

    // Play sound
    this.exitSound
      .play()
      .catch((error) => console.error("Error playing exit sound:", error));

    // Record event in GeofenceService
    this.geofenceService.addMockEvent("exit");

    // Show toast notification
    const toast = await this.toastCtrl.create({
      header: "Geofence Exit",
      message: "You have left the geofence area!",
      duration: 3000,
      color: "warning",
      position: "top",
    });
    await toast.present();
  }
}
