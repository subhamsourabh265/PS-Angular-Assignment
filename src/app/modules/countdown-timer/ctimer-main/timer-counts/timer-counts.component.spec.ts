import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountsComponent } from './timer-counts.component';

describe('TimerCountsComponent', () => {
  let component: TimerCountsComponent;
  let fixture: ComponentFixture<TimerCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
