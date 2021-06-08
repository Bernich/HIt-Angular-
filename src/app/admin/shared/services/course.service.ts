import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared';
import { IPost } from 'src/app/shared/model/post.model';
import { CreatePostDTO } from 'src/app/admin/shared/dto';
import { ICourse } from '../models';
import { CreateCourseDTO } from '../dto/create-course.dto';

type EntityResponseType = HttpResponse<IPost>;
type EntityArrayResponseType = HttpResponse<IPost[]>;

@Injectable({ providedIn: 'root' })
export class CourseService {

  public resourceUrl = SERVER_API_URL + '/courses';

  constructor(protected http: HttpClient) { }


  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IPost>(`${this.resourceUrl}/${id}`, {
      observe: 'response'
    });
  }


  /**
   *
   */
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
    return this.http.get(this.resourceUrl + "/admin/list", httpOptions);
  }

  /**
 *
 */
  query() {
    return this.http.get(this.resourceUrl);

  }

  add(post: CreateCourseDTO) {
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


    return this.http.post(this.resourceUrl, post, httpOptions);
  }


  /**
  *  Gets courses a specified user has registered based on the slug
  * @param slug {String}- specified course id
  */
  getCourseWithSlug(slug: string) {
    return this.http.get(`${this.resourceUrl}/slug/${slug}`);
  }


  /**
*  Gets courses a specified course with the course id
* @param courseId {String}- specified course id
*/
  getCourse(courseId: string) {
    return this.http.get(`${this.resourceUrl}/${courseId}`);
  }



  /**
 * Updates the state of a course to either  enabled or disabled
 * @param courseId
 */
  approveCourse(courseId: string) {
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

    const body = {
      id: courseId,
    };

    return this.http.put(this.resourceUrl + `/${courseId}/approve`, body, httpOptions);
  }



  /**
   * Updates a course using the course Id
   *@param course
   @returns An Obervable ICourse
   */
  updateCourse(course: CreateCourseDTO) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };


    return this.http.put(`${this.resourceUrl}/${course.course_id}`, course, httpOptions);
  }

  findAdminCourse(courseId: string) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    // /api/v1/courses/admin/:id
    return this.http.get(`${this.resourceUrl}/admin/${courseId}`, httpOptions);

  }
}
