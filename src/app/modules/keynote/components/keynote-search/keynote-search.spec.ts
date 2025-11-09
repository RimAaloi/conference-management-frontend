import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteSearch } from './keynote-search';

describe('KeynoteSearch', () => {
  let component: KeynoteSearch;
  let fixture: ComponentFixture<KeynoteSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeynoteSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeynoteSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
