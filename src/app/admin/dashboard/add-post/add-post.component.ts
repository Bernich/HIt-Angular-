import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { CreatePost } from 'src/app/shared/model/post.model';
import { FileData, IAuthor } from '../../shared/models';
import { AuthorService, AuthService, CreatePostService } from '../../shared/services';
import { AuthorsBottomSheetComponent } from './authors-bottomsheet.component';

@Component({
  selector: 'app-hivenews-admin-add-news-page',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [CreatePostService]
})
export class HivenewsAdminAddNewsComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  thumbnailURL = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';

  publish: false = false;
  categoryControl = new FormControl('', Validators.required);


  isNewCourse = true; /**Check if a course is new */


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
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    // load all authors


    this.loadAllAuthors();

    // Check url if there is a course id else create a new course
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isNewCourse = false;
      // load course and unpack
      // this.loadCourse(id);
    } else {
      this.isNewCourse = true;

      // Create a new course
      // this.course = new CreateCourse()
    }
  }


  saveButton() {
    console.log(this.postService.post);
  }

  savePost() {

    this.isLoading = true;
    // convert post authors into an id
    const author_ids = this.getPostAuthors();
    console.log(author_ids);

    this.postService.savePost(this.categoryControl.value, author_ids).subscribe({
      next: (data: any) => {
        console.log(data); this.isLoading = false;
      },
      error: (err: any) => {
        console.log(err); this.isLoading = false;
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

}
