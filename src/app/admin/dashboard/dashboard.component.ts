import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hivenews-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HivenewsDashboardComponent implements OnInit {

  links = [
    { path: "news", icon: 'apps', title: 'News' },
    { path: "add-news", icon: 'apps', title: 'Add News' },
    { path: "users", icon: 'view_module', title: 'Users' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
