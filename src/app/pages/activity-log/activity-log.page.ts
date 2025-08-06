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
  // Add filtering properties
  searchQuery: string = "";
  filterType: string = "all";
  // Helper to safely format numbers for display (prevents .toFixed errors)
  getNumberField(event: any, field: string, digits: number = 2): string {
    const value = event[field];
    return typeof value === "number" ? value.toFixed(digits) : "_";
  }
  async fetchExternalEvents(): Promise<GeofenceEvent[]> {
    try {
      // Determine API base URL based on environment
      const isLocal =
        window.location.protocol === "file:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      const API_BASE = isLocal
        ? "http://localhost:3000"
        : "https://loc-end.onrender.com";

      console.log("Fetching external events from:", `${API_BASE}/api/location`);

      const response = await fetch(`${API_BASE}/api/location`);
      if (!response.ok)
        throw new Error(`API request failed with status: ${response.status}`);
      const data = await response.json();
      // Sanitize and adapt API response to GeofenceEvent[]
      if (!Array.isArray(data)) return [];
      return data.map((event: any) => {
        // Always return location as an object
        let location = { latitude: null, longitude: null };
        if (event.lat !== undefined && event.lng !== undefined) {
          location = { latitude: event.lat, longitude: event.lng };
        }

        // Extract ip address from network object (not array)
        let ipAddress = "_";
        if (event.network && event.network.ip) {
          ipAddress = event.network.ip;
        }

        // Extract device platform from device object (not array)
        let deviceType = "_";
        if (event.device && event.device.platform) {
          deviceType = event.device.platform;
        }

        return {
          timestamp:
            event.timestamp ??
            event.receivedAt ??
            event.serverReceivedAt ??
            null,
          locationName:
            event.locationName ?? event.location ?? event.name ?? "_",
          userId: event.userId ?? "_",
          phoneNumber: event.phoneNumber ?? event.phone ?? "_",
          email: event.email ?? "_",
          ipAddress,
          deviceType,
          type: event.type ?? "_",
          entryTimestamp: event.entryTimestamp ?? null,
          exitTimestamp: event.exitTimestamp ?? null,
          userDeviceInfo: event.userDeviceInfo ?? "_",
          location,
          // Add accuracy field
          accuracy: event.accuracy ?? null,
        };
      });
    } catch (error) {
      console.error("Error fetching external events:", error);
      return [];
    }
  }
  // Helper to format event data for display
  getDisplayField(event: any, field: string): string {
    let value = event[field];

    if (field === "ipAddress") {
      // Check direct field first, then network object
      if (event.ipAddress && event.ipAddress !== "_") {
        value = event.ipAddress;
      } else if (event.network && event.network.ip) {
        value = event.network.ip;
      }
      if (value === undefined || value === null || value === "") return "_";
      return value;
    }

    if (field === "device" || field === "deviceType") {
      // Check direct field first, then device object
      if (event.deviceType && event.deviceType !== "_") {
        value = event.deviceType;
      } else if (event.device && event.device.platform) {
        value = event.device.platform;
      }
      if (value === undefined || value === null || value === "")
        return "Unknown";
      return value;
    }

    if (field === "accuracy") {
      if (typeof value === "number") return value.toString();
      if (event.accuracy !== undefined && event.accuracy !== null)
        return event.accuracy.toString();
      return "_";
    }

    if (field === "userId") {
      if (event.userId && event.userId !== "_") return event.userId;
      return "_";
    }

    if (value === undefined || value === null || value === "") return "_";

    if (
      field === "timestamp" ||
      field === "entryTimestamp" ||
      field === "exitTimestamp"
    ) {
      return value ? this.formatTimestamp(value) : "_";
    }

    if (field === "location") {
      if (
        value &&
        typeof value === "object" &&
        value.latitude !== null &&
        value.longitude !== null
      ) {
        return `${Number(value.latitude).toFixed(4)}, ${Number(
          value.longitude
        ).toFixed(4)}`;
      } else {
        return "_";
      }
    }

    return value;
  }
  isMobile(): boolean {
    // Basic check for mobile devices
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  geofenceEvents: GeofenceEvent[] = [];

  // Pagination and sorting
  pageSize: number = 10;
  currentPage: number = 1;
  sortColumn: string = "";
  sortDirection: "asc" | "desc" = "asc";

  constructor(private geofenceService: GeofenceService) {}

  ngOnInit() {
    console.log("ActivityLogPage: ngOnInit called");
    this.loadEvents();
    // Removed auto-refresh. Use manual refresh button instead.
  }
  // Manual refresh method for button
  refreshEvents() {
    this.loadEvents();
  }

  async loadEvents() {
    console.log("ActivityLogPage: Loading events...");
    const localEvents = this.geofenceService.getGeofenceEvents();
    const externalEvents = await this.fetchExternalEvents();
    // Merge local and external events
    const allEvents = [...localEvents, ...externalEvents];
    // Remove duplicates by normalized timestamp (rounded to nearest minute), coordinates, IP address, and device type
    const seen = new Set();
    this.geofenceEvents = allEvents.filter((event) => {
      // Round timestamp to nearest minute to catch duplicates that are seconds apart
      const timestamp = event.timestamp || 0;
      const roundedTimestamp = Math.floor(timestamp / 60000) * 60000; // Round to nearest minute
      const ts = String(roundedTimestamp);

      // Normalize coordinates to 4 decimals (enough for ~10m precision)
      const lat =
        event.location?.latitude !== undefined &&
        event.location?.latitude !== null
          ? Number(event.location.latitude).toFixed(4)
          : "_";
      const lng =
        event.location?.longitude !== undefined &&
        event.location?.longitude !== null
          ? Number(event.location.longitude).toFixed(4)
          : "_";

      // Include IP address and device type in deduplication key
      const ip = this.getDisplayField(event, "ipAddress");
      const device = this.getDisplayField(event, "device");
      const userId = this.getDisplayField(event, "userId");

      // Create a comprehensive deduplication key
      const key = `${ts}-${lat}-${lng}-${ip}-${device}-${userId}`;

      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
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

  // Add search and filter functionality
  get filteredEvents(): GeofenceEvent[] {
    let events = [...this.geofenceEvents];

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      events = events.filter(
        (event) =>
          this.getDisplayField(event, "userId").toLowerCase().includes(query) ||
          this.getDisplayField(event, "ipAddress")
            .toLowerCase()
            .includes(query) ||
          this.getDisplayField(event, "device").toLowerCase().includes(query) ||
          this.getDisplayField(event, "type").toLowerCase().includes(query)
      );
    }

    // Apply type filter
    if (this.filterType !== "all") {
      events = events.filter((event) => event.type === this.filterType);
    }

    return events;
  }

  get paginatedEvents(): GeofenceEvent[] {
    let events = [...this.filteredEvents];

    // Apply sorting
    if (this.sortColumn) {
      events.sort((a, b) => {
        let valA = this.getDisplayField(a, this.sortColumn);
        let valB = this.getDisplayField(b, this.sortColumn);

        // Handle numeric sorting for specific fields
        if (this.sortColumn === "timestamp" || this.sortColumn === "accuracy") {
          valA = a[this.sortColumn] || 0;
          valB = b[this.sortColumn] || 0;
        }

        if (valA == null) return 1;
        if (valB == null) return -1;
        if (valA < valB) return this.sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    const start = (this.currentPage - 1) * this.pageSize;
    return events.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredEvents.length / this.pageSize);
  }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2; // Show 2 pages before/after current

    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);

    // Adjust if we're near the beginning or end
    if (current <= delta) {
      end = Math.min(total, 2 * delta + 1);
    }
    if (current + delta >= total) {
      start = Math.max(1, total - 2 * delta);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.currentPage = 1; // Reset to first page when searching
  }

  onFilterChange(event: any) {
    this.filterType = event.target.value;
    this.currentPage = 1; // Reset to first page when filtering
  }

  // Enhanced jump to page with validation
  jumpToPage(page: number) {
    const maxPage = this.totalPages;
    if (page < 1) {
      this.currentPage = 1;
    } else if (page > maxPage) {
      this.currentPage = maxPage;
    } else {
      this.currentPage = page;
    }
  }

  onPageInputChange(event: any) {
    const page = parseInt(event.target.value);
    if (!isNaN(page)) {
      this.jumpToPage(page);
    }
  }
}
