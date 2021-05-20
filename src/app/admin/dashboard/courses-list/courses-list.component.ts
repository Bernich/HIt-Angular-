import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/entities/post';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'app-hive-admin-courses-list-page',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class HiveAdminCoursesListComponent implements OnInit {

  isLoading = false;
  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadAll();
  }


  editPost(post: IPost) {
    console.log("post ", post.post_id);
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
