import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HivenewsSharedLibsModule } from './shared-libs.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    HivenewsSharedLibsModule,
    MaterialModule,
    TabsModule,
    ModalModule
  ],

  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [
    CommonModule,
    HivenewsSharedLibsModule,
    MaterialModule,
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
