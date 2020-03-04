import { TestBed } from '@angular/core/testing';

import { NgxMatIntlTelInputService } from './ngx-mat-intl-tel-input.service';

describe('NgxMatIntlTelInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatIntlTelInputService = TestBed.inject(NgxMatIntlTelInputService);
    expect(service).toBeTruthy();
  });
});
