import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'jhi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() posts: IPost[];

  navigation = {
    showNavigationArrows: false,
    showNavigationIndicators: false
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

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
