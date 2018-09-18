import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../model/service';

@Pipe({
    name: 'categoryFilter',
    pure: false
})
export class ServicePipe implements PipeTransform {
    transform(items: Service[], filter: String): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.category == filter);
    }
}