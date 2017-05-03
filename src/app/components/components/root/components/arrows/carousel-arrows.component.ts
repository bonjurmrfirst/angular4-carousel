import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-arrows',
  templateUrl: './carousel-arrows.template.html',
  styleUrls: ['./assets/carousel-arrows.styles.scss']
})
export class CarouselArrowsComponent {
  @Output() changeSlide: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public onChangeSlide(direction: string): void {
    this.changeSlide.emit(direction);
  }
}

// todo rename arrows-component
