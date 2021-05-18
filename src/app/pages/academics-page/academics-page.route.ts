import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsPageComponent } from './academics-page.component';

export const landingPageRoute: Routes = [
  {
    path: '',
    component: AcademicsPageComponent,
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
export class AcademicsPageRoutingModule { }
