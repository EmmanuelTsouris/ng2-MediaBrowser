import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MediaService } from './media.service';

describe('Media Service', () => {
  beforeEachProviders(() => [MediaService]);

  it('should ...',
      inject([MediaService], (service: MediaService) => {
    expect(service).toBeTruthy();
  }));
});
