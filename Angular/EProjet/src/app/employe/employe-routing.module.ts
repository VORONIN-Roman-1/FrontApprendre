import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeComponent } from './list-employe.component';
import { DetailEmployeComponent } from './detail-employe.component';
import { EditEmployeComponent } from './edit-employe.component';
import { AuthGuard } from '../auth-guard.service';
// les routes du module Employe
const employesRoutes: Routes = [{
    path: 'employe',
    canActivate: [AuthGuard],
    children: [
        { path: 'all', component: ListEmployeComponent },
        {
            path: 'edit/:id', component: EditEmployeComponent,
            canActivate: [AuthGuard]
        },
        { path: ':id', component: DetailEmployeComponent }
    ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(employesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeRoutingModule { }