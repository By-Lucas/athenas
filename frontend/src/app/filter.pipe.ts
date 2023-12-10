import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(peoples: any[], searchValue: string): any[] {
    if (!peoples || !searchValue) {
      return peoples;
    }
    return peoples.filter(person =>
      person.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.cpf.includes(searchValue)
    );
  }

}