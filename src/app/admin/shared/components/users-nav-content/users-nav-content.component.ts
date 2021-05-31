import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-users-nav-content',
  templateUrl: './users-nav-content.component.html',
  styleUrls: ['./users-nav-content.component.css']
})
export class UsersNavContentComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  navigateToAddCourse() {
    this.navigationService.navigateToCreateUsers()
  }

}
