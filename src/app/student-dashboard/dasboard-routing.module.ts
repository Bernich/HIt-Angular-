import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../admin/shared/services/auth-guard.service';
import { StudentDashboardComponent } from './dashboard.component';
import { StudentAccountComponent } from './pages/student-account/student-account.component';
import { StudentCourseListComponent } from './pages/student-course-list/student-course-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children: [
      // canActivate: [AuthGuardService]
      { path: '', component: StudentCourseListComponent, },
      { path: 'courses', component: StudentCourseListComponent, },
      { path: 'account', component: StudentAccountComponent, },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
