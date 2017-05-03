import { Angular4CarouselPage } from './app.po';

describe('angular4-carousel App', () => {
  let page: Angular4CarouselPage;

  beforeEach(() => {
    page = new Angular4CarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('carousel works!');
  });
});
