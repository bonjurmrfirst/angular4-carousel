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
  autoplayDelay: 500,
  stopAutoplayMinWidth: 768
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