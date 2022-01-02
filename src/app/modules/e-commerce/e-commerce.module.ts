import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { EComMainComponent } from './e-com-main/e-com-main.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EComMainComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    FormsModule
  ]
})
export class ECommerceModule { }
