import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent, SilderComponent, WraperComponent, FooterComponent } from './tpls';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent,
    WraperComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
