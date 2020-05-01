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
  Self,
  ViewChild
} from '@angular/core';

import { NG_VALIDATORS, NgControl } from '@angular/forms';
import { phoneNumberValidator } from '../ngx-mat-itl-tel-input.validator';
import { parsePhoneNumberFromString, PhoneNumber, AsYouType } from 'libphonenumber-js';

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'ngx-mat-itl-tel-input',
  templateUrl: './ngx-mat-itl-tel-input.component.html',
  styleUrls: ['./ngx-mat-itl-tel-input.component.css'],
  providers: [

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
  _focused = false;

  get focused() {
    return this._focused
  }
  set focused(value: boolean) {
    if (value) {
      this.inputEl?.nativeElement.focus();
    }
    this._focused = value;
  }
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
    value = coerceBooleanProperty(value);
    this._disabled = value;
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

    this.numberInstance = this.parseNumber(value);
    if (this.numberInstance) {
      const countryCode = this.numberInstance.country;
      this.input = this.numberInstance.formatNational();
      if (!countryCode) {
        return;
      }
      setTimeout(() => {
        this.countryCode = countryCode;
        this.countryChanged.emit(this.countryCode);
      }, 1);
    }

  }

  parseNumber(value) {
    if (typeof (value) === 'string') {
      return parsePhoneNumberFromString(value);
    }
    else if (Array.isArray(value)) {
      if (value.length)
        return parsePhoneNumberFromString(value[value.length - 1]);
    }
    else return undefined;


  }

  ////////////////////////////////////////////////////////////////////////////////////////////////


  @ViewChild('focusable') inputEl: ElementRef;
  @Input() matChipInputAddOnBlur
  @Input() matChipInputFor;
  @Output() matChipInputTokenEnd = new EventEmitter();
  @Input() autocomplete: string = "tel"



  @Input() cssClass;
  @Input() name: string;
  @Input() errorStateMatcher: ErrorStateMatcher;


  input;
  asYouType: AsYouType = new AsYouType();



  @Input()
  get countryCode() {
    return this._countryCode;
  }
  set countryCode(value: string) {
    this._countryCode = value;
    //@ts-ignore
    this.asYouType = new AsYouType(value);

    this.inputEl?.nativeElement.focus();

    this.onPhoneNumberChange(this.input ? this.input : "");
  }

  _countryCode: string;
  numberInstance: PhoneNumber;
  @Output()
  countryChanged: EventEmitter<string> = new EventEmitter<string>();


  constructor(

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


    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {

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
