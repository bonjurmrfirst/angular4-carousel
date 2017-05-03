import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-pins',
  templateUrl: './pins.template.html',
  styleUrls: ['./assets/pins.styles.scss']
})
export class PinsComponent {
  @Input() images: string[];
  @Input() currentSlide: number;

  @Output() changeSlide: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public onChangeSlide(slideIndex): void {
    this.changeSlide.emit(slideIndex);
  }
}

// todo rename slides
