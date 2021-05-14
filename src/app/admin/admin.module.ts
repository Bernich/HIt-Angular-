import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { HivenewsAdminLoginComponent } from './login/admin-login.component';
import { HivenewsDashboardModule } from './dashboard/dashboard.module';
import { AdminSharedModule } from './shared/admin-shared.module';
import { NavigationService, AuthService, StateStorageService, UsersService } from './shared/services';
import { InteractiveCreatePostComponent } from './create-post-interative/create-post-interactive.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HivenewsLayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [
    HivenewsAdminLoginComponent, InteractiveCreatePostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HivenewsDashboardModule,
    AdminSharedModule,
    EditorModule,
    HivenewsLayoutsModule
  ],
  providers: [
  ]
})
export class AdminModule { }
