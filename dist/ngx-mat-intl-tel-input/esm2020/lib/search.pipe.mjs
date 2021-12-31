import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    // country | search:'searchCriteria'
    transform(country, searchCriteria) {
        if (!searchCriteria || searchCriteria === '') {
            return true;
        }
        return `${country.name}+${country.dialCode}`
            .toLowerCase()
            .includes(searchCriteria.toLowerCase());
    }
}
SearchPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SearchPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, name: "search" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'search'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWludGwtdGVsLWlucHV0L3NyYy9saWIvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxVQUFVO0lBRXJCLG9DQUFvQztJQUNwQyxTQUFTLENBQUMsT0FBZ0IsRUFBRSxjQUF1QjtRQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsS0FBSyxFQUFFLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDekMsV0FBVyxFQUFFO2FBQ2IsUUFBUSxDQUNQLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FDN0IsQ0FBQztJQUNOLENBQUM7O3VHQWJVLFVBQVU7cUdBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUh0QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NlYXJjaCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgLy8gY291bnRyeSB8IHNlYXJjaDonc2VhcmNoQ3JpdGVyaWEnXHJcbiAgdHJhbnNmb3JtKGNvdW50cnk6IENvdW50cnksIHNlYXJjaENyaXRlcmlhPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXNlYXJjaENyaXRlcmlhIHx8IHNlYXJjaENyaXRlcmlhID09PSAnJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7Y291bnRyeS5uYW1lfSske2NvdW50cnkuZGlhbENvZGV9YFxyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAuaW5jbHVkZXMoXHJcbiAgICAgICAgc2VhcmNoQ3JpdGVyaWEudG9Mb3dlckNhc2UoKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19