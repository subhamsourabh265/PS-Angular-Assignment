import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicBoxRoutingModule } from './dynamic-box-routing.module';
import { DynamicDivMainComponent } from './dynamic-div-main/dynamic-div-main.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { DynamicBoxComponent } from './dynamic-box/dynamic-box.component';
import { BoxDirective } from './box.directive';


@NgModule({
  declarations: [
    DynamicDivMainComponent,
    AlertBoxComponent,
    DynamicBoxComponent,
    BoxDirective
  ],
  imports: [
    CommonModule,
    DynamicBoxRoutingModule
  ]
})
export class DynamicBoxModule { }
