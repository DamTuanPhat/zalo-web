import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialAccountComponent } from './official-account.component';

describe('OfficialAccountComponent', () => {
  let component: OfficialAccountComponent;
  let fixture: ComponentFixture<OfficialAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
