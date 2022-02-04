import { Injectable } from '@angular/core';
import { Employe } from './Employe';
import { EmployeModule } from './employe.module';
import { EMPLOYES } from './EMPLOYES';

@Injectable(
  // {
  //   providedIn: EmployeModule
  // }
)
export class EmployeService {

  // Retourne tous les employes
  getEmployes(): Employe[] {
    return EMPLOYES;
  }
  // Retourne un employe avec l'identifiant passé en paramètre
  getEmploye(id: number): Employe {
    let employes = this.getEmployes();
    for (let index = 0; index < employes.length; index++) {
      if (id === employes[index].id) {
        return employes[index];
      }
    }
  }
  getEmployeRoles(): string[] {
    return ['architect','dev','testeur','business_analyst','chef_de_projet',
    'alternant'];
    }
}
