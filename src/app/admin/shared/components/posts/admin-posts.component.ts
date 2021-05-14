import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'app-hivenews-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class HivenewsAdminPostsComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
