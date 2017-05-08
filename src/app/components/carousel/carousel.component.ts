import { Component, OnInit, Input, ViewChild, forwardRef } from '@angular/core';

import { CarouselService, ICarouselConfig } from '../../services';
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

  private autoplayIntervalId;

  public loadedImages: string[];
  public currentSlide = 0;

  constructor(private carouselService: CarouselService) {
    //noinspection TypeScriptUnresolvedFunction
    this.carouselService.onImageLoad().subscribe(
      (images) => this.loadedImages = this.loadedImages.concat(images)
    );
  }

  ngOnInit() {
    const [showImmediate, ...showWhenLoad] = this.sources;

    this.loadedImages = [showImmediate];
    this.carouselService.init(showWhenLoad, this.config);

    if (this.config.autoplay) {
      this.startAutoplay(this.config.autoplayDelay);
    }
  }

  public onChangeSlide(direction: string): void {
    if (direction === 'prev') {
      this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
    } else {
      this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
    }
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
  }

  public onChangeSlideIndex(index: number): void {
    if (index === this.currentSlide) {
      return;
    }

    const direction = index > this.currentSlide ? 'next' : 'prev';

    this.currentSlide = index;
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
  }

  private onStopAutoplay(): void {
    clearInterval(this.autoplayIntervalId);
  }

  private startAutoplay(delay: number): void {
    this.autoplayIntervalId = setInterval(() => {
      this.onChangeSlide('next');
    }, delay);
  }
}
