import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorMapper } from '../../shared/mapper/author.mapper';
import { Author, CreateAuthor, IAuthor, SocialMediaHandle } from '../../shared/models';
import { AuthorService, AuthService, CreatePostService, NavigationService, NotificationService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-add-author-page',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddAuthorComponent implements OnInit {

  imgUrl = '';

  isLoading = false;
  isNew = true;

  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  author: CreateAuthor = null;

  constructor(
    public postService: CreatePostService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private navigationService: NavigationService
  ) {


  }

  ngOnInit(): void {
    // check if there is an id in the url, then load the id else create a new author
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isNew = false;
      this.loadAuthor(id);
    } else {
      this.isNew = true;
      this.createAuthor()
    }

  }



  createAuthor() {
    this.author = new CreateAuthor();

    // Create Mock Author and use here
    this.author.bio = '';
    this.author.email = '';
    this.author.last_name = '';
    this.author.first_name = '';
    this.author.handlers = [this.whatssap, this.facebook, this.instagram, this.twitter];

  }
  loadAuthor(id: string) {
    this.authorService.query(id).subscribe({
      next: (data: Author) => {
        this.author = AuthorMapper.convertFromDTO(data);
        console.log(data)
        this.imgUrl = data.profile_image.url;

        console.log("URL is ", this.imgUrl)
      },
      error: (err: any) => { }
    });

    // imageUrl
  }


  saveAuthor(author) {

    if (this.isNew) {
      this.save(author);
    } else {
      this.notificationService.openSnackBar("Update not implemented", "Try Again");
    }
  }


  save(author) {
    this.isLoading = true;
    this.authorService.add(author).subscribe({
      next: (data: any) => {
        this.isLoading = false;

        this.navigationService.editAuthor(data.author_id)
        console.log(data);
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      }
    });
  }

  update(author) {
    this.isLoading = true;
    this.authorService.add(author).subscribe({
      next: (data: any) => {
        this.isLoading = false;

        this.navigationService.editAuthor(data.author_id)
        console.log(data);
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
      }
    });
  }
}
