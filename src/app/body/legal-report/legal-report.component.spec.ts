import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalReportComponent } from './legal-report.component';

describe('LegalReportComponent', () => {
  let component: LegalReportComponent;
  let fixture: ComponentFixture<LegalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
