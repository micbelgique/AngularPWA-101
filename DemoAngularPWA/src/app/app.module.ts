import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenomdevotrecomponentComponent } from './lenomdevotrecomponent/lenomdevotrecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LenomdevotrecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
