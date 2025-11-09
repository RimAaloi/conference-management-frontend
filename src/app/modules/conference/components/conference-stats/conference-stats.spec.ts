import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceStats } from './conference-stats';

describe('ConferenceStats', () => {
  let component: ConferenceStats;
  let fixture: ComponentFixture<ConferenceStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
