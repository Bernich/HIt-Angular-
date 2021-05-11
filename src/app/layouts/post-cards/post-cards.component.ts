import { Component, OnInit, Input } from '@angular/core';

import {
  SafeUrl,
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl
} from '@angular/platform-browser';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'jhi-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['post-cards.component.css']
})
export class PostCardsComponent implements OnInit {
  @Input() posts: IPost[];
  @Input() isPodcast: boolean;
  @Input() podcasts: any[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  getPostThumbImage(headerImageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl(headerImageUrl);
  }

  getPostContent(postContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(postContent);
  }

  getPodcastUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  podcastLoaded() {
    // console.log('podcast loaded');
  }
}
