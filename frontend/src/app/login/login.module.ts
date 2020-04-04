import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


@NgModule({
  declarations: [LoginHomeComponent, LoginSignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
