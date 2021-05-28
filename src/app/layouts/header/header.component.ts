import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ACTIVE_LINKS } from 'src/app/shared';

@Component({
  selector: 'jhi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HeaderComponent implements OnInit {

  @Input() activeRoute: string = "home";
  @Input() headerPosts;

  currentPost = null;


  navigation = {
    showNavigationArrows: false,
    showNavigationIndicators: false
  };

  constructor(private sanitizer: DomSanitizer, private config: NgbCarouselConfig) {
    config.interval = 30000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
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
}
