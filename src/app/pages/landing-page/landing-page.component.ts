import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';

@Component({
  selector: 'jhi-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  posts: IPost[];
  headerPosts: IPost[];
  isLoading: boolean;
  isPodcast: boolean;
  podcasts = [];

  constructor(private postService: PostService, private http: HttpClient) { }

  ngOnInit() {
    this.loadAll();
    this.getPodcasts();
  }

  loadAll() {
    this.isLoading = true;

    this.postService.query().subscribe((res: HttpResponse<IPost[]>) => {
      this.posts = res.body;
      this.posts.forEach(p => (p.show = false));
      this.headerPosts = this.posts.slice(0, 3);
      this.isLoading = false;
    });
  }

  tabSelected(category: string) {
   
    this.loadAllByCategory(category);
  }

  loadAllByCategory(category: string) {
    this.isLoading = true;

    if (category === 'Podcast') {
      this.isPodcast = true;
      this.isLoading = false;
    } else if (category === 'All') {
      this.isPodcast = false;
      this.postService.query().subscribe((res: HttpResponse<Post[]>) => {
        this.posts = res.body;
        this.isLoading = false;
      });
    } else {
      this.isPodcast = false;
      this.postService
        .query({ category })
        .subscribe((res: HttpResponse<Post[]>) => {
          this.posts = res.body;
          this.isLoading = false;
        });
    }
  }

  getPodcasts() {
    //   this.http
    //     .get<IPodcast[]>('http://localhost:8080/api/podcasts')
    //     .subscribe(data => (this.podcasts = data));
  }
}
