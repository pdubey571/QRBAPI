import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SetPinComponent } from './account/set-pin/set-pin.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { InformationSubmitComponent } from './covid-steps/information-submit/information-submit.component';
import { PaasListComponent } from './covid-steps/paas-list/paas-list.component';
import { PaasManageComponent } from './covid-steps/paas-manage/paas-manage.component';
import { PersonalAttachementsComponent } from './covid-steps/personal-attachements/personal-attachements.component';
import { PersonalInformationComponent } from './covid-steps/personal-information/personal-information.component';
import { QrcodeComponent } from './covid-steps/qrcode/qrcode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { RestaurantloginComponent } from './account/restaurantlogin/restaurantlogin.component';
import { VerifyPinComponent } from './account/verify-pin/verify-pin.component';
import { WelcomeComponent } from './account/welcome/welcome.component';
import { CustomerloginComponent } from './account/customerlogin/customerlogin.component';
import { CustomerverifypinComponent } from './account/customerverifypin/customerverifypin.component';

const routes: Routes = [
  {path: '', redirectTo: 'restaurantlogin', pathMatch: 'full'},
  {path:'restaurantlogin', component: RestaurantloginComponent},
  {path:'customerlogin', component: CustomerloginComponent},
  {path:'customerverifypin', component: CustomerverifypinComponent},
  {path:'verifypin', component: VerifyPinComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignUpComponent},
  {path:'set-pin', component: SetPinComponent},
  {path:'user', component: UserComponent, 
    children: [
      {
        path: '',
        redirectTo: 'buyer',
        pathMatch: 'full'
      },
      {path: 'seller', loadChildren: () => import("./user/seller/seller.module").then(m=> m.SellerModule)},
      {path: 'buyer', loadChildren: () => import("./user/buyer/buyer.module").then(m=> m.BuyerModule)},
    ],
  },
  {path:'personal-information', component: PersonalInformationComponent},
  {path:'qrcode', component: QrcodeComponent},
  {path:'personal-attachements', component: PersonalAttachementsComponent},
  {path:'information-submit', component: InformationSubmitComponent},
  {path:'paas-manage', component: PaasManageComponent},
  {path:'paas-list', component: PaasListComponent},
  {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
