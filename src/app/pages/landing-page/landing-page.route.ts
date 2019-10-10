import { Routes } from '@angular/router';
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
