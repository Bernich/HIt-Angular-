import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HivenewsSharedModule } from './shared';
import { HivenewsCoreModule } from './core';
import { HivenewsLayoutsModule } from './layouts/layouts.module';
import { HivenewsLandingPageModule } from './pages/landing-page';
import { HivenewsPagesModule } from './pages/pages.module';
import { HivenewsEntityModule } from './entities/entity.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AdminModule } from './admin/admin.module';


// Note we need a separate function as it's required
// by the AOT compiler.
// export function playerFactory() {
//   return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
// }
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HivenewsSharedModule.forRoot(),
    HivenewsCoreModule,
    HivenewsLayoutsModule,
    HivenewsLandingPageModule,
    HivenewsPagesModule,
    HivenewsEntityModule,
    // Extract all similar modules to shared
    ModalModule.forRoot(),
    AdminModule,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
