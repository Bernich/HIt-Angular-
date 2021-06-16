import { Component, Input, OnInit } from '@angular/core';
import { AuthService, NavigationService, NotificationService } from 'src/app/admin/shared/services';

@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css']
})
export class RegisterationPageComponent implements OnInit {


  isLoading = false;
  email: string = "";
  password: string = "";
  fname: string = "";
  lname: string = "";
  dob:string = "";
  tel:string = "";

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
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
