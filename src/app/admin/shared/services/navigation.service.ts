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

  editAuthor(author_id: string) {
    this.router.navigate([`/admin/author/${author_id}/edit`]);
  }
}
