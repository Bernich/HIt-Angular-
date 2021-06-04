import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CreateInstructor, FileData } from '../../models';
import { AuthService } from '../../services';


@Component({
  selector: 'app-add-instructor-form',
  templateUrl: './add-instructor-form.component.html',
  styleUrls: ['./add-instructor-form.component.css']
})
export class AddInstructorFormComponent implements OnInit {

  @Input() isLoading: boolean;

  @Output() saveUser = new EventEmitter();
  @Input() user: CreateInstructor;
  @Input() isNew;
  @Input() initialURL = "";

  isAccountVisibleState = true;
  _profile_image_data = null;

  genderState = true;
  maleCheckBox = false;
  femaleCheckBox = false;
  speciality = 'Software Engineer';


  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.speciality = this.user.skills ? this.parseList(this.user.skills) : "";

    // Check if User has an Image
    if (this.isNew) {
      this._profile_image_data = 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg';
    } else {
      this._profile_image_data = this.initialURL;
    }
    // this._profile_image_data = this.user.profile_pic.url || '/assets/img/placeholder.png';
  }



  processFile(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {



      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
      // this.user.profile_pic = new FileData(file.type, data);
      this.user.profile_pic_data = new FileData(file.type, data);
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


  /**
   * Builds a list out of a String using comma seprations
   */
  buildList() {
    this.user.skills = this.speciality.split(',');
  }



}
