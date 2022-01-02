import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicBoxRoutingModule } from './dynamic-box-routing.module';
import { DynamicDivMainComponent } from './dynamic-div-main/dynamic-div-main.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';


@NgModule({
  declarations: [
    DynamicDivMainComponent,
    AlertBoxComponent
  ],
  imports: [
    CommonModule,
    DynamicBoxRoutingModule
  ]
})
export class DynamicBoxModule { }
