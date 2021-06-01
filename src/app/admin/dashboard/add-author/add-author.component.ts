import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateAuthor, SocialMediaHandle } from '../../shared/models';
import { AuthorService, AuthService, CreatePostService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-add-author-page',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddAuthorComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';

  isLoading = false;
  isNew = true;

  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  author: CreateAuthor = new CreateAuthor();

  constructor(
    public postService: CreatePostService,
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {

    // Create Mock Author and use here
    this.author.bio = 'This is bio of the author ';
    this.author.email = 'noelnuel44@gamil.com';
    this.author.last_name = 'Emmanuel';
    this.author.first_name = 'Emmanuel';
    this.author.handlers = [this.whatssap, this.facebook, this.instagram, this.twitter];

  }

  ngOnInit(): void {
    // check if there is an id in the url, then load the id else create a new author
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Has id, fetch and change state to update')
      this.isNew = false;
    } else {
      console.log('Has no id, create author');
      this.isNew = true;
    }

  }


  loadAuthor(id: string) {
    // this.authorService
  }


  saveAuthor(author) {
    this.authorService.add(author).subscribe({
      next: (data: any) => { console.log(data); },
      error: (err: any) => { console.log(err); }
    });
    console.log(author);
  }
}
