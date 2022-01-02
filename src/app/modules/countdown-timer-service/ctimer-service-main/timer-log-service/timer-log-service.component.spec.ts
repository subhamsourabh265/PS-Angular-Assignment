import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogServiceComponent } from './timer-log-service.component';

describe('TimerLogServiceComponent', () => {
  let component: TimerLogServiceComponent;
  let fixture: ComponentFixture<TimerLogServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLogServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
