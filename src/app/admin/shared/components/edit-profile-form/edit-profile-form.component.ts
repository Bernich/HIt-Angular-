import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileData, IUser } from '../../models';


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {


  @Input() imageUrl;
  @Input() isNew = false;
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

    if (this.isNew) {
      this.imageUrl = 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg';
    } else {
      this.imageUrl = this.user.profile_pic.url;
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
      this.user.profile_pic_data = new FileData(file.type, data);
      this.imageUrl = event.target.result;
    });

  }

  updateFocus(event) {
    this.focusEvent.emit(event);

  }
}
