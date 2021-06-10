import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { ICreateAuthorDTO, ICreateInstructorDTO } from '../dto';
import { IAuthor } from '../models/section.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


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

    return this.httpClient.get(this.authorsUrl + "/admin/list", httpOptions);
  }


  add(author: ICreateAuthorDTO) {
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

    return this.httpClient.post<IAuthor>(this.authorsUrl, author, httpOptions);
  }

  update(author: ICreateAuthorDTO) {
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

    return this.httpClient.put<IAuthor>(this.authorsUrl + "/" + author.author_id, author, httpOptions);
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
