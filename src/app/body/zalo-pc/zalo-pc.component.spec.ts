import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaloPcComponent } from './zalo-pc.component';

describe('ZaloPcComponent', () => {
  let component: ZaloPcComponent;
  let fixture: ComponentFixture<ZaloPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaloPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaloPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
