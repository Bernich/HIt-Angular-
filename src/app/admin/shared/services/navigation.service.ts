import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


/**
 * Verifies users navigations
 * @author botchway44
 */

@Injectable()
export class NavigationService {


  constructor(
    private router: Router
  ) { }



  navigateToHomePage() {
    this.router.navigate([`/`]);

  }

  navigateToCompleteEnrollment(slug: string) {
    this.router.navigate([`/register`, slug, "complete"]);

  }


  /**
   * Navigate to to dashboard page
   */
  navigateToDashboard() {
    // this.router.navigate([`/admin/dashboard/courses`]);
    this.router.navigate([`/admin/dashboard`]);
  }

  /**
   * Navigate to login page
   */
  navigateToLogin() {
    this.router.navigate([`/admin/root/login`]);
  }

  /**
 * Navigate to login page
 */
  navigateToEditCourse(id: string) {
    this.router.navigate([`/admin/courses/${id}/edit`]);
  }

  navigateToCreateCourse() {
    this.router.navigate([`/admin/courses/add`]);

  }


  navigateToCreateInstructor() {
    this.router.navigate([`/admin/instructors/add`]);

  }
  editInstructor(instructor_id: string) {
    this.router.navigate([`/admin/instructors/${instructor_id}/edit`]);
  }

  toInstructorList() {
    this.router.navigate([`/admin/instructors`]);
  }


  navigateToCreateUsers() {
    this.router.navigate([`/admin/users/add`]);

  }
  editUser(id: string) {
    this.router.navigate([`/admin/users/${id}/edit`]);
  }


  toCourseOverview(slug: string) {
    this.router.navigate([`/academics/${slug}`]);
  }

  addAuthor() {
    this.router.navigate([`/admin/authors/add`]);
  }

  editAuthor(author_id: string) {
    this.router.navigate([`/admin/authors/${author_id}/edit`]);
  }

  editPost(post_id: string) {
    this.router.navigate([`/admin/posts/${post_id}/edit`]);
  }

  navigateToCreatePost() {
    this.router.navigate([`/admin/posts/add`]);

  }

  navigateToProfile() {
    this.router.navigate([`/admin/dashboard/profile/edit`]);
  }
}
