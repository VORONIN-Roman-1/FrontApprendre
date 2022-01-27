import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap'
})
export class CapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let cap= value.substring(0, 1).toUpperCase();
    return cap + value.substring(1).toUpperCase();
  }

}
