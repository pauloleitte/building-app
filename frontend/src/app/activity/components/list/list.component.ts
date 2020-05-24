import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/Activity';
import { ActivityService } from '../../activity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activities: Activity[];

  constructor(private _service: ActivityService) { }

  ngOnInit() {
    this._service.getActivities().subscribe(resp => {
      this.activities = resp;
      console.log(this.activities);
    })
  }

}
