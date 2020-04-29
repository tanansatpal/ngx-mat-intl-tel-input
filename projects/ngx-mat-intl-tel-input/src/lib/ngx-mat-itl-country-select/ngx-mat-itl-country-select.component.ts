import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Country } from '../model/country.model';
import { CountryCode } from '../data/country-code';


@Component({
  selector: 'lib-ngx-mat-itl-country-select',
  templateUrl: './ngx-mat-itl-country-select.component.html',
  styleUrls: ['./ngx-mat-itl-country-select.component.css'],
  providers: [CountryCode]
})
export class NgxMatItlCountrySelectComponent implements OnInit {
  @Input()
  get selectedCountry() {
    return this._selectedCountry;
  }
  set selectedCountry(country: Country | string) {
    this._selectedCountry = typeof (country) === "string" ? this.allCountries.find(c => c.iso2 === countryCode.toLowerCase()) : country;
    this.countryChanged.emit(this._selectedCountry);
  }
  _selectedCountry: Country;
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  searchCriteria: string;


  @Input() countrySelectionDisabled: boolean = false;
  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() onlyCountries: Array<string> = [];
  @Input() enableSearch = this.onlyCountries.length < 10 ? false : true;

  @Output() countryChanged: EventEmitter<Country> = new EventEmitter<Country>();
  constructor(private countryCodeData: CountryCode) { this.fetchCountryData(); }

  ngOnInit(): void {
    this.initCountryDropdown();
    this.initSelectedCountry();
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
        country.placeHolder = NgxMatItlCountrySelectComponent.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
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
    this.selectedCountry = country;

  }
  static getPhoneNumberPlaceHolder(countryISOCode: any): string {
    try {
      return getExampleNumber(countryISOCode, Examples).number.toString();
    } catch (e) {
      return e;
    }
  }
}
