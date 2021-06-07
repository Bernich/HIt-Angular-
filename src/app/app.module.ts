import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HivenewsSharedModule } from './shared';
import { HivenewsCoreModule } from './core';
import { HivenewsLayoutsModule } from './layouts/layouts.module';
import { HivenewsLandingPageModule } from './pages/landing-page';
import { HivenewsEntityModule } from './entities/entity.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminModule } from './admin/admin.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { NewsDetailPageModule } from './pages/news-detail-page';
import { NewNewsPageComponent } from './pages/new-news-page';


// Note we need a separate function as it's required
// by the AOT compiler.
// export function playerFactory() {
//   return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
// }
@NgModule({
  declarations: [
    AppComponent, ComingSoonPageComponent, NewNewsPageComponent
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
    // HivenewsEntityModule,
    // Extract all similar modules to shared
    ModalModule.forRoot(),
    AdminModule,
    NewsDetailPageModule,
    NgxWebstorageModule.forRoot(),

  ],

  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
