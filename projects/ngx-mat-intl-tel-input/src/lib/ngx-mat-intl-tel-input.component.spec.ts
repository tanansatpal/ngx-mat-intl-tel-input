import { MatDividerModule } from '@angular/material/divider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatIntlTelInputComponent } from './ngx-mat-intl-tel-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

describe('NgxMatIntlTelInputComponent', () => {
  let component: NgxMatIntlTelInputComponent;
  let fixture: ComponentFixture<NgxMatIntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatIntlTelInputComponent,
        SearchPipe ],
      imports: [
        CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
      ]
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
