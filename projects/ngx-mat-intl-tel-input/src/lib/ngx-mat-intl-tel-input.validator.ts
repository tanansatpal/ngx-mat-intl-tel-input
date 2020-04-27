import { FormControl } from '@angular/forms';
import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js';

export const isValidPhoneNumbers = (value: string | []) => {
  let numberInstance: PhoneNumber;
  if (value) {
    if (Array.isArray(value)) {
      value.forEach(num => {
        try {
          numberInstance = parsePhoneNumber(num);
        } catch (e) {
          //control.setValue(null);
          return false;
        }

        if (numberInstance && !numberInstance.isValid()) {
          //control.setValue(null);
          // if (!control.touched) {
          //   control.markAsTouched();
          // }
          return false;
        }

      });
    } else {

      try {
        numberInstance = parsePhoneNumber(value);
      } catch (e) {
        //control.setValue(null);
        return false;
      }

      if (numberInstance && !numberInstance.isValid()) {
        //control.setValue(null);
        // if (!control.touched) {
        //   control.markAsTouched();
        // }
        return false;
      }
    }
  }
  return true;
}



export const phoneNumberValidator = (control: FormControl) => {
  const error = { validatePhoneNumber: true };
  if (!isValidPhoneNumbers(control.value)) {
    return error;
  }
};
