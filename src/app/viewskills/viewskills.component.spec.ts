import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewskillsComponent } from './viewskills.component';

describe('ViewskillsComponent', () => {
  let component: ViewskillsComponent;
  let fixture: ComponentFixture<ViewskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
