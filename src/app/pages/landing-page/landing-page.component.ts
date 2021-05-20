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
  }

}
