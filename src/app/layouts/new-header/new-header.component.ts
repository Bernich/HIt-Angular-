import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ACTIVE_LINKS, convertToMoment } from 'src/app/shared';
import { getAllAuthorsString } from 'src/app/shared/util/author.utils';
import { IAuthor } from 'src/app/admin/shared/models';

@Component({
  selector: 'jhi-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css', 'news-lists.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NewHeaderComponent implements OnInit {

  @Input() activeRoute: string = "home";
  @Input() headerPosts: IPost;
  @Input() posts: IPost[]
  currentPost = null;


  navigation = {
    showNavigationArrows: false,
    showNavigationIndicators: false
  };

  constructor(private sanitizer: DomSanitizer, private config: NgbCarouselConfig) {
    config.interval = 60000000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.animation = false;
  }

  ngOnInit() {
    this.currentPost = this.headerPosts[0];
  }

  getPostThumbUrl(headerImageUrl: string): SafeUrl {

    return `url(${headerImageUrl})`;
  }

  assignCurrentPost(post) {
    this.currentPost = post;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 1024) {
      this.navigation.showNavigationArrows = false;
      this.navigation.showNavigationIndicators = false;
    } else {
      this.navigation.showNavigationArrows = true;
      this.navigation.showNavigationIndicators = true;
    }
  }

  getDate(date: string) {
    if (date) {

      return convertToMoment(date);

    }
    return '---';
  }


  getAuthors(authors: IAuthor[]) {
    return getAllAuthorsString(authors);

  }
}
