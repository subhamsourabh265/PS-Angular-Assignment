import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EComMainComponent } from './e-com-main.component';

describe('EComMainComponent', () => {
  let component: EComMainComponent;
  let fixture: ComponentFixture<EComMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EComMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EComMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
