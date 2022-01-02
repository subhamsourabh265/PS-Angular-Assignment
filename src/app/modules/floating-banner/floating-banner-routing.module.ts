import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatingBannerMainComponent } from './floating-banner-main/floating-banner-main.component';

const routes: Routes = [
  {
    path: '',
    component: FloatingBannerMainComponent
  },
  {
    path: 'floatingBannerMain',
    component: FloatingBannerMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingBannerRoutingModule { }
