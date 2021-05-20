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

  courses = [
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/institute-0ea30831009b5155c09c5baf27cbc655.png',
      title: 'Learn with us everywhere anytime ',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/academics-bg-89794e0b7ef7eb5ffdc9fc9b4adfea66.png',
      title: 'Education at your doorsteps',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/night-banner-ad3a3fcf3c1ed36f363ddb7c8986f732.png',
      title: 'Learn with us everywhere anytime      ',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    }
  ];


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
