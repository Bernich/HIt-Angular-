import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  providers: [
    NavigationService,
  ],
  exports: []
})
export class AdminSharedModule { }
