import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../shared/models';
import { NavigationService, UsersService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-news-list-page',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class HivenewsAdminUsersListComponent implements OnInit {

  isLoading = false;
  users: IUser[];


  constructor(
    private navigationService: NavigationService,
    private usersService: UsersService) { }


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


  editUser(user) {
    this.navigationService.editUser(user.user_id);
  }
}
