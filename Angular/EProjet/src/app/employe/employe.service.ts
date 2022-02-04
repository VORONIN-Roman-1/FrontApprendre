import { Injectable } from '@angular/core';
import { Employe } from './Employe';
import { EMPLOYES } from './EMPLOYES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // RxJS 6, à utiliser
import { catchError, map, tap } from 'rxjs/operators';

@Injectable(
  // {
  //   providedIn: EmployeModule
  // }
)
export class EmployeService {
  constructor(private http: HttpClient) { }
  private employesUrl = 'api/employes';
  // Retourne tous les employes
  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.employesUrl).pipe(
      tap(_ => this.log(`fetched employes`)),
      catchError(this.handleError(`getEmployes`, []))
    )
  }
  // Retourne un employe avec l'identifiant passé en paramètre
  getEmploye(id: number): Observable<Employe> {
    const url = `${this.employesUrl}/${id}`;
    return this.http.get<Employe>(url).pipe(
      tap(_ => this.log(`fetched employe id=${id}`)),
      catchError(this.handleError<Employe>(`getEmploye id=${id}`))
    );
  }
  getEmployeRoles(): string[] {
    return ['architect', 'dev', 'testeur', 'business_analyst', 'chef_de_projet',
      'alternant'];
  }
  updateEmploye(employe: Employe): Observable<Employe> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':
          'application/json'
      })
    };
    return this.http.put(this.employesUrl, employe, httpOptions).pipe(
      tap(_ => this.log(`updated employe id=${employe.id}`)),
      catchError(this.handleError<any>('updatedEmploye'))
    );
  }
  deleteEmploye(employe: Employe): Observable<Employe> {
    const url = `${this.employesUrl}/${employe.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<Employe>(url, httpOptions).pipe(
      tap(_ => this.log(`delete employe id=${employe.id}`)),
      catchError(this.handleError<Employe>('deleteEmploye'))
    )
  }
  searchEmployes(term: string): Observable<Employe[]>{
    if(!term.trim()){
    return of([]);
    }
    return this.http.get<Employe[]>(`${this.employesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found employes matching "${term}"` )),
    catchError(this.handleError<Employe[]>('searchEmployes', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  private log(log: string) {
    console.info(log);
  }
}
