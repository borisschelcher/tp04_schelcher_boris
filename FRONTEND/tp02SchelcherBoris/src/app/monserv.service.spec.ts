import { TestBed } from '@angular/core/testing';

import { MonservService } from './monserv.service';

describe('MonservService', () => {
  let service: MonservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
