import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInterviewerAssessmentComponent } from './tech-interviewer-assessment.component';

describe('TechInterviewerAssessmentComponent', () => {
  let component: TechInterviewerAssessmentComponent;
  let fixture: ComponentFixture<TechInterviewerAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechInterviewerAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechInterviewerAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
