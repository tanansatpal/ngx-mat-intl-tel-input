import { FormControl } from '@angular/forms';
import { PhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js';

export const validatePhoneNumber = (value: string | [], countryCode?: string) => {
  if(value===""||value===null|| value===undefined)return true;
  let numberInstance: PhoneNumber;
  if (value) {
    if (Array.isArray(value)) {
      value.forEach(num => {
        try {
          numberInstance = parsePhoneNumberFromString(num);
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
        //@ts-ignore
        numberInstance = parsePhoneNumberFromString(value, countryCode);
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
  return numberInstance ? true : false;
}



export const phoneNumberValidator = (control: FormControl) => {
  const error = { validatePhoneNumber: true };
  if (!validatePhoneNumber(control.value)) {
    return error;
  }
};
