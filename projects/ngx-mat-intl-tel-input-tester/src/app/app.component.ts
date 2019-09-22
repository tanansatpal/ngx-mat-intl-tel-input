import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
    name: new FormControl(undefined, [Validators.required]),
    surname: new FormControl(undefined, [Validators.required])
  });

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: ['+919813785563']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log('onSubmit', this.phoneForm);
  }

  onReset() {
    this.phoneForm.reset();
  }
}
