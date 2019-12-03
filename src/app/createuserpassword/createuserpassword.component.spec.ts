import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserpasswordComponent } from './createuserpassword.component';

describe('CreateuserpasswordComponent', () => {
  let component: CreateuserpasswordComponent;
  let fixture: ComponentFixture<CreateuserpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
