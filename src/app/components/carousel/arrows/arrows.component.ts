import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-arrows',
  templateUrl: 'arrows.template.html',
  styleUrls: ['assets/arrows.styles.scss']
})
export class CarouselArrowsComponent {
  private DISABLE_ELEMENT_TIME = 750;
  public disableElement: boolean;

  @Output() changeSlide: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public onChangeSlide(direction: string): void {
    this.changeSlide.emit(direction);
  }

  public disableNavButtons(): void {
    this.disableElement = true;
    setTimeout(() => this.disableElement = false, this.DISABLE_ELEMENT_TIME);
  }
}
