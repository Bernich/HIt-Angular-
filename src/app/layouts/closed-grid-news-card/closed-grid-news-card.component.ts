import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';
import * as moment from 'moment';
import { IAuthor } from 'src/app/admin/shared/models';
import { convertToMoment } from 'src/app/shared';
import { getAllAuthorsString } from 'src/app/shared/util/author.utils';

@Component({
  selector: 'app-jhi-closed-grid-news-card',
  templateUrl: './closed-grid-news-card.component.html',
  styleUrls: ['./closed-grid-news-card.component.css', 'rounded-button.css'],
})
export class ClosedGridNewsCardComponent implements OnInit {

  @Input() post: IPost;
  myMoment: moment.Moment;

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

    if (date) {
      return convertToMoment(date);
    }
    return '---';
  }

  getAuthors(authors: IAuthor[]) {
    return getAllAuthorsString(authors);

  }
}
