import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


/**
 * Verifies users navigations
 * @author botchway44
 */

@Injectable()
export class NavigationService {
  /**
   * @param router Router
   * @param stateStorageService
   */
  constructor(

    public router: Router,

  ) { }

}
