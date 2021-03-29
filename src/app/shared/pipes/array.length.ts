import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, isObservable } from 'rxjs';

@Pipe({ name: 'length' })
export class ArrayLength implements PipeTransform {
  transform(array: any[]): number {
    if (array === undefined || array === null) {
      return 0;
    }

    return array.length;
  }
}
