import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  StateStorageService, CreatePostService,
  AuthService,
  UsersService, NavigationService,
  AuthorsService, AuthGuardService
} from './services';
import {
  AddAuthorFormComponent, AdminAuthorListItemComponent,
  AdminUserListItemComponent, HivenewsAdminPostsComponent,
  LoaderComponent, RoundedButtonComponent, RoundedFileButtonComponent
} from './components';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    HivenewsAdminPostsComponent, LoaderComponent,
    AdminUserListItemComponent, AddAuthorFormComponent,
    RoundedButtonComponent, AdminAuthorListItemComponent,
    RoundedFileButtonComponent
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
    AuthorsService,
    AuthGuardService
  ],
  exports: [
    HivenewsAdminPostsComponent,
    LoaderComponent,
    AdminUserListItemComponent,
    AddAuthorFormComponent,
    RoundedButtonComponent, AdminAuthorListItemComponent, RoundedFileButtonComponent
  ]
})
export class AdminSharedModule { }
