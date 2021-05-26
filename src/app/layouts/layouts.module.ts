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
  NewsLetterComponent,
  MilestoneComponent,
  VideoAboutUsComponent,
  PartnersFullListComponent,
  VideoDialogComponent,
  ImageTextCardComponent,
  ExplainerTextComponent,
  VereticalDividerComponent,
  NewProgramsLayoutComponent,
  PeopleAreSayingComponent,
  NewHeaderComponent,
  NewOnsiteNavbarComponent
  NewNewsCardComponent,
  NewAllProgramsLayoutComponent
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
    NewsLetterComponent,
    MilestoneComponent,
    VideoAboutUsComponent,
    PartnersFullListComponent,
    VideoDialogComponent,
    ImageTextCardComponent,
    ExplainerTextComponent,
    VereticalDividerComponent,
    NewProgramsLayoutComponent,
    PeopleAreSayingComponent,
    NewHeaderComponent,
    NewOnsiteNavbarComponent
    NewNewsCardComponent,
    NewAllProgramsLayoutComponent
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
    NewsListComponent,
    MilestoneComponent,
    VideoAboutUsComponent,
    PartnersFullListComponent,
    VideoDialogComponent,
    ImageTextCardComponent,
    ExplainerTextComponent,
    VereticalDividerComponent,
    NewProgramsLayoutComponent,
    PeopleAreSayingComponent,
    NewHeaderComponent,
    NewOnsiteNavbarComponent
    NewNewsCardComponent,
    NewAllProgramsLayoutComponent
  ]
})
export class HivenewsLayoutsModule { }
