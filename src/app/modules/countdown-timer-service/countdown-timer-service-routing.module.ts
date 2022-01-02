import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtimerServiceMainComponent } from './ctimer-service-main/ctimer-service-main.component';

const routes: Routes = [
  {
    path: '',
    component: CtimerServiceMainComponent
  },
  {
    path: 'ctimerServiceMain',
    component: CtimerServiceMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownTimerServiceRoutingModule { }
