import { Pipe, PipeTransform } from '@angular/core';

import { Country } from './model/country.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // country | search:'searchCriteria'
  transform(country: Country, searchCriteria?: string): boolean {
    if (!searchCriteria || searchCriteria === '') {
      return true;
    }

    return `${country.name}+${country.dialCode}`
      .toLowerCase()
      .includes(
        searchCriteria.toLowerCase()
      );
  }

}
