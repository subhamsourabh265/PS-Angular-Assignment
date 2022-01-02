import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LeftPanelComponent } from './Components/left-panel/left-panel.component';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { GetRouteParamDirective } from './directives/get-route-param.directive';

const commonComponents = [
  HeaderComponent, 
  FooterComponent, 
  LeftPanelComponent, 
  HighlightTextDirective, 
  GetRouteParamDirective
];

@NgModule({
  declarations: [...commonComponents],
  imports: [
    CommonModule,
    AppCommonRoutingModule,
  ],
  exports: [...commonComponents],
})
export class AppCommonModule { }
