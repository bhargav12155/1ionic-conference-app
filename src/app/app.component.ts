import { Component, NgZone, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import { MenuController, Platform, ToastController } from "@ionic/angular";

import { Storage } from "@ionic/storage-angular";

import { UserData } from "./providers/user-data";
import { Geolocation } from "@capacitor/geolocation";
import { DeviceDetectorService } from "ngx-device-detector";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Users",
      url: "/app/tabs/schedule",
      icon: "people",
    },
    {
      title: "Activity Log",
      url: "/app/tabs/activity",
      icon: "time",
    },
  ];
  loggedIn = false; // No authentication system
  dark = false;
  position: any;
  wait: Promise<string>;
  deviceInfo: import("ngx-device-detector").DeviceInfo;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private deviceService: DeviceDetectorService,
    public ngZone: NgZone,
    private toastCtrl: ToastController // private nativeGeocoder: NativeGeocoder
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (this.platform.is("hybrid")) {
      // Hybrid-specific logic here
    }

    await this.storage.create();
    this.subscribeToUpdates();
  }

  async ngOnInit() {
    await this.storage.create();
    this.deviceInfo = this.deviceService.getDeviceInfo();

    this.swUpdate.versionUpdates.subscribe(async (res) => {
      const toast = await this.toastCtrl.create({
        message: "Update available!",
        position: "bottom",
        buttons: [
          {
            role: "cancel",
            text: "Reload",
          },
        ],
      });

      await toast.present();

      toast.onDidDismiss().then(async () => {
        try {
          await this.swUpdate.activateUpdate();
          window.location.reload();
        } catch (error) {
          console.error("Error activating update:", error);
        }
      });
    });
  }

  watchPosition() {
    this.wait = Geolocation.watchPosition({}, async (position, err) => {
      if (err) {
        console.error("Error getting position:", err);
        return;
      }

      this.ngZone.run(async () => {
        const { latitude: lat, longitude: lng } = position.coords;
        // Example geofence: Trinidad (10.6918, -61.2225), radius 1km
        const geofenceLat = 10.6918;
        const geofenceLng = -61.2225;
        const radiusMeters = 1000;
        const dist = this.getDistanceFromLatLonInMeters(
          lat,
          lng,
          geofenceLat,
          geofenceLng
        );
        if (dist <= radiusMeters) {
          this.onGeofenceEnter();
        }
      });
    });
  }

  // Haversine formula for distance in meters
  getDistanceFromLatLonInMeters(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371000; // Radius of the earth in m
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in m
    return d;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  // Called when user enters geofence
  onGeofenceEnter() {
    console.log("Someone is in the area. Do something..");
    // Log device details
    console.log("Device details of entrant:", this.deviceInfo);
    // You can add more actions here (e.g., show toast, trigger notification, etc.)
  }

  async getAddressFromCoordinates(lat: number, lng: number): Promise<string> {
    const apiKey = "AIzaSyABw7DX0sg8fmhPt9H6JdlIGO-GikNgWhI";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

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

    try {
      const position = await getPositionWithRetry();
      // console.log(
      //   `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
      // );
      const apiKey = "AIzaSyABw7DX0sg8fmhPt9H6JdlIGO-GikNgWhI";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
          const address = data.results[0].formatted_address;
          // console.log(`Address: ${address}`);
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
  }
  subscribeToUpdates() {
    this.swUpdate.versionUpdates.subscribe(async (res) => {
      const toast = await this.toastCtrl.create({
        message: "Update available!",
        position: "bottom",
        buttons: [
          {
            role: "cancel",
            text: "Reload",
          },
        ],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
    this.router.navigateByUrl("/tutorial");
  }
}
