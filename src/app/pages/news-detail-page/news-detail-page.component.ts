import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PostService } from 'src/app/entities/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.css',]
})
export class NewsDetailPageComponent implements OnInit {
  newsDetail = null;
  post: IPost;


  randomPosts: IPost[] = null;

  isLoading: boolean;

  // headerImageUrl



  constructor(

    private route: ActivatedRoute,
    private postService: PostService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.loadPost(slug);
    } else {
      // navigate from the page
    }

    this.loadRandomPost();

  }

  ngOnInit() {
  }


  getPostThumbUrl(headerImageUrl: string): SafeUrl {

    return `url(${headerImageUrl})`;
  }



  loadPost(slug: string) {
    this.postService.getPostWithSlug(slug).subscribe({
      next: (data: any) => {
        this.post = data;
      },
      error: (error: any) => { }
    })
  }

  update(element, data) {
    element.innerHTML = data;
  }

  loadRandomPost() {
    this.postService.all().subscribe({
      next: (data: IPost[]) => {
        this.randomPosts = data;

        // only show 3 random posts
        if (this.randomPosts.length > 3) {
          this.randomPosts = this.randomPosts.slice(0, 3);
        }
      },
      error: (err: any) => { }
    })
  }



}
