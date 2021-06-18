import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileData } from 'src/app/shared/models/file-data.model';
import { CreateUser, IUser } from 'src/app/shared/models/user.model';
import { CreateUserService } from 'src/app/shared/services/create-user.service';


@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {


  @Input() user: IUser;
  @Input() isAccountVisibleState;

  // isAccountVisibleState = false;

  _profile_image_data = null;

  /**
   *Use Angular form is dirty to check if the input has been changed
   */
  @Output() focusEvent = new EventEmitter();
  genderState = true;
  maleCheckBox = false;
  femaleCheckBox = false;


  constructor() {

  }

  ngOnInit(): void {

    if (!this.user.profile_pic) {
      this._profile_image_data = 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg';
    }
  }



  updateFemaleGender(isChecked) {
    if (isChecked) {
      // uncheck male
      this.maleCheckBox = false;
    }
  }

  updateMaleGender(isChecked) {
    if (isChecked) {
      // uncheck male
      this.femaleCheckBox = false;
    }
  }


  processFile(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {


      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
      this.user.profile_pic = new FileData(file.type, data);
      this._profile_image_data = event.target.result;
    });

  }

  updateFocus(event) {
    this.focusEvent.emit(event);

  }
}
