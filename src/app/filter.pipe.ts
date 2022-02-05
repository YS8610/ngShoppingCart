import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: {name:string, count:number}[], countno:number): {name:string, count:number}[] {
    if (value.length<0){
      return value;
    }
    let filteredValue : {name:string, count:number}[] = [];
    for (const item of value){
      if (item.count>=countno){
        filteredValue.push(item);
      }
    }
    return filteredValue;
  }
}
// ng generate pipe filter --skip-tests
// ng g p filter --skip-tests
