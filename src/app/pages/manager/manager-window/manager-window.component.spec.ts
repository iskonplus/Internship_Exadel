import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerWindowComponent } from './manager-window.component';

describe('ManagerWindowComponent', () => {
  let component: ManagerWindowComponent;
  let fixture: ComponentFixture<ManagerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
