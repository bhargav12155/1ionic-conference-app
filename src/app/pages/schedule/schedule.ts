import {
  Component,
  ViewChild,
  OnInit,
  NgZone,
  ElementRef,
  AfterViewInit,
  Inject,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  IonList,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
  Config,
} from "@ionic/angular";
import { darkStyle } from "../../pages/map/map-dark-style";
import { Geolocation } from "@capacitor/geolocation";

import { ScheduleFilterPage } from "../schedule-filter/schedule-filter";
import { ConferenceData } from "../../providers/conference-data";
import { UserData } from "../../providers/user-data";
import { DOCUMENT } from "@angular/common";
import { DeviceDetectorService } from "ngx-device-detector";
import { HttpClient } from "@angular/common/http";

import { Platform } from "@ionic/angular";

@Component({
  selector: "page-schedule",
  templateUrl: "schedule.html",
  styleUrls: ["./schedule.scss"],
})
export class SchedulePage implements OnInit, AfterViewInit {
  // Gets a reference to the list element
  @ViewChild("scheduleList", { static: true }) scheduleList: IonList;
  @ViewChild("mapPlotting", { static: false }) mapElement: ElementRef;

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  wait: Promise<string>;
  deviceInfo: import("ngx-device-detector").DeviceInfo;
  ipAddress: string;
  polygons: any = [];

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    public ngZone: NgZone,
    private deviceService: DeviceDetectorService,
    private http: HttpClient,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.updateSchedule();

      // this.addGeofences();
      // this.initializeGeofenceEvents();
      this.deviceInfo = this.deviceService.getDeviceInfo();
      this.getIpAddress();
      this.ios = this.config.get("mode") === "ios";
    });
  }
  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confData
      .getTimeline(
        this.dayIndex,
        this.queryText,
        this.excludeTracks,
        this.segment
      )
      .subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        this.groups = data.groups;
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updateSchedule();
    }
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, "Favorite already added");
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [
          {
            text: "Close",
            role: "cancel",
          },
        ],
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }
  }
  getIpAddress(): void {
    this.http
      .get<{ ip: string }>("https://api.ipify.org?format=json")
      .subscribe(
        (data) => {
          this.ipAddress = data.ip;
        },
        (error) => {
          console.error("Error fetching IP address:", error);
        }
      );
  }
  isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }
  async removeFavorite(
    slidingItem: HTMLIonItemSlidingElement,
    sessionData: any,
    title: string
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: "Would you like to remove this session from your favorites?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
        {
          text: "Remove",
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
      ],
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  watchPosition(googleMaps) {
    console.log("watchposition function");

    this.wait = Geolocation.watchPosition(
      {
        timeout: 20000, // Increase timeout duration to 20 seconds
        maximumAge: 0,
        enableHighAccuracy: true,
      },
      async (position, err) => {
        console.log("position :", position);
        console.log("err in watch postion:", err);

        if (err) {
          if (err.code === 3) {
            console.error("Timeout expired while trying to get the position.");
            // Optionally, handle timeout (e.g., use fallback)
          }
          return;
        }

        this.ngZone.run(async () => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          try {
            const isInAnyPolygon = await this.isWithinPolygon(currentPosition);
            console.log(isInAnyPolygon);

            if (isInAnyPolygon) {
              console.log(
                "Position is within one of the polygon bounds. Triggering action..."
              );
            } else {
              console.log("Position is outside all polygon bounds.");
            }

            const address = await this.getAddressFromCoordinates(
              position.coords.latitude,
              position.coords.longitude
            );
            console.log(`Waits and gets the reverse address =: ${address}`);
          } catch (error) {
            console.error("Error:", error);
          }

          // Plot the new point on the map
          this.addMarker(googleMaps, currentPosition);
          this.map.setCenter(currentPosition);
        });
      }
    );
  }

  apiKey = "AIzaSyCLRpRQ2_5XKdtVEmakB2ewtDcuP55ZeQA";

  async getAddressFromCoordinates(lat: number, lng: number): Promise<string> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      return data.results[0].formatted_address;
    } else {
      throw new Error("No results found");
    }
  }

  async getCurrentLocation() {
    // const toast3 = await this.toastCtrl.create({
    //   message: `started1`,
    // });
    // await toast3.present();

    // const coordinates = await Geolocation.getCurrentPosition();
    // console.log("Current position:", coordinates);
    // const toast2 = await this.toastCtrl.create({
    //   message: `Latitude: ${coordinates}`,
    // });
    // await toast2.present();

    // try {

    try {
      const position = await getPositionWithRetry();
      console.log(
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
      );
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${this.apiKey}`;
      this.plotMap(position.coords);
      const mockPosition = {
        coords: {
          latitude: position.coords ? position.coords.latitude : 19.075984,
          longitude: position.coords ? position.coords.longitude : 72.877656,
        },
      };
      console.log(
        "this is mocked position when trying to call location :",
        mockPosition
      );

      if (this.isWithinBounds(mockPosition)) {
        console.log(
          "Position is within the specified bounds. Triggering action..."
        );
        // Your action here
      } else {
        console.log("Position is outside the specified bounds.");
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
          const address = data.results[0].formatted_address;
          console.log(`Address in gettin current locatiomn : ${address}`);
        } else {
          console.log("No results found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Failed to get position:", error);
    }

    // console.log(this.position);

    // const toast = await this.toastCtrl.create({
    //   message: `Latitude: ${latitude}, Longitude: ${longitude}`,
    //   duration: 3000,
    //   position: "bottom",
    // });
    // await toast.present();
    // } catch (error) {
    //   const toast1 = await this.toastCtrl.create({
    //     message: error.toString(),
    //   });
    //   await toast1.present();
    //   console.error("Error getting location:", error);
    //   const toast = await this.toastCtrl.create({
    //     message: `Error getting location: ${error.message}`,
    //     duration: 3000,
    //     position: "bottom",
    //   });
    //   await toast1.present();
    // }

    // Example usage with a mock position
    // const mockPosition = {
    //   coords: {
    //     latitude: 40.709,
    //     longitude: -74.01,
    //   },
    // };
    // console.log("**");
    // console.log("**");
    // console.log("**");
    // console.log("**");

    // if (this.isWithinBounds(mockPosition)) {
    //   console.log(
    //     "Position is within the specified bounds. Triggering action..."
    //   );
    //   // Your action here
    // } else {
    //   console.log("Position is outside the specified bounds.");
    // }
  }
  getCoordsFromLocation(
    location: string
  ): { latitude: number; longitude: number } | null {
    // Sample mapping for locations. Replace with actual coordinates or a service.
    const locationCoords = {
      "Dining Hall": { latitude: 38.89511, longitude: -77.03637 }, // Washington, D.C.
      "Hall 2": { latitude: 32.36681, longitude: -86.30057 }, // Montgomery, AL
      "Executive Ballroom": { latitude: 58.30193, longitude: -134.41974 }, // Juneau, AK
      "Hall 3": { latitude: 33.44838, longitude: -112.07404 }, // Phoenix, AZ
      "Hall 1": { latitude: 34.74648, longitude: -92.28959 }, // Little Rock, AR
      "Grand Ballroom A": { latitude: 38.57669, longitude: -121.49342 }, // Sacramento, CA
    };
    return locationCoords[location] || null;
  }
  async updateMap(session: any) {
    const coords = this.getCoordsFromLocation(session.location);
    if (coords) {
      // await this.plotMap(coords);
    } else {
      console.error("Coordinates for location not found.");
    }
  }
  async plotMap(coords?) {
    const appEl = this.doc.querySelector("ion-app");
    let isDark = false;
    let style = [];
    if (appEl.classList.contains("ion-palette-dark")) {
      style = darkStyle;
    }

    const googleMaps = await getGoogleMaps(this.apiKey);

    let map;
    const centerCoords = coords
      ? { lat: coords.latitude, lng: coords.longitude }
      : { lat: 19.075984, lng: 72.877656 };

    const mapEle = this.mapElement.nativeElement;

    map = new googleMaps.Map(mapEle, {
      center: centerCoords,
      zoom: 16,
      styles: style,
    });

    const infoWindow = new googleMaps.InfoWindow({
      content: `<h5>test test</h5>`,
    });

    const marker = new googleMaps.Marker({
      position: centerCoords,
      map,
      title: "markerData.name",
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    googleMaps.event.addListenerOnce(map, "idle", () => {
      mapEle.classList.add("show-map");
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const el = mutation.target as HTMLElement;
          isDark = el.classList.contains("ion-palette-dark");
          if (map && isDark) {
            map.setOptions({ styles: darkStyle });
          } else if (map) {
            map.setOptions({ styles: [] });
          }
        }
      });
    });

    observer.observe(appEl, {
      attributes: true,
    });
  }

  async ngAfterViewInit() {
    // this.plotMap();
    this.initPolygonMap();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
  map;
  polygon;

  async initPolygonMap() {
    const googleMaps = await this.initializeGoogleMaps();
    const mockPosition = await this.getMockPosition();
    this.map = this.createMap(googleMaps, mockPosition);
    this.addMarker(googleMaps, mockPosition);
    this.setupClickListener(googleMaps);
    this.watchPosition(googleMaps);
  }

  async initializeGoogleMaps() {
    const appEl = this.doc.querySelector("ion-app");
    let style = appEl.classList.contains("ion-palette-dark") ? darkStyle : [];
    return await getGoogleMaps(this.apiKey);
  }

  async getMockPosition() {
    const position = await getPositionWithRetry();
    return {
      coords: {
        latitude: position.coords ? position.coords.latitude : 19.075984,
        longitude: position.coords ? position.coords.longitude : 72.877656,
      },
    };
  }

  createMap(googleMaps, mockPosition) {
    const mapEle = this.mapElement.nativeElement;
    const centerCoords = {
      lat: mockPosition.coords.latitude,
      lng: mockPosition.coords.longitude,
    };
    return new googleMaps.Map(mapEle, {
      center: centerCoords,
      zoom: 13,
    });
  }

  addMarker(googleMaps, mockPosition) {
    console.log("mockPosition :");
    console.log("mockPosition :", mockPosition);

    const marker = new googleMaps.Marker({
      position: {
        lat: mockPosition?.lat
          ? mockPosition.lat
          : mockPosition.coords.latitude,
        lng: mockPosition.lng
          ? mockPosition.lng
          : mockPosition.coords.longitude,
      },
      map: this.map,
      title: "markerData.name",
    });

    const infoWindow = new googleMaps.InfoWindow({
      content: `<h5>test test</h5>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
  }

  async setupClickListener(googleMaps) {
    let gotPolygonCoords = [];
    let lastClickTime = 0;
    let clickTimeout: any;

    googleMaps.event.addListener(this.map, "click", async (event) => {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - lastClickTime;

      console.log("below are lats and lings after clicking");
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());

      if (timeDifference > 2000 && gotPolygonCoords.length > 0) {
        gotPolygonCoords = [];
        console.log("******");
        console.log("******");
        console.log("******");
        console.log("******");
        // await this.handlePolygonCreation(googleMaps,gotPolygonCoords);
      }

      gotPolygonCoords.push({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });

      console.log("gotPolygonCoords:", gotPolygonCoords);

      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }

      clickTimeout = setTimeout(async () => {
        if (gotPolygonCoords.length > 0) {
          await this.handlePolygonCreation(googleMaps, gotPolygonCoords);
          gotPolygonCoords = [];
          // this.polygons.push(gotPolygonCoords);
        }
      }, 2000);

      lastClickTime = currentTime;
    });
  }

  async handlePolygonCreation(googleMaps, coords) {
    console.log("Creating polygon with coordinates:", coords);
    console.log("Creating polygon with coordinates:", coords);

    const polygon = new googleMaps.Polygon({
      paths: coords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "green",
      fillOpacity: 0.35,
    });

    polygon.setMap(this.map);
    this.polygons.push(polygon); // Store the created polygon

    const mockPosition = await this.getMockPosition(); // Use the updated mockPosition
    const isInPolygon = await this.isWithinPolygon(mockPosition);
    this.handlePolygonCheck(isInPolygon);
  }

  handlePolygonCheck(isInPolygon) {
    console.log("I am in handle polygin check :", isInPolygon);

    if (isInPolygon) {
      console.log(
        "Position is within the polygon bounds. Triggering action..."
      );
      // Your action here
    } else {
      console.log("Position is outside the polygon bounds.");
    }
  }

  // Function to check if the current position is within any polygon
  async isWithinAnyPolygon(position) {
    return this.polygons.some((polygon) =>
      this.isLocationInPolygon(position, polygon)
    );
  }
  // Function to check if a location is within a specific polygon
  isLocationInPolygon(location, polygon) {
    const paths = polygon.getPath();
    let inside = false;
    for (let i = 0, j = paths.getLength() - 1; i < paths.getLength(); j = i++) {
      const xi = paths.getAt(i).lat(),
        yi = paths.getAt(i).lng();
      const xj = paths.getAt(j).lat(),
        yj = paths.getAt(j).lng();

      const intersect =
        yi > location.lng !== yj > location.lng &&
        location.lat < ((xj - xi) * (location.lng - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  async isWithinPolygon(position) {
    console.log("Checking polygon bounds");
    console.log("position:", position);

    // Ensure Google Maps API is loaded
    const googleMaps = await getGoogleMaps(this.apiKey);

    // Create a LatLng object from the position coordinates
    const latLng = new googleMaps.LatLng(position.lat, position.lng);

    console.log("this.polygons :", this.polygons);

    // Check if the position is within any of the polygons
    for (const polygon of this.polygons) {
      if (googleMaps.geometry.poly.containsLocation(latLng, polygon)) {
        return true;
      }
    }
    return false;
  }

  handleAction() {
    console.log("handling here");
  }
  // Function to check if the position is within the bounds
  isWithinBounds(position) {
    // Define the coordinates of the rectangle
    const bounds = {
      north: 40.7128, // Upper latitude
      south: 40.706, // Lower latitude
      east: -74.0059, // Right longitude
      west: -74.013, // Left longitude
    };

    const { latitude, longitude } = position.coords;
    return (
      latitude <= bounds.north &&
      latitude >= bounds.south &&
      longitude <= bounds.east &&
      longitude >= bounds.west
    );
  }
  getCoordinatesByclicking() {}
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject("google maps not available");
      }
    };
  });
}

async function getPositionWithRetry(retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const position = await Geolocation.getCurrentPosition({
        timeout: 5000, // 5 seconds
        enableHighAccuracy: true,
      });
      return position;
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}
