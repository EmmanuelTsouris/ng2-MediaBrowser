export class Ng2MediaBrowserPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-media-browser-app h1')).getText();
  }
}
