import { TestBed } from '@angular/core/testing';

import { Oauth } from './oauth';

describe('Oauth', () => {
  let service: Oauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oauth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
