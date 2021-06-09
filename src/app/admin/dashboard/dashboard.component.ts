import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService, NavigationService } from '../shared/services';

@Component({
  selector: 'app-hivenews-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HivenewsDashboardComponent implements OnInit {


  state = {
    isLoading: true,
  };

  showNavs = {
    courses: false,
    users: false,
    instructors: false,
    posts: false,
    authors: false,
  }

  user: any;

  links = [
    { path: 'courses', icon: 'apps', title: 'Courses' },
    // { path: 'courses/add', icon: 'apps', title: 'Add Course' },

    { path: 'posts', icon: 'notes', title: 'Articles' },
    // { path: 'posts/add', icon: 'apps', title: 'Add Posts' },

    { path: 'instructors', icon: 'how_to_reg', title: 'Instructors' },
    // { path: 'instructors/add', icon: 'apps', title: 'Add Instructor' },


    { path: 'authors', icon: 'verified_user', title: 'Authors' },
    // { path: 'authors/add', icon: 'apps', title: 'Add Author' },


    { path: 'users', icon: 'people_outline', title: 'Users' },
    // { path: 'users/add', icon: 'apps', title: 'Add User' },
  ];


  constructor(
    private router: Router,
    public authService: AuthService,
    private navigationService: NavigationService
  ) {

    this.router.events.forEach((event) => {
      //TODO  - Fix this, Decompose This was a proof of CONCEPT
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/admin/courses' || this.router.url === '/admin/dashboard/courses') {
          this.showNavs = {
            ...this.showNavs,
            users: false,
            instructors: false,
            courses: true,
            posts: false,
            authors: false,

          }
        } else if (this.router.url === '/admin/users' || this.router.url === '/admin/dashboard/users') {
          this.showNavs = {
            ...this.showNavs,
            courses: false,
            instructors: false,
            users: true,
            posts: false,
            authors: false,

          }
        } else if (this.router.url === '/admin/instructors' || this.router.url === '/admin/dashboard/instructors') {
          this.showNavs = {
            ...this.showNavs,
            courses: false,
            instructors: true,
            users: false,
            posts: false,
            authors: false,

          }
        } else if (this.router.url === '/admin/posts' || this.router.url === '/admin/dashboard/posts') {
          this.showNavs = {
            ...this.showNavs,
            courses: false,
            instructors: false,
            users: false,
            posts: true,
            authors: false,

          }
        }
        else if (this.router.url === '/admin/authors' || this.router.url === '/admin/dashboard/authors') {
          this.showNavs = {
            ...this.showNavs,
            courses: false,
            instructors: false,
            users: false,
            posts: false,
            authors: true,

          }
        }
        else {
          this.showNavs = {
            ...this.showNavs,
            courses: false,
            instructors: false,
            users: false,
            posts: false,
            authors: false,
          }
        }
      }

      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized

    });
  }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (data: any) => {
        this.user = data;

        // Validate the users
        if (this.user.roles.length === 1 && this.hasRole('USER')) this.navigationService.navigateToProfile();

        // Switch state to not loading
        this.state = { ...this.state, isLoading: false };
      },
      error: (err) => {
        // console.log(err);

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

  hasRole(role: string) {
    // decode the token to get its payload

    const roles = this.user.roles.filter((role) => role.toLowerCase() === role.toLowerCase());

    if (roles.length >= 1) {
      return true;
    }

    console.log(roles)
    return false;
  }


  visible(title: string) {



    // console.log("Has Roles Author", this.hasRole("Author"))
    // console.log("Has Roles Iinstructor", this.hasRole("INSTRUCTOR"))
    // console.log("Has Roles Admin", this.hasRole("AUTHOR"))
    // console.log("Has Roles User", this.hasRole("USER"))

    // If hes an ADMIN show
    if (this.authService.hasRole('ADMIN')) {
      console.log("User is an admin");
      return true;
    }


    // Check for Articles
    if (
      (title.toLocaleLowerCase() === 'Authors'.toLocaleLowerCase()
        ||
        title.toLocaleLowerCase() === 'Articles'.toLocaleLowerCase())
      && this.authService.hasRole('AUTHOR')
    ) {
      // console.log("Is an Author");
      return true;
    }

    // Check for Instructors
    if ((title.toLocaleLowerCase() === 'Instructors'.toLocaleLowerCase()
      ||
      title.toLocaleLowerCase() === 'Courses'.toLocaleLowerCase())
      && this.authService.hasRole('INSTRUCTOR')) {
      // console.log("is an instructor");
      return true;
    }

    // Check for users
    if (this.user.roles.length === 1 && this.hasRole('USER')) {
      // console.log("Is is normal user");
      return false;
    }


    return false;
  }
}
