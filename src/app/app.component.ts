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
      icon: "calendar",
    },
    {
      title: "Speakers",
      url: "/app/tabs/speakers",
      icon: "people",
    },
    {
      title: "Map",
      url: "/app/tabs/map",
      icon: "map",
    },
    {
      title: "About",
      url: "/app/tabs/about",
      icon: "information-circle",
    },
  ];
  loggedIn = false;
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
    // const toast = await this.toastCtrl.create({
    //   message: `started`,
    // });
    // await toast.present();

    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();
    this.subscribeToUpdates();
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();
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

    this.getCurrentLocation();
    this.watchPosition();
  }

  watchPosition() {
    this.wait = Geolocation.watchPosition({}, async (position, err) => {
      if (err) {
        console.error("Error getting position:", err);
        return;
      }

      this.ngZone.run(async () => {
        const { latitude: lat, longitude: lng } = position.coords;
        console.log("watch position lat long:", lat, lng);

        try {
          const address = await this.getAddressFromCoordinates(lat, lng);
          console.log(`Address: ${address}`);
        } catch (error) {
          console.error("Error:", error);
        }
      });
    });
  }

  async getAddressFromCoordinates(lat: number, lng: number): Promise<string> {
    const apiKey = "AIzaSyCLRpRQ2_5XKdtVEmakB2ewtDcuP55ZeQA";
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
      console.log(
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
      );
      const apiKey = "AIzaSyCLRpRQ2_5XKdtVEmakB2ewtDcuP55ZeQA";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
          const address = data.results[0].formatted_address;
          console.log(`Address: ${address}`);
        } else {
          console.log("No results found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Failed to get position:", error);
    }

    console.log(this.position);

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
  checkLoginStatus() {
    return this.userData.isLoggedIn().then((loggedIn) => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener("user:login", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:signup", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:logout", () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl("/app/tabs/schedule");
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
    this.router.navigateByUrl("/tutorial");
  }
}
