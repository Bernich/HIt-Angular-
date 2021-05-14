import { Component, Input, OnInit } from '@angular/core';
import { CreateAuthor } from '../../shared/dto';
import { SocialMediaHandle } from '../../shared/models';
import { CreatePostService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-add-author-page',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddAuthorComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';

  isLoading = false;

  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  author: CreateAuthor = new CreateAuthor();

  constructor(
    public postService: CreatePostService
  ) {

    // Create Mock Author and use here
    this.author.bio = '';
    this.author.email = 'noelnuel44@gamil.com';
    this.author.lastname = 'Emmanuel';
    this.author.firstname = 'Emmanuel';
    this.author.social_media_handles = [this.whatssap, this.facebook, this.instagram, this.twitter];

  }

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


  saveUser() {

  }
}
