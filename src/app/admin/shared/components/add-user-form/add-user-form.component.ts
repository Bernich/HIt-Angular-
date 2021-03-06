import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateUser, FileData } from '../../models';


@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @Input() isLoading: boolean;
  @Output() saveUser = new EventEmitter();
  @Input() user: any;
  @Input() initialURL;
  @Input() isNew;
  @Input() isAccountVisibleState = true;


  _profile_image_data = null;
  // user: CreateInstructor = null;
  genderState = true;
  maleCheckBox = false;
  femaleCheckBox = false;


  constructor(

  ) {

  }

  ngOnInit(): void {
    // Check if User has an Image
    if (this.isNew) {
      // this._profile_image_data = this.user.profile_pic;
    } else {
      this._profile_image_data = this.initialURL;
    }
  }

  updateLastName() {

  }








  processFile(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {

      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
      this.user.profile_pic_data = new FileData(file.type, data);
      // this.user.profile_pic_data = new FileData(file.type, data);
      // this.userService.updateImage(new FileData(file.type, data))
      this._profile_image_data = event.target.result;

    });

  }

  /**
  * Parse skills into a string
  */
  parseList(skills: string[]): string {
    let skill_builder = '';
    for (const skill of skills) {
      skill_builder += skill + ', ';
    }

    return skill_builder;
  }



}
