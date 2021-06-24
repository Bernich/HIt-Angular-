import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/admin/shared/models';
import { AuthService, CourseService, NavigationService, NotificationService } from 'src/app/admin/shared/services';

@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css']
})
export class RegisterationPageComponent implements OnInit {


  LINEAR_SCALETYPE = "LINEAR_SCALE";
  MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE";
  SHORT_ANSWER = "SHORT_ANSWER";
  CHECKBOXESTYPE = "CHECKBOXES";

  isLoading = false;
  email: string = "";
  password: string = "";
  fname: string = "";
  lname: string = "";
  dob: string = "";
  tel: string = "";


  course: ICourse = null;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.loadCourseWithSlug("modern-computer-science-it-and-programming");
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

  loadCourseWithSlug(slug) {
    this.courseService.getCourseWithSlug(slug).subscribe({
      next: (data: ICourse) => {
        this.course = data
      },
      error: (err: any) => { }
    });
  }


  updateAllComplete(data) {
    console.log(data)
  }

}
