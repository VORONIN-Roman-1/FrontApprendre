import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from './employe.service';
import { Employe } from './employe';
@Component({
    selector: 'employe-form',
    templateUrl: './employe-form.component.html',
    styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {
    @Input() employe: Employe; // propriété d'entrée du composant
    roles: Array<string>; // roles disponibles pour un employe : 'architect', 'dev',...etc
    constructor(private employeService: EmployeService,
        private router: Router) { }
    ngOnInit() {
        // Initialisation de la propriété roles
        this.roles = this.employeService.getEmployeRoles();
    }
    // Détermine si le type passé en paramètres appartient ou non à l'employe en cours d'édition.
    hasRole(role: string): boolean {
        let index = this.employe.roles.indexOf(role);
        if (index > -1) return true;
        return false;
    }
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un role à l'employe en cours d'édition.
    selectRole($event: any, role: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.employe.roles.push(role);
        } else {
            let index = this.employe.roles.indexOf(role);
            if (index > -1) {
                this.employe.roles.splice(index, 1);
            }
        }
    }

    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        console.log("Submit form !");
        this.employeService.updateEmploye(this.employe)
            .subscribe(() => this.goBack());
    } 
    goBack(): void {
        let link = ['/employe', this.employe.id];
        this.router.navigate(link);
    }

    // Valide le nombre de roles pour chaque employe
    isRolesValid(role: string): boolean {
        if (this.employe.roles.length === 1 && this.hasRole(role)) {
            return false;
        }
        if (this.employe.roles.length >= 3 && !this.hasRole(role)) {
            return false;
        }
        return true;
    }
}