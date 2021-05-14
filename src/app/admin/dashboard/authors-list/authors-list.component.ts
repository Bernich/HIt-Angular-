import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../shared/models';
import { UsersService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-news-list-page',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class HivenewsAdminAuthorsListComponent implements OnInit {

  isLoading = false;
  users: IUser[];


  constructor(private usersService: UsersService) { }


  ngOnInit(): void {
    this.loadAll();
  }


  loadAll() {
    this.isLoading = true;

    this.usersService.all().subscribe({
      next: (data: any) => {

        this.isLoading = false;
        this.users = data;
      },

      error: (error) => {
        this.isLoading = false;
      }
    });
  }
}
