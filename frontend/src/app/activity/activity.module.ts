import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityRoutingModule } from './activity.routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivityService } from './activity.service';
import { SharedService } from '../shared/services/shared.service';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ActivityService,
    SharedService
  ]
})
export class ActivityModule { }
