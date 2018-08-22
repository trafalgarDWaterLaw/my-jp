import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing.module';
import { DashboardModule } from './dashboard.module/dashboard.module';
import { ProfileModule } from './profile.module/profile.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DashboardModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
