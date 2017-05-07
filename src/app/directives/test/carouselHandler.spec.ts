import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CarouselHandlerDirective } from '../carouselHandler.directive';

import { CarouselService } from '../../services';
import { ICarouselConfig, AnimationConfig } from '../../services/';

import { CarouselComponent } from '../../components/';

describe('CarouselHandlerDirective', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CarouselComponent, CarouselHandlerDirective],
      providers: [CarouselService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(CarouselComponent);

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
      setNewSlide: ()=>{}
    };

    fixture.detectChanges(); // initial binding
  });

  it('', () => {

  });
});
