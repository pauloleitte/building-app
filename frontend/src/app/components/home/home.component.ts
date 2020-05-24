import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  userName: String;

  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem("USERNAME") ? localStorage.getItem("USERNAME") : null;
  }

}
