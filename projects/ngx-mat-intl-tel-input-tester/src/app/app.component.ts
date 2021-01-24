import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {NgxMatIntlTelInputComponent} from '../../../ngx-mat-intl-tel-input/src/lib/ngx-mat-intl-tel-input.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NgxMatIntlTelInputComponent) phoneInput: NgxMatIntlTelInputComponent;
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
    name: new FormControl(undefined, [Validators.required]),
    surname: new FormControl(undefined, [Validators.required])
  });

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log('onSubmit', this.phoneForm);
  }

  onReset() {
    this.phoneForm.reset();
  }

  ngAfterViewInit() {
    this.phoneInput.matMenu.panelClass = 'custom-panel';
  }
}
