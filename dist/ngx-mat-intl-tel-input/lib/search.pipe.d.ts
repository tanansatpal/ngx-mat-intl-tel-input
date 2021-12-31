import { PipeTransform } from '@angular/core';
import { Country } from './model/country.model';
import * as i0 from "@angular/core";
export declare class SearchPipe implements PipeTransform {
    transform(country: Country, searchCriteria?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SearchPipe, "search">;
}
//# sourceMappingURL=search.pipe.d.ts.map