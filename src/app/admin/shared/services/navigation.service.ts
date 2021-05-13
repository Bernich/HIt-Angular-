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
 * Navigate to confirm users specific details page
 * @param user
 */
  navigateToDashboard() {
    this.router.navigate([`/admin/dashboard`]);
  }
}
