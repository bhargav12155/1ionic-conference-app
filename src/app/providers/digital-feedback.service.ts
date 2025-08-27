import { Injectable } from "@angular/core";

export interface DigitalFeedback {
  websiteCrmImprovements: string;
  likesDislikesDigital: string;
  overallExperience: string;
  priorityImprovements: string;
  additionalComments: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DigitalFeedbackSubmission {
  id?: string; // backend id
  timestamp: string; // ISO string
  sessionId: string;
  digitalFeedback: DigitalFeedback;
  contact: ContactInfo;
  location?: {
    coordinates?: { latitude: number; longitude: number };
    timezone?: string;
  };
  device?: any;
  network?: any;
  receivedAt?: string;
  appName?: string;
}

@Injectable({ providedIn: "root" })
export class DigitalFeedbackService {
  private localKey = "app_digital_feedback_submissions_v1";
  private submissions: DigitalFeedbackSubmission[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.localKey);
      if (raw) this.submissions = JSON.parse(raw);
    } catch (e) {
      console.warn("Failed to load digital feedback from storage", e);
    }
  }

  private persist() {
    try {
      localStorage.setItem(this.localKey, JSON.stringify(this.submissions));
    } catch (e) {
      console.warn("Failed to persist digital feedback to storage", e);
    }
  }

  getAll(): DigitalFeedbackSubmission[] {
    return [...this.submissions];
  }

  // Clear local cache and force fresh fetch
  clearCache() {
    console.log("Clearing digital feedback cache");
    this.submissions = [];
    localStorage.removeItem(this.localKey);
  }

  // Force refresh from server (clears cache first)
  async forceRefresh(): Promise<DigitalFeedbackSubmission[]> {
    this.clearCache();
    const serverData = await this.fetchFromServer();
    this.mergeRemote(serverData);
    return this.getAll();
  }

  private getApiBase(): string {
    // Always use production API for digital feedback
    return "https://loc-end.onrender.com";
  }

  // Fetch list from backend (read-only)
  async fetchFromServer(): Promise<DigitalFeedbackSubmission[]> {
    const API_BASE = this.getApiBase();
    console.log("Fetching from server:", `${API_BASE}/api/digital-feedback`);

    try {
      const res = await fetch(`${API_BASE}/api/digital-feedback`, {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (!res.ok) throw new Error(`GET /api/digital-feedback ${res.status}`);

      const data = await res.json();
      console.log("Server response:", {
        count: data?.length,
        sample: data?.[0],
      });

      if (!Array.isArray(data)) return [];

      // Normalize minimal fields (defensive)
      return data.map((d: any) => ({
        id: d.id || d._id,
        timestamp: d.timestamp || d.createdAt || new Date().toISOString(),
        sessionId: d.sessionId || "n/a",
        digitalFeedback: d.digitalFeedback || {
          websiteCrmImprovements: d.websiteCrmImprovements || "",
          likesDislikesDigital: d.likesDislikesDigital || "",
          overallExperience: d.overallExperience || "",
          priorityImprovements: d.priorityImprovements || "",
          additionalComments: d.additionalComments || "",
        },
        contact: d.contact || {
          name: d.name || "",
          email: d.email || "",
          phone: d.phone || "",
        },
        location: d.location,
        device: d.device,
        network: d.network,
        receivedAt: d.receivedAt,
        appName: d.appName,
      }));
    } catch (e) {
      console.error("Failed to fetch digital feedback list:", e);
      throw e; // Re-throw to let caller handle the error
    }
  }

  mergeRemote(list: DigitalFeedbackSubmission[]) {
    console.log("Merging remote data:", {
      remoteCount: list.length,
      localCount: this.submissions.length,
    });

    // Instead of merging, completely replace with server data
    // This ensures deletions and updates from server are reflected
    if (list.length >= 0) {
      // Even if empty array, trust the server
      this.submissions = [...list];
      this.persist();
      console.log(
        "Replaced local cache with server data:",
        this.submissions.length
      );
    }
  }

  // Retain submit method for future use
  async submit(
    feedback: Omit<DigitalFeedbackSubmission, "id">
  ): Promise<DigitalFeedbackSubmission> {
    const API_BASE = this.getApiBase();
    const response = await fetch(`${API_BASE}/api/digital-feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(feedback),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const stored: DigitalFeedbackSubmission = {
      ...feedback,
      id: data.id || data._id,
    };
    this.submissions.unshift(stored);
    this.persist();
    return stored;
  }
}
