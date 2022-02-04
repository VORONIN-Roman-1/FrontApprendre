import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import { EmployeService } from './employe.service';
import { Employe } from './employe';
@Component({
    selector: 'employe-search',
    templateUrl: './search-employe.component.html'
})
export class EmployeSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    employes$: Observable<Employe[]>;
    constructor(private employeService: EmployeService,
        private router: Router) { }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.employes$ = this.searchTerms.pipe(debounceTime(300),
            // ignorer la recherche en cours si c'est la même que la précédente
            distinctUntilChanged(),
            // on retourne la liste des résultats correpsondant aux termes de la recherche
            switchMap((term: string) => this.employeService.searchEmployes(term)));
    }
    gotoDetail(employe: Employe): void {
        let link = ['/employe', employe.id];
        this.router.navigate(link);
    }
}