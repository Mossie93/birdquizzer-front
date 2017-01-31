import { BirdquizzerFrontPage } from './app.po';

describe('birdquizzer-front App', function() {
  let page: BirdquizzerFrontPage;

  beforeEach(() => {
    page = new BirdquizzerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
