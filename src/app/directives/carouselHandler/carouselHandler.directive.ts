import { Directive, OnInit, ElementRef } from '@angular/core';

import { CarouselService, ICarouselConfig } from '../../services';

@Directive({
  selector: '[appCarouselHandler]'
})
export class CarouselHandlerDirective implements OnInit {
  private config: ICarouselConfig;
  private currentSlide = 0;

  constructor(private el: ElementRef, private carouselService: CarouselService) {}

  public setNewSlide(newSlide: number, direction: string): void {
    const currentSlide = this.el.nativeElement.querySelector(`[data-slide="${this.currentSlide}"`);
    const nextSlide = this.el.nativeElement.querySelector(`[data-slide="${newSlide}"`);

    this.animate(currentSlide, nextSlide, direction);

    this.currentSlide = newSlide;
  }

  private animate(currentSlide: HTMLElement, nextSlide: HTMLElement, direction: string): void {
    if (!this.config.animation) {
      this.toggleClass('slide--hidden-initial', currentSlide, nextSlide);
      return;
    }

    const animationType = this.config.animationType;

    currentSlide.className = nextSlide.className = 'slide';
    this.toggleClass(`slide--hidden-${animationType}-${direction}`, currentSlide);
    this.toggleClass(`slide--show-${animationType}-${direction}`, nextSlide);
  }

  private toggleClass(className: string, ...elements): void {
    elements.forEach((element) => {
      element.classList.toggle(className);
    });
  }

  ngOnInit() {
    this.config = this.carouselService.getConfig();
  }
}
