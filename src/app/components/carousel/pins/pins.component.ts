import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { CarouselDisableChildrenDirective } from '../../../directives';

@Component({
  selector: 'carousel-pins',
  templateUrl: 'pins.template.html',
  styleUrls: ['assets/pins.styles.scss']
})
export class PinsComponent {
  @Input() images: string[];
  @Input() currentSlide: number;

  @Output() changeSlide: EventEmitter<number> = new EventEmitter();

  @ViewChild(CarouselDisableChildrenDirective)
  public carouselDisableChildrenDirective: CarouselDisableChildrenDirective;

  constructor() { }

  public onChangeSlide(slideIndex): void {
    this.changeSlide.emit(slideIndex);
    this.carouselDisableChildrenDirective.disableChildren();
  }
}
