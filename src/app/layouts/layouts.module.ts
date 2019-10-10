import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HivenewsSharedModule } from '../shared';

import {
  HeaderComponent,
  OnsiteNavbarComponent,
  FooterComponent,
  SubscribeDialogComponent,
  CategoryTabComponent,
  LoadMoreComponent,
  PostCardsComponent
} from '.';

@NgModule({
  imports: [CommonModule, RouterModule, HivenewsSharedModule.forRoot()],
  declarations: [
    HeaderComponent,
    OnsiteNavbarComponent,
    FooterComponent,
    SubscribeDialogComponent,
    CategoryTabComponent,
    PostCardsComponent,
    LoadMoreComponent
  ],
  exports: [
    OnsiteNavbarComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeDialogComponent,
    CategoryTabComponent,
    PostCardsComponent,
    LoadMoreComponent
  ]
})
export class HivenewsLayoutsModule {}
