import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hivenews-admin-add-news-page',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class HivenewsAdminAddNewsComponent implements OnInit {

  title = "Click Here to add title"
  content = "this is the content of the text editor"
  imgUrl = "https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  saveButton() {
    console.log(this.title, this.content)
  }


  /**
  * Process an input file selected by the user.
  * Checks if the type is a BANNER or a THUMBNAIL
  * @param imageInput
  * @param type
  */
  processFile(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {


      this.imgUrl = (event.target.result);
      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);

      // this.createCourse.course.banner_data = (new FileData(file.type, data));


    });

  }
}
