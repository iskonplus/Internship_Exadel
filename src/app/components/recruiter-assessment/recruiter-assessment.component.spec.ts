import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterAssessmentComponent } from './recruiter-assessment.component';

describe('RecruiterAssessmentComponent', () => {
  let component: RecruiterAssessmentComponent;
  let fixture: ComponentFixture<RecruiterAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
