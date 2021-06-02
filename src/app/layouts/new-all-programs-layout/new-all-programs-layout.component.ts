import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Course } from 'src/app/admin/shared/models';

@Component({
  selector: 'app-jhi-new-all-programs-layout',
  templateUrl: './new-all-programs-layout.component.html',
  styleUrls: ['./new-all-programs-layout.component.css', 'rounded-button.css'],
})
export class NewAllProgramsLayoutComponent implements OnInit {

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
