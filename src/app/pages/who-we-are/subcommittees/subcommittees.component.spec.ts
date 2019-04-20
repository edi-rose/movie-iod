import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCommitteesComponent } from './subcommittees.component';

describe('SubCommitteesComponent', () => {
  let component: SubCommitteesComponent;
  let fixture: ComponentFixture<SubCommitteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCommitteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
