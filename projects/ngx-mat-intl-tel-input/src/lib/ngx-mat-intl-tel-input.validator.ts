import {FormControl} from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export const phoneNumberValidator = (control: FormControl) => {
  const error = {validatePhoneNumber: false};
  let numberInstance: lpn.PhoneNumber;
  if (control.value && control.value) {
    try {
      numberInstance = lpn.PhoneNumberUtil.getInstance().parse(control.value);
    } catch (e) {
      return error;
    }

    if (numberInstance && !lpn.PhoneNumberUtil.getInstance().isValidNumber(numberInstance)) {
      return error;
    }
  }
  return;
};
