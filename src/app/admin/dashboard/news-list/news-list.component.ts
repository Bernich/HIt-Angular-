import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/entities/post';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'hivenews-admin-news-list-page',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class HivenewsAdminListComponent implements OnInit {

  isLoading = false;
  posts: IPost[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadAll();
  }


  loadAll() {
    this.isLoading = true;

    this.postService.query().subscribe((res: HttpResponse<IPost[]>) => {
      this.posts = res.body;
      this.posts.forEach((p: IPost) => (p.show = false));
      // this.headerPosts = this.posts.slice(0, 3);
      this.isLoading = false;
    });
  }
}
