import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared';
import { IPost } from 'src/app/shared/model/post.model';
import { CreatePostDTO } from 'src/app/admin/shared/dto';
import { ICourse } from '../models';

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
  query(req?: any) {
    return this.http.get(this.resourceUrl);

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


}