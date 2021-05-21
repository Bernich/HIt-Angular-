import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';
import { ICourse } from '../../shared/models';
import { CourseService } from '../../shared/services';

@Component({
  selector: 'app-hive-admin-courses-list-page',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class HiveAdminCoursesListComponent implements OnInit {

  isLoading = false;
  courses: ICourse[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadAll();
  }


  editPost(post: IPost) {
    console.log("post ", post.post_id);
  }

  loadAll() {
    this.isLoading = true;

    this.courseService.all().subscribe({

      next: (courses: ICourse[]) => {

        this.isLoading = false;
        console.log(courses);
        this.courses = courses;
      },

      error: (err: any) => { }
    });
  }
}
