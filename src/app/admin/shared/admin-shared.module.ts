import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  StateStorageService, CreatePostService,
  AuthService,
  UsersService, NavigationService
} from './services';
import {
  AddAuthorFormComponent, AdminAuthorListItemComponent,
  AdminUserListItemComponent, HivenewsAdminPostsComponent,
  LoaderComponent, RoundedButtonComponent
} from './components';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { AuthorsService } from './services/author.service';


@NgModule({
  declarations: [
    HivenewsAdminPostsComponent, LoaderComponent,
    AdminUserListItemComponent, AddAuthorFormComponent,
    RoundedButtonComponent, AdminAuthorListItemComponent
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
    NavigationService,
    AuthService,
    StateStorageService,
    UsersService,
    CreatePostService,
    AuthorsService
  ],
  exports: [
    HivenewsAdminPostsComponent,
    LoaderComponent,
    AdminUserListItemComponent,
    AddAuthorFormComponent,
    RoundedButtonComponent, AdminAuthorListItemComponent
  ]
})
export class AdminSharedModule { }
