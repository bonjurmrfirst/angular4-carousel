import { browser, element, by } from 'protractor';

export class Angular4CarouselPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('carousel-carousel h1')).getText();
  }
}
