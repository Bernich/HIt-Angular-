import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HeaderComponent implements OnInit {
  @Input() posts: IPost[];

  navigation = {
    showNavigationArrows: false,
    showNavigationIndicators: false
  };

  constructor(private sanitizer: DomSanitizer, private config: NgbCarouselConfig) {
    config.interval = 100000000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.animation = true;
  }

  ngOnInit() { }

  getPostThumbUrl(headerImageUrl: string): SafeUrl {
    return `url(${headerImageUrl})`;
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
