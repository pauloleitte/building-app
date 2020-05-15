import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LoginService } from './service/login.service';
import { SharedModule } from '../shared.module';
import { LoadingComponent } from '../shared/components/loading/loading.component';


@NgModule({
  declarations: [LoginHomeComponent, LoginSignupComponent, LoadingComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
