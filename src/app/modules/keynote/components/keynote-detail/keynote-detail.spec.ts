import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteDetail } from './keynote-detail';

describe('KeynoteDetail', () => {
  let component: KeynoteDetail;
  let fixture: ComponentFixture<KeynoteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeynoteDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeynoteDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
