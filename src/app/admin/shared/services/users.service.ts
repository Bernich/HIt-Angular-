import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private usersURL = `${SERVER_API_URL}/users`;

  constructor(private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  allUsers() {
    const token = localStorage.getItem('currentUser');
    /**
     * Creates an httpOptions and attaches a Bearer token
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.get(this.usersURL, httpOptions);
  }



  getUserById(uid: string) {
    const token = localStorage.getItem('currentUser');

    /**
     * Creates an httpOptions and attaches a Bearer token
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.get(this.usersURL + `/${uid}`, httpOptions);
  }


  /**
   * Request a password reset with email
   * @param email
   */
  requestPasswordReset(email: string) {

    const payload = {
      email
    };

    return this.httpClient.post(`${this.usersURL}/begin_password_reset`, payload,);
  }



}
