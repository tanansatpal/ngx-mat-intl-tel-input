import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatIntlTelInputComponent } from './ngx-mat-intl-tel-input.component';

describe('NgxMatIntlTelInputComponent', () => {
  let component: NgxMatIntlTelInputComponent;
  let fixture: ComponentFixture<NgxMatIntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatIntlTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatIntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
