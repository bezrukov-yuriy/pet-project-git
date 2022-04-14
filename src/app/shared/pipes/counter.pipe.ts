import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: string | number): string {
    const valueAsNumber = +value;
    if (typeof valueAsNumber !== 'number' || isNaN(valueAsNumber)) {
      return value.toString();
    }
    return valueAsNumber > 1000 ? `${(valueAsNumber/1000).toFixed(2)}k` : `${valueAsNumber}`;
  }

}
