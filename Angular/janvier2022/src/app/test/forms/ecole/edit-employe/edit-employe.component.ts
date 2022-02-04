import { Component, OnInit } from '@angular/core';
import { Employe } from './Employe';

@Component({
  selector: 'app-edit-employe',
  template: ` <h2 class="header center">Editer object {{ employe?.name }}</h2>
<h2>Editer prim {{ name }} </h2>
<employe-form [employe]="employe" [name]="name"></employe-form> ` 

})

export class EditEmployeComponent implements OnInit {
  employe: Employe = null;
  constructor() { }
  name="Hugo"
  ngOnInit(): void {
    this.employe = {
      
      "name": "Dupont",
      "age":24
    };
  }

}
