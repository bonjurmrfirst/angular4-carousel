import { TestBed, inject } from '@angular/core/testing';

import { CarouselService } from '../carousel.service';
import { ICarouselConfig, AnimationConfig } from '../declarations';
import createSpy = jasmine.createSpy;

describe('CarouselService', () => {
  const imageSources = [
    'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
    '2',
    '3'
  ];

  const config: ICarouselConfig = {
    verifyBeforeLoad: false,
    log: false,
    animation: true,
    animationType: AnimationConfig.APPEAR,
    autoplay: true,
    autoplayDelay: 500,
    stopAutoplayMinWidth: 768
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService]
    });
  });

  it('should return copy of carousel config', inject([CarouselService], (service: CarouselService) => {
    service.init(imageSources, config);

    expect((service.getConfig())).not.toBe(config);
  }));

  describe('imageLoad', () => {

    it('should load images via document.createElement', inject([CarouselService], (service: CarouselService) => {
      service.init(imageSources, config);

      const spy = spyOn(document, 'createElement').and.callThrough();

      (service as any).loadImages(imageSources);

      expect(spy).toHaveBeenCalled();
    }));

  });

  describe('defines image success load handler and', () => {

    it('should increase counter of loaded images', inject([CarouselService], (service: CarouselService) => {
      service.init(imageSources, config);
      (service as any).onImageElementLoad(['imgSrc'], 'loadedImgSrc');

      expect((service as any).imageLoadedCount).toEqual(1);
    }));

    it('should emit image load event', inject([CarouselService], (service: CarouselService) => {
      service.init(imageSources, config);

      const onImageLoad = service.onImageLoad();

      (service as any).onImageElementLoad(['imgSrc'], 'loadedImgSrc');

      onImageLoad.subscribe((src) => {
        expect(src).toBe('http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg');
      });
    }));

    it('should invoke logger', inject([CarouselService], (service: CarouselService) => {
      const spy = spyOn(service, 'carouselTinyLogger');

      service.init(imageSources, config);
      (service as any).onImageElementLoad(['imgSrc'], 'loadedImgSrc');

      expect(spy).toHaveBeenCalled();
    }));

    it('should invoke function checks if all images is load', inject([CarouselService], (service: CarouselService) => {
      const spy = spyOn(service, 'emitIfAllImagesLoaded');

      service.init(imageSources, config);
      (service as any).onImageElementLoad(['imgSrc'], 'loadedImgSrc');

      expect(spy).toHaveBeenCalled();
    }));

  });

  describe('defines image error handler and', () => {

    it('should delete images that not loaded', inject([CarouselService], (service: CarouselService) => {
      service.init(imageSources, config);

      (service as any).onImageElementLoadError(imageSources, '2');

      expect(imageSources.length).toEqual(2);
    }));

    it('should invoke logger', inject([CarouselService], (service: CarouselService) => {
      const spy = spyOn(service, 'carouselTinyLogger');

      service.init(imageSources, config);
      (service as any).onImageElementLoadError(['imgSrc'], 'loadedImgSrc');

      expect(spy).toHaveBeenCalled();
    }));

    it('should invoke function checks if all images is load', inject([CarouselService], (service: CarouselService) => {
      const spy = spyOn(service, 'emitIfAllImagesLoaded');

      service.init(imageSources, config);
      (service as any).onImageElementLoadError(['imgSrc'], 'loadedImgSrc');

      expect(spy).toHaveBeenCalled();
    }));

  });

  describe('provides init() API', () => {


    it('should set autoplayDelay to 1000 if autoplayDelay < 1000', inject([CarouselService], (service: CarouselService) => {
      service.init(imageSources, config);

      expect((service as any).config.autoplayDelay).toBe(1000);
    }));

  });
});
