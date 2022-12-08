import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOpearationsComponent } from './recent-opearations.component';

describe('RecentOpearationsComponent', () => {
  let component: RecentOpearationsComponent;
  let fixture: ComponentFixture<RecentOpearationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOpearationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentOpearationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
