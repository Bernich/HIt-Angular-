import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-student-course-item',
  templateUrl: './student-course-item.component.html',
  styleUrls: ['./student-course-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentCourseItemComponent implements OnInit {
  constructor(private navigationService: NavigationService) {
    // this.router.navigateByUrl('/home');
  }

  @Input() course: ICourse;
  @Output() resume = new EventEmitter();
  @Output() overview = new EventEmitter();
  @Output() review = new EventEmitter();
  @Output() editReview = new EventEmitter();
  @Output() updateCourse = new EventEmitter();

  hovered = false;
  completed = 0;

  menuOpen = false;
  ngOnInit(): void {
    this.completed = (this.course.lessons_completed / this.course.total_lessons) * 100;
  }


  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleCourseState() {
    if (!this.course.updated) { this.resume.emit(this.course); }

    else { this.updateCourse.emit(this.course); }
  }
}
