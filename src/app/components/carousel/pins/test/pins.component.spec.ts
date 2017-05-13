import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PinsComponent } from '../';

describe('PinsComponent', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsComponent);
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

    it('should emit event with new slide', () => {
      let isChanging;
      const chSlide = component.changeSlide.subscribe((event) => isChanging = event);

      component.onChangeSlide(3);

      expect(isChanging).toEqual(3);
    });

    it('should be equal 700 ms', () => {
      expect((component as any).DISABLE_ELEMENT_TIME).toEqual(750);
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
