/* eslint-disable @typescript-eslint/member-ordering, no-underscore-dangle, id-blacklist,
id-match, @typescript-eslint/naming-convention */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  Self,
  ViewChild,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

import {
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm,
  NG_VALIDATORS,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  AsYouType,
  CountryCode as CC,
  E164Number,
  getExampleNumber,
  NationalNumber,
  parsePhoneNumberFromString,
  PhoneNumber,
} from 'libphonenumber-js';
import { CountryCode, Examples } from './data/country-code';
import { Country } from './model/country.model';
import { PhoneNumberFormat } from './model/phone-number-format.model';
import { phoneNumberValidator } from './ngx-mat-intl-tel-input.validator';

import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  CanUpdateErrorState,
  ErrorStateMatcher,
  mixinErrorState,
  _AbstractConstructor,
  _Constructor,
} from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { Subject } from 'rxjs';
import { SearchPipe } from 'projects/ngx-mat-intl-tel-input/src/lib/search.pipe';
class NgxMatIntlTelInputBase {
  readonly stateChanges = new Subject<void>();
  constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    /** @docs-private */
    public ngControl: NgControl
  ) {}
}

declare type CanUpdateErrorStateCtor = _Constructor<CanUpdateErrorState> &
  _AbstractConstructor<CanUpdateErrorState>;

const _NgxMatIntlTelInputMixinBase: CanUpdateErrorStateCtor &
  typeof NgxMatIntlTelInputBase = mixinErrorState(NgxMatIntlTelInputBase);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-mat-intl-tel-input',
  templateUrl: './ngx-mat-intl-tel-input.component.html',
  styleUrls: ['./ngx-mat-intl-tel-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    SearchPipe
  ],
  providers: [
    CountryCode,
    { provide: MatFormFieldControl, useExisting: NgxMatIntlTelInputComponent },
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatIntlTelInputComponent
  extends _NgxMatIntlTelInputMixinBase
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    CanUpdateErrorState,
    MatFormFieldControl<any>
{
  static nextId = 0;

  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() inputPlaceholder: string | undefined;
  @Input() cssClass: string | undefined;
  @Input() name: string | undefined;
  @Input() onlyCountries: Array<string> = [];
  @Input() errorStateMatcher: ErrorStateMatcher = new ErrorStateMatcher();
  @Input() enableSearch = false;
  @Input() searchPlaceholder: string | undefined;
  @Input() describedBy = '';

  @Input()
  get format(): PhoneNumberFormat {
    return this._format;
  }

  set format(value: PhoneNumberFormat) {
    this._format = value;
    this.phoneNumber = this.formattedPhoneNumber;
    this.stateChanges.next(undefined);
  }

  @ViewChild(MatMenu) matMenu: MatMenu | undefined;
  private _placeholder: string | undefined;
  private _required = false;
  private _disabled = false;
  stateChanges = new Subject<void>();
  focused = false;
  @HostBinding()
  id = `ngx-mat-intl-tel-input-${NgxMatIntlTelInputComponent.nextId++}`;
  phoneNumber: NationalNumber | undefined;
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country | undefined;
  numberInstance: PhoneNumber | undefined;
  value: E164Number | string | undefined;
  searchCriteria: string | undefined;
  @Output() countryChanged = new EventEmitter<Country>();

  private previousFormattedNumber: string | undefined;
  private _format: PhoneNumberFormat = 'default';

  static getPhoneNumberPlaceHolder(countryISOCode: CC): string | undefined {
    const result = getExampleNumber(countryISOCode, Examples);
    return !!result ? result.number.toString() : undefined;
  }

  onTouched = () => {};

  propagateChange = (_: any) => {};

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private countryCodeData: CountryCode,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    fm.monitor(elRef, true).subscribe((origin) => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next(undefined);
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
      this.preferredCountries.forEach((iso2) => {
        const preferredCountry = this.allCountries
          .filter((c) => c.iso2 === iso2)
          .shift();
        if (preferredCountry) {
          this.preferredCountriesInDropDown.push(preferredCountry);
        }
      });
    }
    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter((c) =>
        this.onlyCountries.includes(c.iso2)
      );
    }
    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      this.selectedCountry = this.getCountry(this.numberInstance.country);
    } else {
      if (this.preferredCountriesInDropDown.length) {
        this.selectedCountry = this.preferredCountriesInDropDown[0];
      } else {
        this.selectedCountry = this.allCountries[0];
      }
    }
    this.countryChanged.emit(this.selectedCountry);
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  public onPhoneNumberChange(): void {
    try {
      this.numberInstance = parsePhoneNumberFromString(
        this.phoneNumber?.toString() || '',
        this.selectedCountry?.iso2.toUpperCase() as CC
      );
      this.formatAsYouTypeIfEnabled();
      this.value = this.numberInstance?.number;
      if (this.numberInstance && this.numberInstance.isValid()) {
        if (this.phoneNumber !== this.formattedPhoneNumber) {
          this.phoneNumber = this.formattedPhoneNumber;
        }
        if (
          this.selectedCountry?.iso2 !== this.numberInstance.country &&
          !!this.numberInstance.country
        ) {
          this.selectedCountry = this.getCountry(this.numberInstance.country);
          this.countryChanged.emit(this.selectedCountry);
        }
      }
    } catch (e) {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      this.value = this.phoneNumber?.toString();
    }
    this.propagateChange(this.value);
    this._changeDetectorRef.markForCheck();
  }

  public onCountrySelect(country: Country, el: MatInput): void {
    if (this.phoneNumber) {
      this.phoneNumber = this.numberInstance?.nationalNumber;
    }
    this.selectedCountry = country;
    this.countryChanged.emit(this.selectedCountry);
    this.onPhoneNumberChange();
    el.focus();
  }

  public getCountry(code: string): Country {
    return (
      this.allCountries.find((c) => c.iso2 === code.toLowerCase()) || {
        name: 'UN',
        iso2: 'UN',
        dialCode: '',
        priority: 0,
        areaCodes: undefined,
        flagClass: 'UN',
        placeHolder: '',
      }
    );
  }

  public onInputKeyPress(event: KeyboardEvent): void {
    const pattern = /[0-9+\- ]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach((c) => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        flagClass: c[1].toString().toUpperCase(),
        placeHolder: '',
      };

      if (this.enablePlaceholder) {
        country.placeHolder =
          NgxMatIntlTelInputComponent.getPhoneNumberPlaceHolder(
            country.iso2.toUpperCase() as CC
          );
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
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  writeValue(value: any): void {
    if (value) {
      this.numberInstance = parsePhoneNumberFromString(value);
      if (this.numberInstance) {
        const countryCode = this.numberInstance.country;
        this.phoneNumber = this.formattedPhoneNumber;
        if (!countryCode) {
          return;
        }
        setTimeout(() => {
          this.selectedCountry = this.getCountry(countryCode);
          if (
            this.selectedCountry.dialCode &&
            !this.preferredCountries.includes(this.selectedCountry.iso2)
          ) {
            this.preferredCountriesInDropDown.push(this.selectedCountry);
          }
          this.countryChanged.emit(this.selectedCountry);

          // Initial value is set
          this._changeDetectorRef.markForCheck();
          this.stateChanges.next(undefined);
        }, 1);
      } else {
        this.phoneNumber = value;
      }
    }

    // Value is set from outside using setValue()
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
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
    return this._placeholder || '';
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next(undefined);
  }

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next(undefined);
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next(undefined);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }

  reset() {
    this.phoneNumber = '';
    this.propagateChange(null);

    this._changeDetectorRef.markForCheck();
    this.stateChanges.next(undefined);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  private get formattedPhoneNumber(): string {
    if (!this.numberInstance) {
      return this.phoneNumber?.toString() || '';
    }
    switch (this.format) {
      case 'national':
        return this.numberInstance.formatNational();
      case 'international':
        return this.numberInstance.formatInternational();
      default:
        return this.numberInstance.nationalNumber.toString();
    }
  }

  private formatAsYouTypeIfEnabled(): void {
    if (this.format === 'default') {
      return;
    }
    const asYouType: AsYouType = new AsYouType(
      this.selectedCountry?.iso2.toUpperCase() as CC
    );
    // To avoid caret positioning we apply formatting only if the caret is at the end:
    if (
      this.phoneNumber
        ?.toString()
        .startsWith(this.previousFormattedNumber || '')
    ) {
      this.phoneNumber = asYouType.input(this.phoneNumber.toString());
    }
    this.previousFormattedNumber = this.phoneNumber?.toString();
  }
}
