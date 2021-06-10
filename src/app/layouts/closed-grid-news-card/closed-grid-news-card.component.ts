import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';

@Component({
  selector: 'app-jhi-closed-grid-news-card',
  templateUrl: './closed-grid-news-card.component.html',
  styleUrls: ['./closed-grid-news-card.component.css', 'rounded-button.css'],
})
export class ClosedGridNewsCardComponent implements OnInit {

  @Input() post: IPost;

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


  getDate(date: string) {
    if (date) { return new Date(date).toDateString(); }
    return '---';
  }
}
