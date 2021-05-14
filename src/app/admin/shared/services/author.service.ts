import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { CreateAuthorDTO } from '../dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {


  private authorsUrl = `${SERVER_API_URL}/authors`;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  all() {
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

    return this.httpClient.get(this.authorsUrl, httpOptions);
  }


  add(author: CreateAuthorDTO) {
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

    return this.httpClient.post<CreateAuthorDTO>(this.authorsUrl, author, httpOptions);
  }


  query(uid: string) {
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

    return this.httpClient.get(this.authorsUrl + `/${uid}`, httpOptions);
  }


  /**
   * Request a password reset with email
   * @param email
   */
  requestPasswordReset(email: string) {

    const payload = {
      email
    };

    return this.httpClient.post(`${this.authorsUrl}/begin_password_reset`, payload,);
  }



}
