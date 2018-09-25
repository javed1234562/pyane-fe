import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeaapointmentComponent } from './makeaapointment.component';

describe('MakeaapointmentComponent', () => {
  let component: MakeaapointmentComponent;
  let fixture: ComponentFixture<MakeaapointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeaapointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeaapointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
