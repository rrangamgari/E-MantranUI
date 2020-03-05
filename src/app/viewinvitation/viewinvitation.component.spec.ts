import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinvitationComponent } from './viewinvitation.component';

describe('ViewinvitationComponent', () => {
  let component: ViewinvitationComponent;
  let fixture: ComponentFixture<ViewinvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
