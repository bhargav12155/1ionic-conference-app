import { Component, OnInit, OnDestroy } from '@angular/core';
import { DigitalFeedbackService, DigitalFeedbackSubmission } from '../../providers/digital-feedback.service';

@Component({
  selector: 'app-digital-feedback',
  templateUrl: './digital-feedback.page.html',
  styleUrls: ['./digital-feedback.page.scss'],
})
export class DigitalFeedbackPage implements OnInit, OnDestroy {
  submissions: DigitalFeedbackSubmission[] = [];
  search = '';
  sortColumn: string = 'timestamp';
  sortDirection: 'asc' | 'desc' = 'desc';
  pageSize = 10;
  currentPage = 1;
  timeFilter: 'all' | '24h' | '7d' | '30d' = 'all';
  experienceFilter: 'all' | 'excellent' | 'good' | 'average' | 'poor' = 'all';
  startDateTime: string | null = null;
  endDateTime: string | null = null;
  status = '';
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
    if (showLoading) this.status = 'Loading digital feedback data...';
    else this.status = 'Syncing latest data...';

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

      this.errorMessage = error instanceof Error ? error.message : 'Failed to load data';

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
    this.status = 'Force refreshing from server...';
    
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
      this.status = 'Failed to force refresh from server';
      console.error('Force refresh failed:', error);
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

  // Analytics getters
  get excellentCount(): number {
    return this.filtered.filter(f => f.digitalFeedback?.overallExperience === 'excellent').length;
  }

  get todayCount(): number {
    const today = new Date().toDateString();
    return this.filtered.filter(f => new Date(f.timestamp).toDateString() === today).length;
  }

  // Check if any filters are active
  get hasSelectedFilter(): boolean {
    return this.search.trim() !== '' || 
           this.timeFilter !== 'all' || 
           this.experienceFilter !== 'all' ||
           this.startDateTime !== null ||
           this.endDateTime !== null;
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
      this.search.trim() !== '' ||
      this.timeFilter !== 'all' ||
      this.experienceFilter !== 'all' ||
      this.hasCustomRange()
    );
  }

  // Clear all filters
  clearAllFilters() {
    this.search = '';
    this.timeFilter = 'all';
    this.experienceFilter = 'all';
    this.startDateTime = null;
    this.endDateTime = null;
    this.currentPage = 1;
    this.updateStatusForFilters();
  }

  // Check if date range is valid
  get isDateRangeValid(): boolean {
    if (!this.startDateTime || !this.endDateTime) return true;
    return new Date(this.startDateTime).getTime() <= new Date(this.endDateTime).getTime();
  }

  // Get current filter info for display
  get filterInfo(): string {
    if (this.hasCustomRange()) {
      const start = this.startDateTime ? new Date(this.startDateTime).toLocaleString() : 'Start';
      const end = this.endDateTime ? new Date(this.endDateTime).toLocaleString() : 'End';
      const valid = this.isDateRangeValid ? '' : ' (Invalid Range - Auto-corrected)';
      return `Custom range: ${start} to ${end}${valid}`;
    }
    if (this.timeFilter !== 'all') {
      return `Showing: ${this.timeFilter.replace('h', ' hours').replace('d', ' days')}`;
    }
    return 'Showing: All records';
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
      data = data.filter(d => 
        d.contact?.name?.toLowerCase().includes(searchLower) ||
        d.contact?.email?.toLowerCase().includes(searchLower) ||
        d.digitalFeedback?.overallExperience?.toLowerCase().includes(searchLower) ||
        d.digitalFeedback?.websiteCrmImprovements?.toLowerCase().includes(searchLower) ||
        d.digitalFeedback?.likesDislikesDigital?.toLowerCase().includes(searchLower) ||
        d.digitalFeedback?.priorityImprovements?.toLowerCase().includes(searchLower) ||
        d.digitalFeedback?.additionalComments?.toLowerCase().includes(searchLower)
      );
    }

    // Experience filter
    if (this.experienceFilter !== 'all') {
      data = data.filter(d => d.digitalFeedback?.overallExperience === this.experienceFilter);
    }

    // Relative time filter only if no custom range
    if (!this.hasCustomRange() && this.timeFilter !== 'all') {
      const cutoffMap: any = {
        '24h': 24 * 3600 * 1000,
        '7d': 7 * 24 * 3600 * 1000,
        '30d': 30 * 24 * 3600 * 1000,
      };
      const cutoff = now - cutoffMap[this.timeFilter];
      data = data.filter(d => new Date(d.timestamp).getTime() >= cutoff);
    }

    // Custom date/time range filter
    if (this.hasCustomRange()) {
      let startMs = this.startDateTime ? new Date(this.startDateTime).getTime() : -Infinity;
      let endMs = this.endDateTime ? new Date(this.endDateTime).getTime() : Infinity;

      if (startMs > endMs && startMs !== -Infinity && endMs !== Infinity) {
        [startMs, endMs] = [endMs, startMs];
      }

      data = data.filter(d => {
        const timestamp = new Date(d.timestamp).getTime();
        return timestamp >= startMs && timestamp <= endMs;
      });
    }

    // Sort
    data.sort((a, b) => {
      let aVal: any, bVal: any;
      
      if (this.sortColumn === 'timestamp') {
        aVal = new Date(a.timestamp).getTime();
        bVal = new Date(b.timestamp).getTime();
      } else if (this.sortColumn === 'contact.name') {
        aVal = a.contact?.name || '';
        bVal = b.contact?.name || '';
      } else if (this.sortColumn === 'digitalFeedback.overallExperience') {
        aVal = a.digitalFeedback?.overallExperience || '';
        bVal = b.digitalFeedback?.overallExperience || '';
      } else {
        return 0;
      }

      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
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
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'desc';
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
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  getStatusColor(): string {
    if (this.status.includes('Failed')) return 'danger';
    if (this.status.includes('Force refreshed')) return 'success';
    if (this.status.includes('Successfully')) return 'success';
    return 'primary';
  }

  getStatusIcon(): string {
    if (this.status.includes('Failed')) return 'warning';
    if (this.status.includes('Force refreshed')) return 'checkmark-circle';
    if (this.status.includes('Successfully')) return 'checkmark-circle';
    return 'information-circle';
  }

  trackByFn(index: number, item: DigitalFeedbackSubmission): string {
    return item.id || item.timestamp + item.sessionId;
  }

  // Export functions
  exportCSV() {
    const headers = [
      'Date', 'Time', 'Name', 'Email', 'Phone', 
      'Overall Experience', 'Website/CRM Improvements', 
      'Likes/Dislikes', 'Priority Improvements', 'Additional Comments',
      'Device Platform', 'IP Address', 'Location'
    ];
    
    const rows = [headers];
    
    this.filtered.forEach(r => {
      rows.push([
        this.formatDate(r.timestamp),
        this.formatTime(r.timestamp),
        r.contact?.name || '',
        r.contact?.email || '',
        r.contact?.phone || '',
        r.digitalFeedback?.overallExperience || '',
        r.digitalFeedback?.websiteCrmImprovements || '',
        r.digitalFeedback?.likesDislikesDigital || '',
        r.digitalFeedback?.priorityImprovements || '',
        r.digitalFeedback?.additionalComments || '',
        r.device?.platform || '',
        r.network?.ip || '',
        r.location?.coordinates ? `${r.location.coordinates.latitude}, ${r.location.coordinates.longitude}` : ''
      ]);
    });

    const csv = rows.map(r => r.map(c => '"' + c.replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'digital-feedback.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  exportPrint() {
    const printContents = document.getElementById('digitalFeedbackTable')?.outerHTML || '';
    const w = window.open('', '', 'height=700,width=900');
    if (!w) return;
    w.document.write('<html><head><title>Digital Feedback</title>');
    w.document.write('<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>');
    w.document.write('</head><body>');
    w.document.write(printContents);
    w.document.write('</body></html>');
    w.document.close();
    w.print();
  }
}
