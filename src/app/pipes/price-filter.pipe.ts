import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: Array<string>, args: any[] , propName: string): any {
    const resultArray = [];

    const from = args[0]? args[0] : 0;
    const to = args[1]? args[1] : 999999999;

    if (value.length === 0 ) {
      return value
    }

    for (const item of value){
      if (item[propName] <= to && item[propName] >= from ) {
        resultArray.push(item);
      }
    }

    return resultArray
  }

}
