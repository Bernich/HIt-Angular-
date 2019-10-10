import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMatModule } from './angular-mat.module';
import { HivenewsSharedLibsModule } from './shared-libs.module';
import { TabsModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    HivenewsSharedLibsModule,
    AngularMatModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [
    CommonModule,
    HivenewsSharedLibsModule,
    AngularMatModule,
    ModalModule,
    TabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HivenewsSharedModule {
  static forRoot() {
    return {
      ngModule: HivenewsSharedModule
    };
  }
}
