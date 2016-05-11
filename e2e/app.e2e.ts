import { Ng2MediaBrowserPage } from './app.po';

describe('ng2-media-browser App', function() {
  let page: Ng2MediaBrowserPage;

  beforeEach(() => {
    page = new Ng2MediaBrowserPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-media-browser works!');
  });
});
