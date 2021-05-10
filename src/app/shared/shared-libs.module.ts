import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule,
    InfiniteScrollModule,
    CarouselModule,
    DeferLoadModule,
    MaterialModule
  ]
})
export class HivenewsSharedLibsModule {
  static forRoot() {
    return {
      ngModule: HivenewsSharedLibsModule
    };
  }
}
