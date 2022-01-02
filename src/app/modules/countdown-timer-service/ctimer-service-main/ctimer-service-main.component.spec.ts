import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtimerServiceMainComponent } from './ctimer-service-main.component';

describe('CtimerServiceMainComponent', () => {
  let component: CtimerServiceMainComponent;
  let fixture: ComponentFixture<CtimerServiceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtimerServiceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtimerServiceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
