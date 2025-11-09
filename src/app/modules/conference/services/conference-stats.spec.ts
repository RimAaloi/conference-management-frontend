import { TestBed } from '@angular/core/testing';

import { ConferenceStats } from './conference-stats';

describe('ConferenceStats', () => {
  let service: ConferenceStats;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConferenceStats);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
