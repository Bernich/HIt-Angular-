import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailPageComponent } from './news-detail-page.component';

export const landingPageRoute: Routes = [
  {
    path: '',
    component: NewsDetailPageComponent,

  }
];


@NgModule({
  imports: [
    RouterModule.forChild(landingPageRoute)

  ],
  exports: [RouterModule]
})
export class NewsDetailPageRoutingModule { }
