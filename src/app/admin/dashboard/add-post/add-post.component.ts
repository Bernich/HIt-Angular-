import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/entities/post';
import { CreatePost, IPost } from 'src/app/shared/model/post.model';
import { PostMapper } from '../../shared/mapper';
import { FileData, IAuthor } from '../../shared/models';
import { AuthorService, AuthService, CreatePostService, NavigationService, NotificationService } from '../../shared/services';
import { AuthorsBottomSheetComponent } from './authors-bottomsheet.component';

@Component({
  selector: 'app-hivenews-admin-add-news-page',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css', 'instructors-image-profile.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddNewsComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  thumbnailURL = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';

  publish: false = false;
  categoryControl = new FormControl('', Validators.required);
  postId: string;

  isNewPost = true; /**Check if a course is new */


  isLoading = false;
  authors: IAuthor[] = [];
  selectedAuthors: IAuthor[] = [];


  categories = [
    'Blog',
    'Event',
    'Funding Oppurtunities',
    'Podcast'
  ];

  constructor(
    private route: ActivatedRoute,
    public postService: CreatePostService,
    private bottomSheet: MatBottomSheet,
    private authorService: AuthorService,
    public authService: AuthService,
    private postsService: PostService,
    private navigationService: NavigationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    // load all authors


    this.loadAllAuthors();

    // Check url if there is a course id else create a new course
    this.postId = this.route.snapshot.paramMap.get('id');

    if (this.postId) {
      this.isNewPost = false;
      // load course and unpack
      this.loadPost(this.postId);
    } else {
      this.isNewPost = true;

      // Create a new course
      // this.course = new CreateCourse()


    }
  }

  ngAfterViewChecked() {
    // this.refillSelectedAuthors();
  }


  loadPost(id) {

    this.postsService.findAdminPost(id).subscribe({
      next: (data: IPost) => {
        // unwrap post for edit
        this.postService.post = PostMapper.convertToCreatePost(data);
        this.imgUrl = data.banner.url;
        this.thumbnailURL = data.thumbnail.url;

        // use author ids to insert them again
        this.selectedAuthors = data.authors;

        this.categoryControl.setValue(data.post_category)
        // place contents in here
      },
      error: (error) => { }
    })
  }


  savePost() {

    this.isLoading = true;
    // convert post authors into an id
    const author_ids = this.getPostAuthors();

    this.postService.savePost(this.categoryControl.value, author_ids).subscribe({
      next: (data: any) => {
        this.isLoading = false;

        this.navigationService.editPost(data.post_id);
        this.notificationService.openSnackBar("Creates post ", data.title)
      },
      error: (err: any) => {
        this.isLoading = false;
        this.notificationService.openSnackBar("Failed creating post ", this.postService.post.title)

      }
    });
  }


  updatePost() {

    this.isLoading = true;
    // convert post authors into an id
    const author_ids = this.getPostAuthors();

    this.postService.updatePost(this.postId, this.categoryControl.value, author_ids).subscribe({
      next: (data: any) => {
        this.isLoading = false;
        this.notificationService.openSnackBar("Updated  post ", this.postService.post.title)

      },
      error: (err: any) => {
        // console.log(err);
        this.isLoading = false;
        this.notificationService.openSnackBar("Failed updating post ", this.postService.post.title)

      }
    });
  }

  updateBannerImage(data: { url: string, data: FileData }) {
    this.imgUrl = data.url;
    this.postService.post.header_image_data = data.data;
  }

  openBottomSheet() {
    // Remove all selected authors and send to bottomsheet

    // open sheet
    this.bottomSheet.open(AuthorsBottomSheetComponent, {
      data: { authors: this.authors },
    });

    // subscribe to observable that emit event when bottom sheet closes
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data: any) => {

      // pick data from opened bottom sheet
      if (data.data) {
        this.selectedAuthors.push(data.data);
      }
    });
  }


  getPostAuthors(): string[] {
    return this.selectedAuthors.map((author: IAuthor) => {
      return author.author_id
    })
  }


  loadAllAuthors() {
    this.isLoading = true;

    this.authorService.all().subscribe({
      next: (data: any) => {

        this.isLoading = false;
        this.authors = data;

      },

      error: (error) => {
        this.isLoading = false;
      }
    });
  }

  removeUser(instructor: IAuthor) {
    this.selectedAuthors = this.selectedAuthors.filter((user: IAuthor) => instructor.author_id !== user.author_id);
  }



  /**
   * Process an input file selected by the user.
   * Checks if the type is a BANNER or a THUMBNAIL
   * @param imageInput
   */
  processFile(imageInput, type: string) {

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {

      if (type = 'THUMBMAIL') {
        this.thumbnailURL = (event.target.result);
        const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
        this.postService.post.thumbnail_image_data = new FileData(file.type, data)

      }

    });

  }

  publisCourse() {

    this.postsService.approvePost(this.postId).subscribe({
      next: (data) => {
        this.notificationService.openSnackBar("Post Updated", this.postService.post.title + "");

        // reload course
        this.loadPost(this.postId);
      },
      error: (err) => {
        this.notificationService.openSnackBar("Post Update Failed " + err.error, "Try Again");
      }
    });
  }




  deleteCourse() {
    this.notificationService.openSnackBar("Delete Course not implemented", "Try Again");

  }

  /**
   * Since the Authors are difficult processing,
   * after the authors are loaded, check if its an old course
   * and reinsert the authors again in the selectedAuthors
   */
  refillSelectedAuthors() {


    const new_authors = [];
    for (const sAuthor of this.selectedAuthors) {
      this.authors.forEach((author: IAuthor) => {
        if (author.author_id === sAuthor.author_id) {
          new_authors.push(author);
        }

      })
    }

    this.selectedAuthors = new_authors;

  }
}
