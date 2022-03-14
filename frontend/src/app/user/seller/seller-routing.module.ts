import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CongratulationsComponent } from './splashscreens/congratulations/congratulations.component';
import { SplashFiveComponent } from './splashscreens/splash-five/splash-five.component';
import { SplashFourComponent } from './splashscreens/splash-four/splash-four.component';
import { SplashOneComponent } from './splashscreens/splash-one/splash-one.component';
import { SplashThreeComponent } from './splashscreens/splash-three/splash-three.component';
import { SplashTwoComponent } from './splashscreens/splash-two/splash-two.component';
import { SplashComponent } from './splashscreens/splash/splash.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { InfoComponent } from './info/info.component';
import { CovidPassComponent } from './covid-pass/covid-pass.component';
import { BusinessHoursComponent } from './business-hours/business-hours.component';

const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path:'profile', component: ProfileComponent, 
  children: [
    {
      path: '',
      redirectTo: 'view',
      pathMatch: 'full'
    },
    {
      path: 'view',
      component: ViewComponent,
    },
    {
      path: 'edit',
      component: EditComponent,
    },
    {
      path: 'business-hours',
      component: BusinessHoursComponent,
    }
  ] },
  {path:'splash', component: SplashComponent,
    children: [
      {
        path: '',
        redirectTo: 'splashone',
        pathMatch: 'full'
      },
      {
        path: 'splashone',
        component: SplashOneComponent,
      },
      {
        path: 'splashtwo',
        component: SplashTwoComponent,
      }
      ,
      {
        path: 'splashthree',
        component: SplashThreeComponent,
      }
      ,
      {
        path: 'splashfour',
        component: SplashFourComponent,
      }
      ,
      {
        path: 'splashfive',
        component: SplashFiveComponent,
      }
    ]
  },
  {path:'congratulations', component: CongratulationsComponent },
  {path:'menu', component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'menuview',
        pathMatch: 'full'
      },
      {
        path: 'menuview',
        component: MenuViewComponent,
      },
      {
        path: 'menuedit',
        component: MenuEditComponent,
      }
    ]
  },
  {path:'info', component: InfoComponent},
  {path:'covid-pass', component: CovidPassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
