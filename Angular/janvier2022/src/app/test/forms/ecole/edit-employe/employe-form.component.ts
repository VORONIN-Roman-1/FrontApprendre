import { Component, Input} from '@angular/core';
import { Employe } from './employe';
@Component({
    selector: 'employe-form',
    templateUrl: './employe-form.component.html',

})
export class EmployeFormComponent  {
    @Input() employe: Employe; // propriété d'entrée du composant
    @Input() name:string;
}