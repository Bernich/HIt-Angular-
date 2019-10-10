import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-bootstrap';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [],
  exports: [
    FormsModule,
    NgbCarouselModule,
    InfiniteScrollModule,
    CarouselModule,
    MatProgressSpinnerModule,
    DeferLoadModule
  ]
})
export class HivenewsSharedLibsModule {
  static forRoot() {
    return {
      ngModule: HivenewsSharedLibsModule
    };
  }
}
