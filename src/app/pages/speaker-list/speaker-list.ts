import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Geolocation } from "@capacitor/geolocation";

@Component({
  selector: "page-speaker-list",
  templateUrl: "speaker-list.html",
  styleUrls: ["./speaker-list.scss"],
})
export class SpeakerListPage implements OnInit {
  speakers: any[] = [];
  position: any;
  map: any;
  lat: any;
  lng: any;
  watchId: Promise<string> | undefined;

  @ViewChild("map", { static: false }) mapElement: ElementRef;

  constructor(public confData: ConferenceData) {}

  async ngOnInit() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location === "denied") {
        await Geolocation.requestPermissions();
      }
      this.watchPosition();
    } catch (e) {
      console.error(e);
    }
  }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  async watchPosition() {
    try {
      this.watchId = Geolocation.watchPosition({}, (position, err) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log("Current position:", this.lat, this.lng);
        }
        if (err) {
          console.error("Error watching position:", err);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  async ionViewWillLeave() {
    if (this.watchId) {
      const id = await this.watchId;
      await Geolocation.clearWatch({ id });
    }
  }
}
