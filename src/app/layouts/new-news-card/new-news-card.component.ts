import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-new-news-card',
  templateUrl: './new-news-card.component.html',
  styleUrls: ['./new-news-card.component.css', 'rounded-button.css'],
})
export class NewNewsCardComponent implements OnInit {

  @Input() news: IPost;

  ngOnInit() { }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 1024) {
      // this.navigation.showNavigationArrows = false;
      // this.navigation.showNavigationIndicators = false;
    } else {
      // this.navigation.showNavigationArrows = true;
      // this.navigation.showNavigationIndicators = true;
    }
  }


  getDate(data: string) {
    return new Date(data).toLocaleDateString()
  }
}
