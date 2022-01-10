import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamConstructorComponent } from './team-constructor.component';

describe('TeamConstructorComponent', () => {
  let component: TeamConstructorComponent;
  let fixture: ComponentFixture<TeamConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
