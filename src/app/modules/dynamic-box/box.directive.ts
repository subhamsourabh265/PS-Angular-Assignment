import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ssAppBox]',
})
export class BoxDirective {
  constructor(public vcref: ViewContainerRef) {}
}
