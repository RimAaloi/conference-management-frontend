import { TestBed } from '@angular/core/testing';

import { Keynote } from './keynote';

describe('Keynote', () => {
  let service: Keynote;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Keynote);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
