import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HivenewsEntityModule } from './entities/entity.module';
import { HivenewsSharedModule } from './shared';
import { HivenewsCoreModule } from './core';
import { HivenewsLayoutsModule } from './layouts/layouts.module';
import { HivenewsLandingPageModule } from './pages/landing-page';
import { HivenewsPagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    HivenewsSharedModule.forRoot(),
    HivenewsCoreModule,
    HivenewsLayoutsModule,
    HivenewsLandingPageModule,
    HivenewsPagesModule,
    HivenewsEntityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
