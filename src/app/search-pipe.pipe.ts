import { Pipe, PipeTransform } from '@angular/core';
import { Index } from './setup/setup.component';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(indices: Array<Index>, searchTerm: string): any {
    if (searchTerm)
      return indices.filter(index => (index.name.toLowerCase()).startsWith(searchTerm))
    else
      return indices;
  }

}
