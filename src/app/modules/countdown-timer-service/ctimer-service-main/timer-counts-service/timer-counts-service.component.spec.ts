import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountsServiceComponent } from './timer-counts-service.component';

describe('TimerCountsServiceComponent', () => {
  let component: TimerCountsServiceComponent;
  let fixture: ComponentFixture<TimerCountsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
