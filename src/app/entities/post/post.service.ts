import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared';
import { IPost } from 'src/app/shared/model/post.model';
import { CreatePostDTO, UpdatePostDTO } from 'src/app/admin/shared/dto';

type EntityResponseType = HttpResponse<IPost>;
type EntityArrayResponseType = HttpResponse<IPost[]>;

@Injectable({ providedIn: 'root' })
export class PostService {
  public resourceUrl = SERVER_API_URL + '/posts';
  constructor(protected http: HttpClient) { }

  find(id: string) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };


    //TODO :  For admin, USE ADMIN/:id

    return this.http.get(this.resourceUrl + '/' + id, httpOptions);

  }



  /**
 * Updates the state of a post to either  enabled or disabled
 * @param courseId
 */
  approvePost(postId: string) {
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
      id: postId,
    };

    return this.http.put(this.resourceUrl + `/${postId}/approve`, body, httpOptions);
  }



  findAdminPost(id: string) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };


    return this.http.get(this.resourceUrl + '/admin/' + id, httpOptions);
  }
  query(req?: any) {
    const token = localStorage.getItem('currentUser');


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get(this.resourceUrl, httpOptions);
  }


  allAdmin() {
    const token = localStorage.getItem('currentUser');


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get(this.resourceUrl + '/admin/list', httpOptions);
  }

  all() {
    const token = localStorage.getItem('currentUser');


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get(this.resourceUrl + '/admin/list', httpOptions);
  }

  add(post: CreatePostDTO) {
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

  update(post: UpdatePostDTO) {
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

    return this.http.put(this.resourceUrl + "/" + post.post_id, post, httpOptions);
  }

  /**
*  Gets a specified post based on the slug
* @param slug {String}- specified course id
*/
  getPostWithSlug(slug: string) {
    return this.http.get(`${this.resourceUrl}/slug/${slug}`);
  }

}
