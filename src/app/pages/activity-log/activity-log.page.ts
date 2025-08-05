import { Component, OnInit } from "@angular/core";
import {
  GeofenceService,
  GeofenceEvent,
} from "../../providers/geofence.service";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.page.html",
  styleUrls: ["./activity-log.page.scss"],
})
export class ActivityLogPage implements OnInit {
  geofenceEvents: GeofenceEvent[] = [];

  constructor(private geofenceService: GeofenceService) {}

  ngOnInit() {
    console.log("ActivityLogPage: ngOnInit called");
    this.loadEvents();

    // Refresh events every 10 seconds
    setInterval(() => {
      this.loadEvents();
    }, 10000);
  }

  loadEvents() {
    console.log("ActivityLogPage: Loading events...");
    this.geofenceEvents = this.geofenceService.getGeofenceEvents();
    console.log("ActivityLogPage: Loaded events:", this.geofenceEvents.length);
  }

  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  formatDuration(duration: number): string {
    if (!duration) return "";

    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  getEventColor(type: string): string {
    return type === "enter" ? "success" : "warning";
  }

  getEventIcon(type: string): string {
    return type === "enter" ? "enter" : "exit";
  }

  getEntriesCount(): number {
    return this.geofenceEvents.filter((event) => event.type === "enter").length;
  }

  getExitsCount(): number {
    return this.geofenceEvents.filter((event) => event.type === "exit").length;
  }

  addSampleEntry() {
    this.geofenceService.addMockEvent("enter");
    this.loadEvents();
  }

  addSampleExit() {
    this.geofenceService.addMockEvent("exit");
    this.loadEvents();
  }

  clearEvents() {
    this.geofenceService.clearEvents();
    this.loadEvents();
  }
}
