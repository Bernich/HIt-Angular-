import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared';
import { IPost } from 'src/app/shared/model/post.model';
import { CreatePostDTO } from 'src/app/admin/shared/dto';
import { ICourse } from '../models';
import { CreateCourseDTO } from '../dto/create-course.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
