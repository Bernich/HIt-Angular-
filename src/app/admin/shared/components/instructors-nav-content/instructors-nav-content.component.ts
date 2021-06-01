import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-instructors-nav-content',
  templateUrl: './instructors-nav-content.component.html',
  styleUrls: ['./instructors-nav-content.component.css']
})
export class InstructorNavContentComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  navigateToAddInstructor() {
    this.navigationService.navigateToCreateInstructor()
  }

}
