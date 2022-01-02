import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputServiceComponent } from './timer-input-service.component';

describe('TimerInputServiceComponent', () => {
  let component: TimerInputServiceComponent;
  let fixture: ComponentFixture<TimerInputServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
