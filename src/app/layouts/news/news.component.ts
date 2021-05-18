import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-news-list',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsListComponent implements OnInit {



  news = [
    {
      image: 'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/images/studentshomehero-1568023329563.jpg',
      title: 'Learn a skill and earn a living'
    },
    {
      image: 'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/images/studentshomehero-1568023329563.jpg',
      title: 'This is a Second course program'
    },
    {
      image: 'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/images/studentshomehero-1568023329563.jpg',
      title: 'This is a Third course program'
    },
  ]
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
}
