import {async, ComponentFixture, TestBed, inject, fakeAsync} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ElementRef} from '@angular/core';
import { By } from '@angular/platform-browser';

import { CarouselHandlerDirective } from '../carouselHandler.directive';

import { CarouselService } from '../../services';
import { ICarouselConfig, AnimationConfig } from '../../services/';

import { CarouselComponent, SlideComponent } from '../../components/';

const testDivElement = window.document.createElement('div');
testDivElement.classList.add('_test');
testDivElement.innerHTML = `
  <img data-slide="0">
  <img data-slide="1" class="slide--hidden-initial">
  <img data-slide="2" class="slide--hidden-initial">
`;

const el = new ElementRef(testDivElement);

const service = new CarouselService();
const config: ICarouselConfig = {
  verifyBeforeLoad: false,
  log: false,
  animation: false,
  animationType: AnimationConfig.APPEAR,
  autoplay: true,
  autoplayDelay: 500
};
service.init(['1', '2', '3'], config);

const directive = new CarouselHandlerDirective(el, service);
directive.ngOnInit();


describe('CarouselHandlerDirective', () => {

  it('should get config', () => {
    expect((directive as any).config).toEqual(config);
  });

  it('should set new slide', () => {
    directive.setNewSlide(1, 'next');
    expect((directive as any)
      .el.nativeElement
      .querySelectorAll('img')[0]
      .classList
      .contains('slide--hidden-initial'))
      .toBeTruthy();
  });

});

/*
describe('CarouselHandlerDirective', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CarouselComponent, SlideComponent, CarouselHandlerDirective],
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
      animation: true,
      animationType: AnimationConfig.APPEAR,
      autoplay: true,
      autoplayDelay: 500
    };

    (component as any).carouselHandlerDirective = {
      setNewSlide: ()=>{}
    };

    component.ngOnInit();
    component.onChangeSlide('next');

    fixture.detectChanges(); // initial binding
  });

  it('', fakeAsync(() => {
    console.log(fixture.nativeElement);
    expect(fixture.nativeElement.querySelector('img').classList.contains('slide--hidden-initial')).toBeTruthy();
    //const de = fixture.debugElement.query(By.css('h2'));
  }));
});
*/
