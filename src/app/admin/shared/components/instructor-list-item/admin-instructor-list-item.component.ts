import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInstructor, IUser } from '../../models';

@Component({
  selector: 'app-admin-instructor-list-item',
  templateUrl: './admin-instructor-list-item.component.html',
  styleUrls: ['./admin-instructor-list-item.component.css']
})
export class AdminInstructorListItemComponent implements OnInit {

  @Input() instructor: IInstructor;
  @Output() edit = new EventEmitter();
  routePath = '';
  constructor() { }


  ngOnInit(): void {
    this.routePath = 'edit/instructor/' + this.instructor.instructor_id;
  }

}
