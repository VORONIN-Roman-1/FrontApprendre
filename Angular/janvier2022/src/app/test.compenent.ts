import { Employee } from './employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  personnage: any = { age: 42, name: "Ivan", id: 6};
  title = 'janvier2022';
  books = ["Alice", "how trouver", "documentation"];

  employee: Employee = { id: 1, role: "manager", firstname: "robert", lastname: "Martiny" };
  color: string = 'red';
  localPath: string = "assets/images/angular_logo.png";
  isSpecial: boolean = false;

  show(i?) {
    if (i)
      return "Show me " + i;
    return "RIEN";
  }
  valueTS: string = '';
  onKey(event: KeyboardEvent) {
    this.valueTS = 'Bonjour ' + (<HTMLInputElement>event.target).value;
  }
  onKey2(value: string) {
    this.valueTS = 'Bonjour ' + value;
  }
  entry: string = '';
  onBlur(value: string) {
    this.entry = 'Blur =' + value;
  }

  }
