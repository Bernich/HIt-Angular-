import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services';
import { HiveAdminAddInstructorComponent } from './add-instructor/add-instructor.component';
import { HivenewsAdminAddNewsComponent } from './add-post/add-post.component';
import { HiveAdminInstructorListComponent } from './instructors-list/instructors-list.component';
import { HivenewsDashboardComponent } from './dashboard.component';
import { HivenewsAdminListComponent } from './posts-list/posts-list.component';
import { HivenewsAdminUsersListComponent } from './users-list/users-list.component';
import { HiveAdminCoursesListComponent } from './courses-list/courses-list.component';
import { HiveAdminAddCourseComponent } from './add-course/add-course.component';

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
    canActivate: [AuthGuardService],
    component: HivenewsDashboardComponent,
    // component: HiveAdminCoursesListComponent,
    // canActivate: [RoleGuardService],

    /**Expected Roles to Guard the Route
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
      { path: '', component: HiveAdminCoursesListComponent, },
      { path: 'courses', component: HiveAdminCoursesListComponent, },
      { path: 'courses/add', component: HiveAdminAddCourseComponent },
      { path: 'courses/:id/edit', component: HiveAdminAddCourseComponent },

      { path: 'posts', component: HivenewsAdminAddNewsComponent },
      { path: 'posts/add', component: HivenewsAdminAddNewsComponent },
      { path: 'posts/:id/edit', component: HivenewsAdminAddNewsComponent },

      { path: 'users', component: HivenewsAdminUsersListComponent },
      { path: 'instructors/add', component: HiveAdminAddInstructorComponent },
      { path: 'instructors/:id/edit', component: HiveAdminAddInstructorComponent },
      { path: 'instructors', component: HiveAdminInstructorListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DashboardRoutingModule { }
