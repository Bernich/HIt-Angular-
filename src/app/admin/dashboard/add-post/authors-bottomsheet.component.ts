import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IInstructor } from '../../shared/models';


@Component({
  selector: 'app-authors-bottomsheet',
  templateUrl: 'authors-bottomsheet.component.html',
})
export class AuthorsBottomSheetComponent {

  authors: IInstructor[] = [];

  constructor(
    private bottomSheetRef: MatBottomSheetRef<AuthorsBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {

    this.authors = data.authors;

  }



  openLink(author: IInstructor): void {
    this.bottomSheetRef.dismiss({ data: author });
    // Pass event down later
    // event.preventDefault();
  }
}
