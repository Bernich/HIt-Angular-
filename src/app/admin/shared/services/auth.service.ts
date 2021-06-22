import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import decode from 'jwt-decode';
import { SERVER_API_URL } from 'src/app/app.constants';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';



@Injectable()
export class AuthService {

  jwtHelper = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object) { }


  private url = SERVER_API_URL;

  public hasRole(expectedRole: string) {
    const token = localStorage.getItem('currentUser');
    // decode the token to get its payload
    const tokenPayload: any = decode(token);

    const roles = tokenPayload.roles.filter((role) => role.toLowerCase() === expectedRole.toLowerCase());

    if (roles.length >= 1) {
      return true;
    }

    return false;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  signin(username: string, password: string) {

    const hash = btoa(username + ':' + password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + hash,
      })
    };
    return this.httpClient.get(this.url + '/user/token', httpOptions);
    // return this.httpClient.post(this.url)
  }

  signUp(user: any) {
    return this.httpClient.post(this.url + '/users', user);
  }

  /**
   * Removes a token from the LocalStorage
   */
  logout() {
    // Logout in client mode only
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token: string) {
    // localStorage.setItem('currentUser', JSON.stringify(x.token));
    localStorage.setItem('currentUser', token);
  }

  /**
   * Returns An Observable user
   * @returns IUser - returns an observale user
   */
  getCurrentUser() {

    const token = localStorage.getItem('currentUser');
    const user = this.jwtHelper.decodeToken(token);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      })
    };
    return this.httpClient.get(this.url + '/user', httpOptions);

  }

  /**
   * Verifies a token from the endpoint
   * @param token - the users token
   */
  verifyToken(token: string) {
    return this.httpClient.get(`${this.url + '/users/verify_token'}\\${token}`);

  }

  /**
   * Returns the User Id Stored in the Token
   * @returns the user_id as a string
   */
  getUserId(): string {
    const token = localStorage.getItem('currentUser');

    const tokenPayload: any = decode(token);

    return tokenPayload.sub;
  }


  /**
   *
   * Resets a user password with the payload passed
   * @param payload - the users payload with email, password and confirm password
   * @returns An Obervable IUser
   */
  resetPassword(payload: { password: string, password_confirm: string, email: string }, token: string) {
    return this.httpClient.post(`${this.url + '/users/set_password'}\\${token}`, payload);
  }

  // TODO : Add a token is expired function
}
