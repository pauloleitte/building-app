import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { SharedModule } from "./shared/shared.module";
import { LoginModule } from "./login/login.module";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityModule } from './activity/activity.module';
import { SharedService } from './shared/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    ActivityModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }