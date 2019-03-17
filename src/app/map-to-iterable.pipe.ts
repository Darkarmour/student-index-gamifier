import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(map: Object): any[] {
    let iterable = [];
    for (let key in map) {
      if (map.hasOwnProperty(key)) {
        let item = map[key];
        item.id = key;
        iterable.push(item);
      }
    }
    return iterable;
  }

}
