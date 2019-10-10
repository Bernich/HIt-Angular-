import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { HiveNewsClientPostDetailComponent } from './post-detail-page.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';

@Injectable({ providedIn: 'root' })
export class PostResolve implements Resolve<IPost> {
  constructor(private service: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPost> {
    const ID = 'id';
    const id = route.params.id ? route.params.id : null;

    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Post>) => response.ok),
        map((post: HttpResponse<Post>) => post.body)
      );
    }
    return of(new Post());
  }
}

export const postDetailPageRoute: Routes = [
  {
    path: ':id',
    component: HiveNewsClientPostDetailComponent,
    resolve: {
      post: PostResolve
    },
    data: {
      pageTitle: 'hivenewsApp.post.home.title'
    }
  }
];
