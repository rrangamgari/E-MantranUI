import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinvitationComponent } from './createinvitation.component';

describe('CreateinvitationComponent', () => {
  let component: CreateinvitationComponent;
  let fixture: ComponentFixture<CreateinvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateinvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
