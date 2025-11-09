import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteForm } from './keynote-form';

describe('KeynoteForm', () => {
  let component: KeynoteForm;
  let fixture: ComponentFixture<KeynoteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeynoteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeynoteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
