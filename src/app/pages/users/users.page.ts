import { Component, OnInit } from "@angular/core";
import { GeofenceService, UserInfo } from "../../providers/geofence.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
})
export class UsersPage implements OnInit {
  users: UserInfo[] = [];

  constructor(private geofenceService: GeofenceService) {}

  ngOnInit() {
    this.loadUsers();
    setInterval(() => {
      this.loadUsers();
    }, 5000); // Refresh every 5 seconds
  }

  loadUsers() {
    const currentUser = this.geofenceService.getCurrentUser();
    const otherUsers = this.geofenceService.getUsers();
    this.users = currentUser ? [currentUser, ...otherUsers] : otherUsers;
  }

  formatTimestamp(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }

  getStatusColor(status: string) {
    switch (status) {
      case "inside":
        return "success";
      case "outside":
        return "medium";
      case "entering":
        return "primary";
      case "exiting":
        return "warning";
      default:
        return "medium";
    }
  }
}
