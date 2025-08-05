import { Injectable } from "@angular/core";
import { Device } from "@capacitor/device";
import { Geolocation } from "@capacitor/geolocation";
import { Network } from "@capacitor/network";

export interface UserInfo {
  id: string;
  deviceInfo: any;
  networkInfo: any;
  location: {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: number;
  };
  geofenceStatus: "inside" | "outside" | "entering" | "exiting";
  lastSeen: number;
}

export interface GeofenceEvent {
  userId: string;
  userDeviceInfo: any;
  type: "enter" | "exit";
  timestamp: number;
  location: {
    latitude: number;
    longitude: number;
  };
  duration?: number; // in milliseconds, for exit events
}

@Injectable({
  providedIn: "root",
})
export class GeofenceService {
  private geofenceCenter = { lat: 10.6918, lng: -61.2225 }; // Trinidad coordinates
  private geofenceRadius = 1000; // 1km radius
  private users: UserInfo[] = [];
  private currentUser: UserInfo | null = null;
  private geofenceEvents: GeofenceEvent[] = [];
  private watchId: string | undefined;
  private entryTime: number | null = null;

  constructor() {
    this.initializeCurrentUser();
  }

  async initializeCurrentUser() {
    try {
      const deviceInfo = await Device.getInfo();
      const networkInfo = await Network.getStatus();
      const position = await Geolocation.getCurrentPosition();

      this.currentUser = {
        id: this.generateUserId(),
        deviceInfo,
        networkInfo,
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy || 0,
          timestamp: Date.now(),
        },
        geofenceStatus: this.isInsideGeofence(
          position.coords.latitude,
          position.coords.longitude
        )
          ? "inside"
          : "outside",
        lastSeen: Date.now(),
      };

      // Start watching position
      this.startWatchingPosition();
    } catch (error) {
      console.error("Error initializing user:", error);
    }
  }

  private generateUserId(): string {
    return "user_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();
  }

  private isInsideGeofence(lat: number, lng: number): boolean {
    const distance = this.calculateDistance(
      lat,
      lng,
      this.geofenceCenter.lat,
      this.geofenceCenter.lng
    );
    return distance <= this.geofenceRadius;
  }

  private calculateDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  async startWatchingPosition() {
    try {
      this.watchId = await Geolocation.watchPosition({}, (position, err) => {
        if (position && this.currentUser) {
          const wasInside = this.currentUser.geofenceStatus === "inside";
          const isNowInside = this.isInsideGeofence(
            position.coords.latitude,
            position.coords.longitude
          );

          // Update current user location
          this.currentUser.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy || 0,
            timestamp: Date.now(),
          };
          this.currentUser.lastSeen = Date.now();

          // Check for geofence transitions
          if (!wasInside && isNowInside) {
            // Entering geofence
            this.currentUser.geofenceStatus = "entering";
            this.entryTime = Date.now();
            this.recordGeofenceEvent("enter");
            setTimeout(() => {
              if (this.currentUser) this.currentUser.geofenceStatus = "inside";
            }, 1000);
          } else if (wasInside && !isNowInside) {
            // Exiting geofence
            this.currentUser.geofenceStatus = "exiting";
            const duration = this.entryTime ? Date.now() - this.entryTime : 0;
            this.recordGeofenceEvent("exit", duration);
            this.entryTime = null;
            setTimeout(() => {
              if (this.currentUser) this.currentUser.geofenceStatus = "outside";
            }, 1000);
          } else if (isNowInside) {
            this.currentUser.geofenceStatus = "inside";
          } else {
            this.currentUser.geofenceStatus = "outside";
          }
        }

        if (err) {
          console.error("Position watch error:", err);
        }
      });
    } catch (error) {
      console.error("Error starting position watch:", error);
    }
  }

  private recordGeofenceEvent(type: "enter" | "exit", duration?: number) {
    if (!this.currentUser) return;

    const event: GeofenceEvent = {
      userId: this.currentUser.id,
      userDeviceInfo: this.currentUser.deviceInfo,
      type,
      timestamp: Date.now(),
      location: {
        latitude: this.currentUser.location.latitude,
        longitude: this.currentUser.location.longitude,
      },
      duration,
    };

    this.geofenceEvents.unshift(event); // Add to beginning

    // Keep only last 50 events
    if (this.geofenceEvents.length > 50) {
      this.geofenceEvents = this.geofenceEvents.slice(0, 50);
    }
  }

  getCurrentUser(): UserInfo | null {
    return this.currentUser;
  }

  getUsers(): UserInfo[] {
    // In a real app, this would come from a server
    // For demo, we'll simulate other users
    return this.users;
  }

  getUsersInGeofence(): UserInfo[] {
    return this.users.filter((user) => user.geofenceStatus === "inside");
  }

  getGeofenceEvents(): GeofenceEvent[] {
    return this.geofenceEvents;
  }

  getGeofenceCenter() {
    return this.geofenceCenter;
  }

  getGeofenceRadius() {
    return this.geofenceRadius;
  }

  async stopWatching() {
    if (this.watchId) {
      await Geolocation.clearWatch({ id: this.watchId });
    }
  }

  // Simulate adding other users (in real app, this would be real-time data)
  simulateOtherUsers() {
    const mockUsers: UserInfo[] = [
      {
        id: "user_mock_1",
        deviceInfo: {
          model: "iPhone 12",
          platform: "ios",
          operatingSystem: "ios",
          osVersion: "15.0",
          manufacturer: "Apple",
        },
        networkInfo: {
          connected: true,
          connectionType: "wifi",
        },
        location: {
          latitude: 10.692,
          longitude: -61.222,
          accuracy: 5,
          timestamp: Date.now() - 30000,
        },
        geofenceStatus: "inside",
        lastSeen: Date.now() - 30000,
      },
      {
        id: "user_mock_2",
        deviceInfo: {
          model: "Samsung Galaxy S21",
          platform: "android",
          operatingSystem: "android",
          osVersion: "11",
          manufacturer: "Samsung",
        },
        networkInfo: {
          connected: true,
          connectionType: "4g",
        },
        location: {
          latitude: 10.6915,
          longitude: -61.223,
          accuracy: 8,
          timestamp: Date.now() - 60000,
        },
        geofenceStatus: "inside",
        lastSeen: Date.now() - 60000,
      },
    ];

    this.users = mockUsers;
  }

  // Methods for activity log testing
  addMockEvent(type: "enter" | "exit") {
    const mockEvent: GeofenceEvent = {
      userId: this.currentUser?.id || "mock_user_" + Date.now(),
      userDeviceInfo: this.currentUser?.deviceInfo || {
        model: "Mock Device",
        platform: "web",
        operatingSystem: "unknown",
        osVersion: "1.0",
        manufacturer: "Mock",
      },
      type,
      timestamp: Date.now(),
      location: {
        latitude: 10.6918 + (Math.random() - 0.5) * 0.001,
        longitude: -61.2225 + (Math.random() - 0.5) * 0.001,
      },
      duration:
        type === "exit"
          ? Math.floor(Math.random() * 300000) + 60000
          : undefined, // 1-5 minutes
    };

    this.geofenceEvents.unshift(mockEvent);

    // Keep only last 50 events
    if (this.geofenceEvents.length > 50) {
      this.geofenceEvents = this.geofenceEvents.slice(0, 50);
    }
  }

  clearEvents() {
    this.geofenceEvents = [];
  }

  // Add some initial sample data for demonstration
  addInitialSampleData() {
    // if (this.geofenceEvents.length === 0) {
    //   // Add some sample events from the past
    //   const sampleEvents: GeofenceEvent[] = [
    //     {
    //       userId: "sample_user_1",
    //       userDeviceInfo: {
    //         model: "iPhone 12",
    //         platform: "ios",
    //         operatingSystem: "ios",
    //         osVersion: "15.0",
    //         manufacturer: "Apple",
    //       },
    //       type: "enter",
    //       timestamp: Date.now() - 3600000, // 1 hour ago
    //       location: { latitude: 10.6918, longitude: -61.2225 },
    //     },
    //     {
    //       userId: "sample_user_1",
    //       userDeviceInfo: {
    //         model: "iPhone 12",
    //         platform: "ios",
    //         operatingSystem: "ios",
    //         osVersion: "15.0",
    //         manufacturer: "Apple",
    //       },
    //       type: "exit",
    //       timestamp: Date.now() - 1800000, // 30 minutes ago
    //       location: { latitude: 10.692, longitude: -61.2227 },
    //       duration: 1800000, // 30 minutes
    //     },
    //     {
    //       userId: "sample_user_2",
    //       userDeviceInfo: {
    //         model: "Samsung Galaxy S21",
    //         platform: "android",
    //         operatingSystem: "android",
    //         osVersion: "11",
    //         manufacturer: "Samsung",
    //       },
    //       type: "enter",
    //       timestamp: Date.now() - 900000, // 15 minutes ago
    //       location: { latitude: 10.6916, longitude: -61.2223 },
    //     },
    //   ];
    //   this.geofenceEvents = sampleEvents;
    // }
  }
}
