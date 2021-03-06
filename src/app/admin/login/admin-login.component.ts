import { Component, Input, OnInit } from '@angular/core';
import { NavigationService, NotificationService } from '../shared/services';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'hivenews-login-page',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class HivenewsAdminLoginComponent implements OnInit {


  isLoading = false;
  email: string = "";
  password: string = "";

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }




  signin() {

    this.isLoading = true;

    this.authService.signin(this.email, this.password).subscribe({
      next: (data: any) => {
        // save token to local storage
        this.authService.saveUserToken(data.token);

        // redirect user to the dashboard
        this.navigationService.navigateToDashboard();
      },
      error: (err: any) => {
        // console.log(err);
        this.isLoading = false;

        this.notificationService.openSnackBar("Login Failed", err.error)
      }
    })
  }
}
