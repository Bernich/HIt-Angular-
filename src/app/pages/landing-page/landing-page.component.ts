import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { Course } from 'src/app/admin/shared/models';
import { CourseService } from 'src/app/admin/shared/services';
import { PostService } from 'src/app/entities/post';

@Component({
  selector: 'jhi-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  courses: Course[];
  posts: IPost[];

  isLoading: boolean;
  isPodcast: boolean;
  podcasts = [];

  headerPosts = [
    {
      image: '/assets/images/header-banner.jpg',
      title: 'Set yourself apart',
      description:
        'We give you the necessary knowledge to be a change leader in your sphere of influence.',
    },
    {
      image:
        'https://www.stanford.edu/wp-content/uploads/2017/03/hoover-background-lg-1499x552.jpg',
      title: 'Get caught up with the latest in tech.',
      description:
        'Be exposed to new research and technology as a student that would spark your creativity.',
    },
  ];

  heading = 'HIGHER EDUCATION, HIGHER PURPOSE ';
  message =
    'As a research and educational institution, We are focused on creating educational opportunities for people from many lived experiences.';
  footer = 'Learn about us';

  shapedBy =
    'Hive Institute is shaped and strengthened by our many communities venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.';
  constructor(
    private courseService: CourseService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.loadAllCourses();
    this.loadAllPosts();
  }

  loadAllCourses() {
    this.isLoading = true;

    this.courseService.query().subscribe({
      next: (courses: Course[]) => {
        this.isLoading = false;
        this.courses = courses;
      },
      error: (error: any) => {},
    });
  }

  loadAllPosts() {
    this.isLoading = true;

    this.postService.query().subscribe({
      next: (posts: IPost[]) => {
        this.isLoading = false;
        this.posts = posts;
      },
      error: (error: any) => {},
    });
  }
}
