import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDisplayServiceComponent } from './countdown-display-service.component';

describe('CountdownDisplayServiceComponent', () => {
  let component: CountdownDisplayServiceComponent;
  let fixture: ComponentFixture<CountdownDisplayServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownDisplayServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownDisplayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
