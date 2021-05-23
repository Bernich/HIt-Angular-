import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';

@Component({
  selector: 'app-jhi-vertical-divider',
  templateUrl: './vertical-divider.component.html',
  styleUrls: ['./vertical-divider.component.css'],
})
export class VereticalDividerComponent implements OnInit {

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
