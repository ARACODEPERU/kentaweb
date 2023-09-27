import { TestBed } from '@angular/core/testing';

import { ApiKenthaService } from './api-kentha.service';

describe('ApiKenthaService', () => {
  let service: ApiKenthaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKenthaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
