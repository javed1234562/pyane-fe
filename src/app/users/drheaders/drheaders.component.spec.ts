import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrheadersComponent } from './drheaders.component';

describe('DrheadersComponent', () => {
  let component: DrheadersComponent;
  let fixture: ComponentFixture<DrheadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrheadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrheadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
