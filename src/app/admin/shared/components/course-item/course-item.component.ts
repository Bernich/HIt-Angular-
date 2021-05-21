import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ICourse } from '../../models';

@Component({
  selector: 'app-admin-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCourseItemComponent implements OnInit {
  constructor(
  ) {
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
    // this.completed = (this.course.lessons_completed / this.course.total_lessons) * 100;
  }


  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleCourseState() {
    // if (!this.course.updated) { this.resume.emit(this.course); }

    // else { this.updateCourse.emit(this.course); }
  }
}
