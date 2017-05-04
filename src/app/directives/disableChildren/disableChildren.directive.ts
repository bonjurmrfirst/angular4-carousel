import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[carouselDisableChildren]'
})
export class CarouselDisableChildrenDirective  {
  private SLIDE_ANIMATION_TIME = 700;

  @Input() carouselDisableChildren: string;

  constructor(private el: ElementRef) {}

  disableChildren() {
    let btnElements = Array.from(this.el.nativeElement.children);

    const toggleFunc = this.toggleClass.bind(this, btnElements, this.carouselDisableChildren);

    toggleFunc();
    setTimeout(toggleFunc, this.SLIDE_ANIMATION_TIME);
  }

  private toggleClass(elements: HTMLElement[], className: string): void {
    elements.forEach((element) => {
      element.classList.toggle(className);
    });
  }
}
