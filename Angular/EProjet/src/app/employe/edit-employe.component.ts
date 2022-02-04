import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employe } from './employe';
import { EmployeService } from './employe.service';
@Component({
    selector: 'edit-employe',
    template: ` <h2 class="header center">Editer {{ employe?.name }}</h2>
<p class="center">
<img *ngIf="employe" [src]="employe.picture"/>
</p>
<employe-form [employe]="employe"></employe-form> `,
    providers: [EmployeService]
})
export class EditEmployeComponent implements OnInit {
    employe: Employe = null;
    constructor(private route: ActivatedRoute, private employeService: EmployeService) { }
    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.employeService.getEmploye(id)
        .subscribe(employe => this.employe = employe);
        }
}