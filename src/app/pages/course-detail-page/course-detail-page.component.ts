import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/admin/shared/services';
import { Course, IInstructor } from 'src/app/admin/shared/models';


@Component({
  selector: 'jhi-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css', 'instructors-image-profile.css']
})
export class CourseDetailPageComponent implements OnInit {


  isLoading = true;
  course: Course = null;
  instructor: IInstructor = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) { }
  ngOnInit(): void {

    // Check url if there is a course id else create a new course
    const slug = this.route.snapshot.paramMap.get('slug');

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
      next: (course: Course) => {
        this.course = course;
        this.isLoading = false;

        // show curent current instructor
        this.instructor = this.course.instructors[0];
      },
      error: (err: any) => {
        this.isLoading = false;

      }
    });
  }

  updateCurrentInstructor(instructor: IInstructor) {
    this.instructor = instructor;
  }
  updateInstructorDescription(description) {
    description.innerHTML = this.instructor.bio;
  }


  getUrl(platform) {
    if (platform === 'LINKEDIN') { return '/assets/svg/linkedin.svg'; }
    if (platform === 'WHATSSAP') { return '/assets/svg/whatsapp.svg'; }
    if (platform === 'FACEBOOK') { return '/assets/svg/facebook.svg'; }
    if (platform === 'INSTAGRAM') { return '/assets/svg/instagram.svg'; }
    if (platform === 'TWITTER') { return '/assets/svg/twitter.svg'; }

    return null;
  }

  isVisible(url: string) {
    if(url && (url.toLowerCase() === "@url" || "")){
      return false
    }

   return true
  }

}
