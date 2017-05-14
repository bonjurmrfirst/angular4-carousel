import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CarouselComponent } from '../';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CarouselService } from '../../../services/carousel.service';
import { WindowWidthService } from '../../../services/window-width.service';
import { ICarouselConfig, AnimationConfig } from '../../../services/';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [CarouselService, WindowWidthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    (component as any).sources = [
      'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
      'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
      'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
      'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg',
    ];

    (component as any).config = {
      verifyBeforeLoad: false,
      log: false,
      animation: false,
      animationType: AnimationConfig.APPEAR,
      autoplay: true,
      autoplayDelay: 500
    };

    (component as any).carouselHandlerDirective = {
      setNewSlide: () => {}
    };

    fixture.detectChanges();
  });

  it('should subscribe on image loading when start',  inject([CarouselService], (carouselService: CarouselService) => {
    (carouselService as any).imageLoad.next('!');

    expect(component.loadedImages.pop()).toBe('!');
  }));

  describe('on init', () => {

      it('should add all imgs as loaded imgs', () => {
        expect(component.loadedImages.length).toEqual(4);
      });

      it('should init service', inject([CarouselService], (carouselService: CarouselService) => {
        const spy = spyOn(carouselService, 'init');

        component.ngOnInit();

        expect(spy).toHaveBeenCalled();
      }));
  });

  describe('slide handler', () => {

    it('should set next slide if direction is "next"', () => {
      component.loadedImages = ['1', '2', '3'];

      const currentSlide = component.currentSlide;

      component.onChangeSlide('next');

      expect(component.currentSlide).toEqual(currentSlide + 1);
    });

    it('should set slide by index', () => {
      const currentSlide = component.currentSlide;

      component.onChangeSlideIndex(2);

      expect(component.currentSlide).toEqual(2);
    });

    it('should set slide by index and do nothing if current slide === new slide index', () => {
      const currentSlide = component.currentSlide;

      component.onChangeSlideIndex(0);

      expect(component.currentSlide).toEqual(currentSlide);
    });

  });

  it('should have ref to carouselHandlerDirective', () => {
    expect((component as any).carouselHandlerDirective).toBeDefined();
  });

  it('should store config', () => {
    expect((component as any).config).toBeDefined();
  });

  it('confgi should implement interface ICarouselConfig', () => {
    expect(((component as any).config as ICarouselConfig).animation).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

