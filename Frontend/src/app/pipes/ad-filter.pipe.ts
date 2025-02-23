import { Pipe, PipeTransform } from '@angular/core';
import { Ad } from '../interfaces/interfaces';

@Pipe({
  name: 'adFilter',
  standalone: true
})
export class AdFilterPipe implements PipeTransform {
  transform(ads: Ad[], filterText: string){
    if (ads.length == 0 || filterText == "") return ads;

    return ads.filter((ad) => {
      return ad.title.toLowerCase().includes(filterText.toLowerCase()) || ad.category.toLowerCase().includes(filterText.toLowerCase());
    })
  }
}
