import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeRoleColor'
})
export class EmployeRoleColorPipe implements PipeTransform {

  transform(role: string): string {
    let color: string;
    switch (role) {
      case 'chef de projet':
        color = 'blue lighten-1';
        break;
      case 'architect':
        color = 'deep-purple darken-2';
        break;
      case 'dev':
        color = 'green lighten-1';
        break;
      case 'business analyst':
        color = 'red lighten-1';
        break;
      case 'testeur':
        color = 'deep-orange';
        break;
      case 'alternant':
        color = 'grey lighten-3';
        break;
      default:
        color = 'lime accent-1';
        break;
    }
    return "chip " + color;
  }
}
