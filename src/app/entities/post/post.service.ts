import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared';
import { IPost } from 'src/app/shared/model/post.model';
import { CreatePostDTO } from 'src/app/admin/shared/dto';

type EntityResponseType = HttpResponse<IPost>;
type EntityArrayResponseType = HttpResponse<IPost[]>;

@Injectable({ providedIn: 'root' })
export class PostService {
  public resourceUrl = SERVER_API_URL + '/posts';
  constructor(protected http: HttpClient) { }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IPost>(`${this.resourceUrl}/${id}`, {
      observe: 'response'
    });
  }

  query(req?: any) {
    const token = localStorage.getItem('currentUser');

    const options = createRequestOption(req);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get(this.resourceUrl + '/all', httpOptions);
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
