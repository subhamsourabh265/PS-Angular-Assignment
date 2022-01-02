import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[getRouteParam]'
})
export class GetRouteParamDirective {

  constructor(
    private _tRef: TemplateRef<any>,
    private _vcRef: ViewContainerRef
  ) { }

  @Input() set getRouteParam(param: string) {}

}
