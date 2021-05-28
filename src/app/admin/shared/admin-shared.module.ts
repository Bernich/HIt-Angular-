import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  StateStorageService, CreatePostService,
  AuthService,
  UsersService,
  NavigationService,
  InstructorService,
  AuthGuardService,
  CourseService,
  NotificationService
} from './services';
import {
  AddAuthorFormComponent,
  AddUserFormComponent,
  AdminInstructorListItemComponent,
  AdminUserListItemComponent,
  HivenewsAdminPostsComponent,
  LoaderComponent,
  RoundedButtonComponent,
  RoundedFileButtonComponent,
  AddInstructorFormComponent,
  CourseObjectivesInputComponent,
  AdminCourseItemComponent,
  EditProfileFormComponent,
  CourseNavContentComponent,
  UsersNavContentComponent,
  InstructorNavContentComponent,
  PostNavContentComponent,
  AdminAuthorListItemComponent,
  AuthorsNavContentComponent
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
    AddInstructorFormComponent,
    CourseObjectivesInputComponent,
    AdminCourseItemComponent,
    AddUserFormComponent,
    EditProfileFormComponent,
    CourseNavContentComponent,
    UsersNavContentComponent,
    InstructorNavContentComponent,
    PostNavContentComponent,
    AdminAuthorListItemComponent,
    AuthorsNavContentComponent

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
    AuthGuardService,
    CourseService,
    NotificationService
  ],
  exports: [
    HivenewsAdminPostsComponent,
    LoaderComponent,
    AdminUserListItemComponent,
    AddAuthorFormComponent,
    RoundedButtonComponent,
    AdminInstructorListItemComponent,
    RoundedFileButtonComponent,
    AddInstructorFormComponent,
    CourseObjectivesInputComponent,
    AdminCourseItemComponent,
    AddUserFormComponent,
    EditProfileFormComponent,
    CourseNavContentComponent,
    UsersNavContentComponent,
    InstructorNavContentComponent,
    PostNavContentComponent,
    AdminAuthorListItemComponent,
    AuthorsNavContentComponent
  ]
})
export class AdminSharedModule { }
