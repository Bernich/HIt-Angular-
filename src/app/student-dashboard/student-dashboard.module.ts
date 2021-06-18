import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dasboard-routing.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { StudentAccountComponent } from './pages/student-account/student-account.component';
import { CourseDetailedListItemComponent } from './pages/student-course-list/course-detailed-list-item/course-detailed-list-item.component';
import { CourseGridItemComponent } from './pages/student-course-list/course-grid-item/course-grid-item.component';
import { StudentCourseListComponent } from './pages/student-course-list/student-course-list.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { ReviewDialogComponent } from './pages/student-course-list/review-dialog/review-dialog.component';
import { DeleteReviewDialogComponent } from './pages/student-course-list/delete-review-dialog/delete-review-dialog.component';
import { MaterialModule } from '../material.module';


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}



@NgModule({
  declarations: [
    // StudentDashboardComponent,
    // StudentAccountComponent,
    // StudentCourseListComponent,
    // StudentCourseItemComponent,
    // EditUserFormComponent,
    // CourseDetailedListItemComponent,
    // CourseGridItemComponent,
    // ReviewDialogComponent,
    // DeleteReviewDialogComponent,
    // StudentFeedBackComponent,
    // DashboardNavContentComponent,
    // EnrollWithReferenceDialogComponent,
    // PurchaseHistoryComponent,
    // PurchaseHistoryTableListComponent,
    // UserReceiptComponent,
    // ReceiptItemTableListComponent,
    // OrdersHistoryTableListComponent,
    // CertificateListComponent,
    // CertificateGridItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    // SharedModule,
    // LottieModule.forRoot({ player: playerFactory }),
    // RatingStarsModule
    // NgbPaginationModule, NgbAlertM/odule, NgbRatingModule
  ],
  providers: [
    // CourseService,
    // NavigationService,
    // CoursePlayerService,
    // AuthService,
    // AuthGuardService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },

  ],

  exports: []

})
export class StudentDashboardModule { }
