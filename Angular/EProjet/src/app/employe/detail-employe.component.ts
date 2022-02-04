import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from './Employe';
import { EmployeService } from './employe.service';

@Component({
  selector: 'app-detail-employe',
  templateUrl: './detail-employe.component.html',
})
export class DetailEmployeComponent implements OnInit {
  employes: Employe[] = null;
  employe: Employe = null;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeService: EmployeService) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.employeService.getEmploye(id)
      .subscribe(employe => this.employe = employe);
  }
  goBack(): void {
    this.router.navigate(['/employes']);
  }
  goEdit(employe: Employe): void {
    let link = ['/employe/edit', employe.id];
    this.router.navigate(link);
  }
  delete(employe: Employe) : void {
    this.employeService.deleteEmploye(employe)
    .subscribe(_ => this.goBack());
    }
}