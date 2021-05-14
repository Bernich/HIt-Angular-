import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CreateAuthor } from '../../dto';
import { AuthService } from '../../services';


@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css']
})
export class AddAuthorFormComponent implements OnInit {

  @Input() isLoading: boolean;

  @Output() saveAuthor = new EventEmitter();
  @Input() author: CreateAuthor;
  isAccountVisibleState = true;

  _profile_image_data = null;

  genderState = true;
  maleCheckBox = false;
  femaleCheckBox = false;
  speciality = 'Software Engineer';
  profile_pic_url = "";

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {

    // Check if User has an Image
    // this._profile_image_data = this.user.profile_pic.url || '/assets/img/placeholder.png';
  }



  processFile(imageInput) {

    console.log("File Selected");

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {


      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
      // this.user.profile_pic = new FileData(file.type, data);
      // this.user.profile_pic_data = new FileData(file.type, data);
      // this.userService.updateImage(new FileData(file.type, data))

      console.log(event);

      this.profile_pic_url = event.target.result;

    });

  }



}
