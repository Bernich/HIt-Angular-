import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HivenewsDashboardComponent } from './dashboard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HivenewsAdminAddNewsComponent } from './add-news/add-news.component';
import { HivenewsAdminListComponent } from './news-list/news-list.component';
import { AdminSharedModule } from '../shared/admin-shared.module';
@NgModule({
  declarations: [
    HivenewsDashboardComponent, HivenewsAdminAddNewsComponent, HivenewsAdminListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSharedModule
  ],
  providers: [
  ]
})
export class HivenewsDashboardModule { }
