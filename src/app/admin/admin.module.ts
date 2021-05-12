import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { HivenewsAdminLoginComponent } from './login/admin-login.component';
import { HivenewsDashboardModule } from './dashboard/dashboard.module';
import { AdminSharedModule } from './shared/admin-shared.module';

@NgModule({
  declarations: [
    HivenewsAdminLoginComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HivenewsDashboardModule,
    AdminSharedModule
  ],
  providers: [,
  ]
})
export class AdminModule { }
