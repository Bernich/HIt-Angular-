import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailPageComponent } from './course-detail-page.component';

export const landingPageRoute: Routes = [
  {
    path: '',
    component: CourseDetailPageComponent,
    data: {
      authorities: [],
      pageTitle: 'home.title'
    }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(landingPageRoute)

  ],
  exports: [RouterModule]
})
export class CourseDetailPageRoutingModule { }
