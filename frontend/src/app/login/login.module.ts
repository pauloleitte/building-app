import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LoginService } from './service/login.service';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [LoginHomeComponent, LoginSignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
