import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EComMainComponent } from './e-com-main/e-com-main.component';

const routes: Routes = [
  {
    path: '',
    component: EComMainComponent
  },
  {
    path: 'ecomMain',
    component: EComMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
