import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  DigitalFeedbackService,
  DigitalFeedbackSubmission,
} from "../../providers/digital-feedback.service";

@Component({
  selector: "app-digital-feedback",
  templateUrl: "./digital-feedback.page.html",
  styleUrls: ["./digital-feedback.page.scss"],
})
export class DigitalFeedbackPage implements OnInit, OnDestroy {
  submissions: DigitalFeedbackSubmission[] = [];
  search = "";
  sortColumn: string = "timestamp";
  sortDirection: "asc" | "desc" = "desc";
  pageSize = 10;
  currentPage = 1;
  timeFilter: "all" | "24h" | "7d" | "30d" = "all";
  experienceFilter: "all" | "excellent" | "good" | "average" | "poor" = "all";
  startDateTime: string | null = null;
  endDateTime: string | null = null;
  status = "";
  loading = false;
  private timer: any;
  Math = Math; // Make Math available in template
  errorMessage: string | null = null;

  constructor(private digitalFeedbackService: DigitalFeedbackService) {}

  ngOnInit() {
    this.refresh();
    this.timer = setInterval(() => this.refresh(false), 60 * 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  async refresh(showLoading: boolean = true) {
    this.loading = showLoading;
    if (showLoading) this.status = "Loading digital feedback data...";
    else this.status = "Syncing latest data...";

    try {
      const remote = await this.digitalFeedbackService.fetchFromServer();
      this.digitalFeedbackService.mergeRemote(remote);
      this.submissions = this.digitalFeedbackService.getAll();

      // Update status with clear distinction between total and filtered
      const totalRecords = this.submissions.length;
      const filteredCount = this.filtered.length;

      if (filteredCount === totalRecords) {
        this.status = `Successfully loaded ${totalRecords} records`;
      } else {
        this.status = `Loaded ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
      }
    } catch (error) {
      const cachedCount = this.submissions.length;
      const filteredCount = this.filtered.length;

      this.errorMessage =
        error instanceof Error ? error.message : "Failed to load data";

      if (filteredCount === cachedCount) {
        this.status = `Failed to sync. Showing ${cachedCount} cached records`;
      } else {
        this.status = `Failed to sync. Showing ${filteredCount} of ${cachedCount} cached records`;
      }
    } finally {
      this.loading = false;
      setTimeout(() => this.updateStatusForFilters(), 100);
    }
  }

  // Force refresh by clearing cache first
  async forceRefresh() {
    this.loading = true;
    this.status = "Force refreshing from server...";

    try {
      this.submissions = await this.digitalFeedbackService.forceRefresh();

      const totalRecords = this.submissions.length;
      const filteredCount = this.filtered.length;

      if (filteredCount === totalRecords) {
        this.status = `Force refreshed ${totalRecords} records from server`;
      } else {
        this.status = `Force refreshed ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
      }
    } catch (error) {
      this.status = "Failed to force refresh from server";
      console.error("Force refresh failed:", error);
    } finally {
      this.loading = false;
      setTimeout(() => this.updateStatusForFilters(), 100);
    }
  }

  // Handle ion-refresher events
  async onRefresh(event: any) {
    await this.refresh(false);
    event.target.complete();
  }

  // Handle manual refresh button clicks
  async doRefresh() {
    await this.forceRefresh();
  }

  // Analytics getters
  get excellentCount(): number {
    return this.filtered.filter(
      (f) => f.digitalFeedback?.overallExperience === "excellent"
    ).length;
  }

  get todayCount(): number {
    const today = new Date().toDateString();
    return this.filtered.filter(
      (f) => new Date(f.timestamp).toDateString() === today
    ).length;
  }

  // Check if any filters are active
  get hasSelectedFilter(): boolean {
    return (
      this.search.trim() !== "" ||
      this.timeFilter !== "all" ||
      this.experienceFilter !== "all" ||
      this.startDateTime !== null ||
      this.endDateTime !== null
    );
  }

  // Analytics getters
  get totalSubmissions(): number {
    return this.submissions.length;
  }

  get thisMonthCount(): number {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    return this.submissions.filter((s) => new Date(s.timestamp) >= startOfMonth)
      .length;
  }

  get averageRating(): string {
    const ratings = this.submissions
      .map((s) => s.digitalFeedback?.overallExperience)
      .filter((r) => r && r !== "");

    if (ratings.length === 0) return "N/A";

    // Map ratings to numbers for calculation
    const ratingValues: { [key: string]: number } = {
      excellent: 5,
      good: 4,
      average: 3,
      poor: 2,
      "very poor": 1,
    };

    const values = ratings.map((r) => ratingValues[r?.toLowerCase()] || 3);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    return avg.toFixed(1);
  }

  get uniqueEmailsCount(): number {
    const emails = this.submissions
      .map((s) => s.contact?.email)
      .filter((email) => email && email.trim() !== "");
    return new Set(emails).size;
  }

  get displayedSubmissions(): DigitalFeedbackSubmission[] {
    return this.filtered;
  }

  get paginatedSubmissions(): DigitalFeedbackSubmission[] {
    return this.paginated;
  }

  // Helper methods for template
  trackBySubmission(
    index: number,
    submission: DigitalFeedbackSubmission
  ): string {
    return submission.id || submission.sessionId || index.toString();
  }

  getRatingColor(rating?: string): string {
    if (!rating) return "medium";

    switch (rating.toLowerCase()) {
      case "excellent":
        return "success";
      case "good":
        return "primary";
      case "average":
        return "warning";
      case "poor":
      case "very poor":
        return "danger";
      default:
        return "medium";
    }
  }

  // Card expansion management
  expandedCards = new Set<string>();

  toggleCard(submission: DigitalFeedbackSubmission) {
    const id = submission.id || submission.sessionId;
    if (this.expandedCards.has(id)) {
      this.expandedCards.delete(id);
    } else {
      this.expandedCards.add(id);
    }
  }

  // Data formatting helpers
  getDeviceInfo(device: any): string {
    if (!device) return "N/A";
    const parts = [];
    if (device.platform) parts.push(device.platform);
    if (device.userAgent) {
      const match = device.userAgent.match(/\([^)]+\)/);
      if (match) parts.push(match[0]);
    }
    return parts.length > 0 ? parts.join(" ") : "N/A";
  }

  getNetworkInfo(network: any): string {
    if (!network) return "N/A";
    const parts = [];
    if (network.ip) parts.push(`IP: ${network.ip}`);
    if (network.geo?.country) parts.push(`Country: ${network.geo.country}`);
    if (network.geo?.city) parts.push(`City: ${network.geo.city}`);
    return parts.length > 0 ? parts.join(", ") : "N/A";
  }

  getLocationInfo(location: any): string {
    if (!location) return "N/A";
    const parts = [];
    if (location.coordinates?.latitude && location.coordinates?.longitude) {
      parts.push(
        `${location.coordinates.latitude.toFixed(
          4
        )}, ${location.coordinates.longitude.toFixed(4)}`
      );
    }
    if (location.timezone) parts.push(`TZ: ${location.timezone}`);
    return parts.length > 0 ? parts.join(", ") : "N/A";
  }

  // Search and filter methods
  handleSearch(event: any) {
    this.search = event.detail.value || "";
    this.currentPage = 1; // Reset to first page when searching
  }

  toggleExperienceFilter(
    experience: "excellent" | "good" | "average" | "poor"
  ) {
    if (this.experienceFilter === experience) {
      this.experienceFilter = "all";
    } else {
      this.experienceFilter = experience;
    }
    this.currentPage = 1; // Reset to first page when filtering
  }

  onPageSizeChange() {
    this.currentPage = 1; // Reset to first page when changing page size
  }

  // Pagination methods (using existing totalPages getter)
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // UI Helper methods
  updateStatusForFilters() {
    if (!this.submissions.length) return;

    const totalRecords = this.submissions.length;
    const filteredCount = this.filtered.length;

    if (filteredCount === totalRecords) {
      this.status = `Showing all ${totalRecords} records`;
    } else {
      this.status = `Loaded ${totalRecords} total records • Showing ${filteredCount} matching your filters`;
    }
  }

  onSearchChange(event: any) {
    this.search = event.detail.value;
    this.currentPage = 1;
    this.updateStatusForFilters();
  }

  onDateRangeChange() {
    if (this.startDateTime && this.endDateTime) {
      const startMs = new Date(this.startDateTime).getTime();
      const endMs = new Date(this.endDateTime).getTime();

      if (endMs < startMs) {
        const temp = this.startDateTime;
        this.startDateTime = this.endDateTime;
        this.endDateTime = temp;
      }
    }
    this.currentPage = 1;
    this.updateStatusForFilters();
  }

  // Check if any filters are active
  hasActiveFilters(): boolean {
    return (
      this.search.trim() !== "" ||
      this.timeFilter !== "all" ||
      this.experienceFilter !== "all" ||
      this.hasCustomRange()
    );
  }

  // Clear all filters
  clearAllFilters() {
    this.search = "";
    this.timeFilter = "all";
    this.experienceFilter = "all";
    this.startDateTime = null;
    this.endDateTime = null;
    this.currentPage = 1;
    this.updateStatusForFilters();
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

  hasCustomRange(): boolean {
    return !!(this.startDateTime || this.endDateTime);
  }

  // Filtering & sorting helpers
  get filtered(): DigitalFeedbackSubmission[] {
    let data = [...this.submissions];
    const now = Date.now();

    // Search filter
    if (this.search.trim()) {
      const searchLower = this.search.toLowerCase();
      data = data.filter(
        (d) =>
          d.contact?.name?.toLowerCase().includes(searchLower) ||
          d.contact?.email?.toLowerCase().includes(searchLower) ||
          d.digitalFeedback?.overallExperience
            ?.toLowerCase()
            .includes(searchLower) ||
          d.digitalFeedback?.websiteCrmImprovements
            ?.toLowerCase()
            .includes(searchLower) ||
          d.digitalFeedback?.likesDislikesDigital
            ?.toLowerCase()
            .includes(searchLower) ||
          d.digitalFeedback?.priorityImprovements
            ?.toLowerCase()
            .includes(searchLower) ||
          d.digitalFeedback?.additionalComments
            ?.toLowerCase()
            .includes(searchLower)
      );
    }

    // Experience filter
    if (this.experienceFilter !== "all") {
      data = data.filter(
        (d) => d.digitalFeedback?.overallExperience === this.experienceFilter
      );
    }

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

    // Custom date/time range filter
    if (this.hasCustomRange()) {
      let startMs = this.startDateTime
        ? new Date(this.startDateTime).getTime()
        : -Infinity;
      let endMs = this.endDateTime
        ? new Date(this.endDateTime).getTime()
        : Infinity;

      if (startMs > endMs && startMs !== -Infinity && endMs !== Infinity) {
        [startMs, endMs] = [endMs, startMs];
      }

      data = data.filter((d) => {
        const timestamp = new Date(d.timestamp).getTime();
        return timestamp >= startMs && timestamp <= endMs;
      });
    }

    // Sort
    data.sort((a, b) => {
      let aVal: any, bVal: any;

      if (this.sortColumn === "timestamp") {
        aVal = new Date(a.timestamp).getTime();
        bVal = new Date(b.timestamp).getTime();
      } else if (this.sortColumn === "contact.name") {
        aVal = a.contact?.name || "";
        bVal = b.contact?.name || "";
      } else if (this.sortColumn === "digitalFeedback.overallExperience") {
        aVal = a.digitalFeedback?.overallExperience || "";
        bVal = b.digitalFeedback?.overallExperience || "";
      } else {
        return 0;
      }

      if (aVal < bVal) return this.sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return data;
  }

  get paginated(): DigitalFeedbackSubmission[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filtered.length / this.pageSize);
  }

  setSort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "desc";
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Helper methods
  formatDate(timestamp: string): string {
    return new Date(timestamp).toLocaleDateString();
  }

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString();
  }

  getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  }

  getStatusColor(): string {
    if (this.status.includes("Failed")) return "danger";
    if (this.status.includes("Force refreshed")) return "success";
    if (this.status.includes("Successfully")) return "success";
    return "primary";
  }

  getStatusIcon(): string {
    if (this.status.includes("Failed")) return "warning";
    if (this.status.includes("Force refreshed")) return "checkmark-circle";
    if (this.status.includes("Successfully")) return "checkmark-circle";
    return "information-circle";
  }

  trackByFn(index: number, item: DigitalFeedbackSubmission): string {
    return item.id || item.timestamp + item.sessionId;
  }

  // Export functions
  exportCSV() {
    const headers = [
      "Date",
      "Time",
      "Name",
      "Email",
      "Phone",
      "Overall Experience",
      "Website/CRM Improvements",
      "Likes/Dislikes",
      "Priority Improvements",
      "Additional Comments",
      "Device Platform",
      "IP Address",
      "Location",
    ];

    const rows = [headers];

    this.filtered.forEach((r) => {
      rows.push([
        this.formatDate(r.timestamp),
        this.formatTime(r.timestamp),
        r.contact?.name || "",
        r.contact?.email || "",
        r.contact?.phone || "",
        r.digitalFeedback?.overallExperience || "",
        r.digitalFeedback?.websiteCrmImprovements || "",
        r.digitalFeedback?.likesDislikesDigital || "",
        r.digitalFeedback?.priorityImprovements || "",
        r.digitalFeedback?.additionalComments || "",
        r.device?.platform || "",
        r.network?.ip || "",
        r.location?.coordinates
          ? `${r.location.coordinates.latitude}, ${r.location.coordinates.longitude}`
          : "",
      ]);
    });

    const csv = rows
      .map((r) => r.map((c) => '"' + c.replace(/"/g, '""') + '"').join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "digital-feedback.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  exportPrint() {
    const printContents =
      document.getElementById("digitalFeedbackTable")?.outerHTML || "";
    const w = window.open("", "", "height=700,width=900");
    if (!w) return;
    w.document.write("<html><head><title>Digital Feedback</title>");
    w.document.write(
      "<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>"
    );
    w.document.write("</head><body>");
    w.document.write(printContents);
    w.document.write("</body></html>");
    w.document.close();
    w.print();
  }
}
