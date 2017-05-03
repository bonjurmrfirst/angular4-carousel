import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselService } from './services';

import {
  AppComponent,
  CarouselRootComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CarouselRootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [CarouselRootComponent],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class CarouselModule { }
