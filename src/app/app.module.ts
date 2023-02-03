import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Cocktail2Component } from './cocktail2/cocktail2.component';
import { Cocktail1Component } from './cocktail1/cocktail1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Cocktail2Component,
    Cocktail1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
