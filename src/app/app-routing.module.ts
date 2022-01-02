import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadService } from './app-common/services/custom-preload.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'floatingBanner',
    pathMatch: 'full'
  },
  {
    path: 'floatingBanner',
    loadChildren: () => import('./modules/floating-banner/floating-banner.module').then(
      m => m.FloatingBannerModule
    )
  },
  {
    path: 'ecom',
    data: {
      preload: true
    },
    loadChildren: () => import('./modules/e-commerce/e-commerce.module').then(
      m => m.ECommerceModule
    )
  },
  {
    path: 'ctimer1',
    loadChildren: () => import('./modules/countdown-timer/countdown-timer.module').then(
      m => m.CountdownTimerModule
    )
  },
  {
    path: 'ctimer2',
    loadChildren: () => import('./modules/countdown-timer-service/countdown-timer-service.module').then(
      m => m.CountdownTimerServiceModule
    )
  },
  {
    path: 'dynamicTable',
    data: {
      preload: true
    },
    loadChildren: () => import('./modules/dynamic-table/dynamic-table.module').then(
      m => m.DynamicTableModule
    )
  },
  {
    path: 'dynamicBox',
    loadChildren: () => import('./modules/dynamic-box/dynamic-box.module').then(
      m => m.DynamicBoxModule
    )
  },
  {
    path: 'people',
    data: {
      preload: true
    },
    loadChildren: () => import('./modules/people/people.module').then(
      m => m.PeopleModule
    )
  },
  {
    path: 'studentForm',
    loadChildren: () => import('./modules/student-form/student-form.module').then(
      m => m.StudentFormModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
