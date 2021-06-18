import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Category } from 'src/app/shared/models/category.model';
import { Course, ICourse } from 'src/app/shared/models/course.model';
import { IReview, PostReview, ReviewType, ReviewState } from 'src/app/shared/models/review.model';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { DeleteReviewDialogComponent } from './delete-review-dialog/delete-review-dialog.component';
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';

/**
 * List all user Enrolled courses and the Recommendations for user to enroll
 */
@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {


  user: IUser;
  courses: ICourse[] = [];
  categories: Category[] = [];
  allCourses: ICourse[] = [];

  loadingPlayer = false;
  isLoading = true;
  options: AnimationOptions = {
    path: '/assets/anims/idea.json',
  };

  /**
   * Constructs a StudentCourseListComponent and injects the following servicess
   * @param authService {AuthService}
   * @param navigationService {NavigationService}
   * @param courseService {CourseService}
   */
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private courseService: CourseService,
    public dialog: MatDialog,
  ) { }

  /***Calback Function for initializing angular components */
  ngOnInit(): void {
    this.loadUserCourses();
    this.loadAllCourses();
  }

  /**
  * Callback Function to tell Lottie animation is done initializing
   * @param animationItem
  */
  animationCreated(animationItem: AnimationItem): void {

  }


  /**
   *Loads all courses and filter by the is_enrolled field
   */
  loadAllCourses() {
    this.courseService
      .enrolledCourses()
      .subscribe((courses: Course[]) => {
        this.allCourses = courses.filter((course: ICourse) => course.is_enrolled !== true
        );
      });
  }


  /**
   * Loads all user enrolled courses
   */
  loadUserCourses() {
    const uid = this.authService.getUserId();
    this.courseService.allCoursesByUser(uid).subscribe((courses: any) => {

      this.isLoading = false;
      if (courses === null || courses === undefined) {
        this.courses = [];
      } else {
        this.courses = courses;
      }

    });
  }

  /**
   * Navigates a user to the watch course page
   * @param course {ICourse}
   */
  navigateToWatchCourse(course: ICourse) {
    this.loadingPlayer = true;
    this.navigationService.navigateToWatchCourse(course);
  }

  /**
   * Navigates a user to the Course Detail Page
   * @param course {ICourse}
   */
  navigateToCourseDetail(course: ICourse) {
    this.navigationService.navigateToCourseDetails(course);
  }


  /**
   * Opens an Edit Review Dialog
   * @param course
   */
  openEditReview(course: ICourse) {

    // let dialogRef = this.dialog.open(ReviewDialogComponent);

    const dialogRef = this.dialog.open(DeleteReviewDialogComponent, { data: { course }, });

    dialogRef.afterClosed().subscribe(result => {


      // this.openReview(course);

      const { state } = result;

      if (state === ReviewState.edit) {
        this.openReview(course, true);
      }
      else if (state === ReviewState.delete) {
        // this.openReview(course);
      }

    });
  }


  /**
   * Opens a review Dialog with the option either to open a new review or an editted version
   * @param course {ICourse}
   * @param editted {boolean}
   */
  openReview(course: ICourse, editted: boolean = false) {


    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      data: { course },
    });

    const uid = this.authService.getUserId();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        const { rating, comment, user_image, username
        } = result;


        if (editted) {
          this.courseService.editCourseReview(new PostReview(course.course_id, ReviewType.course, uid, comment, rating, user_image, username)).subscribe((data) => {

            this.isLoading = true;
            this.loadUserCourses();
          });


        } else {
          this.courseService.reviewCourse(new PostReview(course.course_id, ReviewType.course, uid, comment, rating, user_image, username)).subscribe((data) => {

            this.isLoading = true;
            this.loadUserCourses();
          });


        }

      }
    });


  }

  /**
   * Updates a users course to the newer version of the ourse availbale version
   * @param course
   */
  updateCourseVersion(course: ICourse) {
    this.isLoading = true;
    this.courseService.updateCourseVersion(course.course_id).subscribe((data) => {
      this.loadUserCourses();
      this.isLoading = false;
    }, (error) => {

      this.isLoading = false;
    });
  }
}
