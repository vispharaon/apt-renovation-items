import { TestBed } from '@angular/core/testing';

import { RenovationitemService } from './renovationitem.service';

describe('RenovationitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenovationitemService = TestBed.get(RenovationitemService);
    expect(service).toBeTruthy();
  });
});
