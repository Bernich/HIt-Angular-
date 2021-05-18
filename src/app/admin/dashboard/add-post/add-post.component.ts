import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreatePost } from 'src/app/shared/model/post.model';
import { FileData, IAuthor } from '../../shared/models';
import { AuthorsService, CreatePostService } from '../../shared/services';
import { AuthorsBottomSheetComponent } from './authors-bottomsheet.component';

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
    public postService: CreatePostService,
    private bottomSheet: MatBottomSheet,
    private authorService: AuthorsService
  ) { }

  ngOnInit(): void {
    // load all authors
    this.loadAllAuthors();


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
    this.postService.post.header_image = data.data;
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
}
