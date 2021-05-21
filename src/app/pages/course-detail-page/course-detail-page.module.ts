import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HivenewsSharedModule } from 'src/app/shared';
import { HivenewsLayoutsModule } from 'src/app/layouts/layouts.module';
import { CourseDetailPageComponent } from './course-detail-page.component';
import { CourseDetailPageRoutingModule } from './course-detail-page.route';
import { AdminSharedModule } from 'src/app/admin/shared/admin-shared.module';

@NgModule({
  imports: [HivenewsSharedModule, HivenewsLayoutsModule, AdminSharedModule, CourseDetailPageRoutingModule],
  declarations: [CourseDetailPageComponent],
  entryComponents: [CourseDetailPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseDetailPageModule { }
