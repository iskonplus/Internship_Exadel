import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterWindowComponent } from './recruiter-window.component';

describe('RecruiterWindowComponent', () => {
  let component: RecruiterWindowComponent;
  let fixture: ComponentFixture<RecruiterWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
