import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersbasicInfoComponent } from './usersbasic-info.component';

describe('UsersbasicInfoComponent', () => {
  let component: UsersbasicInfoComponent;
  let fixture: ComponentFixture<UsersbasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersbasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersbasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
