import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[carouselDisableChildren]'
})
export class CarouselDisableChildrenDirective  {
  private TOGGLE_CLASS_TIME = 700;

  @Input() carouselDisableChildren: string;

  constructor(private el: ElementRef) {}

  disableChildren() {
    let btnElements = Array.from(this.el.nativeElement.children);

    const toggleFunc = this.toggleClass.bind(this, btnElements, this.carouselDisableChildren);

    toggleFunc();
    setTimeout(toggleFunc, this.TOGGLE_CLASS_TIME);
  }

  private toggleClass(elements: HTMLElement[], className: string): void {
    elements.forEach((element) => {
      element.classList.toggle(className);
    });
  }
}
