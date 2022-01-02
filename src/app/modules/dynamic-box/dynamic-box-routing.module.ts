import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivMainComponent } from './dynamic-div-main/dynamic-div-main.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivMainComponent
  },
  {
    path: 'dynamicBoxMain',
    component: DynamicDivMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicBoxRoutingModule { }
