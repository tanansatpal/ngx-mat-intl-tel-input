import { UntypedFormControl } from '@angular/forms';
import { parsePhoneNumberWithError, PhoneNumber } from 'libphonenumber-js';

export const phoneNumberValidator = (control: UntypedFormControl) => {
  const error = {validatePhoneNumber: true};
  let numberInstance: PhoneNumber;
  if (control.value) {
    try {
      numberInstance = parsePhoneNumberWithError(control.value);
    } catch (e) {
      control.setValue(null);
      return error;
    }

    if (numberInstance && !numberInstance.isValid()) {
      control.setValue(null);
      if (!control.touched) {
        control.markAsTouched();
      }
      return error;
    }
  }
  return null;
};

