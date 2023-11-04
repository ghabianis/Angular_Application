import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractChar'
})
export class ExtractCharPipe implements PipeTransform {

  transform(value: string): any {
    if (value.length < 2){
      const response = 'value is less the 2 characters'
      return response
    }else {
      return value.substring(0,2)
      // for (let index = 0; index < value.length; index++) {
      //   const element1 = value[0];
      //   const element2 = value[1];
      //   const response = element1 + element2
      //   return response;
      // }
    }
    }


}
