// XX TODO: Figure out how to make a elements look like links. Empty href doesnt' work
// XX TODO: Figure out how to reload the current page on login N/A
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { PublicComponent } from './public.component';
import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PublicComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }