import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractiveCreatePostComponent } from './create-post-interative/create-post-interactive.component';
import { HivenewsDashboardComponent } from './dashboard/dashboard.component';
import { HivenewsAdminLoginComponent } from './login/admin-login.component';
import { AuthGuardService } from './shared/services';


/**
 * Admin Dashboard routes
 */
const routes: Routes = [
  /**
   * Main Parent Route with @route /admin
   * RoleGuardService guards the activation of this Page with Admin/Instructor roles
   */
  {
    path: '',
    // component: HivenewsAdminLoginComponent,
    /**
     * Expected Roles to Guard the Route
     * An Admin or INstructor can navigate to this page.
     * But the children routes have specific Role Guards
     */

    // data: {
    //   expectedRole: ['ADMIN', 'INSTRUCTOR']
    // },

    children: [
      /**Course List Component can be accessed by both Admin and instructors
       * This route is similar to the Dashboard component which is commented out
       */
      // { path: '', component: CoursesListComponent },
      {
        path: '', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.HivenewsDashboardModule),
      },

      { path: 'root/login', component: HivenewsAdminLoginComponent },

      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.HivenewsDashboardModule),
      },

      {
        path: 'interactive', component: InteractiveCreatePostComponent, canActivate: [AuthGuardService],

      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AdminRoutingModule { }
