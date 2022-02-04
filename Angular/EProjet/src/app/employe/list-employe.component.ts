import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from './Employe';
import { EmployeService } from './employe.service';

@Component({
  selector: 'list-employe',
  templateUrl: './list-employe.component.html',
  
})
export class ListEmployeComponent implements OnInit {
  employes: Employe[];
  constructor(private router: Router, private employeService: EmployeService){}
  ngOnInit() {
    this.employes= this.employeService.getEmployes();
  }
  selectEmploye(employe : Employe){
    //alert("vous avez cliqué sur l'employé : "+employe.name)
    let link = ['/employe', employe.id];
    this.router.navigate(link);
    }
}
