import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivMainComponent } from './dynamic-div-main.component';

describe('DynamicDivMainComponent', () => {
  let component: DynamicDivMainComponent;
  let fixture: ComponentFixture<DynamicDivMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
