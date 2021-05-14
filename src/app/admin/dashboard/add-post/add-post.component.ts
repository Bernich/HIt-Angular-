import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreatePostService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-add-news-page',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddNewsComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  publish: false = false;
  categoryControl = new FormControl('', Validators.required);

  categories = [
    'Blog'
  ];

  constructor(
    public postService: CreatePostService
  ) { }

  ngOnInit(): void {
  }

  saveButton() {
    console.log(this.postService.post);
  }


  /**
   * Process an input file selected by the user.
   * Checks if the type is a BANNER or a THUMBNAIL
   * @param imageInput
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

  savePost() {
    this.postService.savePost().subscribe({
      next: (data: any) => { console.log(data); },
      error: (err: any) => { console.log(err); }
    })
  }
}
