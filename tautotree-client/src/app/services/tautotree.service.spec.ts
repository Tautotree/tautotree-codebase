import { TestBed } from '@angular/core/testing';

import { TautotreeService } from './tautotree.service';

describe('TautotreeService', () => {
  let service: TautotreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TautotreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
