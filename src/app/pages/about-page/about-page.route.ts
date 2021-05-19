import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

export const landingPageRoute: Routes = [
  {
    path: '',
    component: AboutPageComponent,
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
export class AboutPageRoutingModule { }
