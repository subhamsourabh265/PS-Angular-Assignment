import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { TableMainComponent } from './table-main/table-main.component';
import { SortTablePipe } from './pipes/sort-table.pipe';


@NgModule({
  declarations: [
    TableMainComponent,
    SortTablePipe
  ],
  imports: [
    CommonModule,
    DynamicTableRoutingModule
  ]
})
export class DynamicTableModule { }
