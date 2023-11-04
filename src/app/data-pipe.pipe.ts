import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majuscules'
})
export class DataPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
    }

}
