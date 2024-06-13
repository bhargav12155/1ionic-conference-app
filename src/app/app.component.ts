import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import { MenuController, Platform, ToastController } from "@ionic/angular";

import { Storage } from "@ionic/storage-angular";

import { UserData } from "./providers/user-data";
import { Geolocation } from "@capacitor/geolocation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Schedule",
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

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
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
    this.getCurrentLocation();
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
  async getCurrentLocation() {
    // const toast3 = await this.toastCtrl.create({
    //   message: `started1`,
    // });
    // await toast3.present();

    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current position:", coordinates);
    // const toast2 = await this.toastCtrl.create({
    //   message: `Latitude: ${coordinates}`,
    // });
    // await toast2.present();

    try {
      const position = await Geolocation.getCurrentPosition();
      this.position = position;
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // const toast = await this.toastCtrl.create({
      //   message: `Latitude: ${latitude}, Longitude: ${longitude}`,
      //   duration: 3000,
      //   position: "bottom",
      // });
      // await toast.present();
    } catch (error) {
      const toast1 = await this.toastCtrl.create({
        message: error.toString(),
      });
      await toast1.present();
      console.error("Error getting location:", error);
      const toast = await this.toastCtrl.create({
        message: `Error getting location: ${error.message}`,
        duration: 3000,
        position: "bottom",
      });
      await toast1.present();
    }
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();

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
