import { MatFormFieldControl } from '@angular/material/form-field';
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

import { NG_VALIDATORS, NgControl } from '@angular/forms';
import { CountryCode, Examples } from '../data/country-code';
import { phoneNumberValidator, validatePhoneNumber } from '../ngx-mat-itl-tel-input.validator';
import { Country } from '../model/country.model';
import { getExampleNumber, parsePhoneNumberFromString, PhoneNumber, AsYouType } from 'libphonenumber-js';

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'ngx-mat-itl-tel-input',
  templateUrl: './ngx-mat-itl-tel-input.component.html',
  styleUrls: ['./ngx-mat-itl-tel-input.component.css'],
  providers: [
    CountryCode,
    { provide: MatFormFieldControl, useExisting: NgxMatItlTelInputComponent },
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    }
  ]
})
export class NgxMatItlTelInputComponent implements OnInit, OnDestroy, DoCheck, MatFormFieldControl<any> {
  ///////////////////////////MatFormFieldControl implementation
  ///////////////////////////////////////////////////////////////

  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  focused = false;
  value;
  stateChanges = new Subject<void>();
  static nextId = 0;

  @HostBinding() id = `ngx-mat-intl-tel-input-${NgxMatItlTelInputComponent.nextId++}`;

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


  get empty() {
    return !this.input;
  }

  @HostBinding('class.ngx-floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  errorState = false;
  controlType = 'ngx-mat-intl-tel-input';
  @HostBinding('attr.aria-describedby') describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }
  //////////////////////////////////////////////////////////
  ////END FORM FIELD IMPLEMENTATION/////////////////////////
  //////////////////////////////////////////////////////////



  //////////////////////////////////////////////////////////////
  ////////CONTROL VALUE ACCESSOE//////////////////////////
  /////////////////////////////////////////////////////////
  propagateChange = (_: any) => {
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  onTouched = () => {
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }



  writeValue(value: any): void {
    console.log(value)

    if (value === null) {
      this.reset();
      return;
    }

    this.numberInstance = typeof (value) === 'string' ? parsePhoneNumberFromString(value) : parsePhoneNumberFromString(value[value.length - 1]);
    if (this.numberInstance) {
      const countryCode = this.numberInstance.country;
      this.input = this.numberInstance.formatNational();
      if (!countryCode) {
        return;
      }
      setTimeout(() => {
        this.selectedCountry = this.allCountries.find(c => c.iso2 === countryCode.toLowerCase());
        this.countryChanged.emit(this.selectedCountry);
      }, 1);
    }

  }


  ////////////////////////////////////////////////////////////////////////////////////////////////


  @Input() matChipInputAddOnBlur
  @Input() matChipInputFor;
  @Output() matChipInputTokenEnd = new EventEmitter();
  @Input() autocomplete: string = "tel"
  @Input() countrySelectionDisabled: boolean = false;
  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() cssClass;
  @Input() name: string;
  @Input() onlyCountries: Array<string> = [];
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() enableSearch = this.onlyCountries.length < 10 ? false : true;

  input;
  asYouType: AsYouType = new AsYouType();
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country;
  numberInstance: PhoneNumber;
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
    this.initCountryDropdown();
    this.initSelectedCountry();
  }


  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = this.ngControl.invalid && this.ngControl.touched;
      this.stateChanges.next();
    }
  }

  public onPhoneNumberChange(event): void {
    
    this.asYouType.reset();
    let value;
    this.input = this.asYouType.input(event);

    this.numberInstance = this.asYouType.getNumber();

    if (this.numberInstance) {
      value = this.numberInstance.number;

    }
    else {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      value = this.input;
    }


    console.log(value);
    this.propagateChange(value);
  }

  public onCountrySelect(country: Country, el): void {
    this.setSelectedCountry(country);
    el.focus();
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
        country.placeHolder = NgxMatItlTelInputComponent.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }

      this.allCountries.push(country);
    });
  }

  private initCountryDropdown() {
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

  }

  private initSelectedCountry() {
    let country;
    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      country = this.allCountries.find(c => c.iso2 === this.numberInstance.country.toLowerCase());
    } else {
      if (this.preferredCountriesInDropDown.length) {
        country = this.preferredCountriesInDropDown[0];
      } else {
        country = this.allCountries[0];
      }
    }
    this.setSelectedCountry(country);

  }

  setSelectedCountry(country: Country) {
    this.selectedCountry = country;
    //@ts-ignore
    this.asYouType = new AsYouType(country.iso2.toUpperCase());
    this.countryChanged.emit(this.selectedCountry);
  }

  reset() {
    this.asYouType.reset();
    this.input = '';
    this.propagateChange(null);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

}
