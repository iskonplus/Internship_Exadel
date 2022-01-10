import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserNameComponent } from './header-user-name.component';

describe('HeaderUserNameComponent', () => {
  let component: HeaderUserNameComponent;
  let fixture: ComponentFixture<HeaderUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
