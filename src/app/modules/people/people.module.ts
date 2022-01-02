import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { MainComponent } from './main/main.component';
import { InnerComponent } from './inner/inner.component';


@NgModule({
  declarations: [
    MainComponent,
    InnerComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
