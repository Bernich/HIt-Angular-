import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { SERVER_API_URL } from '../../app.constants';
import { ISubscriber } from '../../shared/model/subscriber.model';
import { Observable } from 'rxjs/index';

type EntityResponseType = HttpResponse<ISubscriber>;

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  public resourceUrl = SERVER_API_URL + '/subscribers';

  constructor(private http: HttpClient) { }

  create(subscriber: ISubscriber): Observable<EntityResponseType> {
    return this.http.post<ISubscriber>(this.resourceUrl, subscriber, {
      observe: 'response'
    });
  }

  activate(key: string): Observable<any> {
    return this.http.get(this.resourceUrl + '/activate', {
      params: new HttpParams().set('key', key)
    });
  }
}
