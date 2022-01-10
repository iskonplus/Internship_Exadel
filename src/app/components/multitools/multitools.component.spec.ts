import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitoolsComponent } from './multitools.component';

describe('MultitoolsComponent', () => {
  let component: MultitoolsComponent;
  let fixture: ComponentFixture<MultitoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultitoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultitoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
