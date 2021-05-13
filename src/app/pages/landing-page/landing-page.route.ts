import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const landingPageRoute: Routes = [
  {
    path: '',
    component: LandingPageComponent,
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
export class LandingPageRoutingModule { }
