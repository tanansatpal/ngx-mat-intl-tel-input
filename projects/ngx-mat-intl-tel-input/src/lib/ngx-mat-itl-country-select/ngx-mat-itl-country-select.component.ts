import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Country } from '../model/country.model';
import { CountryCode } from '../data/country-code';
import { PhoneNumber } from 'libphonenumber-js';


@Component({
  selector: 'ngx-mat-itl-country-select',
  templateUrl: './ngx-mat-itl-country-select.component.html',
  styleUrls: ['./ngx-mat-itl-country-select.component.css'],
  providers: [CountryCode]
})
export class NgxMatItlCountrySelectComponent implements OnInit {
  numberInstance: PhoneNumber;
  @Input()
  //@ts-ignore
  get selectedCountry(): Country {
    return this._selectedCountry;
  }
  //@ts-ignore
  set selectedCountry(country: string | Country) {
    this._selectedCountry = typeof (country) === "string" ? this._supportedCountries.find(c => c.iso2 === country) : country;
    console.log(country);
    this.countryChanged.emit(this._selectedCountry.iso2);
  }
  _selectedCountry: Country;

  @Input() supportedCountries: Array<string> = [];
  @Input() preferredCountries: Array<string> = [];
  @Input() enableSearch = this.supportedCountries.length < 10 ? false : true;
  @Input() disabled: boolean = false;



  _supportedCountries: Array<Country> = [];
  _preferredCountries: Array<Country> = [];
  searchCriteria: string;



  @Output() countryChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor(private countryCodeData: CountryCode) {  }

  ngOnInit(): void {
    this.initCountries();
    this.initSelectedCountry();
  }

  private initCountries(): void {
    if (this.supportedCountries.length) {
      this._supportedCountries = this.countryCodeData.allCountries.filter(c => this.supportedCountries.includes(c[1].toString().toUpperCase())).map(c => ({
        name: c[0].toString(),
        iso2: c[1].toString().toUpperCase(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: c[4] as string[] || undefined,
        flagClass: c[1].toString().toUpperCase(),
      }))
    } else {
      this._supportedCountries = this.countryCodeData.allCountries.map(
        c => ({
          name: c[0].toString(),
          iso2: c[1].toString().toUpperCase(),
          dialCode: c[2].toString(),
          priority: +c[3] || 0,
          areaCodes: c[4] as string[] || undefined,
          flagClass: c[1].toString().toUpperCase(),
        })
      )
    }

    console.log(this.preferredCountries)

    //put prefered countries on top
    if (this.preferredCountries.length) {
      this._preferredCountries = this._supportedCountries.filter(c => this.preferredCountries.includes(c.iso2));
      
      this._supportedCountries = this._supportedCountries.filter(c => !this.preferredCountries.includes(c.iso2));
      this._supportedCountries = this._preferredCountries.concat(this._supportedCountries);
    }
  }

  private initSelectedCountry() {
    let country;

    // If an existing number is present, we use it to determine selectedCountry
    if (this.numberInstance && this.numberInstance.country) {
      country = this._supportedCountries.find(c => c.iso2 === this.numberInstance.country);
    } else {
      country = this._supportedCountries[0];
    }
    this.selectedCountry = country;

  }

}
