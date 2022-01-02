import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBannerMainComponent } from './floating-banner-main.component';

describe('FloatingBannerMainComponent', () => {
  let component: FloatingBannerMainComponent;
  let fixture: ComponentFixture<FloatingBannerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingBannerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingBannerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
