import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

/**
 * @deprecated
 *
 * using the new course-grid-item
 * remove this if not used
 */
@Component({
  selector: 'app-course-detailed-list-item',
  templateUrl: './course-detailed-list-item.component.html',
  styleUrls: ['./course-detailed-list-item.component.css']
})
export class CourseDetailedListItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() overview = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
