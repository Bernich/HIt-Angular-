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
import { HiveAdminAddInstructorComponent } from './add-instructor/add-instructor.component';
import { HiveAdminInstructorListComponent } from './authors-list/authors-list.component';
import { AuthorsBottomSheetComponent } from './add-post/authors-bottomsheet.component';
@NgModule({
  declarations: [
    HivenewsDashboardComponent,
    HivenewsAdminAddNewsComponent,
    HivenewsAdminListComponent,
    HivenewsAdminUsersListComponent,
    HiveAdminAddInstructorComponent,
    HiveAdminInstructorListComponent,
    AuthorsBottomSheetComponent
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
