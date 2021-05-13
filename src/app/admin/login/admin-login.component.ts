import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'hivenews-login-page',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class HivenewsAdminLoginComponent implements OnInit {


  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private navigationService: NavigationService) { }

  ngOnInit(): void {
  }




  signin() {

    console.log(this.email, this.password);


    this.authService.signin(this.email, this.password).subscribe({
      next: (data: any) => {
        console.log(data);
        // save token to local storage
        this.authService.saveUserToken(data.token);

        // redirect user to the dashboard
        this.navigationService.navigateToDashboard();
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
