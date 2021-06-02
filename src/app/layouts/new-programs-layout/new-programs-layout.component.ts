import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/admin/shared/models';

@Component({
  selector: 'app-jhi-new-programs-layout',
  templateUrl: './new-programs-layout.component.html',
  styleUrls: ['./new-programs-layout.component.css', 'rounded-button.css'],
})
export class NewProgramsLayoutComponent implements OnInit {

  @Input() courses: Course[];

  ngOnInit() {

  }


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
