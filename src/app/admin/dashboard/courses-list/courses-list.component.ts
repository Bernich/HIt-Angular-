import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/model/post.model';
import { Course, ICourse } from '../../shared/models';
import { CourseService, NavigationService } from '../../shared/services';

@Component({
  selector: 'app-hive-admin-courses-list-page',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class HiveAdminCoursesListComponent implements OnInit {

  isLoading = false;
  courses: ICourse[];

  constructor(
    private courseService: CourseService,
    private navigationService: NavigationService

  ) { }

  ngOnInit() {
    this.loadAll();
  }


  editCourse(course: Course) {
    this.navigationService.navigateToEditCourse(course.course_id)
  }

  overview(course: Course) {
    this.navigationService.toCourseOverview(course.slug);
  }

  loadAll() {
    this.isLoading = true;

    this.courseService.all().subscribe({

      next: (courses: ICourse[]) => {

        this.isLoading = false;
        this.courses = courses;
      },

      error: (err: any) => { }
    });
  }
}
