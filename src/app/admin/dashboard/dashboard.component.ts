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
    { path: 'posts', icon: 'apps', title: 'News' },
    { path: 'add-posts', icon: 'apps', title: 'Add Posts' },
    { path: 'add-author', icon: 'apps', title: 'Add Author' },
    { path: 'users', icon: 'supervisor_account', title: 'Users' },
    { path: 'authors', icon: 'supervisor_account', title: 'Authors' },
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
