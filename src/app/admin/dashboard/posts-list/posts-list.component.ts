import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/entities/post';
import { IPost } from 'src/app/shared/model/post.model';
import { NavigationService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-news-list-page',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class HivenewsAdminListComponent implements OnInit {

  isLoading = false;
  posts: IPost[];

  constructor(
    private postService: PostService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.loadAll();
  }


  editPost(post: IPost) {
    this.navigationService.editPost(post.post_id)
  }

  loadAll() {
    this.isLoading = true;

    this.postService.query().subscribe({
      next: (data: any) => {
        this.posts = data;
        this.posts.forEach((p: IPost) => (p.show = false));
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;

      }
    });
  }
}
