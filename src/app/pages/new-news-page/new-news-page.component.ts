import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';

@Component({
  selector: 'jhi-new-news-page',
  templateUrl: './new-news-page.component.html',
  styleUrls: ['./new-news-page.component.css',]
})
export class NewNewsPageComponent implements OnInit {
  posts: IPost[];
  isLoading: boolean;



  constructor(private postService: PostService) { }

  ngOnInit() {

    this.loadAll();
  }

  loadAll() {
    this.postService.query().subscribe({
      next: (data: any) => {
        this.posts = data
      },

      error: (err) => { }
    })
  }

}

