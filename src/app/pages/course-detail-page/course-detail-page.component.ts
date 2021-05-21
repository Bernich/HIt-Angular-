import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/admin/shared/services';
import { ICourse } from 'src/app/admin/shared/models';

@Component({
  selector: 'jhi-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit {


  isLoading = true;
  course: ICourse = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) { }
  ngOnInit(): void {

    // Check url if there is a course id else create a new course
    const slug = this.route.snapshot.paramMap.get('slug');

    console.log(slug);

    if (slug) {
      // unpack old course
      // this.course = unpack
      this.loadCourseWithSlug(slug);
    } else {
      // Create a new course
      // this.course = new CreateCourse()
    }
  }


  loadCourseWithSlug(slug) {
    this.isLoading = true;

    this.courseService.getCourseWithSlug(slug).subscribe({
      next: (course: ICourse) => {
        this.course = course;
        this.isLoading = false;
      },
      error: (err: any) => { }
    });
  }
}
