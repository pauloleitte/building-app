import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "activities",
    loadChildren: () => import("./activity/activity.module").then(m => m.ActivityModule)
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
