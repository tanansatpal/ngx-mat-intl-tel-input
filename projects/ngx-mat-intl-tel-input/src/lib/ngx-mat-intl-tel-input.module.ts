import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMatIntlTelInputComponent } from './ngx-mat-intl-tel-input.component';
import {MatButtonModule, MatInputModule, MatMenuModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [NgxMatIntlTelInputComponent],
  imports:[
    CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  exports: [NgxMatIntlTelInputComponent]
})
export class NgxMatIntlTelInputModule { }
