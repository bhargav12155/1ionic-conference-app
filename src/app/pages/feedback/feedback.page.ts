import { Component, OnInit } from '@angular/core';
import { FeedbackService, FeedbackSubmission } from '../../providers/feedback.service';

interface FormModel {
  overall: string;
  positives: string;
  negatives: string;
  priceOpinion: string;
  referralPotential: string;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss']
})
export class FeedbackPage implements OnInit {
  form: FormModel = {
    overall: '',
    positives: '',
    negatives: '',
    priceOpinion: '',
    referralPotential: 'Yes',
    name: '',
    email: '',
    phone: ''
  };

  submitting = false;
  error: string | null = null;
  success: string | null = null;

  // Table state
  submissions: FeedbackSubmission[] = [];
  search = '';
  sortColumn: string = 'timestamp';
  sortDirection: 'asc' | 'desc' = 'desc';
  pageSize = 10;
  currentPage = 1;
  timeFilter: 'all' | '24h' | '7d' | '30d' = 'all';
  referralFilter: 'all' | 'Yes' | 'No' | 'Maybe' = 'all';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.submissions = this.feedbackService.getAll();
  }

  resetForm() {
    this.form = {
      overall: '',
      positives: '',
      negatives: '',
      priceOpinion: '',
      referralPotential: 'Yes',
      name: '',
      email: '',
      phone: ''
    };
  }

  async submit() {
    this.submitting = true;
    this.error = null;
    this.success = null;
    try {
      const context = await this.feedbackService.buildContext();
      const payload = {
        timestamp: new Date().toISOString(),
        sessionId: Date.now().toString(),
        propertyFeedback: {
          overall: this.form.overall || 'N/A',
            positives: this.form.positives || 'N/A',
            negatives: this.form.negatives || 'N/A',
            priceOpinion: this.form.priceOpinion || 'N/A',
            referralPotential: this.form.referralPotential || 'N/A'
        },
        contact: {
          name: this.form.name || 'Anonymous',
          email: this.form.email || '',
          phone: this.form.phone || ''
        },
        location: context.location,
        device: context.device,
        network: context.network
      };
      await this.feedbackService.submit(payload);
      this.success = 'Feedback submitted';
      this.resetForm();
      this.load();
    } catch (e: any) {
      this.error = 'Submitted locally (offline)';
      this.load();
    } finally {
      this.submitting = false;
    }
  }

  // Filtering & sorting helpers
  get filtered(): FeedbackSubmission[] {
    let data = [...this.submissions];

    // Time filter
    const now = Date.now();
    if (this.timeFilter !== 'all') {
      const cutoffMap: any = { '24h': 24*3600*1000, '7d': 7*24*3600*1000, '30d': 30*24*3600*1000 };
      const cutoff = now - cutoffMap[this.timeFilter];
      data = data.filter(d => new Date(d.timestamp).getTime() >= cutoff);
    }

    // Referral filter
    if (this.referralFilter !== 'all') {
      data = data.filter(d => d.propertyFeedback?.referralPotential === this.referralFilter);
    }

    // Search
    if (this.search.trim()) {
      const q = this.search.toLowerCase();
      data = data.filter(d =>
        d.contact?.name?.toLowerCase().includes(q) ||
        d.contact?.email?.toLowerCase().includes(q) ||
        d.propertyFeedback?.overall?.toLowerCase().includes(q)
      );
    }

    // Sort
    if (this.sortColumn) {
      data.sort((a: any, b: any) => {
        let va: any = a[this.sortColumn];
        let vb: any = b[this.sortColumn];
        if (this.sortColumn === 'timestamp') {
          va = new Date(a.timestamp).getTime();
          vb = new Date(b.timestamp).getTime();
        }
        if (va < vb) return this.sortDirection === 'asc' ? -1 : 1;
        if (va > vb) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return data;
  }

  get paginated(): FeedbackSubmission[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  get totalPages(): number { return Math.ceil(this.filtered.length / this.pageSize) || 1; }

  setSort(col: string) {
    if (this.sortColumn === col) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = col;
      this.sortDirection = 'asc';
    }
  }

  exportCSV() {
    const rows = [
      ['Timestamp','Name','Email','Phone','Overall','Positives','Negatives','Price Opinion','Referral','Latitude','Longitude']
    ];
    this.filtered.forEach(r => {
      rows.push([
        r.timestamp,
        r.contact?.name || '',
        r.contact?.email || '',
        r.contact?.phone || '',
        r.propertyFeedback?.overall || '',
        r.propertyFeedback?.positives || '',
        r.propertyFeedback?.negatives || '',
        r.propertyFeedback?.priceOpinion || '',
        r.propertyFeedback?.referralPotential || '',
        r.location?.coordinates?.latitude?.toString() || '',
        r.location?.coordinates?.longitude?.toString() || ''
      ]);
    });
    const csv = rows.map(r => r.map(c => '"'+c.replace(/"/g,'""')+'"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'feedback.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  // Simple PDF using window.print() approach (print specific section)
  exportPrint() {
    const printContents = document.getElementById('feedbackTable')?.outerHTML || '';
    const w = window.open('', '', 'height=700,width=900');
    if (!w) return;
    w.document.write('<html><head><title>Feedback</title>');
    w.document.write('<style>table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:4px;font-size:12px;}th{background:#eee;}</style>');
    w.document.write('</head><body>');
    w.document.write(printContents);
    w.document.write('</body></html>');
    w.document.close();
    w.print();
  }

  changePage(p: number) { if (p>=1 && p<=this.totalPages) this.currentPage = p; }
}
