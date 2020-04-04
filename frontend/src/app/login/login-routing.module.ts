import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


const routes: Routes = [
  { path: "", component: LoginHomeComponent },
  { path: "sigin", component: LoginSignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
