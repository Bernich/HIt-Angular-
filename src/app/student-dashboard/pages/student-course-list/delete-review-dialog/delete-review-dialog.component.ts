import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course.model';
import { ILesson } from 'src/app/shared/models/lesson.model';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
@Component({
  selector: 'app-delete-review-dialog',
  templateUrl: './delete-review-dialog.component.html',
  styleUrls: ['./delete-review-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DeleteReviewDialogComponent implements OnInit {


  state = 1;
  selected = 2;
  hovered = 0;
  comment = '';
  user: IUser = null;

  constructor(private navigationService: NavigationService,
              private sanitizer: DomSanitizer,
              private authService: AuthService,
              public dialogRef: MatDialogRef<DeleteReviewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { course: ICourse }
  ) {
    this.selected = this.data.course.review.rating;
  }


  ngOnInit() {


  }

  ngOnDestroy() {

  }

  editDialog() {
    // color: #ff8100;
    this.dialogRef.close({
      state: 'EDIT',
      data: {
        rating: 1.5,
        comment: 'This is the name'
      }
    });
  }

  deleteDialog() {
    // color: #ff8100;
    this.dialogRef.close({
      state: 'DELETE',
      data: {
        rating: 1.5,
        comment: 'This is the name'
      }
    });
  }
}
