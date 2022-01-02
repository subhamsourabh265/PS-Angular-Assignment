import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtimerMainComponent } from './ctimer-main/ctimer-main.component';

const routes: Routes = [
  {
    path: '',
    component: CtimerMainComponent
  },
  {
    path: 'ctimerMain',
    component: CtimerMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownTimerRoutingModule { }
