import { Component, ElementRef, ViewChild } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Geofence } from "@ionic-native/geofence";
// import { NavController, Platform } from "@ionic/angular/core";
declare var google;
let map: any;
@Component({
  selector: "page-speaker-list",
  templateUrl: "speaker-list.html",
  styleUrls: ["./speaker-list.scss"],
})
export class SpeakerListPage {
  speakers: any[] = [];
  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }
  @ViewChild("map") mapElement: ElementRef;

  constructor(
    // public navCtrl: NavController,
    public confData: ConferenceData // public platform: Platform,
  ) // private geofence: Geofence
  {
    // geofence.initialize().then(
    //   () => console.log("Geofence Plugin Ready"),
    //   (err) => console.log(err)
    // );
    // this.removeAllGeofence();
    // platform.ready().then(() => {
    //   this.getPlaces();
    // });
  }

  getPlaces() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -6.854359, lng: 107.598455 },
      zoom: 17,
    });
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: { lat: -6.854359, lng: 107.598455 },
        radius: 500,
        type: ["restaurant"],
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            console.log(results[i].name);
            this.addGeofence(
              results[i].id,
              i + 1,
              results[i].geometry.location.lat(),
              results[i].geometry.location.lng(),
              results[i].name,
              results[i].vicinity
            );
          }
        }
      }
    );
  }

  private addGeofence(id, idx, lat, lng, place, desc) {
    let fence = {
      id: id,
      latitude: lat,
      longitude: lng,
      radius: 50,
      transitionType: 3,
      notification: {
        id: idx,
        title: "You crossed " + place,
        text: desc,
        openAppOnClick: true,
      },
    };

    // this.geofence.addOrUpdate(fence).then(
    //   () => console.log("Geofence added"),
    //   (err) => console.log("Geofence failed to add")
    // );
  }

  private removeAllGeofence() {
    // this.geofence.removeAll();
  }
}
