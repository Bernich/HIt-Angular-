import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateCourse } from 'src/app/shared/dto/create-course.dto';
import { CreateCourseService } from 'src/app/shared/services/create-course.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

/**
 * @deprecated
 */
@Component({
  selector: 'app-dashboard-nav-content',
  templateUrl: './dashboard-nav-content.component.html',
  styleUrls: ['./dashboard-nav-content.component.css']
})
export class DashboardNavContentComponent implements OnInit {

  @Output() enrollWithTrx = new EventEmitter();

  constructor(
    private createCourse: CreateCourseService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  /**
   *Enroll into a course using the transaction reference
   */
  enrollWithTrxRef() {
    this.enrollWithTrx.emit();
  }

}
