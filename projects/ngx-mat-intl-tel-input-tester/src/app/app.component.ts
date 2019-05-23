import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneForm = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    name: new FormControl(undefined, [Validators.required]),
    surname: new FormControl(undefined, [Validators.required])
  });

  onSubmit() {
    console.log('onSubmit', this.phoneForm);
  }
}
