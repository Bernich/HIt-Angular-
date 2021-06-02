import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.css',]
})
export class NewsDetailPageComponent implements OnInit {
  post: IPost;
  isLoading: boolean;





  constructor(

    private route: ActivatedRoute,
    private postService: PostService) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadPost(id);
    } else {
      // navigate from the page
    }
  }

  ngOnInit() {
  }


  loadPost(postId: string) {
    this.postService.find(postId).subscribe({
      next: (data: any) => {
        this.post = data;
      },
      error: (error: any) => { }
    })
  }

  update(description) {
    description.innerHTML = this.post.content;
  }




}
