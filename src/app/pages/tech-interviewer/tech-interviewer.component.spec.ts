import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInterviewerComponent } from './tech-interviewer.component';

describe('TechInterviewerComponent', () => {
  let component: TechInterviewerComponent;
  let fixture: ComponentFixture<TechInterviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechInterviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
