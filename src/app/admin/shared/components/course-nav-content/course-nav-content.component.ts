import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-course-nav-content',
  templateUrl: './course-nav-content.component.html',
  styleUrls: ['./course-nav-content.component.css']
})
export class CourseNavContentComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  navigateToAddCourse() {
    this.navigationService.navigateToCreateCourse()
  }

}
