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
  styleUrls: ['./academics-page.component.css']
})
export class AcademicsPageComponent implements OnInit {

  courses: Course[];


  isLoading: boolean;



  headerPosts = [
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/institute-0ea30831009b5155c09c5baf27cbc655.png',
      title: 'A culture where everyone can thrive',
      description: 'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/academics-bg-89794e0b7ef7eb5ffdc9fc9b4adfea66.png',
      title: 'A Hive Institute education is not a narrow path that students follow from Point A to Point Z.',
      description: 'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/night-banner-ad3a3fcf3c1ed36f363ddb7c8986f732.png',
      title: 'Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world',
      description: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge'
    }
  ];


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
