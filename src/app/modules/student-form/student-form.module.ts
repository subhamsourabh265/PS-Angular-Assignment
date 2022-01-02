import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormRoutingModule } from './student-form-routing.module';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentFormRoutingModule
  ]
})
export class StudentFormModule { }
