import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselService } from './services';

import {
  AppComponent,
  CarouselComponent,
  SlideComponent,
  CarouselArrowsComponent,
  PinsComponent
} from './components';

import {
  CarouselHandlerDirective,
  CarouselDisableChildrenDirective
} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SlideComponent,
    CarouselArrowsComponent,
    PinsComponent,
    CarouselHandlerDirective,
    CarouselDisableChildrenDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CarouselComponent],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class CarouselModule { }
