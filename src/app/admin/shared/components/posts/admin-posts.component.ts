import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hivenews-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class HivenewsAdminPostsComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit(): void {
  }

}
