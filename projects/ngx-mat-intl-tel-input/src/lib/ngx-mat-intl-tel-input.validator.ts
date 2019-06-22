import {FormControl} from '@angular/forms';
import {parsePhoneNumber, PhoneNumber} from 'libphonenumber-js';

export const phoneNumberValidator = (control: FormControl) => {
  const error = {validatePhoneNumber: true};
  let numberInstance: PhoneNumber;
  if (control.value && control.value) {
    try {
      numberInstance = parsePhoneNumber(control.value);
    } catch (e) {
      control.setValue('');
      return error;
    }

    if (numberInstance && !numberInstance.isValid()) {
      control.setValue('');
      if (!control.touched) { control.markAsTouched(); }
      return error;
    }
  }
  return;
};
