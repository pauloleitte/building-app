import { SharedService } from "./../../../shared/services/shared.service";
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Activity } from "../../models/Activity";
import { ActivityService } from "../../activity.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ["name", "percent", "action"];
  loading = false;
  dataSource: any;

  constructor(
    private _service: ActivityService,
    private _router: Router,
    private _sharedService: SharedService
  ) {}

  ngOnInit() {
    this._service.getActivities().subscribe(
      (resp) => {
        this.dataSource = new MatTableDataSource<Activity>(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        this._sharedService.showMessage(err, true);
      }
    );
  }
  navigate() {
    this._router.navigate(["/activity"]);
  }
}
