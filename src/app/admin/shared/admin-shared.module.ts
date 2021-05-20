import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  StateStorageService, CreatePostService,
  AuthService,
  UsersService, NavigationService,
  InstructorService, AuthGuardService
} from './services';
import {
  AddAuthorFormComponent,
  AdminInstructorListItemComponent,
  AdminUserListItemComponent,
  HivenewsAdminPostsComponent,
  LoaderComponent,
  RoundedButtonComponent,
  RoundedFileButtonComponent,
  AddInstructorFormComponent
} from './components';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    HivenewsAdminPostsComponent,
    LoaderComponent,
    AdminUserListItemComponent,
    AddAuthorFormComponent,
    RoundedButtonComponent,
    AdminInstructorListItemComponent,
    RoundedFileButtonComponent,
    AddInstructorFormComponent
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
    InstructorService,
    AuthGuardService
  ],
  exports: [
    HivenewsAdminPostsComponent,
    LoaderComponent,
    AdminUserListItemComponent,
    AddAuthorFormComponent,
    RoundedButtonComponent,
    AdminInstructorListItemComponent,
    RoundedFileButtonComponent,
    AddInstructorFormComponent
  ]
})
export class AdminSharedModule { }
