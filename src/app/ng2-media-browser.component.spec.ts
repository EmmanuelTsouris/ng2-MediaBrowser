import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2MediaBrowserAppComponent } from '../app/ng2-media-browser.component';

beforeEachProviders(() => [Ng2MediaBrowserAppComponent]);

describe('App: Ng2MediaBrowser', () => {
  it('should create the app',
      inject([Ng2MediaBrowserAppComponent], (app: Ng2MediaBrowserAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-media-browser works!\'',
      inject([Ng2MediaBrowserAppComponent], (app: Ng2MediaBrowserAppComponent) => {
    expect(app.title).toEqual('ng2-media-browser works!');
  }));
});
