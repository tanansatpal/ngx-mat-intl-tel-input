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
    phone: new FormControl(undefined, []),
  });

  profileForm = this.fb.group({
    phone: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log('onSubmit', this.phoneForm);
  }

  onReset() {
    this.phoneForm.reset();
  }
}
