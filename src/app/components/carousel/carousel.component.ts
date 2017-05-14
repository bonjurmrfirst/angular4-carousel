import { Component, OnInit, Input, ViewChild, forwardRef } from '@angular/core';

import { CarouselService, ICarouselConfig, WindowWidthService } from '../../services';

import { PinsComponent } from './pins';
import { CarouselArrowsComponent } from './arrows';
import { CarouselHandlerDirective } from '../../directives';

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.template.html',
  styleUrls: ['assets/carousel.styles.scss']
})
export class CarouselComponent implements OnInit {
  @Input() private sources: string[];
  @Input() private config: ICarouselConfig;

  @ViewChild(forwardRef(() => CarouselHandlerDirective)) private carouselHandlerDirective: CarouselHandlerDirective;
  @ViewChild(CarouselArrowsComponent) private carouselArrowsComponent: CarouselArrowsComponent;
  @ViewChild(PinsComponent) private pinsComponent: PinsComponent;

  private autoplayIntervalId;
  private preventAutoplay: boolean;

  public loadedImages: string[];
  public galleryLength: number;
  public currentSlide = 0;

  constructor(private carouselService: CarouselService, private windowWidthService: WindowWidthService) {
    this.carouselService.onImageLoad().subscribe(
      (images) => this.loadedImages = this.loadedImages.concat(images)
    );
  }

  ngOnInit() {
    this.galleryLength = this.sources.length;

    const [showImmediate, ...showWhenLoad] = this.sources;
    this.loadedImages = [showImmediate];

    if (this.galleryLength < 2) {
      return;
    }

    this.carouselService.init(showWhenLoad, this.config);

    if (this.config.autoplay) {
      const minWidth = this.config.stopAutoplayMinWidth;

      this.windowWidthService.onResize(minWidth, true).subscribe(
        (isMinWidth) => {
          this.preventAutoplay = !isMinWidth;
          this.onHandleAutoplay(!this.config.autoplay);
        }
      );
    }
  }

  public onChangeSlide(direction: string): void {
    if (direction === 'prev') {
      this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
    } else {
      this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
    }
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
    this.disableCarouselNavBtns();
  }

  public onChangeSlideIndex(index: number): void {
    if (index === this.currentSlide) {
      return;
    }

    const direction = index > this.currentSlide ? 'next' : 'prev';

    this.currentSlide = index;
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
    this.disableCarouselNavBtns();
  }

  public onHandleAutoplay(stopAutoplay): void {
    if (stopAutoplay || this.preventAutoplay) {
      clearInterval(this.autoplayIntervalId);
      return;
    }

    this.startAutoplay(this.config.autoplayDelay);
  }

  private startAutoplay(delay: number): void {
    this.autoplayIntervalId = setInterval(() => {
      this.onChangeSlide('next');
      this.pinsComponent.disableNavButtons();
      this.carouselArrowsComponent.disableNavButtons();
    }, delay);
  }

  private disableCarouselNavBtns(): void {
    this.carouselArrowsComponent.disableNavButtons();
    this.pinsComponent.disableNavButtons();
  }
}
