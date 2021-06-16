import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { IUpdateUser, IUser } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private usersURL = `${SERVER_API_URL}/users`;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  all(queryParams?: string) {
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

    if (queryParams) {
      return this.httpClient.get(this.usersURL + "?role=instructor", httpOptions);
    }

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
 *
 * @param user {IUser} - specified user account data
 * @see IUser
 */
  updateUser(user: IUpdateUser) {
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

    return this.httpClient.put(`${this.usersURL}`, user, httpOptions);
  }



  /**
   * Updates a users role
   * @param roles {string[]}
   */
  updateRole(uid: string, roles: string[]) {
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

    const payload = {
      roles
    };

    return this.httpClient.post(`${this.usersURL}/${uid}/roles`, payload, httpOptions);
  }



  /**
   * Activate or Deactivate a User Account
   * @param uid {String} - Specified users Id
   * @param status - status object with is_active field that takes a boolean
   *
   */
  updateAccountStatus(uid: string, status) {
    /**
     *  * const status = {
     *    is_active : false
      *  }
     */
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

    return this.httpClient.post(`${this.usersURL}/${uid}/status`, status, httpOptions);
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
