/**
 * Created by Illia_Potsepaiev on 4/28/2017.
 */

import { Component, OnInit, Input, ViewChild, forwardRef } from '@angular/core';

import { CarouselService, ICarouselConfig } from '../../services';

import { CarouselHandlerDirective } from '../../directives';

@Component({
  selector: 'carousel-root',
  templateUrl: 'carousel-root.template.html',
  styleUrls: ['assets/carousel-root.styles.scss']
})
export class CarouselRootComponent implements OnInit {
  @Input() private sources: string[];
  @Input() private config: ICarouselConfig;

  @ViewChild(forwardRef(() => CarouselHandlerDirective)) private carouselHandlerDirective: CarouselHandlerDirective;

  private autoplayIntervalId;

  public loadedImages: string[];
  public currentSlide = 0;

  constructor(private carouselService: CarouselService) {
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

  public onChangeSlide(direction): void {
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

  public stopAutoplay(): void {
    clearInterval(this.autoplayIntervalId);
  }

  private startAutoplay(delay: number): void {
    this.autoplayIntervalId = setInterval(() => {
      this.onChangeSlide('next');
    }, delay);
  }
}
