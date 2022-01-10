import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorReviewComponent } from './mentor-review.component';

describe('MentorReviewComponent', () => {
  let component: MentorReviewComponent;
  let fixture: ComponentFixture<MentorReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
