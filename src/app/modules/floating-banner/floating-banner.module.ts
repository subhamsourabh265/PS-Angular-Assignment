import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingBannerRoutingModule } from './floating-banner-routing.module';
import { FloatingBannerMainComponent } from './floating-banner-main/floating-banner-main.component';


@NgModule({
  declarations: [
    FloatingBannerMainComponent
  ],
  imports: [
    CommonModule,
    FloatingBannerRoutingModule
  ]
})
export class FloatingBannerModule { }
