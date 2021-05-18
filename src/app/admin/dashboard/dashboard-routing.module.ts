import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services';
import { HivenewsAdminAddAuthorComponent } from './add-author/add-author.component';
import { HivenewsAdminAddNewsComponent } from './add-post/add-post.component';
import { HivenewsAdminAuthorsListComponent } from './authors-list/authors-list.component';
import { HivenewsDashboardComponent } from './dashboard.component';
import { HivenewsAdminListComponent } from './posts-list/posts-list.component';
import { HivenewsAdminUsersListComponent } from './users-list/users-list.component';

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
      { path: '', component: HivenewsAdminListComponent, },
      { path: 'posts', component: HivenewsAdminListComponent, },
      { path: 'add-posts', component: HivenewsAdminAddNewsComponent },
      { path: 'posts/add', component: HivenewsAdminAddNewsComponent },
      { path: 'posts/:id/edit', component: HivenewsAdminAddNewsComponent },
      { path: 'users', component: HivenewsAdminUsersListComponent },
      { path: 'add/author', component: HivenewsAdminAddAuthorComponent },
      { path: 'author/:id/edit', component: HivenewsAdminAddAuthorComponent },
      { path: 'authors', component: HivenewsAdminAuthorsListComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DashboardRoutingModule { }
