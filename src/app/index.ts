import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselService, WindowWidthService } from './services';

import {
  AppComponent,
  CarouselComponent,
  SlideComponent,
  CarouselArrowsComponent,
  PinsComponent
} from './components';

import { CarouselHandlerDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SlideComponent,
    CarouselArrowsComponent,
    PinsComponent,
    CarouselHandlerDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CarouselComponent],
  providers: [CarouselService, WindowWidthService],
  bootstrap: [AppComponent]
})
export class CarouselModule { }
