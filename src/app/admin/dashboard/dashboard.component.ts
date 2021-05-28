import { Component, Input, OnInit } from '@angular/core';
import { AuthService, NavigationService } from '../shared/services';

@Component({
  selector: 'app-hivenews-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HivenewsDashboardComponent implements OnInit {


  state = {
    isLoading: true
  };

  user: any;

  links = [
    { path: 'courses', icon: 'apps', title: 'Courses' },
    { path: 'courses/add', icon: 'apps', title: 'Add Course' },

    { path: 'posts', icon: 'apps', title: 'Articles' },
    { path: 'posts/add', icon: 'apps', title: 'Add Posts' },

    { path: 'instructors', icon: 'supervisor_account', title: 'Instructors' },
    { path: 'instructors/add', icon: 'apps', title: 'Add Instructor' },

    { path: 'users', icon: 'supervisor_account', title: 'Users' },
    { path: 'users/add', icon: 'apps', title: 'Add User' },
  ];


  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (data: any) => {
        console.log(data); this.user = data;

        // Switch state to not loading
        this.state = { ...this.state, isLoading: false };
      },
      error: (err) => {
        console.log(err);

        // Switch state to not loading
        this.state = { ...this.state, isLoading: false };
      }
    });

  }



  logout() {
    // Performs all logout operations
    this.authService.logout();

    // navigate to login page
    this.navigationService.navigateToLogin();
  }
}
