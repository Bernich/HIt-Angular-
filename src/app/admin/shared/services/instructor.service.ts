import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { CreateUpdateInstructorDTO, ICreateInstructorDTO } from '../dto';
import { CreateInstructor } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {


  private instructorsUrl = `${SERVER_API_URL}/instructors`;

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

    return this.httpClient.get(this.instructorsUrl, httpOptions);
  }


  add(author: CreateInstructor) {
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


    console.log(JSON.stringify(author));

    return this.httpClient.post<ICreateInstructorDTO>(this.instructorsUrl, author, httpOptions);
  }



  /**
   * Updates an Instructor
   * @param user {IUser} - specified instructor account data
   * @see IUser
   */
  updateInstructor(instructorId: string, user: CreateUpdateInstructorDTO) {
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

    return this.httpClient.put(`${this.instructorsUrl}/${instructorId}`, user, httpOptions);
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

    return this.httpClient.get(this.instructorsUrl + `/${uid}`, httpOptions);
  }


  /**
   * Request a password reset with email
   * @param email
   */
  requestPasswordReset(email: string) {

    const payload = {
      email
    };

    return this.httpClient.post(`${this.instructorsUrl}/begin_password_reset`, payload,);
  }



}
