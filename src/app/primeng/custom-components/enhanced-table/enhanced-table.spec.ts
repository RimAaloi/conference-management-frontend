import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedTable } from './enhanced-table';

describe('EnhancedTable', () => {
  let component: EnhancedTable;
  let fixture: ComponentFixture<EnhancedTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
