import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselService } from './services';

import {
  AppComponent,
  CarouselRootComponent,
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
    CarouselRootComponent,
    CarouselArrowsComponent,
    PinsComponent,
    CarouselHandlerDirective,
    CarouselDisableChildrenDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CarouselRootComponent],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class CarouselModule { }
