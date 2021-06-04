import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IAuthor } from 'src/app/admin/shared/models';

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


  getDate(date: string) {
    if (date) { return new Date(date).toDateString(); }
    return '---';
  }

  // Fix this
  getAuthors(authors: IAuthor[]) {
    let names = authors[0].first_name;

    if (authors.length > 1) {
      for (let i = 1; i < authors.length - 1; i++) {
        names = authors[i].first_name + " & " + names;
      }

    }

    return names;
  }
}
