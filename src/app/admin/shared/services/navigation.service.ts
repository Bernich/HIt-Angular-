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



  /**
   * Navigate to to dashboard page
   */
  navigateToDashboard() {
    this.router.navigate([`/admin/dashboard`]);
  }

  /**
   * Navigate to login page
   */
  navigateToLogin() {
    this.router.navigate([`/admin/login`]);
  }

  /**
 * Navigate to login page
 */
  navigateToEditCourse(id: string) {
    this.router.navigate([`/admin/courses/${id}/edit`]);
  }

  editInstructor(instructor_id: string) {
    this.router.navigate([`/admin/instructors/${instructor_id}/edit`]);
  }


  toCourseOverview(slug: string) {
    this.router.navigate([`/academics/${slug}`]);
  }
}
