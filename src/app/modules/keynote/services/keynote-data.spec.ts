import { TestBed } from '@angular/core/testing';

import { KeynoteData } from './keynote-data';

describe('KeynoteData', () => {
  let service: KeynoteData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeynoteData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
