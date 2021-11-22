import { Pipe, PipeTransform } from '@angular/core';
import { Dragon } from '../model/Dragon';

@Pipe({
  name: 'dragonSize'
})
export class DragonSizePipe implements PipeTransform {

  private dragonSizes = ['Minuscule dragon', 'Petit dragon', 'Dragon de taille moyenne', 'Grand dragon', 'Dragon gigantesque'];

  transform(dragon: Dragon): string {
    if (dragon.size >= 100) {
      return this.dragonSizes[4];
    }

    const sizeIndex = Math.floor(dragon.size / 20);
    return `${this.dragonSizes[sizeIndex]} (${dragon.size}m)`;
  }

}
