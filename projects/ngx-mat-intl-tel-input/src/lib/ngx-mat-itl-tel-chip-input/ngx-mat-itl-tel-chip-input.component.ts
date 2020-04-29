import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { validatePhoneNumber } from '../ngx-mat-itl-tel-input.validator';
import { Country } from '../model/country.model';

@Component({
  selector: 'ngx-mat-itl-tel-chip-input',
  templateUrl: './ngx-mat-itl-tel-chip-input.component.html',
  styleUrls: ['./ngx-mat-itl-tel-chip-input.component.css']
})
export class NgxMatItlTelChipInputComponent implements OnInit {

  @Input() appearance: string;
  @Input() label: string
  @Input() control: AbstractControl
  @Input() autocomplete = 'tel';
  private currentCountryCode;

  get isArray(){
    return Array.isArray(this.control.value)
  }
  onCountryChanged(country: Country) {
    console.log(country)
    this.currentCountryCode = country.iso2.toUpperCase();
  }



  ngOnInit(): void { }

  addTel(event: MatChipInputEvent) {
    const control = this.control;
    const tel = event.value
    if (!tel) return;
    //let value = event.value;
    if (validatePhoneNumber(tel, this.currentCountryCode)) {
      let numberInstance = parsePhoneNumberFromString(tel, this.currentCountryCode);
      let num = numberInstance.number;
      if (control.value.indexOf(num) > -1) {
        control.setErrors({ phoneNumberExists: true });
        return;
      }
      control.setValue([...control.value, num]);

      // control.updateValueAndValidity();
      event.input.value = '';
    }
    else if (event.input.value) {
      control.setErrors({ validatePhoneNumber: true })
    }
    else control.updateValueAndValidity();
    console.log("add", control.value)
  }


  onRemoveTel(tel: string): void {
    const control = this.control;
    const index = control.value.indexOf(tel);
    if (index >= 0) {
      control.value.splice(index, 1);
    }
    console.log("remove", control.value)
  }

  getErrorMessage(): string {
    if (this.control.hasError('validatePhoneNumber')) {
      return 'Not a valid phone number';
    } else if (this.control.hasError('phoneNumberExists')) {
      return 'phone number exists'
    }
    return ''
  }
}
