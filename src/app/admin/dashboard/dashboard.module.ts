import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HivenewsDashboardComponent } from './dashboard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HivenewsAdminAddNewsComponent } from './add-post/add-post.component';
import { HivenewsAdminListComponent } from './posts-list/posts-list.component';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { HivenewsAdminUsersListComponent } from './users-list/users-list.component';
import { HivenewsAdminAddAuthorComponent } from './add-author/add-author.component';
import { HivenewsAdminAuthorsListComponent } from './authors-list/authors-list.component';
@NgModule({
  declarations: [
    HivenewsDashboardComponent,
    HivenewsAdminAddNewsComponent,
    HivenewsAdminListComponent,
    HivenewsAdminUsersListComponent,
    HivenewsAdminAddAuthorComponent,
    HivenewsAdminAuthorsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSharedModule,
    MaterialModule
  ],
  providers: [
  ]
})
export class HivenewsDashboardModule { }
