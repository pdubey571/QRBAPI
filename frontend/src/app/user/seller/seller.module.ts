import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { SellerRoutingModule } from './seller-routing.module';
import { SplashOneComponent } from './splashscreens/splash-one/splash-one.component';
import { SplashTwoComponent } from './splashscreens/splash-two/splash-two.component';
import { SplashComponent } from './splashscreens/splash/splash.component';
import { SplashThreeComponent } from './splashscreens/splash-three/splash-three.component';
import { SplashFourComponent } from './splashscreens/splash-four/splash-four.component';
import { SplashFiveComponent } from './splashscreens/splash-five/splash-five.component';
import { CongratulationsComponent } from './splashscreens/congratulations/congratulations.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { EditComponent } from './edit/edit.component';
import { EditGeneralDetailsComponent } from './edit-general-details/edit-general-details.component';
import { EditContactDetailsComponent } from './edit-contact-details/edit-contact-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { InfoComponent } from './info/info.component';
import { CovidPassComponent } from './covid-pass/covid-pass.component';
import { BusinessHoursComponent } from './business-hours/business-hours.component';


@NgModule({
  declarations: [
    SplashOneComponent,
    SplashTwoComponent,
    SplashComponent,
    SplashThreeComponent,
    SplashFourComponent,
    SplashFiveComponent,
    CongratulationsComponent,
    ProfileComponent,
    ViewComponent,
    ViewInfoComponent,
    EditComponent,
    EditGeneralDetailsComponent,
    EditContactDetailsComponent,
    MenuComponent,
    MenuViewComponent,
    MenuEditComponent,
    InfoComponent,
    CovidPassComponent,
    BusinessHoursComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgOptionHighlightModule
  ]
})
export class SellerModule { }
