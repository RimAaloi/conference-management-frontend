import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStats } from './review-stats';

describe('ReviewStats', () => {
  let component: ReviewStats;
  let fixture: ComponentFixture<ReviewStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
