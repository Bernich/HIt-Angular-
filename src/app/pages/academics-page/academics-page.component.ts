import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';
import { Course } from 'src/app/admin/shared/models';
import { CourseService } from 'src/app/admin/shared/services';

@Component({
  selector: 'jhi-academics-page',
  templateUrl: './academics-page.component.html',
  styleUrls: ['./academics-page.component.css'],
})
export class AcademicsPageComponent implements OnInit {
  courses: Course[];
  heading = 'Education';
  education =
    'Our strength in interdisciplinary education, our dedicated staff and a culture of innovation set the training ground for the next generation of innovators, leaders and pioneers.';

  isLoading: boolean;

  headerPosts = [
    {
      image: '/assets/images/banners/culture.jpg',
      title: 'A culture where everyone can thrive',
      description:
        'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.',
    },
    {
      image: 'assets/images/banners/connect.jpg',
      title:
        'Hive Institute is shaped and strengthened by our many communities.',
      description:
        'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.',
    },
    {
      image: '/assets/images/banners/public_purpose.jpg',
      title: 'People committed to public purpose',
      description:
        'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge',
    },
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadAllCourses();
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
}
