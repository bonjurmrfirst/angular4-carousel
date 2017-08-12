import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselService, WindowWidthService } from './services';

import {
  AppComponent,
  CarouselComponent,
  SlideComponent,
  CarouselArrowsComponent,
  PinsComponent,
  ThumsComponent
  
} from './components';

import { CarouselHandlerDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SlideComponent,
    CarouselArrowsComponent,
    PinsComponent,
    ThumsComponent,
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
