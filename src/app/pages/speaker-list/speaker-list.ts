import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Geofence } from "@ionic-native/geofence/ngx";

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

  @ViewChild("map", { static: false }) mapElement: ElementRef;

  constructor(
    public confData: ConferenceData,
    private geolocation: Geolocation
  ) {}

  ngOnInit(): void {
    // this.loadMap();
    // this.watchPosition();
    console.log("&&&&&");
    console.log("&&&&&");
    console.log("&&&&&");
    console.log("&&&&&");

    if (navigator.geolocation) {
      alert("navigator . geo location exosts");
      console.log("navigator . geo location exosts");
    } else {
      alert("location doesnt exist");
      console.log("navigator . geo location exosts not");
    }
  }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  watchPosition() {
    // Watch position changes
    let watch = this.geolocation.watchPosition(
      (position) => {
        // data is output only when position changes
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // getPlaces() {
  //   let mapCenter = { lat: -6.854359, lng: 107.598455 };
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: mapCenter,
  //     zoom: 17,
  //   });

  //   let service = new google.maps.places.PlacesService(this.map);
  //   service.nearbySearch(
  //     {
  //       location: mapCenter,
  //       radius: 500,
  //       type: ["restaurant"],
  //     },
  //     (results, status) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK) {
  //         for (let i = 0; i < results.length; i++) {
  //           console.log(results[i].name);
  //           this.addGeofence(
  //             results[i].id,
  //             i + 1,
  //             results[i].geometry.location.lat(),
  //             results[i].geometry.location.lng(),
  //             results[i].name,
  //             results[i].vicinity
  //           );
  //         }
  //       }
  //     }
  //   );
  // }

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
