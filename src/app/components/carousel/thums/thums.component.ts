import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-thums',
  templateUrl: 'thums.template.html',
  styleUrls: ['assets/thums.styles.scss']
})
export class ThumsComponent {
  private DISABLE_ELEMENT_TIME = 750;
  private disableElement: boolean;

  @Input() images: string[];
  @Input() currentSlide: number;

  @Output() changeSlide: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public onChangeSlide(slideIndex): void {
    this.changeSlide.emit(slideIndex);
  }

  public disableNavButtons(): void {
    this.disableElement = true;
    setTimeout(() => this.disableElement = false, this.DISABLE_ELEMENT_TIME);
  }
}
