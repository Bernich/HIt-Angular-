import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ACTIVE_LINKS } from 'src/app/shared';

@Component({
  selector: 'jhi-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.css', 'news-lists.css', 'instructors-image-profile.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NewsHeaderComponent implements OnInit {

  @Input() activeRoute: string = "home";
  @Input() headerPost: IPost;

  currentPost = null;

  selectedInstructors = [
    'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/images/studentshomehero-1568023329563.jpg',
    'https://www.harvard.edu/wp-content/uploads/2021/02/011513_Women_6-1.jpeg'
  ]

  navigation = {
    showNavigationArrows: false,
    showNavigationIndicators: false
  };

  constructor(private sanitizer: DomSanitizer, private config: NgbCarouselConfig) {
    config.interval = 60000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.animation = false;

  }

  ngOnInit() {
    this.currentPost = this.headerPost;
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
    if (date) { return new Date(date).toDateString(); }
    return '---';
  }
}
