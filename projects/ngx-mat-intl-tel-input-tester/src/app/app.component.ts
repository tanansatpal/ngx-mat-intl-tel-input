import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import {UntypedFormBuilder} from '@angular/forms';
import {NgxMatIntlTelInputComponent} from '../../../ngx-mat-intl-tel-input/src/lib/ngx-mat-intl-tel-input.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NgxMatIntlTelInputComponent) phoneInput: NgxMatIntlTelInputComponent;
  phoneForm = new UntypedFormGroup({
    phone: new UntypedFormControl(undefined, [Validators.required]),
    name: new UntypedFormControl(undefined, [Validators.required]),
    surname: new UntypedFormControl(undefined, [Validators.required])
  });

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: ['']
  });

  constructor(private fb: UntypedFormBuilder) {
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
