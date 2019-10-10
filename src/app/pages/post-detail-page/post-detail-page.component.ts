import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'jhi-post-detail',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.css']
})
export class HiveNewsClientPostDetailComponent implements OnInit {
  post: IPost;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
    });
  }

  postThumb(headerImageUrl: string): SafeUrl {
    return `url(${headerImageUrl})`;
  }

  postContent(content: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
