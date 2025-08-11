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

  private getApiBase(): string {
    const isLocal =
      window.location.protocol === "file:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    return isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
  }

  // Fetch list from backend (read-only). No POST here.
  async fetchFromServer(): Promise<FeedbackSubmission[]> {
    const API_BASE = this.getApiBase();
    try {
      const res = await fetch(`${API_BASE}/api/feedback`, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`GET /api/feedback ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data)) return [];
      // Normalize minimal fields (defensive)
      return data.map((d: any) => ({
        id: d.id || d._id,
        timestamp: d.timestamp || d.createdAt || new Date().toISOString(),
        sessionId: d.sessionId || "n/a",
        propertyFeedback: d.propertyFeedback || {
          overall: d.overall || "",
          positives: d.positives || "",
          negatives: d.negatives || "",
          priceOpinion: d.priceOpinion || "",
          referralPotential: d.referralPotential || d.referral || "",
        },
        contact: d.contact || {
          name: d.name || "",
          email: d.email || "",
          phone: d.phone || "",
        },
        location: d.location,
        device: d.device,
        network: d.network,
      }));
    } catch (e) {
      console.warn("Failed to fetch feedback list", e);
      return [];
    }
  }

  mergeRemote(list: FeedbackSubmission[]) {
    if (!list.length) return;
    const existingIds = new Set(
      this.submissions.map((s) => s.id || s.timestamp + s.sessionId)
    );
    const toAdd = list.filter(
      (r) => !existingIds.has(r.id || r.timestamp + r.sessionId)
    );
    if (toAdd.length) {
      this.submissions = [...toAdd, ...this.submissions];
      this.persist();
    }
  }

  // Retain submit method ONLY for explicit future use; not called automatically anywhere.
  async submit(
    feedback: Omit<FeedbackSubmission, "id">
  ): Promise<FeedbackSubmission> {
    const API_BASE = this.getApiBase();
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
    const stored: FeedbackSubmission = {
      ...feedback,
      id: data.id || data._id,
    };
    this.submissions.unshift(stored);
    this.persist();
    return stored;
  }
}
