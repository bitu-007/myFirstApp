import { TestBed } from '@angular/core/testing';

import { Appguard } from './appguard';

describe('Appguard', () => {
  let service: Appguard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appguard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
