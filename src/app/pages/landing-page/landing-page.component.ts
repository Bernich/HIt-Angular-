import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';
import { Course } from 'src/app/admin/shared/models';
import { CourseService } from 'src/app/admin/shared/services';

@Component({
  selector: 'jhi-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  courses: Course[];

  headerPosts: IPost[];
  isLoading: boolean;
  isPodcast: boolean;
  podcasts = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.loadAllCourses();

  }


  loadAllCourses() {
    this.isLoading = true;

    this.courseService.all().subscribe({
      next: (courses: Course[]) => {
        this.isLoading = false;
        this.courses = courses;
      },
      error: (error: any) => {

      },
    });
  }
}
