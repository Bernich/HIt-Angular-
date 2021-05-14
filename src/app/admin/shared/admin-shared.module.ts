import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StateStorageService, CreatePostService, AuthService, UsersService, NavigationService } from './services';
import { AddAuthorFormComponent, AdminUserListItemComponent, HivenewsAdminPostsComponent, LoaderComponent } from './components';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    HivenewsAdminPostsComponent, LoaderComponent, AdminUserListItemComponent, AddAuthorFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],

  providers: [
    NavigationService, AuthService, StateStorageService, UsersService, CreatePostService
  ],
  exports: [HivenewsAdminPostsComponent, LoaderComponent, AdminUserListItemComponent, AddAuthorFormComponent]
})
export class AdminSharedModule { }
