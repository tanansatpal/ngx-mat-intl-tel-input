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

import {NG_VALIDATORS, NgControl} from '@angular/forms';
import {CountryCode, Examples} from './data/country-code';
import {phoneNumberValidator} from './ngx-mat-intl-tel-input.validator';
import {Country} from './model/country.model';
import {getExampleNumber, parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';
import {ErrorStateMatcher, MatFormFieldControl} from '@angular/material';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Subject} from 'rxjs';
import {FocusMonitor} from '@angular/cdk/a11y';

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
export class NgxMatIntlTelInputComponent implements OnInit, OnDestroy, DoCheck, MatFormFieldControl<any> {
  static nextId = 0;

  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() cssClass;
  @Input() name: string;
  @Input() onlyCountries: Array<string> = [];
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() enableSearch = false;
  // tslint:disable-next-line:variable-name
  private _placeholder: string;
  // tslint:disable-next-line:variable-name
  private _required = false;
  // tslint:disable-next-line:variable-name
  private _disabled = false;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  @HostBinding() id = `ngx-mat-intl-tel-input-${NgxMatIntlTelInputComponent.nextId++}`;
  describedBy = '';
  phoneNumber = '';
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
  }

  propagateChange = (_: any) => {
  }

  constructor(
    private countryCodeData: CountryCode,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl
  ) {
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
      this.errorState = this.ngControl.invalid && this.ngControl.touched;
      this.stateChanges.next();
    }
  }

  public onPhoneNumberChange(): void {
    try {
      this.numberInstance = parsePhoneNumberFromString(this._getFullNumber());
      this.value = this.numberInstance.number;
      if (this.numberInstance && this.numberInstance.isValid()) {
        this.phoneNumber = this.numberInstance.formatNational();
      }
    } catch (e) {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      this.value = this._getFullNumber();
    }
    this.propagateChange(this.value);
  }

  public onCountrySelect(country: Country, el): void {
    this.selectedCountry = country;
    this.countryChanged.emit(this.selectedCountry);
    this.onPhoneNumberChange();
    el.focus();
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
    // when form is reset
    if (value === null) {
      this.reset();
    }
    if (value) {
      this.numberInstance = parsePhoneNumberFromString(value);
      if (this.numberInstance) {
        const countryCode = this.numberInstance.country;
        this.phoneNumber = this.numberInstance.formatNational();
        if (!countryCode) {
          return;
        }
        setTimeout(() => {
          this.selectedCountry = this.allCountries.find(c => c.iso2 === countryCode.toLowerCase());
          this.countryChanged.emit(this.selectedCountry);
        }, 1);
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
