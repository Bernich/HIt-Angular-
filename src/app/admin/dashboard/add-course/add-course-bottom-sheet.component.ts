import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { IInstructor } from '../../shared/models';

@Component({
  selector: 'app-course-bottom-sheet',
  templateUrl: 'add-course-bottom-sheet.component.html',
})
export class CoursesBottomSheetComponent {
  instructors: IInstructor[] = [];

  constructor(
    private bottomSheetRef: MatBottomSheetRef<CoursesBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.instructors = data.instructors;
  }

  openLink(instructor: IInstructor): void {
    this.bottomSheetRef.dismiss({ data: instructor });
  }
}
