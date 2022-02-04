import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeComponent } from './list-employe.component';
import { DetailEmployeComponent } from './detail-employe.component';
import { EditEmployeComponent } from './edit-employe.component';
// les routes du module Employe
const employesRoutes: Routes = [
{ path: 'employes', component: ListEmployeComponent },
{ path: 'employe/edit/:id', component: EditEmployeComponent },
{ path: 'employe/:id', component: DetailEmployeComponent }
];
@NgModule({
imports: [
RouterModule.forChild(employesRoutes)
],
exports: [
RouterModule
]
})
export class EmployeRoutingModule { }