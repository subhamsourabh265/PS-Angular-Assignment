import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(value && value.length){
      if(args[1] > 0){
        const filteredData = value.filter((m: any) => m.price >= args[0] && m.price <= args[1]);
        return filteredData;
      }   
      return value;   
    }
    return null;
  }

}
