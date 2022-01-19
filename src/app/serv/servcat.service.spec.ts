import { TestBed } from '@angular/core/testing';

import { ServcatService } from './servcat.service';

describe('ServcatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServcatService = TestBed.get(ServcatService);
    expect(service).toBeTruthy();
  });
});
