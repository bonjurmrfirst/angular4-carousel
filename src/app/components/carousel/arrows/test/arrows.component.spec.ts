import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CarouselArrowsComponent } from '../';

describe('ArrowsComponent', () => {
  let component: CarouselArrowsComponent;
  let fixture: ComponentFixture<CarouselArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselArrowsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('disable time constant', () => {

    it('should be defined', () => {
      expect((component as any).DISABLE_ELEMENT_TIME).toBeDefined();
    });

    it('should be equal 700 ms', () => {
      expect((component as any).DISABLE_ELEMENT_TIME).toEqual(750);
    });

  });

  describe('change slide handler', () => {

    it('should emit event that slide is changing', () => {
      let isChanging = false;
      const chSlide = component.changeSlide.subscribe((event) => isChanging = !isChanging);

      component.onChangeSlide('next');

      expect(isChanging).toBeTruthy();
    });

    it('should emit event with direction', () => {
      let isChanging;
      const chSlide = component.changeSlide.subscribe((event) => isChanging = event);

      component.onChangeSlide('next');

      expect(isChanging).toEqual('next');
    });

    it('should be equal 700 ms', () => {
      expect((component as any).DISABLE_ELEMENT_TIME).toEqual(750);
    });

  });

  it('should create', () => {
   expect(component).toBeTruthy();
   });
});
