import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../../classes/photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = this.formatQuery(descriptionQuery);
    if (descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }

  private formatQuery(query: string): string {
    query = query
      .trim()
      .toLowerCase();
    return query;
  }

}
