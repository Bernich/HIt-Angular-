import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Resource } from '../../models';

@Component({
  selector: 'app-course-objectives-input',
  templateUrl: './course-objectives-input.component.html',
  styleUrls: ['./course-objectives-input.component.css']
})
export class CourseObjectivesInputComponent implements OnInit {

  @Input() title;
  @Input() data: Resource[] = [];
  @Output() update = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addObjective() {
    this.data.push(new Resource(uuidv4(), ''));
    this.updateData();
  }

  // todo Fix Update Form on Delete
  async removeObjective(item: Resource) {
    this.data = this.data.filter((value: Resource) => item.id != value.id);
    this.updateData();
  }


  updateData() {
    this.update.emit(this.data);
  }


}
