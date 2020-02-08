import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMatIntlTelInputComponent } from './ngx-mat-intl-tel-input.component';
import { SearchPipe } from './search.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    NgxMatIntlTelInputComponent,
    SearchPipe,
  ],
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
