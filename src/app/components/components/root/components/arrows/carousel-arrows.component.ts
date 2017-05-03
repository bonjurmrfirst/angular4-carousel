import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { CarouselDisableChildrenDirective } from '../../../../../directives/disableChildren';

@Component({
  selector: 'carousel-arrows',
  templateUrl: './carousel-arrows.template.html',
  styleUrls: ['./assets/carousel-arrows.styles.scss']
})
export class CarouselArrowsComponent {
  @Output() changeSlide: EventEmitter<string> = new EventEmitter();

  @ViewChild(CarouselDisableChildrenDirective)
  public carouselDisableChildrenDirective: CarouselDisableChildrenDirective;

  constructor() {}

  public onChangeSlide(direction: string): void {
    this.changeSlide.emit(direction);
    this.carouselDisableChildrenDirective.disableChildren();
  }
}

// todo rename arrows-component
