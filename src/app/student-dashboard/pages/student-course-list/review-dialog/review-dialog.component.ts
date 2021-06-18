import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course.model';
import { ILesson } from 'src/app/shared/models/lesson.model';
import { Review, ReviewState } from 'src/app/shared/models/review.model';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewDialogComponent implements OnInit {


  state = 1;
  selected = 2;
  hovered = 0;
  comment = '';
  user: IUser = null;

  constructor(private navigationService: NavigationService,
              private sanitizer: DomSanitizer,
              private authService: AuthService,
              public dialogRef: MatDialogRef<ReviewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { course: ICourse }
  ) {
    this.authService.getCurrentUser().subscribe((iuser: IUser) => {
      this.user = iuser;
    });


    this.comment = data.course.review.comment || '';
    this.selected = data.course.review.rating || 1;
  }


  ngOnInit() {


  }

  ngOnDestroy() {

  }

  printHovered(number) {
    this.hovered = number;
  }


  toggleSelected(number) {
    this.selected = number;
    this.state = 2;
  }


  navigateBack(state) {
    this.state = state;
  }

  closeDialog() {
    // color: #ff8100;
    this.dialogRef.close({
      state: ReviewState.edit,
      rating: this.selected,
      comment: this.comment,
      user_image: this.user.profile_pic || 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg',
      username: this.user.firstname + ' ' + this.user.lastname
    });



  }
}
// if (!this.review.user_image)
// this.review.user_image = "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg";
