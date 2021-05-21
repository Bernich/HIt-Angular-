import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ICourse } from 'src/app/admin/shared/models';

@Component({
  selector: 'app-jhi-programs-card',
  templateUrl: './programs-card.component.html',
  styleUrls: ['./programs-card.component.css'],
})
export class ProgramsCardComponent implements OnInit {

  @Input() program: ICourse;

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
