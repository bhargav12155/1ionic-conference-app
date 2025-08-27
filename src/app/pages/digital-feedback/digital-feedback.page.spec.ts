import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalFeedbackPage } from './digital-feedback.page';

describe('DigitalFeedbackPage', () => {
  let component: DigitalFeedbackPage;
  let fixture: ComponentFixture<DigitalFeedbackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
