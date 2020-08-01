import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplayersComponent } from './teamplayers.component';

describe('TeamplayersComponent', () => {
  let component: TeamplayersComponent;
  let fixture: ComponentFixture<TeamplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
