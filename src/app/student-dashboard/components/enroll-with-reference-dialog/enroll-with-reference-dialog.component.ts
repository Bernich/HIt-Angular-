import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ICategory } from 'src/app/shared/models/category.model';
import { ICourse } from 'src/app/shared/models/course.model';
import { ILesson } from 'src/app/shared/models/lesson.model';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

/**
 * A reactive component that manages its own state
 *
 */
@Component({
  selector: 'app-enroll-with-reference-dialog',
  templateUrl: './enroll-with-reference-dialog.component.html',
  styleUrls: ['./enroll-with-reference-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EnrollWithReferenceDialogComponent implements OnInit {

  // TODO Refactor isLoading into the global state
  isLoading = false;
  course = 'None';
  trxRef = '';
  message = 'Use the transaction reference emailed to you enroll again if the course does not reflect on the dashboard after payment.';

  state = {
    error: false,
    success: false
  };

  constructor(
    private navigationService: NavigationService,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    public dialogRef: MatDialogRef<EnrollWithReferenceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, hideInput: boolean }
  ) {
    // this.message = this.data.message;

  }


  ngOnInit() {


  }

  ngOnDestroy() {

  }

  editDialog() {
    // color: #ff8100;

    if (this.trxRef) {
      this.enrollWithTrx();
    } else {
      this.snackBar.open('Please enter a transaction reference', '', {
        duration: 3000
      });
    }
  }




  enrollWithTrx() {

    // Alternative approach, handle the verification using the old verification route
    // https://hiveacademy.co/#/course/enrollment/verify?reference=${reference}`


    // TODO catch specific status codes for the request
    // window.location.href = (`https://hiveacademy.co/#/course/enrollment/verify?reference=${trxRef}`)
    this.isLoading = true;
    this.authService.verifyTransaction(this.trxRef).subscribe(
      (result: any) => {
        this.isLoading = false;

        this.message = result.message;
        this.state = {
          ...this.state,
          error: false,
          success: true
        };


      }, (error) => {
        this.isLoading = false;
        this.state = {
          ...this.state,
          error: true,
          success: false
        };
        this.message = error.error.error;


      });
  }


  closeDialog() {
    this.dialogRef.close({
      state: this.state.success ? 'SUCCESS' : 'FAILED',
    });
  }

}


