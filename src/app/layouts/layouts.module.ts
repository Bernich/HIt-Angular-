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
  PostCardsComponent,
  PartnersComponent,
  MantraComponent,
  ConvinceComponent,
  ProgramsComponent,
  ProgramsCardComponent,
  NewsCardComponent,
  NewsListComponent,
  NewsLetterComponent
} from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HivenewsSharedModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    OnsiteNavbarComponent,
    FooterComponent,
    SubscribeDialogComponent,
    CategoryTabComponent,
    PostCardsComponent,
    LoadMoreComponent,
    PartnersComponent,
    MantraComponent,
    ConvinceComponent,
    ProgramsComponent,
    ProgramsCardComponent,
    NewsCardComponent,
    NewsListComponent,
    NewsLetterComponent
  ],
  exports: [
    OnsiteNavbarComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeDialogComponent,
    CategoryTabComponent,
    PostCardsComponent,
    LoadMoreComponent,
    PartnersComponent,
    MantraComponent,
    ConvinceComponent,
    ProgramsComponent,
    ProgramsCardComponent,
    NewsCardComponent,
    NewsLetterComponent,
    NewsListComponent
  ]
})
export class HivenewsLayoutsModule { }
