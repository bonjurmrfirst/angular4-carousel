import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SlideComponent } from '../';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.src = '';
    component.slideNo = 1;
    component.isHidden = false;
  });

  it('should have img sources', () => {
    expect(component.src).toBe('');
  });

  it('should have slide number', () => {
    expect(component.slideNo).toBe(1);
  });

  it('should have slide number', () => {
    expect(component.isHidden).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
