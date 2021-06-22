import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/admin/shared/models';
import { AuthService, CourseService, NavigationService, NotificationService } from 'src/app/admin/shared/services';

@Component({
  selector: 'app-confirm-course-details-page',
  templateUrl: './confirm-course-details-page.component.html',
  styleUrls: ['./confirm-course-details-page.component.css']
})
export class ConfirmCourseDetailsPageComponent implements OnInit {


  isLoading = false;
  email: string = "";
  password: string = "";
  fname: string = "";
  lname: string = "";
  dob: string = "";
  tel: string = "";

  course: Course = null;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private courseService: CourseService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    // Check url if there is a course id else create a new course
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      // unpack old course
      // this.course = unpack
      this.loadCourseWithSlug(slug);
    } else {
      // Create a new course
      // this.course = new CreateCourse()
    }
  }


  loadCourseWithSlug(slug) {
    this.isLoading = true;

    this.courseService.getCourseWithSlug(slug).subscribe({
      next: (course: Course) => {
        this.course = course;
        this.isLoading = false;

        // show curent current instructor
        // this.instructor = this.course.instructors[0];
      },
      error: (err: any) => {
        this.isLoading = false;

      }
    });
  }

  signin() {

    // this.isLoading = true;

    // this.authService.signin(this.email, this.password).subscribe({
    //   next: (data: any) => {
    //     // save token to local storage
    //     this.authService.saveUserToken(data.token);

    //     // redirect user to the dashboard
    //     this.navigationService.navigateToDashboard();
    //   },
    //   error: (err: any) => {
    //     // console.log(err);
    //     this.isLoading = false;

    //     this.notificationService.openSnackBar("Login Failed", err.error)
    //   }
    // })
  }
}
