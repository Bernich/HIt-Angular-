import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { StateStorageService } from './services/state-storage.service';
import { HivenewsAdminAddNewsComponent } from '../dashboard/add-news/add-news.component';
import { HivenewsAdminPostsComponent } from './components/posts/admin-posts.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    HivenewsAdminPostsComponent, LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],

  providers: [
    NavigationService, AuthService, StateStorageService, UsersService,
  ],
  exports: [HivenewsAdminPostsComponent, LoaderComponent]
})
export class AdminSharedModule { }
