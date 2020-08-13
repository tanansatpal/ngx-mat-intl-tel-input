import {MatFormFieldControl} from '@angular/material/form-field';
import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self
} from '@angular/core';

import {FormGroupDirective, NG_VALIDATORS, NgControl, NgForm} from '@angular/forms';
import {CountryCode, Examples} from './data/country-code';
import {phoneNumberValidator} from './ngx-mat-intl-tel-input.validator';
import {Country} from './model/country.model';
import {getExampleNumber, parsePhoneNumberFromString, PhoneNumber, CountryCode as CC} from 'libphonenumber-js';

import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Subject} from 'rxjs';
import {FocusMonitor} from '@angular/cdk/a11y';
import {CanUpdateErrorState, CanUpdateErrorStateCtor, ErrorStateMatcher, mixinErrorState} from '@angular/material/core';
import {E164Number} from 'libphonenumber-js/types';

class NgxMatIntlTelInputBase {
  // tslint:disable-next-line:variable-name
  constructor(public _defaultErrorStateMatcher: ErrorStateMatcher,
              // tslint:disable-next-line:variable-name
              public _parentForm: NgForm,
              // tslint:disable-next-line:variable-name
              public _parentFormGroup: FormGroupDirective,
              /** @docs-private */
              public ngControl: NgControl) {
  }
}

// tslint:disable-next-line:variable-name
const _NgxMatIntlTelInputMixinBase: CanUpdateErrorStateCtor & typeof NgxMatIntlTelInputBase =
  mixinErrorState(NgxMatIntlTelInputBase);

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-intl-tel-input',
  templateUrl: './ngx-mat-intl-tel-input.component.html',
  styleUrls: ['./ngx-mat-intl-tel-input.component.css'],
  providers: [
    CountryCode,
    {provide: MatFormFieldControl, useExisting: NgxMatIntlTelInputComponent},
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    }
  ]
})

export class NgxMatIntlTelInputComponent extends _NgxMatIntlTelInputMixinBase
  implements OnInit, OnDestroy, DoCheck, CanUpdateErrorState, MatFormFieldControl<any> {
  static nextId = 0;

  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() cssClass;
  @Input() name: string;
  @Input() onlyCountries: Array<string> = [];
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() enableSearch = false;
  @Input() searchPlaceholder: string;
  // tslint:disable-next-line:variable-name
  private _placeholder: string;
  // tslint:disable-next-line:variable-name
  private _required = false;
  // tslint:disable-next-line:variable-name
  private _disabled = false;
  stateChanges = new Subject<void>();
  focused = false;
  @HostBinding() id = `ngx-mat-intl-tel-input-${NgxMatIntlTelInputComponent.nextId++}`;
  describedBy = '';
  phoneNumber: E164Number = '';
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country;
  numberInstance: PhoneNumber;
  value;
  searchCriteria: string;
  @Output()
  countryChanged: EventEmitter<Country> = new EventEmitter<Country>();

  static getPhoneNumberPlaceHolder(countryISOCode: any): string {
    try {
      return getExampleNumber(countryISOCode, Examples).number.toString();
    } catch (e) {
      return e;
    }
  }

  private _getFullNumber() {
    const val = this.phoneNumber.trim();
    const dialCode = this.selectedCountry.dialCode;
    let prefix;
    const numericVal = val.replace(/\D/g, '');
    // normalized means ensure starts with a 1, so we can match against the full dial code
    const normalizedVal = numericVal.charAt(0) === '1' ? numericVal : '1'.concat(numericVal);
    if (val.charAt(0) !== '+') {
      // when using separateDialCode, it is visible so is effectively part of the typed number
      prefix = '+'.concat(dialCode);
    } else if (val && val.charAt(0) !== '+' && val.charAt(0) !== '1' && dialCode && dialCode.charAt(0) === '1'
      && dialCode.length === 4 && dialCode !== normalizedVal.substr(0, 4)) {
      // ensure national NANP numbers contain the area code
      prefix = dialCode.substr(1);
    } else {
      prefix = '';
    }
    return prefix + numericVal;
  }

  onTouched = () => {
  };

  propagateChange = (_: any) => {
  };

  constructor(
    private countryCodeData: CountryCode,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
    // tslint:disable-next-line:variable-name
    @Optional() _parentForm: NgForm,
    // tslint:disable-next-line:variable-name
    @Optional() _parentFormGroup: FormGroupDirective,
    // tslint:disable-next-line:variable-name
    _defaultErrorStateMatcher: ErrorStateMatcher,
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    fm.monitor(elRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });
    this.fetchCountryData();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (!this.searchPlaceholder) {
      this.searchPlaceholder = 'Search ...';
    }
    if (this.preferredCountries.length) {
      this.preferredCountries.forEach(iso2 => {
        const preferredCountry = this.allCountries.filter((c) => {
          return c.iso2 === iso2;
        });
        this.preferredCountriesInDropDown.push(preferredCountry[0]);
      });
    }
    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter(c => this.onlyCountries.includes(c.iso2));
    }
    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      this.selectedCountry = this.allCountries.find(c => c.iso2 === this.numberInstance.country.toLowerCase());
    } else {
      if (this.preferredCountriesInDropDown.length) {
        this.selectedCountry = this.preferredCountriesInDropDown[0];
      } else {
        this.selectedCountry = this.allCountries[0];
      }
    }
    this.countryChanged.emit(this.selectedCountry);
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  public onPhoneNumberChange(): void {
    try {
      this.numberInstance = parsePhoneNumberFromString(this.phoneNumber.toString(), this.selectedCountry.iso2.toUpperCase() as CC);
      this.value = this.numberInstance.number;
      if (this.numberInstance && this.numberInstance.isValid()) {
        this.phoneNumber = this.numberInstance.nationalNumber;
        if (this.selectedCountry.iso2 !== this.numberInstance.country) {
          this.selectedCountry = this.getCountry(this.numberInstance.country);
        }
      }
    } catch (e) {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      this.value = this.phoneNumber.toString();
    }
    this.propagateChange(this.value);
  }

  public onCountrySelect(country: Country, el): void {
    this.selectedCountry = country;
    this.countryChanged.emit(this.selectedCountry);
    this.onPhoneNumberChange();
    el.focus();
  }

  public getCountry(code) {
    return this.allCountries.find(c => c.iso2 === code.toLowerCase());
  }

  public onInputKeyPress(event): void {
    const pattern = /[0-9+\- ]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach(c => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: c[4] as string[] || undefined,
        flagClass: c[1].toString().toUpperCase(),
        placeHolder: ''
      };

      if (this.enablePlaceholder) {
        country.placeHolder = NgxMatIntlTelInputComponent.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }

      this.allCountries.push(country);
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    if (value) {
      this.numberInstance = parsePhoneNumberFromString(value);
      if (this.numberInstance) {
        const countryCode = this.numberInstance.country;
        this.phoneNumber = this.numberInstance.nationalNumber;
        if (!countryCode) {
          return;
        }
        setTimeout(() => {
          this.selectedCountry = this.allCountries.find(c => c.iso2 === countryCode.toLowerCase());
          this.preferredCountriesInDropDown.push(this.selectedCountry);
          this.countryChanged.emit(this.selectedCountry);
        }, 1);
      } else {
        this.phoneNumber = value;
      }
    }
  }

  get empty() {
    return !this.phoneNumber;
  }

  @HostBinding('class.ngx-floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      // tslint:disable-next-line:no-non-null-assertion
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }

  reset() {
    this.phoneNumber = '';
    this.propagateChange(null);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

}
