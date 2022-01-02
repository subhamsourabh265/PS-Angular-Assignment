import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value && value.length) {
      let arr = []
      switch(args[0]) {
        case 'asc':
          arr = value.sort((a: any,b: any) => {
            if (a[args[1]] < b[args[1]]){
              return -1;
            }
            if (a[args[1]] > b[args[1]]) {
              return 1;
            }
            return 0;
          });
          return arr;
        case 'desc':
          arr = value.sort((a: any,b: any) => {
            if (a[args[1]] > b[args[1]]){
              return -1;
            }
            if (a[args[1]] < b[args[1]]) {
              return 1;
            }
            return 0;
          });
          return arr;
        case 'reset':
          return args[2];
        default:
          return args[2];

      }
    }
    return args[2];
  }

}
