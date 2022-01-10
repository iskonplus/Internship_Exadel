import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInterviewerWindowComponent } from './tech-interviewer-window.component';

describe('RecruiterWindowComponent', () => {
  let component: TechInterviewerWindowComponent;
  let fixture: ComponentFixture<TechInterviewerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechInterviewerWindowComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechInterviewerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
