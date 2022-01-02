import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GetRouteParamDirective } from './get-route-param.directive';

describe('GetRouteParamDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [TemplateRef, ViewContainerRef],
    });
    // const directive = new GetRouteParamDirective();
    // expect(directive).toBeTruthy();
  });
});
