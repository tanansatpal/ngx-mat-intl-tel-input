import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // country | search:'searchCriteria'
  transform(country: any, searchCriteria?: any): any {
    if (!searchCriteria || searchCriteria === '') {
      return true;
    }

    return country.toLowerCase().includes(searchCriteria.toLowerCase());
  }

}
