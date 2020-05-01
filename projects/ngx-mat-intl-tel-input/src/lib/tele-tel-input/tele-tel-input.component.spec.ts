import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleTelInputComponent } from './tele-tel-input.component';

describe('TeleTelInputComponent', () => {
  let component: TeleTelInputComponent;
  let fixture: ComponentFixture<TeleTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
