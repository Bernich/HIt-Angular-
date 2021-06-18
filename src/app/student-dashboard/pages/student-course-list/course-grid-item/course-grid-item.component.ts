import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-course-grid-item',
  templateUrl: './course-grid-item.component.html',
  styleUrls: ['./course-grid-item.component.css']
})
export class CourseGridItemComponent implements OnInit {


  @Input() course: ICourse;
  @Output() overview = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
