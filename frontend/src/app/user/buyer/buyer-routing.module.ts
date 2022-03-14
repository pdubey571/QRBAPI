import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidPassComponent } from './covid-pass/covid-pass.component';
import { InfoComponent } from './info/info.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { PreLoginResturantListComponent } from './pre-login-resturant-list/pre-login-resturant-list.component';
import { SplashComponent } from './splashscreens/splash/splash.component';

const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path:'splash', component: SplashComponent},
  {path:'menu', component: MenuViewComponent},
  {path:'info', component: InfoComponent},
  {path:'covid-pass', component: CovidPassComponent},
  {path:'resturant-list', component: PreLoginResturantListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
