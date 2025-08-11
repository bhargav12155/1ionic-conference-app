import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FeedbackService,
  FeedbackSubmission,
} from "../../providers/feedback.service";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.page.html",
  styleUrls: ["./feedback.page.scss"],
})
export class FeedbackPage implements OnInit, OnDestroy {
  submissions: FeedbackSubmission[] = [];
  search = "";
  sortColumn: string = "timestamp";
  sortDirection: "asc" | "desc" = "desc";
  pageSize = 10;
  currentPage = 1;
  timeFilter: "all" | "24h" | "7d" | "30d" = "all";
  referralFilter: "all" | "Yes" | "No" | "Maybe" = "all";
  startDateTime: string | null = null;
  endDateTime: string | null = null;
  status = "";
  loading = false;
  private timer: any;
  Math = Math; // Make Math available in template

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.refresh();
    this.timer = setInterval(() => this.refresh(false), 60 * 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  async refresh(showLoading: boolean = true) {
    this.loading = showLoading;
    if (showLoading) this.status = "Loading feedback data...";
    else this.status = "Syncing latest data...";

    try {
      const remote = await this.feedbackService.fetchFromServer();
      this.feedbackService.mergeRemote(remote);
      this.submissions = this.feedbackService.getAll();
      this.status = `Successfully loaded ${this.submissions.length} records`;
    } catch (error) {
      this.status = "Failed to sync data. Showing cached results.";
    } finally {
      this.loading = false;
    }
  }

  // Analytics getters
  get positiveCount(): number {
    return this.filtered.filter(
      (f) => f.propertyFeedback?.referralPotential === "Yes"
    ).length;
  }

  get todayCount(): number {
    const today = new Date().toDateString();
    return this.filtered.filter(
      (f) => new Date(f.timestamp).toDateString() === today
    ).length;
  }

  // UI Helper methods
  onSearchChange(event: any) {
    this.search = event.detail.value;
    this.currentPage = 1;
  }

  onDateRangeChange() {
    // Validate and fix date range if needed
    if (this.startDateTime && this.endDateTime) {
      const startMs = new Date(this.startDateTime).getTime();
      const endMs = new Date(this.endDateTime).getTime();

      // If end is before start, swap them
      if (endMs < startMs) {
        const temp = this.startDateTime;
        this.startDateTime = this.endDateTime;
        this.endDateTime = temp;
      }
    }
    this.currentPage = 1;
  }

  // Check if date range is valid
  get isDateRangeValid(): boolean {
    if (!this.startDateTime || !this.endDateTime) return true;
    return (
      new Date(this.startDateTime).getTime() <=
      new Date(this.endDateTime).getTime()
    );
  }

  // Get current filter info for display
  get filterInfo(): string {
    if (this.hasCustomRange()) {
      const start = this.startDateTime
        ? new Date(this.startDateTime).toLocaleString()
        : "Start";
      const end = this.endDateTime
        ? new Date(this.endDateTime).toLocaleString()
        : "End";
      const valid = this.isDateRangeValid
        ? ""
        : " (Invalid Range - Auto-corrected)";
      return `Custom range: ${start} to ${end}${valid}`;
    }
    if (this.timeFilter !== "all") {
      return `Showing: ${this.timeFilter
        .replace("h", " hours")
        .replace("d", " days")}`;
    }
    return "Showing: All records";
  }

  trackByFn(index: number, item: FeedbackSubmission): string {
    return item.id || item.timestamp + item.sessionId;
  }

  getInitials(name: string): string {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  truncateText(text: string | undefined, length: number): string {
    if (!text) return "—";
    return text.length > length ? text.substring(0, length) + "..." : text;
  }

  getReferralColor(referral: string | undefined): string {
    switch (referral) {
      case "Yes":
        return "success";
      case "No":
        return "danger";
      case "Maybe":
        return "warning";
      default:
        return "medium";
    }
  }

  getReferralIcon(referral: string | undefined): string {
    switch (referral) {
      case "Yes":
        return "thumbs-up";
      case "No":
        return "thumbs-down";
      case "Maybe":
        return "help";
      default:
        return "remove";
    }
  }

  getStatusColor(): string {
    if (this.status.includes("Failed")) return "danger";
    if (this.status.includes("Successfully")) return "success";
    if (this.status.includes("Loading") || this.status.includes("Syncing"))
      return "primary";
    return "medium";
  }

  getStatusIcon(): string {
    if (this.status.includes("Failed")) return "alert-circle";
    if (this.status.includes("Successfully")) return "checkmark-circle";
    if (this.status.includes("Loading") || this.status.includes("Syncing"))
      return "sync";
    return "information-circle";
  }

  getPageNumbers(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2;

    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);

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

  // Helper to know if custom range active
  hasCustomRange(): boolean {
    return !!(this.startDateTime || this.endDateTime);
  }
  clearRange() {
    this.startDateTime = null;
    this.endDateTime = null;
    this.currentPage = 1;
  }

  // Formatting helpers
  formatDate(ts: string) {
    return new Date(ts).toLocaleDateString();
  }
  formatTime(ts: string) {
    return new Date(ts).toLocaleTimeString();
  }

  // Filtering & sorting helpers
  get filtered(): FeedbackSubmission[] {
    let data = [...this.submissions];
    const now = Date.now();

    // Relative time filter only if no custom range
    if (!this.hasCustomRange() && this.timeFilter !== "all") {
      const cutoffMap: any = {
        "24h": 24 * 3600 * 1000,
        "7d": 7 * 24 * 3600 * 1000,
        "30d": 30 * 24 * 3600 * 1000,
      };
      const cutoff = now - cutoffMap[this.timeFilter];
      data = data.filter((d) => new Date(d.timestamp).getTime() >= cutoff);
    }

    // Custom date/time range filter overrides relative selection
    if (this.hasCustomRange()) {
      let startMs = this.startDateTime
        ? new Date(this.startDateTime).getTime()
        : -Infinity;
      let endMs = this.endDateTime
        ? new Date(this.endDateTime).getTime()
        : Infinity;

      // Auto-correct invalid ranges (end before start)
      if (startMs > endMs && startMs !== -Infinity && endMs !== Infinity) {
        [startMs, endMs] = [endMs, startMs]; // Swap them
      }

      console.log("Date Range Filter:", {
        startDateTime: this.startDateTime,
        endDateTime: this.endDateTime,
        startMs: new Date(startMs).toLocaleString(),
        endMs: new Date(endMs).toLocaleString(),
        recordCount: data.length,
        sampleRecord: data[0]
          ? {
              timestamp: data[0].timestamp,
              timestampMs: new Date(data[0].timestamp).getTime(),
              name: data[0].contact?.name,
            }
          : null,
      });

      data = data.filter((d) => {
        const t = new Date(d.timestamp).getTime();
        const matches = t >= startMs && t <= endMs;
        return matches;
      });

      console.log("After date filter:", data.length, "records");
    }

    if (this.referralFilter !== "all") {
      data = data.filter(
        (d) => d.propertyFeedback?.referralPotential === this.referralFilter
      );
    }

    if (this.search.trim()) {
      const q = this.search.toLowerCase();
      data = data.filter(
        (d) =>
          d.contact?.name?.toLowerCase().includes(q) ||
          d.contact?.email?.toLowerCase().includes(q) ||
          d.propertyFeedback?.overall?.toLowerCase().includes(q)
      );
    }

    if (this.sortColumn) {
      data.sort((a: any, b: any) => {
        let va: any = a[this.sortColumn];
        let vb: any = b[this.sortColumn];
        if (this.sortColumn === "timestamp") {
          va = new Date(a.timestamp).getTime();
          vb = new Date(b.timestamp).getTime();
        }
        if (va < vb) return this.sortDirection === "asc" ? -1 : 1;
        if (va > vb) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }

  get paginated(): FeedbackSubmission[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }
  get totalPages(): number {
    return Math.ceil(this.filtered.length / this.pageSize) || 1;
  }

  setSort(col: string) {
    if (this.sortColumn === col) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = col;
      this.sortDirection = "asc";
    }
  }

  exportCSV() {
    const rows = [
      [
        "Date",
        "Time",
        "Name",
        "Feedback",
        "Email",
        "Phone",
        "Positives",
        "Negatives",
        "Price Opinion",
        "Referral",
        "Latitude",
        "Longitude",
      ],
    ];
    this.filtered.forEach((r) => {
      rows.push([
        this.formatDate(r.timestamp),
        this.formatTime(r.timestamp),
        r.contact?.name || "",
        r.propertyFeedback?.overall || "",
        r.contact?.email || "",
        r.contact?.phone || "",
        r.propertyFeedback?.positives || "",
        r.propertyFeedback?.negatives || "",
        r.propertyFeedback?.priceOpinion || "",
        r.propertyFeedback?.referralPotential || "",
        r.location?.coordinates?.latitude?.toString() || "",
        r.location?.coordinates?.longitude?.toString() || "",
      ]);
    });
    const csv = rows
      .map((r) => r.map((c) => '"' + c.replace(/"/g, '""') + '"').join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "feedback.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  exportPrint() {
    const printContents =
      document.getElementById("feedbackTable")?.outerHTML || "";
    const w = window.open("", "", "height=700,width=900");
    if (!w) return;
    w.document.write("<html><head><title>Feedback</title>");
    w.document.write(
      "<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>"
    );
    w.document.write("</head><body>");
    w.document.write(printContents);
    w.document.write("</body></html>");
    w.document.close();
    w.print();
  }

  changePage(p: number) {
    if (p >= 1 && p <= this.totalPages) this.currentPage = p;
  }
}
