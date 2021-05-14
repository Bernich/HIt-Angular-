import { Component, Input, OnInit } from '@angular/core';
import { IAuthor, IUser } from '../../shared/models';
import { AuthorsService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-news-list-page',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class HivenewsAdminAuthorsListComponent implements OnInit {

  isLoading = false;
  authors: IAuthor[];


  constructor(private authorService: AuthorsService) { }


  ngOnInit(): void {
    this.loadAll();
  }


  loadAll() {
    this.isLoading = true;

    this.authorService.all().subscribe({
      next: (data: any) => {

        console.log(data);

        this.isLoading = false;
        this.authors = data;
      },

      error: (error) => {
        this.isLoading = false;
      }
    });
  }
}
