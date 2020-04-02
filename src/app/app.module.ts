import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BgWrapComponent } from './bg-wrap/bg-wrap.component';
import { MediaFirstComponent } from './media-first/media-first.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { MediaSecondComponent } from './media-second/media-second.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BgWrapComponent,
    MediaFirstComponent,
    SliderSectionComponent,
    MediaSecondComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
