import { Injectable } from "@angular/core";
import { Device } from "@capacitor/device";
import { Network } from "@capacitor/network";
import { Geolocation } from "@capacitor/geolocation";

export interface PropertyFeedback {
  overall: string;
  positives: string;
  negatives: string;
  priceOpinion: string;
  referralPotential: string; // Yes | No | Maybe
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export interface FeedbackSubmission {
  id?: string; // backend id
  timestamp: string; // ISO string
  sessionId: string;
  propertyFeedback: PropertyFeedback;
  contact: ContactInfo;
  location?: {
    coordinates?: { latitude: number; longitude: number };
    timezone?: string;
  };
  device?: any;
  network?: any;
}

@Injectable({ providedIn: "root" })
export class FeedbackService {
  private localKey = "app_feedback_submissions_v1";
  private submissions: FeedbackSubmission[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.localKey);
      if (raw) this.submissions = JSON.parse(raw);
    } catch (e) {
      console.warn("Failed to load feedback from storage", e);
    }
  }

  private persist() {
    try {
      localStorage.setItem(this.localKey, JSON.stringify(this.submissions));
    } catch (e) {
      console.warn("Failed to persist feedback to storage", e);
    }
  }

  getAll(): FeedbackSubmission[] {
    return [...this.submissions];
  }

  async buildContext(): Promise<{ device?: any; network?: any; location?: any }> {
    try {
      const [device, network] = await Promise.all([
        Device.getInfo().catch(() => undefined),
        Network.getStatus().catch(() => undefined),
      ]);
      let location;
      try {
        const coords = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 5000 });
        location = {
          coordinates: {
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
          },
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
      } catch (e) {
        // ignore if blocked
      }
      return { device, network, location };
    } catch (e) {
      return {};
    }
  }

  private getApiBase(): string {
    const isLocal =
      window.location.protocol === "file:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    return isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
  }

  async submit(feedback: Omit<FeedbackSubmission, "id">): Promise<FeedbackSubmission> {
    const API_BASE = this.getApiBase();
    try {
      const response = await fetch(`${API_BASE}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(feedback),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const stored: FeedbackSubmission = { ...feedback, id: data.id || data._id };
      this.submissions.unshift(stored);
      this.persist();
      return stored;
    } catch (e) {
      // Still store locally with temp id for offline
      const stored: FeedbackSubmission = { ...feedback, id: "local_" + Date.now() };
      this.submissions.unshift(stored);
      this.persist();
      throw e; // let caller know
    }
  }
}
