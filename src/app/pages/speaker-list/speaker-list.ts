import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { GeofenceService, UserInfo } from "../../providers/geofence.service";

@Component({
  selector: "page-speaker-list",
  templateUrl: "speaker-list.html",
  styleUrls: ["./speaker-list.scss"],
})
export class SpeakerListPage implements OnInit {
  currentUser: UserInfo | null = null;
  usersInGeofence: UserInfo[] = [];
  allUsers: UserInfo[] = [];

  constructor(
    public confData: ConferenceData,
    private geofenceService: GeofenceService
  ) {}

  async ngOnInit() {
    // Initialize geofence service
    await this.geofenceService.initializeCurrentUser();
    this.geofenceService.simulateOtherUsers();

    // Update data every 5 seconds
    setInterval(() => {
      this.updateUserData();
    }, 5000);

    this.updateUserData();
  }

  updateUserData() {
    this.currentUser = this.geofenceService.getCurrentUser();
    this.usersInGeofence = this.geofenceService.getUsersInGeofence();
    this.allUsers = this.geofenceService.getUsers();
  }

  getStatusColor(status: string): string {
    switch (status) {
      case "inside":
        return "success";
      case "entering":
        return "warning";
      case "exiting":
        return "warning";
      case "outside":
        return "medium";
      default:
        return "medium";
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case "inside":
        return "Inside Geofence";
      case "entering":
        return "Entering...";
      case "exiting":
        return "Exiting...";
      case "outside":
        return "Outside Geofence";
      default:
        return "Unknown";
    }
  }

  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  async ionViewWillLeave() {
    await this.geofenceService.stopWatching();
  }
}
