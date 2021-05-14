import { Component, Input, OnInit } from '@angular/core';
import { CreateAuthor, SocialMediaHandle } from '../../shared/models';
import { AuthorsService, AuthService, CreatePostService } from '../../shared/services';

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
    public postService: CreatePostService,
    private authorService: AuthorsService) {

    // Create Mock Author and use here
    this.author.bio = 'This is bio of the author ';
    this.author.email = 'noelnuel44@gamil.com';
    this.author.last_name = 'Emmanuel';
    this.author.first_name = 'Emmanuel';
    this.author.handlers = [this.whatssap, this.facebook, this.instagram, this.twitter];

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


  saveAuthor(author) {
    this.authorService.add(author).subscribe({
      next: (data: any) => { console.log(data); },
      error: (err: any) => { console.log(err); }
    });
    console.log(author);
  }
}
