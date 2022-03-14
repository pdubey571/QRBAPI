import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { BuyerRoutingModule } from './buyer-routing.module';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { SplashComponent } from './splashscreens/splash/splash.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InfoComponent } from './info/info.component';
import { CovidPassComponent } from './covid-pass/covid-pass.component';
import { PreLoginResturantListComponent } from './pre-login-resturant-list/pre-login-resturant-list.component';

@NgModule({
  declarations: [
    MenuViewComponent,
    SplashComponent,
    InfoComponent,
    CovidPassComponent,
    PreLoginResturantListComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgOptionHighlightModule,
    SlickCarouselModule
  ]
})
export class BuyerModule { }
