import { ScrollTestPage } from './app.po';

describe('scroll-test App', () => {
  let page: ScrollTestPage;

  beforeEach(() => {
    page = new ScrollTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
