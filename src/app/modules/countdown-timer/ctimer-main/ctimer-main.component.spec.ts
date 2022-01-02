import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtimerMainComponent } from './ctimer-main.component';

describe('CtimerMainComponent', () => {
  let component: CtimerMainComponent;
  let fixture: ComponentFixture<CtimerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtimerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtimerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
